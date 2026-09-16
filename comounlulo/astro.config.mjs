import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://www.comounlulo.co",
  integrations: [
    sitemap({
      // Excluye del sitemap las rutas que ya están marcadas noindex en su
      // propia página (Base noindex={true}): los artículos de Tips (sin
      // ruta pública propia en el sitio) y la página de privacidad.
      filter: (page) => !page.includes("/tips/") && !page.includes("/privacidad"),
    }),
  ],
});
