"use client";

import { Tag } from "@/components/ui/tag";
import type { HomePageData, HomeTag, SanityImage } from "@/types/home";
import { motion, useMotionValueEvent, useScroll } from "motion/react";
import { Fragment, useLayoutEffect, useRef, useState } from "react";

import { SanityImageView } from "./sanity-image";

type ServicesData = NonNullable<HomePageData["services"]>;
type ServiceSlide = NonNullable<
  NonNullable<ServicesData["serviceSlides"]>[number]
>;

const servicesTransition = {
  duration: 0.5,
  ease: [0.32, 0.72, 0, 1],
} as const;

function tagShape(type: HomeTag["type"]) {
  return type ?? "rectangle";
}

function splitTitle(title: string | null | undefined) {
  return (title ?? "").split(/\s+/).filter(Boolean).join("\n");
}

function normalizeTextBreaks(text: string | null | undefined) {
  return (text ?? "").replace(/[\u2028\u2029]/g, "\n");
}

function firstImage(...images: Array<SanityImage | null | undefined>) {
  return images.find((image) => image?.url) ?? null;
}

function getServiceBackgroundImage(
  slide: ServiceSlide,
  variant: "mobile" | "tablet" | "desktop",
) {
  if (variant === "mobile") {
    return firstImage(
      slide.mobileBackgroundImage,
      slide.tabletBackgroundImage,
      slide.desktopBackgroundImage,
    );
  }

  if (variant === "tablet") {
    return firstImage(
      slide.tabletBackgroundImage,
      slide.desktopBackgroundImage,
      slide.mobileBackgroundImage,
    );
  }

  return firstImage(
    slide.desktopBackgroundImage,
    slide.tabletBackgroundImage,
    slide.mobileBackgroundImage,
  );
}

export function Services({ data }: { data?: ServicesData | null }) {
  const slides = data?.serviceSlides?.filter(Boolean) ?? [];

  if (!slides.length) {
    return null;
  }

  return (
    <div id="services" data-nav-title="Услуги">
      <ServiceMobile slides={slides} />
      <ServicesDesktop slides={slides} />
    </div>
  );
}

