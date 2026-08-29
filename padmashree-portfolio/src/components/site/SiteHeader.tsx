"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { siteConfig } from "@/lib/site";
import { buttonClasses } from "@/components/ui/controls";
import { cn } from "@/lib/cn";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  // Close the mobile menu on Escape, and lock body scroll while it is open.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-hairline bg-paper/85 backdrop-blur-md">
      <div className="container-page flex h-16 items-center justify-between gap-4">
        <Link
          href="/"
          className="flex items-baseline gap-2 font-display text-lg font-semibold tracking-tight text-ink"
          onClick={() => setOpen(false)}
        >
          {siteConfig.name}
          <span className="hidden text-xs font-normal text-ink-muted sm:inline">
            Manufacturing and Operations Finance
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-7 md:flex">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-ink-2 transition-colors hover:text-accent"
            >
              {item.label}
            </Link>
          ))}
          <a
            href={siteConfig.resumeHref}
            target="_blank"
            rel="noopener noreferrer"
            className={buttonClasses("primary", "sm")}
          >
            Resume (PDF)
          </a>
        </nav>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-ink md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} aria-hidden /> : <Menu size={22} aria-hidden />}
        </button>
      </div>

      <div
        id="mobile-menu"
        hidden={!open}
        className="border-t border-hairline bg-paper md:hidden"
      >
        <nav aria-label="Primary mobile" className="container-page flex flex-col py-3">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="border-b border-hairline py-3 text-base text-ink"
            >
              {item.label}
            </Link>
          ))}
          <a
            href={siteConfig.resumeHref}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className={cn(buttonClasses("primary", "md"), "mt-4 w-full")}
          >
            Resume (PDF)
          </a>
        </nav>
      </div>
    </header>
  );
}
