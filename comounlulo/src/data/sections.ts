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

export const SECCIONES = TODAS_LAS_SECCIONES.filter(
  ([id]) => MOSTRAR_FUNDADORES || id !== "fundadores",
);
