import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://avinash-amudala.com";
  const now = new Date();

  return [
    { url: baseUrl, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${baseUrl}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/experience`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/projects`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/projects/mcp-telecom`, lastModified: now, changeFrequency: "monthly", priority: 0.95 },
    { url: `${baseUrl}/projects/proxima`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/projects/llm-incident-copilot`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/talks`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/writing`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: `${baseUrl}/now`, lastModified: now, changeFrequency: "weekly", priority: 0.6 },
    { url: `${baseUrl}/archive`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    { url: `${baseUrl}/contact`, lastModified: now, changeFrequency: "yearly", priority: 0.5 },
    { url: `${baseUrl}/cv`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/uses`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  ];
}
