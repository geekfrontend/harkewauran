import { getRelativeLocaleUrl } from "astro:i18n";
import { defaultLang, languages, ui, type Lang, type UiKey } from "./ui";

export function isLang(value: string | undefined): value is Lang {
  return !!value && value in languages;
}

export function getLangFromUrl(url: URL): Lang {
  const [, segment] = url.pathname.split("/");
  return isLang(segment) ? segment : defaultLang;
}

export function useTranslations(lang: Lang) {
  return (key: UiKey) => ui[lang][key] ?? ui[defaultLang][key];
}

/** Ganti locale pada path saat ini, mis. "/id/projects/" -> "/projects/". */
export function localizePath(url: URL, target: Lang) {
  const current = getLangFromUrl(url);
  const path =
    current === defaultLang
      ? url.pathname
      : url.pathname.replace(new RegExp(`^/${current}(?=/|$)`), "");
  return getRelativeLocaleUrl(target, path.replace(/^\//, ""));
}

/** Dipakai oleh getStaticPaths pada route `[...lang]`. */
export function getLangStaticPaths() {
  return (Object.keys(languages) as Lang[]).map((lang) => ({
    params: { lang: lang === defaultLang ? undefined : lang },
  }));
}
