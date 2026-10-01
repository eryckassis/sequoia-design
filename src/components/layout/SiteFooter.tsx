import { PageContainer } from "./PageContainer";

function SequoiaMark() {
  return (
    <svg
      viewBox="0 0 24 24.043"
      xmlns="http://www.w3.org/2000/svg"
      className="size-[0.78em] shrink-0"
      aria-hidden="true"
      focusable="false"
    >
      <path
        fill="currentColor"
        d="M18.18.248H24v5.88h-5.82V.248ZM3.63 18.708V.248H.72v21.43l2.91-2.97ZM5.67 20.828l-2.91 2.94H24v-2.94H5.67ZM9.45 12.858V.248H6.54v15.55l2.91-2.94ZM11.49 14.948l-2.92 2.94H24v-2.94H11.49ZM15.26 7.008V.248h-2.91v9.67l2.91-2.91ZM17.31 9.068l-2.9 2.94H24v-2.94h-6.69Z"
      />
    </svg>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-brand text-canvas">
      <PageContainer className="flex min-h-64 items-end py-12 tablet:min-h-80 tablet:py-16 wide:min-h-96 wide:py-20">
        <div className="flex w-full items-end justify-center gap-[0.12em] font-display text-[clamp(3rem,15vw,13.5rem)] leading-[0.78] tracking-[-0.055em]">
          <span>SEQUOIA</span>
          <SequoiaMark />
        </div>
      </PageContainer>
    </footer>
  );
}
