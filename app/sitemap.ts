// app/sitemap.ts
import { MetadataRoute } from "next";
import { listAllRoutes } from "../lib/content";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = "https://www.clearskinaustralia.com";
  const routes = await listAllRoutes();

  const items: MetadataRoute.Sitemap = [
    { url: `${base}/`, lastModified: new Date() }
  ];

  for (const r of routes) {
    if (r.path === "/") continue;
    items.push({
      url: `${base}${r.path}`,
      lastModified: new Date()
    });
  }

  return items;
        }
