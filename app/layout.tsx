import type { Metadata, Viewport } from "next";
import { Geist, Inter } from "next/font/google";
import { agency } from "@/lib/agency";
import "./globals.css";
import "./landing.css";
import "../components/agency/studio-showcase.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});
const geist = Geist({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});
const title = "4our — Design, Video & Digital Development";

export const metadata: Metadata = {
  ...(agency.siteUrl
    ? { metadataBase: new URL(agency.siteUrl), alternates: { canonical: "/" } }
    : {}),
  title,
  description: agency.description,
  applicationName: agency.name,
  other: { "page-type": "service", "site-kind": "other" },
  openGraph: {
    title,
    description: agency.description,
    siteName: agency.name,
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: agency.description,
  },
};

export const viewport: Viewport = { themeColor: "#282828" };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      data-type="service"
      className={inter.variable + " " + geist.variable}
      suppressHydrationWarning
    >
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
