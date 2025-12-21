// app/[...slug]/page.tsx
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import { getPageByPath, listStaticParams } from "../../lib/content";

export async function generateStaticParams() {
  return await listStaticParams();
}

export async function generateMetadata({ params }: { params: { slug?: string[] } }) {
  const slug = params.slug ?? [];
  const path = "/" + slug.join("/") + "/";
  const page = await getPageByPath(path);

  if (!page) return {};

  const title = page.frontmatter?.title || "Clear Skin Australia";
  const description =
    page.frontmatter?.primary_keyword
      ? `Australian skincare page: ${page.frontmatter.primary_keyword}`
      : "Australian skincare guides for clear, calm skin.";

  return {
    title,
    description,
    alternates: { canonical: `https://www.clearskinaustralia.com${path}` }
  };
}

export default async function Page({ params }: { params: { slug?: string[] } }) {
  const slug = params.slug ?? [];
  const path = "/" + slug.join("/") + "/";

  const page = await getPageByPath(path);
  if (!page) return notFound();

  return (
    <>
      <ReactMarkdown>{page.body}</ReactMarkdown>
    </>
  );
    }
    
