import type { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";

const baseUrl = "https://newvisioninventory.com";

const ROUTES = [
  "",
  "/features",
  "/features/stock-ledger",
  "/features/pos",
  "/features/offline-mode",
  "/features/reports",
  "/features/multi-branch",
  "/pricing",
  "/about",
  "/contact",
  "/privacy",
  "/terms",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const entries: MetadataRoute.Sitemap = [];
  for (const route of ROUTES) {
    for (const locale of routing.locales) {
      entries.push({
        url: `${baseUrl}/${locale}${route}`,
        lastModified: now,
        changeFrequency: "weekly",
        priority: route === "" ? 1.0 : route.startsWith("/features") ? 0.8 : 0.7,
        alternates: {
          languages: Object.fromEntries(
            routing.locales.map((l) => [l, `${baseUrl}/${l}${route}`]),
          ),
        },
      });
    }
  }
  return entries;
}
