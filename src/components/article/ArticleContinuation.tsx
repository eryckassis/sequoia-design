import type { EditorialContinuationContent } from "@/content/editorial/types";
import type { ArticleSectionImage } from "./ArticleIntroSection";
import { ArticleIntroSection } from "./ArticleIntroSection";

export type ArticleContinuationContent = EditorialContinuationContent;

type ArticleContinuationProps = Readonly<{
  content: ArticleContinuationContent;
  image?: ArticleSectionImage;
  showSideRules?: boolean;
  showMedia?: boolean;
}>;

export function ArticleContinuation({
  content,
  image,
  showSideRules = true,
  showMedia = true,
}: ArticleContinuationProps) {
  const hasClosingContent =
    content.items.length > 0 ||
    Boolean(content.closing) ||
    Boolean(content.callToAction);

  return (
    <>
      <ArticleIntroSection
        afterMedia
        image={image}
        media="map"
        showMedia={showMedia}
        showSideRules={showSideRules}
      >
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

      {hasClosingContent ? (
        <div className="bg-canvas pb-16 desktop:pb-21">
          <ArticleIntroSection
            afterMedia
            showMedia={false}
            showSideRules={showSideRules}
          >
            {content.items.map(({ label, description }) => (
              <p key={label}>
                <strong className="font-semibold">{label}. </strong>
                {description}
              </p>
            ))}

            {content.closing ? <p>{content.closing}</p> : null}

            {content.callToAction ? <p>{content.callToAction}</p> : null}
          </ArticleIntroSection>
        </div>
      ) : null}
    </>
  );
}
