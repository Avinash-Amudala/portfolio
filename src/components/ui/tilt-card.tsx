"use client";

import { useRef, useState } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { cn } from "@/lib/utils";

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  maxTilt?: number;
}

/** 3D tilt wrapper with a mouse-tracking glow highlight. */
export default function TiltCard({
  children,
  className,
  maxTilt = 6,
}: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);

  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);
  const spring = { stiffness: 180, damping: 20 };
  const rotateX = useSpring(
    useTransform(py, [0, 1], [maxTilt, -maxTilt]),
    spring
  );
  const rotateY = useSpring(
    useTransform(px, [0, 1], [-maxTilt, maxTilt]),
    spring
  );
  const glowX = useTransform(px, (v) => `${v * 100}%`);
  const glowY = useTransform(py, (v) => `${v * 100}%`);

  const onMouseMove = (e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    px.set((e.clientX - rect.left) / rect.width);
    py.set((e.clientY - rect.top) / rect.height);
  };

  const onMouseLeave = () => {
    setHovered(false);
    px.set(0.5);
    py.set(0.5);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={onMouseLeave}
      style={{ rotateX, rotateY, transformPerspective: 1000 }}
      className={cn("relative will-change-transform", className)}
    >
      <motion.div
        aria-hidden="true"
        style={
          {
            "--glow-x": glowX,
            "--glow-y": glowY,
          } as React.CSSProperties
        }
        className={cn(
          "pointer-events-none absolute inset-0 z-10 rounded-[inherit] transition-opacity duration-300",
          hovered ? "opacity-100" : "opacity-0"
        )}
      >
        <div
          className="absolute inset-0 rounded-[inherit]"
          style={{
            background:
              "radial-gradient(360px circle at var(--glow-x) var(--glow-y), hsl(var(--accent) / 0.12), transparent 65%)",
          }}
        />
      </motion.div>
      {children}
    </motion.div>
  );
}
