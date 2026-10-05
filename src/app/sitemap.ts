import { recipes } from "@/data/recipes";
import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://mitfozzekmost.hu";
  const paths = [
    "",
    "/ebed-otletek",
    "/vacsora-otletek",
    "/gyors-etelek",
    "/olcso-etelek",
    "/magyaros-etelek",
    "/hetvegi-menu",
    "/egyszeru-etelek",
    "/maradekmento-etelek",
    "/receptek",
    ...recipes.map(r => `/receptek/${r.slug}`),
    "/rolunk",
    "/kapcsolat",
    "/impresszum",
    "/adatkezeles",
    "/cookie-tajekoztato",
  ];

  return paths.map((path, index) => ({
    url: `${siteUrl}${path}/`,
    lastModified: new Date("2026-10-05T00:00:00Z"),
    changeFrequency: index === 0 ? ("weekly" as const) : ("monthly" as const),
    priority: index === 0 ? 1 : path.startsWith("/e") || path.includes("otletek") ? 0.8 : 0.6,
  }));
}
