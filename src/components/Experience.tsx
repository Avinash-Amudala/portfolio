"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Building2, ChevronDown } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { experiences } from "@/data/portfolio-data";

export default function Experience() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  return (
    <section id="experience" className="section-padding">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          title="Experience"
          subtitle="Building production systems across AI, telecom, and web platforms"
        />

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[19px] top-0 h-full w-px bg-gradient-to-b from-[var(--color-accent)] via-[var(--color-accent-purple)] to-[var(--color-border)] md:left-[19px]" />

          <div className="space-y-8">
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
                <div
                  className={`absolute left-2.5 top-6 h-4 w-4 rounded-full border-2 transition-colors ${
                    expandedIndex === i
                      ? "border-[var(--color-accent)] bg-[var(--color-accent)] shadow-lg shadow-blue-500/30"
                      : "border-[var(--color-border)] bg-[var(--color-surface)]"
                  }`}
                />

                <div
                  className={`rounded-xl border transition-all cursor-pointer ${
                    expandedIndex === i
                      ? "border-[var(--color-accent)]/30 bg-[var(--color-surface)] shadow-lg shadow-blue-500/5"
                      : "border-[var(--color-border)] bg-[var(--color-surface)] hover:border-[var(--color-border)] hover:bg-[var(--color-surface-light)]"
                  }`}
                  onClick={() =>
                    setExpandedIndex(expandedIndex === i ? null : i)
                  }
                >
                  <div className="flex items-start justify-between p-5">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-1">
                        <Building2
                          size={16}
                          className="text-[var(--color-accent)]"
                        />
                        <span className="text-sm font-medium text-[var(--color-accent)]">
                          {exp.company}
                        </span>
                      </div>
                      <h3 className="text-lg font-semibold text-white">
                        {exp.role}
                      </h3>
                      {exp.subtitle && (
                        <p className="text-sm text-[var(--color-accent-cyan)] mt-0.5">
                          {exp.subtitle}
                        </p>
                      )}
                      <p className="mt-1 text-sm text-[var(--color-text-secondary)]">
                        {exp.location} &middot; {exp.period}
                      </p>
                    </div>
                    <motion.div
                      animate={{ rotate: expandedIndex === i ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown
                        size={20}
                        className="text-[var(--color-text-secondary)]"
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
                                  className="flex gap-3 text-sm text-[var(--color-text-secondary)]"
                                >
                                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--color-accent)]" />
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
