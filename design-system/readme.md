# Comounlulo.co — Design System

**Comounlulo.co** ("como un lulo") es una marca colombiana de salud y medicina regenerativa: suplementos de **lulo entero** para vitalidad, longevidad y "verse/sentirse bien" sin procedimientos invasivos. El lulo — cáscara naranja, pulpa verde intensa — es la metáfora central: **la transformación pasa por dentro**.

- **Promesa:** vitalidad que se nota por fuera, porque se cuida por dentro.
- **Territorio:** antiaging, salud preventiva, biohacking accesible, renovación desde adentro. No "combatir el envejecimiento": **restaurar lo que ya estaba ahí**.
- **Audiencia:** adultos colombianos, hombres y mujeres, con interés activo en salud preventiva y longevidad; buscan rutinas simples con base científica, no promesas mágicas.
- **Personalidad:** cálida, no clínica. Segura, no exagerada. Natural, no "hippie". Con base científica, explicada en lenguaje humano.

## Fuentes usadas

| Fuente | Estado |
| --- | --- |
| Brief de marca Comounlulo.co (pegado en el chat: nombre, territorio, promesa, audiencia, personalidad, paleta sugerida, dirección tipográfica, dirección de logo, aplicaciones, mood) | **Única fuente.** Todo este sistema se derivó de ese texto. |
| Código / repositorio | No entregado. |
| Figma / .fig | No entregado. |
| Logo, fotografía, archivos de fuente, decks | **No entregados.** El logo fue **diseñado en este proyecto por encargo explícito del usuario** (ver LOGO); fotografía y fuentes siguen pendientes. |

Sin código ni Figma, este sistema es una **primera propuesta de identidad ejecutable**, no una recreación de algo existente. Todo valor concreto (escalas, radios, sombras, tokens) es una decisión de diseño abierta a corrección.

## Relación con restaura.do

Comounlulo.co convive en el repositorio `gelvesoscar/restaura-do` con **restaura.do / oscargelves.com**, otra marca del mismo dueño (consultoría comercial, identidad “Maestro Restaurador”). Son **marcas distintas**: paleta, tipografía, símbolo y estructura de sitio son propios de cada una y no se mezclan. Lo único compartido es el principio de fondo, y su redacción canónica vive en el repo: *“Nadie necesita reinventarse. Necesita recordar.”* — así se cita también en el manifiesto de Comounlulo. Detalle de convivencia y reglas en `AGENTS.md` y `github.md`.

## Vacíos y sustituciones (leer antes de usar)

1. **El logo es una propuesta original creada aquí**, siguiendo la dirección del brief ("fruta partida a la mitad"). No venía de ninguna fuente: es diseño nuevo y por lo tanto lo más abierto a iteración de todo el sistema. Ver LOGO.
2. **No hay archivos de fuente.** Sustitución desde Google Fonts, la más cercana a la dirección del brief:
   - Serif humanista cálida → **Newsreader** (titulares, wordmark, cifras editoriales).
   - Sans limpia y legible → **DM Sans** (cuerpo, UI, etiquetas, empaque).
   Se cargan por CDN de Google Fonts en `tokens/fonts.css`. **Si la marca licencia otras fuentes, envíalas y reemplazo el archivo.**
3. **No hay fotografía.** Cada imagen en el UI kit es un placeholder `<Photo>` **etiquetado con la toma que falta** (lulo partido, frasco, mercado campesino). No se generó imagen alguna.
4. **Iconos sustituidos:** **Lucide** por CDN (ver ICONOGRAFÍA).

---

## LOGO

**Símbolo — el lulo en mitades (ruta C, elegida).** Un círculo partido a plomo por una franja crema de 2.2 u: la mitad izquierda es **cáscara** (`--orange-400`), con un arco crema a 4.5 u del borde que marca el grosor del corte; la mitad derecha es **pulpa** (`--green-300`) con tres semillas en crema. Es la fruta abierta: afuera y adentro en el mismo plano. La cáscara siempre entra por la izquierda; el corte siempre vertical.

