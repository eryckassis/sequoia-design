"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { PageContainer } from "@/components/layout";
import { BrandLogo } from "./BrandLogo";
import type { NavigationItem } from "./PrimaryNavigation";

type MobileNavigationProps = Readonly<{
  items: readonly NavigationItem[];
}>;

export function MobileNavigation({ items }: MobileNavigationProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (isOpen && !dialog.open) {
      dialog.showModal();
    }
    if (!isOpen && dialog.open) {
      dialog.close();
    }
  }, [isOpen]);

  function closeMenu() {
    dialogRef.current?.close();
  }

  return (
    <>
      <button
        type="button"
        aria-label="Open menu"
        aria-controls="mobile-navigation"
        aria-expanded={isOpen}
        onClick={() => setIsOpen(true)}
        className="relative flex size-12 shrink-0 items-center justify-center text-foreground-strong transition-colors duration-300 focus-visible:outline-1 focus-visible:outline-offset-2 group-data-[overlay=true]:text-white motion-reduce:transition-none tablet:hidden"
      >
        <MenuIcon />
      </button>

      <dialog
        ref={dialogRef}
        id="mobile-navigation"
        aria-labelledby="mobile-navigation-title"
        onClose={() => setIsOpen(false)}
        className="fixed inset-0 m-0 h-dvh max-h-none w-full max-w-none overflow-hidden border-0 bg-canvas p-0 text-foreground backdrop:bg-canvas"
      >
        <div className="flex h-full flex-col">
          <div className="h-header shrink-0">
            <PageContainer className="relative flex h-full items-center justify-between">
              <BrandLogo />

              <button
                autoFocus
                type="button"
                aria-label="Close menu"
                onClick={closeMenu}
                className="relative flex size-12 shrink-0 items-center justify-center text-foreground-strong focus-visible:outline-1 focus-visible:outline-offset-2"
              >
                <CloseIcon />
              </button>

              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-page-x-mobile bottom-0 border-b border-rule"
              />
            </PageContainer>
          </div>

          <h2 id="mobile-navigation-title" className="sr-only">
            Primary navigation
          </h2>

          <div className="mt-auto pb-[max(1.5rem,env(safe-area-inset-bottom))]">
            <PageContainer>
              <nav aria-label="Primary navigation">
                <ul className="grid grid-cols-4 gap-x-3">
                  {items.map((item) => (
                    <li
                      key={item.href}
                      className="col-span-4 border-t border-rule last:border-b"
                    >
                      <Link
                        href={item.href}
                        onClick={closeMenu}
                        className="flex min-h-21.5 items-center py-6 font-label text-[2rem] leading-[1.2] uppercase focus-visible:outline-1 focus-visible:outline-offset-[-2px]"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </PageContainer>
          </div>
        </div>
      </dialog>
    </>
  );
}

function MenuIcon() {
  return (
    <span aria-hidden="true" className="relative block h-4 w-7">
      <span className="absolute inset-x-0 top-0 h-px bg-current" />
      <span className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-current" />
      <span className="absolute inset-x-0 bottom-0 h-px bg-current" />
    </span>
  );
}

function CloseIcon() {
  return (
    <span aria-hidden="true" className="relative block size-7">
      <span className="absolute left-1/2 top-1/2 h-px w-8 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-current" />
      <span className="absolute left-1/2 top-1/2 h-px w-8 -translate-x-1/2 -translate-y-1/2 -rotate-45 bg-current" />
    </span>
  );
}
