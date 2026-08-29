import { cn } from "@/lib/cn";
import type { ReactNode } from "react";

/** Hairline surface on white. Never nest a Card inside a Card. */
export function Card({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "rounded-lg border border-hairline bg-surface p-6 shadow-sm",
        className,
      )}
    >
      {children}
    </div>
  );
}

/** A single metric: value in the mono tabular face, plain-language label, source. */
export function Stat({
  value,
  label,
  source,
  emphasize = false,
  className,
}: {
  value: ReactNode;
  label: ReactNode;
  source?: ReactNode;
  emphasize?: boolean;
  className?: string;
}) {
  return (
    <div className={className}>
      <div className={cn("metric-xl", emphasize ? "text-accent" : "text-ink")}>
        {value}
      </div>
      <div className="mt-2 text-sm font-medium text-ink">{label}</div>
      {source ? <div className="mt-1 text-xs text-ink-muted">{source}</div> : null}
    </div>
  );
}
