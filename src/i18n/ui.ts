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
    "nav.home": "home",
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

    "work.title": "Work",
    "work.intro":
      "Fullstack developer. I like the last 10% of a build: the spacing, the states, the details that make an interface feel finished.",
    "work.side": "Side projects",
    "work.timeline": "Timeline",
    "work.more":
      "And a long list of landing pages, dashboards and design systems sliced for agencies and startups.",

    "notes.title": "Notes",
    "notes.intro": "Things I learned while building. Mostly notes to future me.",
    "notes.back": "← notes",
    "notes.readingTime": "{n} min read",
    "notes.toc": "On this page",
    "notes.introduction": "Introduction",
    "notes.empty": "Nothing here yet.",

    "about.title": "About",
    "about.p1":
      "I'm Harke, a fullstack developer who started in design. Most of my work sits between the Figma file and the production build: turning static screens into components that hold up with real data.",
    "about.p2":
      "These days I build SaaS products, slice interfaces in public, and write short notes on what actually made the code better.",
    "about.stack": "Stack",
    "about.elsewhere": "Elsewhere",
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
    "nav.home": "beranda",
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

    "work.title": "Karya",
    "work.intro":
      "Fullstack developer. Saya suka 10% terakhir dari sebuah build: spacing, state, dan detail yang membuat antarmuka terasa selesai.",
    "work.side": "Proyek sampingan",
    "work.timeline": "Perjalanan",
    "work.more":
      "Ditambah daftar panjang landing page, dashboard, dan design system yang di-slice untuk agensi dan startup.",

    "notes.title": "Catatan",
    "notes.intro": "Hal-hal yang saya pelajari selama membangun. Kebanyakan catatan untuk diri sendiri di masa depan.",
    "notes.back": "← catatan",
    "notes.readingTime": "{n} menit baca",
    "notes.toc": "Di halaman ini",
    "notes.introduction": "Pendahuluan",
    "notes.empty": "Belum ada catatan.",

    "about.title": "Tentang",
    "about.p1":
      "Saya Harke, fullstack developer yang berangkat dari desain. Sebagian besar pekerjaan saya ada di antara file Figma dan build produksi: mengubah layar statis jadi komponen yang tetap kokoh dengan data sungguhan.",
    "about.p2":
      "Sekarang saya membangun produk SaaS, men-slice antarmuka secara terbuka, dan menulis catatan singkat tentang apa yang benar-benar membuat kode jadi lebih baik.",
    "about.stack": "Stack",
    "about.elsewhere": "Di tempat lain",
  },
} as const satisfies Record<Lang, Record<string, string>>;

export type UiKey = keyof (typeof ui)[typeof defaultLang];
