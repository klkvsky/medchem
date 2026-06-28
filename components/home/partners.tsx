"use client";

import { type PointerEvent, useCallback, useEffect, useRef } from "react";

const partners = [
  "Артген Биотех",
  "Валента",
  "Герофарм",
  "Expert Systems",
  "ИФарма",
  "ChemDiv",
  "РосАтом",
  "Сбер",
  "ХимРар",
  "НМИЦ Радиологии",
  "Иннополис",
  "Insilico Medicine",
  "МГУ",
  "ИБГ",
];

const partnerGroups = [0, 1, 2];
const marqueeSpeed = 0.6;

export function Partners() {
  return (
    <div className="flex flex-col gap-[clamp(7.5rem,calc(-3.75rem_+_56.25vw),23.25rem)] bg-[#E3E3E3] pt-[clamp(5.375rem,calc(2.5179rem_+_14.2857vw),9.375rem)] pb-[clamp(1.25rem,calc(0.3571rem_+_4.4643vw),2.5rem)] md:gap-[clamp(11.875rem,calc(40.3125rem_-_35.5469vw),23.25rem)] md:pt-[clamp(0.875rem,calc(22.125rem_-_26.5625vw),9.375rem)] md:pb-[clamp(1.25rem,calc(4.375rem_-_3.9063vw),2.5rem)] xl:pt-[clamp(0.875rem,calc(-0.375rem_+_1.5625vw),1.125rem)] xl:gap-[clamp(11.875rem,calc(-10rem_+_27.3438vw),16.25rem)] xl:pb-5 2xl:pt-[clamp(1.125rem,calc(0.625rem_+_0.5208vw),1.25rem)] 2xl:gap-[clamp(16.25rem,calc(-0.75rem_+_17.7083vw),20.5rem)] 3xl:pt-[clamp(1.25rem,1.0417vw,1.6667rem)] 3xl:gap-[clamp(20.5rem,17.0833vw,27.3333rem)]">
      <h4 className="text-h2 w-3/4 text-left uppercase px-2 xl:w-[clamp(40%,calc(48rem_-_10vw),50%)] 2xl:w-[40%] xl:ml-auto">
        лидеры рынка работают с нами
      </h4>
      <PartnersMarquee />
    </div>
  );
}

