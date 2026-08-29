import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/layout";
import { Eyebrow, Lead } from "@/components/ui/text";
import { Credentials } from "@/components/site/Credentials";
import { LinkedInIcon } from "@/components/ui/icons";
import { siteConfig } from "@/lib/site";
import { bio, throughLine } from "@/content/data/credentials";

export const metadata: Metadata = {
  title: "About",
  description:
    "Padmashree is a manufacturing and operations finance analyst and Chartered Accountant, finishing an MS in Finance (STEM), open to relocation across the US.",
};

export default function AboutPage() {
  return (
    <Container className="py-14 sm:py-20">
      <div className="mx-auto max-w-4xl">
        <Eyebrow>About</Eyebrow>
        <h1 className="display-section mt-3 max-w-2xl">
          A Chartered Accountant who builds the pipeline behind the number.
        </h1>
        <Lead className="mt-4 max-w-2xl">{siteConfig.description}</Lead>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1.7fr_1fr]">
          <div className="space-y-4">
            {bio.map((p) => (
              <p key={p} className="leading-relaxed text-ink-2">
                {p}
              </p>
            ))}

            <blockquote className="mt-8 border-l-2 border-accent pl-5 font-display text-xl italic text-ink">
              {throughLine.heading}
            </blockquote>

            <div className="pt-4">
              <h2 className="font-display text-xl font-medium text-ink">
                What I am looking for
              </h2>
              <p className="mt-2 leading-relaxed text-ink-2">
                Manufacturing finance, FP&A, or corporate finance roles where the work is
                building cost models and decision tools during real operating pressure. Open
                to relocation across the US and to on-site work.
              </p>
            </div>
          </div>

          <aside className="lg:pt-1">
            <div className="rounded-lg border border-hairline bg-surface p-6 shadow-sm">
              <div className="flex size-14 items-center justify-center rounded-full bg-accent-soft font-display text-2xl font-semibold text-accent-deep">
                P
              </div>
              <dl className="mt-5 space-y-3 text-sm">
                <div>
                  <dt className="eyebrow">Role</dt>
                  <dd className="mt-1 text-ink">{siteConfig.role}</dd>
                </div>
                <div>
                  <dt className="eyebrow">Location</dt>
                  <dd className="mt-1 text-ink">{siteConfig.location}</dd>
                </div>
                <div>
                  <dt className="eyebrow">Now</dt>
                  <dd className="mt-1 text-ink">Production Finance, Harbinger Motors</dd>
                </div>
              </dl>
              <div className="mt-5 flex flex-col gap-2 border-t border-hairline pt-4 text-sm">
                <a
                  href={siteConfig.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-accent hover:text-accent-deep"
                >
                  <LinkedInIcon size={15} /> LinkedIn
                </a>
                <a
                  href={siteConfig.resumeHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-accent hover:text-accent-deep"
                >
                  Resume (PDF) <ArrowUpRight size={14} aria-hidden />
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1.5 text-accent hover:text-accent-deep"
                >
                  Contact <ArrowUpRight size={14} aria-hidden />
                </Link>
              </div>
            </div>
          </aside>
        </div>

        <div className="mt-16">
          <Eyebrow>Education and credentials</Eyebrow>
          <div className="mt-6">
            <Credentials withSection={false} />
          </div>
        </div>
      </div>
    </Container>
  );
}
