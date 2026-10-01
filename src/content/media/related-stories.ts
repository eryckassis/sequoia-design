import type { StoryMedia } from "@/components/article";

type RelatedStoryMediaKey =
  | "thisIsAgi"
  | "startupStages"
  | "generativeAiAct"
  | "newEra";

export const relatedStoryMedia = {
  thisIsAgi: {
    kind: "image",
    src: "https://framerusercontent.com/images/OIU4R6DkGeDBA3fY2ksnNV09iI.webp?width=920&height=920",
  },
  startupStages: {
    kind: "video",
    src: "https://framerusercontent.com/assets/UFkCPkpyuuo7nsvkY5oUK91dTqI.mp4",
  },
  generativeAiAct: {
    kind: "image",
    src: "https://framerusercontent.com/images/X3tOtZzP9z74Lyl8mrpy7vlMAQ.webp?width=920&height=921",
  },
  newEra: {
    kind: "video",
    src: "https://framerusercontent.com/assets/ZJcYQwL2PAEB5UTmxplQKCock3k.mp4",
  },
} as const satisfies Record<RelatedStoryMediaKey, StoryMedia>;
