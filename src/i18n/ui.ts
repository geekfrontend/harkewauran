export const languages = {
  en: "English",
  id: "Bahasa Indonesia",
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = "en";

export const ui = {
  en: {
    "site.title": "harke.dev",
    "site.description": "Fullstack developer & product builder",
    "home.role": "fullstack developer & product builder",
    "home.status": "open for freelance",
    "home.intro":
      "turning designs into fast, accessible interfaces with next.js, and sharing the slicing process along the way.",
    "home.follow": "follow the build on",
    "home.and": "and",
    "nav.notes": "notes",
    "nav.work": "work",
    "nav.about": "about",
    "nav.email": "email",
    "nav.label": "Main",
    "theme.label": "Theme",
    "theme.light": "Light",
    "theme.dark": "Dark",
    "theme.system": "System",
    "locale.label": "Language",
  },
  id: {
    "site.title": "harke.dev",
    "site.description": "Fullstack developer & product builder",
    "home.role": "fullstack developer & product builder",
    "home.status": "terbuka untuk freelance",
    "home.intro":
      "mengubah desain jadi antarmuka yang cepat dan aksesibel dengan next.js, sambil berbagi proses slicing-nya.",
    "home.follow": "ikuti prosesnya di",
    "home.and": "dan",
    "nav.notes": "catatan",
    "nav.work": "karya",
    "nav.about": "tentang",
    "nav.email": "email",
    "nav.label": "Utama",
    "theme.label": "Tema",
    "theme.light": "Terang",
    "theme.dark": "Gelap",
    "theme.system": "Sistem",
    "locale.label": "Bahasa",
  },
} as const satisfies Record<Lang, Record<string, string>>;

export type UiKey = keyof (typeof ui)[typeof defaultLang];
