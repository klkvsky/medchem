import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { getSiteUrl, siteConfig } from "./seo";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const aeonikMono = localFont({
  src: [
    {
      path: "../public/fonts/aeonik_mono_pro/aeonikmonopro-light.woff2",
      weight: "300",
      style: "normal",
    },
  ],
  variable: "--font-aeonik-mono",
  display: "swap",
});

const diatype = localFont({
  src: [
    {
      path: "../public/fonts/diatype_cyrillic/ABCDiatypeCyrillic-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/diatype_cyrillic/ABCDiatypeCyrillic-LightItalic.woff2",
      weight: "300",
      style: "italic",
    },
  ],
  variable: "--font-diatype",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: getSiteUrl(),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  keywords: [...siteConfig.keywords],
  alternates: {
    canonical: "/",
    languages: {
      ru: "/",
    },
  },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: "/",
    siteName: siteConfig.name,
    title: siteConfig.title,
    description: siteConfig.description,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "MedChem — R&D-решения для Life Sciences",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: ["/twitter-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang={siteConfig.language}
      className={`${geistSans.variable} ${geistMono.variable} ${aeonikMono.variable} ${diatype.variable} h-full antialiased overscroll-none`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
