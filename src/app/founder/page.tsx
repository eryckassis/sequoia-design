import type { Metadata } from "next";

import {
  ArticleContinuation,
  ArticleFooter,
  ArticleHero,
  ArticleIntroSection,
  RelatedStories,
} from "@/components/article";
import { SkipLink, SiteFooter } from "@/components/layout";
import { SiteHeader } from "@/components/navigation";
import { founderContent } from "@/content/founder";
import { founderIntroImage, founderPrinciplesImage } from "@/content/media";
import { primaryNavigation } from "@/content/navigation";
import { relatedStories } from "@/content/related-stories";

export const metadata: Metadata = founderContent.metadata ?? {
  title: "Founder | Sequoia",
  description: "Founder at Sequoia.",
};

export default function FounderPage() {
  return (
    <>
      <SkipLink />
      <SiteHeader items={primaryNavigation} />

      <main id="main-content">
        <article>
          {founderContent.hero && <ArticleHero content={founderContent.hero} />}

          {founderContent.intro && (
            <ArticleIntroSection
              content={founderContent.intro}
              image={founderIntroImage}
            />
          )}

          {founderContent.continuation && (
            <ArticleContinuation
              content={founderContent.continuation}
              image={founderPrinciplesImage}
            />
          )}

          {founderContent.share ? (
            <ArticleFooter
              share={founderContent.share}
              stories={relatedStories}
            />
          ) : (
            <RelatedStories stories={relatedStories} />
          )}
        </article>
      </main>

      <SiteFooter />
    </>
  );
}
