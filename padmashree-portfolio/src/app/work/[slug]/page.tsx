import { readFile } from "node:fs/promises";
import path from "node:path";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { playbooks, getPlaybook } from "@/content/playbooks";
import { mdxComponents } from "@/components/mdx/components";
import { PlaybookLayout } from "@/components/site/PlaybookLayout";

export const dynamicParams = false;

export function generateStaticParams() {
  return playbooks.filter((p) => p.hasWriteup).map((p) => ({ slug: p.slug }));
}

async function readPlaybookSource(slug: string): Promise<string | null> {
  try {
    const file = path.join(process.cwd(), "src", "content", "work", `${slug}.mdx`);
    return await readFile(file, "utf8");
  } catch {
    return null;
  }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const p = getPlaybook(slug);
  if (!p) return {};
  return {
    title: p.title,
    description: p.insight,
    openGraph: { title: p.title, description: p.insight, type: "article" },
  };
}

export default async function PlaybookPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const playbook = getPlaybook(slug);
  if (!playbook || !playbook.hasWriteup) notFound();

  const source = await readPlaybookSource(slug);
  if (source === null) notFound();

  return (
    <PlaybookLayout playbook={playbook}>
      <MDXRemote source={source} components={mdxComponents} />
    </PlaybookLayout>
  );
}
