import { PageContainer } from "@/components/layout";

import { ArticleMeta } from "./ArticleMeta";

export type ArticleHeroContent = Readonly<{
  title: string;
  author: string;
  authorHref: string;
  publishedAt: string;
  publishedLabel: string;
}>;

type ArticleHeroProps = Readonly<{
  content: ArticleHeroContent;
}>;

export function ArticleHero({ content }: ArticleHeroProps) {
  return (
    <header aria-labelledby="article-title" className="bg-canvas">
      <PageContainer className="relative flex flex-col items-center gap-16 pb-16 pt-40 tablet:gap-20 tablet:pb-[72px] tablet:pt-48 laptop:gap-24 laptop:pb-[84px] laptop:pt-56 wide:pt-64">
        <h1
          id="article-title"
          className="max-w-title text-balance text-center font-display text-display-mobile font-normal tablet:text-display-tablet laptop:text-display-desktop wide:text-display-wide"
        >
          {content.title}
        </h1>

        <ArticleMeta
          author={content.author}
          authorHref={content.authorHref}
          publishedAt={content.publishedAt}
          publishedLabel={content.publishedLabel}
        />

        <span
          aria-hidden="true"
          className="pointer-events-none absolute bottom-0 left-page-x-mobile right-page-x-mobile border-b border-rule tablet:left-page-x tablet:right-page-x"
        />
      </PageContainer>
    </header>
  );
}
