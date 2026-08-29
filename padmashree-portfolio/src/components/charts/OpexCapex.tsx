"use client";

import { useState } from "react";
import { opexCapex } from "@/content/data/opex-capex";
import { fmtUsdM } from "@/lib/format";
import { cn } from "@/lib/cn";

const opexTotal = opexCapex.opexUsdM;
const capexTotal = opexCapex.capexUsdM;
const pctOf = (v: number, total: number) => (v / total) * 100;

const opexColors = ["bg-accent", "bg-accent/55", "bg-[#c3ccd0]"];

export function OpexCapex() {
  const [selected, setSelected] = useState(0);
  const [committedOnly, setCommittedOnly] = useState(false);
  const sel = opexCapex.opexBreakdownUsdM[selected];

  const committedPct = pctOf(opexCapex.openCommitmentUsdM, opexCapex.totalPlanUsdM);

  return (
    <div>
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div className="flex flex-wrap gap-x-8 gap-y-2">
          <Figure label="Total plan" value={fmtUsdM(opexCapex.totalPlanUsdM)} emphasize />
          <Figure label="OpEx" value={fmtUsdM(opexTotal)} />
          <Figure label="CapEx" value={fmtUsdM(capexTotal)} />
          <Figure label="Forecast lines" value={String(opexCapex.forecastLines)} />
        </div>
        <button
          type="button"
          aria-pressed={committedOnly}
          onClick={() => setCommittedOnly((v) => !v)}
          className={cn(
            "rounded-md border px-3 py-2 text-sm transition-colors",
            committedOnly
              ? "border-accent bg-accent-soft text-accent-deep"
              : "border-hairline-strong text-ink hover:border-ink-muted",
          )}
        >
          Show committed only
        </button>
      </div>

      {/* Total plan bar, with the committed floor isolated when toggled. */}
      <div className="mt-6">
        <div className="flex h-8 w-full overflow-hidden rounded-md border border-hairline">
          <div
            className="flex items-center justify-center bg-accent text-xs font-medium text-on-accent transition-all"
            style={{ width: `${committedPct}%` }}
          >
            {committedPct > 12 ? fmtUsdM(opexCapex.openCommitmentUsdM) : null}
          </div>
          <div
            className={cn(
              "flex flex-1 items-center justify-center text-xs transition-all",
              committedOnly ? "bg-sunken text-ink-muted" : "bg-sunken/60 text-ink-2",
            )}
          >
            {committedOnly
              ? `Open ${fmtUsdM(opexCapex.totalPlanUsdM - opexCapex.openCommitmentUsdM)}`
              : "Total plan"}
          </div>
        </div>
        <p className="mt-2 text-xs text-ink-muted">
          {committedOnly
            ? `${fmtUsdM(opexCapex.openCommitmentUsdM)} is already committed. That is the floor a budget conversation starts from.`
            : "Toggle to isolate the committed floor inside the plan."}
        </p>
      </div>

      <div className="mt-8 grid gap-8 lg:grid-cols-2">
        {/* OpEx composition */}
        <div>
          <p className="eyebrow">OpEx composition · {fmtUsdM(opexTotal)}</p>
          <div
            className="mt-3 flex h-10 w-full overflow-hidden rounded-md border border-hairline"
            role="group"
            aria-label="OpEx composition"
          >
            {opexCapex.opexBreakdownUsdM.map((slice, i) => (
              <button
                key={slice.category}
                type="button"
                onMouseEnter={() => setSelected(i)}
                onFocus={() => setSelected(i)}
                onClick={() => setSelected(i)}
                aria-pressed={selected === i}
                aria-label={`${slice.category}, ${fmtUsdM(slice.value)}, ${Math.round(pctOf(slice.value, opexTotal))} percent`}
                className={cn(
                  opexColors[i],
                  "h-full min-w-8 transition-opacity",
                  selected === i ? "opacity-100" : "opacity-80 hover:opacity-100",
                )}
                style={{ width: `${pctOf(slice.value, opexTotal)}%` }}
              />
            ))}
          </div>
          <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-xs">
            {opexCapex.opexBreakdownUsdM.map((slice, i) => (
              <span key={slice.category} className="inline-flex items-center gap-1.5">
                <span className={cn("size-2.5 rounded-full", opexColors[i])} aria-hidden />
                <span className={selected === i ? "text-ink" : "text-ink-muted"}>
                  {slice.category}{" "}
                  <span className="num">{Math.round(pctOf(slice.value, opexTotal))}%</span>
                </span>
              </span>
            ))}
          </div>

          <div className="mt-4 rounded-md border border-hairline bg-surface p-4" aria-live="polite">
            <div className="flex items-baseline justify-between">
              <span className="text-sm font-medium text-ink">{sel.category}</span>
              <span className="num text-lg font-medium text-ink">{fmtUsdM(sel.value)}</span>
            </div>
            <p className="mt-1 text-sm text-ink-2">Method: {sel.method}</p>
          </div>
        </div>

        {/* CapEx phasing */}
        <div>
          <p className="eyebrow">CapEx phasing · {fmtUsdM(capexTotal)}</p>
          <div className="mt-3 space-y-3">
            {opexCapex.capexPhasingUsdM.map((phase, i) => (
              <div key={phase.phase}>
                <div className="flex items-baseline justify-between text-sm">
                  <span className="text-ink-2">{phase.phase}</span>
                  <span className="num text-ink">
                    {fmtUsdM(phase.value)}{" "}
                    <span className="text-ink-muted">
                      ({Math.round(pctOf(phase.value, capexTotal))}%)
                    </span>
                  </span>
                </div>
                <div className="mt-1 h-3 overflow-hidden rounded-full bg-sunken">
                  <div
                    className={cn("h-full rounded-full", i === 0 ? "bg-[#c3ccd0]" : "bg-accent")}
                    style={{ width: `${pctOf(phase.value, capexTotal)}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
          <p className="mt-4 rounded-md border border-hairline bg-surface p-4 text-sm text-ink-2">
            {opexCapex.insights[1]}
          </p>
        </div>
      </div>

      <p className="mt-6 border-l-2 border-accent pl-4 text-sm leading-relaxed text-ink">
        {opexCapex.insights[0]}
      </p>
    </div>
  );
}

function Figure({
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
