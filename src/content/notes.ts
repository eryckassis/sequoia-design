import type {
  EditorialEntry,
  EditorialHeroContent,
  EditorialMetadata,
  EditorialShareContent,
  NotePostContent,
} from "@/content/editorial/types";
import { notesHeroImage } from "@/content/media";

export const notesMetadata = {
  title: "Notes",
  description: "Notes on design, technology, and what comes next.",
} as const satisfies EditorialMetadata;

export const notesHeroContent = {
  title: "Notes",
  author: {
    name: "Eryck Assis",
    href: "/founder",
  },
  publishedAt: "2026-10-07",
  publishedLabel: "October 7, 2026",
  subtitle: "Notes on design, technology, and what comes next.",
  image: notesHeroImage,
} as const satisfies EditorialHeroContent;

export const notesPosts = [
  // {
  //   id: "design-should-feel-calm",
  //   author: {
  //     name: "Eryck Assis",
  //     handle: "eryckassis",
  //     href: "/founder",
  //     verified: true,
  //     avatar: {
  //       src: "/images/notes/eryck-perfil.png",
  //       alt: "Eryck Assis",
  //     },
  //   },
  //   publishedAt: "2026-10-07",
  //   publishedLabel: "Oct 7",
  //   paragraphs: [
  //     "Good design should make complex systems feel calm, legible, and intentional.",
  //   ],
  // },
  // {
  //   id: "design-should-be",
  //   author: {
  //     name: "Eryck Assis",
  //     handle: "eryckassis",
  //     href: "/founder",
  //     verified: true,
  //     avatar: {
  //       src: "/images/notes/eryck-perfil.png",
  //       alt: "Eryck Assis",
  //     },
  //   },
  //   publishedAt: "2026-10-07",
  //   publishedLabel: "Oct 7",
  //   paragraphs: [
  //     "Good design should make complex systems feel calm, legible, and intentional.",
  //   ],
  // },
  {
    id: "technology-and-attention",
    author: {
      name: "Eryck Assis",
      handle: "eryckassis",
      href: "/founder",
      verified: true,
      avatar: {
        src: "/images/notes/eryck-perfil.png",
        alt: "Eryck Assis",
      },
    },
    publishedAt: "2026-10-07",
    publishedLabel: "Oct 8",
    paragraphs: [
      "O design não se limita ao que é considerado digital ou tecnológico;",
      "ele está presente em tudo ao nosso redor. A própria vida carrega seu design único, e poucos têm a sensibilidade para apreciá-lo com apreço.",
    ],
    media: {
      kind: "image",
      image: {
        src: "/images/notes/golder.png",
        alt: "Descriptive alternative text for the image.",
      },
    },
  },
] as const satisfies readonly NotePostContent[];

export const notesShareContent = {
  title: "Notes",
} as const satisfies EditorialShareContent;

export const notesEditorialEntry = {
  slug: "notes",
  href: "/notes",
  metadata: notesMetadata,
  hero: notesHeroContent,
  posts: notesPosts,
  share: notesShareContent,
} as const satisfies EditorialEntry;
