"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink, FileText, BookOpen } from "lucide-react";
import { archiveProjects, type Project } from "@/data/portfolio-data";

const filters = [
  { key: "all", label: "All" },
  { key: "ai-ml", label: "AI / ML" },
  { key: "full-stack", label: "Full-Stack" },
  { key: "systems", label: "Systems" },
];

export default function ArchiveContent() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filtered =
    activeFilter === "all"
      ? archiveProjects
      : archiveProjects.filter((p) => p.category === activeFilter);

  return (
    <article className="section-padding">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h1 className="text-3xl sm:text-4xl font-bold gradient-text mb-3">
            Archive
          </h1>
          <p className="text-[var(--color-text-secondary)]">
            All projects beyond the three flagships. Sorted by recency.
          </p>
        </motion.div>

        <div className="mb-8 flex flex-wrap gap-2">
          {filters.map((filter) => (
            <button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key)}
              className={`rounded-xl px-4 py-2 text-sm font-medium transition-all duration-300 ${
                activeFilter === filter.key
                  ? "bg-[var(--color-accent)] text-white shadow-lg shadow-blue-500/20"
                  : "bg-[var(--color-surface)] text-[var(--color-text-secondary)] hover:bg-[var(--color-surface-light)] hover:text-white border border-[var(--color-border)]"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <ArchiveCard key={project.title} project={project} />
            ))}
          </AnimatePresence>
        </div>
      </div>
    </article>
  );
}

function ArchiveCard({ project }: { project: Project }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3 }}
      className="group rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-5 transition-all duration-300 hover:border-[var(--color-accent)]/20 hover:shadow-lg hover:shadow-blue-500/5"
    >
      <div className="mb-3 flex items-center justify-between">
        <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--color-text-secondary)]">
          {project.category === "ai-ml"
            ? "AI/ML"
            : project.category === "full-stack"
            ? "Full-Stack"
            : "Systems"}
        </span>
        <span className="font-mono text-xs text-[var(--color-text-secondary)]">
          {project.period}
        </span>
      </div>

      <h3 className="mb-2 font-bold text-white group-hover:text-[var(--color-accent)] transition-colors">
        {project.title}
      </h3>

      <p className="mb-3 text-xs leading-relaxed text-[var(--color-text-secondary)] line-clamp-3">
        {project.description}
      </p>

      <div className="mb-3 flex flex-wrap gap-1.5">
        {project.tags.slice(0, 4).map((tag) => (
          <span
            key={tag}
            className="rounded-md bg-[var(--color-surface-light)] px-2 py-0.5 text-[10px] font-medium text-[var(--color-text-secondary)]"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="flex items-center gap-3 pt-2 border-t border-[var(--color-border)]">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--color-text-secondary)] transition-all hover:text-[var(--color-accent)]"
          >
            <Github size={14} />
          </a>
        )}
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--color-text-secondary)] transition-all hover:text-[var(--color-accent-cyan)]"
          >
            <ExternalLink size={14} />
          </a>
        )}
        {project.writeup && (
          <a
            href={project.writeup}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--color-text-secondary)] transition-all hover:text-[var(--color-accent-purple)]"
          >
            <FileText size={14} />
          </a>
        )}
        {project.doi && (
          <a
            href={project.doi}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--color-text-secondary)] transition-all hover:text-green-400"
          >
            <BookOpen size={14} />
          </a>
        )}
      </div>
    </motion.div>
  );
}
