"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Counts up to `value` once, when scrolled into view. The server and reduced-motion
 * render the final value (correct without JavaScript, no flash). State only changes
 * inside the async IntersectionObserver and requestAnimationFrame callbacks.
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
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

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

    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          run();
          io.disconnect();
        }
      },
      { threshold: 0, rootMargin: "0px 0px 10% 0px" },
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
