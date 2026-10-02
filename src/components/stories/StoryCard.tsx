import Image, { type ImageProps } from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";

export type StoryMedia =
  | Readonly<{ kind: "image"; src: ImageProps["src"] }>
  | Readonly<{ kind: "gif"; src: string }>
  | Readonly<{ kind: "video"; src: string }>;

export type RelatedStory = Readonly<{
  category: string;
  title: string;
  author: string;
  href?: string;
  media?: StoryMedia;
}>;

export type StoryCardVariant = "compact" | "featured";

type StoryCardProps = Readonly<{
  story: RelatedStory;
  variant?: StoryCardVariant;
}>;

const compactMediaSizes =
  "(min-width: 2016px) 448px, (min-width: 1024px) calc((100vw - 224px) / 4), (min-width: 768px) calc((100vw - 160px) / 2), calc(100vw - 64px)";

const featuredMediaSizes =
  "(min-width: 2016px) 912px, (min-width: 1024px) calc((100vw - 128px) / 2), (min-width: 768px) calc(100vw - 128px), calc(100vw - 64px)";

function StoryCardMedia({
  media,
  variant,
}: Readonly<{
  media?: StoryMedia;
  variant: StoryCardVariant;
}>) {
  if (!media) {
    return null;
  }

  if (media.kind === "video") {
    return (
      <video
        src={media.src}
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        aria-hidden="true"
        tabIndex={-1}
        className="absolute inset-0 size-full object-cover"
      />
    );
  }

  return (
    <Image
      src={media.src}
      alt=""
      fill
      sizes={variant === "featured" ? featuredMediaSizes : compactMediaSizes}
      unoptimized={media.kind === "gif"}
      aria-hidden="true"
      className="object-cover"
    />
  );
}

function StoryCardContent({ story, variant = "compact" }: StoryCardProps) {
  const isFeatured = variant === "featured";

  return (
    <>
      <StoryCardMedia media={story.media} variant={variant} />

      <div
        className={cn(
          "z-10 text-white",
          isFeatured
            ? "absolute inset-0 flex flex-col p-3 drop-shadow-[0_1px_8px_rgb(0_0_0/0.28)] tablet:p-5"
            : "relative grid h-full grid-rows-[auto_1fr_auto]",
        )}
      >
        <div
          className={cn(
            "flex items-center gap-4 font-label leading-none uppercase",
            isFeatured ? "text-[0.6875rem] tablet:text-xs" : "text-xs",
          )}
        >
          <div className="flex items-center gap-[7px]">
            <span aria-hidden="true" className="size-3 rounded-full bg-white" />
            <span>{story.category}</span>
          </div>
        </div>

        {isFeatured ? (
          <div className="mt-auto max-w-[94%]">
            <h3 className="text-balance text-left font-display text-lg leading-[1.05] tablet:text-xl laptop:text-[1.375rem] desktop:text-[1.75rem] wide:text-[2rem]">
              {story.title}
            </h3>

            <p className="mt-1.5 text-left font-label text-[0.625rem] leading-tight tablet:mt-2 tablet:text-xs laptop:text-[0.8125rem] desktop:text-sm">
              by {story.author}
            </p>
          </div>
        ) : (
          <>
            <h3 className="max-w-60 place-self-center text-center font-display text-[1.1875rem] leading-[1.1]">
              {story.title}
            </h3>

            <p className="text-center font-label text-xs leading-[1.1]">
              by {story.author}
            </p>
          </>
        )}
      </div>
    </>
  );
}

export function StoryCard({ story, variant = "compact" }: StoryCardProps) {
  const isFeatured = variant === "featured";
  const frameClassName =
    "relative p-2 before:pointer-events-none before:absolute before:inset-x-2 before:inset-y-0 before:z-20 before:border-y before:border-rule after:pointer-events-none after:absolute after:inset-x-0 after:inset-y-2 after:z-20 after:border-x after:border-rule tablet:p-4 tablet:before:inset-x-4 tablet:after:inset-y-4";
  const cardClassName = cn(
    "relative isolate block w-full overflow-hidden bg-brand",
    isFeatured
      ? "min-h-68 tablet:aspect-[3/2] tablet:min-h-0"
      : "aspect-[0.956] p-3",
  );

  return (
    <article className={frameClassName}>
      {story.href ? (
        <Link
          href={story.href}
          aria-label={`${story.category}: ${story.title}, by ${story.author}`}
          className={cardClassName}
        >
          <StoryCardContent story={story} variant={variant} />
        </Link>
      ) : (
        <div className={cardClassName}>
          <StoryCardContent story={story} variant={variant} />
        </div>
      )}
    </article>
  );
}
