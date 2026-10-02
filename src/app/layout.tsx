import type { Metadata } from "next";
import localFont from "next/font/local";
import type { ReactNode } from "react";

import "./globals.css";
import { cn } from "@/lib/utils";

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
  preload: false,
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

const rosart = localFont({
  src: [
    {
      path: "../../public/fonts/Rosart-normal-400-100.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Rosart-italic-400-100.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../../public/fonts/Rosart SemiBold-normal-600-100.ttf",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-rosart",
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  title: "Sequoia",
  description: "Design and ideas inspired by nature.",
};

type RootLayoutProps = Readonly<{
  children: ReactNode;
}>;

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html
      lang="en"
      className={cn(
        unica77.variable,
        pitchSans.variable,
        rosart.variable,
        "font-sans",
      )}
    >
      <body>{children}</body>
    </html>
  );
}
