"use client";

import { motion } from "framer-motion";
import { ArrowRight, Github, ExternalLink, BookOpen } from "lucide-react";
import Link from "next/link";
import { flagshipProjects } from "@/data/portfolio-data";

export default function FlagshipCards() {
  return (
    <section className="section-padding mesh-gradient relative">
      <div className="mx-auto max-w-5xl">
        <div className="grid gap-6">
          {flagshipProjects.map((project, i) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 sm:p-8 transition-all duration-300 hover:border-[var(--color-accent)]/30 hover:shadow-xl hover:shadow-blue-500/5">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-[var(--color-accent)] transition-colors">
                      {project.title}
                    </h3>
                    <p className="mt-1 text-sm text-[var(--color-text-secondary)]">
                      {project.tagline}
                    </p>
                  </div>
                  <span className="shrink-0 rounded-full bg-[var(--color-surface-light)] px-3 py-1 text-xs font-mono text-[var(--color-accent-cyan)] border border-[var(--color-border)]">
                    {project.status}
                  </span>
                </div>

                <div className="grid sm:grid-cols-2 gap-4 mb-6">
                  <div>
                    <p className="text-xs font-mono uppercase tracking-wider text-[var(--color-text-secondary)] mb-1">
                      Problem
                    </p>
                    <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                      {project.problem}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-mono uppercase tracking-wider text-[var(--color-text-secondary)] mb-1">
                      Solution
                    </p>
                    <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                      {project.solution}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.metrics.map((metric) => (
                    <span
                      key={metric}
                      className="rounded-lg bg-[var(--color-accent)]/10 px-3 py-1.5 text-xs font-mono font-medium text-[var(--color-accent)]"
                    >
                      {metric}
                    </span>
                  ))}
                </div>

                {/* Live badges */}
                {project.slug === "mcp-telecom" && (
                  <div className="flex flex-wrap items-center gap-2 mb-4">
                    <img
                      src="https://img.shields.io/pypi/v/mcp-telecom?style=flat-square&color=3b82f6"
                      alt="PyPI version"
                      className="h-5"
                    />
                    <img
                      src="https://img.shields.io/pypi/dm/mcp-telecom?style=flat-square&color=06b6d4"
                      alt="PyPI downloads"
                      className="h-5"
                    />
                    <img
                      src="https://img.shields.io/github/stars/Avinash-Amudala/MCP-Telecom?style=flat-square&color=8b5cf6"
                      alt="GitHub stars"
                      className="h-5"
                    />
                    <img
                      src="https://img.shields.io/github/actions/workflow/status/Avinash-Amudala/MCP-Telecom/ci.yml?style=flat-square&label=CI"
                      alt="CI status"
                      className="h-5"
                    />
                  </div>
                )}
                {project.slug === "proxima" && (
                  <div className="flex flex-wrap items-center gap-2 mb-4">
                    <img
                      src="https://img.shields.io/github/stars/Avinash-Amudala/PROXIMA?style=flat-square&color=8b5cf6"
                      alt="GitHub stars"
                      className="h-5"
                    />
                    <img
                      src="https://img.shields.io/github/license/Avinash-Amudala/PROXIMA?style=flat-square"
                      alt="License"
                      className="h-5"
                    />
                  </div>
                )}

                <div className="flex items-center justify-between border-t border-[var(--color-border)] pt-4">
                  <div className="flex items-center gap-4">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-sm text-[var(--color-text-secondary)] transition-colors hover:text-white"
                      >
                        <Github size={14} />
                        Code
                      </a>
                    )}
                    {project.pypi && (
                      <a
                        href={project.pypi}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-sm text-[var(--color-text-secondary)] transition-colors hover:text-[var(--color-accent-cyan)]"
                      >
                        <ExternalLink size={14} />
                        PyPI
                      </a>
                    )}
                    {project.doi && (
                      <a
                        href={project.doi}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-sm text-[var(--color-text-secondary)] transition-colors hover:text-green-400"
                      >
                        <BookOpen size={14} />
                        Paper
                      </a>
                    )}
                  </div>
                  <Link
                    href={`/projects/${project.slug}`}
                    className="flex items-center gap-1.5 text-sm font-medium text-[var(--color-accent)] transition-colors hover:text-white group/link"
                  >
                    Case study
                    <ArrowRight
                      size={14}
                      className="transition-transform group-hover/link:translate-x-1"
                    />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
