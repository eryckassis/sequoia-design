import Image, { type ImageProps } from "next/image";

import { PageContainer } from "@/components/layout";

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

type StoryCardProps = Readonly<{
  story: RelatedStory;
}>;

type RelatedStoriesProps = Readonly<{
  stories: readonly RelatedStory[];
}>;

const responsiveMediaSizes =
  "(min-width: 2016px) 448px, (min-width: 1024px) calc((100vw - 224px) / 4), (min-width: 768px) calc((100vw - 160px) / 2), calc(100vw - 64px)";

const cardClassName =
  "relative isolate block aspect-[0.956] w-full overflow-hidden bg-brand p-3";

function StoryCardMedia({ media }: Readonly<{ media?: StoryMedia }>) {
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
        preload="auto"
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
      sizes={responsiveMediaSizes}
      unoptimized={media.kind === "gif"}
      aria-hidden="true"
      className="object-cover"
    />
  );
}

function StoryCardContent({ story }: StoryCardProps) {
  return (
    <>
      <StoryCardMedia media={story.media} />

      <div className="relative z-10 grid h-full grid-rows-[auto_1fr_auto] text-white">
        <div className="flex items-center gap-[7px] font-label text-xs leading-none uppercase">
          <span aria-hidden="true" className="size-3 rounded-full bg-white" />
          <span>{story.category}</span>
        </div>

        <h3 className="max-w-60 place-self-center text-center font-display text-[1.1875rem] leading-[1.1]">
          {story.title}
        </h3>

        <p className="text-center font-label text-xs leading-[1.1]">
          by {story.author}
        </p>
      </div>
    </>
  );
}

export function StoryCard({ story }: StoryCardProps) {
  if (story.href) {
    return (
      <article className="relative p-2 before:pointer-events-none before:absolute before:inset-x-2 before:inset-y-0 before:z-20 before:border-y before:border-rule after:pointer-events-none after:absolute after:inset-x-0 after:inset-y-2 after:z-20 after:border-x after:border-rule tablet:p-4 tablet:before:inset-x-4 tablet:after:inset-y-4">
        <a
          href={story.href}
          aria-label={`${story.category}: ${story.title}, by ${story.author}`}
          className={cardClassName}
        >
          <StoryCardContent story={story} />
        </a>
      </article>
    );
  }

  return (
    <article className="relative p-2 before:pointer-events-none before:absolute before:inset-x-2 before:inset-y-0 before:z-20 before:border-y before:border-rule after:pointer-events-none after:absolute after:inset-x-0 after:inset-y-2 after:z-20 after:border-x after:border-rule tablet:p-4 tablet:before:inset-x-4 tablet:after:inset-y-4">
      <div className={cardClassName}>
        <StoryCardContent story={story} />
      </div>
    </article>
  );
}

export function RelatedStories({ stories }: RelatedStoriesProps) {
  return (
    <section
      aria-labelledby="related-stories-title"
      className="bg-canvas pb-20"
    >
      <h2 id="related-stories-title" className="sr-only">
        Related stories
      </h2>

      <PageContainer>
        <div className="grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-4">
          {stories.map((story) => (
            <StoryCard key={`${story.category}-${story.title}`} story={story} />
          ))}
        </div>
      </PageContainer>
    </section>
  );
}
