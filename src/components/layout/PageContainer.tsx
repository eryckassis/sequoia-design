import type { ReactNode } from "react";

type PageContainerProps = Readonly<{
  children: ReactNode;
  className?: string;
}>;

export function PageContainer({
  children,
  className = "",
}: PageContainerProps) {
  return (
    <div
      className={`mx-auto w-full max-w-site px-page-x-mobile tablet:px-page-x ${className}`}
    >
      {children}
    </div>
  );
}
