import type { Lang } from "@/i18n/ui";
import { site } from "@/config/site";

export const stack: { key: Record<Lang, string>; value: string }[] = [
  { key: { en: "frontend", id: "frontend" }, value: "Next.js, React, TypeScript, Tailwind" },
  { key: { en: "backend", id: "backend" }, value: "Node, Supabase, Postgres, Drizzle" },
  { key: { en: "mobile", id: "mobile" }, value: "Expo, React Native, NativeWind" },
  { key: { en: "tools", id: "tools" }, value: "Figma, Cursor, Vercel, Linear" },
];

export const elsewhere = [
  { key: "instagram", label: "@harke.dev", href: site.socials.instagram },
  { key: "tiktok", label: "@harke.dev", href: site.socials.tiktok },
  { key: "threads", label: "@harke.dev", href: site.socials.threads },
  { key: "github", label: "github.com/harke", href: site.socials.github },
  { key: "email", label: site.email, href: `mailto:${site.email}` },
];
