"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, FileText, BookOpen, ArrowUpRight } from "lucide-react";
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
              className={`rounded-xl px-4 py-2 text-sm font-medium transition-all duration-300 ${
                activeFilter === filter.key
                  ? "bg-[var(--color-accent)] text-white shadow-lg shadow-blue-500/20 -translate-y-0.5"
                  : "bg-[var(--color-surface)] text-[var(--color-text-secondary)] hover:bg-[var(--color-surface-light)] hover:text-white border border-[var(--color-border)]"
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
      className="group rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-5 transition-all duration-300 hover:border-[var(--color-accent)]/20 hover:shadow-lg hover:shadow-blue-500/5 hover:-translate-y-1"
    >
      <div className="mb-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div
            className={`h-2.5 w-2.5 rounded-full ${
              project.category === "ai-ml"
                ? "bg-[var(--color-accent-cyan)] shadow-sm shadow-cyan-500/50"
                : project.category === "research"
                ? "bg-[var(--color-accent-purple)] shadow-sm shadow-purple-500/50"
                : project.category === "full-stack"
                ? "bg-[var(--color-accent)] shadow-sm shadow-blue-500/50"
                : "bg-orange-400 shadow-sm shadow-orange-400/50"
            }`}
          />
          <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--color-text-secondary)]">
            {project.category === "ai-ml" ? "AI/ML" : project.category === "full-stack" ? "Full-Stack" : project.category === "research" ? "Research" : "Systems"}
          </span>
        </div>
        <span className="font-mono text-xs text-[var(--color-text-secondary)]">
          {project.period}
        </span>
      </div>

      <h4 className="mb-2 font-bold text-white group-hover:text-[var(--color-accent)] transition-colors">
        {project.title}
      </h4>

      <p className="mb-3 text-xs leading-relaxed text-[var(--color-text-secondary)] line-clamp-3">
        {project.description}
      </p>

      <div className="mb-3 flex flex-wrap gap-1.5">
        {project.tags.slice(0, 4).map((tag) => (
          <span
            key={tag}
            className="rounded-md bg-[var(--color-surface-light)] px-2 py-0.5 text-[10px] font-medium text-[var(--color-text-secondary)] border border-[var(--color-border)]/50"
          >
            {tag}
          </span>
        ))}
        {project.tags.length > 4 && (
          <span className="rounded-md bg-[var(--color-surface-light)] px-2 py-0.5 text-[10px] font-medium text-[var(--color-text-secondary)]">
            +{project.tags.length - 4}
          </span>
        )}
      </div>

      <div className="flex items-center gap-3 pt-2 border-t border-[var(--color-border)]">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--color-text-secondary)] transition-all hover:text-[var(--color-accent)] hover:scale-110"
          >
            <Github size={14} />
          </a>
        )}
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-[var(--color-text-secondary)] transition-all hover:text-[var(--color-accent-cyan)] hover:scale-110"
          >
            <ExternalLink size={14} />
            <ArrowUpRight size={10} />
          </a>
        )}
        {project.writeup && (
          <a
            href={project.writeup}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--color-text-secondary)] transition-all hover:text-[var(--color-accent-purple)] hover:scale-110"
          >
            <FileText size={14} />
          </a>
        )}
        {project.doi && (
          <a
            href={project.doi}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--color-text-secondary)] transition-all hover:text-green-400 hover:scale-110"
          >
            <BookOpen size={14} />
          </a>
        )}
      </div>
    </motion.div>
  );
}
