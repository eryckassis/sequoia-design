import type { Metadata } from "next";
import localFont from "next/font/local";
import type { ReactNode } from "react";

import "./globals.css";

const unica77 = localFont({
  src: [
    {
      path: "../../public/fonts/Unica77 Web-normal-400-100.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-unica77",
  display: "swap",
});

const pitchSans = localFont({
  src: [
    {
      path: "../../public/fonts/Copyright Klim Type Foundry-normal-400-100.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-pitch-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Services: The New Software | Sequoia",
  description: "Services: The New Software, by Eryck Assis.",
};

type RootLayoutProps = Readonly<{
  children: ReactNode;
}>;

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className={`${unica77.variable} ${pitchSans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
