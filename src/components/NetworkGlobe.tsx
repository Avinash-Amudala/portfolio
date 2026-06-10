"use client";

import { useEffect, useRef } from "react";

interface Node {
  lat: number;
  lon: number;
}

interface Arc {
  a: number;
  b: number;
  phase: number;
}

/**
 * Canvas-rendered rotating dot globe with animated arcs between nodes.
 * Pure 2D projection — no three.js payload.
 */
export default function NetworkGlobe({ size = 460 }: { size?: number }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = size * dpr;
    canvas.height = size * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    const R = size * 0.38;
    const cx = size / 2;
    const cy = size / 2;

    // Fibonacci sphere dot mesh
    const dots: Node[] = [];
    const DOT_COUNT = 420;
    const golden = Math.PI * (3 - Math.sqrt(5));
    for (let i = 0; i < DOT_COUNT; i++) {
      const y = 1 - (i / (DOT_COUNT - 1)) * 2;
      dots.push({
        lat: Math.asin(y),
        lon: golden * i,
      });
    }

    // Hub nodes + arcs between them
    const hubs: Node[] = Array.from({ length: 9 }, (_, i) => ({
      lat: (Math.random() - 0.5) * Math.PI * 0.8,
      lon: (i / 9) * Math.PI * 2 + Math.random() * 0.5,
    }));
    const arcs: Arc[] = Array.from({ length: 7 }, (_, i) => ({
      a: i % hubs.length,
      b: (i + 3) % hubs.length,
      phase: Math.random(),
    }));

    const accentHsl = () => {
      const styles = getComputedStyle(document.documentElement);
      return {
        a: styles.getPropertyValue("--accent").trim() || "190 95% 58%",
        b: styles.getPropertyValue("--accent-2").trim() || "262 90% 70%",
      };
    };
    let colors = accentHsl();
    const observer = new MutationObserver(() => {
      colors = accentHsl();
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    const project = (lat: number, lon: number, rot: number) => {
      const x3 = Math.cos(lat) * Math.cos(lon + rot);
      const y3 = Math.sin(lat);
      const z3 = Math.cos(lat) * Math.sin(lon + rot);
      return { x: cx + x3 * R, y: cy - y3 * R, z: z3 };
    };

    let raf = 0;
    let rot = 0;

    const draw = () => {
      ctx.clearRect(0, 0, size, size);

      // Soft halo
      const halo = ctx.createRadialGradient(cx, cy, R * 0.6, cx, cy, R * 1.45);
      halo.addColorStop(0, `hsl(${colors.a} / 0.06)`);
      halo.addColorStop(1, "transparent");
      ctx.fillStyle = halo;
      ctx.fillRect(0, 0, size, size);

      // Dot mesh
      for (const d of dots) {
        const p = project(d.lat, d.lon, rot);
        if (p.z < -0.15) continue;
        const alpha = 0.08 + ((p.z + 0.15) / 1.15) * 0.5;
        ctx.beginPath();
        ctx.arc(p.x, p.y, 1.1, 0, Math.PI * 2);
        ctx.fillStyle = `hsl(${colors.a} / ${alpha})`;
        ctx.fill();
      }

      // Arcs + traveling packets
      for (const arc of arcs) {
        const A = hubs[arc.a];
        const B = hubs[arc.b];
        const pa = project(A.lat, A.lon, rot);
        const pb = project(B.lat, B.lon, rot);
        if (pa.z < 0 && pb.z < 0) continue;

        const mx = (pa.x + pb.x) / 2;
        const my = (pa.y + pb.y) / 2;
        const lift = 0.45;
        const ctrlX = cx + (mx - cx) * (1 + lift);
        const ctrlY = cy + (my - cy) * (1 + lift);

        ctx.beginPath();
        ctx.moveTo(pa.x, pa.y);
        ctx.quadraticCurveTo(ctrlX, ctrlY, pb.x, pb.y);
        ctx.strokeStyle = `hsl(${colors.b} / 0.25)`;
        ctx.lineWidth = 1;
        ctx.stroke();

        // Packet moving along the arc
        const t = (performance.now() / 2400 + arc.phase) % 1;
        const it = 1 - t;
        const px = it * it * pa.x + 2 * it * t * ctrlX + t * t * pb.x;
        const py2 = it * it * pa.y + 2 * it * t * ctrlY + t * t * pb.y;
        ctx.beginPath();
        ctx.arc(px, py2, 2.2, 0, Math.PI * 2);
        ctx.fillStyle = `hsl(${colors.b} / 0.9)`;
        ctx.shadowColor = `hsl(${colors.b})`;
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      // Hub nodes
      for (const h of hubs) {
        const p = project(h.lat, h.lon, rot);
        if (p.z < -0.1) continue;
        ctx.beginPath();
        ctx.arc(p.x, p.y, 2.6, 0, Math.PI * 2);
        ctx.fillStyle = `hsl(${colors.a} / 0.95)`;
        ctx.shadowColor = `hsl(${colors.a})`;
        ctx.shadowBlur = 10;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      rot += 0.0024;
      if (!reduced) raf = requestAnimationFrame(draw);
    };

    const onVisibility = () => {
      cancelAnimationFrame(raf);
      if (!document.hidden && !reduced) raf = requestAnimationFrame(draw);
    };
    document.addEventListener("visibilitychange", onVisibility);

    draw();

    return () => {
      cancelAnimationFrame(raf);
      observer.disconnect();
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, [size]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{ width: size, height: size }}
      className="pointer-events-none"
    />
  );
}
