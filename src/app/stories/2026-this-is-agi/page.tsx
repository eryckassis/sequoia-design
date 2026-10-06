import type { Metadata } from "next";

import {
  THIS_IS_AGI_TITLE_PANEL_ID,
  ThisIsAgiHero,
} from "@/components/article";
import { SkipLink, SiteFooter } from "@/components/layout";
import { SiteHeader } from "@/components/navigation";
import { primaryNavigation } from "@/content/navigation";
import { thisIsAgiPageContent } from "@/content/this-is-agi";

export const metadata: Metadata = thisIsAgiPageContent.metadata;

export default function ThisIsAgiPage() {
  return (
    <>
      <SkipLink />
      <SiteHeader
        items={primaryNavigation}
        overlayUntilId={THIS_IS_AGI_TITLE_PANEL_ID}
      />

      <main id="main-content">
        <article>
          <ThisIsAgiHero content={thisIsAgiPageContent.hero} />
        </article>
      </main>

      <SiteFooter />
    </>
  );
}
