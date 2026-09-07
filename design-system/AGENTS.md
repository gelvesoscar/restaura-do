# Handoff — Comounlulo.co (destino: Astro)

**Repositorio:** `gelvesoscar/restaura-do` (rama `main`). Este sistema y el sitio de Comounlulo van en **`design-system/`** y, cuando exista la app, en su propia carpeta hermana — nunca en la raíz.

**Aviso de convivencia de marcas.** El repo ya aloja **restaura.do / oscargelves.com**, una marca distinta del mismo dueño: consultoría comercial, identidad “Maestro Restaurador”, paleta navy `#142847` / oro `#C8922A` / naranja `#E07B39`, tipografía Sora + Inter, landing de 6 secciones StoryBrand con CTA de agenda y WhatsApp. **No toques** `index.html`, `css/style.css`, `js/main.js`, `proximamente.html`, `temp-launch/` ni los `.md` de brief y copy de esa marca; tampoco reutilices su paleta, su wordmark (“restaura.do” en Sora 700) ni sus componentes. Comounlulo tiene tokens, fuentes y símbolo propios.

**Principio compartido (una sola redacción canónica).** Las dos marcas se apoyan en la misma idea de restauración. La frase ancla se escribe siempre igual que en `copy_landing_final.md`: *“Nadie necesita reinventarse. Necesita recordar.”* Si un texto de Comounlulo la parafrasea, se corrige a esta forma. Lo demás del copy de Comounlulo no se mezcla con el de restaura.do: allí el sujeto es un equipo comercial; aquí, una persona y una fruta.

**Punto de partida:** queda a tu criterio (el cliente lo delegó). Recomendación: Astro nuevo dentro del repo, reutilizando de la marca vecina solo la configuración de deploy. Portar el CSS de restaura.do sería un error: su paleta y tipografía son incompatibles.

Instrucciones para el agente o desarrollador que va a implementar el sitio. Este repositorio **es el sistema de diseño**, no la app: aquí están los tokens, los componentes de referencia y una recreación funcional del sitio. La app se construye aparte, consumiendo estos valores.

## 1. Qué usar de aquí

| Necesitas | Está en |
| --- | --- |
| Variables CSS (color, tipografía, espaciado, radios, sombras, motion) | `styles.css` → `tokens/*.css` |
| Fuentes | `tokens/fonts.css` (Google Fonts: **Newsreader** display + **DM Sans** cuerpo) |
| Logo y variantes | `assets/logo-lulo*.svg` (`-ink`, `-cream`, `-min`) |
| Reglas de marca, tono y contenido | `readme.md` (secciones LOGO, CONTENT FUNDAMENTALS, VISUAL FOUNDATIONS, ICONOGRAFÍA) |
| Componentes de referencia | `components/<grupo>/<Name>.jsx` + `.d.ts` + `.prompt.md` |
| Sitio de referencia (fuente de verdad visual) | `ui_kits/website/` — abrir `index.html` |
| Brief de fotografía | `guidelines/brief-fotografia.md` |

Copia `styles.css` y `tokens/` tal cual: **no re-derives los colores ni redondees los valores**. Si el kit dice 2.2 u o 0.72 em, ese es el valor.

## 2. Estructura sugerida en Astro

```
design-system/        # este sistema, copiado tal cual (tokens, componentes, assets, ui_kits)
src/
  styles/            # copia de tokens/ + styles.css (importado una vez en el layout)
  layouts/Base.astro # <head>, fuentes, Nav, Footer
  components/        # Button, Card, Badge, Tag, Input, Select, Checkbox, Switch,
                     # Dialog, Toast, Tooltip, Tabs, IconButton, Icon  (ver components/)
  sections/          # Inicio, PorQueLulo, Manifiesto, Tips, Recetas, Tienda
  content/
    tips/*.md        # una nota por tip (categoría, minutos, cuerpo)
    recetas/*.md     # ingredientes, preparación, nota nutricional
  pages/index.astro  # una sola página, seis secciones ancladas
public/assets/       # logos + fotografía real
```

- **Una sola página con scroll** y anclas `#inicio #lulo #manifiesto #tips #recetas #tienda`. La barra fija marca la sección activa (en el kit se hace con un listener de scroll; en Astro sirve IntersectionObserver en una isla).
- `html { scroll-behavior: smooth; scroll-padding-top: 72px }`.
- Tips y recetas van como **content collections**, no como arrays en el componente: el cliente los va a editar.
- Iconos: **Lucide**. En Astro usa `astro-icon` con el set `lucide` o los SVG de `lucide-static`; mantén trazo 1.75–2 px y color por `currentColor`. Vocabulario permitido y prohibiciones en la sección ICONOGRAFÍA del readme.
- Los componentes del kit son React con estilos inline (para que el sistema de diseño los pueda mostrar). Al portarlos a Astro, **pásalos a CSS con las mismas variables** — no arrastres los objetos de estilo inline.

## 3. Tienda

- **Un solo SKU publicado:** botella inteligente, 600 ml, acero. Opciones: color (Cáscara / Pulpa / Tinta) y cantidad.
- Los precios, especificaciones y ciudades del kit son **de muestra**. No publicar sin la ficha real del proveedor.
- La tarjeta “Lo que viene” anuncia las gamas siguientes **sin precio ni botón**. No agregar SKUs sin proveedor confirmado.
- Flujo del kit: agregar a la bolsa → diálogo con correo, ciudad, dirección → confirmar. Es una maqueta; falta pasarela real (ver punto 5).

## 4. Reglas de contenido que no se pueden romper

- **Cero lenguaje clínico o de promesa médica.** Prohibidas: *combatir, anti, curar, eliminar, tratar, milagro, rápido, agresivo, garantizado*. Preferidas: *restaurar, vitalidad, origen, regenerar, frescura, cuerpo, hábito, constancia*.
- Las secciones 2 (Por qué el lulo), 4 (Tips) y 5 (Recetas) llevan nota de contenido informativo; el pie repite el descargo completo. **No borrarlos.**
- Sección 3 (Verse como un lulo) va en **primera persona**, tono de manifiesto.
- Sentence case en todo; mayúsculas solo en eyebrows. **Sin signos de exclamación y sin emoji.**
- Texto ≥ 4.5:1 de contraste; sobre foto, velo `--gradient-protect`, nunca texto en cápsula translúcida.

## 5. Decisiones pendientes del cliente (no inventar)

- **Dominio, pasarela de pagos y transportadora: sin definir.** Dejar la integración detrás de una interfaz mínima (`checkout.ts` con un TODO) y no cablear ningún proveedor por defecto.
- **Fotografía: no entregada.** Usar los huecos del kit (`<image-slot>`) o placeholders equivalentes con el texto de la toma que falta; en producción, las ocho tomas de `guidelines/brief-fotografia.md`.
- **Fuentes:** Newsreader y DM Sans son **sustituciones** desde Google Fonts. Si el cliente licencia otras, se cambia `tokens/fonts.css` y nada más.
- Datos legales (NIT, razón social, política de datos) faltan en el pie.

## 6. Definición de terminado

1. Las seis secciones existen, con sus anclas y la sección activa marcada en la barra.
2. Ningún color, radio, sombra o tamaño escrito a mano: todo sale de las variables.
3. Lighthouse ≥ 95 en accesibilidad; foco visible verde en todo control.
4. Responsive: el sitio se ve entero desde 360 px (las grillas de 2 y 3 columnas colapsan a 1; nada de `nowrap` en bloques de texto).
5. Ningún término de la lista prohibida en el copy final.
