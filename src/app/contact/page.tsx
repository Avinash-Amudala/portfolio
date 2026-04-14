import type { Metadata } from "next";
import { Mail, MapPin, Github, Linkedin, BookOpen, Calendar } from "lucide-react";
import { personalInfo } from "@/data/portfolio-data";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Avinash Amudala. Open to senior SWE / AI infra roles, collaborations, and speaking.",
};

export default function ContactPage() {
  return (
    <article className="section-gap px-6">
      <div className="mx-auto max-w-[720px]">
        <h1 className="text-[48px] font-bold leading-[1.1] text-[hsl(var(--fg))] mb-4">
          Contact
        </h1>
        <p className="text-[17px] leading-[1.65] text-[hsl(var(--muted))] mb-12">
          I read every message. Response time is usually 24–48 hours. For
          recruiting, please include role, comp range, and visa posture.
        </p>

        <div className="grid gap-8 sm:grid-cols-2 mb-16">
          <div className="space-y-4">
            <a
              href={`mailto:${personalInfo.email}`}
              className="flex items-center gap-3 rounded-lg border border-[hsl(var(--border))] p-4 transition-colors hover:border-[hsl(var(--accent)/0.3)] group"
            >
              <Mail size={18} className="text-[hsl(var(--accent))]" />
              <div>
                <p className="text-xs text-[hsl(var(--muted))]">Email</p>
                <p className="text-sm font-medium text-[hsl(var(--fg))] group-hover:text-[hsl(var(--accent))] transition-colors">
                  {personalInfo.email}
                </p>
              </div>
            </a>
            <div className="flex items-center gap-3 rounded-lg border border-[hsl(var(--border))] p-4">
              <MapPin size={18} className="text-[hsl(var(--accent))]" />
              <div>
                <p className="text-xs text-[hsl(var(--muted))]">Location</p>
                <p className="text-sm font-medium text-[hsl(var(--fg))]">
                  Sunnyvale, CA
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-lg border border-[hsl(var(--border))] p-4">
              <Calendar size={18} className="text-[hsl(var(--accent))]" />
              <div>
                <p className="text-xs text-[hsl(var(--muted))]">Status</p>
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute h-full w-full rounded-full bg-[hsl(var(--success))] opacity-75" />
                    <span className="relative rounded-full h-2 w-2 bg-[hsl(var(--success))]" />
                  </span>
                  <p className="text-sm font-medium text-[hsl(var(--fg))]">
                    Available for opportunities
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            {[
              { label: "GitHub", href: personalInfo.github, icon: Github },
              { label: "LinkedIn", href: personalInfo.linkedin, icon: Linkedin },
              { label: "Google Scholar", href: personalInfo.scholar, icon: BookOpen },
              { label: "ORCID", href: personalInfo.orcid, icon: BookOpen },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-lg border border-[hsl(var(--border))] p-4 transition-colors hover:border-[hsl(var(--accent)/0.3)] group"
              >
                <link.icon size={18} className="text-[hsl(var(--muted))] group-hover:text-[hsl(var(--accent))] transition-colors" />
                <span className="text-sm font-medium text-[hsl(var(--fg))] group-hover:text-[hsl(var(--accent))] transition-colors">
                  {link.label}
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* Resume download */}
        <div className="rounded-lg border border-[hsl(var(--border))] p-6 text-center">
          <p className="text-sm text-[hsl(var(--muted))] mb-3">Download resume</p>
          <a
            href="/resumes/avinash-amudala-swe.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-[hsl(var(--accent))] text-[hsl(var(--accent-fg))] px-5 py-2.5 text-sm font-semibold transition-opacity hover:opacity-90"
          >
            avinash-amudala-swe.pdf
          </a>
        </div>
      </div>
    </article>
  );
}
