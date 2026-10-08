// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://harke.dev",
  i18n: {
    locales: ["en", "id"],
    defaultLocale: "en",
    routing: {
      // EN di "/", ID di "/id/"
      prefixDefaultLocale: false,
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
