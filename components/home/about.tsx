import Image from "next/image";

import { Tag } from "@/components/ui/tag";

import { numbers } from "./assets";

export function About() {
  return (
    <div className="px-10 flex flex-col gap-3.5 h-dvh justify-center">
      <Image
        src={numbers.twenty}
        alt="Number 20"
        className="w-39 h-auto object-contain"
      />
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-4.5">
          <h2 className="text-h3 uppercase">
            лет Создаем R&D-решения для life sciences
          </h2>
          <p className="text-text">
            Поиск перспективных направлений разработки, патентно-конкурентный
            анализ, дизайн малых молекул, проектирование цифровых инструментов
          </p>
        </div>
        <AboutTags />
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
