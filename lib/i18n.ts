export const locales = ["uk", "en"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "uk";

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function getAlternateLocale(locale: Locale): Locale {
  return locale === "uk" ? "en" : "uk";
}

