import type { RelatedStory } from "@/components/stories";
import { ArticleShare, type ArticleShareContent } from "./ArticleShare";
import { RelatedStories } from "./RelatedStories";

export type ArticleFooterProps = Readonly<{
  share: ArticleShareContent;
  stories: readonly RelatedStory[];
}>;

export function ArticleFooter({ share, stories }: ArticleFooterProps) {
  return (
    <footer className="bg-canvas">
      <ArticleShare content={share} />
      <RelatedStories stories={stories} />
    </footer>
  );
}
