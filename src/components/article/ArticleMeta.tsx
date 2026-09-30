import Link from "next/link";

type ArticleMetaProps = Readonly<{
  author: string;
  authorHref: string;
  publishedAt: string;
  publishedLabel: string;
}>;

export function ArticleMeta({
  author,
  authorHref,
  publishedAt,
  publishedLabel,
}: ArticleMetaProps) {
  return (
    <div className="flex w-full max-w-[600px] flex-col items-center text-center font-label text-[14px] leading-[16.8px] uppercase">
      <p>
        By{" "}
        <Link href={authorHref} className="underline underline-offset-2">
          {author}
        </Link>
        ,
      </p>

      <p>
        Published <time dateTime={publishedAt}>{publishedLabel}</time>
      </p>
    </div>
  );
}
