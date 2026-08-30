import type { ReactNode } from "react";
import { HpuDenominator } from "@/components/charts/HpuDenominator";
import { DataQualityFix } from "@/components/charts/DataQualityFix";
import { OpexCapex } from "@/components/charts/OpexCapex";
import { CloseAutomation } from "@/components/charts/CloseAutomation";
import { EfficientFrontier } from "@/components/charts/EfficientFrontier";
import { DcfValuation } from "@/components/charts/DcfValuation";
import { OpenClawSkill } from "@/components/charts/OpenClawSkill";
import { Num } from "@/components/ui/text";

/** Bordered panel that holds an interactive inside the prose flow. */
function Panel({ children }: { children: ReactNode }) {
  return (
    <div className="my-8 rounded-lg border border-hairline bg-surface p-5 shadow-sm sm:p-6">
      {children}
    </div>
  );
}

/** Interactive with an optional caption, as a semantic figure. */
function Figure({ caption, children }: { caption?: string; children: ReactNode }) {
  return (
    <figure className="my-8 rounded-lg border border-hairline bg-surface p-5 shadow-sm sm:p-6">
      {children}
      {caption ? (
        <figcaption className="mt-4 text-xs text-ink-muted">{caption}</figcaption>
      ) : null}
    </figure>
  );
}

/** Quiet accent-tinted note. */
function Callout({ children }: { children: ReactNode }) {
  return (
    <aside className="my-8 rounded-md border border-hairline bg-accent-soft/60 p-4 text-sm leading-relaxed text-ink">
      {children}
    </aside>
  );
}

export const mdxComponents = {
  HpuDenominator,
  DataQualityFix,
  OpexCapex,
  CloseAutomation,
  EfficientFrontier,
  DcfValuation,
  OpenClawSkill,
  Num,
  Panel,
  Figure,
  Callout,
};
