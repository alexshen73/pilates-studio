import Link from "next/link";
import { notFound } from "next/navigation";

import { content } from "@/lib/content";
import { isLocale, type Locale } from "@/lib/i18n";

type BlogPageProps = {
  params: Promise<{ locale: string }>;
};

export default async function BlogPage({ params }: BlogPageProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const data = content[locale as Locale];

  return (
    <main className="container" style={{ paddingTop: "6rem", paddingBottom: "2rem" }}>
      <Link href={`/${locale}`} className="btn btnGhost">
        {locale === "uk" ? "Повернутися на головну" : "Back to landing"}
      </Link>
      <section className="section block" style={{ marginTop: "1rem" }}>
        <h1 style={{ fontFamily: "Georgia, serif", margin: 0 }}>{data.blog.title}</h1>
        <p>{data.blog.description}</p>
        <div className="programGrid">
          {data.blog.posts.map((post) => (
            <article key={post.title} className="programCard">
              <h2 style={{ margin: 0, fontSize: "1.2rem" }}>{post.title}</h2>
              <p>{post.excerpt}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

