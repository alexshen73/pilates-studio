import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { content } from "@/lib/content";
import { isLocale, locales, type Locale } from "@/lib/i18n";

type LocaleLayoutProps = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: LocaleLayoutProps): Promise<Metadata> {
  const { locale } = await params;

  if (!isLocale(locale)) {
    return {};
  }

  const data = content[locale as Locale];

  return {
    title: {
      default: data.pageTitle,
      template: "%s | Pilates",
    },
    openGraph: {
      locale,
    },
  };
}

export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  return <>{children}</>;
}

