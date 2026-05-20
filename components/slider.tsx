"use client";

import { useEffect, useRef } from "react";
import Image, { type StaticImageData } from "next/image";
import { scroll, animate } from "motion/react";

type SlideStep = {
  number: number;
  title: { ru: string; lines: readonly string[] };
  tags: readonly string[];
};

type Slide = {
  marker: string;
  title: { ru: string; lines: readonly string[] };
  steps: readonly SlideStep[];
  images: {
    mobile: StaticImageData;
    tablet: StaticImageData;
    desktop: StaticImageData;
  };
};

type SliderProps = {
  data: {
    slides: readonly Slide[];
  };
};

export default function Slider({ data }: SliderProps) {
  const sectionRef = useRef<HTMLElement>(null);
  // Refs for every non-first slide panel so we can hand them to animate()
  const slideRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const stops: VoidFunction[] = [];

    data.slides.forEach((_, i) => {
      if (i === 0) return; // slide 0 is the static backdrop

      const el = slideRefs.current[i];
      if (!el) return;

      stops.push(
        scroll(
          animate(
            el,
            { y: ["100%", "100%", "0%"] },
            { times: [0, 0.4, 1], ease: ["linear", "easeOut"] },
          ),
          {
            target: section,
            offset: ["start start", "end end"],
          },
        ),
      );
    });

    return () => stops.forEach((s) => s());
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <section
      ref={sectionRef}
      id="process"
      className="relative bg-black"
      style={{ height: `${data.slides.length * 100}dvh` }}
    >
      {/*
        Single sticky viewport — overflow-hidden clips slides that haven't
        slid into view yet (they start at translateY(100%), below the fold).
      */}
      <div className="sticky top-0 h-dvh overflow-hidden">
        {data.slides.map((slide, i) => (
          <div
            key={slide.marker}
            ref={(el) => {
              slideRefs.current[i] = el;
            }}
            style={{
              position: "absolute",
              inset: 0,
              zIndex: i + 1,
              // Non-first slides begin off-screen; animate() will override this
              // as soon as scroll() initialises.
              transform: i > 0 ? "translateY(100%)" : undefined,
              // Paper-edge shadow gives physical depth
              boxShadow: i > 0 ? "0 -20px 60px 4px rgba(0,0,0,0.5)" : undefined,
            }}
            className="pt-29 bg-black px-2"
          >
            <Image
              src={slide.images.mobile}
              alt={slide.title.lines.join(" ")}
              fill
              sizes="100vw"
              className="object-cover z-0 md:hidden"
            />
            <Image
              src={slide.images.tablet}
              alt={slide.title.lines.join(" ")}
              fill
              sizes="100vw"
              className="object-cover z-0 hidden md:block xl:hidden"
            />
            <Image
              src={slide.images.desktop}
              alt={slide.title.lines.join(" ")}
              fill
              sizes="100vw"
              className="object-cover z-0 hidden xl:block opacity-50"
            />
            <div className="flex flex-row gap-10 text-white z-10 relative">
              <div className="border-[0.5px] border-current rounded-full flex items-center justify-center px-2 w-[25px] h-[25px] aspect-square xl:w-[50px] xl:h-[50px]">
                <p className="text-hero-subtitle font-aeonik-mono">
                  {slide.marker}
                </p>
              </div>
              <div className="flex flex-col items-center gap-9 xl:flex-row xl:items-start">
                <h2 className="text-title-1 uppercase font-aeonik-mono">
                  {slide.title.lines.join(" ")}
                </h2>
                <div className="grid grid-cols-2 gap-x-2 gap-y-4">
                  {slide.steps.map((step) => (
                    <div key={step.number} className="flex flex-col">
                      <p className="text-subtitle-1">{step.number}</p>
                      <p className="text-hero-subtitle font-aeonik-mono uppercase mt-1">
                        {step.title.lines.join(" ")}
                      </p>
                      <div className="mt-2 flex flex-row items-center gap-0">
                        {step.tags.map((tag, j) => (
                          <p
                            key={tag}
                            className={`text-caption-0 py-0.5 px-1 text-white! border-[0.5px] border-white w-fit${
                              j % 2 === 1 ? " rounded-full" : ""
                            }`}
                          >
                            {tag}
                          </p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
