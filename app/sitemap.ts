import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { procedures } from "@/lib/data/procedures";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticPaths = [
    "",
    "/cost",
    "/wisdom-teeth-removal",
    "/emergency-dentist",
    "/dental-work-with-no-insurance",
    "/about",
    "/affiliate-disclosure",
    "/privacy",
  ];
  const costPaths = procedures.map((p) => `/cost/${p.slug}`);

  return [...staticPaths, ...costPaths].map((path) => ({
    url: `${site.url}${path}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: path === "" ? 1 : path.startsWith("/cost/") ? 0.8 : 0.7,
  }));
}
