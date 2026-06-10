import type { MetadataRoute } from "next";

import { content } from "@/lib/content";

export const dynamic = "force-static";

const baseUrl = "https://www.pilates-yuliya.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const pages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/uk`,
      lastModified: now,
      alternates: {
        languages: {
          uk: `${baseUrl}/uk`,
          en: `${baseUrl}/en`,
        },
      },
    },
    {
      url: `${baseUrl}/en`,
      lastModified: now,
      alternates: {
        languages: {
          uk: `${baseUrl}/uk`,
          en: `${baseUrl}/en`,
        },
      },
    },
    {
      url: `${baseUrl}/uk/blog`,
      lastModified: now,
      alternates: {
        languages: {
          uk: `${baseUrl}/uk/blog`,
          en: `${baseUrl}/en/blog`,
        },
      },
    },
    {
      url: `${baseUrl}/en/blog`,
      lastModified: now,
      alternates: {
        languages: {
          uk: `${baseUrl}/uk/blog`,
          en: `${baseUrl}/en/blog`,
        },
      },
    },
  ];

  const ukPosts = content.uk.blog.posts.map((post, index) => ({
    url: `${baseUrl}/uk/blog/${post.slug}`,
    lastModified: now,
    alternates: {
      languages: {
        uk: `${baseUrl}/uk/blog/${post.slug}`,
        en: `${baseUrl}/en/blog/${content.en.blog.posts[index]?.slug ?? ""}`,
      },
    },
  }));

  const enPosts = content.en.blog.posts.map((post, index) => ({
    url: `${baseUrl}/en/blog/${post.slug}`,
    lastModified: now,
    alternates: {
      languages: {
        uk: `${baseUrl}/uk/blog/${content.uk.blog.posts[index]?.slug ?? ""}`,
        en: `${baseUrl}/en/blog/${post.slug}`,
      },
    },
  }));

  return [...pages, ...ukPosts, ...enPosts];
}

