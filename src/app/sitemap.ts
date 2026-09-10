import type { MetadataRoute } from "next";
import { site } from "@/data/site";
import { locations } from "@/data/locations";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/menu", "/about", "/locations", "/gallery", "/catering", "/contact"];
  const base = routes.map((r) => ({
    url: `${site.url}${r}`,
    lastModified: new Date(),
  }));
  const locs = locations.map((l) => ({
    url: `${site.url}/locations/${l.slug}`,
    lastModified: new Date(),
  }));
  return [...base, ...locs];
}
