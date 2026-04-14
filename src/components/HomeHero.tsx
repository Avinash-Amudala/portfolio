"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink, BookOpen } from "lucide-react";
import { personalInfo } from "@/data/portfolio-data";

export default function HomeHero() {
  return (
    <section className="relative flex min-h-[80vh] items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#050510] via-[#0a0a1a] to-[var(--color-background)]" />

      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-[var(--color-accent)] opacity-[0.04] blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 h-[400px] w-[400px] rounded-full bg-[var(--color-accent-purple)] opacity-[0.03] blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)]/50 px-4 py-1.5 mb-8 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
            </span>
            <span className="text-xs font-medium text-[var(--color-text-secondary)]">
              Available for opportunities
            </span>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl leading-tight"
        >
          <span className="text-[var(--color-text-primary)]">
            I build AI systems for telecom and experimentation.
          </span>{" "}
          <span className="text-[var(--color-text-secondary)]">
            Creator of{" "}
            <a
              href={personalInfo.pypi}
              target="_blank"
              rel="noopener noreferrer"
              className="gradient-text hover:underline"
            >
              MCP-Telecom
            </a>{" "}
            — the first Model Context Protocol server for network equipment.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8 text-lg font-mono text-[var(--color-accent-cyan)]"
        >
          {personalInfo.heroMetrics}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex items-center justify-center gap-6 flex-wrap"
        >
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-medium text-[var(--color-text-secondary)] transition-colors hover:text-white"
          >
            <Github size={16} />
            GitHub
          </a>
          <a
            href={personalInfo.pypi}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-medium text-[var(--color-text-secondary)] transition-colors hover:text-white"
          >
            <ExternalLink size={16} />
            PyPI
          </a>
          <a
            href={personalInfo.scholar}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-medium text-[var(--color-text-secondary)] transition-colors hover:text-white"
          >
            <BookOpen size={16} />
            Google Scholar
          </a>
        </motion.div>
      </div>
    </section>
  );
}