**Archivos** (`assets/`):
- `logo-lulo.svg` — full color, uso por defecto sobre crema.
- `logo-lulo-min.svg` — **versión mínima** sin semillas ni arco de cáscara, para 22 px o menos (favicon, sellos, bordado).
- `logo-lulo-ink.svg` — tinta `--ink-900` con separación en crema; grabado, facturas, una sola tinta.
- `logo-lulo-cream.svg` — crema con pulpa en negativo; sobre naranja, tinta o fotografía.
- `logo-semilla.svg` — archivado en `assets/opciones/`: gota/semilla con degradado, exploración de la ruta A. **No se usa**; la única marca autorizada para tamaños mínimos es `logo-lulo-min.svg`.

**Rutas archivadas** (`assets/opciones/`, comparadas en `brand/logo-opciones.card.html`): `logo-corona.svg` (A, pulpa concéntrica con semillas en corona), `logo-gajos.svg` (B, pulpa en segmentos), `logo-monograma.svg` (D, "c" abierta con la pulpa al centro), `logo-semilla.svg` (gota con degradado), y la exploración de pulpa contenida: `logo-pulpa-tangente.svg`, `logo-pulpa-contenida.svg`, `logo-pulpa-sin-corte.svg` (ver `brand/logo-pulpa-dentro.card.html`).

**Construcción y lockups:** `brand/logo-construccion.card.html` (retícula de 60 u sobre 64, corte de 2.2 u, semillas de 3 × 2 u a −28°/0°/28°) y `brand/logo-lockups.card.html` (horizontal, vertical, compacto, avatar, mínimo).

**Firma de marca.** El símbolo va **siempre aparte del nombre**, nunca dentro de una letra: alto del símbolo = **1.6 × la altura de mayúscula** del wordmark, separación = **0.45 × el cuerpo del texto**. Por debajo de 30 px de símbolo se usa el símbolo solo o el wordmark solo, nunca la firma completa apretada. Ver `brand/wordmark-lulo.card.html`.

**Lockup.** Símbolo + wordmark `comounlulo.co` en Newsreader 500, minúsculas, tracking −0.015em, sufijo `.co` en naranja. Horizontal por defecto (símbolo a la izquierda, altura x del wordmark ≈ 55% del diámetro del símbolo); vertical centrado para etiqueta y avatar.

**Aire y mínimos.** Aire libre alrededor del símbolo = la mitad de su diámetro. Con semillas hasta 22 px; por debajo, `logo-lulo-min.svg`. Lockup horizontal mínimo: 120 px de ancho.

**Nunca:** rotar o inclinar el corte, invertir las mitades, cambiar el verde de la pulpa, mover las semillas a la cáscara, añadir sombra o contorno, encerrarlo en cuadrado o rombo, ponerlo sobre fotografía sin la versión crema, ni acompañarlo de iconos médicos (cruz, cápsula, ADN).

---

## CONTENT FUNDAMENTALS

**Idioma:** español de Colombia, neutro y sin regionalismos fuertes. Nunca inglés decorativo ("boost", "glow up", "anti-aging").

**Persona y trato:** habla en **tú** ("tu rutina", "te enviamos"). La marca se refiere a sí misma en **nosotros** solo cuando hay una acción real ("deshidratamos la fruta a baja temperatura"). Nunca "usted" (distancia clínica), nunca "yo".

**Casing:** sentence case en todo — titulares, botones, etiquetas de campo. **MAYÚSCULAS solo** en el eyebrow (`.eyebrow`, tracking 0.14em) y en microetiquetas de empaque. El wordmark siempre en minúsculas.

**Puntuación:** punto final en párrafos; **sin signos de exclamación** (la marca es segura, no entusiasta). Comillas tipográficas “ ”. Los números en formato colombiano: `$118.000`.

**Léxico**
- **Sí:** restaurar, vitalidad, origen, regenerar, frescura, cuerpo, ciencia, sencillez, adentro hacia afuera, rutina, constancia.
- **No:** combatir, anti, guerra, milagro, rápido, agresivo, detox, "fórmula secreta", "resultados garantizados".

