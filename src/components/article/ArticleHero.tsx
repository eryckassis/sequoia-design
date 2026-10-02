import TechText, { type TechTextProps } from "@/components/TechText";
import { PageContainer } from "@/components/layout";
import { cn } from "@/lib/utils";
import { ArticleMeta } from "./ArticleMeta";

export type ArticleHeroMeta = Readonly<{
  author: string;
  authorHref: string;
  publishedAt: string;
  publishedLabel: string;
}>;

export type ArticleHeroContent = Readonly<{
  title: string;
  techText: TechTextProps;
  meta?: ArticleHeroMeta;
}>;

type ArticleHeroProps = Readonly<{
  content: ArticleHeroContent;
}>;

export function ArticleHero({ content }: ArticleHeroProps) {
  const hasMeta = Boolean(content.meta);

  return (
    <header aria-labelledby="hero-title" className="bg-canvas">
      <PageContainer
        className={cn(
          "relative flex flex-col items-center",
          hasMeta
            ? "gap-16 pb-16 pt-40 tablet:gap-20 tablet:pb-[72px] tablet:pt-48 laptop:gap-24 laptop:pb-[84px] laptop:pt-56 wide:pt-64"
            : "min-h-[34rem] justify-center pt-header tablet:min-h-[38rem] laptop:min-h-[42rem] wide:min-h-[46rem]",
        )}
      >
        <h1
          id="hero-title"
          className={cn(
            "flex flex-wrap items-center justify-center text-balance text-center font-display text-display-mobile font-normal tablet:text-display-tablet laptop:text-display-desktop wide:text-display-wide",
            hasMeta ? "max-w-title" : "max-w-[78rem]",
          )}
        >
          <span className="-my-[0.25em] h-[1.5em] w-[3.75em] shrink-0">
            <TechText {...content.techText} />
          </span>
          <span> {content.title}</span>
        </h1>

        {content.meta ? (
          <ArticleMeta
            author={content.meta.author}
            authorHref={content.meta.authorHref}
            publishedAt={content.meta.publishedAt}
            publishedLabel={content.meta.publishedLabel}
          />
        ) : null}

        {content.meta ? (
          <span
            aria-hidden="true"
            className="pointer-events-none absolute bottom-0 left-page-x-mobile right-page-x-mobile border-b border-rule tablet:left-page-x tablet:right-page-x"
          />
        ) : null}
      </PageContainer>
    </header>
  );
}
