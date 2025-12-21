// app/page.tsx
import Link from "next/link";
import { listAllRoutes } from "../lib/content";

export default async function Home() {
  const routes = await listAllRoutes();

  return (
    <>
      <span className="badge">Generated site</span>
      <h1>Clear Skin Starts With the Right Australian Skincare</h1>
      <p>
        This site is generated from a structured blueprint (sitemap + link map) and rendered as static pages.
      </p>

      <div className="card">
        <h2 style={{ marginTop: 0 }}>All pages</h2>
        <ul className="list">
          {routes.map((r) => (
            <li key={r.path}>
              <Link href={r.path}>{r.title}</Link>
              {r.role ? <span style={{ color: "#777" }}> — {r.role}</span> : null}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
