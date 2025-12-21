import fs from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";

const OUTPUT_DIR = path.join(process.cwd(), "output", "pages");

type RouteItem = { path: string; title: string };

function fileToRoute(fileName: string): string {
  if (fileName === "index.md") return "/";
  // our generator uses "__" to represent "/"
  const url = "/" + fileName.replace(/\.md$/, "").replace(/__/g, "/") + "/";
  return url;
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
    if (!f.endsWith(".md")) continue;
    const full = path.join(OUTPUT_DIR, f);
    const raw = await fs.readFile(full, "utf-8");
    const parsed = matter(raw);
    const title = (parsed.data?.title as string) || f;
    routes.push({ path: fileToRoute(f), title });
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

export async function getPageByPath(urlPath: string): Promise<{ body: string } | null> {
  // reverse mapping to filename
  if (urlPath === "/") {
    // homepage is a React component; we don't serve index.md here
    return null;
  }
  const cleaned = urlPath.replace(/^\//, "").replace(/\/$/, "");
  const fileName = cleaned.replace(/\//g, "__") + ".md";
  const full = path.join(OUTPUT_DIR, fileName);

  try {
    const raw = await fs.readFile(full, "utf-8");
    const parsed = matter(raw);
    return { body: parsed.content };
  } catch {
    return null;
  }
}
