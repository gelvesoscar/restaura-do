# Pasar Comounlulo.co a Codex

Sí: **este es el paso que sigue.** Aquí termina el diseño y empieza la implementación. Yo entrego el sistema (tokens, componentes, sitio de referencia navegable, reglas de marca y de contenido); Codex escribe el sitio real en Astro dentro de tu repo.

Tiempo estimado de tu parte: 15 minutos para dejarlo montado. Después revisas por tandas.

---

## Antes de empezar

Ten a mano:

- El **zip del proyecto** que te descargué (o esta misma carpeta).
- Acceso a `gelvesoscar/restaura-do` (rama `main`).
- Los tres pendientes que **bloquean** el sitio final. Codex puede avanzar sin ellos usando placeholders, pero no publicar:
  1. **Ficha real del SKU** — capacidad, materiales, funciones de la tapa, precio, tiempos de entrega.
  2. **Fotografía** — las 8 tomas de `guidelines/brief-fotografia.md`.
  3. **Dominio, pasarela de pago y transportadora** — hoy sin definir.

---

## Paso 1 · Subir el sistema al repo

El sistema va en su propia carpeta; el sitio de restaura.do no se toca.

```bash
git clone https://github.com/gelvesoscar/restaura-do.git
cd restaura-do
git checkout -b comounlulo

# descomprime el zip dentro de design-system/
mkdir -p design-system
unzip ~/Descargas/comounlulo-design-system.zip -d design-system

git add design-system
git commit -m "Agrega el sistema de diseño de Comounlulo.co"
git push -u origin comounlulo
```

Después de esto el repo tiene: el sitio de **restaura.do** en la raíz (intacto) y **`design-system/`** con Comounlulo.

---

## Paso 2 · Prompt inicial para Codex

Pega esto tal cual en la primera conversación:

```
Vas a construir el sitio de Comounlulo.co dentro de este repositorio, en una carpeta
nueva hermana de design-system/. NO modifiques nada de la raíz: index.html,
css/style.css, js/main.js, proximamente.html, temp-launch/ y los .md de brief y copy
pertenecen a restaura.do, otra marca del mismo dueño.

Antes de escribir código, lee en este orden:
1. design-system/AGENTS.md          (handoff: qué copiar, estructura, reglas, pendientes)
2. design-system/readme.md          (marca: logo, tono de copy, fundamentos visuales, iconografía)
3. design-system/ui_kits/website/   (sitio de referencia: abre index.html en el navegador;
                                     es la fuente de verdad visual y de estructura)
4. design-system/guidelines/brief-fotografia.md

Stack: Astro, sitio estático de una sola página con seis secciones ancladas
(#inicio #lulo #manifiesto #tips #recetas #tienda). Deploy en Vercel o Netlify.
Sin CMS: tips y recetas como content collections en Markdown.

Copia design-system/styles.css y design-system/tokens/ tal cual y usa SOLO variables
CSS: no escribas colores, radios, sombras ni tamaños a mano, y no redondees los valores
del sistema. Iconos: Lucide, trazo 1.75–2 px, color por currentColor.

Reglas que no se negocian:
- Cero lenguaje clínico o de promesa médica. Prohibidas: combatir, anti, curar,
  eliminar, tratar, milagro, rápido, agresivo, garantizado.
- Las notas de "contenido informativo" de las secciones 2, 4 y 5 y el descargo del
  footer se mantienen textuales.
- La tienda publica UN solo SKU (botella inteligente 600 ml). Las demás gamas se
  anuncian sin precio ni botón.
- No inventes datos: precio, especificaciones, dominio, pasarela y transportadora
  quedan como TODO visible hasta que el cliente los entregue.
- La frase ancla compartida con restaura.do se escribe siempre así:
  "Nadie necesita reinventarse. Necesita recordar."

Empieza por el Paso A del plan que está en design-system/PASO-A-CODEX.md y detente al
terminarlo para que yo revise.
```

---

## Paso 3 · Plan de trabajo por tandas

Pídele una tanda a la vez y revisa antes de seguir. Así se corrige barato.

| Tanda | Qué entrega | Cómo la revisas |
| --- | --- | --- |
| **A. Andamiaje** | Proyecto Astro creado, `styles.css` + `tokens/` copiados e importados en el layout, fuentes cargadas, logo en `public/`, página vacía que ya se ve con los colores y la tipografía correctos | Abre el sitio: fondo crema `#FAF6EF`, texto verde tinta, titulares en Newsreader |
| **B. Cascarón** | `Base.astro` con la barra fija (velo + blur, sección activa) y el footer con el descargo; las seis secciones vacías con sus anclas | Los seis enlaces del menú saltan a su sección y la activa se subraya en naranja |
| **C. Secciones 1–3** | Inicio, Por qué el lulo, Verse como un lulo (manifiesto en primera persona sobre el gradiente) | Compáralo contra el sitio de referencia: mismos textos, mismos tamaños |
| **D. Secciones 4–5** | Tips y Recetas como content collections en Markdown, con filtro por categoría y tarjetas expandibles | Que puedas agregar un tip nuevo creando un `.md`, sin tocar código |
| **E. Tienda** | Un SKU, color, cantidad, bolsa y confirmación; tarjeta "Lo que viene" sin precio; `checkout.ts` con TODO, sin proveedor cableado | El flujo completo funciona y el diálogo abre centrado en pantalla |
| **F. Fotos y responsive** | Fotografía real (o placeholders con el texto de la toma), 360 px hacia arriba sin desbordes, foco visible, Lighthouse ≥ 95 en accesibilidad | Redimensiona la ventana a 360 px: nada se sale ni se corta |
| **G. Deploy** | Preview en Vercel/Netlify y `README` de cómo publicar | Abres el link y navegas el sitio completo |

---

## Paso 4 · Checklist de aceptación final

- [ ] Las seis secciones existen, en orden, con sus anclas y sección activa.
- [ ] Ningún color, radio, sombra ni tamaño escrito a mano: todo sale de variables.
- [ ] Ni una palabra de la lista prohibida en el copy final.
- [ ] Notas informativas y descargo del footer presentes y textuales.
- [ ] Un solo SKU publicado; nada sin proveedor confirmado.
- [ ] Símbolo y wordmark siempre separados, con la proporción del sistema.
- [ ] Se ve entero desde 360 px de ancho.
- [ ] Los archivos de restaura.do en la raíz están **sin cambios** (`git diff main --stat` solo muestra carpetas nuevas).

---

## Qué NO debe hacer Codex

- Rediseñar. El sitio de referencia manda; si algo no está resuelto ahí, pregunta.
- Reutilizar la paleta, el wordmark o el CSS de restaura.do (navy, oro, Sora): son de la otra marca.
- Inventar precios, especificaciones, proveedores, testimonios o cifras.
- Dibujar SVG a mano para iconos o para el logo: los archivos ya existen.
- Agregar secciones, SKUs o formularios que no estén en el brief de contenido.

---

## Si Codex se traba

- **"No encuentro los componentes"** → son de referencia en React (`design-system/components/`); se portan a Astro con las mismas variables, no se importan.
- **"Falta un dato"** → placeholder visible con `TODO:` y seguir; nunca rellenar con algo inventado.
- **"El diálogo se abre fuera de pantalla"** → el overlay necesita `position: fixed` en su contenedor (está resuelto así en el kit).
