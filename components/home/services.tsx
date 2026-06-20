"use client";

import { Tag } from "@/components/ui/tag";
import { motion, useMotionValueEvent, useScroll } from "motion/react";
import { type ReactNode, useRef, useState } from "react";

type ServicesSlideNumber = 1 | 2;

const servicesTransition = {
  duration: 0.35,
  ease: [0.32, 0.72, 0, 1],
} as const;

const serviceSlides: Record<
  ServicesSlideNumber,
  {
    marker: string;
    title: ReactNode;
  }
> = {
  1: {
    marker: "A",
    title: (
      <>
        разработка <br />
        молекул
      </>
    ),
  },
  2: {
    marker: "B",
    title: (
      <>
        цифровые <br />
        продукты
      </>
    ),
  },
};

export function Services() {
  return (
    <div>
      <ServiceMobile />
      <ServicesDesktop />
    </div>
  );
}

function ServicesDesktop() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeSlide, setActiveSlide] = useState<ServicesSlideNumber>(1);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const nextSlide = latest >= 0.5 ? 2 : 1;

    setActiveSlide((currentSlide) =>
      currentSlide === nextSlide ? currentSlide : nextSlide,
    );
  });

  return (
    <div
      ref={sectionRef}
      data-services-desktop
      className="relative hidden h-[200dvh] bg-blue-900 text-white xl:block"
    >
      <div className="sticky top-0 flex h-dvh items-end px-2 xl:pb-[clamp(2.5rem,calc(-12.5rem_+_18.75vw),5.5rem)] 2xl:pb-[clamp(5.5rem,calc(0.5rem_+_3.125vw),6.25rem)] 3xl:pb-[clamp(6.25rem,5.2083vw,8.3333rem)]">
        <div className="flex flex-row items-start justify-between w-full">
          <div className="flex flex-row items-start gap-16.5 xl:gap-[clamp(4.125rem,calc(-2.75rem_+_8.5938vw),5.5rem)] 2xl:gap-[clamp(5.5rem,calc(0.5rem_+_5.2083vw),6.75rem)] 3xl:gap-[clamp(6.75rem,5.625vw,9rem)]">
            <p className="text-h3 uppercase w-10 h-10 flex items-center justify-center border rounded-full 2xl:w-[clamp(2.5rem,2.6042vw,3.125rem)] 2xl:h-[clamp(2.5rem,2.6042vw,3.125rem)] 3xl:w-[clamp(3.125rem,2.6042vw,4.1667rem)] 3xl:h-[clamp(3.125rem,2.6042vw,4.1667rem)]">
              {activeSlide === 1 ? "а" : "b"}
            </p>
            <div className="flex flex-col gap-3.5 xl:gap-[clamp(0.875rem,calc(0.25rem_+_0.7813vw),1rem)] 2xl:gap-[clamp(1rem,1.0417vw,1.25rem)] 3xl:gap-[clamp(1.25rem,1.0417vw,1.6667rem)]">
              <motion.p
                animate={{
                  opacity: activeSlide === 1 ? 1 : 0.2,
                  y: activeSlide === 1 ? "0ch" : "-3.5ch",
                }}
                transition={servicesTransition}
                className="text-h1 uppercase"
              >
                разработка <br />
                молекул
              </motion.p>
              <motion.p
                animate={{
                  opacity: activeSlide === 2 ? 1 : 0.2,
                  y: activeSlide === 2 ? "-3.5ch" : "0ch",
                }}
                transition={servicesTransition}
                className="text-h1 uppercase"
              >
                цифровые <br />
                продукты
              </motion.p>
            </div>
          </div>
          <div className="relative">
            <div className="opacity-0">
              <ServicesList />
            </div>
            <motion.div
              animate={{
                opacity: activeSlide === 1 ? 1 : 0,
                y: activeSlide === 1 ? "0%" : "-50%",
              }}
              transition={servicesTransition}
              className="absolute top-0 left-0"
            >
              <ServicesList />
            </motion.div>
            <motion.div
              animate={{
                opacity: activeSlide === 2 ? 1 : 0,
                y: activeSlide === 2 ? "0%" : "-50%",
              }}
              transition={servicesTransition}
              className="absolute top-0 left-0"
            >
              <ServicesList />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ServiceMobile() {
  return (
    <div data-services-mobile className="relative isolate xl:hidden">
      <div className="sticky top-0 z-0 h-dvh overflow-hidden">
        <ServicesSlide slide={1} />
      </div>
      <div className="relative z-10 -mt-px">
        <ServicesSlide slide={2} />
      </div>
    </div>
  );
}

function ServicesSlide({ slide }: { slide: ServicesSlideNumber }) {
  const { marker, title } = serviceSlides[slide];

  return (
    <div
      data-slide={slide}
      className="flex flex-col h-dvh justify-between data-[slide=1]:bg-amber-300 data-[slide=2]:bg-blue-300 pt-[clamp(5.25rem,calc(1.6786rem_+_17.8571vw),10.25rem)] pb-5 px-2"
    >
      <div className="flex flex-col gap-[clamp(0.75rem,calc(0.3929rem_+_1.7857vw),1.25rem)]">
        <p className="text-h3 flex items-center justify-center rounded-full ring ring-white w-[clamp(1.5625rem,calc(0.8929rem_+_3.3482vw),2.5rem)] h-[clamp(1.5625rem,calc(0.8929rem_+_3.3482vw),2.5rem)]">
          {marker}
        </p>
        <h3 className="text-h1 uppercase">{title}</h3>
      </div>
      <ServicesList />
    </div>
  );
}

function ServicesList() {
  return (
    <div className="flex flex-col gap-8 md:grid md:grid-cols-2 md:gap-y-[clamp(1.625rem,calc(1.4375rem_+_0.3906vw),1.75rem)] md:gap-x-2 xl:gap-y-[clamp(1.75rem,calc(0.5rem_+_1.5625vw),2rem)] xl:w-[clamp(25rem,calc(-6.25rem_+_39.0625vw),31.25rem)] 2xl:gap-y-[clamp(2rem,2.0833vw,2.5rem)] 2xl:w-[clamp(31.25rem,26.0417vw,37.5rem)] 3xl:w-[clamp(37.5rem,31.25vw,50rem)] 3xl:gap-y-[clamp(2.5rem,2.0833vw,3.3333rem)]">
      <ServicesItem
        number="1"
        title="Выбор мишени и патентный анализ"
        tags={["target id", "competitors"]}
      />
      <ServicesItem
        number="2"
        title="Дизайн молекул"
        tags={["aidd", "in silico"]}
      />
      <ServicesItem
        number="3"
        title="Идентификация и оптимизация хита"
        tags={["hitid", "h2l"]}
      />
      <ServicesItem
        number="4"
        title="Оптимизация лидера"
        tags={["leadopt", "admet"]}
      />
      <ServicesItem
        number="5"
        title="Разработка доклинического кандидата"
        tags={["pk", "pd"]}
      />
    </div>
  );
}

function ServicesItem({
  number,
  title,
  tags,
}: {
  number: string;
  title: string;
  tags: string[];
}) {
  return (
    <div className="flex flex-row gap-[clamp(0.5rem,calc(0.4107rem_+_0.4464vw),0.625rem)] md:gap-[clamp(0.125rem,calc(1.375rem_-_1.5625vw),0.625rem)] xl:flex-col xl:gap-[clamp(0.125rem,calc(-0.5rem_+_0.7813vw),0.25rem)] 2xl:gap-1 2xl:w-fit">
      <p className="text-text tabular-nums w-4 h-4">{number}</p>
      <div className="flex flex-col gap-[clamp(0.5rem,calc(0.4107rem_+_0.4464vw),0.625rem)] xl:gap-[clamp(0.625rem,calc(0rem_+_0.7813vw),0.75rem)] 2xl:gap-3">
        <p className="text-h3 uppercase 2xl:w-[95%]">{title}</p>
        <div className="xl:flex xl:flex-wrap">
          {tags.map((tag, index) => (
            <Tag
              key={index}
              text={tag}
              variant="outline"
              shape={index === 0 ? "rectangle" : "pill"}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
