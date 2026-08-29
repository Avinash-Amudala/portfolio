import { Container, Section } from "@/components/ui/layout";
import { Eyebrow, Num } from "@/components/ui/text";
import { cn } from "@/lib/cn";
import { throughLine } from "@/content/data/credentials";
import { headlineMetrics } from "@/content/data/headline-metrics";

export function ThroughLine() {
  return (
    <Section id="through-line" className="bg-surface" aria-labelledby="through-line-heading">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5">
            <Eyebrow>The through-line</Eyebrow>
            <h2 id="through-line-heading" className="display-section mt-3">
              {throughLine.heading}
            </h2>
            <div className="mt-5 space-y-4">
              {throughLine.body.map((para) => (
                <p key={para} className="text-ink-2 leading-relaxed">
                  {para}
                </p>
              ))}
            </div>
          </div>

          <dl className="grid gap-8 sm:grid-cols-3 sm:gap-0 sm:divide-x sm:divide-hairline lg:col-span-7">
            {headlineMetrics.map((m, i) => (
              <div key={m.label} className={cn("sm:px-6", i === 0 && "sm:pl-0")}>
                <dd
                  className={cn(
                    "metric-xl",
                    i === 2 ? "text-accent" : "text-ink",
                  )}
                >
                  <Num>{m.value}</Num>
                </dd>
                <dt className="mt-2 text-sm font-medium text-ink">{m.label}</dt>
                <p className="mt-1 text-xs text-ink-muted">{m.source}</p>
              </div>
            ))}
          </dl>
        </div>
      </Container>
    </Section>
  );
}
