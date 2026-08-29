import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/layout";
import { Eyebrow } from "@/components/ui/text";
import { Button, buttonClasses } from "@/components/ui/controls";
import { siteConfig } from "@/lib/site";

export function Hero() {
  return (
    <section className="border-b border-hairline">
      <Container className="py-16 sm:py-20 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-7">
            <Eyebrow>Padmashree · Manufacturing and Operations Finance</Eyebrow>
            <h1 className="display-hero mt-5 max-w-2xl text-balance">
              I build the cost models, and the tools that produce them.
            </h1>
            <p className="lead mt-6 max-w-xl">
              Chartered Accountant and MS Finance, working a US EV production ramp. I
              find the real problem in messy data and explain the answer in plain
              language.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Button href="#work">
                See the work
                <ArrowRight size={17} aria-hidden />
              </Button>
              <a
                href={siteConfig.resumeHref}
                target="_blank"
                rel="noopener noreferrer"
                className={buttonClasses("secondary", "md")}
              >
                Download resume
              </a>
            </div>
          </div>

          {/* The single strongest proof metric: the flagship analysis. */}
          <aside className="reveal lg:col-span-5">
            <figure className="rounded-lg border border-hairline bg-surface p-6 shadow-sm sm:p-7">
              <figcaption className="eyebrow">
                Flagship analysis · Hours per unit
              </figcaption>
              <p className="metric-xl mt-4 text-accent">
                13x <span className="text-ink-muted">to</span> 2x
              </p>
              <p className="mt-4 text-sm leading-relaxed text-ink-2">
                A swing that looked like a broken production line was really the
                denominator. Read on a minimum weekly volume, the hours-per-unit range
                collapses from about <span className="num">42 to 545</span> down to
                about <span className="num">42 to 96</span>.
              </p>
              <Link
                href="/work/hours-per-unit"
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:text-accent-deep"
              >
                Read the playbook
                <ArrowUpRight size={16} aria-hidden />
              </Link>
            </figure>
          </aside>
        </div>
      </Container>
    </section>
  );
}
