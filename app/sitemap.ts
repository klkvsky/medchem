import type { MetadataRoute } from "next";
import { getSiteUrl } from "./seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl();

  return [
    {
      url: new URL("/", siteUrl).toString(),
      lastModified: new Date("2026-05-20"),
      changeFrequency: "monthly",
      priority: 1,
      alternates: {
        languages: {
          ru: new URL("/", siteUrl).toString(),
        },
      },
    },
  ];
}
