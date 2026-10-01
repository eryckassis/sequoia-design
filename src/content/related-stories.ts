import type { RelatedStory } from "@/components/article";
import { relatedStoryMedia } from "@/content/media";

export const relatedStories = [
  {
    category: "Perspective",
    title: "2026: This is AGI",
    author: "Eryck Assis",
    media: relatedStoryMedia.thisIsAgi,
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
    category: "News",
    title: "Building for a New Era",
    author: "Sequoia",
    media: relatedStoryMedia.newEra,
  },
] as const satisfies readonly RelatedStory[];
