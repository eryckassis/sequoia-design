import TechText, { type TechTextProps } from "@/components/TechText";
import { PageContainer } from "@/components/layout";
import { ArticleMeta } from "./ArticleMeta";

export type ArticleHeroContent = Readonly<{
  title: string;
  techText: TechTextProps;
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
          className="flex max-w-title flex-wrap items-center justify-center text-balance text-center font-display text-display-mobile font-normal tablet:text-display-tablet laptop:text-display-desktop wide:text-display-wide"
        >
          <span className="-my-[0.25em] h-[1.5em] w-[3.75em] shrink-0">
            <TechText {...content.techText} />
          </span>
          <span> {content.title}</span>
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
