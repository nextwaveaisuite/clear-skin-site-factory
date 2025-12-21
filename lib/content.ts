// lib/content.ts
import fs from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";

const OUTPUT_DIR = path.join(process.cwd(), "output", "pages");

export type Frontmatter = {
  title?: string;
  role?: string;
  url?: string;
  primary_keyword?: string;
  secondary_keywords?: string;
  geo?: string;
  generated_at?: string;
};

export type RouteItem = {
  path: string;
  title: string;
  role?: string;
};

function isMarkdownPageFile(fileName: string): boolean {
  if (!fileName.endsWith(".md")) return false;
  // Ignore placeholder READMEs so they don't show up on the homepage list
  if (fileName.toLowerCase().includes("readme")) return false;
  return true;
}

function fileToRoute(fileName: string): string {
  if (fileName === "index.md") return "/";
  // generator uses "__" to represent "/"
  const url = "/" + fileName.replace(/\.md$/, "").replace(/__/g, "/") + "/";
  return url;
}

function routeToFile(route: string): string {
  // route always ends with trailing slash (except "/")
  if (route === "/") return "index.md";
  const cleaned = route.replace(/^\//, "").replace(/\/$/, "");
  return cleaned.replace(/\//g, "__") + ".md";
}

export async function listAllRoutes(): Promise<RouteItem[]> {
  let files: string[] = [];
  try {
    files = await fs.readdir(OUTPUT_DIR);
  } catch {
    return [];
  }

  const routes: RouteItem[] = [];
  for (const f of files) {
    if (!isMarkdownPageFile(f)) continue;

    const full = path.join(OUTPUT_DIR, f);
    const raw = await fs.readFile(full, "utf-8");
    const parsed = matter(raw);

    const fm = (parsed.data || {}) as Frontmatter;

    routes.push({
      path: fileToRoute(f),
      title: fm.title || f,
      role: fm.role
    });
  }

  routes.sort((a, b) => a.path.localeCompare(b.path));
  return routes;
}

export async function listStaticParams(): Promise<{ slug: string[] }[]> {
  const routes = await listAllRoutes();
  return routes
    .filter((r) => r.path !== "/")
    .map((r) => ({ slug: r.path.replace(/^\//, "").replace(/\/$/, "").split("/") }));
}

export async function getPageByPath(
  urlPath: string
): Promise<{ frontmatter: Frontmatter; body: string } | null> {
  // home is a React page (app/page.tsx), but we still allow index.md for internal use if needed
  const fileName = routeToFile(urlPath);
  const full = path.join(OUTPUT_DIR, fileName);

  try {
    const raw = await fs.readFile(full, "utf-8");
    const parsed = matter(raw);
    return {
      frontmatter: (parsed.data || {}) as Frontmatter,
      body: parsed.content
    };
  } catch {
    return null;
  }
}