function PartnersMarquee() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const groupRef = useRef<HTMLDivElement>(null);
  const scrollPositionRef = useRef(0);
  const dragRef = useRef({
    active: false,
    startX: 0,
    scrollLeft: 0,
  });

  const setWrappedScrollPosition = useCallback((position: number) => {
    const scrollElement = scrollRef.current;
    const groupElement = groupRef.current;

    if (!scrollElement || !groupElement) {
      return position;
    }

    const groupWidth = groupElement.scrollWidth;

    if (groupWidth <= 0) {
      return position;
    }

    let wrappedPosition = position;

    while (wrappedPosition >= groupWidth * 2) {
      wrappedPosition -= groupWidth;
    }

    while (wrappedPosition <= 0) {
      wrappedPosition += groupWidth;
    }

    scrollPositionRef.current = wrappedPosition;
    scrollElement.scrollLeft = wrappedPosition;

    return wrappedPosition;
  }, []);

  useEffect(() => {
    const scrollElement = scrollRef.current;
    const groupElement = groupRef.current;

    if (!scrollElement || !groupElement) {
      return;
    }

    let animationFrame = 0;

    const getGroupWidth = () => groupElement.scrollWidth;
    scrollPositionRef.current = getGroupWidth();
    scrollElement.scrollLeft = scrollPositionRef.current;

    const animate = () => {
      if (!dragRef.current.active) {
        setWrappedScrollPosition(scrollPositionRef.current + marqueeSpeed);
      }

      animationFrame = requestAnimationFrame(animate);
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [setWrappedScrollPosition]);

  const handlePointerDown = (event: PointerEvent<HTMLDivElement>) => {
    const scrollElement = scrollRef.current;

    if (!scrollElement) {
      return;
    }

    dragRef.current = {
      active: true,
      startX: event.clientX,
      scrollLeft: scrollPositionRef.current,
    };
    scrollElement.setPointerCapture(event.pointerId);
  };

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    const scrollElement = scrollRef.current;

    if (!dragRef.current.active || !scrollElement) {
      return;
    }

    const distance = event.clientX - dragRef.current.startX;

    setWrappedScrollPosition(dragRef.current.scrollLeft - distance);
  };

  const stopDragging = (event: PointerEvent<HTMLDivElement>) => {
    dragRef.current.active = false;
    const scrollElement = scrollRef.current;

    if (scrollElement?.hasPointerCapture(event.pointerId)) {
      scrollElement.releasePointerCapture(event.pointerId);
    }
  };

  return (
    <div
      ref={scrollRef}
      data-partners-marquee
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={stopDragging}
      onPointerCancel={stopDragging}
      className="max-w-full w-full overflow-hidden cursor-grab active:cursor-grabbing select-none"
    >
      <div className="flex flex-row items-start w-max">
        {partnerGroups.map((group) => (
          <div
            key={group}
            ref={group === 0 ? groupRef : undefined}
            className="flex flex-row gap-0 items-start shrink-0 md:gap-5 xl:gap-6 2xl:gap-[clamp(1.5rem,1.5625vw,1.875rem)] 3xl:gap-[clamp(1.875rem,1.5625vw,2.5rem)]"
            aria-hidden={group !== 1}
          >
            {partners.map((partner) => (
              <PartnersItem key={`${group}-${partner}`} name={partner} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

function PartnersItem({ name }: { name: string }) {
  const words = name.trim().split(/\s+/);
  const label =
    words.length > 1 ? (
      <>
        {words[0]}
        <br />
        {words.slice(1).join(" ")}
      </>
    ) : (
      name
    );

  return (
    <div className="flex flex-col items-center justify-start shrink-0 w-[clamp(7.5rem,calc(5.7143rem_+_8.9286vw),10rem)] md:w-[clamp(8.75rem,calc(5.625rem_+_6.5104vw),11.25rem)] xl:w-[clamp(8.75rem,10.9375vw,10.5rem)] 2xl:w-[clamp(10.5rem,10.9375vw,13.125rem)] 3xl:w-[clamp(13.125rem,10.9375vw,17.5rem)] gap-[clamp(0.75rem,calc(0.2143rem_+_2.6786vw),1.5rem)] md:gap-[clamp(1.25rem,calc(1.875rem_-_0.7813vw),1.5rem)] xl:gap-[clamp(1.25rem,1.5625vw,1.5rem)] 2xl:gap-[clamp(1.5rem,1.5625vw,1.875rem)] 3xl:gap-[clamp(1.875rem,1.5625vw,2.5rem)]">
      <div className="w-[clamp(3.125rem,calc(0.8929rem_+_11.1607vw),6.25rem)] h-[clamp(3.125rem,calc(0.8929rem_+_11.1607vw),6.25rem)] object-contain bg-amber-300 md:w-[clamp(3.75rem,calc(10rem_-_7.8125vw),6.25rem)] md:h-[clamp(3.75rem,calc(10rem_-_7.8125vw),6.25rem)] xl:w-[clamp(3.75rem,4.6875vw,4.5rem)] xl:h-[clamp(3.75rem,4.6875vw,4.5rem)] 2xl:w-[clamp(4.5rem,4.6875vw,5.625rem)] 2xl:h-[clamp(4.5rem,4.6875vw,5.625rem)] 3xl:w-[clamp(5.625rem,4.6875vw,7.5rem)] 3xl:h-[clamp(5.625rem,4.6875vw,7.5rem)]" />
      <p className="text-tag-button uppercase text-center xl:text-h3 w-full">
        {label}
      </p>
    </div>
  );
}
