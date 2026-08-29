"use client";

import { useId, useMemo, useState } from "react";
import { scaleBand, scaleLinear } from "d3-scale";
import { line as d3line } from "d3-shape";
import {
  hpuWeekly,
  hpuRangeAtThreshold,
  hpuAssemblyLines,
} from "@/content/data/hpu-weekly";
import { fmtWeekLabel, fmtNumber } from "@/lib/format";
import { cn } from "@/lib/cn";

// Chart geometry. Designed at a 640-wide viewBox so labels stay crisp; the SVG scales
// up to fill wider containers and scrolls (never shrinks below legibility) on phones.
const W = 640;
const TOP_H = 236;
const BOT_H = 150;
const M = { top: 14, right: 16, bottom: 26, left: 46 };

const x = scaleBand<number>()
  .domain(hpuWeekly.map((_, i) => i))
  .range([M.left, W - M.right])
  .padding(0.34);
const xc = (i: number) => (x(i) ?? 0) + x.bandwidth() / 2;

const HPU_MAX = 560;
const yTop = scaleLinear().domain([0, HPU_MAX]).range([TOP_H - 12, M.top]);
const TOP_TICKS = [0, 100, 200, 300, 400, 500];

const UNITS_MAX = 36;
const yBot = scaleLinear().domain([0, UNITS_MAX]).range([BOT_H - M.bottom, M.top]);
const BOT_TICKS = [0, 10, 20, 30];

const hpuLinePath =
  d3line<{ i: number; v: number | null }>()
    .defined((d) => d.v !== null)
    .x((d) => xc(d.i))
    .y((d) => yTop(d.v as number))(
    hpuWeekly.map((w, i) => ({ i, v: w.hoursPerUnit })),
  ) ?? "";

// Month markers for the x axis.
const monthMarks = hpuWeekly
  .map((w, i) => ({ i, date: new Date(`${w.weekEnding}T00:00:00Z`) }))
  .filter(
    (d, idx, arr) =>
      idx === 0 || d.date.getUTCMonth() !== arr[idx - 1].date.getUTCMonth(),
  )
  .map((d) => ({
    i: d.i,
    label: d.date.toLocaleDateString("en-US", { month: "short", timeZone: "UTC" }),
  }));

function describe(minVolume: number, r: ReturnType<typeof hpuRangeAtThreshold>) {
  if (minVolume === 0) {
    return "Raw, hours per unit runs from about 42 to 545 across the built weeks, a spread of roughly 13x. The spikes look alarming.";
  }
  if (r.weeksIncluded === 0) {
    return "No week reached that volume, so there is nothing to average.";
  }
  const base = `Kept to weeks of at least ${minVolume} units, the range is about ${Math.round(
    r.min,
  )} to ${Math.round(r.max)}, roughly ${r.spread.toFixed(1)}x, across ${
    r.weeksIncluded
  } of ${r.weeksTotal} weeks.`;
  if (minVolume >= 10) {
    return `${base} The swing was the denominator, the units, not the crew. Quote this metric on a minimum volume or a rolling average before it lands in a meeting.`;
  }
  return base;
}

