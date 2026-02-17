"use client";

import { motion } from "framer-motion";
import { BookOpen, ExternalLink, Award } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { publications, certifications } from "@/data/portfolio-data";

export default function Publications() {
  return (
    <section id="publications" className="section-padding dot-grid">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          title="Publications & Certifications"
          subtitle="Research contributions and professional credentials"
        />

        {/* Publications */}
        <div className="mb-16">
          <h3 className="mb-6 flex items-center gap-2 text-lg font-semibold text-white">
            <BookOpen size={20} className="text-[var(--color-accent-purple)]" />
            Publications
          </h3>
          <div className="grid gap-4 md:grid-cols-2">
            {publications.map((pub, i) => (
              <motion.div
                key={pub.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-5 transition-all hover:border-[var(--color-accent-purple)]/30"
              >
                <div className="mb-2 flex items-center justify-between">
                  <span className="font-mono text-xs text-[var(--color-accent-purple)]">
                    {pub.year}
                  </span>
                  {pub.link && (
                    <a
                      href={pub.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[var(--color-text-secondary)] transition-colors hover:text-[var(--color-accent-purple)]"
                    >
                      <ExternalLink size={14} />
                    </a>
                  )}
                </div>
                <h4 className="mb-2 font-semibold text-white text-sm">
                  {pub.title}
                </h4>
                <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                  {pub.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <h3 className="mb-6 flex items-center gap-2 text-lg font-semibold text-white">
            <Award size={20} className="text-[var(--color-accent-cyan)]" />
            Certifications
          </h3>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {certifications.map((cert, i) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                viewport={{ once: true }}
                className="rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] p-4 transition-all hover:border-[var(--color-accent-cyan)]/30"
              >
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 rounded-md bg-[var(--color-accent-cyan)]/10 p-1.5">
                    <Award size={14} className="text-[var(--color-accent-cyan)]" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-white">
                      {cert.name}
                    </h4>
                    <p className="text-xs text-[var(--color-text-secondary)]">
                      {cert.issuer}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
