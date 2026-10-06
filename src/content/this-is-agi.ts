import type { ThisIsAgiHeroContent } from "@/components/article";
import { thisIsAgiHeroImage } from "@/content/media";

export type ThisIsAgiPageContent = Readonly<{
  metadata: Readonly<{
    title: string;
    description: string;
  }>;
  hero: ThisIsAgiHeroContent;
}>;

export const thisIsAgiPageContent = {
  metadata: {
    title: "2026: This is AGI",
    description:
      "Saddle up: Your dreams for 2030 just became possible for 2026.",
  },
  hero: {
    title: "2026: This is AGI",
    author: {
      name: "Eryck Assis",
      href: "/founder",
    },
    publishedAt: "2026-10-05",
    publishedLabel: "October 5, 2026",
    subtitle:
      "Saddle up: Your dreams for 2030 just became possible for 2026.",
    image: thisIsAgiHeroImage,
  },
} as const satisfies ThisIsAgiPageContent;
