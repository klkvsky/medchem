import Link from "next/link";

import type { HomePageData } from "@/sanity/lib/home";

type FooterData = NonNullable<HomePageData["footer"]>;

export function SiteFooter({ data }: { data?: FooterData | null }) {
  return (
    <footer
      id="contacts"
      data-nav-title="Контакты"
      className="h-dvh flex flex-col items-start justify-end p-2 md:p-5"
      style={{
        background:
          "radial-gradient(111.88% 83.41% at 63.33% 54.29%, #878691 0%, #A1A2A9 33.26%, #ADB9BC 66%, #A3AEA7 100%)",
      }}
    >
      <div className="text-text text-left flex flex-col gap-5 text-white font-diatype md:gap-[clamp(2.5rem,calc(-11.75rem_+_29.6875vw),12rem)] xl:flex-row-reverse xl:items-end xl:ml-auto xl:gap-[clamp(12rem,calc(-15.5rem_+_34.375vw),17.5rem)] 2xl:gap-[clamp(17.5rem,calc(-1.5rem_+_12.5vw),20.5rem)] 3xl:gap-[clamp(20.5rem,17.0833vw,27.3333rem)]">
        <div className="flex flex-col gap-1.5 md:gap-3">
          <p className="whitespace-pre-line">{data?.footerText}</p>
          <Link href="/" className="xl:w-1/2">
            {data?.privacyLink}
          </Link>
        </div>
        <Link href="/">Designed & Developed by VOSK</Link>
      </div>
    </footer>
  );
}
