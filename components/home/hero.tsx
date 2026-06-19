import Image, { type StaticImageData } from "next/image";

import { icons } from "./assets";

export function Hero() {
  return (
    <div
      className="text-white h-dvh flex flex-col items-center justify-end gap-3 md:gap-5.5 pb-43 md:items-start xl:items-end xl:pb-10 xl:pr-23 xl:gap-0"
      style={{
        background:
          "radial-gradient(164.72% 106.54% at 76.3% 74.35%, #878691 0%, #A1A2A9 33.26%, #ADB9BC 66%, #A3AEA7 100%)",
      }}
    >
      <h1
        style={
          {
            "--h1-offset": "14rem",
          } as React.CSSProperties
        }
        className="text-h1 flex flex-col uppercase xl:-translate-x-(--h1-offset)"
      >
        <span>проектируем</span>
        <span className="ml-[1ch] md:ml-[1.5ch] xl:ml-[4.8ch]">будущее</span>
        <span className="ml-[1ch] md:ml-[2.8ch] xl:ml-[2ch]">фармацевтики</span>
      </h1>
      <HeroDescription />
    </div>
  );
}

function HeroDescription() {
  return (
    <div className="flex flex-col gap-1 md:translate-x-2 md:gap-1.5  xl:translate-x-0 xl:items-end xl:gap-1.5">
      <div className="flex flex-row gap-3">
        <HeroDescriptionItem icon={icons.rectangle} text="drug discovery" />
      </div>
      <div className="flex flex-row gap-3 ml-[62px] md:ml-[116px] xl:ml-0">
        <HeroDescriptionItem icon={icons.coin} text="chemoinformatics" />
        <HeroDescriptionItem icon={icons.grid} text="cadd" />
      </div>
      <div className="flex flex-row gap-3 ml-[32px] md:ml-[55px] xl:ml-0 xl:mr-[7rem]">
        <HeroDescriptionItem icon={icons.pill} text="medicinal chemistry" />
        <HeroDescriptionItem icon={icons.circles} text="ai" />
      </div>
      <div className="flex flex-row gap-3 ml-[127px] md:ml-[214px] xl:ml-[7rem] xl:mr-auto">
        <HeroDescriptionItem icon={icons.hole} text="software development" />
      </div>
    </div>
  );
}

function HeroDescriptionItem({
  icon,
  text,
}: {
  icon: StaticImageData;
  text: string;
}) {
  return (
    <div className="flex flex-row items-center gap-2 shrink-0 flex-none md:gap-3.5 xl:gap-2.5">
      <Image
        src={icon}
        alt={text}
        width={12}
        height={12}
        className="shrink-0! flex-none! w-3 h-3 invert md:w-3.5 md:h-3.5"
      />
      <p className="text-h3 uppercase">{text}</p>
    </div>
  );
}
