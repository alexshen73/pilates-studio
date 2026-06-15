import Image from "next/image";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { blogPreviewImages } from "@/lib/blog-images";
import { content } from "@/lib/content";
import { isLocale, locales, type Locale } from "@/lib/i18n";

type BlogArticlePageProps = {
  params: Promise<{ locale: string; slug: string }>;
};

export async function generateStaticParams() {
  return locales.flatMap((locale) =>
    content[locale].blog.posts.map((post) => ({
      locale,
      slug: post.slug,
    })),
  );
}

export async function generateMetadata({ params }: BlogArticlePageProps): Promise<Metadata> {
  const { locale, slug } = await params;

  if (!isLocale(locale)) {
    return {};
  }

  const localePosts = content[locale as Locale].blog.posts;
  const postIndex = localePosts.findIndex((item) => item.slug === slug);

  if (postIndex === -1) {
    return {};
  }

  const post = localePosts[postIndex];
  const alternateLocale = locale === "uk" ? "en" : "uk";
  const alternatePost = content[alternateLocale].blog.posts[postIndex];

  return {
    title: post.title,
    description: post.excerpt,
    alternates: {
      canonical: `/${locale}/blog/${post.slug}`,
      languages: {
        uk:
          locale === "uk"
            ? `/uk/blog/${post.slug}`
            : `/uk/blog/${alternatePost?.slug ?? ""}`,
        en:
          locale === "en"
            ? `/en/blog/${post.slug}`
            : `/en/blog/${alternatePost?.slug ?? ""}`,
      },
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      url: `/${locale}/blog/${post.slug}`,
    },
  };
}

export default async function BlogArticlePage({ params }: BlogArticlePageProps) {
  const { locale, slug } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const data = content[locale as Locale];
  const post = data.blog.posts.find((item) => item.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="container" style={{ paddingTop: "6rem", paddingBottom: "2rem" }}>
      <Link href={`/${locale}/blog`} className="btn btnGhost">
        {locale === "uk" ? "До всіх статей" : "Back to all articles"}
      </Link>

      <article className="section block" style={{ marginTop: "1rem" }}>
        <h1 className="blogTitle">{post.title}</h1>
        <p style={{ color: "var(--muted)" }}>{post.excerpt}</p>
        {blogPreviewImages[post.slug] ? (
          <div className="blogArticleImageWrap">
            <Image
              src={blogPreviewImages[post.slug]}
              alt={post.title}
              fill
              unoptimized
              priority
              sizes="(min-width: 1024px) 70vw, 100vw"
              className="programCardImage"
            />
          </div>
        ) : null}
        <div style={{ display: "grid", gap: "0.9rem", marginTop: "1rem" }}>
          {post.content.map((paragraph) => (
            <p key={paragraph} style={{ margin: 0 }}>
              {paragraph}
            </p>
          ))}
        </div>
      </article>
    </main>
  );
}
