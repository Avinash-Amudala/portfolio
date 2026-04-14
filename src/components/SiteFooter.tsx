import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import { personalInfo } from "@/data/portfolio-data";

export default function SiteFooter() {
  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-surface)]/50 px-4 py-8 backdrop-blur-sm">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-[var(--color-text-secondary)]">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <Link href="/talks" className="hover:text-white transition-colors">
              Talks
            </Link>
            <Link
              href="/writing"
              className="hover:text-white transition-colors"
            >
              Writing
            </Link>
            <Link href="/now" className="hover:text-white transition-colors">
              Now
            </Link>
            <Link
              href="/archive"
              className="hover:text-white transition-colors"
            >
              Archive
            </Link>
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

        <div className="mt-6 text-xs text-[var(--color-text-secondary)]">
          &copy; {new Date().getFullYear()} Avinash Amudala
        </div>
      </div>
    </footer>
  );
}
