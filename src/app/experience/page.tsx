import type { Metadata } from "next";
import { experiences } from "@/data/portfolio-data";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Production AI platforms at Nokia, search systems at RIT, telecom protocol stacks at Ericsson. Full work history with technical detail.",
};

const nokiaProjects = [
  {
    name: "AI Test Automation Platform",
    problem:
      "Telecom PRDs are hundreds of pages of unstructured prose. Manually converting them into executable regression test plans took weeks per release across multiple QA teams.",
    built:
      "A production AI platform that ingests PRDs, extracts testable requirements via LLM-guided parsing, and generates regression test plans grounded in the source document. Used by 4 internal engineering teams.",
    howItWorks:
      "FastAPI backend, hybrid retrieval (FAISS IVF + BM25 + reciprocal rank fusion), structured output via function calling, evidence-scoring guardrails to prevent hallucinated requirements.",
    stack: "Python, FastAPI, FAISS, sentence-transformers, Docker, Kubernetes, GitHub Actions",
  },
  {
    name: "LLM Diagnostics Copilot",
    problem:
      "Root-cause analysis of 5G system failures required manual correlation of logs, command outputs, and historical tickets by senior engineers.",
    built:
      "An LLM-powered diagnostic interface that suggests probable root causes, relevant commands to run, and historical similar incidents — with an evidence-citation constraint.",
    howItWorks:
      "RAG over internal ticket corpus + command reference docs. Every suggestion must cite a source. React frontend, FastAPI backend.",
    stack: "Python, FastAPI, FAISS, Qdrant, React, Docker",
  },
  {
    name: "ATS Intelligence (Anomaly Detection for 5G Logs)",
    problem:
      "5G network elements produce 500K+ daily log events; manual anomaly spotting does not scale.",
    built:
      "A real-time anomaly detection engine using statistical baselines and z-score deviation on structured log features, reducing mean-time-to-identify from ~45 min to ~12 min.",
    howItWorks:
      "Streaming log ingestion → feature extraction → per-series z-score computation → threshold alerting with severity scoring and LLM-generated natural-language summaries for on-call.",
    stack: "Python, FastAPI, Prometheus, Grafana, PostgreSQL",
  },
];

export default function ExperiencePage() {
  return (
    <article className="section-gap px-6">
      <div className="mx-auto max-w-[720px]">
        <h1 className="text-[48px] font-bold leading-[1.1] text-[hsl(var(--fg))] mb-4">
          Experience
        </h1>
        <p className="text-[hsl(var(--muted))] mb-16">
          Production systems across AI, telecom, and web platforms.
        </p>

        {/* Nokia */}
        <section className="mb-20">
          <div className="mb-8">
            <h2 className="text-[28px] font-bold text-[hsl(var(--fg))]">Nokia</h2>
            <p className="text-[hsl(var(--muted))]">
              Software Engineer, AI Platform Engineering · Sunnyvale, CA
            </p>
            <p className="text-sm font-[family-name:var(--font-mono)] text-[hsl(var(--muted))]">
              Aug 2024 – Present
            </p>
          </div>

          <div className="mb-8">
            <p className="text-[17px] leading-[1.65] text-[hsl(var(--muted))]">
              The AI Platform Engineering team builds internal developer tools that accelerate 5G product development across Nokia&apos;s Cloud & Network Services business. My work focuses on applying LLMs and retrieval systems to telecom test automation, observability, and diagnostics.
            </p>
          </div>

          <div className="space-y-10">
            {nokiaProjects.map((project) => (
              <div key={project.name} className="rounded-lg border border-[hsl(var(--border))] p-6">
                <h3 className="text-lg font-semibold text-[hsl(var(--fg))] mb-4">
                  {project.name}
                </h3>
                <div className="space-y-3 text-sm text-[hsl(var(--muted))] leading-relaxed">
                  <p>
                    <span className="font-medium text-[hsl(var(--fg))]">Problem:</span>{" "}
                    {project.problem}
                  </p>
                  <p>
                    <span className="font-medium text-[hsl(var(--fg))]">What I built:</span>{" "}
                    {project.built}
                  </p>
                  <p>
                    <span className="font-medium text-[hsl(var(--fg))]">How it works:</span>{" "}
                    {project.howItWorks}
                  </p>
                  <p className="text-xs font-[family-name:var(--font-mono)] text-[hsl(var(--muted))]">
                    {project.stack}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-6 text-xs font-[family-name:var(--font-mono)] text-[hsl(var(--muted))]">
            Technical environment: Python, FastAPI, FAISS, Qdrant, Docker, Kubernetes, PostgreSQL, Redis, GitHub Actions, Linux, gRPC
          </p>
        </section>

        {/* RIT */}
        <section className="mb-20">
          <div className="mb-6">
            <h2 className="text-[28px] font-bold text-[hsl(var(--fg))]">
              Rochester Institute of Technology
            </h2>
            <p className="text-[hsl(var(--muted))]">
              Software Engineer (ITS Application Development) · Rochester, NY
            </p>
            <p className="text-sm font-[family-name:var(--font-mono)] text-[hsl(var(--muted))]">
              Jan 2023 – Aug 2024
            </p>
          </div>
          <ul className="space-y-3 text-[15px] text-[hsl(var(--muted))] leading-relaxed">
            {experiences[1].bullets.map((bullet, i) => (
              <li key={i} className="flex gap-3">
                <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[hsl(var(--accent))]" />
                {bullet}
              </li>
            ))}
          </ul>
        </section>

        {/* Ericsson */}
        <section>
          <div className="mb-6">
            <h2 className="text-[28px] font-bold text-[hsl(var(--fg))]">Ericsson</h2>
            <p className="text-[hsl(var(--muted))]">
              Software Engineer, RAN Software (LTE/NR) · Bangalore, India
            </p>
            <p className="text-sm font-[family-name:var(--font-mono)] text-[hsl(var(--muted))]">
              Feb 2022 – Aug 2022
            </p>
          </div>
          <ul className="space-y-3 text-[15px] text-[hsl(var(--muted))] leading-relaxed">
            {experiences[2].bullets.map((bullet, i) => (
              <li key={i} className="flex gap-3">
                <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[hsl(var(--accent))]" />
                {bullet}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm italic text-[hsl(var(--muted))]">
            &ldquo;This is where I first saw how much manual effort was going into telecom testing — the seed for my later work on AI-assisted automation at Nokia.&rdquo;
          </p>
        </section>
      </div>
    </article>
  );
}
