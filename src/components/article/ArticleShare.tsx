import type { EditorialShareContent } from "@/content/editorial/types";

type SharePlatform = "facebook" | "x" | "linkedin" | "email";

export type ArticleShareContent = EditorialShareContent;

type ArticleShareProps = Readonly<{
  content: ArticleShareContent;
}>;

const sharePlatforms = [
  { platform: "facebook", label: "Facebook" },
  { platform: "x", label: "X" },
  { platform: "linkedin", label: "LinkedIn" },
  { platform: "email", label: "email" },
] as const satisfies readonly Readonly<{
  platform: SharePlatform;
  label: string;
}>[];

function getShareHref(platform: SharePlatform, content: ArticleShareContent) {
  if (!content.url) {
    return undefined;
  }

  const url = encodeURIComponent(content.url);
  const title = encodeURIComponent(content.title);

  switch (platform) {
    case "facebook":
      return `https://www.facebook.com/sharer/sharer.php?u=${url}`;
    case "x":
      return `https://twitter.com/intent/tweet?url=${url}&text=${title}`;
    case "linkedin":
      return `https://www.linkedin.com/sharing/share-offsite/?url=${url}`;
    case "email":
      return `mailto:?subject=${title}&body=${url}`;
  }
}

function ShareIcon({ platform }: Readonly<{ platform: SharePlatform }>) {
  const commonProps = {
    viewBox: "0 0 18 18",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: "size-[18px]",
    focusable: false,
    "aria-hidden": true,
  } as const;

  switch (platform) {
    case "facebook":
      return (
        <svg {...commonProps}>
          <path
            d="M9.756 4.425c0-.644.575-.875 1.219-.875s1.331.2 1.331.2l.413-2.45S11.844 1 9.756 1c-1.281 0-2.025.488-2.568 1.206-.513.681-.532 1.775-.532 2.482v1.606H5v2.394h1.656V17h3.1V8.688h2.456l.182-2.394H9.756V4.425Z"
            fill="currentColor"
          />
        </svg>
      );
    case "x":
      return (
        <svg {...commonProps}>
          <path
            d="M10.712 7.789 17.413 0h-1.588l-5.818 6.763L5.36 0H0l7.027 10.227L0 18.396h1.588l6.144-7.143 4.908 7.143H18L10.712 7.789Zm-2.175 2.528-.712-1.018L2.16 1.195h2.439l4.572 6.54.712 1.019 5.943 8.501h-2.439l-4.85-6.938Z"
            fill="currentColor"
          />
        </svg>
      );
    case "linkedin":
      return (
        <svg {...commonProps}>
          <path
            d="M4.632 5.974H1.203v10.318h3.429V5.974ZM2.918 4.566c1.195 0 1.94-.793 1.94-1.783C4.835 1.771 4.113 1 2.94 1S1 1.771 1 2.783c0 .99.744 1.783 1.895 1.783h.023ZM9.96 16.292V10.53c0-.308.022-.617.112-.836.248-.617.813-1.255 1.76-1.255 1.241 0 1.738.946 1.738 2.333v5.52h3.429v-5.916c0-3.169-1.692-4.644-3.949-4.644-1.819 0-2.635 1-3.09 1.703V5.974H6.53c.045.968 0 10.318 0 10.318h3.43Z"
            fill="currentColor"
          />
        </svg>
      );
    case "email":
      return (
        <svg {...commonProps}>
          <path
            d="M1 6.286v7.354a2.571 2.571 0 0 0 2.571 2.571H16.43A2.571 2.571 0 0 0 19 13.64V6.286l-7.653 4.708a2.57 2.57 0 0 1-2.694 0L1 6.286Z"
            fill="currentColor"
            transform="translate(-1 -1)"
          />
          <path
            d="M18 3.707v-.136A2.571 2.571 0 0 0 15.429 1H2.571A2.571 2.571 0 0 0 0 3.571v.136l8.326 5.124a1.286 1.286 0 0 0 1.348 0L18 3.707Z"
            fill="currentColor"
          />
        </svg>
      );
  }
}

export function ArticleShare({ content }: ArticleShareProps) {
  return (
    <section
      aria-labelledby="article-share-title"
      className="flex flex-col items-center gap-2 bg-canvas pt-15 pb-14.25 tablet:gap-5 tablet:pt-0"
    >
      <h2
        id="article-share-title"
        className="font-label text-base leading-[1.2] uppercase"
      >
        Share
      </h2>

      <div className="flex gap-2.5">
        {sharePlatforms.map(({ platform, label }) => {
          const href = getShareHref(platform, content);
          const className =
            "grid size-10 place-items-center rounded-full border border-foreground text-foreground";

          if (!href) {
            return (
              <button
                key={platform}
                type="button"
                disabled
                aria-label={`Share on ${label}`}
                className={`${className} disabled:cursor-default disabled:opacity-100`}
              >
                <ShareIcon platform={platform} />
              </button>
            );
          }

          const opensNewWindow = platform !== "email";

          return (
            <a
              key={platform}
              href={href}
              aria-label={`Share ${content.title} on ${label}`}
              className={className}
              target={opensNewWindow ? "_blank" : undefined}
              rel={opensNewWindow ? "noreferrer" : undefined}
            >
              <ShareIcon platform={platform} />
            </a>
          );
        })}
      </div>
    </section>
  );
}
