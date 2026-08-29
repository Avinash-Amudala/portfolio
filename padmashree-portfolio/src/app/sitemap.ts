import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";
import { playbooks } from "@/content/playbooks";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.siteUrl;
  const now = new Date();

  const staticRoutes = ["", "/about", "/contact"].map((path) => ({
    url: `${base}${path}`,
    lastModified: now,
  }));

  const work = playbooks
    .filter((p) => p.hasWriteup && !p.unresolved)
    .map((p) => ({ url: `${base}/work/${p.slug}`, lastModified: now }));

  return [...staticRoutes, ...work];
}
