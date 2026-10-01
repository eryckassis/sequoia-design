import {
  ArticleFooter,
  ArticleHero,
  ArticleIntroSection,
  ArticleContinuation,
} from "@/components/article";
import { SkipLink } from "@/components/layout";
import { SiteHeader } from "@/components/navigation";
import {
  articleHeroContent,
  articleIntroContent,
  articleShareContent,
} from "@/content/article";
import { articleIntroImage } from "@/content/media";
import { primaryNavigation } from "@/content/navigation";
import { relatedStories } from "@/content/related-stories";
import { SiteFooter } from "@/components/layout/SiteFooter";

export default function Home() {
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
          <ArticleContinuation />
          <ArticleFooter share={articleShareContent} stories={relatedStories} />
        </article>
      </main>
      <SiteFooter />
    </>
  );
}
