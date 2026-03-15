"use client";

import { Github, Linkedin, Mail, Heart } from "lucide-react";
import { personalInfo } from "@/data/portfolio-data";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-surface)]/50 px-4 py-8 backdrop-blur-sm">
      <div className="mx-auto max-w-6xl flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
        <div className="flex items-center gap-2 text-sm text-[var(--color-text-secondary)]">
          <span>Built with</span>
          <Heart size={14} className="text-[var(--color-accent-pink)] fill-[var(--color-accent-pink)]" />
          <span>by</span>
          <span className="gradient-text font-semibold">Avinash Amudala</span>
          <span>&copy; {new Date().getFullYear()}</span>
        </div>

        <div className="flex items-center gap-4">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg p-2 text-[var(--color-text-secondary)] transition-all hover:text-white hover:bg-[var(--color-surface-light)]"
          >
            <Github size={16} />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg p-2 text-[var(--color-text-secondary)] transition-all hover:text-white hover:bg-[var(--color-surface-light)]"
          >
            <Linkedin size={16} />
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            className="rounded-lg p-2 text-[var(--color-text-secondary)] transition-all hover:text-white hover:bg-[var(--color-surface-light)]"
          >
            <Mail size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}
