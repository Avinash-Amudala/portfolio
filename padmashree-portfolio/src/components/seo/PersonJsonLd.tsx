import { siteConfig } from "@/lib/site";

export function PersonJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    jobTitle: siteConfig.role,
    description: siteConfig.description,
    url: siteConfig.siteUrl,
    sameAs: [siteConfig.linkedin],
    knowsAbout: [
      "Manufacturing finance",
      "Operations finance",
      "Financial planning and analysis",
      "Cost modeling",
      "US GAAP",
      "ASC 842",
      "ASC 330",
    ],
    alumniOf: [
      { "@type": "CollegeOrUniversity", name: "Saint Mary's College of California" },
      { "@type": "CollegeOrUniversity", name: "Mangalore University" },
    ],
    hasCredential: {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "Chartered Accountant (ICAI), CPA equivalent",
    },
    address: {
      "@type": "PostalAddress",
      addressRegion: "California",
      addressCountry: "US",
    },
  };

  return (
    <script
      type="application/ld+json"
      // Static, trusted content assembled from siteConfig.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
