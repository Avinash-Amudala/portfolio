"use client";

import { Github, Linkedin, Mail } from "lucide-react";
import { personalInfo } from "@/data/portfolio-data";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-8">
      <div className="mx-auto max-w-6xl flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
        <div className="text-sm text-[var(--color-text-secondary)]">
          <span className="gradient-text font-semibold">Avinash Amudala</span>{" "}
          &copy; {new Date().getFullYear()}
        </div>

        <div className="flex items-center gap-4">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--color-text-secondary)] transition-colors hover:text-white"
          >
            <Github size={16} />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--color-text-secondary)] transition-colors hover:text-white"
          >
            <Linkedin size={16} />
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            className="text-[var(--color-text-secondary)] transition-colors hover:text-white"
          >
            <Mail size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}
