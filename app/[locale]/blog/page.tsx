import Image from "next/image";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { content } from "@/lib/content";
import { blogPreviewImages } from "@/lib/blog-images";
import { isLocale, type Locale } from "@/lib/i18n";

type BlogPageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: BlogPageProps): Promise<Metadata> {
  const { locale } = await params;

  if (!isLocale(locale)) {
    return {};
  }

  const data = content[locale as Locale];
  const title = locale === "uk" ? "Блог" : "Blog";
  const description =
    data.blog.description ||
    (locale === "uk"
      ? "Статті про пілатес, м'яке повернення до руху та здоров'я спини."
      : "Articles about pilates, a gentle return to movement, and back health.");

  return {
    title,
    description,
    alternates: {
      canonical: `/${locale}/blog`,
      languages: {
        uk: "/uk/blog",
        en: "/en/blog",
      },
    },
    openGraph: {
      title,
      description,
      type: "article",
      url: `/${locale}/blog`,
    },
  };
}

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
        <h1 className="blogTitle">{data.blog.title}</h1>
        {data.blog.description ? <p>{data.blog.description}</p> : null}
        <div className="programGrid">
          {data.blog.posts.map((post) => (
            <Link key={post.slug} href={`/${locale}/blog/${post.slug}`} className="programCard blogListCard">
              <div className="blogListCardBody">
                <h2 style={{ margin: 0, fontSize: "1.2rem" }}>{post.title}</h2>
                <p>{post.excerpt}</p>
              </div>
              {blogPreviewImages[post.slug] ? (
                <div className="programCardImageWrap">
                  <Image
                    src={blogPreviewImages[post.slug]}
                    alt={post.title}
                    fill
                    unoptimized
                    sizes="(min-width: 1024px) 30vw, (min-width: 768px) 45vw, 100vw"
                    className="programCardImage"
                  />
                </div>
              ) : null}
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
