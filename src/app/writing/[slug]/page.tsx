import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import { ArrowLeft, Clock } from "lucide-react";
import { getPublishedPosts, getPost } from "@/lib/posts";

export const dynamicParams = false;

export function generateStaticParams() {
  return getPublishedPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post || !post.published) return {};
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: { title: post.title, description: post.excerpt, type: "article" },
  };
}

const mdxComponents = {
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2
      className="mt-12 mb-4 text-2xl font-bold tracking-tight text-[hsl(var(--fg))]"
      {...props}
    />
  ),
  h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3
      className="mt-8 mb-3 text-xl font-semibold text-[hsl(var(--fg))]"
      {...props}
    />
  ),
  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p
      className="mb-5 text-[17px] leading-[1.7] text-[hsl(var(--muted))]"
      {...props}
    />
  ),
  a: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a className="text-[hsl(var(--accent))] hover:underline" {...props} />
  ),
  ul: (props: React.HTMLAttributes<HTMLUListElement>) => (
    <ul
      className="mb-5 list-disc space-y-2 pl-6 text-[17px] leading-[1.7] text-[hsl(var(--muted))]"
      {...props}
    />
  ),
  ol: (props: React.HTMLAttributes<HTMLOListElement>) => (
    <ol
      className="mb-5 list-decimal space-y-2 pl-6 text-[17px] leading-[1.7] text-[hsl(var(--muted))]"
      {...props}
    />
  ),
  blockquote: (props: React.HTMLAttributes<HTMLQuoteElement>) => (
    <blockquote
      className="mb-5 border-l-2 border-[hsl(var(--accent))] pl-4 italic text-[hsl(var(--muted))]"
      {...props}
    />
  ),
  code: (props: React.HTMLAttributes<HTMLElement>) => (
    <code
      className="rounded bg-[hsl(var(--code-bg))] px-1.5 py-0.5 font-[family-name:var(--font-mono)] text-[0.9em] text-[hsl(var(--accent))]"
      {...props}
    />
  ),
  pre: (props: React.HTMLAttributes<HTMLPreElement>) => (
    <pre
      className="mb-5 overflow-x-auto rounded-xl border border-[hsl(var(--border))] bg-[hsl(var(--code-bg))] p-4 font-[family-name:var(--font-mono)] text-sm leading-relaxed [&_code]:bg-transparent [&_code]:p-0 [&_code]:text-[hsl(var(--fg))]"
      {...props}
    />
  ),
  hr: () => (
    <hr className="my-10 border-[hsl(var(--border))]" />
  ),
};

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post || !post.published) notFound();

  return (
    <article className="section-gap px-6">
      <div className="mx-auto max-w-[720px]">
        <Link
          href="/writing"
          className="mb-8 inline-flex items-center gap-2 text-sm text-[hsl(var(--muted))] transition-colors hover:text-[hsl(var(--accent))]"
        >
          <ArrowLeft size={14} />
          All writing
        </Link>

        <header className="mb-10">
          <h1 className="mb-4 text-[40px] font-bold leading-[1.15] text-[hsl(var(--fg))]">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-[hsl(var(--muted))]">
            <span className="font-[family-name:var(--font-mono)]">
              {post.date}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Clock size={13} />
              {post.readingMinutes} min read
            </span>
            <span className="flex gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-[hsl(var(--border))] px-2 py-0.5 font-[family-name:var(--font-mono)] text-[10px]"
                >
                  {tag}
                </span>
              ))}
            </span>
          </div>
        </header>

        <MDXRemote source={post.content} components={mdxComponents} />
      </div>
    </article>
  );
}
