// app/[...slug]/page.tsx
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import { getPageByPath, listStaticParams } from "../../lib/content";

// Next.js 15: params is async (Promise)
type Props = {
  params: Promise<{ slug?: string[] }>;
};

export async function generateStaticParams() {
  return await listStaticParams();
}

export default async function Page(props: Props) {
  const { slug } = await props.params;
  const parts = slug ?? [];
  const path = "/" + parts.join("/") + (parts.length ? "/" : "");

  const page = await getPageByPath(path);
  if (!page) return notFound();

  return <ReactMarkdown>{page.body}</ReactMarkdown>;
}
