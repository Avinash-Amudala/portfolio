import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/layout";
import { Tag } from "@/components/ui/controls";
import { fullPlaybooks, type Playbook } from "@/content/playbooks";

export function PlaybookLayout({
  playbook,
  children,
}: {
  playbook: Playbook;
  children: ReactNode;
}) {
  const idx = fullPlaybooks.findIndex((p) => p.slug === playbook.slug);
  const prev = idx > 0 ? fullPlaybooks[idx - 1] : null;
  const next = idx >= 0 && idx < fullPlaybooks.length - 1 ? fullPlaybooks[idx + 1] : null;

  return (
    <Container className="py-12 sm:py-16">
      <div className="mx-auto max-w-3xl">
        <Link
          href="/#work"
          className="inline-flex items-center gap-1.5 text-sm text-ink-2 transition-colors hover:text-accent"
        >
          <ArrowLeft size={15} aria-hidden />
          All work
        </Link>

        <div className="mt-6 flex items-baseline justify-between gap-3 text-xs text-ink-muted">
          <span className="num">{playbook.org}</span>
          <span className="num">{playbook.period}</span>
        </div>
        <h1 className="display-section mt-3">{playbook.title}</h1>
        <p className="lead mt-4">{playbook.problem}</p>

        {playbook.impact.length > 0 ? (
          <div className="mt-6 flex flex-wrap gap-x-8 gap-y-3 border-y border-hairline py-4">
            {playbook.impact.map((im) => (
              <div key={im.label}>
                <div className="num text-lg font-medium text-ink">{im.value}</div>
                <div className="text-xs text-ink-muted">{im.label}</div>
              </div>
            ))}
          </div>
        ) : null}

        <div className="mt-4 flex flex-wrap gap-2">
          {playbook.tags.map((t) => (
            <Tag key={t}>{t}</Tag>
          ))}
        </div>

        <article className="prose mt-10">{children}</article>

        {playbook.illustrative ? (
          <p className="mt-10 rounded-md border border-hairline bg-sunken/60 p-4 text-xs text-ink-muted">
            This playbook uses clearly-labeled illustrative sample data, not proprietary
            figures. The method is the point.
          </p>
        ) : null}

        <nav
          aria-label="More playbooks"
          className="mt-12 flex items-stretch justify-between gap-4 border-t border-hairline pt-6"
        >
          {prev ? (
            <Link
              href={`/work/${prev.slug}`}
              className="group flex-1 text-left text-sm text-ink-2 transition-colors hover:text-accent"
            >
              <span className="flex items-center gap-1.5 text-xs text-ink-muted">
                <ArrowLeft size={13} aria-hidden /> Previous
              </span>
              <span className="mt-1 block font-display text-ink group-hover:text-accent">
                {prev.title}
              </span>
            </Link>
          ) : (
            <span className="flex-1" />
          )}
          {next ? (
            <Link
              href={`/work/${next.slug}`}
              className="group flex-1 text-right text-sm text-ink-2 transition-colors hover:text-accent"
            >
              <span className="flex items-center justify-end gap-1.5 text-xs text-ink-muted">
                Next <ArrowRight size={13} aria-hidden />
              </span>
              <span className="mt-1 block font-display text-ink group-hover:text-accent">
                {next.title}
              </span>
            </Link>
          ) : (
            <span className="flex-1" />
          )}
        </nav>

        <div className="mt-8">
          <Link
            href="/contact"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:text-accent-deep"
          >
            Talk with Padmashree about this work
            <ArrowUpRight size={15} aria-hidden />
          </Link>
        </div>
      </div>
    </Container>
  );
}
