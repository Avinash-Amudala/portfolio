import { Container, Section } from "@/components/ui/layout";
import { SectionHeading } from "@/components/ui/text";
import { credentials } from "@/content/data/credentials";

export function Credentials({ withSection = true }: { withSection?: boolean }) {
  const grid = (
    <dl className="grid gap-6 sm:grid-cols-3">
      {credentials.map((c) => (
        <div key={c.title} className="border-t border-hairline pt-4">
          <dt className="font-display text-lg font-medium text-ink">{c.title}</dt>
          <dd className="mt-1 text-sm text-ink-2">{c.issuer}</dd>
          <dd className="num mt-1 text-xs text-ink-muted">
            {c.date}
            {c.note ? ` · ${c.note}` : ""}
          </dd>
        </div>
      ))}
    </dl>
  );

  if (!withSection) return grid;

  return (
    <Section id="education" className="bg-surface" aria-labelledby="education-heading">
      <Container>
        <SectionHeading
          eyebrow="Education and credentials"
          headingId="education-heading"
          title="Chartered Accountant, and an MS in Finance to match the models."
        />
        <div className="mt-10">{grid}</div>
      </Container>
    </Section>
  );
}
