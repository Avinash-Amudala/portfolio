import type { Metadata } from "next";
import {
  MapPin,
  Briefcase,
  GraduationCap,
  Award,
} from "lucide-react";
import Link from "next/link";
import { certifications, education } from "@/data/portfolio-data";

export const metadata: Metadata = {
  title: "About",
  description:
    "Software Engineer at Nokia building AI systems for telecom. MS Software Engineering from RIT. Creator of MCP-Telecom and PROXIMA.",
};

const timeline = [
  {
    period: "Aug 2024 – Present",
    company: "Nokia",
    role: "Software Engineer, AI Platform Engineering",
    location: "Sunnyvale, CA",
    summary:
      "Building production AI platforms for telecom test automation, diagnostics, and observability.",
  },
  {
    period: "Jan 2023 – Aug 2024",
    company: "Rochester Institute of Technology",
    role: "Software Engineer (ITS App Dev) + MS Student",
    location: "Rochester, NY",
    summary:
      "Built search-driven campus platforms, studied ML and cloud systems.",
  },
  {
    period: "Feb 2022 – Aug 2022",
    company: "Ericsson",
    role: "Software Engineer, RAN Software",
    location: "Bangalore, India",
    summary:
      "Worked on LTE/NR telecom protocol stacks and CI/CD automation.",
  },
];

