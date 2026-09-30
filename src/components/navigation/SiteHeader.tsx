import { PageContainer } from "@/components/layout";
import { BrandLogo } from "./BrandLogo";
import { PrimaryNavigation, type NavigationItem } from "./PrimaryNavigation";
import { SearchIcon } from "./SearchIcon";

type SiteHeaderProps = Readonly<{
  items: readonly NavigationItem[];
}>;

export function SiteHeader({ items }: SiteHeaderProps) {
  return (
    <header className="fixed inset-x-0 top-0 z-10 h-header bg-canvas">
      <PageContainer className="relative flex h-full items-center">
        <BrandLogo />

        <div className="ml-auto flex items-center gap-1 laptop:gap-6 wide:gap-[35px]">
          <PrimaryNavigation items={items} />
          <SearchIcon />
        </div>

        <span
          aria-hidden="true"
          className="pointer-events-none absolute bottom-0 left-page-x-mobile right-page-x-mobile border-b border-rule tablet:left-page-x tablet:right-page-x"
        />
      </PageContainer>
    </header>
  );
}
