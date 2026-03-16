import type { MetadataRoute } from "next";

const baseUrl = "https://example.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
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
  ];
}

