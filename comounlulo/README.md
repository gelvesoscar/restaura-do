# Comounlulo.co

Sitio de una sola página en Astro para la marca **Comounlulo.co**, hermana de
`restaura.do` en este mismo repositorio (`design-system/` documenta el sistema
completo — léelo antes de tocar nada aquí). Vive en la carpeta `comounlulo/`,
separada de la raíz del repo (que es de `restaura.do`) y de `design-system/`.

## Comandos

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # astro check + astro build -> dist/
npm run preview   # sirve dist/ localmente
```

## Estado

Sitio completo (Tandas A–F): las seis secciones ancladas
(`#inicio #lulo #manifiesto #tips #recetas #tienda`), tips y recetas como
content collections en Markdown (`src/content/tips/`, `src/content/recetas/`),
tienda con un solo SKU + bolsa + checkout de prueba, estimador de agua diaria
(sin IMC ni lenguaje de diagnóstico), responsive desde 360px, Lighthouse de
accesibilidad en 100 y 0 violaciones de axe-core.

Fotos: hay tres fotos de prueba conectadas (inicio, "por qué el lulo" y la
botella de referencia en tienda) mientras llega la fotografía real del
producto — ver "Fotos" más abajo.

**Estructura de URLs (soft-launch):** la raíz (`/`) muestra una página
liviana de "muy pronto" — el sitio completo (las seis secciones) vive en
`/temp`, marcado `noindex` para que no lo indexen buscadores mientras es un
link de vista previa privada. Cuando el sitio esté listo para el público en
general (precio, pasarela, transportadora y fotos reales resueltos), el
contenido de `src/pages/temp.astro` pasa a ser el de `src/pages/index.astro`
(quitando `noindex={true}` del `<Base>`), y `temp.astro` se borra.

## Cómo publicar (Vercel)

El proyecto vive en una subcarpeta de un repo que también tiene el sitio de
`restaura.do`, así que el único paso no-automático es decirle a Vercel dónde
está la raíz de este proyecto:

1. Entra a [vercel.com/new](https://vercel.com/new) con tu cuenta (GitHub).
2. **Import Git Repository** → selecciona `gelvesoscar/restaura-do`.
3. En **Root Directory**, haz clic en "Edit" y escribe `comounlulo`. Esto es
   lo único que no detecta solo — sin este paso, Vercel intenta construir el
   repo completo y falla.
4. Vercel detecta automáticamente **Framework Preset: Astro**, con
   `npm run build` como build command y `dist` como output directory — no
   hace falta tocar nada más.
5. En **Branch a publicar**, elige `comounlulo` (la rama donde está todo este
   trabajo) mientras el sitio esté en revisión. Cuando esté listo para
   producción, puedes cambiar la Production Branch a `main` después de
   fusionar `comounlulo` ahí, o simplemente dejarlo publicando desde
   `comounlulo` — es tu decisión, no la de Codex.
6. **Deploy**. En menos de un minuto tienes una URL tipo
   `comounlulo-xxxx.vercel.app` para compartir.

No hace falta ninguna variable de entorno todavía (no hay pasarela de pago ni
transportadora conectadas — ver "Pendientes" abajo).

### Actualizar el sitio publicado

Cada `git push` a la rama que elegiste como fuente (paso 5) dispara un deploy
nuevo automáticamente — no hay que repetir el import. Los pull requests
contra esa rama también generan una Preview Deployment aparte, útil para
revisar cambios antes de fusionarlos.

### Dominio propio (comounlulo.co en GoDaddy)

El dominio ya está comprado (GoDaddy, vence 25 may 2027) y hoy su registro A
apunta a la página "parked" de GoDaddy. Para conectarlo sin mover la gestión
de DNS fuera de GoDaddy (nameservers `ns03`/`ns04.domaincontrol.com` se
quedan igual — no hay que delegar a Vercel):

1. En el proyecto de Vercel, pestaña **Settings → Domains**, agrega
   `comounlulo.co` y `www.comounlulo.co`.
2. Vercel te muestra el valor exacto a usar — **usa siempre el que te
   muestre a ti, no un valor genérico de esta guía**, porque Vercel asigna
   IPs/CNAMEs por proyecto.
3. En GoDaddy → tu dominio → pestaña **DNS** → **DNS Records**, edita (no
   agregues nuevos, ya existen):
   - El registro **A, name `@`** (hoy dice "Parked") → cámbialo por la IP
     que te dio Vercel.
   - El registro **CNAME, name `www`** (hoy apunta a `comounlulo.co.`) →
     cámbialo por el valor que te dio Vercel para `www`.
   - No toques los demás registros (`NS`, `CNAME _domainconnect`, `SOA`,
     `TXT _dmarc`) — son de GoDaddy y de tu correo, no tienen que ver con el
     sitio.
4. La propagación puede tardar de minutos a un par de horas. Vercel emite el
   certificado SSL solo, apenas detecta el DNS correcto.

También conviene entonces actualizar `site: undefined` en `astro.config.mjs`
con la URL final, para que las etiquetas SEO/OG generen URLs absolutas
correctas.

## Fotos

Las fotos reales del producto y de marca (ver `design-system/guidelines/brief-fotografia.md`
para la lista de las 8 tomas) van en `public/images/`. Para reemplazar
cualquiera de las fotos de prueba (o llenar un placeholder que sigue en
TODO), solo hay que:

1. Poner el archivo en `public/images/nombre-del-archivo.jpg`.
2. En el `<Photo ... />` correspondiente (`src/sections/*.astro`), agregar o
   cambiar el prop `src="/images/nombre-del-archivo.jpg"`.

Sin `src`, `Photo.astro` sigue mostrando el placeholder de color con el texto
`TODO` — así que no hay que tocar nada más para ir reemplazando fotos una por
una a medida que lleguen.

## Pendientes antes de salir a producción

Estos quedan visibles como `TODO` en el sitio hasta que el cliente los
entregue — no se han inventado:

- **Ficha real del SKU**: precio, material exacto, tiempo de autonomía de
  batería, tiempo que mantiene fría el agua.
- **Envío**: transportadora y tiempos/cobertura.
- **Pasarela de pago**: hoy el botón "Confirmar pedido" llama a
  `src/lib/checkout.ts`, que solo simula el pedido (no está conectado a
  ningún proveedor real).
- **Dominio**: `comounlulo.co` (ver sección de arriba).
- **Fotografía real** del producto y de marca (hoy hay 3 fotos de prueba y el
  resto son placeholders con el texto de la toma esperada).
