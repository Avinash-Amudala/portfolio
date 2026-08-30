import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container, Section } from "@/components/ui/layout";
import { SectionHeading, Num } from "@/components/ui/text";
import { Tag } from "@/components/ui/controls";
import { cn } from "@/lib/cn";
import { fullPlaybooks, workCards, type Playbook } from "@/content/playbooks";
import { FlagshipFeature } from "@/components/site/FlagshipFeature";

function CardBody({ p }: { p: Playbook }) {
  return (
    <>
      <div className="flex items-baseline justify-between gap-3 text-xs text-ink-muted">
        <span className="num">{p.org}</span>
        <span className="num">{p.period}</span>
      </div>
      <h3 className="display-card mt-3 text-ink transition-colors group-hover:text-accent">
        {p.title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-ink-2">{p.problem}</p>

      {p.impact.length > 0 ? (
        <div className="mt-4 flex flex-wrap gap-x-6 gap-y-3">
          {p.impact.map((im) => (
            <div key={im.label}>
              <div className="num text-base font-medium text-ink">{im.value}</div>
              <div className="text-xs text-ink-muted">{im.label}</div>
            </div>
          ))}
        </div>
      ) : null}

      <div className="mt-5 flex flex-wrap gap-2">
        {p.tags.slice(0, 4).map((t) => (
          <Tag key={t}>{t}</Tag>
        ))}
      </div>

      {p.hasWriteup ? (
        <div className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-accent">
          Read the playbook
          <ArrowUpRight
            size={16}
            aria-hidden
            className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </div>
      ) : null}
    </>
  );
}

function PlaybookCard({ p }: { p: Playbook }) {
  const surface =
    "rounded-lg border border-hairline bg-surface p-6 shadow-sm sm:p-7";

  if (p.hasWriteup) {
    return (
      <Link
        href={`/work/${p.slug}`}
        className={cn(
          surface,
          "reveal group block transition-all duration-200 hover:-translate-y-0.5 hover:border-hairline-strong hover:shadow-md",
        )}
      >
        <CardBody p={p} />
      </Link>
    );
  }

  return (
    <div className={cn(surface, "group")}>
      <CardBody p={p} />
    </div>
  );
}

export function SelectedWork() {
  return (
    <Section id="work" aria-labelledby="work-heading">
      <Container>
        <SectionHeading
          eyebrow="Selected work"
          headingId="work-heading"
          title="Playbooks, not slides."
          lede="Each one follows the same shape: the problem, what she found, what she built, and how it works. The interactive pieces use illustrative sample data, not any employer's actual figures, because the point is the method and that it rebuilds for any company."
        />

        <div className="mt-12">
          <FlagshipFeature />
        </div>

        <div className="mt-5 grid gap-5 md:grid-cols-2">
          {fullPlaybooks
            .filter((p) => p.slug !== "hours-per-unit")
            .map((p) => (
              <PlaybookCard key={p.slug} p={p} />
            ))}
        </div>

        <h3 className="eyebrow mt-16">More work</h3>
        <div className="mt-6 grid gap-5 md:grid-cols-3">
          {workCards.map((p) => (
            <div
              key={p.slug}
              className="rounded-lg border border-hairline bg-surface p-6 shadow-sm"
            >
              <div className="flex items-baseline justify-between gap-3 text-xs text-ink-muted">
                <span className="num">{p.org}</span>
                <span className="num">{p.period}</span>
              </div>
              <h4 className="mt-3 font-display text-lg font-medium text-ink">
                {p.title}
              </h4>
              <p className="mt-2 text-sm leading-relaxed text-ink-2">{p.insight}</p>
              {p.impact.length > 0 ? (
                <p className="mt-3">
                  <Num className="text-base font-medium text-ink">
                    {p.impact[0].value}
                  </Num>{" "}
                  <span className="text-xs text-ink-muted">{p.impact[0].label}</span>
                </p>
              ) : null}
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.slice(0, 3).map((t) => (
                  <Tag key={t}>{t}</Tag>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
