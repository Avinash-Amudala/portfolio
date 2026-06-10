"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ChevronDown, SquareTerminal } from "lucide-react";
import { personalInfo } from "@/data/portfolio-data";
import NetworkGlobe from "./NetworkGlobe";

const roles = [
  "AI systems for telecom.",
  "MCP servers for network gear.",
  "evidence-grounded RAG pipelines.",
  "experimentation frameworks.",
];

function Typewriter() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    const timeout = setTimeout(
      () => {
        if (!deleting) {
          const next = current.slice(0, text.length + 1);
          setText(next);
          if (next === current) {
            setTimeout(() => setDeleting(true), 2200);
          }
        } else {
          const next = current.slice(0, text.length - 1);
          setText(next);
          if (next === "") {
            setDeleting(false);
            setRoleIndex((i) => (i + 1) % roles.length);
          }
        }
      },
      deleting ? 28 : 55
    );
    return () => clearTimeout(timeout);
  }, [text, deleting, roleIndex]);

  return (
    <span className="text-gradient">
      {text}
      <span className="cursor-blink ml-0.5 inline-block h-[0.9em] w-[3px] translate-y-[0.12em] bg-[hsl(var(--accent))] align-baseline" />
    </span>
  );
}

const terminalLines = [
  { prompt: true, text: "pip install mcp-telecom" },
  { prompt: false, text: "✓ installed mcp-telecom 0.2.0" },
  { prompt: true, text: "mcp-telecom --list-tools | wc -l" },
  { prompt: false, text: "60+ tools · 7 vendors · 4 protocols" },
  { prompt: true, text: "pytest" },
  { prompt: false, text: "157 passed in 41.2s ✓" },
];

function TerminalCard() {
  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    if (visibleLines >= terminalLines.length) return;
    const timeout = setTimeout(
      () => setVisibleLines((v) => v + 1),
      visibleLines === 0 ? 800 : terminalLines[visibleLines - 1].prompt ? 500 : 900
    );
    return () => clearTimeout(timeout);
  }, [visibleLines]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.35 }}
      className="gradient-ring w-full max-w-[440px] overflow-hidden rounded-xl"
    >
      <div className="glass rounded-[11px]">
        <div className="flex items-center gap-1.5 border-b border-[hsl(var(--border))] px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
          <span className="ml-3 font-[family-name:var(--font-mono)] text-[11px] text-[hsl(var(--muted))]">
            avinash@nokia ~ zsh
          </span>
        </div>
        <div className="min-h-[176px] space-y-1.5 p-4 font-[family-name:var(--font-mono)] text-[13px] leading-relaxed">
          {terminalLines.slice(0, visibleLines).map((line, i) => (
            <p
              key={i}
              className={
                line.prompt
                  ? "text-[hsl(var(--fg))]"
                  : "text-[hsl(var(--muted))]"
              }
            >
              {line.prompt && (
                <span className="mr-2 text-[hsl(var(--accent))]">❯</span>
              )}
              {line.text}
            </p>
          ))}
          <p>
            <span className="mr-2 text-[hsl(var(--accent))]">❯</span>
            <span className="cursor-blink inline-block h-[1em] w-[7px] translate-y-[0.15em] bg-[hsl(var(--accent))]" />
          </p>
        </div>
        <Link
          href="/terminal"
          className="flex items-center gap-2 border-t border-[hsl(var(--border))] px-4 py-2.5 font-[family-name:var(--font-mono)] text-[11px] text-[hsl(var(--muted))] transition-colors hover:text-[hsl(var(--accent))]"
        >
          <SquareTerminal size={12} />
          Launch the interactive terminal &rarr;
        </Link>
      </div>
    </motion.div>
  );
}

export default function HomeHero() {
  return (
    <section className="relative overflow-hidden px-6 pb-20 pt-16 sm:pb-28 sm:pt-24">
      {/* Background scenery */}
      <div aria-hidden="true" className="bg-aurora absolute inset-0 -z-[1]" />
      <div aria-hidden="true" className="bg-grid absolute inset-0 -z-[1]" />

      <div className="mx-auto grid max-w-[1200px] items-center gap-12 lg:grid-cols-[1.2fr_1fr]">
        <div>
          {/* Status pill */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="glass mb-8 inline-flex items-center gap-2 rounded-full px-4 py-1.5"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[hsl(var(--success))] opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[hsl(var(--success))]" />
            </span>
            <span className="text-xs text-[hsl(var(--muted))]">
              Available for senior SWE / AI infra roles
            </span>
          </motion.div>

          {/* Name + kicker */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="mb-2 flex items-center gap-2.5 font-[family-name:var(--font-mono)] text-sm text-[hsl(var(--accent))]"
          >
            <span className="gradient-ring shrink-0 overflow-hidden !rounded-full">
              <Image
                src="/images/avinash-portrait.webp"
                alt="Avinash Amudala"
                width={28}
                height={28}
                className="block rounded-full"
                priority
              />
            </span>
            Avinash Amudala · Software Engineer @ Nokia, Sunnyvale
          </motion.p>

          {/* Display headline with typewriter */}
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-display mb-6 text-[hsl(var(--fg))]"
          >
            I build
            <br />
            <Typewriter />
          </motion.h1>

          {/* Sub-headline */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="mb-8 max-w-[560px] text-lg leading-relaxed text-[hsl(var(--muted))]"
          >
            Creator of{" "}
            <a
              href={personalInfo.pypi}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[hsl(var(--accent))] hover:underline"
            >
              MCP-Telecom
            </a>{" "}
            — the first Model Context Protocol server for network equipment.
            Currently researching proxy metric validation for online
            experiments.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-8 flex flex-wrap items-center gap-3"
          >
            <Link
              href="/projects"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[hsl(var(--accent))] to-[hsl(var(--accent-2))] px-6 py-3 text-sm font-semibold text-[hsl(var(--accent-fg))] shadow-[0_0_24px_hsl(var(--accent)/0.35)] transition-shadow hover:shadow-[0_0_40px_hsl(var(--accent)/0.55)]"
            >
              Explore projects
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-0.5"
              />
            </Link>
            <Link
              href="/contact"
              className="glass inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-[hsl(var(--fg))] transition-colors hover:border-[hsl(var(--accent)/0.5)]"
            >
              Get in touch
            </Link>
          </motion.div>

          {/* Inline link bar */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm"
          >
            {[
              { label: "GitHub", href: personalInfo.github },
              { label: "PyPI", href: personalInfo.pypi },
              { label: "Google Scholar", href: personalInfo.scholar },
              { label: "ORCID", href: personalInfo.orcid },
              { label: "Resume", href: "/resumes/avinash-amudala-swe.pdf" },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[hsl(var(--muted))] transition-colors hover:text-[hsl(var(--accent))]"
              >
                {link.label}
              </a>
            ))}
          </motion.div>
        </div>

        {/* Globe + terminal showcase */}
        <div className="relative hidden items-center justify-center lg:flex">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            aria-hidden="true"
            className="absolute -top-16 left-1/2 -translate-x-1/2"
          >
            <NetworkGlobe size={460} />
          </motion.div>
          <div className="relative mt-40">
            <TerminalCard />
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        aria-hidden="true"
        className="mt-16 flex justify-center"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ChevronDown size={20} className="text-[hsl(var(--muted))]" />
        </motion.div>
      </motion.div>
    </section>
  );
}
