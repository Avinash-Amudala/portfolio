"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { skillCategories } from "@/data/portfolio-data";
import { Spotlight } from "@/components/ui/spotlight";
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
  Frontend: "#3b82f6",
  Backend: "#06b6d4",
  "AI & Data": "#8b5cf6",
  Infrastructure: "#ec4899",
  Datastores: "#f59e0b",
};

const categoryGradients: Record<string, string> = {
  Frontend: "from-blue-500/20 via-blue-400/5 to-transparent",
  Backend: "from-cyan-500/20 via-cyan-400/5 to-transparent",
  "AI & Data": "from-purple-500/20 via-purple-400/5 to-transparent",
  Infrastructure: "from-pink-500/20 via-pink-400/5 to-transparent",
  Datastores: "from-amber-500/20 via-amber-400/5 to-transparent",
};

export default function Skills() {
  return (
    <section id="skills" className="section-padding relative">
      {/* Background accent */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 h-[500px] w-[300px] rounded-full bg-[var(--color-accent)] opacity-[0.02] blur-[120px]" />

      <div className="mx-auto max-w-6xl relative">
        <SectionHeading
          title="Skills & Technologies"
          subtitle="Tools and technologies I use to build production systems"
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, i) => {
            const Icon = categoryIcons[category.name] || Monitor;
            const color = categoryColors[category.name] || "#3b82f6";
            const gradientClass = categoryGradients[category.name] || "from-blue-500/20 via-transparent to-transparent";

            return (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 transition-all duration-300 hover:border-opacity-30 hover:shadow-lg hover:shadow-blue-500/5 hover:-translate-y-1 relative overflow-hidden group"
                style={{ "--hover-border": `${color}50` } as React.CSSProperties}
              >
                <Spotlight size={250} className={gradientClass} />

                <div className="mb-5 flex items-center gap-3">
                  <div
                    className="rounded-xl p-2.5 transition-transform group-hover:scale-110"
                    style={{ backgroundColor: `${color}15` }}
                  >
                    <Icon size={22} style={{ color }} />
                  </div>
                  <h3 className="font-bold text-white text-lg">{category.name}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, j) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.1 + j * 0.03, duration: 0.3 }}
                      viewport={{ once: true }}
                      className="rounded-lg bg-[var(--color-surface-light)] px-3 py-1.5 text-xs font-medium text-[var(--color-text-secondary)] transition-all hover:text-white hover:scale-105 border border-transparent hover:border-[var(--color-border)]"
                      style={{
                        borderLeft: `2px solid ${color}40`,
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
