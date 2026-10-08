import type { Lang } from "@/i18n/ui";

type Localized = Record<Lang, string>;

interface Project {
  name: string;
  href?: string;
  description: Localized;
}

interface Role {
  period: Localized;
  company: string;
  href?: string;
  role: Localized;
}

export const sideProjects: Project[] = [
  {
    name: "schoolly.id",
    href: "https://schoolly.id",
    description: {
      en: "self-hosted school management platform for schools",
      id: "platform manajemen sekolah self-hosted untuk sekolah",
    },
  },
];

export const timeline: Role[] = [
  {
    period: { en: "2025 / now", id: "2025 / sekarang" },
    company: "Jalin Health",
    role: {
      en: "Frontend Developer",
      id: "Frontend Developer",
    },
  },
  {
    period: { en: "2024 / now", id: "2024 / sekarang" },
    company: "Kerjoo",
    href: "https://kerjoo.com",
    role: {
      en: "Frontend Developer",
      id: "Frontend Developer",
    },
  },
  {
    period: { en: "2023 / 2024", id: "2023 / 2024" },
    company: "Dinas Pendidikan Daerah Provinsi Sulawesi Utara",
    role: {
      en: "Frontend Developer",
      id: "Frontend Developer",
    },
  },
  {
    period: { en: "2022 / 2024", id: "2022 / 2024" },
    company: "Dicoding Indonesia",
    role: {
      en: "Frontend & Backend Mentor",
      id: "Mentor Frontend & Backend",
    },
  },
];
