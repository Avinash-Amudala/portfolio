"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Github, ExternalLink, BookOpen } from "lucide-react";
import { flagshipProjects, archiveProjects } from "@/data/portfolio-data";

const filters = [
  { key: "all", label: "All" },
  { key: "ai-ml", label: "AI / ML" },
  { key: "full-stack", label: "Full-Stack" },
  { key: "systems", label: "Systems" },
  { key: "research", label: "Research" },
];

const allProjects = [
  ...flagshipProjects.map((p) => ({
    title: p.title,
    description: p.tagline,
    period: p.status,
    category: p.slug === "proxima" ? "research" : ("ai-ml" as string),
    tags: p.metrics.slice(0, 4),
    github: p.github,
    caseStudy: `/projects/${p.slug}`,
    pypi: p.pypi,
    doi: p.doi,
    isFlagship: true,
  })),
  ...archiveProjects.map((p) => ({
    title: p.title,
    description: p.description,
    period: p.period,
    category: p.category,
    tags: p.tags.slice(0, 4),
    github: p.github,
    caseStudy: null as string | null,
    pypi: undefined as string | undefined,
    doi: p.doi,
    live: p.live,
    isFlagship: false,
  })),
];

export default function ProjectsIndex() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filtered =
    activeFilter === "all"
      ? allProjects
      : allProjects.filter((p) => p.category === activeFilter);

  return (
    <article className="section-gap px-6">
      <div className="mx-auto max-w-[1200px]">
        <h1 className="text-[48px] font-bold leading-[1.1] text-[hsl(var(--fg))] mb-4">
          Projects
        </h1>
        <p className="text-[hsl(var(--muted))] mb-10">
          Every production system, research artifact, and side project
          I&apos;ve built, going back to undergrad.
        </p>

        {/* Filter bar */}
        <div className="flex flex-wrap gap-2 mb-10">
          {filters.map((filter) => (
            <button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                activeFilter === filter.key
                  ? "bg-[hsl(var(--accent))] text-[hsl(var(--accent-fg))]"
                  : "bg-[hsl(var(--subtle))] text-[hsl(var(--muted))] border border-[hsl(var(--border))] hover:text-[hsl(var(--fg))]"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.25 }}
                className="group rounded-lg border border-[hsl(var(--border))] bg-[hsl(var(--bg))] p-5 transition-all hover:border-[hsl(var(--accent)/0.3)]"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-[family-name:var(--font-mono)] uppercase tracking-wider text-[hsl(var(--muted))]">
                    {project.category}
                  </span>
                  {project.isFlagship && (
                    <span className="text-[10px] font-medium text-[hsl(var(--accent))] bg-[hsl(var(--accent)/0.1)] px-2 py-0.5 rounded-full">
                      Flagship
                    </span>
                  )}
                </div>

                <h3 className="font-semibold text-[hsl(var(--fg))] mb-1.5 group-hover:text-[hsl(var(--accent))] transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs text-[hsl(var(--muted))] leading-relaxed line-clamp-2 mb-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md border border-[hsl(var(--border))] px-2 py-0.5 text-[10px] text-[hsl(var(--muted))]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-3 pt-3 border-t border-[hsl(var(--border))] text-xs">
                  {project.caseStudy && (
                    <Link
                      href={project.caseStudy}
                      className="text-[hsl(var(--accent))] hover:underline font-medium"
                    >
                      Case study &rarr;
                    </Link>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[hsl(var(--muted))] hover:text-[hsl(var(--fg))] transition-colors inline-flex items-center gap-1"
                    >
                      <Github size={12} />
                      Code
                    </a>
                  )}
                  {"live" in project && project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[hsl(var(--muted))] hover:text-[hsl(var(--fg))] transition-colors inline-flex items-center gap-1"
                    >
                      <ExternalLink size={12} />
                      Live
                    </a>
                  )}
                  {project.doi && (
                    <a
                      href={project.doi}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[hsl(var(--muted))] hover:text-[hsl(var(--fg))] transition-colors inline-flex items-center gap-1"
                    >
                      <BookOpen size={12} />
                      Paper
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <p className="mt-10 text-sm text-[hsl(var(--muted))]">
          Looking for older work? See the{" "}
          <Link
            href="/archive"
            className="text-[hsl(var(--accent))] hover:underline"
          >
            archive
          </Link>
          .
        </p>
      </div>
    </article>
  );
}
