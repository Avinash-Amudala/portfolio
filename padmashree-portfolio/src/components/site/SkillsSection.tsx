"use client";

import { useState } from "react";
import Link from "next/link";
import { Container, Section } from "@/components/ui/layout";
import { SectionHeading } from "@/components/ui/text";
import { cn } from "@/lib/cn";
import { skillGroups, skillTargets } from "@/content/data/skills";
import { getPlaybook } from "@/content/playbooks";
import { experience } from "@/content/data/experience";

const roleName: Record<string, string> = Object.fromEntries(
  experience.map((r) => [r.id, r.company]),
);

export function SkillsSection() {
  const [selected, setSelected] = useState<string | null>(null);
  const targets = selected ? skillTargets(selected) : null;

  return (
    <Section id="skills" aria-labelledby="skills-heading">
      <Container>
        <SectionHeading
          eyebrow="Skills and stack"
          headingId="skills-heading"
          title="Grouped, and provable."
          lede="Select a skill to see the playbooks and roles that used it. No five-dot meters; where the work happened is the proof."
        />

        <div className="mt-10 grid gap-8 md:grid-cols-2">
          {skillGroups.map((group) => (
            <div key={group.id}>
              <h3 className="text-sm font-semibold tracking-wide text-ink">
                {group.title}
              </h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {group.skills.map((skill) => {
                  const active = selected === skill.name;
                  return (
                    <button
                      key={skill.name}
                      type="button"
                      aria-pressed={active}
                      onClick={() =>
                        setSelected((cur) => (cur === skill.name ? null : skill.name))
                      }
                      className={cn(
                        "rounded-full border px-3 py-1.5 text-sm transition-colors",
                        active
                          ? "border-accent bg-accent text-on-accent"
                          : selected
                            ? "border-hairline text-ink-muted hover:border-ink-muted hover:text-ink-2"
                            : "border-hairline-strong text-ink-2 hover:border-accent hover:text-accent",
                      )}
                    >
                      {skill.name}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 min-h-16" aria-live="polite">
          {selected && targets ? (
            <div className="rounded-lg border border-hairline bg-surface p-5">
              <p className="text-sm text-ink-2">
                <span className="font-medium text-ink">{selected}</span> shows up in:
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {targets.playbooks.map((slug) => {
                  const p = getPlaybook(slug);
                  if (!p) return null;
                  return p.hasWriteup ? (
                    <Link
                      key={slug}
                      href={`/work/${slug}`}
                      className="rounded-full border border-accent bg-accent-soft px-3 py-1 text-sm text-accent-deep transition-colors hover:bg-accent hover:text-on-accent"
                    >
                      {p.title}
                    </Link>
                  ) : (
                    <span
                      key={slug}
                      className="rounded-full border border-hairline px-3 py-1 text-sm text-ink-2"
                    >
                      {p.title}
                    </span>
                  );
                })}
                {targets.roles.map((id) => (
                  <span
                    key={id}
                    className="rounded-full border border-hairline px-3 py-1 text-sm text-ink-2"
                  >
                    {roleName[id] ?? id}
                  </span>
                ))}
                {targets.playbooks.length === 0 && targets.roles.length === 0 ? (
                  <span className="text-sm text-ink-muted">Applied across roles.</span>
                ) : null}
              </div>
            </div>
          ) : (
            <p className="text-sm text-ink-muted">
              Select a skill to trace it to the work it produced.
            </p>
          )}
        </div>
      </Container>
    </Section>
  );
}
