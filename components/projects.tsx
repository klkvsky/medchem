"use client";

import { useRef, useCallback, useEffect } from "react";
import { Tag } from "@/components/tag";
import ProjectCard from "@/components/project-card";

type ProjectItem = {
  title: string;
  subtitle: string;
  image: string;
  tags: readonly string[];
};

type Track = {
  title: { lines: readonly string[] };
  items: readonly ProjectItem[];
};

function useDragScroll() {
  const scrollEl = useRef<HTMLDivElement>(null);
  const lineEl = useRef<HTMLDivElement>(null);
  const centerEl = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  useEffect(() => {
    const el = scrollEl.current;
    if (!el) return;
    const getInitialScrollLeft = () => {
      const center = centerEl.current;
      if (!center) return (el.scrollWidth - el.clientWidth) / 2;

      const centeredOnDivider =
        center.offsetLeft + center.offsetWidth / 2 - el.clientWidth / 2;
      const maxScrollLeft = el.scrollWidth - el.clientWidth;

      return Math.max(0, Math.min(maxScrollLeft, centeredOnDivider));
    };

    let initial = getInitialScrollLeft();
    el.scrollLeft = initial;

    const sync = () => {
      if (!lineEl.current) return;
      const delta = el.scrollLeft - initial;
      lineEl.current.style.transform = `translateX(${-delta}px)`;
    };

    const onResize = () => {
      initial = getInitialScrollLeft();
      sync();
    };

    sync();

    el.addEventListener("scroll", sync, { passive: true });
    window.addEventListener("resize", onResize);
    return () => {
      el.removeEventListener("scroll", sync);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  const onMouseDown = useCallback((e: React.MouseEvent) => {
    dragging.current = true;
    startX.current = e.pageX - (scrollEl.current?.offsetLeft ?? 0);
    scrollLeft.current = scrollEl.current?.scrollLeft ?? 0;
    if (scrollEl.current) scrollEl.current.style.cursor = "grabbing";
  }, []);

  const onMouseUp = useCallback(() => {
    dragging.current = false;
    if (scrollEl.current) scrollEl.current.style.cursor = "grab";
  }, []);

  const onMouseMove = useCallback((e: React.MouseEvent) => {
    if (!dragging.current || !scrollEl.current) return;
    e.preventDefault();
    const x = e.pageX - scrollEl.current.offsetLeft;
    const walk = x - startX.current;
    scrollEl.current.scrollLeft = scrollLeft.current - walk;
  }, []);

  return {
    scrollEl,
    lineEl,
    centerEl,
    onMouseDown,
    onMouseUp,
    onMouseMove,
    onMouseLeave: onMouseUp,
  };
}

export default function Projects({
  data,
}: {
  data: { title: { lines: readonly string[] }; tracks: readonly Track[] };
}) {
  const {
    scrollEl,
    lineEl,
    centerEl,
    onMouseDown,
    onMouseUp,
    onMouseMove,
    onMouseLeave,
  } = useDragScroll();
  const [trackA, trackB] = data.tracks;

  return (
    <section
      id="portfolio"
      className="min-h-dvh flex flex-col items-center pt-15"
    >
      <h2 className="sr-only">{data.title.lines.join(" ")}</h2>
      <div
        ref={lineEl}
        className="w-px h-50 bg-current relative text-dark-gray will-change-transform xl:h-143.5"
      >
        <div className="text-hero-subtitle uppercase absolute top-1/2 left-1/2 -translate-y-1/2 text-center font-aeonik-mono">
          <p className="absolute top-1/2 right-15 -translate-y-1/2 xl:whitespace-nowrap">
            {trackA.title.lines.join("\n")}
          </p>
          <p className="absolute top-1/2 left-15 -translate-y-1/2 xl:whitespace-nowrap">
            {trackB.title.lines.join("\n")}
          </p>
        </div>
        <div className="absolute top-0 left-1/2 -translate-1/2">
          <Tag icon="rectangle" size={6} />
        </div>
      </div>
      <div
        ref={scrollEl}
        onMouseDown={onMouseDown}
        onMouseUp={onMouseUp}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        className="hidden md:flex flex-row items-center overflow-x-auto max-w-dvw gap-0 relative border-t border-current select-none cursor-grab "
        style={{ scrollbarWidth: "none" }}
      >
        <div className="shrink-0 w-10" />
        <div className="flex flex-row gap-15 -translate-y-1">
          {trackA.items.map((item, index) => (
            <ProjectCard
              key={index}
              title={item.title}
              subtitle={item.subtitle}
              image={item.image}
              tags={item.tags}
              direction="up"
            />
          ))}
        </div>
        <div ref={centerEl} className="shrink-0 w-100" aria-hidden="true" />
        <div className="flex flex-row gap-15 -translate-y-1">
          {trackB.items.map((item, index) => (
            <ProjectCard
              key={index}
              title={item.title}
              subtitle={item.subtitle}
              image={item.image}
              tags={item.tags}
              direction="up"
            />
          ))}
        </div>
        <div className="shrink-0 w-10" />
      </div>
      {/* mobile */}
      <div className="grid grid-cols-2 w-full px-13 relative md:hidden">
        <div className="absolute top-0 left-13 w-[calc(100dvw-var(--spacing)*26)] h-px bg-dark-gray" />
        <div className="flex flex-col gap-15 relative pt-19.5 pb-15">
          <div className="absolute top-0 left-0 w-px h-full bg-dark-gray" />
          {trackA.items.map((item, index) => (
            <ProjectCard
              key={index}
              title={item.title}
              subtitle={item.subtitle}
              image={item.image}
              tags={item.tags}
              direction="left"
            />
          ))}
        </div>
        <div className="flex flex-col gap-15 relative pt-19.5 pb-15">
          <div className="absolute top-0 right-0 w-px h-full bg-dark-gray" />
          {trackB.items.map((item, index) => (
            <ProjectCard
              key={index}
              title={item.title}
              subtitle={item.subtitle}
              image={item.image}
              tags={item.tags}
              direction="right"
            />
          ))}
        </div>
      </div>
      {/* end of mobile */}
    </section>
  );
}
