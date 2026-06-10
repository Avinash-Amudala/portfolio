"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { nowItems } from "@/data/portfolio-data";

export default function NowSection() {
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
            <h2 className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.2em] text-[hsl(var(--accent))]">
              02 · Now{" "}
              <span className="normal-case text-[hsl(var(--muted))]">
                (April 2026)
              </span>
            </h2>
            <Link
              href="/now"
              className="text-sm text-[hsl(var(--muted))] hover:text-[hsl(var(--accent))] transition-colors"
            >
              Full page &rarr;
            </Link>
          </div>

          <div className="glass-card space-y-2 rounded-2xl p-6 text-[15px] text-[hsl(var(--muted))]">
            {nowItems.slice(0, 3).map((item) => (
              <p key={item.label}>
                <span className="text-[hsl(var(--accent))] mr-2">&rarr;</span>
                {item.description}
              </p>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
