import localFont from "next/font/local";
import { SanityLive } from "@/sanity/lib/live";
import "./globals.css";

const aeonikMono = localFont({
  src: [
    {
      path: "../public/fonts/aeonik_mono_pro/aeonikmonopro-light.woff2",
      weight: "300",
      style: "normal",
    },
  ],
  variable: "--font-family-aeonik-mono",
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
  variable: "--font-family-diatype",
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ru"
      className={`${aeonikMono.variable} ${diatype.variable} h-full antialiased overscroll-none relative`}
    >
      <body>
        {children}
        <SanityLive />
      </body>
    </html>
  );
}
