import Image, { type ImageProps } from "next/image";
import type { ReactNode } from "react";
import { PageContainer } from "@/components/layout";

export type ArticleIntroContent = Readonly<{
  lead: string;
  overview: string;
  sectionTitle: string;
  thesis: Readonly<{
    prefix: string;
    firstTerm: string;
    middle: string;
    secondTerm: string;
    suffix: string;
  }>;
  explanation: string;
  conclusion: string;
}>;
type SectionBody =
  | Readonly<{ content: ArticleIntroContent; children?: never }>
  | Readonly<{ content?: never; children: ReactNode }>;

export type ArticleIntroSectionProps = SectionBody &
  Readonly<{
    image?: Pick<ImageProps, "src" | "alt">;
    media?: "panorama" | "map";
    afterMedia?: boolean;
  }>;

export function ArticleIntroSection({
  content,
  children,
  image,
  media,
  afterMedia = false,
}: ArticleIntroSectionProps) {
  const mediaKind = media ?? (content || image ? "panorama" : undefined);
  return (
    <section className="bg-canvas">
      <PageContainer
        className={afterMedia ? "pt-[3.4rem] desktop:pt-17" : "pt-8"}
      >
        <div className="relative mx-auto w-full max-w-article-frame px-6 after:pointer-events-none after:absolute after:inset-0 after:z-10 after:border-x after:border-rule">
          <div className="flex flex-col gap-8 font-body text-body-mobile text-foreground desktop:gap-10 desktop:text-body-desktop">
            {content ? (
              <>
                <p>{content.lead}</p>
                <p>{content.overview}</p>
                <p>
                  <strong className="font-semibold">
                    {content.sectionTitle}
                  </strong>
                </p>
                <p>
                  {content.thesis.prefix}
                  <em className="italic">{content.thesis.firstTerm}</em>
                  {content.thesis.middle}
                  <em className="italic">{content.thesis.secondTerm}</em>
                  {content.thesis.suffix}
                </p>
                <p>{content.explanation}</p>
                <p>{content.conclusion}</p>
              </>
            ) : (
              children
            )}
          </div>

          {mediaKind && (
            <div
              className={`relative mt-8 w-full overflow-hidden bg-brand ${
                mediaKind === "map" ? "aspect-155/143" : "aspect-31/15"
              }`}
              aria-hidden={image ? undefined : true}
            >
              {image && (
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(min-width: 1024px) 620px, (min-width: 768px) calc(100vw - 144px), calc(100vw - 96px)"
                  className="object-cover"
                />
              )}
            </div>
          )}
        </div>
      </PageContainer>
    </section>
  );
}
