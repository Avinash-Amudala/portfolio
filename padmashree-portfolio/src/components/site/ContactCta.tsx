import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container, Section } from "@/components/ui/layout";
import { LinkedInIcon } from "@/components/ui/icons";
import { siteConfig } from "@/lib/site";

export function ContactCta() {
  return (
    <Section id="contact">
      <Container>
        <div className="overflow-hidden rounded-lg bg-ink px-6 py-14 sm:px-12 sm:py-16">
          <div className="max-w-2xl">
            <p className="font-mono text-xs font-medium uppercase tracking-[0.16em] text-[#8fa3a0]">
              Contact
            </p>
            <h2 className="display-section mt-3 text-paper">
              Looking for someone who builds the tools, not just the reports?
            </h2>
            <p className="mt-4 text-[#c4ccce]">
              {siteConfig.location}. The fastest way to reach me is LinkedIn or the contact
              form. No phone or address here, by design.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-md bg-accent px-5 py-3 text-[0.95rem] font-medium text-on-accent transition-colors hover:bg-accent-deep"
              >
                Get in touch
                <ArrowUpRight size={17} aria-hidden />
              </Link>
              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-[#3a4a53] px-5 py-3 text-[0.95rem] font-medium text-paper transition-colors hover:border-[#5c6c74]"
              >
                <LinkedInIcon size={16} />
                LinkedIn
              </a>
              <a
                href={siteConfig.resumeHref}
                target="_blank"
                rel="noopener noreferrer"
                className="px-2 py-3 text-[0.95rem] font-medium text-paper underline decoration-[#3a4a53] underline-offset-4 transition-colors hover:decoration-paper"
              >
                Resume (PDF)
              </a>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
