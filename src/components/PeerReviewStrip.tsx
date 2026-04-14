"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function PeerReviewStrip() {
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
              Academic &amp; Review
            </h2>
            <Link
              href="/talks"
              className="text-sm text-[hsl(var(--muted))] hover:text-[hsl(var(--accent))] transition-colors"
            >
              Full page &rarr;
            </Link>
          </div>

          <div className="grid gap-8 sm:grid-cols-2">
            <div>
              <p className="text-sm font-medium text-[hsl(var(--fg))] mb-2">
                Peer Reviewer at
              </p>
              <p className="text-[15px] leading-relaxed text-[hsl(var(--muted))]">
                AIAI 2026 · ACM (TOSEM, TOIT, TIST, Computing Surveys) · DMLR
                · Elsevier · Springer Nature · MDPI · alphaXiv
              </p>
            </div>
            <div>
              <p className="text-sm font-medium text-[hsl(var(--fg))] mb-2">
                Guest Lectures
              </p>
              <p className="text-[15px] leading-relaxed text-[hsl(var(--muted))]">
                San José State University (Fall 2026 Intro to AI · Spring 2027
                Foundations of Robotics · Fall 2026 5G/V2X) · Santa Clara
                University (industry collaborator, Responsible AI program)
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
