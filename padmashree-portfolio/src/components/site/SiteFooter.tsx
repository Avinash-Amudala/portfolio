import Link from "next/link";
import { siteConfig } from "@/lib/site";
import { Container } from "@/components/ui/layout";
import { LinkedInIcon } from "@/components/ui/icons";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-8 border-t border-hairline bg-surface">
      <Container className="py-14">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr]">
          <div className="max-w-sm">
            <p className="font-display text-lg font-semibold tracking-tight text-ink">
              {siteConfig.name}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-ink-2">
              {siteConfig.shortPitch}
            </p>
            <p className="mt-4 text-sm text-ink-muted">{siteConfig.location}</p>
          </div>

          <nav aria-label="Footer" className="text-sm">
            <p className="eyebrow mb-3">Explore</p>
            <ul className="space-y-2">
              {siteConfig.nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-ink-2 transition-colors hover:text-accent"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="text-sm">
            <p className="eyebrow mb-3">Connect</p>
            <ul className="space-y-2">
              <li>
                <a
                  href={siteConfig.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-ink-2 transition-colors hover:text-accent"
                >
                  <LinkedInIcon size={15} />
                  LinkedIn
                </a>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-ink-2 transition-colors hover:text-accent"
                >
                  Contact
                </Link>
              </li>
              <li>
                <a
                  href={siteConfig.resumeHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ink-2 transition-colors hover:text-accent"
                >
                  Resume (PDF)
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-hairline pt-6 text-xs text-ink-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            <span className="num">{year}</span> {siteConfig.name}. Built with care,
            numbers first.
          </p>
          <p>{siteConfig.relocationNote}</p>
        </div>
      </Container>
    </footer>
  );
}
