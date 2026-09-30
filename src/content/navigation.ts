import type { NavigationItem } from "@/components/navigation";

export const primaryNavigation = [
  {
    label: "Our Founders",
    href: "/our-founders",
  },
  {
    label: "Our Companies",
    href: "/our-companies",
  },
  {
    label: "Our Team",
    href: "/our-team",
  },
  {
    label: "Stories",
    href: "/stories",
  },
  {
    label: "Podcasts",
    href: "/podcasts",
  },
  {
    label: "Arc",
    href: "/arc",
  },
] as const satisfies readonly NavigationItem[];
