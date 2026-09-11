export interface WaitlistPayload {
  correo: string;
  color: string;
}

/**
 * TODO: sin proveedor de lista de correo conectado todavía (Mailchimp,
 * MailerLite u otro similar). Cuando exista la cuenta, esta función debe
 * enviar el registro al formulario/API real de ese proveedor — mismo patrón
 * que src/lib/checkout.ts usaba para la pasarela de pago mientras esa
 * decisión seguía pendiente. Por ahora solo registra el intento y simula
 * una confirmación, para no fabricar una integración que no existe.
 */
export async function anotarseEnListaDeEspera(
  payload: WaitlistPayload,
): Promise<{ ok: true }> {
  // TODO: reemplazar esta simulación por el envío real al proveedor de correo.
  console.info("[lista-de-espera] Registro simulado (sin proveedor real):", payload);
  return { ok: true };
}
