"use client";

import { motion } from "motion/react";

import type { HomePageData } from "@/sanity/lib/home";

import { HomeIcon, type HomeIconName } from "./icons";

type HeroData = NonNullable<HomePageData["hero"]>;

const titleLineClasses = [
  "",
  "ml-[clamp(1ch,calc(0.75ch_+_1.25vw),1.5ch)] md:ml-[clamp(1.5ch,calc(-3.45ch_+_10.3125vw),4.8ch)] xl:ml-[4.8ch]",
  "ml-[clamp(1ch,calc(0.25ch_+_3.75vw),2.8ch)] md:ml-[clamp(2ch,calc(4ch_-_2.5vw),2.8ch)] xl:ml-[2ch]",
];

const detailRowClasses = [
  "flex flex-row gap-3",
  "flex flex-row gap-3 ml-[clamp(3.875rem,calc(1.4643rem_+_12.0536vw),7.25rem)] md:ml-[clamp(0rem,calc(18.125rem_-_22.6563vw),7.25rem)] xl:ml-0 2xl:gap-[clamp(0.75rem,calc(-1.25rem_+_2.0833vw),1.25rem)] 3xl:gap-[clamp(1.25rem,1.0417vw,1.6667rem)]",
  "flex flex-row gap-3 ml-[clamp(2rem,calc(0.9732rem_+_5.1339vw),3.4375rem)] md:ml-[clamp(0rem,calc(8.5938rem_-_10.7422vw),3.4375rem)] xl:ml-0 xl:mr-[7rem] 2xl:gap-[clamp(0.75rem,calc(-1.25rem_+_2.0833vw),1.25rem)] 3xl:gap-[clamp(1.25rem,1.0417vw,1.6667rem)]",
  "flex flex-row gap-3 ml-[clamp(7.9375rem,calc(4.0536rem_+_19.4196vw),13.375rem)] md:ml-[clamp(7rem,calc(16.9375rem_-_4.2969vw),13.375rem)] xl:ml-[7rem] xl:mr-auto 2xl:gap-[clamp(0.75rem,calc(-1.25rem_+_2.0833vw),1.25rem)] 3xl:gap-[clamp(1.25rem,1.0417vw,1.6667rem)]",
];

const homeIconNames = new Set<HomeIconName>([
  "circles",
  "coin",
  "grid",
  "hole",
  "pill",
  "rectangle",
]);

function toHomeIconName(icon: string | null | undefined): HomeIconName {
  return homeIconNames.has(icon as HomeIconName)
    ? (icon as HomeIconName)
    : "rectangle";
}

function splitHeroTitle(title: string | null | undefined) {
  if (!title) {
    return [];
  }

  const explicitLines = title
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean);

  if (explicitLines.length > 1) {
    return explicitLines;
  }

  return title.trim().split(/\s+/).filter(Boolean);
}

function chunkDetails(details: NonNullable<HeroData["details"]>) {
  const rowSizes = [1, 2, 2];
  const rows: typeof details[] = [];
  let offset = 0;

  for (const size of rowSizes) {
    const row = details.slice(offset, offset + size);
    if (row.length) {
      rows.push(row);
    }
    offset += size;
  }

  const remaining = details.slice(offset);
  if (remaining.length) {
    rows.push(remaining);
  }

  return rows;
}

