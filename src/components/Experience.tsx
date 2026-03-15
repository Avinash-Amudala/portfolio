"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Building2, ChevronDown, Calendar, MapPin } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { experiences } from "@/data/portfolio-data";

export default function Experience() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  return (
    <section id="experience" className="section-padding relative">
      {/* Background accent */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 h-[500px] w-[300px] rounded-full bg-[var(--color-accent-purple)] opacity-[0.02] blur-[120px]" />

      <div className="mx-auto max-w-4xl relative">
        <SectionHeading
          title="Experience"
          subtitle="Building production systems across AI, telecom, and web platforms"
        />

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[19px] top-0 h-full w-px bg-gradient-to-b from-[var(--color-accent)] via-[var(--color-accent-purple)] to-transparent md:left-[19px]" />

          <div className="space-y-6">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                viewport={{ once: true }}
                className="relative pl-12"
              >
                {/* Timeline dot */}
                <motion.div
                  animate={expandedIndex === i ? { scale: [1, 1.3, 1] } : {}}
                  transition={{ duration: 0.3 }}
                  className={`absolute left-2 top-6 h-5 w-5 rounded-full border-2 transition-all duration-300 ${
                    expandedIndex === i
                      ? "border-[var(--color-accent)] bg-[var(--color-accent)] shadow-lg shadow-blue-500/40"
                      : "border-[var(--color-border)] bg-[var(--color-surface)]"
                  }`}
                >
                  {expandedIndex === i && (
                    <span className="absolute inset-0 rounded-full bg-[var(--color-accent)] animate-ping opacity-30" />
                  )}
                </motion.div>

                <div
                  className={`rounded-2xl border transition-all duration-300 cursor-pointer ${
                    expandedIndex === i
                      ? "border-[var(--color-accent)]/30 glass-card shadow-xl shadow-blue-500/5"
                      : "border-[var(--color-border)] bg-[var(--color-surface)] hover:border-[var(--color-border)] hover:bg-[var(--color-surface-light)]"
                  }`}
                  onClick={() =>
                    setExpandedIndex(expandedIndex === i ? null : i)
                  }
                >
                  <div className="flex items-start justify-between p-5">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <div className="rounded-md bg-[var(--color-accent)]/10 p-1">
                          <Building2
                            size={14}
                            className="text-[var(--color-accent)]"
                          />
                        </div>
                        <span className="text-sm font-semibold text-[var(--color-accent)]">
                          {exp.company}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-white">
                        {exp.role}
                      </h3>
                      {exp.subtitle && (
                        <p className="text-sm text-[var(--color-accent-cyan)] mt-0.5 font-medium">
                          {exp.subtitle}
                        </p>
                      )}
                      <div className="mt-2 flex items-center gap-4 text-xs text-[var(--color-text-secondary)]">
                        <span className="flex items-center gap-1">
                          <MapPin size={12} />
                          {exp.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar size={12} />
                          {exp.period}
                        </span>
                      </div>
                    </div>
                    <motion.div
                      animate={{ rotate: expandedIndex === i ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className={`rounded-lg p-1.5 transition-colors ${expandedIndex === i ? "bg-[var(--color-accent)]/10" : ""}`}
                    >
                      <ChevronDown
                        size={18}
                        className={`transition-colors ${expandedIndex === i ? "text-[var(--color-accent)]" : "text-[var(--color-text-secondary)]"}`}
                      />
                    </motion.div>
                  </div>

                  <AnimatePresence>
                    {expandedIndex === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 pb-5">
                          <div className="border-t border-[var(--color-border)] pt-4">
                            <ul className="space-y-3">
                              {exp.bullets.map((bullet, j) => (
                                <motion.li
                                  key={j}
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: j * 0.05 }}
                                  className="flex gap-3 text-sm text-[var(--color-text-secondary)] leading-relaxed"
                                >
                                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-cyan)]" />
                                  {bullet}
                                </motion.li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
