import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "WokeOnPaper — Nonprofit Satire Media",
  description:
    "WokeOnPaper is a satirical media space for people who work in the social sector.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
