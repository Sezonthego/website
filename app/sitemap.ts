import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://weforgeclinical.com";

  const routes = [
    "",
    "/contact",
    "/blog",
    "/privacy",
    "/terms",
    "/cookies",
  ];

  const locales = ["en", "pl"];

  return locales.flatMap((locale) =>
    routes.map((route) => ({
      url: `${baseUrl}/${locale}${route}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority:
        route === ""
          ? 1
          : route === "/blog"
          ? 0.8
          : 0.6,
    }))
  );
}