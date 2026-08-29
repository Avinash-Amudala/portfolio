/*
  Bio, credentials, and the through-line copy (spec sections 6.7 and 3.2).
  Written in Padmashree's plain-language voice. No home address, no phone.
*/

export type Credential = {
  title: string;
  issuer: string;
  date: string;
  note?: string;
};

export const credentials: Credential[] = [
  {
    title: "Chartered Accountant (ICAI)",
    issuer: "Institute of Chartered Accountants of India",
    date: "Jul 2023",
    note: "CPA equivalent",
  },
  {
    title: "MS in Finance (STEM)",
    issuer: "Saint Mary's College of California",
    date: "Aug 2026",
    note: "Expected",
  },
  {
    title: "B.Com",
    issuer: "Mangalore University",
    date: "Feb 2022",
  },
];

/** The through-line, in her voice, for the strip under the hero. */
export const throughLine = {
  heading: "Finance that builds its own tools.",
  body: [
    "Most FP&A candidates report the numbers. I report the numbers and then build the pipeline, the reconciliation, and the metric that produced them.",
    "During a production ramp, that is the difference between a number people argue about and a number they can act on.",
  ],
};

/** Short bio paragraphs for the About page. */
export const bio = [
  "I am a manufacturing and operations finance analyst and a Chartered Accountant, finishing an MS in Finance (STEM) in August 2026.",
  "Right now I support the Production organization at Harbinger Motors, an EV manufacturer, through a US production ramp. Before that I spent two-plus years in full-cycle FP&A at NTT DATA, and three years in audit and accounting in India.",
  "What I am good at: building cost models and decision tools while things are still moving, finding the real problem in messy data, and explaining the answer in plain language. This site shows that work rather than claiming it.",
];
