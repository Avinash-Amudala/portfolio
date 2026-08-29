"use client";

import { useId, useMemo, useState } from "react";
import { dcfModel } from "@/content/data/dcf";
import { fmtPct } from "@/lib/format";
import { cn } from "@/lib/cn";

function dcfPerShare(wacc: number, gTerm: number) {
  let pv = 0;
  let fcf = dcfModel.baseFreeCashFlowUsdM;
  let last = fcf;
  for (let t = 1; t <= dcfModel.projectionYears; t++) {
    fcf = fcf * (1 + dcfModel.nearTermGrowth);
    last = fcf;
    pv += fcf / (1 + wacc) ** t;
  }
  const tv = (last * (1 + gTerm)) / (wacc - gTerm);
  const pvTv = tv / (1 + wacc) ** dcfModel.projectionYears;
  const ev = pv + pvTv;
  return (ev - dcfModel.netDebtUsdM) / dcfModel.sharesOutstandingM;
}

function riPerShare(gTerm: number) {
  const { bookValuePerShare, eps, epsGrowth, costOfEquity, years } =
    dcfModel.residualIncome;
  let bv = bookValuePerShare;
  let e = eps;
  let pv = 0;
  let last = 0;
  for (let t = 1; t <= years; t++) {
    const residual = e - costOfEquity * bv;
    pv += residual / (1 + costOfEquity) ** t;
    bv += e;
    last = residual;
    e = e * (1 + epsGrowth);
  }
  const tv = (last * (1 + gTerm)) / (costOfEquity - gTerm);
  const pvTv = tv / (1 + costOfEquity) ** years;
  return bookValuePerShare + pv + pvTv;
}

export function DcfValuation() {
  const [wacc, setWacc] = useState(dcfModel.wacc.base);
  const [gTerm, setGTerm] = useState(dcfModel.terminalGrowth.base);
  const waccId = useId();
  const gId = useId();

  const { dcf, ri, ref } = useMemo(
    () => ({
      dcf: dcfPerShare(wacc, gTerm),
      ri: riPerShare(gTerm),
      ref: dcfModel.referencePriceUsd,
    }),
    [wacc, gTerm],
  );

  const max = Math.max(dcf, ri, ref) * 1.12;
  const bars = [
    { label: "DCF value", value: dcf, tone: "accent" as const },
    { label: "Residual income", value: ri, tone: "ink" as const },
    { label: "Reference price", value: ref, tone: "muted" as const },
  ];

  const valueText = `At WACC ${fmtPct(wacc * 100, 2)} and terminal growth ${fmtPct(
    gTerm * 100,
    2,
  )}, DCF value is ${Math.round(dcf)} dollars per share, residual income ${Math.round(
    ri,
  )} dollars, reference price ${ref} dollars.`;

  return (
    <div>
      <div className="grid gap-6 sm:grid-cols-2">
        <Slider
          id={waccId}
          label="WACC"
          value={wacc}
          min={dcfModel.wacc.min}
          max={dcfModel.wacc.max}
          step={dcfModel.wacc.step}
          onChange={setWacc}
        />
        <Slider
          id={gId}
          label="Terminal growth"
          value={gTerm}
          min={dcfModel.terminalGrowth.min}
          max={dcfModel.terminalGrowth.max}
          step={dcfModel.terminalGrowth.step}
          onChange={setGTerm}
        />
      </div>

      <div className="mt-8">
        <div className="flex flex-wrap items-baseline gap-x-3">
          <span className="eyebrow">DCF intrinsic value</span>
        </div>
        <div className="num mt-1 metric-xl text-accent">${Math.round(dcf)}</div>
        <p className="mt-1 text-sm text-ink-muted" aria-live="polite">
          <span className="sr-only">{valueText}</span>
          Residual income cross-check <span className="num text-ink">${Math.round(ri)}</span>{" "}
          · reference price <span className="num text-ink">${ref}</span>
        </p>
      </div>

      <div className="mt-6 space-y-3">
        {bars.map((b) => (
          <div key={b.label}>
            <div className="flex items-baseline justify-between text-sm">
              <span className="text-ink-2">{b.label}</span>
              <span className="num text-ink">${Math.round(b.value)}</span>
            </div>
            <div className="mt-1 h-3 overflow-hidden rounded-full bg-sunken">
              <div
                className={cn(
                  "h-full rounded-full transition-[width] duration-300",
                  b.tone === "accent" && "bg-accent",
                  b.tone === "ink" && "bg-ink-2",
                  b.tone === "muted" && "bg-[#c3ccd0]",
                )}
                style={{ width: `${Math.min((b.value / max) * 100, 100)}%` }}
              />
            </div>
          </div>
        ))}
      </div>

      <p className="mt-6 text-xs leading-relaxed text-ink-muted">
        Illustrative sample assumptions, not audited financials and not investment advice.
        Base free cash flow ${dcfModel.baseFreeCashFlowUsdM}M growing{" "}
        {fmtPct(dcfModel.nearTermGrowth * 100, 0)} for {dcfModel.projectionYears} years,{" "}
        {dcfModel.sharesOutstandingM}M shares, ${dcfModel.netDebtUsdM}M net debt. Residual
        income uses a {fmtPct(dcfModel.residualIncome.costOfEquity * 100, 0)} cost of equity,
        so it responds to terminal growth but not to WACC.
      </p>
    </div>
  );
}

function Slider({
  id,
  label,
  value,
  min,
  max,
  step,
  onChange,
}: {
  id: string;
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  onChange: (v: number) => void;
}) {
  return (
    <div>
      <div className="flex items-baseline justify-between">
        <label htmlFor={id} className="text-sm font-medium text-ink">
          {label}
        </label>
        <span className="num text-sm text-accent">{fmtPct(value * 100, 2)}</span>
      </div>
      <input
        id={id}
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        aria-valuetext={`${label} ${fmtPct(value * 100, 2)}`}
        className="mt-2 w-full accent-[var(--color-accent)]"
      />
      <div className="mt-1 flex justify-between text-xs text-ink-muted">
        <span className="num">{fmtPct(min * 100, 0)}</span>
        <span className="num">{fmtPct(max * 100, 0)}</span>
      </div>
    </div>
  );
}
