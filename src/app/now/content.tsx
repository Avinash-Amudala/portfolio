"use client";

import { motion } from "framer-motion";
import { nowItems } from "@/data/portfolio-data";

export default function NowContent() {
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
            Now
          </h1>
          <p className="text-[var(--color-text-secondary)]">
            What I&apos;m focused on right now. Inspired by{" "}
            <a
              href="https://nownownow.com/about"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--color-accent)] hover:underline"
            >
              nownownow.com
            </a>
            .
          </p>
          <p className="mt-2 text-xs font-mono text-[var(--color-text-secondary)]">
            Last updated: April 2026
          </p>
        </motion.div>

        <div className="space-y-6">
          {nowItems.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              viewport={{ once: true }}
              className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6"
            >
              <h2 className="text-lg font-bold text-white mb-2">
                {item.label}
              </h2>
              <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </article>
  );
}
