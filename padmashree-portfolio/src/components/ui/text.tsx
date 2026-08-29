import { cn } from "@/lib/cn";
import type { ReactNode } from "react";

/** Small mono, uppercase, spaced label that sits above a heading. */
export function Eyebrow({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <p className={cn("eyebrow", className)}>{children}</p>;
}

/** Any figure or data label. Renders in the mono tabular face. */
export function Num({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <span className={cn("num", className)}>{children}</span>;
}

/** Lede paragraph under a heading. */
export function Lead({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <p className={cn("lead", className)}>{children}</p>;
}

/** Eyebrow + section title + optional lede, one consistent block. */
export function SectionHeading({
  eyebrow,
  title,
  lede,
  headingId,
  className,
}: {
  eyebrow?: string;
  title: ReactNode;
  lede?: ReactNode;
  headingId?: string;
  className?: string;
}) {
  return (
    <div className={cn("max-w-2xl", className)}>
      {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
      <h2 id={headingId} className="display-section mt-3">
        {title}
      </h2>
      {lede ? <Lead className="mt-4">{lede}</Lead> : null}
    </div>
  );
}
