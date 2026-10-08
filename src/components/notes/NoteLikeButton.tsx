"use client";

import PulseHeart from "@/components/PulseHeart";

type NoteLikeButtonProps = Readonly<{
  postId: string;
}>;

export function NoteLikeButton({ postId }: NoteLikeButtonProps) {
  return (
    <span data-post-id={postId}>
      <PulseHeart
        icon="heart"
        showCount={true}
        size={20}
        corner={999}
        pillColor="transparent"
        likedColor="var(--ds-color-green-700)"
        idleColor="color-mix(in srgb, var(--ds-color-ink-950) 60%, transparent)"
        textColor="var(--ds-color-ink-950)"
        label="Like this note"
      />
    </span>
  );
}
