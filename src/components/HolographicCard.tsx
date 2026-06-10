"use client";

import Image from "next/image";
import TiltCard from "@/components/ui/tilt-card";

interface HolographicCardProps {
  src: string;
  alt: string;
  caption?: string;
  className?: string;
}

/** Portrait in a gradient-ring frame with scanline + shimmer overlays. */
export default function HolographicCard({
  src,
  alt,
  caption,
  className,
}: HolographicCardProps) {
  return (
    <TiltCard maxTilt={8} className={className}>
      <figure className="gradient-ring overflow-hidden rounded-2xl">
        <div className="relative overflow-hidden rounded-[15px]">
          <Image
            src={src}
            alt={alt}
            width={420}
            height={420}
            priority
            className="block h-auto w-full"
          />
          {/* Holographic overlays */}
          <div
            aria-hidden="true"
            className="holo-scanlines pointer-events-none absolute inset-0"
          />
          <div
            aria-hidden="true"
            className="holo-shimmer pointer-events-none absolute inset-0"
          />
          {caption && (
            <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[hsl(232_45%_4%/0.85)] to-transparent px-4 pb-3 pt-10">
              <span className="font-[family-name:var(--font-mono)] text-xs text-[hsl(190_95%_70%)]">
                {caption}
              </span>
            </figcaption>
          )}
        </div>
      </figure>
    </TiltCard>
  );
}
