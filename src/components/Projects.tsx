"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, FileText, BookOpen } from "lucide-react";
import { projects, type Project } from "@/data/portfolio-data";

const filters = [
  { key: "all", label: "All" },
  { key: "ai-ml", label: "AI / ML" },
  { key: "full-stack", label: "Full-Stack" },
  { key: "systems", label: "Systems" },
  { key: "research", label: "Research" },
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filtered =
    activeFilter === "all"
      ? projects.filter((p) => !p.featured)
      : projects.filter(
          (p) => p.category === activeFilter && !p.featured
        );

  return (
    <div className="mt-16">
      <div className="mx-auto max-w-6xl">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8 text-center text-2xl font-bold text-white"
        >
          All Projects
        </motion.h3>

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8 flex flex-wrap justify-center gap-2"
        >
          {filters.map((filter) => (
            <button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key)}
              className={`rounded-lg px-4 py-2 text-sm font-medium transition-all ${
                activeFilter === filter.key
                  ? "bg-[var(--color-accent)] text-white shadow-lg shadow-blue-500/20"
                  : "bg-[var(--color-surface)] text-[var(--color-text-secondary)] hover:bg-[var(--color-surface-light)] hover:text-white"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </motion.div>

        {/* Project grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3 }}
      className="group rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] p-5 transition-all hover:border-[var(--color-accent)]/20 hover:shadow-lg hover:shadow-blue-500/5"
    >
      <div className="mb-3 flex items-center justify-between">
        <div
          className={`h-2 w-2 rounded-full ${
            project.category === "ai-ml"
              ? "bg-[var(--color-accent-cyan)]"
              : project.category === "research"
              ? "bg-[var(--color-accent-purple)]"
              : project.category === "full-stack"
              ? "bg-[var(--color-accent)]"
              : "bg-orange-400"
          }`}
        />
        <span className="font-mono text-xs text-[var(--color-text-secondary)]">
          {project.period}
        </span>
      </div>

      <h4 className="mb-2 font-semibold text-white group-hover:text-[var(--color-accent)] transition-colors">
        {project.title}
      </h4>

      <p className="mb-3 text-xs leading-relaxed text-[var(--color-text-secondary)] line-clamp-3">
        {project.description}
      </p>

      <div className="mb-3 flex flex-wrap gap-1.5">
        {project.tags.slice(0, 4).map((tag) => (
          <span
            key={tag}
            className="rounded bg-[var(--color-surface-light)] px-2 py-0.5 text-[10px] font-medium text-[var(--color-text-secondary)]"
          >
            {tag}
          </span>
        ))}
        {project.tags.length > 4 && (
          <span className="rounded bg-[var(--color-surface-light)] px-2 py-0.5 text-[10px] font-medium text-[var(--color-text-secondary)]">
            +{project.tags.length - 4}
          </span>
        )}
      </div>

      <div className="flex items-center gap-3">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--color-text-secondary)] transition-colors hover:text-[var(--color-accent)]"
          >
            <Github size={14} />
          </a>
        )}
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--color-text-secondary)] transition-colors hover:text-[var(--color-accent-cyan)]"
          >
            <ExternalLink size={14} />
          </a>
        )}
        {project.writeup && (
          <a
            href={project.writeup}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--color-text-secondary)] transition-colors hover:text-[var(--color-accent-purple)]"
          >
            <FileText size={14} />
          </a>
        )}
        {project.doi && (
          <a
            href={project.doi}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--color-text-secondary)] transition-colors hover:text-green-400"
          >
            <BookOpen size={14} />
          </a>
        )}
      </div>
    </motion.div>
  );
}