**Estructura de un titular:** afirmación corta con contraste interno, dos frases o una línea partida.
- ✅ "No hay que reinventarse. Hay que restaurarse."
- ✅ "Lo que se restaura no cambia tu forma: devuelve tu energía."
- ❌ "¡Combate los signos del envejecimiento hoy!"

**Cuerpo:** frases de 12–22 palabras, una idea por frase. La ciencia se nombra y se traduce en la misma oración: "La vitamina C no es un adorno: es cofactor obligatorio en la síntesis de colágeno."

**Botones:** verbo en infinitivo o primera persona, 2–4 palabras. "Empezar mi rutina", "Ver ingredientes", "Agregar a mi bolsa", "Confirmar pedido". Nunca "¡Compra ya!".

**Honestidad como tono:** la marca dice explícitamente lo que **no** promete ("Este producto no reemplaza una consulta médica", tarjeta "Lo que no vamos a decir"). Esa franqueza es un recurso de copy, no un descargo legal escondido en el pie.

**Emoji:** **no se usan.** Nunca, en ninguna superficie.

---

## VISUAL FOUNDATIONS

**Concepto rector:** cáscara naranja por fuera, pulpa verde por dentro. El naranja **conduce** (marca, CTA, acentos), el verde **regenera** (confirmación, foco, ciencia, naturaleza), la crema **sostiene** todo. Ningún blanco puro, ningún gris azulado, ningún negro puro.

**Color.** Primario naranja lulo `--orange-400 #E8813A` (hover `--orange-500`); acento verde pulpa `--green-400/500`; fondo crema `--cream-100 #FAF6EF`; tinta verde casi negra `--ink-900 #1F2B1A` para todo el texto. Máximo **dos** fondos por vista: crema página + crema tarjeta; la inversa tinta y el gradiente lulo son momentos puntuales (cita, cierre, empaque). Semánticos dentro de la paleta natural: `--signal-good` verde, `--signal-warn` ocre, `--signal-stop` terracota, `--signal-info` verde-azulado apagado — nunca rojo/azul de sistema.

**Tipografía.** Newsreader (serif) para titulares y cifras, peso 400–500, tracking negativo (`-0.02em` en display). DM Sans para cuerpo (17px / 1.62), UI (15px) y microcopy (13px). Nunca serif en botones ni en campos; nunca sans en un titular de sección. Ancho de prosa `--max-prose: 64ch`.

**Espaciado y layout.** Base 4px; escala 4·8·12·16·20·24·32·40·48·64·80·96·128. Contenido a `--max-content: 1160px` centrado, con `--gutter-page: clamp(20px,5vw,64px)`. Secciones con `--section-y: clamp(64px,9vw,128px)`. Grillas de 2 y 3 columnas con `gap` (nunca márgenes por hijo). **Único elemento fijo:** la barra de navegación (sticky, con velo).

**Fondos.** Planos y cálidos por defecto. Sin patrones, sin texturas de ruido, sin grano. Se permiten: (a) fotografía a sangre en editorial, (b) el gradiente `--gradient-lulo` (naranja→verde, 135°) para un solo bloque de cita o cierre, (c) `--gradient-pulpa` en franjas de empaque. **Nada de gradientes azul-violeta.**

**Imagen (dirección fotográfica).** Cálida, luz natural de mediodía nublado, fondos de madera y textil crudo, macro de la fruta partida donde se vea el contraste cáscara/pulpa. Saturación media-alta, temperatura cálida, sin B&N, sin grano añadido, sin sombras duras de estudio. No se entregó ninguna foto: todo aparece como placeholder etiquetado.

**Bordes y esquinas.** Hairline crema `--border-hairline` (1px) en todo lo que sea contenedor; `--border-default` en campos; tinta `--border-strong` solo en énfasis. Radios generosos: 6 (chips/checkbox), 10 (campos), 14 (toast), **20 (tarjetas)**, 28 (diálogos), 40 (bloques grandes), **pill 999 en todos los botones, badges y tags**. Nada de esquinas rectas a 0px.

