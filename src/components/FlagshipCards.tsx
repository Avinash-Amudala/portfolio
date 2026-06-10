"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { flagshipProjects } from "@/data/portfolio-data";
import TiltCard from "@/components/ui/tilt-card";

const categoryBadge: Record<string, string> = {
  "mcp-telecom": "Flagship",
  proxima: "Research",
  "llm-incident-copilot": "Infrastructure",
};

const techStacks: Record<string, string[]> = {
  "mcp-telecom": ["Python", "MCP SDK", "Netmiko", "ncclient", "pysnmp", "gRPC"],
  proxima: ["Python", "NumPy", "SciPy", "pandas", "FastAPI", "React"],
  "llm-incident-copilot": ["Python", "FAISS", "Qdrant", "Ollama", "Groq", "FastAPI"],
};

export default function FlagshipCards() {
  return (
    <section className="section-gap relative px-6">
      <div className="mx-auto max-w-[1200px]">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mb-12"
        >
          <p className="mb-2 font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.2em] text-[hsl(var(--accent))]">
            01 · Flagship work
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-[hsl(var(--fg))]">
            Systems that shipped
          </h2>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-3">
          {flagshipProjects.map((project, i) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08, duration: 0.45 }}
              viewport={{ once: true }}
            >
              <TiltCard className="h-full rounded-2xl">
                <div className="glass-card group flex h-full flex-col rounded-2xl p-6">
                  {/* Badge */}
                  <span className="mb-4 inline-flex w-fit items-center gap-1.5 rounded-full border border-[hsl(var(--accent)/0.3)] bg-[hsl(var(--accent)/0.08)] px-3 py-1 text-xs font-medium text-[hsl(var(--accent))]">
                    {categoryBadge[project.slug] ?? "Project"}
                  </span>

                  {/* Title */}
                  <h3 className="mb-2 text-[22px] font-bold text-[hsl(var(--fg))] transition-colors group-hover:text-[hsl(var(--accent))]">
                    {project.title}
                  </h3>

                  {/* Problem sentence */}
                  <p className="mb-5 flex-1 text-[15px] leading-relaxed text-[hsl(var(--muted))]">
                    {project.problem}
                  </p>

                  {/* Metric chips */}
                  <div className="mb-4 flex flex-wrap gap-2">
                    {project.metrics.slice(0, 3).map((metric) => (
                      <span
                        key={metric}
                        className="rounded-md bg-[hsl(var(--subtle))] px-2.5 py-1 font-[family-name:var(--font-mono)] text-xs font-medium text-[hsl(var(--fg))]"
                      >
                        {metric}
                      </span>
                    ))}
                  </div>

                  {/* Tech stack chips */}
                  <div className="mb-5 flex flex-wrap gap-1.5">
                    {(techStacks[project.slug] ?? []).map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md border border-[hsl(var(--border))] px-2 py-0.5 text-[11px] text-[hsl(var(--muted))]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-4 border-t border-[hsl(var(--border))] pt-4 text-sm">
                    <Link
                      href={`/projects/${project.slug}`}
                      className="font-medium text-[hsl(var(--accent))] hover:underline"
                    >
                      Case study &rarr;
                    </Link>
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[hsl(var(--muted))] transition-colors hover:text-[hsl(var(--fg))]"
                      >
                        GitHub &nearr;
                      </a>
                    )}
                  </div>

                  {/* Live badges for MCP-Telecom */}
                  {project.slug === "mcp-telecom" && (
                    <div className="mt-4 flex flex-wrap items-center gap-2">
                      <img
                        src="https://img.shields.io/pypi/v/mcp-telecom?style=flat-square"
                        alt="PyPI version"
                        className="h-[18px]"
                      />
                      <img
                        src="https://img.shields.io/pypi/dm/mcp-telecom?style=flat-square"
                        alt="PyPI downloads"
                        className="h-[18px]"
                      />
                      <img
                        src="https://img.shields.io/github/stars/Avinash-Amudala/MCP-Telecom?style=flat-square"
                        alt="GitHub stars"
                        className="h-[18px]"
                      />
                    </div>
                  )}
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