export function Hero({ data }: { data?: HeroData | null }) {
  const titleLines = splitHeroTitle(data?.title);

  return (
    <div
      data-nav-title="Главная"
      className="relative overflow-hidden text-white h-dvh flex flex-col items-center justify-end gap-[clamp(0.75rem,calc(0.3036rem_+_2.2321vw),1.375rem)] pb-43 md:items-start md:gap-[clamp(0rem,calc(3.4375rem_-_4.2969vw),1.375rem)] md:pb-[clamp(2.5rem,calc(23.125rem_-_25.7813vw),10.75rem)] xl:items-end xl:pb-[clamp(2.5rem,calc(-13.125rem_+_19.5313vw),5.625rem)] xl:pr-[clamp(5.75rem,calc(-9.25rem_+_18.75vw),8.75rem)] xl:gap-0 2xl:pb-[clamp(5.625rem,calc(3.125rem_+_2.6042vw),6.25rem)] 2xl:pr-[clamp(8.75rem,calc(-6.25rem_+_15.625vw),12.5rem)] 3xl:pb-[clamp(6.25rem,5.2083vw,8.3333rem)] 3xl:pr-[clamp(12.5rem,10.4167vw,16.6667rem)]"
    >
      <motion.div
        aria-hidden
        className="absolute inset-[-20%] bg-[radial-gradient(164.72%_106.54%_at_76.3%_74.35%,#878691_0%,#A1A2A9_33.26%,#ADB9BC_66%,#A3AEA7_100%)] bg-[length:135%_135%]"
        animate={{
          backgroundPosition: ["45% 50%", "65% 42%", "56% 72%", "45% 50%"],
          scale: [1, 1.05, 1.02, 1],
        }}
        transition={{
          duration: 18,
          ease: "easeInOut",
          repeat: Infinity,
        }}
      />
      <h1
        style={
          {
            "--h1-offset": "14rem",
          } as React.CSSProperties
        }
        className="relative z-10 text-h1 flex flex-col uppercase xl:-translate-x-(--h1-offset)"
      >
        {titleLines.map((line, index) => (
          <span
            key={`${line}-${index}`}
            className={titleLineClasses[index] ?? titleLineClasses[2]}
          >
            {line}
          </span>
        ))}
      </h1>
      <HeroDescription details={data?.details ?? []} />
    </div>
  );
}

function HeroDescription({ details }: { details: NonNullable<HeroData["details"]> }) {
  const rows = chunkDetails(details);

  return (
    <div className="relative z-10 flex flex-col gap-[clamp(0.25rem,calc(0.1607rem_+_0.4464vw),0.375rem)] translate-x-[clamp(0rem,calc(-0.3571rem_+_1.7857vw),0.5rem)] md:translate-x-[clamp(0rem,calc(1.25rem_-_1.5625vw),0.5rem)] xl:translate-x-0 xl:items-end xl:gap-1.5 2xl:gap-[clamp(0.375rem,calc(-0.125rem_+_0.5208vw),0.5rem)] 3xl:gap-[clamp(0.5rem,0.4167vw,0.6667rem)]">
      {rows.map((row, rowIndex) => (
        <div
          key={row.map((detail) => detail._key ?? detail.name).join("-")}
          className={detailRowClasses[rowIndex] ?? detailRowClasses[3]}
        >
          {row.map((detail) => (
            <HeroDescriptionItem
              key={detail._key ?? detail.name}
              icon={toHomeIconName(detail.icon)}
              text={detail.name ?? ""}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

function HeroDescriptionItem({
  icon,
  text,
}: {
  icon: HomeIconName;
  text: string;
}) {
  return (
    <div className="flex flex-row items-center gap-[clamp(0.5rem,calc(0.2321rem_+_1.3393vw),0.875rem)] shrink-0 flex-none md:gap-[clamp(0.625rem,calc(1.25rem_-_0.7813vw),0.875rem)] xl:gap-2.5 2xl:gap-[clamp(0.625rem,calc(0.125rem_+_0.5208vw),0.75rem)] 3xl:gap-[clamp(0.75rem,0.625vw,1rem)]">
      <HomeIcon
        name={icon}
        color="#FAFAFA"
        className="shrink-0! flex-none! w-[clamp(0.75rem,calc(0.6607rem_+_0.4464vw),0.875rem)] h-[clamp(0.75rem,calc(0.6607rem_+_0.4464vw),0.875rem)]"
      />
      <p className="text-h3 uppercase">{text}</p>
    </div>
  );
}
