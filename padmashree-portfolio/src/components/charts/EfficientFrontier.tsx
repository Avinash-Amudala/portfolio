"use client";

import { useId, useMemo, useRef, useState } from "react";
import { scaleLinear } from "d3-scale";
import { line as d3line } from "d3-shape";
import {
  frontierAssets,
  correlationMatrix,
  frontierConfig,
} from "@/content/data/efficient-frontier";
import { invert, matVec, dot } from "@/lib/matrix";
import { fmtPct, fmtUsdM } from "@/lib/format";
import { cn } from "@/lib/cn";

const W = 560;
const H = 340;
const M = { top: 16, right: 18, bottom: 40, left: 52 };

const mu = frontierAssets.map((a) => a.expectedReturn);
const vol = frontierAssets.map((a) => a.volatility);
const Sigma = correlationMatrix.map((row, i) =>
  row.map((c, j) => c * vol[i] * vol[j]),
);

// Benchmark for beta, Treynor, Jensen's Alpha, and the Information Ratio: an
// equal-weight portfolio of the same universe. Using the asset covariance directly
// keeps tracking error well defined at every point on the frontier.
const wBench = frontierAssets.map(() => 1 / frontierAssets.length);
const covBench = matVec(Sigma, wBench);
const varBench = dot(wBench, covBench);
const returnBench = dot(wBench, mu);
const betaVec = covBench.map((c) => c / varBench);

const inv = invert(Sigma);
const ones = mu.map(() => 1);
const invOnes = matVec(inv, ones);
const invMu = matVec(inv, mu);
const A = dot(ones, invOnes);
const B = dot(ones, invMu);
const C = dot(mu, invMu);
const D = A * C - B * B;

const mMv = B / A;
const mMax = Math.max(...mu);

function weightsFor(m: number) {
  const lam = (C - B * m) / D;
  const gam = (A * m - B) / D;
  return invOnes.map((_, i) => lam * invOnes[i] + gam * invMu[i]);
}
function sigmaFor(m: number) {
  return Math.sqrt(Math.max((A * m * m - 2 * B * m + C) / D, 0));
}

const x = scaleLinear().domain([0.1, 0.3]).range([M.left, W - M.right]);
const y = scaleLinear().domain([0.06, 0.155]).range([H - M.bottom, M.top]);

// Sample the frontier for the curve and for pointer mapping (efficient half only).
const efficientSamples = Array.from({ length: 61 }, (_, i) => {
  const t = i / 60;
  const m = mMv + t * (mMax - mMv);
  return { t, m, s: sigmaFor(m) };
});
const lowerSamples = Array.from({ length: 30 }, (_, i) => {
  const m = 0.06 + (mMv - 0.06) * (i / 29);
  return { m, s: sigmaFor(m) };
});
const curve = d3line<{ m: number; s: number }>()
  .x((d) => x(d.s))
  .y((d) => y(d.m));

// Tangency (max Sharpe) as a sensible default point.
const tangency = efficientSamples.reduce((best, p) =>
  (p.m - frontierConfig.riskFreeRate) / p.s >
  (best.m - frontierConfig.riskFreeRate) / best.s
    ? p
    : best,
);

