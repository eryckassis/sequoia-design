import type {
  EditorialEntry,
  EditorialHeroContent,
  EditorialMetadata,
  EditorialShareContent,
  NotePostContent,
} from "@/content/editorial/types";
import { tendencesHeroImage } from "@/content/media";

export const tendencesMetadata = {
  title: "Tendences",
  description: "Perspectives on design, technology, and emerging behavior.",
} as const satisfies EditorialMetadata;

export const tendencesHeroContent = {
  title: "Tendences",
  author: {
    name: "Eryck Assis",
    href: "/founder",
  },
  publishedAt: "2026-10-09",
  publishedLabel: "October 9, 2026",
  subtitle: "Perspectives on design, technology, and emerging behavior.",
  image: tendencesHeroImage,
} as const satisfies EditorialHeroContent;

export const tendencesPosts = [
  {
    id: "first-tendence",
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
    publishedAt: "2026-10-09",
    publishedLabel: "Oct 9",
    paragraphs: [
      "As cores terrosas vêm ganhando destaque nas tendências divulgadas pela Pantone. Tons como argila, terracota e areia transmitem aconchego, elegância e uma conexão com a natureza. Essas tonalidades são cada vez mais utilizadas no design, na moda e em ambientes internos, refletindo um desejo por equilíbrio e autenticidade.",
    ],
    media: {
      kind: "image",
      image: {
        src: "/images/notes/imagem.png",
        alt: "Descriptive alternative text for the image.",
      },
    },
  },
] as const satisfies readonly NotePostContent[];

export const tendencesShareContent = {
  title: "Tendences",
} as const satisfies EditorialShareContent;

export const tendencesEditorialEntry = {
  slug: "tendences",
  href: "/tendences",
  metadata: tendencesMetadata,
  hero: tendencesHeroContent,
  posts: tendencesPosts,
  share: tendencesShareContent,
} as const satisfies EditorialEntry;
