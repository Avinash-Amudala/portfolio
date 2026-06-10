import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Writing",
  description:
    "Technical writing by Avinash Amudala — MCP-Telecom, PROXIMA, FAISS indexing, PyPI packaging, and AI safety patterns.",
};

export default function WritingPage() {
  const posts = getAllPosts();

  return (
    <article className="section-gap px-6">
      <div className="mx-auto max-w-[720px]">
        <h1 className="text-[48px] font-bold leading-[1.1] text-[hsl(var(--fg))] mb-4">
          Writing
        </h1>
        <p className="text-[hsl(var(--muted))] mb-12">
          Technical posts on what I&apos;m building and learning.
        </p>

        <div className="space-y-6">
          {posts.map((post) => {
            const inner = (
              <>
                <div className="flex items-baseline gap-4 mb-1">
                  <span className="shrink-0 text-sm font-[family-name:var(--font-mono)] text-[hsl(var(--muted))] w-24">
                    {post.date}
                  </span>
                  <div className="flex-1">
                    <p
                      className={`text-[17px] font-medium text-[hsl(var(--fg))] ${
                        post.published
                          ? "transition-colors group-hover:text-[hsl(var(--accent))]"
                          : ""
                      }`}
                    >
                      {post.title}
                    </p>
                  </div>
                </div>
                <div className="pl-28">
                  <p className="text-sm text-[hsl(var(--muted))] mb-2">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-[family-name:var(--font-mono)] text-[hsl(var(--muted))] border border-[hsl(var(--border))] rounded-full px-2 py-0.5"
                      >
                        {tag}
                      </span>
                    ))}
                    {post.published ? (
                      <span className="text-[10px] font-[family-name:var(--font-mono)] text-[hsl(var(--muted))]">
                        {post.readingMinutes} min read
                      </span>
                    ) : (
                      <span className="text-[10px] font-[family-name:var(--font-mono)] text-[hsl(var(--muted))] bg-[hsl(var(--subtle))] rounded-full px-2 py-0.5">
                        coming soon
                      </span>
                    )}
                  </div>
                </div>
              </>
            );

            return post.published ? (
              <Link
                key={post.slug}
                href={`/writing/${post.slug}`}
                className="group block rounded-xl -mx-4 px-4 py-3 transition-colors hover:bg-[hsl(var(--accent)/0.06)]"
              >
                {inner}
              </Link>
            ) : (
              <div key={post.slug} className="px-0 py-3">
                {inner}
              </div>
            );
          })}
        </div>
      </div>
    </article>
  );
}
