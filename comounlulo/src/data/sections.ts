// Interruptor para ocultar la sección de fundadores (y su ítem de nav) sin
// borrar el contenido. Cambiar a `false` la oculta en todo el sitio.
export const MOSTRAR_FUNDADORES = true;

const TODAS_LAS_SECCIONES = [
  ["inicio", "Inicio"],
  ["lulo", "Por qué el lulo"],
  ["manifiesto", "Verse como un lulo"],
  ["fundadores", "Fundadores"],
  ["cocina", "Cocina"],
  ["belleza", "Belleza"],
  ["bienestar", "Bienestar"],
  ["tienda", "Tienda"],
] as const;

// Todas las secciones que existen en la página (usado por el footer).
export const SECCIONES = TODAS_LAS_SECCIONES.filter(
  ([id]) => MOSTRAR_FUNDADORES || id !== "fundadores",
);

// Subconjunto para el menú de arriba (header + panel móvil). Cocina, Belleza
// y Bienestar ya tienen su propio acceso directo en "Una fruta. Tres formas
// de descubrirla." (TresCaminos), y Fundadores se abre desde el botón del
// Manifiesto ("Conócenos, nuestra historia completa"), así que no se repiten
// aquí arriba.
const OCULTAR_DEL_MENU = new Set(["fundadores", "cocina", "belleza", "bienestar"]);
export const NAV_SECCIONES = SECCIONES.filter(([id]) => !OCULTAR_DEL_MENU.has(id));
