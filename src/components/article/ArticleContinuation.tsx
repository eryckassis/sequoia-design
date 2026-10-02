import type { ArticleSectionImage } from "./ArticleIntroSection";
import { ArticleIntroSection } from "./ArticleIntroSection";

export type ArticleContinuationContent = Readonly<{
  sections: readonly Readonly<{
    id: string;
    heading: string;
    paragraphs: readonly string[];
  }>[];
  items: readonly Readonly<{
    label: string;
    description: string;
  }>[];
  closing: string;
  callToAction: string;
}>;

type ArticleContinuationProps = Readonly<{
  content: ArticleContinuationContent;
  image?: ArticleSectionImage;
}>;

export function ArticleContinuation({
  content,
  image,
}: ArticleContinuationProps) {
  return (
    <>
      <ArticleIntroSection afterMedia image={image} media="map">
        {content.sections.map(({ id, heading, paragraphs }) => (
          <section
            key={id}
            aria-labelledby={id}
            className="flex flex-col gap-8 desktop:gap-10"
          >
            <h2 id={id} className="font-semibold">
              {heading}
            </h2>

            {paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </section>
        ))}
      </ArticleIntroSection>

      <div className="bg-canvas pb-16 desktop:pb-[84px]">
        <ArticleIntroSection afterMedia>
          {content.items.map(({ label, description }) => (
            <p key={label}>
              <strong className="font-semibold">{label}. </strong>
              {description}
            </p>
          ))}

          <p>{content.closing}</p>
          <p>{content.callToAction}</p>
        </ArticleIntroSection>
      </div>
    </>
  );
}
