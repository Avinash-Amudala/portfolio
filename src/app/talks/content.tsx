"use client";

import { motion } from "framer-motion";
import {
  Mic,
  BookOpen,
  Users,
  ExternalLink,
  GraduationCap,
} from "lucide-react";
import {
  guestLectures,
  collaborations,
  reviewerRoles,
  publications,
} from "@/data/portfolio-data";

export default function TalksContent() {
  return (
    <article className="section-padding">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h1 className="text-3xl sm:text-4xl font-bold gradient-text mb-3">
            Writing & Talks
          </h1>
          <p className="text-[var(--color-text-secondary)]">
            Guest lectures, peer review, publications, and academic
            collaborations.
          </p>
        </motion.div>

        {/* Guest Lectures */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-6">
            <div className="rounded-lg bg-[var(--color-accent)]/10 p-1.5">
              <Mic size={18} className="text-[var(--color-accent)]" />
            </div>
            Guest Lectures
          </h2>
          <div className="space-y-4">
            {guestLectures.map((lecture, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-5"
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <div>
                    <h3 className="font-semibold text-white">
                      {lecture.course}
                    </h3>
                    <p className="text-sm text-[var(--color-text-secondary)]">
                      {lecture.institution} &middot; {lecture.professor}
                    </p>
                  </div>
                  <span className="shrink-0 rounded-full bg-[var(--color-accent-cyan)]/10 px-3 py-1 text-xs font-mono text-[var(--color-accent-cyan)]">
                    {lecture.semester}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Academic Collaborations */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-6">
            <div className="rounded-lg bg-[var(--color-accent-purple)]/10 p-1.5">
              <GraduationCap
                size={18}
                className="text-[var(--color-accent-purple)]"
              />
            </div>
            Academic Collaborations
          </h2>
          <div className="space-y-4">
            {collaborations.map((collab, i) => (
              <div
                key={i}
                className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-5"
              >
                <h3 className="font-semibold text-white">
                  {collab.collaborator}
                </h3>
                <p className="text-sm text-[var(--color-text-secondary)]">
                  {collab.role} &middot; {collab.institution}
                </p>
                <p className="mt-1 text-xs text-[var(--color-text-secondary)]">
                  {collab.area}
                </p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Peer Review */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-6">
            <div className="rounded-lg bg-[var(--color-accent-cyan)]/10 p-1.5">
              <Users
                size={18}
                className="text-[var(--color-accent-cyan)]"
              />
            </div>
            Peer Review
          </h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {reviewerRoles.map((role) => (
              <a
                key={role.venue}
                href={role.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-4 transition-all hover:border-[var(--color-accent)]/20 group"
              >
                <div>
                  <p className="font-medium text-white text-sm group-hover:text-[var(--color-accent)] transition-colors">
                    {role.venue}
                  </p>
                  <p className="text-xs text-[var(--color-text-secondary)]">
                    {role.type}
                  </p>
                </div>
                <ExternalLink
                  size={14}
                  className="text-[var(--color-text-secondary)] group-hover:text-[var(--color-accent)] transition-colors"
                />
              </a>
            ))}
          </div>
        </motion.section>

        {/* Publications */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-6">
            <div className="rounded-lg bg-[var(--color-accent-purple)]/10 p-1.5">
              <BookOpen
                size={18}
                className="text-[var(--color-accent-purple)]"
              />
            </div>
            Publications
          </h2>
          <div className="space-y-4">
            {publications.map((pub, i) => (
              <div
                key={i}
                className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-5"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="rounded-full bg-[var(--color-accent-purple)]/10 px-3 py-0.5 text-xs font-mono text-[var(--color-accent-purple)]">
                    {pub.year}
                  </span>
                  <span className="text-xs text-[var(--color-text-secondary)]">
                    {pub.venue}
                  </span>
                </div>
                <h3 className="font-semibold text-white text-sm mb-1">
                  {pub.title}
                </h3>
                <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed mb-2">
                  {pub.description}
                </p>
                {pub.link && (
                  <a
                    href={pub.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-[var(--color-accent)] hover:underline"
                  >
                    <ExternalLink size={12} />
                    {pub.doi
                      ? `DOI: ${pub.doi}`
                      : "View"}
                  </a>
                )}
              </div>
            ))}
          </div>
        </motion.section>
      </div>
    </article>
  );
}
