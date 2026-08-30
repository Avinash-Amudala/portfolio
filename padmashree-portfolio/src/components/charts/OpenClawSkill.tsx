"use client";

import { useState } from "react";
import { openclaw, type Recommendation } from "@/content/data/openclaw";
import { fmtUsd } from "@/lib/format";
import { cn } from "@/lib/cn";

function RecBadge({ rec }: { rec: Recommendation }) {
  const tone =
    rec === "Sell"
      ? "border-[var(--color-negative)] text-[var(--color-negative)]"
      : rec === "Buy"
        ? "border-[var(--color-positive)] text-[var(--color-positive)]"
        : "border-hairline-strong text-ink-2";
  return (
    <span
      className={cn(
        "rounded-full border px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wide",
        tone,
      )}
    >
      {rec}
    </span>
  );
}

function TeslaDecomposition() {
  const t = openclaw.tesla;
  const max = t.marketPrice;
  const rows = [
    { label: "Current business (DCF)", value: t.currentBusinessValue, tone: "bg-accent" },
    { label: "Skill's 12-month target", value: t.target, tone: "bg-ink-2" },
    { label: "Market price on demo day", value: t.marketPrice, tone: "bg-[#c3ccd0]" },
  ];
  return (
    <div className="mt-5 border-t border-hairline pt-4">
      <p className="eyebrow">Reverse-DCF decomposition</p>
      <div className="mt-3 space-y-2.5">
        {rows.map((r) => (
          <div key={r.label}>
            <div className="flex items-baseline justify-between text-sm">
              <span className="text-ink-2">{r.label}</span>
              <span className="num text-ink">{fmtUsd(r.value)}</span>
            </div>
            <div className="mt-1 h-2.5 overflow-hidden rounded-full bg-sunken">
              <div
                className={cn("h-full rounded-full", r.tone)}
                style={{ width: `${(r.value / max) * 100}%` }}
              />
            </div>
          </div>
        ))}
      </div>
      <p className="mt-3 text-sm leading-relaxed text-ink-2">{t.note}</p>
    </div>
  );
}

export function OpenClawSkill() {
  const [ticker, setTicker] = useState("TSLA");
  const test = openclaw.sectorTests.find((t) => t.ticker === ticker)!;

  return (
    <div>
      <div className="grid grid-cols-2 gap-x-6 gap-y-4 sm:grid-cols-4">
        <Fig label="Per report" value={`~${openclaw.runtimeMinutes} min`} />
        <Fig label="Cost / report" value={`~$${openclaw.costPerReportUsd}`} />
        <Fig label="Whole project" value={`< $${openclaw.totalProjectUsd}`} emphasize />
        <Fig label="Skill size" value={`${openclaw.sizeKb} KB`} />
      </div>

      <p className="mt-6 text-sm text-ink-2">
        The same skill, run on {openclaw.sectorTests.length} sectors. Pick one to see how it
        adapted.
      </p>

      <div
        className="mt-3 flex flex-wrap gap-2"
        role="group"
        aria-label="Sector tests"
      >
        {openclaw.sectorTests.map((t) => {
          const active = t.ticker === ticker;
          return (
            <button
              key={t.ticker}
              type="button"
              aria-pressed={active}
              onClick={() => setTicker(t.ticker)}
              className={cn(
                "rounded-md border px-3 py-2 text-sm transition-colors",
                active
                  ? "border-accent bg-accent-soft text-accent-deep"
                  : "border-hairline-strong text-ink-2 hover:border-accent hover:text-accent",
              )}
            >
              <span className="num font-medium">{t.ticker}</span>
              <span className="ml-1.5 text-xs text-ink-muted">{t.sector}</span>
            </button>
          );
        })}
      </div>

      <div
        className="mt-4 rounded-lg border border-hairline bg-surface p-5"
        aria-live="polite"
      >
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="font-display text-lg font-medium text-ink">
            {test.company}{" "}
            <span className="num text-sm text-ink-muted">{test.ticker}</span>
          </div>
          <RecBadge rec={test.recommendation} />
        </div>
        <p className="num mt-1 text-xs text-ink-muted">Method: {test.method}</p>
        <p className="mt-3 text-sm leading-relaxed text-ink-2">{test.finding}</p>
        {ticker === "TSLA" ? <TeslaDecomposition /> : null}
      </div>

      <p className="mt-4 text-xs text-ink-muted">
        Recommendations across the tests: Hold, Hold, Hold, Sell. Calibrated to resist the
        default-to-Buy bias, on {openclaw.framework} with {openclaw.model}.
      </p>
    </div>
  );
}

function Fig({
  label,
  value,
  emphasize = false,
}: {
  label: string;
  value: string;
  emphasize?: boolean;
}) {
  return (
    <div>
      <div className="eyebrow">{label}</div>
      <div
        className={cn(
          "num mt-1 text-xl font-medium",
          emphasize ? "text-accent" : "text-ink",
        )}
      >
        {value}
      </div>
    </div>
  );
}
