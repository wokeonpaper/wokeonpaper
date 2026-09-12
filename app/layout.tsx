import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://wokeonpaper.com"),
  title: {
    default: "WokeOnPaper — Nonprofit Satire Media",
    template: "%s | WokeOnPaper",
  },
  description:
    "WokeOnPaper is a satirical media space for people who work in the social sector.",
  openGraph: {
    title: "WokeOnPaper — Nonprofit Satire Media",
    description:
      "WokeOnPaper is a satirical media space for people who work in the social sector.",
    url: "https://wokeonpaper.com",
    siteName: "WokeOnPaper",
    images: [
      {
        url: "/wokeonpaper/wop/logo.png",
        width: 800,
        height: 800,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "WokeOnPaper — Nonprofit Satire Media",
    description:
      "WokeOnPaper is a satirical media space for people who work in the social sector.",
    images: ["/wokeonpaper/wop/logo.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
