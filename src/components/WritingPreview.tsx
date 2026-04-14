"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const recentPosts = [
  {
    date: "Apr 2026",
    title: "Why I built MCP-Telecom: the first MCP server for network equipment",
    slug: "why-i-built-mcp-telecom",
  },
  {
    date: "Mar 2026",
    title: "Detecting Simpson\u2019s Paradox in A/B tests with PROXIMA",
    slug: "detecting-simpsons-paradox-in-ab-tests",
  },
  {
    date: "Feb 2026",
    title: "Shipping my first PyPI package: mcp-telecom v0.1 \u2192 v0.2",
    slug: "shipping-first-pypi-package",
  },
];

export default function WritingPreview() {
  return (
    <section className="py-12 px-6 border-t border-[hsl(var(--border))]">
      <div className="mx-auto max-w-[1200px]">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <div className="flex items-baseline justify-between mb-6">
            <h2 className="text-sm font-semibold text-[hsl(var(--fg))] uppercase tracking-wider">
              Selected Writing
            </h2>
            <Link
              href="/writing"
              className="text-sm text-[hsl(var(--muted))] hover:text-[hsl(var(--accent))] transition-colors"
            >
              All posts &rarr;
            </Link>
          </div>

          <div className="space-y-3">
            {recentPosts.map((post) => (
              <div key={post.slug} className="flex items-baseline gap-4">
                <span className="shrink-0 text-sm font-[family-name:var(--font-mono)] text-[hsl(var(--muted))] w-20">
                  {post.date}
                </span>
                <span className="text-[15px] text-[hsl(var(--fg))]">
                  {post.title}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