export function EfficientFrontier() {
  const sliderId = useId();
  const [t, setT] = useState(tangency.t);
  const svgRef = useRef<SVGSVGElement>(null);

  const point = useMemo(() => {
    const m = mMv + t * (mMax - mMv);
    const s = sigmaFor(m);
    const w = weightsFor(m);
    const Rf = frontierConfig.riskFreeRate;
    const bp = dot(w, betaVec);
    const sharpe = (m - Rf) / s;
    const treynor = (m - Rf) / bp;
    const jensen = m - (Rf + bp * (returnBench - Rf));
    const diff = w.map((wi, i) => wi - wBench[i]);
    const te = Math.sqrt(Math.max(dot(diff, matVec(Sigma, diff)), 0));
    const ir = te > 1e-6 ? (m - returnBench) / te : 0;
    return { m, s, w, bp, sharpe, treynor, jensen, ir };
  }, [t]);

  const valueText = `Risk tolerance ${Math.round(t * 100)} percent. Expected return ${fmtPct(
    point.m * 100,
    1,
  )}, risk ${fmtPct(point.s * 100, 1)}, Sharpe ${point.sharpe.toFixed(2)}.`;

  function handlePointer(clientX: number) {
    const svg = svgRef.current;
    if (!svg) return;
    const rect = svg.getBoundingClientRect();
    const px = ((clientX - rect.left) / rect.width) * W;
    const targetS = x.invert(px);
    const nearest = efficientSamples.reduce((best, p) =>
      Math.abs(p.s - targetS) < Math.abs(best.s - targetS) ? p : best,
    );
    setT(nearest.t);
  }

  return (
    <div>
      <div className="grid gap-8 lg:grid-cols-[1.35fr_1fr]">
        <div className="overflow-x-auto">
          <div className="min-w-[34rem]">
            <svg
              ref={svgRef}
              viewBox={`0 0 ${W} ${H}`}
              className="h-auto w-full touch-none"
              role="img"
              aria-label="Efficient frontier of expected return against risk, with the selected portfolio marked."
              onPointerDown={(e) => {
                (e.target as Element).setPointerCapture?.(e.pointerId);
                handlePointer(e.clientX);
              }}
              onPointerMove={(e) => {
                if (e.buttons === 1) handlePointer(e.clientX);
              }}
            >
              {/* gridlines + axes */}
              {[0.06, 0.08, 0.1, 0.12, 0.14].map((t) => (
                <g key={`y${t}`}>
                  <line
                    x1={M.left}
                    x2={W - M.right}
                    y1={y(t)}
                    y2={y(t)}
                    className="stroke-hairline"
                    strokeWidth={1}
                    vectorEffect="non-scaling-stroke"
                  />
                  <text
                    x={M.left - 8}
                    y={y(t)}
                    textAnchor="end"
                    dominantBaseline="middle"
                    className="fill-ink-muted font-mono text-[10px]"
                  >
                    {Math.round(t * 100)}%
                  </text>
                </g>
              ))}
              {[0.1, 0.15, 0.2, 0.25, 0.3].map((tick) => (
                <text
                  key={`x${tick}`}
                  x={x(tick)}
                  y={H - M.bottom + 16}
                  textAnchor="middle"
                  className="fill-ink-muted font-mono text-[10px]"
                >
                  {Math.round(tick * 100)}%
                </text>
              ))}
              <text
                x={(M.left + W - M.right) / 2}
                y={H - 6}
                textAnchor="middle"
                className="fill-ink-muted font-mono text-[10px]"
              >
                Risk (annualized volatility)
              </text>

              {/* frontier */}
              <path
                d={curve(lowerSamples) ?? ""}
                fill="none"
                className="stroke-hairline-strong"
                strokeWidth={1.5}
                strokeDasharray="4 3"
                vectorEffect="non-scaling-stroke"
              />
              <path
                d={curve(efficientSamples) ?? ""}
                fill="none"
                className="stroke-accent"
                strokeWidth={2}
                vectorEffect="non-scaling-stroke"
              />

              {/* individual assets */}
              {frontierAssets.map((a, i) => (
                <g key={a.key}>
                  <circle cx={x(vol[i])} cy={y(mu[i])} r={3} className="fill-ink-muted" />
                  <text
                    x={x(vol[i]) + 6}
                    y={y(mu[i]) - 4}
                    className="fill-ink-muted font-mono text-[9px]"
                  >
                    {a.key}
                  </text>
                </g>
              ))}

              {/* selected portfolio */}
              <circle
                cx={x(point.s)}
                cy={y(point.m)}
                r={6}
                className="fill-accent stroke-surface"
                strokeWidth={2}
              />
            </svg>
          </div>
        </div>

        <div>
          <label htmlFor={sliderId} className="text-sm font-medium text-ink">
            Risk tolerance
          </label>
          <input
            id={sliderId}
            type="range"
            min={0}
            max={100}
            value={Math.round(t * 100)}
            onChange={(e) => setT(Number(e.target.value) / 100)}
            aria-valuetext={valueText}
            className="mt-2 w-full accent-[var(--color-accent)]"
          />
          <div className="mt-1 flex justify-between text-xs text-ink-muted">
            <span>Lower risk</span>
            <span>Higher risk</span>
          </div>

          <div className="mt-5 grid grid-cols-2 gap-x-6 gap-y-4" aria-live="polite">
            <Metric label="Expected return" value={fmtPct(point.m * 100, 1)} emphasize />
            <Metric label="Risk (vol)" value={fmtPct(point.s * 100, 1)} />
            <Metric label="Sharpe" value={point.sharpe.toFixed(2)} />
            <Metric label="Treynor" value={point.treynor.toFixed(3)} />
            <Metric label="Jensen's Alpha" value={fmtPct(point.jensen * 100, 1)} />
            <Metric label="Information Ratio" value={point.ir.toFixed(2)} />
          </div>

          <p className="mt-5 eyebrow">Allocation of {fmtUsdM(frontierConfig.portfolioValueUsd / 1_000_000, 0)}</p>
          <ul className="mt-2 space-y-1.5">
            {frontierAssets.map((a, i) => {
              const w = point.w[i];
              return (
                <li key={a.key} className="flex items-center gap-3 text-sm">
                  <span className="w-28 shrink-0 text-ink-2">{a.name}</span>
                  <span className="relative h-2 flex-1 rounded-full bg-sunken">
                    <span
                      className={cn(
                        "absolute inset-y-0 left-0 rounded-full",
                        w >= 0 ? "bg-accent" : "bg-[var(--color-negative)]",
                      )}
                      style={{ width: `${Math.min(Math.abs(w) * 100, 100)}%` }}
                    />
                  </span>
                  <span className="num w-12 shrink-0 text-right text-ink">
                    {Math.round(w * 100)}%
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <p className="mt-6 text-xs text-ink-muted">
        Illustrative sample data, not live prices or investment advice. Risk-free rate{" "}
        {fmtPct(frontierConfig.riskFreeRate * 100, 0)}; beta and the information ratio use an
        equal-weight benchmark. Weights are unconstrained, so higher-return points can take a
        small short position.
      </p>
    </div>
  );
}

function Metric({
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
