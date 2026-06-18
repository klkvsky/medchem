import Image, { type StaticImageData } from "next/image";

import { icons } from "./assets";

export function Hero() {
  return (
    <div
      className="text-white h-dvh flex flex-col items-center justify-end gap-3 pb-43"
      style={{
        background:
          "radial-gradient(164.72% 106.54% at 76.3% 74.35%, #878691 0%, #A1A2A9 33.26%, #ADB9BC 66%, #A3AEA7 100%)",
      }}
    >
      <h1 className="text-h1 flex flex-col uppercase">
        <span>проектируем</span>
        <span className="ml-[1ch]">будущее</span>
        <span className="ml-[1ch]">фармацевтики</span>
      </h1>
      <HeroDescription />
    </div>
  );
}

function HeroDescription() {
  return (
    <div className="flex flex-col gap-1">
      <div className="flex flex-row gap-3">
        <HeroDescriptionItem icon={icons.rectangle} text="drug discovery" />
      </div>
      <div className="flex flex-row gap-3 ml-[62px]">
        <HeroDescriptionItem icon={icons.coin} text="chemoinformatics" />
        <HeroDescriptionItem icon={icons.grid} text="cadd" />
      </div>
      <div className="flex flex-row gap-3 ml-[32px]">
        <HeroDescriptionItem icon={icons.pill} text="medicinal chemistry" />
        <HeroDescriptionItem icon={icons.circles} text="ai" />
      </div>
      <div className="flex flex-row gap-3 ml-[127px]">
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
    <div className="flex flex-row items-center gap-2 shrink-0 flex-none">
      <Image
        src={icon}
        alt={text}
        width={12}
        height={12}
        className="shrink-0! flex-none! w-3 h-3 invert"
      />
      <p className="text-h3 uppercase">{text}</p>
    </div>
  );
}
