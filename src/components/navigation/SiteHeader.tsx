import { PageContainer } from "@/components/layout";
import { BrandLogo } from "./BrandLogo";
import { MobileNavigation } from "./MobileNavigation";
import { PrimaryNavigation, type NavigationItem } from "./PrimaryNavigation";

type SiteHeaderProps = Readonly<{
  items: readonly NavigationItem[];
}>;

export function SiteHeader({ items }: SiteHeaderProps) {
  return (
    <header className="fixed inset-x-0 top-0 z-9999 h-header bg-canvas">
      <PageContainer className="relative flex h-full items-center">
        <BrandLogo />

        <div className="ml-auto flex items-center gap-1 laptop:gap-6 wide:gap-8.75">
          <PrimaryNavigation items={items} />
          <MobileNavigation items={items} />
        </div>

        <span
          aria-hidden="true"
          className="pointer-events-none absolute bottom-0 left-page-x-mobile right-page-x-mobile border-b border-rule tablet:left-page-x tablet:right-page-x"
        />
      </PageContainer>
    </header>
  );
}
