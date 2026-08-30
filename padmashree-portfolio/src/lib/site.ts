/*
  Central site configuration. Copy is written in Padmashree's plain-language voice.
  Privacy rule: city and relocation note only. No home address, no phone number.

  Two values must be set before launch (tracked in the README open questions):
  - contactEmail: her dedicated email. Left as a placeholder here.
  - siteUrl: the production URL, for absolute metadata and Open Graph.
*/

export const siteConfig = {
  name: "Padmashree",
  // Middot separators are fine; the build bans em dashes only.
  title: "Padmashree · Manufacturing and Operations Finance",
  role: "Manufacturing and Operations Finance Analyst",
  shortPitch:
    "Manufacturing and operations finance. I build the cost models and the tools that produce them.",
  description:
    "Padmashree is a manufacturing and operations finance analyst and Chartered Accountant. She builds the cost models, reconciliations, and metrics that produce the numbers, then explains the answer in plain language.",

  // Production URL. Override with NEXT_PUBLIC_SITE_URL if the domain changes.
  siteUrl:
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
    "https://padmashree.online",

  location: "Sunnyvale, CA · open to relocation",
  locationShort: "Sunnyvale, CA",
  relocationNote: "Open to relocation",
  linkedin: "https://www.linkedin.com/in/padmashree-524a21190/",

  contactEmail: "padmashree379@gmail.com",
  contactFormEndpoint: process.env.NEXT_PUBLIC_CONTACT_ENDPOINT ?? "",

  nav: [
    { label: "Work", href: "/#work" },
    { label: "Experience", href: "/#experience" },
    { label: "Skills", href: "/#skills" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],

  resumeHref: "/padmashree-resume.pdf",
} as const;

export type SiteConfig = typeof siteConfig;
