import type { Metadata } from "next";
import { Mic, BookOpen, Users, ExternalLink, GraduationCap } from "lucide-react";
import {
  guestLectures,
  collaborations,
  reviewerRoles,
  publications,
} from "@/data/portfolio-data";

export const metadata: Metadata = {
  title: "Talks & Publications",
  description:
    "Guest lectures at SJSU, peer reviewer for ACM, AIAI, DMLR, Elsevier, Springer. IEEE ICESC 2022 publication. PROXIMA preprint.",
};

export default function TalksPage() {
  return (
    <article className="section-gap px-6">
      <div className="mx-auto max-w-[720px]">
        <h1 className="text-[48px] font-bold leading-[1.1] text-[hsl(var(--fg))] mb-4">
          Talks & Publications
        </h1>
        <p className="text-[hsl(var(--muted))] mb-16">
          Guest lectures, peer review, publications, and academic
          collaborations.
        </p>

        {/* Guest Lectures */}
        <section className="mb-16">
          <h2 className="flex items-center gap-2 text-[22px] font-semibold text-[hsl(var(--fg))] mb-6">
            <Mic size={20} />
            Guest Lectures
          </h2>
          <div className="space-y-4">
            {guestLectures.map((lecture, i) => (
              <div
                key={i}
                className="rounded-lg border border-[hsl(var(--border))] p-5"
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <div>
                    <h3 className="font-semibold text-[hsl(var(--fg))]">
                      {lecture.course}
                    </h3>
                    <p className="text-sm text-[hsl(var(--muted))]">
                      {lecture.institution} · {lecture.professor}
                    </p>
                  </div>
                  <span className="shrink-0 rounded-full bg-[hsl(var(--subtle))] px-3 py-1 text-xs font-[family-name:var(--font-mono)] text-[hsl(var(--muted))] border border-[hsl(var(--border))]">
                    {lecture.semester}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Academic Collaborations */}
        <section className="mb-16">
          <h2 className="flex items-center gap-2 text-[22px] font-semibold text-[hsl(var(--fg))] mb-6">
            <GraduationCap size={20} />
            Academic Collaborations
          </h2>
          <div className="space-y-4">
            {collaborations.map((collab, i) => (
              <div
                key={i}
                className="rounded-lg border border-[hsl(var(--border))] p-5"
              >
                <h3 className="font-semibold text-[hsl(var(--fg))]">
                  {collab.collaborator}
                </h3>
                <p className="text-sm text-[hsl(var(--muted))]">
                  {collab.role} · {collab.institution}
                </p>
                <p className="mt-1 text-xs text-[hsl(var(--muted))]">
                  {collab.area}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Peer Review */}
        <section className="mb-16">
          <h2 className="flex items-center gap-2 text-[22px] font-semibold text-[hsl(var(--fg))] mb-6">
            <Users size={20} />
            Peer Review
          </h2>
          <div className="mb-4">
            <p className="text-sm text-[hsl(var(--muted))] italic mb-4">
              Invited peer reviewer across journals, conferences, and open-science platforms.
            </p>
          </div>
          <div className="space-y-3">
            <div>
              <p className="text-sm font-medium text-[hsl(var(--fg))] mb-2">Journals</p>
              <div className="flex flex-wrap gap-2">
                {reviewerRoles.filter(r => r.type === "Journal").map((role) => (
                  <a
                    key={role.venue}
                    href={role.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-[hsl(var(--border))] px-3 py-1.5 text-xs text-[hsl(var(--muted))] hover:text-[hsl(var(--fg))] hover:border-[hsl(var(--accent)/0.3)] transition-colors"
                  >
                    {role.venue}
                  </a>
                ))}
              </div>
            </div>
            <div>
              <p className="text-sm font-medium text-[hsl(var(--fg))] mb-2">Conferences</p>
              <div className="flex flex-wrap gap-2">
                {reviewerRoles.filter(r => r.type === "Conference").map((role) => (
                  <a
                    key={role.venue}
                    href={role.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-[hsl(var(--border))] px-3 py-1.5 text-xs text-[hsl(var(--muted))] hover:text-[hsl(var(--fg))] hover:border-[hsl(var(--accent)/0.3)] transition-colors"
                  >
                    {role.venue}
                  </a>
                ))}
              </div>
            </div>
            <div>
              <p className="text-sm font-medium text-[hsl(var(--fg))] mb-2">Publishers & Open Science</p>
              <div className="flex flex-wrap gap-2">
                {reviewerRoles.filter(r => r.type === "Publisher" || r.type === "Open Review").map((role) => (
                  <a
                    key={role.venue}
                    href={role.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-[hsl(var(--border))] px-3 py-1.5 text-xs text-[hsl(var(--muted))] hover:text-[hsl(var(--fg))] hover:border-[hsl(var(--accent)/0.3)] transition-colors"
                  >
                    {role.venue}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Publications */}
        <section className="mb-16">
          <h2 className="flex items-center gap-2 text-[22px] font-semibold text-[hsl(var(--fg))] mb-6">
            <BookOpen size={20} />
            Publications
          </h2>
          <div className="space-y-4">
            {publications.map((pub, i) => (
              <div
                key={i}
                className="rounded-lg border border-[hsl(var(--border))] p-5"
              >
                <div className="flex items-center gap-3 mb-2">
                  <span className="rounded-full bg-[hsl(var(--subtle))] px-3 py-0.5 text-xs font-[family-name:var(--font-mono)] text-[hsl(var(--muted))]">
                    {pub.year}
                  </span>
                  <span className="text-xs text-[hsl(var(--muted))]">
                    {pub.venue}
                  </span>
                </div>
                <h3 className="font-semibold text-[hsl(var(--fg))] text-sm mb-1">
                  {pub.title}
                </h3>
                <p className="text-xs text-[hsl(var(--muted))] leading-relaxed mb-2">
                  {pub.description}
                </p>
                {pub.link && (
                  <a
                    href={pub.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-[hsl(var(--accent))] hover:underline"
                  >
                    <ExternalLink size={12} />
                    {pub.doi ? `DOI: ${pub.doi}` : "View"}
                  </a>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Placeholder sections */}
        <section className="mb-16">
          <h2 className="text-[22px] font-semibold text-[hsl(var(--fg))] mb-3">
            Conference Talks
          </h2>
          <p className="text-sm text-[hsl(var(--muted))] italic">
            Upcoming — to be populated after Sessionize submissions.
          </p>
        </section>

        <section>
          <h2 className="text-[22px] font-semibold text-[hsl(var(--fg))] mb-3">
            Media Mentions
          </h2>
          <p className="text-sm text-[hsl(var(--muted))] italic">
            To be populated after MCP-Telecom launch coverage.
          </p>
        </section>
      </div>
    </article>
  );
}
