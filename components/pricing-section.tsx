"use client";

import { useEffect, useState } from "react";

import { LeadForm } from "@/components/lead-form";
import type { Locale } from "@/lib/i18n";

type PricingItem = { name: string; eur: string; uah: string };

type PricingGroup = {
  name: string;
  description: string;
  items: PricingItem[];
};

type PricingData = {
  title: string;
  description: string;
  note: string;
  cta: string;
  groups: PricingGroup[];
};

type Region = "eu" | "world" | "ua";

// ISO 3166-1 alpha-2 codes shown European (EUR) pricing. Ukraine (UA) is a
// separate tier handled explicitly; everything else falls back to USD.
const EUROPE = new Set([
  // EU-27
  "AT", "BE", "BG", "HR", "CY", "CZ", "DK", "EE", "FI", "FR", "DE", "GR", "HU",
  "IE", "IT", "LV", "LT", "LU", "MT", "NL", "PL", "PT", "RO", "SK", "SI", "ES", "SE",
  // EFTA / EEA
  "IS", "LI", "NO", "CH",
  // Other Europe
  "GB", "AL", "BA", "MK", "ME", "RS", "XK", "MD", "GE",
  // Microstates & dependencies
  "AD", "MC", "SM", "VA", "AX", "FO", "GI", "IM", "JE", "GG",
]);

function regionFromCountry(code: string): Region {
  if (code === "UA") return "ua";
  if (EUROPE.has(code)) return "eu";
  return "world";
}

// 10000 -> "10 000" (the price <strong> is white-space: nowrap, so it stays together).
function groupThousands(value: string): string {
  return value.replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

function formatPrice(item: PricingItem, region: Region, locale: Locale): string {
  const amount = region === "ua" ? item.uah : item.eur;
  const symbol = region === "ua" ? "₴" : region === "world" ? "$" : "€";
  const num = groupThousands(amount);
  // Keep each locale's existing symbol placement (uk: "20 €", en: "€20"),
  // only swapping the glyph per region.
  return locale === "en" ? `${symbol}${num}` : `${num} ${symbol}`;
}

export function PricingSection({ data, locale }: { data: PricingData; locale: Locale }) {
  // Default to EUR (matches the statically rendered markup); geo detection
  // below narrows it on the client. Ukrainian (lower) prices are only ever
  // shown when Cloudflare reports the visitor is in Ukraine — there is no
  // manual switch that could expose them elsewhere.
  const [region, setRegion] = useState<Region>("eu");

  useEffect(() => {
    let cancelled = false;

    fetch("/cdn-cgi/trace")
      .then((res) => (res.ok ? res.text() : Promise.reject(new Error("trace unavailable"))))
      .then((text) => {
        const match = text.match(/^loc=([A-Z]{2})/m);
        if (match && !cancelled) {
          setRegion(regionFromCountry(match[1]));
        }
      })
      .catch(() => {
        // Detection unavailable (dev, static preview, offline): keep EUR default.
      });

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <section id="pricing" className="container section block">
      <h2>{data.title}</h2>
      <p>{data.description}</p>
      <div className="pricingGrid">
        {data.groups.map((group) => (
          <article key={group.name} className="pricingCard">
            <h3>{group.name}</h3>
            <p className="pricingGroupDesc">{group.description}</p>
            <ul className="pricingItems">
              {group.items.map((item) => (
                <li key={item.name} className="pricingItem">
                  <span>{item.name}</span>
                  <strong>{formatPrice(item, region, locale)}</strong>
                </li>
              ))}
            </ul>
            <LeadForm locale={locale} ctaLabel={data.cta} ctaClassName="btn btnPrimary" />
          </article>
        ))}
      </div>
      {data.note ? <p className="pricingNote">{data.note}</p> : null}
    </section>
  );
}
