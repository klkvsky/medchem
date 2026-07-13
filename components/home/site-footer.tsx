import Link from "next/link";

import type { HomePageData } from "@/sanity/lib/home";
import Image from "next/image";

type FooterData = NonNullable<HomePageData["footer"]>;

const EMAIL_HREF = "mailto:info@medchem.ltd";

/** Button % is relative to each SVG viewBox; width lives on the absolute shell so max-w works. */
const FOOTER_GRAPHICS = [
  {
    src: "/assets/footer/390.svg",
    className:
      "absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-[65%] w-[1000px] max-w-full md:hidden",
    width: 350,
    height: 237,
    button: { left: "55.71%", top: "83.54%", width: "44.29%", height: "15.82%" },
  },
  {
    src: "/assets/footer/768.svg",
    className:
      "absolute top-1/2 left-1/2 -translate-y-[80%] -translate-x-[70%] w-[1000px] max-w-full hidden md:block xl:hidden",
    width: 686,
    height: 398,
    button: { left: "73.03%", top: "86.18%", width: "26.97%", height: "11.06%" },
  },
  {
    src: "/assets/footer/1280.svg",
    className:
      "absolute top-1/2 left-1/2 -translate-y-[60%] -translate-x-[70%] hidden xl:block 2xl:hidden w-full",
    width: 921,
    height: 398,
    button: { left: "79.80%", top: "82.91%", width: "20.20%", height: "10.05%" },
  },
  {
    src: "/assets/footer/1536.svg",
    className:
      "absolute top-1/2 left-1/2 -translate-y-[70%] -translate-x-[65%] hidden 2xl:block w-[90%]",
    width: 1140,
    height: 505,
    button: { left: "83.66%", top: "81.39%", width: "16.32%", height: "8.71%" },
  },
] as const;

export function SiteFooter({ data }: { data?: FooterData | null }) {
  return (
    <footer
      id="contacts"
      data-nav-title="Контакты"
      className="h-screen flex flex-col items-start justify-end p-2 md:p-5 relative overflow-hidden"
      style={{
        background:
          "radial-gradient(111.88% 83.41% at 63.33% 54.29%, #878691 0%, #A1A2A9 33.26%, #ADB9BC 66%, #A3AEA7 100%)",
      }}
    >
      {FOOTER_GRAPHICS.map(({ src, className, width, height, button }) => (
        <div key={src} className={className}>
          <div className="relative w-full">
            <Image
              src={src}
              width={width}
              height={height}
              alt=""
              aria-hidden
              className="pointer-events-none h-auto w-full"
            />
            <a
              href={EMAIL_HREF}
              aria-label="info@medchem.ltd"
              className="absolute rounded-[10px]"
              style={button}
            />
          </div>
        </div>
      ))}
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
