import {
  articleCallToAction,
  articleClosing,
  articleContinuationSection,
  Opportunities,
} from "@/content/article-continuation";
import { opportunityMapImage } from "@/content/media";

import { ArticleIntroSection } from "./ArticleIntroSection";

export function ArticleContinuation() {
  return (
    <>
      <ArticleIntroSection
        afterMedia
        image={opportunityMapImage}
        media="map"
      >
        {articleContinuationSection.map(({ id, heading, paragraphs }) => (
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
          {Opportunities.map(({ label, description }) => (
            <p key={label}>
              <strong className="font-semibold">{label}. </strong>
              {description}
            </p>
          ))}

          <p>{articleClosing}</p>
          <p>{articleCallToAction}</p>
        </ArticleIntroSection>
      </div>
    </>
  );
}