function ServicesDesktop({ slides }: { slides: ServiceSlide[] }) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const nextSlide = Math.min(
      slides.length - 1,
      Math.max(0, Math.floor(latest * slides.length)),
    );

    setActiveSlide((currentSlide) =>
      currentSlide === nextSlide ? currentSlide : nextSlide,
    );
  });

  const activeSlideData = slides[activeSlide] ?? slides[0];

  return (
    <div
      ref={sectionRef}
      data-services-desktop
      style={{
        height: `${slides.length * 100}dvh`,
      }}
      className="relative hidden h-[200dvh] bg-blue-900 text-white xl:block"
    >
      <div className="sticky top-0 isolate flex h-screen items-end overflow-hidden px-2 xl:pb-[clamp(2.5rem,calc(-12.5rem_+_18.75vw),5.5rem)] 2xl:pb-[clamp(5.5rem,calc(0.5rem_+_3.125vw),6.25rem)] 3xl:pb-[clamp(6.25rem,5.2083vw,8.3333rem)]">
        {slides.map((slide, index) => (
          <motion.div
            key={slide._key ?? slide.title ?? index}
            aria-hidden
            animate={{ opacity: activeSlide === index ? 1 : 0 }}
            transition={servicesTransition}
            className="absolute inset-0 -z-20"
          >
            <SanityImageView
              image={getServiceBackgroundImage(slide, "desktop")}
              fill
              sizes="100vw"
              className="object-cover"
            />
          </motion.div>
        ))}
        <div aria-hidden className="absolute inset-0 -z-10 bg-black/35" />
        <div className="relative z-10 flex flex-row items-start justify-between w-full">
          <div className="flex flex-row items-start gap-16.5 xl:gap-[clamp(4.125rem,calc(-2.75rem_+_8.5938vw),5.5rem)] 2xl:gap-[clamp(5.5rem,calc(0.5rem_+_5.2083vw),6.75rem)] 3xl:gap-[clamp(6.75rem,5.625vw,9rem)]">
            <p className="text-h3 uppercase w-10 h-10 flex items-center justify-center border rounded-full 2xl:w-[clamp(2.5rem,2.6042vw,3.125rem)] 2xl:h-[clamp(2.5rem,2.6042vw,3.125rem)] 3xl:w-[clamp(3.125rem,2.6042vw,4.1667rem)] 3xl:h-[clamp(3.125rem,2.6042vw,4.1667rem)]">
              {activeSlideData.bulletPointText}
            </p>
            <div className="flex flex-col gap-3.5 xl:gap-[clamp(0.875rem,calc(0.25rem_+_0.7813vw),1rem)] 2xl:gap-[clamp(1rem,1.0417vw,1.25rem)] 3xl:gap-[clamp(1.25rem,1.0417vw,1.6667rem)]">
              {slides.map((slide, index) => (
                <motion.p
                  key={slide._key ?? slide.title ?? index}
                  animate={{
                    opacity: activeSlide === index ? 1 : 0.2,
                    y: `-${activeSlide * 3.5}ch`,
                  }}
                  transition={servicesTransition}
                  className="text-h1 uppercase whitespace-pre-line"
                >
                  {splitTitle(slide.title)}
                </motion.p>
              ))}
            </div>
          </div>
          <div className="relative overflow-hidden">
            <div className="opacity-0">
              <ServicesList services={activeSlideData.services ?? []} />
            </div>
            {slides.map((slide, index) => (
              <motion.div
                key={slide._key ?? slide.title ?? index}
                initial={false}
                animate={{
                  opacity: activeSlide === index ? 1 : 0,
                  y:
                    index === activeSlide
                      ? "0%"
                      : index < activeSlide
                        ? "-100%"
                        : "100%",
                }}
                transition={servicesTransition}
                className="absolute top-0 left-0"
              >
                <ServicesList services={slide.services ?? []} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function ServiceMobile({ slides }: { slides: ServiceSlide[] }) {
  const firstSlideRef = useRef<HTMLDivElement>(null);
  const [stickyTop, setStickyTop] = useState(0);

  useLayoutEffect(() => {
    const el = firstSlideRef.current;
    if (!el) return;

    const updateStickyTop = () => {
      // Negative top when taller than the viewport so content scrolls through
      // fully before pinning; next slide then covers.
      setStickyTop(Math.min(0, window.innerHeight - el.offsetHeight));
    };

    updateStickyTop();

    const resizeObserver = new ResizeObserver(updateStickyTop);
    resizeObserver.observe(el);
    window.addEventListener("resize", updateStickyTop);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", updateStickyTop);
    };
  }, [slides.length]);

  return (
    <div data-services-mobile className="relative isolate xl:hidden">
      {slides.map((slide, index) => {
        const slideKey = slide._key ?? slide.title ?? index;

        if (index === 0) {
          return (
            <Fragment key={slideKey}>
              <div
                ref={firstSlideRef}
                className="sticky z-0 h-fit overflow-hidden"
                style={{ top: stickyTop }}
              >
                <ServicesSlide slide={slide} slideIndex={index} />
              </div>
              <div aria-hidden className="h-[15vh]" />
            </Fragment>
          );
        }

        return (
          <div key={slideKey} className="relative z-10 -mt-px">
            <ServicesSlide slide={slide} slideIndex={index} />
          </div>
        );
      })}
    </div>
  );
}

function ServicesSlide({
  slide,
  slideIndex,
}: {
  slide: ServiceSlide;
  slideIndex: number;
}) {
  return (
    <div
      data-slide={slideIndex + 1}
      className="relative flex h-fit min-h-screen flex-col justify-between overflow-hidden data-[slide=1]:bg-neutral-900 data-[slide=2]:bg-blue-900 pt-[clamp(5.25rem,calc(1.6786rem_+_17.8571vw),10.25rem)] pb-5 px-2 text-white! gap-15"
    >
      <ServicesSlideBackground slide={slide} />
      <div className="relative z-20 flex flex-col gap-[clamp(0.75rem,calc(0.3929rem_+_1.7857vw),1.25rem)]">
        <p className="text-h3 flex items-center justify-center rounded-full ring ring-white w-[clamp(1.5625rem,calc(0.8929rem_+_3.3482vw),2.5rem)] h-[clamp(1.5625rem,calc(0.8929rem_+_3.3482vw),2.5rem)]">
          {slide.bulletPointText}
        </p>
        <h3 className="text-h1 uppercase whitespace-pre-line">
          {splitTitle(slide.title)}
        </h3>
      </div>
      <div className="relative z-20">
        <ServicesList services={slide.services ?? []} />
      </div>
    </div>
  );
}

function ServicesSlideBackground({ slide }: { slide: ServiceSlide }) {
  const mobileImage = getServiceBackgroundImage(slide, "mobile");
  const tabletImage = getServiceBackgroundImage(slide, "tablet");

  return (
    <>
      <div aria-hidden className="absolute inset-0 z-0">
        <SanityImageView
          image={mobileImage}
          fill
          sizes="100vw"
          className="object-cover object-left md:hidden"
        />
        <SanityImageView
          image={tabletImage}
          fill
          sizes="100vw"
          className="hidden object-cover md:block xl:hidden"
        />
      </div>
      <div aria-hidden className="absolute inset-0 z-10 bg-black/35" />
    </>
  );
}

function ServicesList({
  services,
}: {
  services: NonNullable<ServiceSlide["services"]>;
}) {
  return (
    <div className="flex flex-col gap-8 md:grid md:grid-cols-2 md:gap-y-[clamp(1.625rem,calc(1.4375rem_+_0.3906vw),1.75rem)] md:gap-x-2 xl:gap-y-[clamp(1.75rem,calc(0.5rem_+_1.5625vw),2rem)] xl:w-[clamp(25rem,calc(-6.25rem_+_39.0625vw),31.25rem)] 2xl:gap-y-[clamp(2rem,2.0833vw,2.5rem)] 2xl:w-[clamp(31.25rem,26.0417vw,37.5rem)] 3xl:w-[clamp(37.5rem,31.25vw,50rem)] 3xl:gap-y-[clamp(2.5rem,2.0833vw,3.3333rem)]">
      {services.map((service, index) => (
        <ServicesItem
          key={service._key ?? service.title ?? index}
          number={`${index + 1}`}
          title={service.title ?? ""}
          tags={service.tags ?? []}
        />
      ))}
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
  tags: HomeTag[];
}) {
  return (
    <div className="flex flex-row gap-[clamp(0.5rem,calc(0.4107rem_+_0.4464vw),0.625rem)] max-md:w-[80%] md:gap-[clamp(0.125rem,calc(1.375rem_-_1.5625vw),0.625rem)] xl:flex-col xl:gap-[clamp(0.125rem,calc(-0.5rem_+_0.7813vw),0.25rem)] 2xl:gap-2 2xl:w-fit">
      <p className="text-text tabular-nums w-4 h-4">{number}</p>
      <div className="flex flex-col gap-[clamp(0.5rem,calc(0.4107rem_+_0.4464vw),0.625rem)] xl:gap-[clamp(0.625rem,calc(0rem_+_0.7813vw),0.75rem)] 2xl:gap-3">
        <p className="text-h3 uppercase w-[95%] whitespace-pre-line">
          {normalizeTextBreaks(title)}
        </p>
        <div className="-space-x-[0.5px] -space-y-[0.5px] xl:flex xl:flex-wrap">
          {tags.map((tag, index) => (
            <Tag
              key={tag._key ?? tag.name ?? index}
              text={tag.name ?? ""}
              variant="outline"
              shape={tagShape(tag.type)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
