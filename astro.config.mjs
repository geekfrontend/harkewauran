// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import { harkeCodeTheme, shikiTransformers } from "./src/markdown/shiki.mjs";

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
  markdown: {
    shikiConfig: {
      theme: harkeCodeTheme,
      transformers: shikiTransformers,
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
