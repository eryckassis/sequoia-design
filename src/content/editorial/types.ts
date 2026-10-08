import type { ImageProps } from "next/image";

export type EditorialMetadata = Readonly<{
  title: string;
  description: string;
}>;

export type EditorialImage = Readonly<Pick<ImageProps, "src" | "alt">>;

export type EditorialAuthor = Readonly<{
  name: string;
  href: string;
}>;

export type EditorialHeroContent = Readonly<{
  title: string;
  author: EditorialAuthor;
  publishedAt: string;
  publishedLabel: string;
  subtitle: string;
  image: EditorialImage;
}>;

export type EditorialIntroContent = Readonly<{
  lead: string;
  overview: string;
  sectionTitle: string;
  thesis: Readonly<{
    prefix: string;
    firstTerm: string;
    middle: string;
    secondTerm: string;
    suffix: string;
  }>;
  explanation: string;
  conclusion: string;
}>;

export type EditorialContinuationContent = Readonly<{
  sections: readonly Readonly<{
    id: string;
    heading: string;
    paragraphs: readonly string[];
  }>[];
  items: readonly Readonly<{
    label: string;
    description: string;
  }>[];
  closing: string;
  callToAction: string;
}>;

export type EditorialShareContent = Readonly<{
  title: string;
  url?: string;
}>;

export type EditorialEntry = Readonly<{
  slug: string;
  href: `/${string}`;
  metadata: EditorialMetadata;
  hero: EditorialHeroContent;
  intro?: EditorialIntroContent;
  continuation?: EditorialContinuationContent;
  share?: EditorialShareContent;
  posts?: readonly NotePostContent[];
}>;

export type NotePostAuthor = Readonly<{
  name: string;
  handle: string;
  href?: string;
  verified?: boolean;
  avatar?: EditorialImage;
}>;

export type NotePostMedia =
  | Readonly<{
      kind: "image";
      image: EditorialImage;
    }>
  | Readonly<{
      kind: "video";
      src: string;
      title: string;
      poster?: string;
    }>;

export type NotePostContent = Readonly<{
  id: string;
  author: NotePostAuthor;
  publishedAt: string;
  publishedLabel: string;
  paragraphs: readonly string[];
  media?: NotePostMedia;
}>;
