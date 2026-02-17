"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { skillCategories } from "@/data/portfolio-data";
import {
  Monitor,
  Server,
  Brain,
  Cloud,
  Database,
} from "lucide-react";

const categoryIcons: Record<string, typeof Monitor> = {
  Frontend: Monitor,
  Backend: Server,
  "AI & Data": Brain,
  Infrastructure: Cloud,
  Datastores: Database,
};

const categoryColors: Record<string, string> = {
  Frontend: "var(--color-accent)",
  Backend: "var(--color-accent-cyan)",
  "AI & Data": "var(--color-accent-purple)",
  Infrastructure: "var(--color-accent-pink)",
  Datastores: "#f59e0b",
};

export default function Skills() {
  return (
    <section id="skills" className="section-padding">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          title="Skills & Technologies"
          subtitle="Tools and technologies I use to build production systems"
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, i) => {
            const Icon = categoryIcons[category.name] || Monitor;
            const color = categoryColors[category.name] || "var(--color-accent)";

            return (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 transition-all hover:border-[var(--color-accent)]/20 hover:shadow-lg hover:shadow-blue-500/5"
              >
                <div className="mb-4 flex items-center gap-3">
                  <div
                    className="rounded-lg p-2"
                    style={{ backgroundColor: `${color}15` }}
                  >
                    <Icon size={20} style={{ color }} />
                  </div>
                  <h3 className="font-semibold text-white">{category.name}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, j) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.1 + j * 0.03, duration: 0.3 }}
                      viewport={{ once: true }}
                      className="rounded-md bg-[var(--color-surface-light)] px-3 py-1.5 text-xs font-medium text-[var(--color-text-secondary)] transition-all hover:text-white"
                      style={{
                        borderLeft: `2px solid ${color}30`,
                      }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