export default function AboutPage() {
  return (
    <article className="section-gap px-6">
      <div className="mx-auto max-w-[720px]">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-[48px] font-bold leading-[1.1] text-[hsl(var(--fg))] mb-4">
            About
          </h1>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-[hsl(var(--muted))]">
            <span className="inline-flex items-center gap-1.5">
              <Briefcase size={14} />
              Software Engineer at Nokia
            </span>
            <span className="inline-flex items-center gap-1.5">
              <MapPin size={14} />
              Sunnyvale, CA
            </span>
            <span className="inline-flex items-center gap-1.5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute h-full w-full rounded-full bg-[hsl(var(--success))] opacity-75" />
                <span className="relative rounded-full h-2 w-2 bg-[hsl(var(--success))]" />
              </span>
              Available for opportunities
            </span>
          </div>
        </div>

        {/* Bio: How I got here */}
        <section className="mb-12">
          <h2 className="text-[22px] font-semibold text-[hsl(var(--fg))] mb-4">
            How I got here
          </h2>
          <div className="text-[17px] leading-[1.65] text-[hsl(var(--muted))] space-y-4">
            <p>
              I studied Electronics and Communication Engineering at Amrita Vishwa Vidyapeetham in Coimbatore, where my final-year research on IoT-based crop monitoring was published at IEEE ICESC 2022. That project was my first real contact with systems that had to work reliably in the field — sensors failing, networks dropping, data needing to arrive on time.
            </p>
            <p>
              After graduating, I joined Ericsson in Bangalore working on LTE/NR protocol stacks. Six months in, I noticed how much manual effort went into telecom testing and diagnostics. That observation stuck. I moved to the US for a master&apos;s in Software Engineering at RIT, where I built search platforms, studied ML, and started thinking seriously about how retrieval systems and language models could be applied to telecom infrastructure.
            </p>
            <p>
              I joined Nokia&apos;s AI Platform Engineering team in Sunnyvale in August 2024. The interesting problems lived at the intersection of telecom systems and machine learning, and there weren&apos;t enough people who understood both sides. That gap became my focus.
            </p>
          </div>
        </section>

        {/* Bio: What I work on */}
        <section className="mb-12">
          <h2 className="text-[22px] font-semibold text-[hsl(var(--fg))] mb-4">
            What I work on
          </h2>
          <div className="text-[17px] leading-[1.65] text-[hsl(var(--muted))] space-y-4">
            <p>
              At Nokia, I build production AI platforms that accelerate 5G product development. My primary project is an AI Test Automation platform that converts hundreds-of-pages telecom PRDs into executable regression plans using LLM-guided parsing and hybrid retrieval (FAISS + BM25 + reciprocal rank fusion). It&apos;s used by multiple internal engineering teams.
            </p>
            <p>
              Outside of work, I created <a href="https://pypi.org/project/mcp-telecom/" target="_blank" rel="noopener noreferrer" className="text-[hsl(var(--accent))] hover:underline">MCP-Telecom</a> — the first Model Context Protocol server for network equipment. It lets AI agents safely interact with routers and switches across 7 vendor platforms via SSH, NETCONF, SNMP, and gNMI. It&apos;s published on PyPI.
            </p>
            <p>
              I&apos;m also researching proxy metric validation for A/B testing through <a href="https://github.com/Avinash-Amudala/PROXIMA" target="_blank" rel="noopener noreferrer" className="text-[hsl(var(--accent))] hover:underline">PROXIMA</a>, a framework that quantifies how much you should trust a given proxy metric, down to the segment level. The common thread across all of this: making AI systems that can be trusted in high-stakes infrastructure.
            </p>
          </div>
        </section>

        {/* Bio: How I think */}
        <section className="mb-16">
          <h2 className="text-[22px] font-semibold text-[hsl(var(--fg))] mb-4">
            How I think
          </h2>
          <div className="text-[17px] leading-[1.65] text-[hsl(var(--muted))] space-y-4">
            <p>
              I prefer low-level understanding before abstraction. Before I use a library, I want to understand what it does at the layer below. Before I trust a metric, I want to see the query that produced it. Before I ship an AI feature, I want to know what happens when the model is wrong.
            </p>
            <p>
              I&apos;m skeptical of uncritical agreement and suspicious of systems that can&apos;t explain their own outputs. The safety gate in MCP-Telecom exists because I assume the LLM will confidently suggest something destructive — the question is how often, not if. PROXIMA exists because I saw teams trust proxy metrics that hadn&apos;t been validated below the aggregate level.
            </p>
          </div>
        </section>

        {/* Education */}
        <section className="mb-16">
          <h2 className="text-[22px] font-semibold text-[hsl(var(--fg))] mb-6 flex items-center gap-2">
            <GraduationCap size={22} />
            Education
          </h2>
          <div className="space-y-6">
            <div className="rounded-lg border border-[hsl(var(--border))] p-6">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h3 className="font-semibold text-[hsl(var(--fg))]">Rochester Institute of Technology</h3>
                  <p className="text-sm text-[hsl(var(--muted))]">MS, Software Engineering · 2022–2024</p>
                </div>
                <span className="text-xs font-[family-name:var(--font-mono)] text-[hsl(var(--muted))] bg-[hsl(var(--subtle))] px-2.5 py-1 rounded-full">
                  Dec 2024
                </span>
              </div>
              <p className="text-sm text-[hsl(var(--muted))] mt-3">
                <span className="font-medium text-[hsl(var(--fg))]">Coursework:</span>{" "}
                Machine Learning, Cloud Software Systems (AWS), Data Structures & Algorithms, Software Engineering Principles, Database Design & Implementation
              </p>
            </div>
            <div className="rounded-lg border border-[hsl(var(--border))] p-6">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h3 className="font-semibold text-[hsl(var(--fg))]">Amrita Vishwa Vidyapeetham</h3>
                  <p className="text-sm text-[hsl(var(--muted))]">BE, Electronics & Communication Engineering · 2018–2022</p>
                </div>
                <span className="text-xs font-[family-name:var(--font-mono)] text-[hsl(var(--muted))] bg-[hsl(var(--subtle))] px-2.5 py-1 rounded-full">
                  Jun 2022
                </span>
              </div>
              <p className="text-sm text-[hsl(var(--muted))] mt-3">
                <span className="font-medium text-[hsl(var(--fg))]">Final year project:</span>{" "}
                IoT model for monitoring irrigated crops (published, IEEE ICESC 2022)
              </p>
              <p className="text-sm text-[hsl(var(--muted))] mt-1">
                <span className="font-medium text-[hsl(var(--fg))]">Coursework:</span>{" "}
                Digital Signal Processing, Embedded Systems, Wireless Communications, Computer Networks
              </p>
            </div>
          </div>
        </section>

        {/* Career timeline */}
        <section className="mb-16">
          <h2 className="text-[22px] font-semibold text-[hsl(var(--fg))] mb-6">
            Career Timeline
          </h2>
          <div className="relative pl-6 border-l-2 border-[hsl(var(--border))] space-y-8">
            {timeline.map((entry, i) => (
              <div key={i} className="relative">
                <div className="absolute -left-[31px] top-1 h-3 w-3 rounded-full border-2 border-[hsl(var(--accent))] bg-[hsl(var(--bg))]" />
                <p className="text-xs font-[family-name:var(--font-mono)] text-[hsl(var(--muted))] mb-1">
                  {entry.period}
                </p>
                <p className="font-semibold text-[hsl(var(--fg))]">
                  {entry.company}
                  <span className="font-normal text-[hsl(var(--muted))]"> · {entry.role}</span>
                </p>
                <p className="text-sm text-[hsl(var(--muted))]">{entry.location}</p>
                <p className="text-sm text-[hsl(var(--muted))] mt-1">{entry.summary}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-[hsl(var(--muted))]">
            Full detail on the{" "}
            <Link href="/experience" className="text-[hsl(var(--accent))] hover:underline">
              Experience page
            </Link>.
          </p>
        </section>

        {/* Certifications */}
        <section>
          <h2 className="text-[22px] font-semibold text-[hsl(var(--fg))] mb-6 flex items-center gap-2">
            <Award size={22} />
            Certifications
          </h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {certifications.map((cert) => (
              <div
                key={cert.name}
                className="rounded-lg border border-[hsl(var(--border))] p-4"
              >
                <p className="text-sm font-medium text-[hsl(var(--fg))]">{cert.name}</p>
                <p className="text-xs text-[hsl(var(--muted))] mt-0.5">{cert.issuer}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </article>
  );
}
