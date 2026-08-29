"use client";

import { Check, Minus, ArrowRight } from "lucide-react";
import { closeAutomation } from "@/content/data/close-automation";
import { AnimatedNumber } from "@/components/charts/AnimatedNumber";

export function CloseAutomation() {
  const { beforeMinutesPerClose, afterMinutesPerClose, monthsLive, versionsToStabilize } =
    closeAutomation;
  const afterPct = (afterMinutesPerClose / beforeMinutesPerClose) * 100;

  return (
    <div>
      {/* Headline counters */}
      <div className="grid gap-6 sm:grid-cols-3">
        <div>
          <div className="eyebrow">Per close</div>
          <div className="metric-xl mt-1 text-accent">
            <AnimatedNumber value={afterMinutesPerClose} from={beforeMinutesPerClose} />
            <span className="ml-1 text-base text-ink-muted">min</span>
          </div>
          <div className="mt-1 text-xs text-ink-muted">
            down from <span className="num">{beforeMinutesPerClose}</span> min
          </div>
        </div>
        <div>
          <div className="eyebrow">Running live</div>
          <div className="metric-xl mt-1 text-ink">
            <AnimatedNumber value={monthsLive} />
            <span className="ml-1 text-base text-ink-muted">months</span>
          </div>
          <div className="mt-1 text-xs text-ink-muted">without a manual pull</div>
        </div>
        <div>
          <div className="eyebrow">To get it stable</div>
          <div className="metric-xl mt-1 text-ink">
            <AnimatedNumber value={versionsToStabilize} />
            <span className="ml-1 text-base text-ink-muted">versions</span>
          </div>
          <div className="mt-1 text-xs text-ink-muted">honest, not first-try</div>
        </div>
      </div>

      {/* Time reduction bar */}
      <div className="mt-8">
        <div className="flex items-center justify-between text-xs text-ink-muted">
          <span>Before</span>
          <span className="num">{beforeMinutesPerClose} min</span>
        </div>
        <div className="mt-1 h-3 w-full rounded-full bg-sunken" />
        <div className="mt-3 flex items-center justify-between text-xs text-ink-muted">
          <span>Now</span>
          <span className="num">{afterMinutesPerClose} min</span>
        </div>
        <div className="mt-1 h-3 w-full rounded-full bg-sunken">
          <div
            className="h-full rounded-full bg-accent"
            style={{ width: `${afterPct}%` }}
          />
        </div>
      </div>

      {/* Before and after */}
      <div className="mt-8 grid items-stretch gap-4 sm:grid-cols-[1fr_auto_1fr]">
        <div className="rounded-md border border-hairline bg-surface p-5">
          <p className="eyebrow">Before</p>
          <ul className="mt-3 space-y-2.5">
            {closeAutomation.before.map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-sm text-ink-2">
                <Minus
                  size={16}
                  className="mt-0.5 shrink-0 text-[var(--color-negative)]"
                  aria-hidden
                />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center justify-center" aria-hidden>
          <ArrowRight size={20} className="rotate-90 text-ink-muted sm:rotate-0" />
        </div>

        <div className="rounded-md border border-hairline bg-surface p-5">
          <p className="eyebrow">Now</p>
          <ul className="mt-3 space-y-2.5">
            {closeAutomation.after.map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-sm text-ink">
                <Check size={16} className="mt-0.5 shrink-0 text-accent" aria-hidden />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
