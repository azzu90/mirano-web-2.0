export type Lang = 'en' | 'de' | 'hr';
export const langs: Lang[] = ['en', 'de', 'hr'];

export function getLang(locale: string | undefined): Lang {
  return (langs as string[]).includes(locale ?? '') ? (locale as Lang) : 'en';
}

/** Lokalisierter Link: EN = Root, DE/HR mit Prefix */
export function l(lang: Lang, path: string): string {
  if (lang === 'en') return path;
  return path === '/' ? `/${lang}` : `/${lang}${path}`;
}

/** Pfad ohne Locale-Prefix (für hreflang-Alternates & Sprachwechsler) */
export function stripLang(pathname: string): string {
  const m = pathname.match(/^\/(de|hr)(\/.*)?$/);
  if (m) return m[2] || '/';
  return pathname || '/';
}
