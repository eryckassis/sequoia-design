import { BadgeCheck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import type {
  NotePostAuthor,
  NotePostContent,
  NotePostMedia,
} from "@/content/editorial";

import { NoteLikeButton } from "./NoteLikeButton";

type NotePostProps = Readonly<{
  post: NotePostContent;
}>;

function getInitials(name: string) {
  return name
    .split(" ")
    .slice(0, 2)
    .map((word) => word.charAt(0))
    .join("")
    .toUpperCase();
}

function AuthorAvatar({ author }: Readonly<{ author: NotePostAuthor }>) {
  if (author.avatar) {
    return (
      <div className="relative size-11 shrink-0 overflow-hidden rounded-full bg-foreground/5 tablet:size-12">
        <Image
          src={author.avatar.src}
          alt={author.avatar.alt}
          fill
          sizes="48px"
          className="object-cover"
        />
      </div>
    );
  }

  return (
    <div
      aria-hidden="true"
      className="grid size-11 shrink-0 place-items-center rounded-full bg-foreground text-canvas tablet:size-12"
    >
      <span className="font-label text-xs font-medium uppercase">
        {getInitials(author.name)}
      </span>
    </div>
  );
}

function AuthorName({ author }: Readonly<{ author: NotePostAuthor }>) {
  const content = (
    <span className="inline-flex items-center gap-1">
      <span className="font-display text-sm font-medium tablet:text-base">
        {author.name}
      </span>

      {author.verified ? (
        <BadgeCheck
          aria-label="Verified author"
          className="size-4 fill-brand text-canvas"
          strokeWidth={1.5}
        />
      ) : null}
    </span>
  );

  if (!author.href) {
    return content;
  }

  return (
    <Link
      href={author.href}
      className="rounded-sm hover:underline hover:underline-offset-4"
    >
      {content}
    </Link>
  );
}

function PostMedia({ media }: Readonly<{ media: NotePostMedia }>) {
  if (media.kind === "image") {
    return (
      <div className="relative mt-6 aspect-video overflow-hidden rounded-2xl border border-rule bg-foreground/5">
        <Image
          src={media.image.src}
          alt={media.image.alt}
          fill
          sizes="(min-width: 768px) 600px, calc(100vw - 96px)"
          className="object-cover"
        />
      </div>
    );
  }

  return (
    <video
      controls
      playsInline
      preload="metadata"
      poster={media.poster}
      aria-label={media.title}
      className="mt-6 aspect-video w-full rounded-2xl border border-rule bg-black object-cover"
    >
      <source src={media.src} />
      Your browser does not support embedded videos.
    </video>
  );
}

export function NotePost({ post }: NotePostProps) {
  return (
    <article className="border-b border-rule px-5 py-6 tablet:px-8 tablet:py-8">
      <div className="grid grid-cols-[auto_minmax(0,1fr)] gap-3 tablet:gap-4">
        <AuthorAvatar author={post.author} />

        <div className="min-w-0">
          <header className="flex flex-wrap items-center gap-x-1.5 gap-y-0.5">
            <AuthorName author={post.author} />

            <span className="font-display text-sm text-foreground/55">
              @{post.author.handle}
            </span>

            <span
              aria-hidden="true"
              className="font-label text-sm text-foreground/55"
            >
              ·
            </span>

            <time
              dateTime={post.publishedAt}
              className="font-label text-sm text-foreground/55"
            >
              {post.publishedLabel}
            </time>
          </header>

          <div className="mt-2 flex flex-col gap-4 font-body text-body-mobile text-foreground desktop:text-body-desktop">
            {post.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          {post.media ? <PostMedia media={post.media} /> : null}

          <footer className="mt-3 flex items-center">
            <NoteLikeButton postId={post.id} />
          </footer>
        </div>
      </div>
    </article>
  );
}
