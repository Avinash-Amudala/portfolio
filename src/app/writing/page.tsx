import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Writing",
  description:
    "Technical writing by Avinash Amudala — MCP-Telecom, PROXIMA, FAISS indexing, PyPI packaging, and AI safety patterns.",
};

const posts = [
  {
    date: "2026-04-15",
    title: "Why I built MCP-Telecom: the first MCP server for network equipment",
    slug: "why-i-built-mcp-telecom",
    summary: "The first MCP server for network equipment, and why it needed to exist.",
    tags: ["mcp", "telecom", "open-source"],
    published: false,
  },
  {
    date: "2026-03-20",
    title: "Detecting Simpson\u2019s Paradox in A/B tests with PROXIMA",
    slug: "detecting-simpsons-paradox-in-ab-tests",
    summary: "How PROXIMA flags when a proxy metric is about to mislead you at the segment level.",
    tags: ["experimentation", "statistics", "research"],
    published: false,
  },
  {
    date: "2026-02-28",
    title: "Shipping my first PyPI package: mcp-telecom v0.1 \u2192 v0.2",
    slug: "shipping-first-pypi-package",
    summary: "Lessons from taking mcp-telecom from \u201cworks on my machine\u201d to pip install.",
    tags: ["python", "packaging", "open-source"],
    published: false,
  },
  {
    date: "2026-02-10",
    title: "FAISS index choice: IVF-PQ vs HNSW for telecom log similarity",
    slug: "faiss-index-choice-ivf-pq-vs-hnsw",
    summary: "Why I chose IVF-PQ for telecom log similarity and where HNSW wins instead.",
    tags: ["vector-search", "faiss", "performance"],
    published: false,
  },
  {
    date: "2026-01-25",
    title: "Building AI agents that can\u2019t break production",
    slug: "building-ai-agents-that-cant-break-production",
    summary: "The safety gate pattern from MCP-Telecom, generalized.",
    tags: ["llm", "safety", "infrastructure"],
    published: false,
  },
];

export default function WritingPage() {
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
          {posts.map((post) => (
            <div key={post.slug} className="group">
              <div className="flex items-baseline gap-4 mb-1">
                <span className="shrink-0 text-sm font-[family-name:var(--font-mono)] text-[hsl(var(--muted))] w-24">
                  {post.date}
                </span>
                <div className="flex-1">
                  <p className="text-[17px] font-medium text-[hsl(var(--fg))]">
                    {post.title}
                  </p>
                </div>
              </div>
              <div className="pl-28">
                <p className="text-sm text-[hsl(var(--muted))] mb-2">
                  {post.summary}
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
                  {!post.published && (
                    <span className="text-[10px] font-[family-name:var(--font-mono)] text-[hsl(var(--muted))] bg-[hsl(var(--subtle))] rounded-full px-2 py-0.5">
                      coming soon
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}
