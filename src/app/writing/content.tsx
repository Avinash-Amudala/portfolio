"use client";

import { motion } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";
import Link from "next/link";

interface Post {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  readyToPublish: boolean;
}

const posts: Post[] = [
  {
    slug: "why-i-built-mcp-telecom",
    title:
      "Why I built MCP-Telecom: the first MCP server for network equipment",
    date: "2026-05-01",
    excerpt:
      "How I went from debugging Nokia routers to building a 60-tool MCP server that lets AI agents safely manage multi-vendor networks.",
    readyToPublish: false,
  },
  {
    slug: "detecting-simpsons-paradox-in-ab-tests",
    title: "Detecting Simpson's Paradox in A/B tests with PROXIMA",
    date: "2026-05-15",
    excerpt:
      "When your A/B test shows a positive overall effect but a negative effect in every subgroup, your proxy metric is lying. Here's how PROXIMA catches it.",
    readyToPublish: false,
  },
  {
    slug: "shipping-first-pypi-package",
    title:
      "Shipping my first PyPI package: lessons from mcp-telecom v0.1 to v0.2",
    date: "2026-06-01",
    excerpt:
      "Everything I learned about Python packaging, CI/CD for library releases, and the surprisingly tricky parts of publishing to PyPI.",
    readyToPublish: false,
  },
];

export default function WritingContent() {
  return (
    <article className="section-padding">
      <div className="mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h1 className="text-3xl sm:text-4xl font-bold gradient-text mb-3">
            Writing
          </h1>
          <p className="text-[var(--color-text-secondary)]">
            Technical posts on what I&apos;m building and learning.
          </p>
        </motion.div>

        <div className="space-y-6">
          {posts.map((post, i) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              viewport={{ once: true }}
              className="group rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 transition-all hover:border-[var(--color-accent)]/20"
            >
              <div className="flex items-center gap-2 mb-2">
                <Calendar
                  size={12}
                  className="text-[var(--color-text-secondary)]"
                />
                <span className="text-xs font-mono text-[var(--color-text-secondary)]">
                  {post.date}
                </span>
                {!post.readyToPublish && (
                  <span className="rounded-full bg-[var(--color-surface-light)] px-2 py-0.5 text-[10px] font-mono text-[var(--color-text-secondary)] border border-[var(--color-border)]">
                    Coming soon
                  </span>
                )}
              </div>
              <h2 className="text-lg font-bold text-white mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                {post.title}
              </h2>
              <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-3">
                {post.excerpt}
              </p>
              {post.readyToPublish && (
                <Link
                  href={`/writing/${post.slug}`}
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--color-accent)] hover:underline"
                >
                  Read
                  <ArrowRight size={14} />
                </Link>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </article>
  );
}
