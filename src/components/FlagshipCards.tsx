"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { flagshipProjects } from "@/data/portfolio-data";

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
    <section className="section-gap px-6 border-t border-[hsl(var(--border))]">
      <div className="mx-auto max-w-[1200px]">
        <div className="grid gap-8 lg:grid-cols-3">
          {flagshipProjects.map((project, i) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08, duration: 0.45 }}
              viewport={{ once: true }}
              className="group relative flex flex-col rounded-xl border border-[hsl(var(--border))] bg-[hsl(var(--bg))] p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg hover:shadow-[hsl(var(--accent)/0.06)] hover:border-[hsl(var(--accent)/0.3)]"
            >
              {/* Badge */}
              <span className="mb-4 inline-flex w-fit rounded-full bg-[hsl(var(--subtle))] px-3 py-1 text-xs font-medium text-[hsl(var(--muted))] border border-[hsl(var(--border))]">
                {categoryBadge[project.slug] ?? "Project"}
              </span>

              {/* Title */}
              <h3 className="text-[22px] font-bold text-[hsl(var(--fg))] mb-2 group-hover:text-[hsl(var(--accent))] transition-colors">
                {project.title}
              </h3>

              {/* Problem sentence */}
              <p className="text-[15px] leading-relaxed text-[hsl(var(--muted))] mb-5 flex-1">
                {project.problem}
              </p>

              {/* Metric chips */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.metrics.slice(0, 3).map((metric) => (
                  <span
                    key={metric}
                    className="rounded-md bg-[hsl(var(--subtle))] px-2.5 py-1 text-xs font-[family-name:var(--font-mono)] font-medium text-[hsl(var(--fg))]"
                  >
                    {metric}
                  </span>
                ))}
              </div>

              {/* Tech stack chips */}
              <div className="flex flex-wrap gap-1.5 mb-5">
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
              <div className="flex items-center gap-4 pt-4 border-t border-[hsl(var(--border))] text-sm">
                <Link
                  href={`/projects/${project.slug}`}
                  className="text-[hsl(var(--accent))] hover:underline font-medium"
                >
                  Case study &rarr;
                </Link>
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[hsl(var(--muted))] hover:text-[hsl(var(--fg))] transition-colors"
                  >
                    GitHub &nearr;
                  </a>
                )}
              </div>

              {/* Live badges for MCP-Telecom */}
              {project.slug === "mcp-telecom" && (
                <div className="flex flex-wrap items-center gap-2 mt-4">
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
