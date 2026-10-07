import type { Metadata } from "next";

import {
  ArticleContinuation,
  ArticleFooter,
  ArticleIntroSection,
  THIS_IS_AGI_TITLE_PANEL_ID,
  ThisIsAgiHero,
} from "@/components/article";
import { SkipLink, SiteFooter } from "@/components/layout";
import { SiteHeader } from "@/components/navigation";
import { primaryNavigation } from "@/content/navigation";
import { relatedStories } from "@/content/related-stories";
import {
  thisIsAgiContinuationContent,
  thisIsAgiHeroContent,
  thisIsAgiIntroContent,
  thisIsAgiMetadata,
  thisIsAgiShareContent,
} from "@/content/this-is-agi";

export const metadata: Metadata = thisIsAgiMetadata;

export default function ThisIsAgiPage() {
  return (
    <>
      <SkipLink />
      <SiteHeader
        items={primaryNavigation}
        overlayUntilId={THIS_IS_AGI_TITLE_PANEL_ID}
      />

      <main id="main-content">
        <article>
          <ThisIsAgiHero content={thisIsAgiHeroContent} />

          <ArticleIntroSection
            content={thisIsAgiIntroContent}
            showMedia={false}
            dropCap
          />

          <ArticleContinuation
            content={thisIsAgiContinuationContent}
            showMedia={false}
          />

          <ArticleFooter
            share={thisIsAgiShareContent}
            stories={relatedStories}
          />
        </article>
      </main>

      <SiteFooter />
    </>
  );
}
