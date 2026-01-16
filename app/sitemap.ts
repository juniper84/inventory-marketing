import type { MetadataRoute } from "next";

const baseUrl = "https://newvisioninventory.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    {
      url: baseUrl,
      lastModified: now,
    },
    {
      url: `${baseUrl}/#features`,
      lastModified: now,
    },
    {
      url: `${baseUrl}/#pricing`,
      lastModified: now,
    },
    {
      url: `${baseUrl}/#contact`,
      lastModified: now,
    },
  ];
}
