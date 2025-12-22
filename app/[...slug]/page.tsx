// app/[...slug]/page.tsx
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import { getPageByPath, listStaticParams } from "../../lib/content";

type PageProps = {
  params: Promise<{ slug?: string[] }>;
};

export async function generateStaticParams() {
  return await listStaticParams();
}

export default async function Page({ params }: PageProps) {
  const { slug = [] } = await params;

  const path = "/" + slug.join("/") + (slug.length ? "/" : "");
  const page = await getPageByPath(path);

  if (!page) return notFound();

  return <ReactMarkdown>{page.body}</ReactMarkdown>;
}
