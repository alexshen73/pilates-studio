"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

import { LanguageSwitch } from "@/components/language-switch";
import { LeadForm } from "@/components/lead-form";
import type { Locale } from "@/lib/i18n";

type SiteHeaderProps = {
  locale: Locale;
  nav: {
    about: string;
    whoFor: string;
    trainer: string;
    testimonials: string;
    formats: string;
    pricing: string;
    blog: string;
    faq: string;
    contacts: string;
  };
  ctaLabel: string;
  hasPricing?: boolean;
};

const allNavItems = [
  { key: "about", href: "#about" },
  { key: "whoFor", href: "#who-for" },
  { key: "trainer", href: "#trainer" },
  { key: "testimonials", href: "#testimonials" },
  { key: "formats", href: "#formats" },
  { key: "pricing", href: "#pricing" },
  { key: "blog", href: "#blog" },
  { key: "faq", href: "#faq" },
  { key: "contacts", href: "#contacts" },
] as const;

export function SiteHeader({ locale, nav, ctaLabel, hasPricing = false }: SiteHeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navItems = allNavItems.filter((item) => item.key !== "pricing" || hasPricing);

  useEffect(() => {
    if (!isMenuOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMenuOpen]);

  return (
    <header className="container header">
      <div className="headerBrand">
        <button
          type="button"
          className="menuToggle"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>

        <Link href={`/${locale}`} className="brandMark">
          <img src="../brand/logo-calm-a.svg" alt="Pilates Studio" className="brandLogo" />
        </Link>
      </div>

      <nav className="navList" aria-label="Primary">
        {navItems.map((item) => (
          <a key={item.key} href={item.href}>
            {nav[item.key]}
          </a>
        ))}
      </nav>

      <div className="headerActions">
        <span className="headerCta">
          <LeadForm locale={locale} ctaLabel={ctaLabel} ctaClassName="btn btnAccent btnCompact" />
        </span>
        <LanguageSwitch locale={locale} />
      </div>

      {/* Портал: backdrop-filter хедера робить його containing block для
          position:fixed, тому оверлей рендеримо в document.body */}
      {isMenuOpen ? createPortal(
        <div className="mobileNavOverlay" onClick={() => setIsMenuOpen(false)}>
          <div
            id="mobile-navigation"
            className="mobileNavPanel"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="mobileNavHeader">
              <strong>{locale === "uk" ? "Меню" : "Menu"}</strong>
              <button
                type="button"
                className="mobileNavClose"
                aria-label={locale === "uk" ? "Закрити меню" : "Close menu"}
                onClick={() => setIsMenuOpen(false)}
              >
                x
              </button>
            </div>

            <nav className="mobileNavList" aria-label="Mobile">
              {navItems.map((item) => (
                <a key={item.key} href={item.href} onClick={() => setIsMenuOpen(false)}>
                  {nav[item.key]}
                </a>
              ))}
            </nav>
          </div>
        </div>,
        document.body
      ) : null}
    </header>
  );
}
