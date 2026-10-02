import { PageContainer } from "@/components/layout";
import { StoryCard, type RelatedStory } from "@/components/stories";

type HomeStoriesProps = Readonly<{
  stories: readonly RelatedStory[];
}>;

export function HomeStories({ stories }: HomeStoriesProps) {
  return (
    <section
      id="stories"
      aria-labelledby="home-stories-title"
      className="scroll-mt-header bg-canvas pb-20 tablet:pb-24 wide:pb-32"
    >
      <h2 id="home-stories-title" className="sr-only">
        Stories
      </h2>

      <PageContainer>
        <div className="grid grid-cols-1 laptop:grid-cols-2">
          {stories.map((story) => (
            <StoryCard
              key={`${story.category}-${story.title}`}
              story={story}
              variant="featured"
            />
          ))}
        </div>
      </PageContainer>
    </section>
  );
}
