import Image from "next/image";

import { Logo } from "@/components/ui/logo";
import { PlusIcon } from "@/components/ui/pattern-icons";
import { Tag } from "@/components/ui/tag";

import { numbers } from "./assets";

export function Projects() {
  return (
    <div>
      <ProjectDesktop />
      <ProjectMobile />
    </div>
  );
}

function ProjectDesktop() {
  return (
    <div className="flex flex-col items-center pt-3.5 gap-6 pb-10 2xl:pt-4 2xl:gap-7.5">
      <Logo className="w-45 h-auto" />
      <div className="px-2 w-full">
        <div className="flex flex-row items-center text-center">
          <p className="text-h3 uppercase w-full">разработка молекул</p>
          <div className="w-px h-109 bg-[#B1B1B1] 2xl:h-131" />
          <p className="text-h3 uppercase w-full">цифровые продукты</p>
        </div>
      </div>
      <div className="flex flex-row items-center justify-center w-full *:w-1/2! -translate-y-[110px] 2xl:-translate-y-[130px]">
        <div className="flex flex-row-reverse items-start gap-12.5 justify-start overflow-x-auto pl-2 pr-11.5">
          <ProjectItem align="left" />
          <ProjectItem align="left" />
          <ProjectItem align="left" />
          <ProjectItem align="left" />
          <ProjectItem align="left" />
          <ProjectItem align="left" />
          <ProjectItem align="left" />
          <ProjectItem align="left" />
          <Image
            src={numbers.ten}
            alt="numbers.thirty"
            width={127}
            height={105}
            className="mt-auto w-auto h-30.5"
          />
        </div>
        <div className="flex flex-row items-start gap-12.5 justify-start overflow-x-auto pl-27.5 pr-2">
          <ProjectItem align="left" />
          <ProjectItem align="left" />
          <ProjectItem align="left" />
          <ProjectItem align="left" />
          <ProjectItem align="left" />
          <ProjectItem align="left" />
          <ProjectItem align="left" />
          <ProjectItem align="left" />
          <Image
            src={numbers.thirty}
            alt="numbers.thirty"
            width={127}
            height={105}
            className="mt-auto w-auto h-30.5"
          />
        </div>
      </div>
    </div>
  );
}

function ProjectMobile() {
  return (
    <div className="flex flex-col items-center gap-8 md:gap-15 pt-19 pb-35 md:pt-37.5 xl:hidden">
      <Logo className="w-36.75 h-auto md:w-72.5" />
      <div className="px-2 w-full">
        <div className="flex flex-row items-center text-center">
          <p className="text-h3 uppercase w-full">
            разработка <br /> молекул
          </p>
          <div className="w-px h-20 md:h-36 bg-[#B1B1B1]" />
          <p className="text-h3 uppercase w-full">
            цифровые <br /> продукты
          </p>
        </div>
        <div className="w-full h-20 border-t rounded-2xl border-[#B1B1B1] " />
        <div className="flex flex-row justify-between -mt-20 w-full">
          <ProjectLane align="left" />
          <ProjectLane align="right" />
        </div>
      </div>
      <button
        className="text-h3 uppercase text-white mx-auto py-3 px-4.5 rounded-[10px] md:px-7.5 md:py-4"
        style={{
          background:
            "radial-gradient(894.94% 276.37% at 100% 100%, #A4989B 2%, #A1A1A9 33.26%, #ADB9BC 64.94%, #A3AEA7 94.72%)",
        }}
      >
        Показать больше
      </button>
    </div>
  );
}

function ProjectLane({ align }: { align?: "left" | "right" }) {
  return (
    <div
      className="flex flex-col border-x border-[#B1B1B1] w-full h-fit rounded-t-2xl gap-15 pt-38 md:pt-33 md:gap-16"
      style={{
        borderLeft: align === "right" ? "none" : "",
        borderRight: align === "left" ? "none" : "",
        paddingLeft: align === "left" ? 8 : undefined,
        paddingRight: align === "right" ? 8 : undefined,
      }}
    >
      {Array.from({ length: align === "left" ? 14 : 7 }).map((_, i) => (
        <ProjectItem key={i} align={align} />
      ))}
      <Image
        src={align === "left" ? numbers.thirty : numbers.ten}
        alt="numbers.thirty"
        width={127}
        height={105}
        style={{
          marginLeft: align === "left" ? 0 : "auto",
        }}
      />
    </div>
  );
}

function ProjectItem({ align }: { align?: "left" | "right" }) {
  return (
    <div
      className="flex flex-col gap-4 md:gap-6 xl:gap-13.75"
      style={{
        alignItems: align === "left" ? "flex-start" : "flex-end",
      }}
    >
      <div className="w-11.5 h-11.5 bg-[#B1B1B1] md:w-16.5 md:h-16.5 2xl:w-20 2xl:h-20" />
      <div className="flex flex-col gap-4 md:gap-6 xl:gap-4.5 2xl:gap-5.5">
        <div
          className="flex flex-col gap-3 2xl:gap-3.5"
          style={{ alignItems: align === "left" ? "flex-start" : "flex-end" }}
        >
          <button className="w-4 h-4 flex items-center justify-center bg-[#E3E3E3] rounded-full md:w-5 md:h-5">
            <PlusIcon />
          </button>
          <div
            className="flex flex-col gap-1 md:gap-1.5"
            style={{ alignItems: align === "left" ? "flex-start" : "flex-end" }}
          >
            <p className="text-h3">TNIK</p>
            <p className="text-text">Phase II</p>
          </div>
        </div>
        <div className="flex flex-row">
          <Tag text="Insilico" shape="rectangle" />
          <Tag text="Иннополис" shape="pill" />
        </div>
      </div>
    </div>
  );
}
