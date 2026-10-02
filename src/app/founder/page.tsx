import type { Metadata } from "next";

import {
  ArticleContinuation,
  ArticleFooter,
  ArticleHero,
  ArticleIntroSection,
} from "@/components/article";
import { SkipLink, SiteFooter } from "@/components/layout";
import { SiteHeader } from "@/components/navigation";
import { founderContent } from "@/content/founder";
import { articleIntroImage, opportunityMapImage } from "@/content/media";
import { primaryNavigation } from "@/content/navigation";
import { relatedStories } from "@/content/related-stories";

export const metadata: Metadata = founderContent.metadata;

export default function FounderPage() {
  return (
    <>
      <SkipLink />
      <SiteHeader items={primaryNavigation} />

      <main id="main-content">
        <article>
          <ArticleHero content={founderContent.hero} />

          <ArticleIntroSection
            content={founderContent.intro}
            image={articleIntroImage}
          />

          <ArticleContinuation
            content={founderContent.continuation}
            image={opportunityMapImage}
          />

          <ArticleFooter
            share={founderContent.share}
            stories={relatedStories}
          />
        </article>
      </main>

      <SiteFooter />
    </>
  );
}
