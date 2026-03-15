"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, FileText, BookOpen, ArrowUpRight } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { projects } from "@/data/portfolio-data";
import { Spotlight } from "@/components/ui/spotlight";

const featuredProjects = projects.filter((p) => p.featured);

export default function FeaturedProjects() {
  return (
    <section id="projects" className="section-padding mesh-gradient relative">
      {/* Background accents */}
      <div className="absolute top-0 right-0 h-[400px] w-[400px] rounded-full bg-[var(--color-accent-cyan)] opacity-[0.02] blur-[120px]" />
      <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-[var(--color-accent-purple)] opacity-[0.02] blur-[120px]" />

      <div className="mx-auto max-w-6xl relative">
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
              <div className="relative rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 transition-all duration-300 hover:border-[var(--color-accent)]/30 hover:shadow-xl hover:shadow-blue-500/5 hover:-translate-y-1 overflow-hidden">
                <Spotlight size={300} className="from-blue-500/15 via-transparent to-transparent" />

                {/* Badge */}
                {project.badge && (
                  <span className="absolute top-4 right-4 rounded-full bg-gradient-to-r from-[var(--color-accent-purple)]/20 to-[var(--color-accent-pink)]/20 px-3 py-1 text-xs font-medium text-[var(--color-accent-purple)] border border-[var(--color-accent-purple)]/20">
                    {project.badge}
                  </span>
                )}

                {/* Category indicator */}
                <div className="mb-4 flex items-center gap-2">
                  <div
                    className={`h-2.5 w-2.5 rounded-full ${
                      project.category === "ai-ml"
                        ? "bg-[var(--color-accent-cyan)] shadow-sm shadow-cyan-500/50"
                        : project.category === "research"
                        ? "bg-[var(--color-accent-purple)] shadow-sm shadow-purple-500/50"
                        : "bg-[var(--color-accent)] shadow-sm shadow-blue-500/50"
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

                <p className="mb-1 font-mono text-xs text-[var(--color-accent-cyan)]/60">
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
                      className="rounded-lg bg-[var(--color-surface-light)] px-2.5 py-1 text-xs font-medium text-[var(--color-text-secondary)] border border-[var(--color-border)]/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-3 pt-2 border-t border-[var(--color-border)]">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-sm text-[var(--color-text-secondary)] transition-all hover:text-[var(--color-accent)] hover:-translate-y-0.5"
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
                      className="flex items-center gap-1.5 text-sm text-[var(--color-text-secondary)] transition-all hover:text-[var(--color-accent-cyan)] hover:-translate-y-0.5"
                    >
                      <ExternalLink size={14} />
                      Live
                      <ArrowUpRight size={10} />
                    </a>
                  )}
                  {project.writeup && (
                    <a
                      href={project.writeup}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-sm text-[var(--color-text-secondary)] transition-all hover:text-[var(--color-accent-purple)] hover:-translate-y-0.5"
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
                      className="flex items-center gap-1.5 text-sm text-[var(--color-text-secondary)] transition-all hover:text-green-400 hover:-translate-y-0.5"
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
