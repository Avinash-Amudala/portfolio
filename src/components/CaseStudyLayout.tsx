"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Github, ExternalLink, BookOpen } from "lucide-react";
import Link from "next/link";

interface CaseStudyLayoutProps {
  title: string;
  status: string;
  problem: string;
  approach: string;
  diagram?: React.ReactNode;
  sections: { title: string; content: React.ReactNode }[];
  metrics: { label: string; value: string }[];
  techStack: { layer: string; items: string[] }[];
  links: { label: string; href: string; icon: "github" | "pypi" | "paper" }[];
  timeline: string;
}

const iconMap = {
  github: Github,
  pypi: ExternalLink,
  paper: BookOpen,
};

export default function CaseStudyLayout({
  title,
  status,
  problem,
  approach,
  diagram,
  sections,
  metrics,
  techStack,
  links,
  timeline,
}: CaseStudyLayoutProps) {
  return (
    <article className="section-padding">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-[var(--color-text-secondary)] hover:text-white transition-colors mb-8"
          >
            <ArrowLeft size={14} />
            Back to home
          </Link>

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
            <h1 className="text-3xl sm:text-4xl font-bold gradient-text">
              {title}
            </h1>
            <span className="shrink-0 rounded-full bg-[var(--color-surface-light)] px-3 py-1 text-xs font-mono text-[var(--color-accent-cyan)] border border-[var(--color-border)]">
              {status}
            </span>
          </div>

          <div className="flex flex-wrap gap-3 mb-12">
            {links.map((link) => {
              const Icon = iconMap[link.icon];
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-2 text-sm text-[var(--color-text-secondary)] transition-all hover:border-[var(--color-accent)]/30 hover:text-white"
                >
                  <Icon size={14} />
                  {link.label}
                </a>
              );
            })}
          </div>
        </motion.div>

        {/* Problem */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-xl font-bold text-white mb-3">Problem</h2>
          <p className="text-[var(--color-text-secondary)] leading-relaxed">
            {problem}
          </p>
        </motion.section>

        {/* Approach */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-xl font-bold text-white mb-3">Approach</h2>
          <p className="text-[var(--color-text-secondary)] leading-relaxed mb-6">
            {approach}
          </p>
          {diagram && (
            <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 overflow-x-auto">
              {diagram}
            </div>
          )}
        </motion.section>

        {/* How it works */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-xl font-bold text-white mb-6">How it works</h2>
          <div className="space-y-8">
            {sections.map((section, i) => (
              <div key={i}>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {section.title}
                </h3>
                <div className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                  {section.content}
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Metrics */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-xl font-bold text-white mb-4">Metrics</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {metrics.map((m) => (
              <div
                key={m.label}
                className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-4 text-center"
              >
                <div className="text-2xl font-bold gradient-text mb-1">
                  {m.value}
                </div>
                <div className="text-xs text-[var(--color-text-secondary)]">
                  {m.label}
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Tech Stack */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-xl font-bold text-white mb-4">Tech Stack</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {techStack.map((layer) => (
              <div
                key={layer.layer}
                className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-4"
              >
                <p className="text-xs font-mono uppercase tracking-wider text-[var(--color-accent-cyan)] mb-2">
                  {layer.layer}
                </p>
                <div className="flex flex-wrap gap-2">
                  {layer.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-lg bg-[var(--color-surface-light)] px-2.5 py-1 text-xs text-[var(--color-text-secondary)]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Timeline */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-xl font-bold text-white mb-3">Timeline</h2>
          <p className="text-[var(--color-text-secondary)]">{timeline}</p>
        </motion.section>
      </div>
    </article>
  );
}
