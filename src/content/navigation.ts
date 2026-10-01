import type { NavigationItem } from "@/components/navigation";

export const primaryNavigation = [
  {
    label: "Founder",
    href: "/founder",
  },
  {
    label: "Notes",
    href: "/notes",
  },
  {
    label: "Tendences",
    href: "/tendences",
  },
  {
    label: "Stories",
    href: "/stories",
  },
  {
    label: "About Me",
    href: "/about-me",
  },
  {
    label: "Arc",
    href: "/arc",
  },
] as const satisfies readonly NavigationItem[];
