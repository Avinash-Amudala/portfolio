"use client";

import { useEffect, useRef } from "react";
import {
  motion,
  useInView,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";

interface Stat {
  value: number;
  decimals?: number;
  prefix?: string;
  suffix: string;
  label: string;
}

const stats: Stat[] = [
  { value: 60, suffix: "+", label: "MCP tools shipped on PyPI" },
  { value: 7, suffix: "", label: "Network vendor platforms supported" },
  { value: 157, suffix: "", label: "Tests in the MCP-Telecom suite" },
  {
    value: 98.4,
    decimals: 1,
    suffix: "%",
    label: "PROXIMA oracle agreement",
  },
];

function Counter({ stat }: { stat: Stat }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const mv = useMotionValue(0);
  const spring = useSpring(mv, { stiffness: 60, damping: 20 });
  const display = useTransform(spring, (v) =>
    v.toFixed(stat.decimals ?? 0)
  );

  useEffect(() => {
    if (inView) mv.set(stat.value);
  }, [inView, mv, stat.value]);

  return (
    <span ref={ref} className="tabular-nums">
      {stat.prefix}
      <motion.span>{display}</motion.span>
      {stat.suffix}
    </span>
  );
}

export default function StatsSection() {
  return (
    <section className="px-6 py-16">
      <div className="mx-auto max-w-[1200px]">
        <div className="glass-card grid grid-cols-2 gap-px overflow-hidden rounded-2xl lg:grid-cols-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.4 }}
              className="flex flex-col gap-2 p-8"
            >
              <span className="bg-gradient-to-r from-[hsl(var(--accent))] to-[hsl(var(--accent-2))] bg-clip-text font-[family-name:var(--font-mono)] text-4xl font-bold text-transparent">
                <Counter stat={stat} />
              </span>
              <span className="text-sm leading-snug text-[hsl(var(--muted))]">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
