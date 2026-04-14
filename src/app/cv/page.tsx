import type { Metadata } from "next";
import { experiences, certifications, education, publications } from "@/data/portfolio-data";

export const metadata: Metadata = {
  title: "CV",
  description:
    "Avinash Amudala — Software Engineer at Nokia. MS Software Engineering, RIT. Creator of MCP-Telecom. Full CV.",
};

export default function CVPage() {
  return (
    <article className="section-gap px-6 print:p-0 print:pt-8">
      <div className="mx-auto max-w-[720px]">
        <header className="mb-12">
          <h1 className="text-[36px] font-bold text-[hsl(var(--fg))]">
            Avinash Amudala
          </h1>
          <p className="text-[hsl(var(--muted))]">
            Software Engineer · Nokia · Sunnyvale, CA
          </p>
          <p className="text-sm text-[hsl(var(--muted))] mt-1">
            aa9429@rit.edu · github.com/Avinash-Amudala · avinash-amudala.com
          </p>
        </header>

        <section className="mb-10">
          <h2 className="text-lg font-bold text-[hsl(var(--fg))] border-b border-[hsl(var(--border))] pb-2 mb-4">
            Experience
          </h2>
          {experiences.map((exp, i) => (
            <div key={i} className="mb-8 last:mb-0">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-semibold text-[hsl(var(--fg))]">
                    {exp.role}
                  </h3>
                  <p className="text-sm text-[hsl(var(--muted))]">
                    {exp.company} · {exp.location}
                  </p>
                </div>
                <span className="text-xs font-[family-name:var(--font-mono)] text-[hsl(var(--muted))] shrink-0">
                  {exp.period}
                </span>
              </div>
              <ul className="mt-2 space-y-1.5">
                {exp.bullets.map((bullet, j) => (
                  <li
                    key={j}
                    className="text-sm text-[hsl(var(--muted))] leading-relaxed flex gap-2"
                  >
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[hsl(var(--muted))]" />
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        <section className="mb-10">
          <h2 className="text-lg font-bold text-[hsl(var(--fg))] border-b border-[hsl(var(--border))] pb-2 mb-4">
            Education
          </h2>
          {education.map((edu, i) => (
            <div key={i} className="mb-4 last:mb-0 flex items-start justify-between">
              <div>
                <h3 className="font-semibold text-[hsl(var(--fg))]">{edu.school}</h3>
                <p className="text-sm text-[hsl(var(--muted))]">{edu.degree}</p>
              </div>
              <span className="text-xs font-[family-name:var(--font-mono)] text-[hsl(var(--muted))] shrink-0">
                {edu.year}
              </span>
            </div>
          ))}
        </section>

        <section className="mb-10">
          <h2 className="text-lg font-bold text-[hsl(var(--fg))] border-b border-[hsl(var(--border))] pb-2 mb-4">
            Publications
          </h2>
          {publications.map((pub, i) => (
            <div key={i} className="mb-3 last:mb-0">
              <p className="text-sm text-[hsl(var(--fg))] font-medium">{pub.title}</p>
              <p className="text-xs text-[hsl(var(--muted))]">{pub.venue} · {pub.year}</p>
            </div>
          ))}
        </section>

        <section className="mb-10">
          <h2 className="text-lg font-bold text-[hsl(var(--fg))] border-b border-[hsl(var(--border))] pb-2 mb-4">
            Certifications
          </h2>
          <div className="grid grid-cols-2 gap-2">
            {certifications.map((cert) => (
              <p key={cert.name} className="text-sm text-[hsl(var(--muted))]">
                {cert.name} ({cert.issuer})
              </p>
            ))}
          </div>
        </section>

        <p className="text-xs text-[hsl(var(--muted))] print:hidden">
          This page is an HTML version of my resume. It is crawlable and printable.{" "}
          <a
            href="/resumes/avinash-amudala-swe.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[hsl(var(--accent))] hover:underline"
          >
            Download PDF version
          </a>
        </p>
      </div>
    </article>
  );
}
