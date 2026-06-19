import Image from "next/image";

import { ArrowIcon } from "@/components/ui/pattern-icons";
import { Tag } from "@/components/ui/tag";

import { numbers } from "./assets";

export function Team() {
  return (
    <div className="flex flex-col px-2 gap-22 pt-16.5 pb-30 md:pt-29 md:pb-37.5 xl:pt-0 2xl:gap-35 2xl:pb-44 3xl:gap-40 3xl:pb-55">
      <div className="flex flex-col gap-8 md:gap-15 xl:gap-7 3xl:gap-15">
        <h3 className="text-h2 uppercase xl:w-1/2 xl:ml-auto">
          Эксперты, которые создают результат
        </h3>
        <div className="grid grid-cols-2 gap-x-2 gap-y-8 md:gap-y-15 xl:grid-cols-4">
          <TeamMember
            name="Ян Иваненков"
            badge="Scholar"
            description={[
              "PhD",
              "20+ лет опыта",
              "250+ научных публикаций",
              "40 h-index",
            ]}
            tags={["Основатель", "Директор по науке"]}
          />
          <TeamMember
            name="Анастасия Корженевская"
            description={["MSc", "6+ лет опыта"]}
            tags={["Генеральный директор"]}
          />
          <TeamMember
            name="Александр Малышев"
            description={["PharmD", "9+ лет опыта"]}
            tags={["Директор по продукту"]}
          />
          <TeamMember
            name="Белладонна"
            description={["Талантливая", "и поддерживающая"]}
            tags={["Талисман команды"]}
            isLast
          />
        </div>
      </div>
      <div className="flex flex-row items-end">
        <Image
          src={numbers.fifteen}
          alt="fifteen"
          width={200}
          height={118}
          className="w-50 h-auto md:w-100 xl:w-84 2xl:w-100 3xl:w-125"
        />
        <Tag text="Ученых" variant="outline" shape="rectangle" />
        <div className="translate-y-[2ch] md:translate-y-[3ch]">
          <Tag text="И разработчиков" variant="outline" shape="trapezoid" />
        </div>
      </div>
    </div>
  );
}

function TeamMember({
  name,
  badge,
  description,
  tags,
  isLast,
}: {
  name: string;
  badge?: string;
  description: string[];
  tags: string[];
  isLast?: boolean;
}) {
  return (
    <div className="flex flex-col gap-4 md:gap-6">
      <div
        data-last={isLast}
        className="w-full h-auto aspect-square relative bg-amber-200 data-[last=true]:rounded-full"
      >
        {badge && (
          <div className="absolute bottom-2 right-2 px-2 py-1.5 rounded-full bg-white flex flex-row items-center gap-1 md:bottom-3.5 md:right-3.5 md:py-3 md:px-4 md:gap-2">
            <ArrowIcon />
            <p className="text-tag-button uppercase">{badge}</p>
          </div>
        )}
      </div>
      <div className="flex flex-col gap-2.5 md:gap-4">
        <h4 className="text-h3 uppercase">{name}</h4>
        <div className="flex flex-col gap-0 text-text font-diatype md:h-[8ch]">
          {description.map((line, index) => (
            <p key={index}>{line}</p>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-0 md:flex-row">
        {tags.map((tag, index) => (
          <Tag key={index} text={tag} shape="pill" />
        ))}
      </div>
    </div>
  );
}
