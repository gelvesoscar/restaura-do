export interface WaitlistPayload {
  correo: string;
}

// Formulario real en MailerLite: "Lista de espera - Botella"
// (cuenta 2630126, formulario 198329054637589821, grupo "Lista de espera").
// El envío no puede hacerse con fetch() porque el endpoint es JSONP y no
// admite CORS desde este dominio — por eso se usa un <form> real apuntando
// a un <iframe> oculto, el mismo mecanismo que usa el snippet propio de
// MailerLite (que apunta con target="_blank" en vez de fetch).
const MAILERLITE_ACTION =
  "https://assets.mailerlite.com/jsonp/2630126/forms/198329054637589821/subscribe";

export async function anotarseEnListaDeEspera(
  payload: WaitlistPayload,
): Promise<{ ok: true }> {
  return new Promise((resolve) => {
    const iframeName = `ml-submit-${Date.now()}`;
    const iframe = document.createElement("iframe");
    iframe.name = iframeName;
    iframe.style.display = "none";
    document.body.appendChild(iframe);

    const form = document.createElement("form");
    form.action = MAILERLITE_ACTION;
    form.method = "POST";
    form.target = iframeName;
    form.style.display = "none";

    const addField = (name: string, value: string) => {
      const input = document.createElement("input");
      input.type = "hidden";
      input.name = name;
      input.value = value;
      form.appendChild(input);
    };

    addField("fields[email]", payload.correo);
    addField("ml-submit", "1");
    addField("anticsrf", "true");

    document.body.appendChild(form);
    form.submit();

    // Se limpia despues de dar tiempo a que el iframe reciba la respuesta;
    // no hay forma de leer esa respuesta (JSONP cross-origin), asi que la
    // promesa se resuelve por tiempo, no por confirmacion real del servidor.
    window.setTimeout(() => {
      form.remove();
      iframe.remove();
      resolve({ ok: true });
    }, 600);
  });
}
