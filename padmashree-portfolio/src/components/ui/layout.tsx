import { cn } from "@/lib/cn";
import type { ReactNode } from "react";

/** Centered page container with responsive gutters. */
export function Container({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return <div className={cn("container-page", className)}>{children}</div>;
}

/** Vertical section rhythm with anchor offset so #hash links clear the sticky nav. */
export function Section({
  id,
  className,
  children,
  "aria-labelledby": ariaLabelledby,
}: {
  id?: string;
  className?: string;
  children: ReactNode;
  "aria-labelledby"?: string;
}) {
  return (
    <section
      id={id}
      aria-labelledby={ariaLabelledby}
      className={cn("scroll-mt-24 py-16 sm:py-20 lg:py-24", className)}
    >
      {children}
    </section>
  );
}

/** Hairline rule. */
export function Divider({ className }: { className?: string }) {
  return <hr className={cn("border-0 border-t border-hairline", className)} />;
}
