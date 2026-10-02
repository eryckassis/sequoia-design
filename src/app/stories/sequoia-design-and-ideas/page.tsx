import type { Metadata } from "next";

import {
  ArticleContinuation,
  ArticleFooter,
  ArticleHero,
  ArticleIntroSection,
} from "@/components/article";
import { SkipLink, SiteFooter } from "@/components/layout";
import { SiteHeader } from "@/components/navigation";
import { articleContinuationContent } from "@/content/article-continuation";
import {
  articleHeroContent,
  articleIntroContent,
  articleShareContent,
} from "@/content/article";
import { articleIntroImage, opportunityMapImage } from "@/content/media";
import { primaryNavigation } from "@/content/navigation";
import { relatedStories } from "@/content/related-stories";

export const metadata: Metadata = {
  title: "Sequoia: Design and Ideas",
  description:
    "How AI-native services can turn software capabilities into completed outcomes.",
};

export default function SequoiaDesignAndIdeasPage() {
  return (
    <>
      <SkipLink />
      <SiteHeader items={primaryNavigation} />

      <main id="main-content">
        <article>
          <ArticleHero content={articleHeroContent} />

          <ArticleIntroSection
            content={articleIntroContent}
            image={articleIntroImage}
          />

          <ArticleContinuation
            content={articleContinuationContent}
            image={opportunityMapImage}
          />

          <ArticleFooter share={articleShareContent} stories={relatedStories} />
        </article>
      </main>

      <SiteFooter />
    </>
  );
}
