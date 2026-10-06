import Image from "next/image";
import Link from "next/link";

import { PageContainer } from "@/components/layout";

export const THIS_IS_AGI_TITLE_PANEL_ID = "this-is-agi-title-panel";

export type ThisIsAgiHeroContent = Readonly<{
  title: string;
  author: Readonly<{
    name: string;
    href: string;
  }>;
  publishedAt: string;
  publishedLabel: string;
  subtitle: string;
  image: Readonly<{
    src: string;
    alt: string;
  }>;
}>;

type ThisIsAgiHeroProps = Readonly<{
  content: ThisIsAgiHeroContent;
}>;

export function ThisIsAgiHero({ content }: ThisIsAgiHeroProps) {
  return (
    <section
      aria-labelledby="this-is-agi-title"
      className="relative isolate overflow-hidden bg-black text-white"
    >
      <Image
        src={content.image.src}
        alt={content.image.alt}
        fill
        sizes="100vw"
        fetchPriority="high"
        className="-z-20 object-cover object-center"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-black/15"
      />

      <div id={THIS_IS_AGI_TITLE_PANEL_ID} className="min-h-svh">
        <PageContainer className="relative flex min-h-svh items-center justify-center">
          <h1
            id="this-is-agi-title"
            className="max-w-title text-balance text-center font-display text-display-mobile font-normal tablet:text-display-tablet laptop:text-display-desktop wide:text-display-wide"
          >
            {content.title}
          </h1>

          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-page-x-mobile bottom-0 border-b border-white/60 tablet:inset-x-page-x"
          />
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
            <p className="max-w-[32rem] text-balance text-center font-body text-2xl leading-[1.08] tablet:text-[1.625rem] laptop:text-[2rem]">
              {content.subtitle}
            </p>
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
