# UI kit — Comounlulo.co (sitio de una pantalla)

Recreación navegable del sitio según el brief de contenido: **una sola página con scroll y seis secciones ancladas**. Abrir `index.html`.

| Sección | Ancla | Archivo | Qué hace |
| --- | --- | --- | --- |
| 1. Inicio | `#inicio` | `Historia.jsx` | Titular con la promesa, foto del lulo partido, CTA directo a la tienda |
| 2. Por qué el lulo | `#lulo` | `Historia.jsx` | Cuatro datos culturales y botánicos + nota de "información general" |
| 3. Verse como un lulo | `#manifiesto` | `Historia.jsx` | Manifiesto en primera persona sobre gradiente cáscara→pulpa |
| 4. Tips de salud | `#tips` | `Contenidos.jsx` | Seis tarjetas filtrables por categoría, lenguaje de hábito |
| 5. Recetas con lulo | `#recetas` | `Contenidos.jsx` | Tres recetas expandibles: ingredientes, preparación, nota nutricional general |
| 6. Tienda | `#tienda` | `Tienda.jsx` | Un solo SKU (botella inteligente 600 ml), color, cantidad, bolsa y confirmación |

`Shared.jsx` trae `Nav` (barra fija con velo + sección activa), `Footer` (con el descargo), `Wordmark` (el nombre con la o final como lulo), `SectionHead` y `Photo`. `App.jsx` arma la página, la bolsa y los toasts.

## Reglas de contenido aplicadas

- **Cero lenguaje médico.** No aparecen "cura", "elimina", "trata", "combate" ni "anti". Las secciones 2, 4 y 5 llevan nota de contenido informativo, y el pie repite el descargo.
- **Sección 3 en primera persona**, como manifiesto corto, no como texto corporativo.
- **Tienda con un solo SKU** — la botella inteligente de 600 ml, la referencia con proveedor confirmado. Las demás gamas se anuncian como pendientes en una tarjeta, sin precio ni botón.
- El párrafo del producto conecta explícitamente con la sección 3 ("restaurar no es un evento; es acordarse todos los días").

## Advertencias

- **Fotografía: huecos que se llenan arrastrando.** Cada imagen es un `<Photo>` montado sobre `<image-slot>`: arrastra un archivo (o haz clic para buscarlo) y la foto queda guardada entre recargas, con recorte ajustable (doble clic para reencuadrar). Mientras esté vacío, el hueco describe la toma que falta. No se generó ni se descargó ninguna imagen.
- Precios, especificaciones de la botella y ciudades de envío son de muestra, escritos en el tono de la marca; hay que reemplazarlos por los datos reales del proveedor.
