import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { HpuDenominator } from "@/components/charts/HpuDenominator";
import { getPlaybook } from "@/content/playbooks";

export function FlagshipFeature() {
  const p = getPlaybook("hours-per-unit");
  if (!p) return null;

  return (
    <div className="reveal overflow-hidden rounded-lg border border-hairline bg-surface shadow-sm">
      <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-4">
          <p className="eyebrow">Flagship analysis</p>
          <h3 className="display-card mt-3 text-ink">{p.title}</h3>
          <p className="mt-4 text-sm leading-relaxed text-ink-2">{p.problem}</p>
          <p className="mt-3 text-sm leading-relaxed text-ink">
            <span className="font-medium">What she found: </span>
            {p.insight}
          </p>
          <p className="mt-4 text-sm leading-relaxed text-ink-2">
            Drag the minimum weekly volume up. Weeks below the line drop out and the
            range recomputes. At 12 units it collapses from about 12x to about 2x.
          </p>
          <Link
            href={`/work/${p.slug}`}
            className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:text-accent-deep"
          >
            Read the full playbook
            <ArrowUpRight size={16} aria-hidden />
          </Link>
        </div>

        <div className="lg:col-span-8">
          <HpuDenominator />
        </div>
      </div>
    </div>
  );
}
