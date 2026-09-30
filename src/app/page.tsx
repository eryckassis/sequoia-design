import { ArticleHero } from "@/components/article";
import { SkipLink } from "@/components/layout";
import { SiteHeader } from "@/components/navigation";
import { articleHeroContent } from "@/content/article";
import { primaryNavigation } from "@/content/navigation";

export default function Home() {
  return (
    <>
      <SkipLink />
      <SiteHeader items={primaryNavigation} />

      <main id="main-content">
        <article>
          <ArticleHero content={articleHeroContent} />
        </article>
      </main>
    </>
  );
}
