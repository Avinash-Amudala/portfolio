import { Github, Linkedin, Mail, BookOpen, Rss } from "lucide-react";
import Link from "next/link";
import { personalInfo } from "@/data/portfolio-data";

export default function SiteFooter() {
  return (
    <footer className="relative bg-[hsl(var(--subtle))]">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[hsl(var(--accent)/0.5)] to-transparent"
      />
      <div className="mx-auto max-w-[1200px] px-6 py-16">
        {/* Three-column layout */}
        <div className="grid gap-12 sm:grid-cols-3">
          {/* Column 1: Bio */}
          <div>
            <p className="text-sm font-semibold text-[hsl(var(--fg))] mb-2">
              Avinash Amudala
            </p>
            <p className="text-sm text-[hsl(var(--muted))] leading-relaxed mb-3">
              Software Engineer at Nokia, Sunnyvale.
              <br />
              Building AI systems for telecom and experimentation.
            </p>
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[hsl(var(--success))] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[hsl(var(--success))]" />
              </span>
              <span className="text-xs text-[hsl(var(--muted))]">
                Available for opportunities
              </span>
            </div>
          </div>

          {/* Column 2: Sitemap */}
          <div>
            <p className="text-sm font-semibold text-[hsl(var(--fg))] mb-3">
              Pages
            </p>
            <nav className="flex flex-col gap-2 text-sm text-[hsl(var(--muted))]">
              {[
                { name: "About", href: "/about" },
                { name: "Writing", href: "/writing" },
                { name: "Projects", href: "/projects" },
                { name: "Talks", href: "/talks" },
                { name: "Now", href: "/now" },
                { name: "Archive", href: "/archive" },
                { name: "Contact", href: "/contact" },
              ].map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="hover:text-[hsl(var(--fg))] transition-colors w-fit"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Column 3: Social + links */}
          <div>
            <p className="text-sm font-semibold text-[hsl(var(--fg))] mb-3">
              Elsewhere
            </p>
            <nav className="flex flex-col gap-2 text-sm text-[hsl(var(--muted))]">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-[hsl(var(--fg))] transition-colors w-fit"
              >
                <Github size={14} />
                GitHub
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-[hsl(var(--fg))] transition-colors w-fit"
              >
                <Linkedin size={14} />
                LinkedIn
              </a>
              <a
                href={personalInfo.scholar}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-[hsl(var(--fg))] transition-colors w-fit"
              >
                <BookOpen size={14} />
                Google Scholar
              </a>
              <a
                href={personalInfo.orcid}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-[hsl(var(--fg))] transition-colors w-fit"
              >
                <BookOpen size={14} />
                ORCID
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="inline-flex items-center gap-2 hover:text-[hsl(var(--fg))] transition-colors w-fit"
              >
                <Mail size={14} />
                Email
              </a>
              <a
                href="/feed.xml"
                className="inline-flex items-center gap-2 hover:text-[hsl(var(--fg))] transition-colors w-fit"
              >
                <Rss size={14} />
                RSS
              </a>
            </nav>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[hsl(var(--border))]">
        <div className="mx-auto max-w-[1200px] px-6 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-xs text-[hsl(var(--muted))]">
          <span>&copy; {new Date().getFullYear()} Avinash Amudala</span>
          <span>
            Built with Next.js · Hosted on Vercel ·{" "}
            <a
              href="https://github.com/Avinash-Amudala/portfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-[hsl(var(--fg))] transition-colors"
            >
              Source
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
