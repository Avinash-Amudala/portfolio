"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, FileText, BookOpen } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { projects } from "@/data/portfolio-data";

const featuredProjects = projects.filter((p) => p.featured);

export default function FeaturedProjects() {
  return (
    <section id="projects" className="section-padding dot-grid">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          title="Featured Projects"
          subtitle="Production AI systems and research platforms"
        />

        <div className="grid gap-6 md:grid-cols-2">
          {featuredProjects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="relative rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 transition-all duration-300 hover:border-[var(--color-accent)]/30 hover:shadow-xl hover:shadow-blue-500/5 hover:-translate-y-1">
                {/* Badge */}
                {project.badge && (
                  <span className="absolute top-4 right-4 rounded-full bg-[var(--color-accent-purple)]/20 px-3 py-1 text-xs font-medium text-[var(--color-accent-purple)]">
                    {project.badge}
                  </span>
                )}

                {/* Category indicator */}
                <div className="mb-4 flex items-center gap-2">
                  <div
                    className={`h-2 w-2 rounded-full ${
                      project.category === "ai-ml"
                        ? "bg-[var(--color-accent-cyan)]"
                        : project.category === "research"
                        ? "bg-[var(--color-accent-purple)]"
                        : "bg-[var(--color-accent)]"
                    }`}
                  />
                  <span className="text-xs font-mono uppercase tracking-wider text-[var(--color-text-secondary)]">
                    {project.category === "ai-ml"
                      ? "AI / ML"
                      : project.category === "research"
                      ? "Research"
                      : project.category === "full-stack"
                      ? "Full-Stack"
                      : "Systems"}
                  </span>
                </div>

                <h3 className="mb-2 text-xl font-bold text-white group-hover:text-[var(--color-accent)] transition-colors">
                  {project.title}
                </h3>

                <p className="mb-1 font-mono text-xs text-[var(--color-text-secondary)]">
                  {project.period}
                </p>

                <p className="mb-4 text-sm leading-relaxed text-[var(--color-text-secondary)]">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="mb-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md bg-[var(--color-surface-light)] px-2.5 py-1 text-xs font-medium text-[var(--color-text-secondary)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-sm text-[var(--color-text-secondary)] transition-colors hover:text-[var(--color-accent)]"
                    >
                      <Github size={14} />
                      Code
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-sm text-[var(--color-text-secondary)] transition-colors hover:text-[var(--color-accent-cyan)]"
                    >
                      <ExternalLink size={14} />
                      Live
                    </a>
                  )}
                  {project.writeup && (
                    <a
                      href={project.writeup}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-sm text-[var(--color-text-secondary)] transition-colors hover:text-[var(--color-accent-purple)]"
                    >
                      <FileText size={14} />
                      Write-up
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
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
