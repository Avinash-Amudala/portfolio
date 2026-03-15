"use client";

import { motion } from "framer-motion";
import { MapPin, Briefcase, GraduationCap, Award, Sparkles } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { personalInfo, education } from "@/data/portfolio-data";
import { Spotlight } from "@/components/ui/spotlight";

const stats = [
  { icon: Briefcase, label: "Years Experience", value: "3+", color: "var(--color-accent)" },
  { icon: Award, label: "Certifications", value: "5", color: "var(--color-accent-cyan)" },
  { icon: GraduationCap, label: "Publications", value: "2", color: "var(--color-accent-purple)" },
];

export default function About() {
  return (
    <section id="about" className="section-padding mesh-gradient relative">
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
            <div className="glass-card rounded-2xl p-6 relative overflow-hidden">
              <Spotlight size={300} className="from-blue-500/20 via-blue-400/10 to-transparent" />
              <div className="flex items-start gap-3 mb-4">
                <div className="rounded-lg bg-[var(--color-accent)]/10 p-2">
                  <Sparkles size={18} className="text-[var(--color-accent)]" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">Who I Am</h3>
                  <div className="flex items-center gap-2 text-sm text-[var(--color-text-secondary)] mt-1">
                    <MapPin size={14} className="text-[var(--color-accent)]" />
                    <span>{personalInfo.location}</span>
                  </div>
                </div>
              </div>
              <p className="text-[15px] leading-relaxed text-[var(--color-text-secondary)]">
                {personalInfo.summary}
              </p>
            </div>

            {/* Education */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                <GraduationCap size={20} className="text-[var(--color-accent-cyan)]" />
                Education
              </h3>
              {education.map((edu, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="glass-card rounded-xl p-4 group"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="font-semibold text-white group-hover:text-[var(--color-accent)] transition-colors">
                        {edu.school}
                      </h4>
                      <p className="text-sm text-[var(--color-text-secondary)]">
                        {edu.degree}
                      </p>
                    </div>
                    <span className="text-sm font-mono text-[var(--color-accent-cyan)] bg-[var(--color-accent-cyan)]/10 px-2.5 py-0.5 rounded-full">
                      {edu.year}
                    </span>
                  </div>
                  {edu.courses && (
                    <p className="mt-2 text-xs text-[var(--color-text-secondary)] leading-relaxed">
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
                className="glass-card rounded-2xl p-6 text-center group relative overflow-hidden"
              >
                <Spotlight size={250} className="from-blue-500/15 via-transparent to-transparent" />
                <div
                  className="mx-auto mb-3 rounded-xl p-3 w-fit transition-transform group-hover:scale-110"
                  style={{ backgroundColor: `color-mix(in srgb, ${stat.color} 10%, transparent)` }}
                >
                  <stat.icon
                    size={24}
                    style={{ color: stat.color }}
                  />
                </div>
                <div className="text-4xl font-bold gradient-text mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-[var(--color-text-secondary)]">
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
