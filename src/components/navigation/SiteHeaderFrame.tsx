"use client";

import { useEffect, useState, type ReactNode } from "react";

const headerHeight = 96;

type SiteHeaderFrameProps = Readonly<{
  children: ReactNode;
  overlayUntilId?: string;
}>;

export function SiteHeaderFrame({
  children,
  overlayUntilId,
}: SiteHeaderFrameProps) {
  if (!overlayUntilId) {
    return <HeaderElement isOverlay={false}>{children}</HeaderElement>;
  }

  return (
    <ObservedHeaderElement overlayUntilId={overlayUntilId}>
      {children}
    </ObservedHeaderElement>
  );
}

type ObservedHeaderElementProps = Readonly<{
  children: ReactNode;
  overlayUntilId: string;
}>;

function ObservedHeaderElement({
  children,
  overlayUntilId,
}: ObservedHeaderElementProps) {
  const [isOverlay, setIsOverlay] = useState(true);

  useEffect(() => {
    const target = document.getElementById(overlayUntilId);
    if (!target) {
      return;
    }

    const updateTheme = (bottom: number) => {
      setIsOverlay(bottom > headerHeight);
    };

    const animationFrame = requestAnimationFrame(() => {
      updateTheme(target.getBoundingClientRect().bottom);
    });

    const observer = new IntersectionObserver(
      ([entry]) => updateTheme(entry.boundingClientRect.bottom),
      {
        rootMargin: `-${headerHeight}px 0px 0px`,
        threshold: 0,
      },
    );

    observer.observe(target);

    return () => {
      cancelAnimationFrame(animationFrame);
      observer.disconnect();
    };
  }, [overlayUntilId]);

  return <HeaderElement isOverlay={isOverlay}>{children}</HeaderElement>;
}

type HeaderElementProps = Readonly<{
  children: ReactNode;
  isOverlay: boolean;
}>;

function HeaderElement({ children, isOverlay }: HeaderElementProps) {
  return (
    <header
      data-overlay={isOverlay}
      className="group fixed inset-x-0 top-0 z-[9999] h-header bg-canvas text-foreground transition-colors duration-300 data-[overlay=true]:bg-transparent data-[overlay=true]:text-white motion-reduce:transition-none"
    >
      {children}
    </header>
  );
}
