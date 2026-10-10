import { PageContainer } from "@/components/layout";
import type { NotePostContent } from "@/content/editorial";

import { NotePost } from "./NotePost";

type NotesSectionProps = Readonly<{
  posts: readonly NotePostContent[];
  title?: string;
  headingId?: string;
}>;

export function NotesSection({
  posts,
  title = "Notes",
  headingId = "notes-feed-title",
}: NotesSectionProps) {
  if (posts.length === 0) {
    return null;
  }

  return (
    <section
      aria-labelledby={headingId}
      className="bg-canvas py-16 tablet:py-24"
    >
      <h2 id={headingId} className="sr-only">
        {title}
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