export function HpuDenominator({ defaultMinVolume = 0 }: { defaultMinVolume?: number }) {
  const [minVolume, setMinVolume] = useState(defaultMinVolume);
  const sliderId = useId();

  const range = useMemo(() => hpuRangeAtThreshold(minVolume), [minVolume]);
  const bandTop = range.weeksIncluded > 0 ? yTop(range.max) : 0;
  const bandBottom = range.weeksIncluded > 0 ? yTop(range.min) : 0;

  const valueText =
    minVolume === 0
      ? `No minimum. Range about 42 to 545 hours per unit, roughly 13x, ${range.weeksIncluded} of ${range.weeksTotal} weeks.`
      : range.weeksIncluded === 0
        ? `Minimum ${minVolume} units. No weeks qualify.`
        : `Minimum ${minVolume} units. Range about ${Math.round(range.min)} to ${Math.round(range.max)} hours per unit, roughly ${range.spread.toFixed(1)} times, ${range.weeksIncluded} of ${range.weeksTotal} weeks.`;

  return (
    <div>
      {/* Live readout. Reads out on slider change; a static default is already shown. */}
      <div className="grid grid-cols-2 gap-x-6 gap-y-4 sm:grid-cols-4">
        <Readout label="Minimum volume" value={`${minVolume}`} unit="units/wk" />
        <Readout
          label="HPU range"
          value={
            range.weeksIncluded > 0
              ? `${Math.round(range.min)} to ${Math.round(range.max)}`
              : "n/a"
          }
        />
        <Readout
          label="Spread"
          value={range.weeksIncluded > 0 ? `${range.spread.toFixed(1)}x` : "n/a"}
          emphasize
        />
        <Readout
          label="Weeks kept"
          value={`${range.weeksIncluded}/${range.weeksTotal}`}
        />
      </div>
      <p className="sr-only" aria-live="polite">
        {valueText}
      </p>

      {/* Slider */}
      <div className="mt-6">
        <div className="flex items-baseline justify-between">
          <label htmlFor={sliderId} className="text-sm font-medium text-ink">
            Minimum weekly volume
          </label>
          <span className="num text-sm text-ink-2">
            {minVolume} units {minVolume === 0 ? "(off)" : null}
          </span>
        </div>
        <input
          id={sliderId}
          type="range"
          min={0}
          max={20}
          step={1}
          value={minVolume}
          onChange={(e) => setMinVolume(Number(e.target.value))}
          aria-valuetext={valueText}
          className="mt-2 w-full accent-[var(--color-accent)]"
        />
        <div className="mt-1 flex justify-between text-xs text-ink-muted">
          <span className="num">0</span>
          <span className="num">13</span>
          <span className="num">20</span>
        </div>
      </div>

      <p className="mt-4 min-h-12 text-sm leading-relaxed text-ink-2">
        {describe(minVolume, range)}
      </p>

      {/* Charts */}
      <div className="mt-6 overflow-x-auto">
        <div className="min-w-[40rem]">
          <p className="eyebrow mb-1">Hours per unit</p>
          <svg
            viewBox={`0 0 ${W} ${TOP_H}`}
            className="h-auto w-full"
            role="img"
            aria-label="Hours per unit by week, 2026. Spikes correspond to weeks with very few units built."
          >
            {TOP_TICKS.map((t) => (
              <g key={t}>
                <line
                  x1={M.left}
                  x2={W - M.right}
                  y1={yTop(t)}
                  y2={yTop(t)}
                  className="stroke-hairline"
                  strokeWidth={1}
                  vectorEffect="non-scaling-stroke"
                />
                <text
                  x={M.left - 8}
                  y={yTop(t)}
                  textAnchor="end"
                  dominantBaseline="middle"
                  className="fill-ink-muted font-mono text-[11px]"
                >
                  {t}
                </text>
              </g>
            ))}

            {range.weeksIncluded > 0 && (
              <rect
                x={M.left}
                width={W - M.right - M.left}
                y={bandTop}
                height={Math.max(bandBottom - bandTop, 1)}
                className="fill-accent-soft"
                opacity={0.85}
              />
            )}

            <path
              d={hpuLinePath}
              fill="none"
              className="stroke-hairline-strong"
              strokeWidth={1.5}
              vectorEffect="non-scaling-stroke"
            />

            {hpuWeekly.map((w, i) =>
              w.hoursPerUnit === null ? null : (
                <circle
                  key={w.weekEnding}
                  cx={xc(i)}
                  cy={yTop(w.hoursPerUnit)}
                  r={3.4}
                  className={cn(
                    w.unitsBuilt >= minVolume ? "fill-accent" : "fill-[#c3ccd0]",
                  )}
                />
              ),
            )}
          </svg>

          <p className="eyebrow mb-1 mt-4">Units built</p>
          <svg
            viewBox={`0 0 ${W} ${BOT_H}`}
            className="h-auto w-full"
            role="img"
            aria-label="Units built by week, 2026. Troughs correspond to spikes in hours per unit."
          >
            {BOT_TICKS.map((t) => (
              <g key={t}>
                <line
                  x1={M.left}
                  x2={W - M.right}
                  y1={yBot(t)}
                  y2={yBot(t)}
                  className="stroke-hairline"
                  strokeWidth={1}
                  vectorEffect="non-scaling-stroke"
                />
                <text
                  x={M.left - 8}
                  y={yBot(t)}
                  textAnchor="end"
                  dominantBaseline="middle"
                  className="fill-ink-muted font-mono text-[11px]"
                >
                  {t}
                </text>
              </g>
            ))}

            {hpuWeekly.map((w, i) => {
              const h = yBot(0) - yBot(w.unitsBuilt);
              if (w.unitsBuilt === 0) return null;
              return (
                <rect
                  key={w.weekEnding}
                  x={x(i)}
                  width={x.bandwidth()}
                  y={yBot(w.unitsBuilt)}
                  height={h}
                  rx={1.5}
                  className={cn(
                    w.unitsBuilt >= minVolume ? "fill-accent" : "fill-[#c3ccd0]",
                  )}
                />
              );
            })}

            {minVolume > 0 && (
              <line
                x1={M.left}
                x2={W - M.right}
                y1={yBot(minVolume)}
                y2={yBot(minVolume)}
                className="stroke-accent-deep"
                strokeWidth={1.5}
                strokeDasharray="4 3"
                vectorEffect="non-scaling-stroke"
              />
            )}

            {monthMarks.map((m) => (
              <text
                key={m.i}
                x={xc(m.i)}
                y={BOT_H - 8}
                textAnchor="middle"
                className="fill-ink-muted font-mono text-[11px]"
              >
                {m.label}
              </text>
            ))}
          </svg>
        </div>
      </div>

      <p className="mt-4 text-xs text-ink-muted">
        Shown: total across all lines. The model also produces battery pack, EDU,
        general assembly, full vehicle, and HPC views, weekly, monthly, or quarterly.
      </p>
      <div className="mt-2 flex flex-wrap gap-1.5">
        {hpuAssemblyLines.map((l) => (
          <span
            key={l}
            className="rounded-full border border-hairline px-2 py-0.5 text-xs text-ink-muted"
          >
            {l}
          </span>
        ))}
      </div>

      <details className="mt-6 text-sm">
        <summary className="cursor-pointer text-accent hover:text-accent-deep">
          View the weekly data
        </summary>
        <div className="mt-3 overflow-x-auto">
          <table className="w-full min-w-[26rem] border-collapse text-left">
            <thead>
              <tr className="border-b border-hairline text-xs text-ink-muted">
                <th className="py-2 pr-4 font-medium">Week ending</th>
                <th className="py-2 pr-4 text-right font-medium">Hours per unit</th>
                <th className="py-2 text-right font-medium">Units built</th>
              </tr>
            </thead>
            <tbody>
              {hpuWeekly.map((w) => (
                <tr key={w.weekEnding} className="border-b border-hairline/60">
                  <td className="num py-1.5 pr-4 text-ink-2">
                    {fmtWeekLabel(w.weekEnding)}
                  </td>
                  <td className="num py-1.5 pr-4 text-right text-ink">
                    {w.hoursPerUnit === null ? "n/a" : w.hoursPerUnit.toFixed(1)}
                  </td>
                  <td className="num py-1.5 text-right text-ink">
                    {fmtNumber(w.unitsBuilt)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </details>
    </div>
  );
}

function Readout({
  label,
  value,
  unit,
  emphasize = false,
}: {
  label: string;
  value: string;
  unit?: string;
  emphasize?: boolean;
}) {
  return (
    <div>
      <div className="eyebrow">{label}</div>
      <div
        className={cn(
          "num mt-1 text-2xl font-medium tabular-nums",
          emphasize ? "text-accent" : "text-ink",
        )}
      >
        {value}
        {unit ? <span className="ml-1 text-xs text-ink-muted">{unit}</span> : null}
      </div>
    </div>
  );
}
