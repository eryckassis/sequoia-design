import { notesEditorialEntry } from "@/content/notes";
import { thisIsAgiEditorialEntry } from "@/content/this-is-agi";
import type { EditorialEntry } from "./types";

export const editorialEntries = {
  [thisIsAgiEditorialEntry.slug]: thisIsAgiEditorialEntry,
  [notesEditorialEntry.slug]: notesEditorialEntry,
} as const satisfies Record<string, EditorialEntry>;

export type EditorialSlug = keyof typeof editorialEntries;

export function getEditorialEntry<const TSlug extends EditorialSlug>(
  slug: TSlug,
): (typeof editorialEntries)[TSlug] {
  return editorialEntries[slug];
}
