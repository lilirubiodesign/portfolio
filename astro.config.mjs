import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://lilirubio.es",
  // v1 solo en español; preparado para añadir /en en la v2.
  i18n: {
    defaultLocale: "es",
    locales: ["es", "en"],
    routing: { prefixDefaultLocale: false },
  },
});
