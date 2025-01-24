import dynamic from "next/dynamic";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";

import "./globals.css";
import "./globals-pattern.css";
import { PostHogProvider } from "./post-hog-provider";
import { PatternWrapper } from "./pattern-wrapper";

const PostHogView = dynamic(() => import("./post-hog-view"), {
  ssr: false,
});

export const metadata: Metadata = {
  generator: "Next.js",
  title: "Manav Patel",
  description:
    "Welcome to Manav Patel's personal website. Discover my web development projects, skills, and experience in web development.",
  applicationName: "Manav Patel's Portfolio",
  keywords: [
    "Manav Patel",
    "Manav",
    "Manav Portfolio",
    "Manav's Portfolio",
  ],
  authors: [{ name: "Manav Patel" }, { name: "Manav" }],
  creator: "Manav",
  openGraph: {
    title: "Manav",
    description:
      "Explore Manav's personal website showcasing projects, skills, and experience in web development.",
    url: "https://manavpatel.codes",
    type: "website",
    siteName: "Manav Patel",
    locale: "en_UK",
    images: [
      {
        url: "https://jiseeeh.codes/og.png",
        width: 800,
        height: 600,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@Jiseeeh",
    creator: "@Jiseeeh",
    title: "John Carlo Camara",
    description:
      "Explore Jiseeeh's personal website showcasing projects, skills, and experience in web development.",
    images: ["https://jiseeeh.codes/og.png"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <PostHogProvider>
        <PatternWrapper>
          <PostHogView />
          <main>{children}</main>
          <SpeedInsights />
        </PatternWrapper>
      </PostHogProvider>
    </html>
  );
}
