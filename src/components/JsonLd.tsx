export function PersonJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Avinash Amudala",
    url: "https://avinash-amudala.com",
    jobTitle: "Software Engineer",
    worksFor: {
      "@type": "Organization",
      name: "Nokia",
    },
    alumniOf: [
      {
        "@type": "CollegeOrUniversity",
        name: "Rochester Institute of Technology",
      },
      {
        "@type": "CollegeOrUniversity",
        name: "Amrita Vishwa Vidyapeetham",
      },
    ],
    sameAs: [
      "https://github.com/Avinash-Amudala",
      "https://linkedin.com/in/Avinash-Amudala",
      "https://scholar.google.com/citations?user=r2BFRhgAAAAJ",
      "https://orcid.org/0009-0000-7226-6156",
    ],
    knowsAbout: [
      "Model Context Protocol",
      "Network Automation",
      "AI Systems",
      "A/B Testing",
      "RAG Systems",
      "Telecom",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function SoftwareJsonLd({
  name,
  description,
  url,
  codeRepository,
}: {
  name: string;
  description: string;
  url: string;
  codeRepository: string;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareSourceCode",
    name,
    description,
    url,
    codeRepository,
    author: {
      "@type": "Person",
      name: "Avinash Amudala",
    },
    programmingLanguage: "Python",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
