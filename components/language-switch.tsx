import Link from "next/link";

import { getAlternateLocale, type Locale } from "@/lib/i18n";

type LanguageSwitchProps = {
  locale: Locale;
};

export function LanguageSwitch({ locale }: LanguageSwitchProps) {
  const alt = getAlternateLocale(locale);

  return (
    <Link href={`/${alt}`} className="langSwitch" aria-label={`Switch language to ${alt}`}>
      {alt.toUpperCase()}
    </Link>
  );
}

