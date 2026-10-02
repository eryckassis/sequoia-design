import type { Metadata } from "next";

import { ArticleHero } from "@/components/article";
import { HomeStories } from "@/components/home";
import { SkipLink, SiteFooter } from "@/components/layout";
import { SiteHeader } from "@/components/navigation";
import { homeHeroContent, homeStories } from "@/content/home";
import { primaryNavigation } from "@/content/navigation";

export const metadata: Metadata = {
  title: "Sequoia — Design and ideas inspired by nature",
  description:
    "Independent perspectives on design, technology and the creative process.",
};

export default function Home() {
  return (
    <>
      <SkipLink />
      <SiteHeader items={primaryNavigation} />

      <main id="main-content">
        <ArticleHero content={homeHeroContent} />
        <HomeStories stories={homeStories} />
      </main>

      <SiteFooter />
    </>
  );
}
