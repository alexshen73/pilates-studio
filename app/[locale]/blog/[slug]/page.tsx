import Image from "next/image";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { blogPreviewImages } from "@/lib/blog-images";
import { content, pricingEnabled } from "@/lib/content";
import { SiteHeader } from "@/components/site-header";
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

  const previewImage = blogPreviewImages[post.slug];

  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.publishedDate,
    inLanguage: locale,
    ...(previewImage ? { image: `https://www.pilates-yuliya.com${previewImage}` } : {}),
    author: {
      "@type": "Person",
      name: locale === "uk" ? "Юлія Шендрик" : "Yuliia Shendryk",
      url: `https://www.pilates-yuliya.com/${locale}#trainer`,
    },
  };

  return (
    <div className="pageShell theme-calm">
      <SiteHeader
        locale={locale as Locale}
        nav={data.nav}
        ctaLabel={data.pricing.cta}
        hasPricing={pricingEnabled && data.pricing.groups.length > 0}
        sectionBase={`/${locale}`}
      />
      <main className="container" style={{ paddingTop: "2rem", paddingBottom: "2rem" }}>
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
          {post.content.map((paragraph) =>
            paragraph.startsWith("## ") ? (
              <h2
                key={paragraph}
                style={{
                  margin: "0.8rem 0 0",
                  fontSize: "clamp(1.35rem, 2.6vw, 1.7rem)",
                  lineHeight: 1.2,
                  maxWidth: "34ch",
                }}
              >
                {paragraph.slice(3)}
              </h2>
            ) : (
              <p key={paragraph} style={{ margin: 0 }}>
                {paragraph}
              </p>
            ),
          )}
        </div>

        {post.sources && post.sources.length > 0 ? (
          <div className="blogSources">
            <h2 className="blogSourcesTitle">{locale === "uk" ? "Джерела" : "Sources"}</h2>
            <ol className="blogSourcesList">
              {post.sources.map((source) => (
                <li key={source.url}>
                  <a href={source.url} target="_blank" rel="noopener noreferrer">
                    {source.label}
                  </a>
                </li>
              ))}
            </ol>
          </div>
        ) : null}
      </article>

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      </main>
    </div>
  );
}
