import type { ArticleHeroContent } from "@/components/article";
import type { RelatedStory } from "@/components/stories";
import { relatedStoryMedia } from "@/content/media";

export const homeHeroContent = {
  title: "A Place Where My Perspectives Ideas and Trends Come to Life",
  techText: {
    text: "Sequoia",
    fontWeight: 400,
    color: "#1b1917",
    accentColor: "#007354",
    reach: 140,
    softness: 0.7,
    reveal: "letter",
    selection: true,
    labels: true,
    draggable: true,
    sweep: true,
  },
} as const satisfies ArticleHeroContent;

export const homeStories = [
  {
    category: "Perspective",
    title: "Sequoia: Design and Ideas",
    author: "Eryck Assis",
    href: "/stories/sequoia-design-and-ideas",
    media: {
      kind: "image",
      src: "/images/cards/image-card.png",
    },
  },
  {
    category: "Perspective",
    title: "2026: um ano para desacelerar.",
    author: "Eryck Assis",
    href: "/stories/2026-this-is-agi",
    media: {
      kind: "image",
      src: "/images/cards/sun.png",
    },
  },
  {
    category: "Perspective",
    title: "The Opening, Midgame and Endgame in Startups",
    author: "Eryck Assis",
    media: relatedStoryMedia.startupStages,
  },
  {
    category: "Perspective",
    title: "Generative AI’s Act o1",
    author: "Eryck Assis",
    media: relatedStoryMedia.generativeAiAct,
  },
  {
    category: "Perspective",
    title: "Building for a New Era",
    author: "Eryck Assis",
    media: relatedStoryMedia.newEra,
  },
] as const satisfies readonly RelatedStory[];
