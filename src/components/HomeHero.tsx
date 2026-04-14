"use client";

import { motion } from "framer-motion";
import { personalInfo } from "@/data/portfolio-data";

export default function HomeHero() {
  return (
    <section className="relative section-gap px-6">
      <div className="mx-auto max-w-[1200px]">
        {/* Name */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-lg font-semibold text-[hsl(var(--fg))] mb-1"
        >
          Avinash Amudala
        </motion.p>

        {/* Kicker */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.03 }}
          className="text-sm text-[hsl(var(--muted))] mb-8"
        >
          Software Engineer · Nokia · Sunnyvale
        </motion.p>

        {/* Display headline */}
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.06 }}
          className="text-display text-[hsl(var(--fg))] mb-6 max-w-[900px]"
        >
          I build AI systems for telecom and experimentation.
        </motion.h1>

        {/* Sub-headline */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-[22px] leading-[1.4] text-[hsl(var(--muted))] mb-8 max-w-[800px]"
        >
          Creator of{" "}
          <a
            href={personalInfo.pypi}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[hsl(var(--accent))] hover:underline"
          >
            MCP-Telecom
          </a>{" "}
          — the first Model Context Protocol server for network equipment.
          60+ tools, 7 vendors, shipped on PyPI. Currently researching proxy
          metric validation for online experiments.
        </motion.p>

        {/* Inline link bar */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm mb-10"
        >
          {[
            { label: "GitHub", href: personalInfo.github },
            { label: "PyPI", href: personalInfo.pypi },
            { label: "Google Scholar", href: personalInfo.scholar },
            { label: "ORCID", href: personalInfo.orcid },
            { label: "Resume", href: "/resumes/avinash-amudala-swe.pdf" },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.label === "Resume" ? "_blank" : "_blank"}
              rel="noopener noreferrer"
              className="text-[hsl(var(--muted))] hover:text-[hsl(var(--accent))] transition-colors"
            >
              {link.label}
            </a>
          ))}
        </motion.div>

        {/* Status pill */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="inline-flex items-center gap-2 rounded-full border border-[hsl(var(--border))] bg-[hsl(var(--subtle))] px-4 py-2"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[hsl(var(--success))] opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[hsl(var(--success))]" />
          </span>
          <span className="text-xs text-[hsl(var(--muted))]">
            Available for senior SWE / AI infra roles
          </span>
        </motion.div>
      </div>
    </section>
  );
}
