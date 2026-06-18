import Image from "next/image";

import { Logo } from "@/components/ui/logo";
import { PlusIcon } from "@/components/ui/pattern-icons";
import { Tag } from "@/components/ui/tag";

import { numbers } from "./assets";

export function Projects() {
  return (
    <div className="flex flex-col items-center gap-8 pt-19 pb-35">
      <Logo />
      <div className="px-2">
        <div className="flex flex-row items-center text-center">
          <p className="text-h3 uppercase">разработка молекул</p>
          <div className="w-px h-20 bg-[#B1B1B1]" />
          <p className="text-h3 uppercase">цифровые продукты</p>
        </div>
        <div className="w-full h-20 border-t rounded-2xl border-[#B1B1B1] " />
        <div className="flex flex-row justify-between -mt-20">
          <ProjectLane align="left" />
          <ProjectLane align="right" />
        </div>
      </div>
      <button
        className="text-h3 uppercase text-white mx-auto py-3 px-4.5 rounded-[10px]"
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
      className="flex flex-col border-x border-[#B1B1B1] w-full h-fit rounded-t-2xl gap-15 pt-38"
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
      />
    </div>
  );
}

function ProjectItem({ align }: { align?: "left" | "right" }) {
  return (
    <div
      className="flex flex-col gap-4"
      style={{
        alignItems: align === "left" ? "flex-start" : "flex-end",
      }}
    >
      <div className="w-11.5 h-11.5 bg-[#B1B1B1]" />
      <div
        className="flex flex-col gap-3"
        style={{ alignItems: align === "left" ? "flex-start" : "flex-end" }}
      >
        <button className="w-4 h-4 flex items-center justify-center bg-[#E3E3E3] rounded-full">
          <PlusIcon />
        </button>
        <div
          className="flex flex-col gap-1"
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
  );
}
