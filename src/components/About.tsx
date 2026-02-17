"use client";

import { motion } from "framer-motion";
import { MapPin, Briefcase, GraduationCap, Award } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { personalInfo, education } from "@/data/portfolio-data";

const stats = [
  { icon: Briefcase, label: "Years Experience", value: "3+" },
  { icon: Award, label: "Certifications", value: "5" },
  { icon: GraduationCap, label: "Publications", value: "2" },
];

export default function About() {
  return (
    <section id="about" className="section-padding dot-grid">
      <div className="mx-auto max-w-6xl">
        <SectionHeading title="About Me" subtitle="Engineer. Builder. Researcher." />

        <div className="grid gap-12 lg:grid-cols-5">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-3 space-y-6"
          >
            <p className="text-lg leading-relaxed text-[var(--color-text-secondary)]">
              {personalInfo.summary}
            </p>

            <div className="flex items-center gap-2 text-[var(--color-text-secondary)]">
              <MapPin size={16} className="text-[var(--color-accent)]" />
              <span>{personalInfo.location}</span>
            </div>

            {/* Education */}
            <div className="space-y-4 pt-4">
              <h3 className="text-lg font-semibold text-white">Education</h3>
              {education.map((edu, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] p-4"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="font-semibold text-white">{edu.school}</h4>
                      <p className="text-sm text-[var(--color-text-secondary)]">
                        {edu.degree}
                      </p>
                    </div>
                    <span className="text-sm font-mono text-[var(--color-accent-cyan)]">
                      {edu.year}
                    </span>
                  </div>
                  {edu.courses && (
                    <p className="mt-2 text-xs text-[var(--color-text-secondary)]">
                      {edu.courses}
                    </p>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2 flex flex-col gap-4"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                viewport={{ once: true }}
                className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 text-center transition-all hover:border-[var(--color-accent)]/30 hover:shadow-lg hover:shadow-blue-500/5"
              >
                <stat.icon
                  size={28}
                  className="mx-auto mb-3 text-[var(--color-accent)]"
                />
                <div className="text-3xl font-bold gradient-text">
                  {stat.value}
                </div>
                <div className="mt-1 text-sm text-[var(--color-text-secondary)]">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
