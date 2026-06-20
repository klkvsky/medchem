import Image, { type StaticImageData } from "next/image";

import { Tag } from "@/components/ui/tag";

import { AboutDecorations } from "./about-decorations";
import { icons, numbers } from "./assets";

type AboutDecoration = {
  src: StaticImageData;
  x: number;
  y: number;
  size: number;
  opacity: number;
  rotate: number;
  delay: number;
  duration: number;
};

const aboutDecorationAssets = [
  icons.rectangle,
  icons.coin,
  icons.grid,
  icons.pill,
  icons.circles,
  icons.hole,
  numbers.ten,
  numbers.fifteen,
  numbers.thirty,
];

const aboutDecorations = createAboutDecorations();

function createSeededRandom(seed: number) {
  let value = seed;

  return () => {
    value = (value * 1664525 + 1013904223) >>> 0;

    return value / 4294967296;
  };
}

function createAboutDecorations(): AboutDecoration[] {
  const random = createSeededRandom(20260620);

  return Array.from({ length: 34 }, (_, index) => {
    const asset = aboutDecorationAssets[index % aboutDecorationAssets.length];
    let x = 50;
    let y = 50;

    for (let attempt = 0; attempt < 24; attempt += 1) {
      const angle = random() * Math.PI * 2;
      const radius = 0.48 + Math.pow(random(), 0.35) * 0.58;

      x = 50 + Math.cos(angle) * radius * 58;
      y = 50 + Math.sin(angle) * radius * 50;

      const centerX = (x - 50) / 34;
      const centerY = (y - 50) / 26;

      if (centerX * centerX + centerY * centerY > 1) {
        break;
      }
    }

    return {
      src: asset,
      x,
      y,
      size: index % 4 === 0 ? 12 + random() * 18 : 4 + random() * 8,
      opacity: 0.1 + random() * 0.16,
      rotate: random() * 80 - 40,
      delay: random() * 4,
      duration: 5 + random() * 3,
    };
  });
}

export function About() {
  return (
    <div className="relative overflow-hidden px-10 flex flex-col h-dvh justify-center xl:items-center">
      <AboutDecorations decorations={aboutDecorations} />
      <div className="relative z-10 flex flex-col gap-[clamp(0.875rem,calc(0.25rem_+_3.125vw),1.75rem)] justify-center xl:max-w-xl xl:relative xl:translate-x-[-10%] 2xl:max-w-[clamp(36rem,calc(12rem_+_25vw),42rem)] 3xl:max-w-[clamp(42rem,35vw,56rem)]">
        <Image
          src={numbers.twenty}
          alt="Number 20"
          className="w-[clamp(9.75rem,calc(3.0089rem_+_33.7054vw),19.1875rem)] h-auto object-contain md:w-[clamp(11.625rem,calc(30.5313rem_-_23.6328vw),19.1875rem)] xl:w-[clamp(11.625rem,calc(0.0625rem_+_14.4531vw),13.9375rem)] xl:absolute xl:bottom-full xl:right-[96%] xl:translate-y-[20%] 2xl:w-[clamp(13.9375rem,calc(-0.0625rem_+_14.5833vw),17.4375rem)] 3xl:w-[clamp(279px,14.5313vw,372px)]"
        />
        <div className="flex flex-col gap-[clamp(2.125rem,calc(2.7679rem_-_1.3393vw),2.5rem)] 2xl:gap-[clamp(2.125rem,calc(0.625rem_+_1.5625vw),2.5rem)] 3xl:gap-[clamp(2.5rem,2.0833vw,3.3333rem)]">
          <div className="flex flex-col gap-[clamp(1.125rem,calc(1.0357rem_+_0.4464vw),1.25rem)] xl:gap-[clamp(1.25rem,1.5625vw,1.5rem)] 2xl:gap-[clamp(1.5rem,calc(-0.5rem_+_2.0833vw),2rem)] 3xl:gap-[clamp(2rem,1.6667vw,2.6667rem)]">
            <h2 className="text-h3 uppercase">
              лет Создаем R&D-решения для life sciences
            </h2>
            <p className="text-text md:text-h3 md:uppercase">
              Поиск перспективных направлений разработки, патентно-конкурентный
              анализ, дизайн малых молекул, проектирование цифровых инструментов
            </p>
          </div>
          <AboutTags />
        </div>
      </div>
    </div>
  );
}

function AboutTags() {
  return (
    <div className="flex flex-row items-center">
      <Tag text="pharma" shape="rectangle" />
      <Tag text="agrochem" shape="pill" />
      <Tag text="animal care" shape="rectangle" />
      <Tag text="vc funds" shape="trapezoid" />
      <Tag text="IP teams" shape="rectangle" />
    </div>
  );
}
