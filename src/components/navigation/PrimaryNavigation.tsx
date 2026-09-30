import Link from "next/link";

export type NavigationItem = Readonly<{
  label: string;
  href: string;
}>;

type PrimaryNavigationProps = Readonly<{
  items: readonly NavigationItem[];
}>;

export function PrimaryNavigation({ items }: PrimaryNavigationProps) {
  return (
    <nav aria-label="Primary navigation" className="hidden tablet:block">
      <ul className="flex items-center gap-0 laptop:gap-7 wide:gap-[46px]">
        {items.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="whitespace-nowrap font-label text-[14px] leading-[21px] uppercase"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
