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

const tendences = getEditorialEntry("tendences");

export const metadata: Metadata = tendences.metadata;

export default function TendencesPage() {
  return (
    <>
      <SkipLink />

      <SiteHeader
        items={primaryNavigation}
        overlayUntilId={EDITORIAL_HERO_TITLE_PANEL_ID}
      />

      <main id="main-content">
        <article>
          <EditorialHero content={tendences.hero} />

          <NotesSection
            posts={tendences.posts}
            title="Tendences"
            headingId="tendences-feed-title"
          />

          <ArticleFooter share={tendences.share} stories={relatedStories} />
        </article>
      </main>

      <SiteFooter />
    </>
  );
}
