import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/layout";
import { Eyebrow } from "@/components/ui/text";
import { Button, buttonClasses } from "@/components/ui/controls";
import { siteConfig } from "@/lib/site";

export function Hero() {
  return (
    <section className="border-b border-hairline">
      <Container className="py-16 sm:py-20 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-7">
            <Eyebrow>Padmashree · Manufacturing and Operations Finance</Eyebrow>
            <h1 className="display-hero mt-5 max-w-2xl text-balance">
              I build the cost models, and the tools that produce them.
            </h1>
            <p className="lead mt-6 max-w-xl">
              Chartered Accountant and MS Finance, focused on manufacturing and
              operations finance. I find the real problem in messy data and explain
              the answer in plain language.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Button href="#work">
                See the work
                <ArrowRight size={17} aria-hidden />
              </Button>
              <a
                href={siteConfig.resumeHref}
                target="_blank"
                rel="noopener noreferrer"
                className={buttonClasses("secondary", "md")}
              >
                Download resume
              </a>
            </div>
          </div>

          <div className="lg:col-span-5">
            <figure className="reveal mx-auto max-w-[280px] sm:max-w-xs lg:max-w-none">
              <div className="overflow-hidden rounded-lg border border-hairline bg-surface shadow-sm">
                <Image
                  src="/padmashree-portrait.jpg"
                  alt="Padmashree"
                  width={1400}
                  height={1750}
                  priority
                  sizes="(max-width: 639px) 280px, (max-width: 1023px) 320px, 420px"
                  className="block h-auto w-full"
                />
              </div>
            </figure>
          </div>
        </div>
      </Container>
    </section>
  );
}
