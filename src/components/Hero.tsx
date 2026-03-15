"use client";

import { useState, useEffect, Suspense } from "react";
import { motion } from "framer-motion";
import { ChevronDown, Github, Linkedin, Mail, ArrowRight } from "lucide-react";
import dynamic from "next/dynamic";
import { personalInfo } from "@/data/portfolio-data";
import { SplineScene } from "@/components/ui/splite";
import { SpotlightBeam } from "@/components/ui/spotlight-aceternity";

const ParticleField = dynamic(() => import("./ParticleField"), {
  ssr: false,
  loading: () => (
    <div className="absolute inset-0 bg-[var(--color-background)]" />
  ),
});

function TypingEffect({ phrases }: { phrases: string[] }) {
  const [currentPhrase, setCurrentPhrase] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const phrase = phrases[currentPhrase];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (currentChar < phrase.length) {
            setCurrentChar((prev) => prev + 1);
          } else {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          if (currentChar > 0) {
            setCurrentChar((prev) => prev - 1);
          } else {
            setIsDeleting(false);
            setCurrentPhrase((prev) => (prev + 1) % phrases.length);
          }
        }
      },
      isDeleting ? 30 : 60
    );

    return () => clearTimeout(timeout);
  }, [currentChar, isDeleting, currentPhrase, phrases]);

  return (
    <span className="font-mono text-[var(--color-accent-cyan)]">
      {phrases[currentPhrase].substring(0, currentChar)}
      <span className="animate-pulse">|</span>
    </span>
  );
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050510] via-[#0a0a1a] to-[var(--color-background)]" />

      {/* Spotlight beam */}
      <SpotlightBeam
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />

      {/* Radial accent glows */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-[var(--color-accent)] opacity-[0.04] blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 h-[400px] w-[400px] rounded-full bg-[var(--color-accent-purple)] opacity-[0.03] blur-[100px]" />

      {/* 3D Particles */}
      <Suspense fallback={null}>
        <ParticleField />
      </Suspense>

      {/* Content - Split Layout */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 w-full">
        <div className="flex flex-col lg:flex-row items-center min-h-[80vh]">
          {/* Left content */}
          <div className="flex-1 text-center lg:text-left lg:pr-8 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)]/50 px-4 py-1.5 mb-6 backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <span className="text-xs font-medium text-[var(--color-text-secondary)]">
                  Available for opportunities
                </span>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mb-4 text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl"
            >
              Hi, I&apos;m{" "}
              <span className="gradient-text">{personalInfo.name.split(" ")[0]}</span>
              <br />
              <span className="text-[var(--color-text-secondary)] text-3xl sm:text-4xl lg:text-5xl font-medium">
                {personalInfo.title}
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mb-6 h-8 text-lg sm:text-xl"
            >
              <TypingEffect phrases={personalInfo.typingPhrases} />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="mb-8 max-w-xl text-[var(--color-text-secondary)] leading-relaxed lg:mx-0 mx-auto"
            >
              {personalInfo.summary.substring(0, 160)}...
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex items-center gap-4 lg:justify-start justify-center flex-wrap"
            >
              <a
                href="#contact"
                className="group flex items-center gap-2 rounded-xl bg-[var(--color-accent)] px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-500/25 hover:-translate-y-0.5"
              >
                Get in Touch
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>
              <div className="flex items-center gap-3">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)]/50 p-3 text-[var(--color-text-secondary)] transition-all hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] hover:shadow-lg hover:shadow-blue-500/10 hover:-translate-y-0.5 backdrop-blur-sm"
                >
                  <Github size={20} />
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)]/50 p-3 text-[var(--color-text-secondary)] transition-all hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] hover:shadow-lg hover:shadow-blue-500/10 hover:-translate-y-0.5 backdrop-blur-sm"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)]/50 p-3 text-[var(--color-text-secondary)] transition-all hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] hover:shadow-lg hover:shadow-blue-500/10 hover:-translate-y-0.5 backdrop-blur-sm"
                >
                  <Mail size={20} />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right content - 3D Spline Scene */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="flex-1 relative h-[400px] lg:h-[600px] w-full mt-8 lg:mt-0"
          >
            <div className="absolute inset-0 rounded-3xl overflow-hidden">
              <SplineScene
                scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                className="w-full h-full"
              />
            </div>
            {/* Glow effect behind 3D scene */}
            <div className="absolute inset-0 -z-10 rounded-3xl bg-gradient-to-r from-[var(--color-accent)]/10 via-[var(--color-accent-purple)]/10 to-[var(--color-accent-cyan)]/10 blur-3xl" />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs font-mono text-[var(--color-text-secondary)]">
            Scroll
          </span>
          <ChevronDown
            size={20}
            className="text-[var(--color-text-secondary)]"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
