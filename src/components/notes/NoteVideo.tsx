"use client";

import { Pause, Play, Volume2, VolumeX } from "lucide-react";
import { useRef, useState } from "react";

import type { NotePostMedia } from "@/content/editorial";

type VideoMedia = Extract<NotePostMedia, { kind: "video" }>;

type NoteVideoProps = Readonly<{
  media: VideoMedia;
}>;

export function NoteVideo({ media }: NoteVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  function togglePlayback() {
    const video = videoRef.current;

    if (!video) {
      return;
    }

    if (video.paused) {
      void video.play().catch(() => {
        setIsPlaying(false);
      });

      return;
    }

    video.pause();
  }

  function toggleMuted() {
    const video = videoRef.current;

    if (!video) {
      return;
    }

    video.muted = !video.muted;
    setIsMuted(video.muted);
  }

  return (
    <div className="relative mt-6 aspect-video overflow-hidden rounded-2xl border border-rule bg-black">
      <video
        ref={videoRef}
        playsInline
        preload="metadata"
        poster={media.poster}
        aria-label={media.title}
        onClick={togglePlayback}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onEnded={() => setIsPlaying(false)}
        onVolumeChange={(event) => {
          setIsMuted(event.currentTarget.muted);
        }}
        className="size-full cursor-pointer object-cover"
      >
        <source src={media.src} type="video/mp4" />
        Your browser does not support embedded videos.
      </video>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 flex items-center justify-between bg-gradient-to-t from-black/70 to-transparent p-3">
        <button
          type="button"
          onClick={togglePlayback}
          aria-label={isPlaying ? "Pause video" : "Play video"}
          className="pointer-events-auto grid size-10 place-items-center rounded-full bg-black/65 text-white transition-colors hover:bg-black focus-visible:outline-white"
        >
          {isPlaying ? (
            <Pause aria-hidden="true" className="size-3" fill="currentColor" />
          ) : (
            <Play
              aria-hidden="true"
              className="size-3 translate-x-px"
              fill="currentColor"
            />
          )}
        </button>

        <button
          type="button"
          onClick={toggleMuted}
          aria-pressed={isMuted}
          aria-label={isMuted ? "Unmute video" : "Mute video"}
          className="pointer-events-auto grid size-10 place-items-center rounded-full bg-black/65 text-white transition-colors hover:bg-black focus-visible:outline-white"
        >
          {isMuted ? (
            <VolumeX aria-hidden="true" className="size-3" />
          ) : (
            <Volume2 aria-hidden="true" className="size-3" />
          )}
        </button>
      </div>
    </div>
  );
}
