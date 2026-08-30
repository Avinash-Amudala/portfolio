import Link from "next/link";
import { ChevronDown, ArrowUpRight } from "lucide-react";
import { Container, Section } from "@/components/ui/layout";
import { SectionHeading } from "@/components/ui/text";
import { Tag } from "@/components/ui/controls";
import { cn } from "@/lib/cn";
import { experience } from "@/content/data/experience";
import { getPlaybook } from "@/content/playbooks";

// Server component. Uses native details so the expanded state is reachable without
// JavaScript, keyboard-operable, and crawlable.
export function ExperienceTimeline() {
  return (
    <Section id="experience" className="bg-surface" aria-labelledby="experience-heading">
      <Container>
        <SectionHeading
          eyebrow="Experience"
          headingId="experience-heading"
          title="Manufacturing finance, audit, and the ramp in between."
          lede="Expand a role for scope, the systems used, and the wins. Wins that became a playbook link straight to it."
        />

        <ol className="relative mt-12 ml-1 border-l border-hairline">
          {experience.map((role, i) => (
            <li key={role.id} className="relative pl-6 sm:pl-8">
              <span
                className={cn(
                  "absolute -left-[5px] top-2 size-2.5 rounded-full border-2 border-surface",
                  i === 0 || role.current ? "bg-accent" : "bg-hairline-strong",
                )}
                aria-hidden
              />
              <details data-role open={i === 0 || role.current} className="pb-8">
                <summary className="flex items-start justify-between gap-4 py-1">
                  <div>
                    <div className="flex flex-wrap items-baseline gap-2">
                      <h3 className="font-display text-lg font-medium text-ink">
                        {role.company}
                      </h3>
                      {role.current ? (
                        <span className="rounded-full bg-accent-soft px-2 py-0.5 text-xs font-medium text-accent-deep">
                          Current
                        </span>
                      ) : null}
                    </div>
                    <p className="mt-0.5 text-sm text-ink-2">
                      {role.title}
                      {role.location ? (
                        <span className="text-ink-muted"> · {role.location}</span>
                      ) : null}
                    </p>
                  </div>
                  <div className="flex shrink-0 items-center gap-3 pt-1">
                    <span className="num text-xs text-ink-muted">{role.period}</span>
                    <ChevronDown size={16} className="chevron text-ink-muted" aria-hidden />
                  </div>
                </summary>

                <div className="mt-3">
                  <p className="text-sm leading-relaxed text-ink-2">{role.summary}</p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {role.systems.map((s) => (
                      <Tag key={s}>{s}</Tag>
                    ))}
                  </div>

                  <ul className="mt-4 space-y-2.5">
                    {role.wins.map((win) => {
                      const target = win.playbookSlug
                        ? getPlaybook(win.playbookSlug)
                        : undefined;
                      const linkable = target?.hasWriteup;
                      return (
                        <li
                          key={win.text}
                          className="flex items-start gap-2.5 text-sm leading-relaxed text-ink-2"
                        >
                          <span
                            className="mt-2 size-1 shrink-0 rounded-full bg-accent"
                            aria-hidden
                          />
                          {linkable && win.playbookSlug ? (
                            <Link
                              href={`/work/${win.playbookSlug}`}
                              className="group inline hover:text-accent"
                            >
                              {win.text}
                              <ArrowUpRight
                                size={13}
                                className="ml-0.5 inline shrink-0 text-accent"
                                aria-hidden
                              />
                            </Link>
                          ) : (
                            <span>{win.text}</span>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </details>
            </li>
          ))}
        </ol>
      </Container>
    </Section>
  );
}
