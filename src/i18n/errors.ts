import type { Lang } from "./ui";

interface ErrorCopy {
  title: string;
  body: string;
}

const copy: Record<Lang, Record<string, ErrorCopy>> = {
  en: {
    "400": { title: "Bad request", body: "The request couldn't be understood. Check the link and try again." },
    "401": { title: "Sign in required", body: "You need to be signed in to see this page." },
    "403": { title: "Access denied", body: "You don't have permission to open this page." },
    "404": { title: "Page not found", body: "The page you're looking for doesn't exist or has moved." },
    "410": { title: "Page removed", body: "This page used to be here, but it's gone for good." },
    "429": { title: "Too many requests", body: "Slow down a little and try again in a moment." },
    "500": { title: "Something went wrong", body: "An unexpected error happened on my side. Try again in a moment." },
    "503": { title: "Temporarily unavailable", body: "The site is down for a bit of maintenance. Check back soon." },
    "4xx": { title: "Request error", body: "Something about this request didn't work. Check the link and try again." },
    "5xx": { title: "Server error", body: "Something broke on my side. Try again in a moment." },
  },
  id: {
    "400": { title: "Permintaan tidak valid", body: "Permintaan tidak bisa diproses. Periksa tautannya lalu coba lagi." },
    "401": { title: "Perlu masuk", body: "Kamu perlu masuk untuk melihat halaman ini." },
    "403": { title: "Akses ditolak", body: "Kamu tidak punya izin untuk membuka halaman ini." },
    "404": { title: "Halaman tidak ditemukan", body: "Halaman yang kamu cari tidak ada atau sudah dipindahkan." },
    "410": { title: "Halaman dihapus", body: "Halaman ini dulu ada di sini, tapi sudah dihapus permanen." },
    "429": { title: "Terlalu banyak permintaan", body: "Pelan-pelan dulu, lalu coba lagi sebentar lagi." },
    "500": { title: "Terjadi kesalahan", body: "Ada kesalahan tak terduga di sisi saya. Coba lagi sebentar lagi." },
    "503": { title: "Sedang tidak tersedia", body: "Situs sedang dalam perawatan singkat. Coba kembali nanti." },
    "4xx": { title: "Permintaan bermasalah", body: "Ada yang tidak beres dengan permintaan ini. Periksa tautannya lalu coba lagi." },
    "5xx": { title: "Kesalahan server", body: "Ada yang rusak di sisi saya. Coba lagi sebentar lagi." },
  },
};

export function getErrorCopy(lang: Lang, status: number): ErrorCopy {
  const table = copy[lang];
  return table[String(status)] ?? table[status >= 500 ? "5xx" : "4xx"];
}

export const errorLabels: Record<Lang, { error: string; home: string; notes: string }> = {
  en: { error: "Error", home: "← home", notes: "notes" },
  id: { error: "Galat", home: "← beranda", notes: "catatan" },
};
