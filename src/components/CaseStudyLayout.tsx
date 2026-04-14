"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Github, ExternalLink, BookOpen } from "lucide-react";
import Link from "next/link";

interface CaseStudyLayoutProps {
  title: string;
  subtitle: string;
  status: string;
  problem: string;
  approach: string;
  diagram?: React.ReactNode;
  sections: { title: string; content: React.ReactNode }[];
  metrics: { label: string; value: string }[];
  techStack: { layer: string; items: string[] }[];
  links: { label: string; href: string; icon: "github" | "pypi" | "paper" }[];
  lessonsLearned?: string;
  timeline: string;
}

const iconMap = { github: Github, pypi: ExternalLink, paper: BookOpen };

export default function CaseStudyLayout({
  title,
  subtitle,
  status,
  problem,
  approach,
  diagram,
  sections,
  metrics,
  techStack,
  links,
  lessonsLearned,
  timeline,
}: CaseStudyLayoutProps) {
  return (
    <article className="section-gap px-6">
      <div className="mx-auto max-w-[720px]">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm text-[hsl(var(--muted))] hover:text-[hsl(var(--fg))] transition-colors mb-10"
          >
            <ArrowLeft size={14} />
            Back to projects
          </Link>

          <h1 className="text-[48px] font-bold leading-[1.1] text-[hsl(var(--fg))] mb-2">
            {title}
          </h1>
          <p className="text-[hsl(var(--muted))] text-lg mb-3">{subtitle}</p>

          <div className="flex flex-wrap items-center gap-3 mb-8">
            <span className="rounded-full bg-[hsl(var(--subtle))] px-3 py-1 text-xs font-[family-name:var(--font-mono)] text-[hsl(var(--muted))] border border-[hsl(var(--border))]">
              {status}
            </span>
            {links.map((link) => {
              const Icon = iconMap[link.icon];
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full border border-[hsl(var(--border))] px-3 py-1 text-xs text-[hsl(var(--muted))] transition-colors hover:text-[hsl(var(--fg))] hover:border-[hsl(var(--accent)/0.3)]"
                >
                  <Icon size={12} />
                  {link.label}
                </a>
              );
            })}
          </div>
        </motion.div>

        {/* Problem */}
        <section className="mb-12">
          <h2 className="text-[22px] font-semibold text-[hsl(var(--fg))] mb-3">
            Problem
          </h2>
          <p className="text-[17px] leading-[1.65] text-[hsl(var(--muted))]">
            {problem}
          </p>
        </section>

        {/* Approach */}
        <section className="mb-12">
          <h2 className="text-[22px] font-semibold text-[hsl(var(--fg))] mb-3">
            Approach
          </h2>
          <p className="text-[17px] leading-[1.65] text-[hsl(var(--muted))] mb-6">
            {approach}
          </p>
          {diagram && (
            <div className="rounded-lg border border-[hsl(var(--border))] bg-[hsl(var(--subtle))] p-6 overflow-x-auto">
              {diagram}
            </div>
          )}
        </section>

        {/* How it works */}
        <section className="mb-12">
          <h2 className="text-[22px] font-semibold text-[hsl(var(--fg))] mb-6">
            How it works
          </h2>
          <div className="space-y-8">
            {sections.map((section, i) => (
              <div key={i}>
                <h3 className="text-lg font-semibold text-[hsl(var(--fg))] mb-2">
                  {section.title}
                </h3>
                <div className="text-[15px] leading-[1.65] text-[hsl(var(--muted))]">
                  {section.content}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Metrics */}
        <section className="mb-12">
          <h2 className="text-[22px] font-semibold text-[hsl(var(--fg))] mb-4">
            Metrics
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {metrics.map((m) => (
              <div
                key={m.label}
                className="rounded-lg border border-[hsl(var(--border))] p-4 text-center"
              >
                <div className="text-2xl font-bold text-[hsl(var(--accent))] mb-1">
                  {m.value}
                </div>
                <div className="text-xs text-[hsl(var(--muted))]">
                  {m.label}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Tech Stack */}
        <section className="mb-12">
          <h2 className="text-[22px] font-semibold text-[hsl(var(--fg))] mb-4">
            Tech stack
          </h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {techStack.map((layer) => (
              <div
                key={layer.layer}
                className="rounded-lg border border-[hsl(var(--border))] p-4"
              >
                <p className="text-xs font-[family-name:var(--font-mono)] uppercase tracking-wider text-[hsl(var(--accent))] mb-2">
                  {layer.layer}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {layer.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-md bg-[hsl(var(--subtle))] px-2 py-0.5 text-xs text-[hsl(var(--muted))]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Lessons learned */}
        {lessonsLearned && (
          <section className="mb-12">
            <h2 className="text-[22px] font-semibold text-[hsl(var(--fg))] mb-3">
              Lessons learned
            </h2>
            <p className="text-[17px] leading-[1.65] text-[hsl(var(--muted))] italic">
              {lessonsLearned}
            </p>
          </section>
        )}

        {/* Timeline */}
        <section>
          <h2 className="text-[22px] font-semibold text-[hsl(var(--fg))] mb-3">
            Timeline
          </h2>
          <p className="text-[15px] leading-[1.65] text-[hsl(var(--muted))]">
            {timeline}
          </p>
        </section>
      </div>
    </article>
  );
}
