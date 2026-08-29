import type { Metadata } from "next";
import { Container } from "@/components/ui/layout";
import { Eyebrow, Lead } from "@/components/ui/text";
import { ContactForm } from "@/components/site/ContactForm";
import { LinkedInIcon } from "@/components/ui/icons";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Padmashree about manufacturing finance, FP&A, and corporate finance roles. LinkedIn or the contact form.",
};

export default function ContactPage() {
  return (
    <Container className="py-14 sm:py-20">
      <div className="mx-auto max-w-4xl">
        <Eyebrow>Contact</Eyebrow>
        <h1 className="display-section mt-3">Let us talk.</h1>
        <Lead className="mt-4 max-w-2xl">
          For manufacturing finance, FP&A, and corporate finance roles. The fastest way to
          reach me is LinkedIn or the form below.
        </Lead>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <ContactForm />
          </div>

          <aside className="space-y-6">
            <div className="rounded-lg border border-hairline bg-surface p-6 shadow-sm">
              <p className="eyebrow">Direct</p>
              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-2 text-accent hover:text-accent-deep"
              >
                <LinkedInIcon size={16} /> LinkedIn
              </a>
              {siteConfig.contactEmail ? (
                <a
                  href={`mailto:${siteConfig.contactEmail}`}
                  className="mt-3 block text-accent hover:text-accent-deep"
                >
                  {siteConfig.contactEmail}
                </a>
              ) : null}
            </div>

            <div className="rounded-lg border border-hairline bg-surface p-6 shadow-sm">
              <p className="eyebrow">Location</p>
              <p className="mt-3 text-ink">{siteConfig.location}</p>
              <p className="mt-2 text-sm text-ink-muted">
                This is a public site, so it lists a city and region only. No home address
                or phone number.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </Container>
  );
}
