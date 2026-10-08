import { PageContainer } from "@/components/layout";
import type { NotePostContent } from "@/content/editorial";

import { NotePost } from "./NotePost";

type NotesSectionProps = Readonly<{
  posts: readonly NotePostContent[];
}>;

export function NotesSection({ posts }: NotesSectionProps) {
  if (posts.length === 0) {
    return null;
  }

  return (
    <section
      aria-labelledby="notes-feed-title"
      className="bg-canvas py-16 tablet:py-24"
    >
      <h2 id="notes-feed-title" className="sr-only">
        Notes
      </h2>

      <PageContainer>
        <div className="mx-auto w-full max-w-article-frame border-x border-rule">
          <div className="border-t border-rule">
            {posts.map((post) => (
              <NotePost key={post.id} post={post} />
            ))}
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
