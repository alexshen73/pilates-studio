import Link from "next/link";

import { defaultLocale } from "@/lib/i18n";

export default function HomePage() {
  return (
    <main className="container" style={{ paddingTop: "6rem", paddingBottom: "2rem" }}>
      <section className="block">
        <h1 style={{ margin: 0, fontFamily: "Georgia, serif" }}>Pilates Studio</h1>
        <p style={{ marginTop: "0.7rem" }}>
          Choose language:
          <Link href={`/${defaultLocale}`} style={{ marginLeft: "0.5rem", color: "#2f6a66" }}>
            {defaultLocale.toUpperCase()}
          </Link>
          <Link href="/en" style={{ marginLeft: "0.8rem", color: "#2f6a66" }}>
            EN
          </Link>
        </p>
      </section>
    </main>
  );
}

