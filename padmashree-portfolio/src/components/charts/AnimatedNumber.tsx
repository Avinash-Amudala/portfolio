"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Counts up to `value` once, when scrolled into view. Renders the final value on the
 * server and under reduced motion, so it is correct without JavaScript and never
 * flashes for content already on screen.
 */
export function AnimatedNumber({
  value,
  from = 0,
  duration = 900,
  format = (v: number) => String(Math.round(v)),
  className,
}: {
  value: number;
  from?: number;
  duration?: number;
  format?: (v: number) => string;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(value);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReduced) {
      setDisplay(value);
      return;
    }

    let raf = 0;
    const run = () => {
      if (started.current) return;
      started.current = true;
      const start = performance.now();
      const tick = (now: number) => {
        const t = Math.min(1, (now - start) / duration);
        const eased = 1 - Math.pow(1 - t, 3);
        setDisplay(from + (value - from) * eased);
        if (t < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    };

    // Only reset to the start value when the element is below the fold, so on-screen
    // counters do not visibly jump before animating.
    const rect = el.getBoundingClientRect();
    const belowFold = rect.top > window.innerHeight * 0.9;
    if (belowFold) setDisplay(from);

    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          run();
          io.disconnect();
        }
      },
      { threshold: 0.4 },
    );
    io.observe(el);

    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [value, from, duration]);

  return (
    <span ref={ref} className={className}>
      {format(display)}
    </span>
  );
}
