import Image from "next/image";

import { Tag } from "@/components/ui/tag";
import type { HomePageData, HomeTag } from "@/sanity/lib/home";

import {
  AboutDecorations,
  type AboutDecorationAsset,
} from "./about-decorations";
import { icons, numbers } from "./assets";

const aboutDecorationAssets = [
  { kind: "icon", name: icons.rectangle },
  { kind: "icon", name: icons.coin },
  { kind: "icon", name: icons.grid },
  { kind: "icon", name: icons.pill },
  { kind: "icon", name: icons.circles },
  { kind: "icon", name: icons.hole },
] satisfies AboutDecorationAsset[];

type AboutData = NonNullable<HomePageData["about"]>;

function tagShape(type: HomeTag["type"]) {
  return type ?? "rectangle";
}

export function About({ data }: { data?: AboutData | null }) {
  return (
    <div
      id="about"
      data-nav-title="О компании"
      className="relative overflow-hidden px-10 flex flex-col h-dvh justify-center xl:items-center text-[#411319]"
    >
      <AboutDecorations assets={aboutDecorationAssets} />
      <div
        data-about-content
        className="relative z-10 flex flex-col gap-[clamp(0.875rem,calc(0.25rem_+_3.125vw),1.75rem)] justify-center xl:max-w-xl xl:relative xl:translate-x-[-10%] 2xl:max-w-[clamp(36rem,calc(12rem_+_25vw),42rem)] 3xl:max-w-[clamp(42rem,35vw,56rem)]"
      >
        <Image
          src={numbers.twenty}
          alt="Number 20"
          className="w-[clamp(9.75rem,calc(3.0089rem_+_33.7054vw),19.1875rem)] h-auto object-contain md:w-[clamp(11.625rem,calc(30.5313rem_-_23.6328vw),19.1875rem)] xl:w-[clamp(11.625rem,calc(0.0625rem_+_14.4531vw),13.9375rem)] xl:absolute xl:bottom-full xl:right-[96%] xl:translate-y-[20%] 2xl:w-[clamp(13.9375rem,calc(-0.0625rem_+_14.5833vw),17.4375rem)] 3xl:w-[clamp(279px,14.5313vw,372px)]"
        />
        <div className="flex flex-col gap-[clamp(2.125rem,calc(2.7679rem_-_1.3393vw),2.5rem)] 2xl:gap-[clamp(2.125rem,calc(0.625rem_+_1.5625vw),2.5rem)] 3xl:gap-[clamp(2.5rem,2.0833vw,3.3333rem)]">
          <div className="flex flex-col gap-[clamp(1.125rem,calc(1.0357rem_+_0.4464vw),1.25rem)] xl:gap-[clamp(1.25rem,1.5625vw,1.5rem)] 2xl:gap-[clamp(1.5rem,calc(-0.5rem_+_2.0833vw),2rem)] 3xl:gap-[clamp(2rem,1.6667vw,2.6667rem)]">
            <h2 className="text-h3 uppercase">
              {data?.title}
            </h2>
            <p className="text-text font-diatype md:font-aeonik-mono md:text-h3 md:uppercase ">
              {data?.description}
            </p>
          </div>
          <AboutTags tags={data?.tags ?? []} />
        </div>
      </div>
    </div>
  );
}

function AboutTags({ tags }: { tags: HomeTag[] }) {
  return (
    <div className="flex flex-row items-center">
      {tags.map((tag) => (
        <Tag
          key={tag._key ?? tag.name}
          text={tag.name ?? ""}
          shape={tagShape(tag.type)}
        />
      ))}
    </div>
  );
}
