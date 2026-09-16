import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://www.comounlulo.co",
  // Conocerla se renombró a Conocelo (id de sección, ruta de artículos y
  // colección de contenido). Esta redirección evita romper enlaces ya
  // compartidos (redes, WhatsApp, buscadores) a las URLs viejas /conocerla/*.
  redirects: {
    "/conocerla/[slug]": "/conocelo/[slug]",
  },
  integrations: [
    sitemap({
      // Excluye del sitemap las rutas que ya están marcadas noindex en su
      // propia página (Base noindex={true}): los artículos de Tips (sin
      // ruta pública propia en el sitio) y la página de privacidad.
      filter: (page) => !page.includes("/tips/") && !page.includes("/privacidad"),
    }),
  ],
});
