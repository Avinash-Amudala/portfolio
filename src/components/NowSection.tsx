"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { nowItems } from "@/data/portfolio-data";

export default function NowSection() {
  return (
    <section className="section-padding relative">
      <div className="mx-auto max-w-5xl">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-white">Now</h2>
          <Link
            href="/now"
            className="flex items-center gap-1.5 text-sm text-[var(--color-text-secondary)] hover:text-white transition-colors"
          >
            Full page
            <ArrowRight size={14} />
          </Link>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {nowItems.slice(0, 4).map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              viewport={{ once: true }}
              className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-5 transition-all hover:border-[var(--color-accent)]/20"
            >
              <h3 className="text-sm font-semibold text-white mb-1">
                {item.label}
              </h3>
              <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
