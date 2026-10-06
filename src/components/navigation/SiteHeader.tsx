import { PageContainer } from "@/components/layout";
import { BrandLogo } from "./BrandLogo";
import { MobileNavigation } from "./MobileNavigation";
import { PrimaryNavigation, type NavigationItem } from "./PrimaryNavigation";
import { SiteHeaderFrame } from "./SiteHeaderFrame";

export type SiteHeaderProps = Readonly<{
  items: readonly NavigationItem[];
  overlayUntilId?: string;
}>;

export function SiteHeader({ items, overlayUntilId }: SiteHeaderProps) {
  return (
    <SiteHeaderFrame overlayUntilId={overlayUntilId}>
      <PageContainer className="relative flex h-full items-center">
        <BrandLogo />

        <div className="ml-auto flex items-center gap-1 laptop:gap-6 wide:gap-8.75">
          <PrimaryNavigation items={items} />
          <MobileNavigation items={items} />
        </div>

        <span
          aria-hidden="true"
          className="pointer-events-none absolute bottom-0 left-page-x-mobile right-page-x-mobile border-b border-rule transition-colors duration-300 group-data-[overlay=true]:border-white/60 motion-reduce:transition-none tablet:left-page-x tablet:right-page-x"
        />
      </PageContainer>
    </SiteHeaderFrame>
  );
}
