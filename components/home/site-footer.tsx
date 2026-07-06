import Link from "next/link";

import type { HomePageData } from "@/sanity/lib/home";
import Image from "next/image";

type FooterData = NonNullable<HomePageData["footer"]>;

export function SiteFooter({ data }: { data?: FooterData | null }) {
  return (
    <footer
      id="contacts"
      data-nav-title="Контакты"
      className="h-screen flex flex-col items-start justify-end p-2 md:p-5 relative"
      style={{
        background:
          "radial-gradient(111.88% 83.41% at 63.33% 54.29%, #878691 0%, #A1A2A9 33.26%, #ADB9BC 66%, #A3AEA7 100%)",
      }}
    >
      <Link href="mailto:info@medchem.ltd">
        <Image
          src="/assets/footer/390.svg"
          width={1000}
          height={1000}
          alt="logo"
          className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-[65%] md:hidden"
        />
      </Link>
      <Link href="mailto:info@medchem.ltd">
        <Image
          src="/assets/footer/768.svg"
          width={1000}
          height={1000}
          alt="logo"
          className="absolute top-1/2 left-1/2 -translate-y-[80%] -translate-x-[70%] hidden md:flex xl:hidden"
        />
      </Link>
      <Link href="mailto:info@medchem.ltd">
        <Image
          src="/assets/footer/1280.svg"
          width={1000}
          height={1000}
          alt="logo"
          className="absolute top-1/2 left-1/2 -translate-y-[70%] -translate-x-[70%] hidden xl:flex 2xl:hidden w-full"
        />
      </Link>
      <Link href="mailto:info@medchem.ltd">
        <Image
          src="/assets/footer/1536.svg"
          width={1000}
          height={1000}
          alt="logo"
          className="absolute top-1/2 left-1/2 -translate-y-[60%] -translate-x-[70%] hidden 2xl:flex w-full"
        />
      </Link>
      <div className="text-text text-left flex flex-col gap-5 text-white font-diatype md:gap-[clamp(2.5rem,calc(-11.75rem_+_29.6875vw),12rem)] xl:flex-row-reverse xl:items-end xl:ml-auto xl:gap-[clamp(12rem,calc(-15.5rem_+_34.375vw),17.5rem)] 2xl:gap-[clamp(17.5rem,calc(-1.5rem_+_12.5vw),20.5rem)] 3xl:gap-[clamp(20.5rem,17.0833vw,27.3333rem)]">
        <div className="flex flex-col gap-1.5 md:gap-3">
          <p className="whitespace-pre-line">{data?.footerText}</p>
          <a
            href="/terms.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="xl:w-1/2"
          >
            Пользовательское соглашение
          </a>
        </div>
        <Link href="/">Designed & Developed by VOSK</Link>
      </div>
    </footer>
  );
}