**Sombras.** Siempre teñidas de tinta verde `rgba(31,43,26,·)`, nunca negro ni gris azulado. `--shadow-xs/sm` para tarjetas en reposo, `--shadow-md` en hover y toasts, `--shadow-lg` en diálogos, `--shadow-brand` (halo naranja) exclusivo del botón primario. `--shadow-inset` da el brillo superior de 1px a los campos. Sin sombras internas duras, sin neumorfismo.

**Tarjetas.** Crema `--surface-card` + hairline 1px + radio 20 + `--shadow-sm` + padding 24. Cuatro tonos: `plain`, `tint` (naranja), `pulpa` (verde), `inverse` (tinta). **Nunca** una tarjeta con borde izquierdo de color.

**Transparencia y blur.** Solo en dos lugares: la barra fija (`--veil` crema al 72% + `--blur-veil: saturate(140%) blur(14px)`) y el fondo de diálogo (tinta al 38% + el mismo blur). El texto sobre foto usa `--gradient-protect` (velo de tinta de 0 a 62%) — **nunca** una cápsula translúcida detrás del texto.

**Animación.** Discreta y con `--ease-out cubic-bezier(.2,.7,.3,1)`. 120ms color/hover, 200ms entradas de UI, 320ms reveals de sección, 520ms cambio de vista. Reveals: fade + 12px hacia arriba con `--ease-entrance`. **Sin bounces, sin rebotes elásticos, sin parallax, sin autoplay de carruseles.** Respeta `prefers-reduced-motion` (todas las duraciones caen a 1ms en `tokens/motion.css`).

**Estados.** *Hover:* el relleno se **oscurece un paso** (naranja 400→500, verde 600→700); en superficies claras el fondo pasa a `--cream-200`; las tarjetas interactivas suben `-2px` y ganan `--shadow-md`. *Press:* `scale(0.985)`, sin cambio de color adicional. *Focus:* anillo verde `--focus-ring` de 2px con offset 2px; los campos además cambian el borde a verde con halo del 22%. *Disabled:* opacidad 0.45, sin cambio de color. Nunca hover por opacidad.

---

## ICONOGRAFÍA

- **Sistema:** **Lucide** (trazo 1.75–2px, sin relleno, esquinas redondeadas) — **sustitución**, ya que el brief no define un set de iconos. Se sirve desde `https://unpkg.com/lucide-static@0.436.0/icons/<nombre>.svg` y se tiñe con `currentColor` vía CSS `mask` en el componente `Icon`. No hay icon font ni sprite propio; no hay SVGs de marca porque no se entregó ninguno.
- **No se dibujó ningún SVG a mano.** Si en el futuro hay un set propio, reemplazar la fuente dentro de `components/icon/Icon.jsx` y el resto del sistema queda intacto.
- **Vocabulario preferido:** `leaf, sprout, sun, droplet, heart-pulse, flask-conical, microscope, moon, activity, shield-check, package, truck, arrow-right, check, info, map-pin`.
- **Prohibido:** iconos clínicos genéricos (cruz médica, cápsula, ADN, estetoscopio) — llevan la marca al territorio frío que evita. Tampoco iconos rellenos ni multicolor.
- **Tamaños:** 16 (inline en microcopy), 20 (botones y UI), 24 (listas de beneficio), 32 (hero). Siempre alineados con el texto por baseline o centro de línea.
- **Emoji:** no se usan como iconos ni como decoración. Caracteres unicode tampoco (ni ✓ ni →): se usa `Icon`.

---

## Índice del proyecto

**Raíz**
- `styles.css` — punto de entrada único (solo `@import`).
- `readme.md` — este documento.
- `SKILL.md` — envoltura para usar el sistema como Agent Skill.
- `thumbnail.html` — tile de la homepage.

