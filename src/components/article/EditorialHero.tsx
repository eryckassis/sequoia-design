import Image from "next/image";
import Link from "next/link";

import { PageContainer } from "@/components/layout";
import type { EditorialHeroContent } from "@/content/editorial/types";

export const EDITORIAL_HERO_TITLE_PANEL_ID = "editorial-hero-title-panel";

type EditorialHeroProps = Readonly<{
  content: EditorialHeroContent;
}>;

export function EditorialHero({ content }: EditorialHeroProps) {
  return (
    <section
      aria-labelledby="editorial-hero-title"
      className="relative isolate overflow-hidden bg-black text-white"
    >
      <Image
        src={content.image.src}
        alt={content.image.alt}
        fill
        unoptimized
        sizes="100vw"
        fetchPriority="high"
        className="-z-20 object-cover object-center"
      />

      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-black/15"
      />

      <div id={EDITORIAL_HERO_TITLE_PANEL_ID} className="min-h-svh">
        <PageContainer className="relative min-h-svh">
          <div className="relative flex min-h-svh items-center justify-center">
            <h1
              id="editorial-hero-title"
              className="max-w-title text-balance text-center font-display text-display-mobile font-normal tablet:text-display-tablet laptop:text-display-desktop wide:text-display-wide"
            >
              {content.title}
            </h1>

            {/* Filetes horizontais */}
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-4 top-0 border-t border-white/60"
            />

            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-4 bottom-0 border-b border-white/60"
            />

            {/* Filetes verticais */}
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-y-30 left-0 border-l border-white/60"
            />

            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-y-30 right-0 border-r border-white/60"
            />
          </div>
        </PageContainer>
      </div>

      <PageContainer className="relative min-h-svh">
        <div className="grid min-h-svh grid-rows-2 border-x border-white/60 tablet:grid-cols-2 tablet:grid-rows-1">
          <div className="flex items-center justify-center border-b border-white/60 px-6 py-12 tablet:border-b-0 tablet:border-r">
            <div className="text-center font-label text-xs leading-[1.35] uppercase tablet:text-[0.8125rem]">
              <p>
                Published{" "}
                <time dateTime={content.publishedAt}>
                  {content.publishedLabel}
                </time>
              </p>

              <p>
                By{" "}
                <Link
                  href={content.author.href}
                  className="underline underline-offset-4"
                >
                  {content.author.name}
                </Link>
              </p>
            </div>
          </div>

          <div className="flex items-center justify-center px-6 py-12 tablet:px-12 laptop:px-16">
            <p className="max-w-lg text-balance text-center font-body text-2xl leading-[1.08] tablet:text-[1.625rem] laptop:text-[2rem]">
              {content.subtitle}
            </p>
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
