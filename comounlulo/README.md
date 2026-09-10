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
`/preview`, marcado `noindex` para que no lo indexen buscadores mientras es un
link de vista previa privada. Cuando el sitio esté listo para el público en
general (precio, pasarela, transportadora y fotos reales resueltos), el
contenido de `src/pages/preview.astro` pasa a ser el de `src/pages/index.astro`
(quitando `noindex={true}` del `<Base>`), y `preview.astro` se borra.

**En línea ahora mismo:** www.comounlulo.co (placeholder "muy pronto") y
www.comounlulo.co/preview (sitio completo, `noindex`, para compartir como
preview privada).

## Cómo publicar (Vercel)

**Ya está publicado.** El proyecto de Vercel se llama `comounlulo`, vive en
la cuenta `gelvesoscar`, y quedó configurado así:

- **Root Directory**: `comounlulo` (Settings → Build and Deployment).
- **Framework Preset**: Astro (detectado y confirmado explícitamente).
- **Production Branch**: `comounlulo` (Settings → Environments → Production
  → Branch Tracking). Cada `git push` a esa rama dispara un deploy nuevo a
  producción automáticamente.
- **URL de Vercel**: comounlulo.vercel.app (y comounlulo.vercel.app/preview
  para el sitio completo).
- **Dominio propio**: `comounlulo.co` y `www.comounlulo.co` conectados y con
  SSL válido — ver la sección de abajo.

Nota para quien retome esto: como el repo es compartido con `restaura.do`,
el picker de "Root Directory" al importar un proyecto nuevo en Vercel solo
lista las carpetas que existen en la rama `main` (la que usa el proyecto
`restaura-do`) — no muestra `comounlulo` aunque la rama exista y esté
pusheada. La forma de resolverlo fue crear el proyecto igual (con Root
Directory en blanco), y despues en Deployments -> ... -> Create Deployment
pegar la rama `comounlulo` para generar el primer deploy real desde ahi, y
en Settings -> Environments -> Production cambiar el Branch Tracking de
`main` a `comounlulo`.

Si en el futuro se quiere mover esto a la rama `main` del repo (fusionando
`comounlulo` ahí), hay que repetir el cambio de Branch Tracking apuntándolo
de vuelta a `main`.

### Actualizar el sitio publicado

Cada `git push` a la rama `comounlulo` dispara un deploy nuevo a producción
automáticamente — no hay que repetir nada en Vercel. Los pull requests
contra esa rama generan además una Preview Deployment aparte, útil para
revisar cambios antes de fusionarlos.

### Dominio propio (comounlulo.co en GoDaddy)

**Ya está conectado y en línea**, con SSL válido en ambos:

- `comounlulo.co` → redirige (308) a `www.comounlulo.co`.
- `www.comounlulo.co` → apunta a la Production del proyecto `comounlulo`.

Se hizo editando (no agregando) los registros que ya existían en GoDaddy →
DNS Records, sin tocar `NS`, `CNAME _domainconnect`, `SOA` ni `TXT _dmarc`:

- **A, name `@`** → `216.198.79.1` (antes decía "Parked").
- **CNAME, name `www`** → `1ea97dc28b8ab72b.vercel-dns-017.com.` (antes
  apuntaba a `comounlulo.co.`).

Estos valores son específicos de este proyecto de Vercel — si algún día se
recrea el proyecto o se agrega el dominio a otro, Vercel puede asignar una
IP/CNAME distinto; en ese caso hay que usar el valor nuevo que muestre
Vercel en Settings → Domains, no reusar los de arriba.

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

Precio, material, capacidad, dimensiones, colores, certificaciones y el
mensaje de entrega ya están confirmados con proveedor (brief del 10 de
septiembre de 2026) y reflejados en `Tienda.astro`. Lo que sigue quedando
visible como `TODO` en el sitio, porque no se ha inventado:

- **Horas de retención de frío/calor** de la doble pared al vacío — la
  fábrica confirma la construcción pero no publica horas todavía.
- **Autonomía de batería** y **peso de la botella** — sin dato de fábrica.
- **Envío nacional**: transportadora y tiempos/cobertura (la entrega de
  "3 a 4 semanas" es el plazo de fabricación/importación, no de envío local).
- **Manejo de IVA**: por ahora $179.000 se presenta como precio final al
  consumidor.
- **Pasarela de pago**: hoy el botón "Confirmar pedido" llama a
  `src/lib/checkout.ts`, que solo simula el pedido (no está conectado a
  ningún proveedor real).
- **Fotografía real**: "En la mano" usa `botella-01-app-en-mano.jpg` y el
  hero de la sección usa `botella-colores-reales.jpg` (foto real de fábrica
  con los cuatro colores — negro, blanco, rosa y azul — reemplazando una
  foto de stock de otra marca, "AURA Hydro", que estaba puesta como
  referencia). Siguen sin foto real: **"Detalle de la tapa"** (necesita una
  toma del LED UV encendido en morado dentro de la tapa, con la pantalla
  marcando temperatura) y **"Con jugo de lulo"** (temporalmente puede usarse
  cualquier foto de fábrica que dé escala y contexto de uso, mientras llega
  la muestra física para la foto propia). A 30 días el objetivo es
  reemplazar todas las fotos de fábrica por fotos propias con la botella
  física.
