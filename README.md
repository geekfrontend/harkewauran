## Personal Website

Dibangun dengan [Astro](https://astro.build) + Tailwind CSS v4. Bahasa: EN (`/`) dan ID (`/id/`).

```sh
bun install
bun dev          # http://localhost:4321
bun run build    # astro check + build ke ./dist
bun preview
```

- Teks UI per bahasa: `src/i18n/ui.ts`
- Halaman: `src/pages/[...lang]/` (satu file menghasilkan versi EN dan ID)
