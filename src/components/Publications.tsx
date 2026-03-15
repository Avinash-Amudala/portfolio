"use client";

import { motion } from "framer-motion";
import { BookOpen, ExternalLink, Award, ArrowUpRight } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { publications, certifications } from "@/data/portfolio-data";
import { Spotlight } from "@/components/ui/spotlight";

export default function Publications() {
  return (
    <section id="publications" className="section-padding mesh-gradient relative">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          title="Publications & Certifications"
          subtitle="Research contributions and professional credentials"
        />

        {/* Publications */}
        <div className="mb-16">
          <h3 className="mb-6 flex items-center gap-2 text-lg font-semibold text-white">
            <div className="rounded-lg bg-[var(--color-accent-purple)]/10 p-1.5">
              <BookOpen size={18} className="text-[var(--color-accent-purple)]" />
            </div>
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
                className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 transition-all hover:border-[var(--color-accent-purple)]/30 hover:shadow-lg hover:shadow-purple-500/5 hover:-translate-y-1 relative overflow-hidden group"
              >
                <Spotlight size={250} className="from-purple-500/15 via-transparent to-transparent" />
                <div className="mb-3 flex items-center justify-between">
                  <span className="font-mono text-xs text-[var(--color-accent-purple)] bg-[var(--color-accent-purple)]/10 px-2.5 py-0.5 rounded-full">
                    {pub.year}
                  </span>
                  {pub.link && (
                    <a
                      href={pub.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-[var(--color-text-secondary)] transition-colors hover:text-[var(--color-accent-purple)]"
                    >
                      <ExternalLink size={14} />
                      <ArrowUpRight size={10} />
                    </a>
                  )}
                </div>
                <h4 className="mb-2 font-bold text-white text-sm group-hover:text-[var(--color-accent-purple)] transition-colors">
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
            <div className="rounded-lg bg-[var(--color-accent-cyan)]/10 p-1.5">
              <Award size={18} className="text-[var(--color-accent-cyan)]" />
            </div>
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
                className="glass-card rounded-xl p-4 group"
              >
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 rounded-lg bg-[var(--color-accent-cyan)]/10 p-2 transition-transform group-hover:scale-110">
                    <Award size={14} className="text-[var(--color-accent-cyan)]" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white group-hover:text-[var(--color-accent-cyan)] transition-colors">
                      {cert.name}
                    </h4>
                    <p className="text-xs text-[var(--color-text-secondary)] mt-0.5">
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
