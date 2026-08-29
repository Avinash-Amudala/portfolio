"use client";

import { useState } from "react";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { dataQuality } from "@/content/data/data-quality";
import { fmtNumber } from "@/lib/format";
import { useTween } from "@/lib/hooks";
import { cn } from "@/lib/cn";

// State 0 is the raw "before". States 1..4 apply each fix in turn.
const states = [
  {
    label: "Before",
    detail: dataQuality.rootCause,
    duplicates: dataQuality.duplicatedDays,
    exceptions: 0,
  },
  ...dataQuality.steps.map((s) => ({
    label: s.label,
    detail: s.detail,
    duplicates: s.duplicatesRemaining,
    exceptions: s.exceptionsLogged,
  })),
];

const MAX_DUP = dataQuality.duplicatedDays;
const MAX_EXC = dataQuality.conflictsLogged;

export function DataQualityFix() {
  const [step, setStep] = useState(0);
  const current = states[step];

  const dup = useTween(current.duplicates);
  const exc = useTween(current.exceptions);

  return (
    <div>
      <p className="text-xs text-ink-muted">
        <span className="num">{fmtNumber(dataQuality.punchRows)}</span> punch rows ·{" "}
        <span className="num">{dataQuality.employees}</span> employees ·{" "}
        <span className="num">{dataQuality.monthsOfData}</span> months of data
      </p>

      <div className="mt-5 grid gap-6 sm:grid-cols-2" aria-live="polite">
        <Meter
          label="Duplicated employee-days"
          value={Math.round(dup)}
          max={MAX_DUP}
          tone="negative"
        />
        <Meter
          label="Conflicts logged (not hidden)"
          value={Math.round(exc)}
          max={MAX_EXC}
          tone="accent"
        />
      </div>

      <ol className="mt-8 space-y-2">
        {dataQuality.steps.map((s, i) => {
          const done = step >= i + 1;
          return (
            <li key={s.label} className="flex items-start gap-3">
              <span
                className={cn(
                  "mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full border text-xs",
                  done
                    ? "border-accent bg-accent text-on-accent"
                    : "border-hairline-strong text-ink-muted",
                )}
                aria-hidden
              >
                {done ? <Check size={12} /> : i + 1}
              </span>
              <span
                className={cn(
                  "text-sm",
                  done ? "text-ink" : "text-ink-muted",
                )}
              >
                {s.label}
              </span>
            </li>
          );
        })}
      </ol>

      <div className="mt-6 rounded-md border border-hairline bg-sunken/60 p-4">
        <p className="text-sm font-medium text-ink">
          {step === 0 ? "The problem" : current.label}
        </p>
        <p className="mt-1 text-sm leading-relaxed text-ink-2">{current.detail}</p>
      </div>

      <div className="mt-5 flex items-center justify-between gap-4">
        <button
          type="button"
          onClick={() => setStep((s) => Math.max(0, s - 1))}
          disabled={step === 0}
          className="inline-flex items-center gap-1.5 rounded-md border border-hairline-strong px-3 py-2 text-sm text-ink transition-colors hover:border-ink-muted disabled:opacity-40 disabled:pointer-events-none"
        >
          <ArrowLeft size={15} aria-hidden />
          Back
        </button>

        <div className="flex items-center gap-2" role="group" aria-label="Fix step">
          {states.map((s, i) => (
            <button
              key={s.label}
              type="button"
              onClick={() => setStep(i)}
              aria-label={`Step ${i}: ${s.label}`}
              aria-current={i === step}
              className={cn(
                "size-2.5 rounded-full transition-colors",
                i === step ? "bg-accent" : "bg-hairline-strong hover:bg-ink-muted",
              )}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={() => setStep((s) => Math.min(states.length - 1, s + 1))}
          disabled={step === states.length - 1}
          className="inline-flex items-center gap-1.5 rounded-md bg-accent px-3 py-2 text-sm text-on-accent transition-colors hover:bg-accent-deep disabled:opacity-40 disabled:pointer-events-none"
        >
          {step === 0 ? "Apply first fix" : "Next fix"}
          <ArrowRight size={15} aria-hidden />
        </button>
      </div>
    </div>
  );
}

function Meter({
  label,
  value,
  max,
  tone,
}: {
  label: string;
  value: number;
  max: number;
  tone: "negative" | "accent";
}) {
  const pct = Math.max(0, Math.min(100, (value / max) * 100));
  return (
    <div>
      <div className="flex items-baseline justify-between">
        <span className="text-sm text-ink-2">{label}</span>
        <span
          className={cn(
            "num text-2xl font-medium",
            tone === "negative" ? "text-[var(--color-negative)]" : "text-accent",
          )}
        >
          {fmtNumber(value)}
        </span>
      </div>
      <div className="mt-2 h-2 overflow-hidden rounded-full bg-sunken">
        <div
          className={cn(
            "h-full rounded-full transition-[width] duration-500 ease-out",
            tone === "negative" ? "bg-[var(--color-negative)]" : "bg-accent",
          )}
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}
