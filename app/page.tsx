import Link from "next/link";
import { listAllRoutes } from "../lib/content";

export default async function Home() {
  const routes = await listAllRoutes();
  return (
    <>
      <h1>Clear Skin Starts With the Right Australian Skincare</h1>
      <p>
        This site is generated from a structured blueprint (sitemap + link map) and rendered as static pages.
      </p>

      <h2>All pages</h2>
      <ul>
        {routes.map((r) => (
          <li key={r.path}>
            <Link href={r.path}>{r.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
