import type { Metadata } from "next";

import {
  ArticleFooter,
  EDITORIAL_HERO_TITLE_PANEL_ID,
  EditorialHero,
} from "@/components/article";
import { SkipLink, SiteFooter } from "@/components/layout";
import { SiteHeader } from "@/components/navigation";
import { NotesSection } from "@/components/notes";
import { getEditorialEntry } from "@/content/editorial";
import { primaryNavigation } from "@/content/navigation";
import { relatedStories } from "@/content/related-stories";

const notes = getEditorialEntry("notes");

export const metadata: Metadata = notes.metadata;

export default function NotesPage() {
  return (
    <>
      <SkipLink />

      <SiteHeader
        items={primaryNavigation}
        overlayUntilId={EDITORIAL_HERO_TITLE_PANEL_ID}
      />

      <main id="main-content">
        <article>
          <EditorialHero content={notes.hero} />

          <NotesSection posts={notes.posts} />
          <ArticleFooter share={notes.share} stories={relatedStories} />
        </article>
      </main>

      <SiteFooter />
    </>
  );
}
