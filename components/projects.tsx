"use client";

import { useRef, useCallback, useEffect } from "react";
import { Tag } from "@/components/tag";
import ProjectCard from "@/components/project-card";

function useDragScroll() {
  const scrollEl = useRef<HTMLDivElement>(null);
  const lineEl = useRef<HTMLDivElement>(null);
  const leftTitle = useRef<HTMLParagraphElement>(null);
  const rightTitle = useRef<HTMLParagraphElement>(null);
  const dragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  useEffect(() => {
    const el = scrollEl.current;
    if (!el) return;
    const initial = (el.scrollWidth - el.clientWidth) / 2;
    el.scrollLeft = initial;

    let minTx = -Infinity;
    let maxTx = Infinity;

    const computeBounds = () => {
      if (!lineEl.current || !leftTitle.current || !rightTitle.current) return;
      lineEl.current.style.transform = "";
      const w = window.innerWidth;
      const l = leftTitle.current.getBoundingClientRect().left;
      const r = rightTitle.current.getBoundingClientRect().right;
      // left title stops at 20% from the left edge
      minTx = 0.05 * w - l;
      // right title stops at 95% from the right edge
      maxTx = 0.95 * w - r;
    };

    const sync = () => {
      if (!lineEl.current) return;
      const delta = el.scrollLeft - initial;
      const tx = Math.max(minTx, Math.min(maxTx, -delta));
      lineEl.current.style.transform = `translateX(${tx}px)`;
    };

    const onResize = () => {
      computeBounds();
      sync();
    };

    computeBounds();
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
    leftTitle,
    rightTitle,
    onMouseDown,
    onMouseUp,
    onMouseMove,
    onMouseLeave: onMouseUp,
  };
}

export default function Projects() {
  const drag = useDragScroll();

  return (
    <div className="min-h-dvh flex flex-col items-center pt-15">
      <div
        ref={drag.lineEl}
        className="w-px h-50 bg-dark-gray relative text-dark-gray will-change-transform"
      >
        <div className="text-hero-subtitle uppercase absolute top-1/2 left-1/2 -translate-1/2 flex flex-row items-center gap-15 text-center font-aeonik-mono">
          <p ref={drag.leftTitle}>
            разработка <br /> молекул
          </p>
          <p ref={drag.rightTitle}>
            цифровые <br /> продукты
          </p>
        </div>
        <div className="absolute top-0 left-1/2 -translate-1/2">
          <Tag icon="rectangle" size={6} />
        </div>
      </div>
      <div
        ref={drag.scrollEl}
        onMouseDown={drag.onMouseDown}
        onMouseUp={drag.onMouseUp}
        onMouseMove={drag.onMouseMove}
        onMouseLeave={drag.onMouseLeave}
        className="hidden md:flex flex-row items-center overflow-x-auto max-w-dvw gap-30 relative border-t border-current select-none cursor-grab"
        style={{ scrollbarWidth: "none" }}
      >
        <div className="shrink-0 w-1" />
        <div className="flex flex-row gap-15 -translate-y-1">
          {Array.from({ length: 8 }).map((_, index) => (
            <ProjectCard
              key={index}
              title="YO"
              year={2026}
              tag="Second tag type"
              direction="up"
            />
          ))}
        </div>
        <div className="flex flex-row gap-15 -translate-y-1">
          {Array.from({ length: 8 }).map((_, index) => (
            <ProjectCard
              key={index}
              title="BO"
              year={2026}
              tag="Second tag type"
              direction="up"
            />
          ))}
        </div>
        <div className="shrink-0 w-1" />
      </div>
      {/* mobile */}
      <div className="grid grid-cols-2 w-full px-13 relative md:hidden">
        <div className="absolute top-0 left-13 w-[calc(100dvw-var(--spacing)*26)] h-px bg-dark-gray" />
        <div className="flex flex-col gap-15 relative pt-19.5 pb-15">
          <div className="absolute top-0 left-0 w-px h-full bg-dark-gray" />
          <ProjectCard
            title={`TNIK.first\nin class`}
            year={2026}
            tag="Second tag type"
            direction="left"
          />
          <ProjectCard
            title={`TNIK.first\nin class`}
            year={2026}
            tag="Second tag type"
            direction="left"
          />
          <ProjectCard
            title={`TNIK.first\nin class`}
            year={2026}
            tag="Second tag type"
            direction="left"
          />
        </div>
        <div className="flex flex-col gap-15 relative pt-19.5 pb-15">
          <div className="absolute top-0 right-0 w-px h-full bg-dark-gray" />
          <ProjectCard
            title={`TNIK.first\nin class`}
            year={2026}
            tag="Second tag type"
            direction="right"
          />
          <ProjectCard
            title={`TNIK.first\nin class`}
            year={2026}
            tag="Second tag type"
            direction="right"
          />
          <ProjectCard
            title={`TNIK.first\nin class`}
            year={2026}
            tag="Second tag type"
            direction="right"
          />
          <ProjectCard
            title={`TNIK.first\nin class`}
            year={2026}
            tag="Second tag type"
            direction="right"
          />
        </div>
      </div>
      {/* end of mobile */}
    </div>
  );
}
