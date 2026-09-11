import type { MetadataRoute } from "next";
import { site } from "@/data/site";
import { locations } from "@/data/locations";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const entry = (
    path: string,
    priority: number,
    changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"],
  ) => ({ url: `${site.url}${path}`, lastModified: now, changeFrequency, priority });

  return [
    entry("", 1, "weekly"),
    entry("/menu", 0.9, "weekly"),
    entry("/locations", 0.8, "monthly"),
    ...locations.map((l) =>
      entry(`/locations/${l.slug}`, l.status === "open" ? 0.9 : 0.5, "monthly"),
    ),
    entry("/catering", 0.7, "monthly"),
    entry("/about", 0.5, "yearly"),
    entry("/gallery", 0.5, "monthly"),
    entry("/contact", 0.6, "yearly"),
    entry("/privacy", 0.2, "yearly"),
    entry("/terms", 0.2, "yearly"),
    entry("/accessibility", 0.2, "yearly"),
  ];
}