**`tokens/`** — `fonts.css` (Newsreader + DM Sans), `colors.css`, `typography.css`, `spacing.css`, `radius-elevation.css`, `motion.css`, `base.css` (reset + `a`/`a:hover`, `.eyebrow`, `.wordmark`).

**`github.md`** — asociación con el repositorio `gelvesoscar/restaura-do`, última lectura y mapa de pantallas.

**`PASO-A-CODEX.md`** — guía paso a paso para entregar el proyecto a Codex: comandos de git, prompt inicial copiable, plan por tandas y checklist de aceptación.

**`AGENTS.md`** — handoff para implementar el sitio en Astro: qué copiar, estructura sugerida, reglas de contenido no negociables, decisiones pendientes y definición de terminado.

**`guidelines/brief-fotografia.md`** — brief de las ocho tomas que faltan (encuadre, luz, props, formato).

**`guidelines/`** — 17 tarjetas de especimen: naranja lulo, verde lulo, crema y tinta, semánticos, aliases de superficie, gradientes, serif display, sans de cuerpo, escala tipográfica, eyebrow, wordmark, escala de espaciado, espaciado en uso, radios, sombras, bordes, motion, velo y blur.

**`assets/`** — `logo-lulo.svg`, `logo-lulo-ink.svg`, `logo-lulo-cream.svg`, `logo-lulo-min.svg`, más las exploraciones archivadas en `assets/opciones/`. (Sin fotografía: no se entregó ninguna.)

**`brand/`** — identidad y aplicaciones: `logo.card.html`, `logo-construccion.card.html`, `logo-lockups.card.html`, `logo-opciones.card.html`, `logo-variantes.card.html`, `paleta-aplicada.card.html`, `muestra-tipografica.card.html`, `etiqueta-botella.card.html` (mockup cilíndrico + arte plano), `etiqueta.card.html`, `empaque.card.html` (envío), `redes.card.html` (perfil social).

**`components/`** — primitivas reutilizables (grupo "Components" en la pestaña Design System):

| Grupo | Componentes |
| --- | --- |
| `components/actions/` | **Button**, **IconButton** |
| `components/forms/` | **Input**, **Select**, **Checkbox**, **Radio**, **Switch** |
| `components/surfaces/` | **Card**, **Badge**, **Tag** |
| `components/navigation/` | **Tabs** |
| `components/feedback/` | **Dialog**, **Toast**, **Tooltip** |
| `components/icon/` | **Icon** |

Cada carpeta trae `<Name>.jsx`, `<Name>.d.ts`, `<Name>.prompt.md` y una tarjeta `*.card.html` con variantes y estados.

**Adiciones intencionales:** el brief no define inventario de componentes (no hay código ni Figma), así que se autoró un set estándar mínimo. **Icon** se agrega como envoltorio del set Lucide para que ningún consumidor dibuje SVG a mano.

**`ui_kits/website/`** — recreación navegable de Comounlulo.co, **una sola página con scroll y seis secciones ancladas** (Inicio, Por qué el lulo, Verse como un lulo, Tips de salud, Recetas, Tienda): `index.html` (entrada), `Shared.jsx` (nav con sección activa, footer con descargo, wordmark-lulo, `SectionHead`, `Photo`), `Historia.jsx` (secciones 1–3), `Contenidos.jsx` (tips y recetas), `Tienda.jsx` (SKU único + bolsa), `App.jsx`, `README.md`. Es el único producto digital que el brief define; no se inventaron app móvil ni panel administrativo.

**Reglas de contenido del sitio.** Sin lenguaje clínico: nunca “cura”, “elimina”, “trata”, “combate”, “anti”. Las secciones educativas (2, 4 y 5) llevan nota de contenido informativo y el pie repite el descargo completo. La sección 3 va en **primera persona**, como manifiesto. La tienda muestra **solo el SKU con proveedor confirmado** (botella inteligente de 600 ml) y anuncia las gamas siguientes sin precio ni botón.

**Puntos de partida (Starting Points):** Button, Card, Tabs y el sitio completo (`ui_kits/website/index.html`).
