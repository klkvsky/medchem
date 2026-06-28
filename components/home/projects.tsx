"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import {
  type PointerEvent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

import { Logo } from "@/components/ui/logo";
import { PlusIcon } from "@/components/ui/pattern-icons";
import { Tag } from "@/components/ui/tag";

import { numbers } from "./assets";

const MOBILE_VISIBLE_PROJECTS = 5;
const MOBILE_PROJECTS_REVEAL_STEP = 4;
const DESKTOP_PROJECTS_PER_LANE = 8;
const projectLaneGapClass =
  "gap-[clamp(3.75rem,calc(3.5714rem_+_0.8929vw),4rem)]";
const desktopProjectLaneGapClass = "gap-12.5";
const projectRevealTransition = {
  duration: 0.45,
  ease: [0.32, 0.72, 0, 1],
} as const;
type ProjectLaneAlign = "left" | "right";

const createPlaceholderProjects = (count: number) =>
  Array.from({ length: count }, (_, index) => ({ id: `project-${index}` }));

const mobileProjectLanes = {
  left: createPlaceholderProjects(14),
  right: createPlaceholderProjects(7),
} satisfies Record<ProjectLaneAlign, { id: string }[]>;

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
    <div className="hidden xl:flex flex-col items-center pt-3.5 gap-6 pb-10 xl:pt-[clamp(0.875rem,calc(0.25rem_+_0.7813vw),1rem)] xl:gap-[clamp(1.5rem,calc(-0.375rem_+_2.3438vw),1.875rem)] 2xl:pt-[clamp(1rem,1.0417vw,1.25rem)] 2xl:gap-[clamp(1.875rem,calc(-1.125rem_+_3.125vw),2.625rem)] 2xl:pb-[clamp(2.5rem,calc(-19.5rem_+_22.9167vw),8rem)] 3xl:pt-[clamp(1.25rem,1.0417vw,1.6667rem)] 3xl:gap-[clamp(2.625rem,2.1875vw,3.5rem)] 3xl:pb-[clamp(8rem,6.6667vw,10.6667rem)]">
      <Logo className="w-45 h-auto xl:w-[clamp(11.25rem,calc(5rem_+_7.8125vw),12.5rem)] 2xl:w-[clamp(12.5rem,calc(7.5rem_+_5.2083vw),13.75rem)] 3xl:w-[clamp(13.75rem,11.4583vw,18.3333rem)]" />
      <div className="px-2 w-full">
        <div className="flex flex-row items-center text-center border-b-[0.5px] z-20 relative">
          <p className="text-h3 uppercase w-full">разработка молекул</p>
          <div className="w-px h-109 bg-[#B1B1B1] xl:h-[clamp(27.25rem,calc(-0.25rem_+_34.375vw),32.75rem)] 2xl:h-[clamp(32.75rem,calc(-0.25rem_+_34.375vw),41rem)] 3xl:h-[clamp(41rem,34.1667vw,54.6667rem)]" />
          <p className="text-h3 uppercase w-full">цифровые продукты</p>
        </div>
      </div>
      <div className="flex flex-row items-center justify-center w-full *:w-1/2! -translate-y-[110px] xl:-translate-y-[clamp(6.875rem,calc(0.625rem_+_7.8125vw),8.125rem)] 2xl:-translate-y-[clamp(8.125rem,calc(0.625rem_+_7.8125vw),10rem)] 3xl:-translate-y-[clamp(160px,8.3333vw,213px)]">
        <ProjectDesktopLane side="left" />
        <ProjectDesktopLane side="right" />
      </div>
    </div>
  );
}

function ProjectDesktopLane({ side }: { side: "left" | "right" }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const dragRef = useRef({
    active: false,
    startX: 0,
    scrollLeft: 0,
  });
  const [showCenterGradient, setShowCenterGradient] = useState(false);

  const updateGradient = useCallback(() => {
    const scrollElement = scrollRef.current;

    if (!scrollElement) {
      return;
    }

    setShowCenterGradient(Math.abs(scrollElement.scrollLeft) > 1);
  }, []);

  useEffect(() => {
    const scrollElement = scrollRef.current;

    if (!scrollElement) {
      return;
    }

    const handleWheel = (event: globalThis.WheelEvent) => {
      const wheelDistance =
        Math.abs(event.deltaX) > Math.abs(event.deltaY)
          ? event.deltaX
          : event.deltaY;

      if (wheelDistance === 0) {
        return;
      }

      event.preventDefault();
      scrollElement.scrollLeft +=
        side === "left" ? -wheelDistance : wheelDistance;
    };

    updateGradient();
    scrollElement.addEventListener("scroll", updateGradient, { passive: true });
    scrollElement.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("resize", updateGradient);

    return () => {
      scrollElement.removeEventListener("scroll", updateGradient);
      scrollElement.removeEventListener("wheel", handleWheel);
      window.removeEventListener("resize", updateGradient);
    };
  }, [side, updateGradient]);

  const handlePointerDown = (event: PointerEvent<HTMLDivElement>) => {
    const scrollElement = scrollRef.current;

    if (!scrollElement) {
      return;
    }

    dragRef.current = {
      active: true,
      startX: event.clientX,
      scrollLeft: scrollElement.scrollLeft,
    };
    scrollElement.setPointerCapture(event.pointerId);
  };

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    const scrollElement = scrollRef.current;

    if (!dragRef.current.active || !scrollElement) {
      return;
    }

    const distance = event.clientX - dragRef.current.startX;

    scrollElement.scrollLeft = dragRef.current.scrollLeft - distance;
  };

  const stopDragging = (event: PointerEvent<HTMLDivElement>) => {
    const scrollElement = scrollRef.current;

    dragRef.current.active = false;
    scrollElement?.releasePointerCapture(event.pointerId);
  };

  return (
    <div className="relative">
      <div
        ref={scrollRef}
        data-project-desktop-lane={side}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={stopDragging}
        onPointerCancel={stopDragging}
        className={`flex items-start ${desktopProjectLaneGapClass} justify-start overflow-x-auto select-none cursor-grab active:cursor-grabbing [scrollbar-width:none] [&::-webkit-scrollbar]:hidden ${
          side === "left"
            ? "flex-row-reverse pl-2 pr-11.5"
            : "flex-row pl-27.5 pr-2"
        }`}
      >
        {Array.from({ length: DESKTOP_PROJECTS_PER_LANE }).map((_, i) => (
          <ProjectItem key={i} align="left" />
        ))}
        <Image
          src={side === "left" ? numbers.ten : numbers.thirty}
          alt={side === "left" ? "numbers.ten" : "numbers.thirty"}
          width={127}
          height={105}
          className="mt-auto w-auto h-30.5 shrink-0"
          draggable={false}
        />
      </div>
      <motion.div
        aria-hidden
        initial={false}
        animate={{ opacity: showCenterGradient ? 1 : 0 }}
        transition={{ duration: 0.2 }}
        className={`pointer-events-none absolute top-0 h-full w-[clamp(4rem,7.5vw,9rem)] bg-gradient-to-r from-white to-transparent ${
          side === "left" ? "right-0 rotate-180" : "left-0"
        }`}
      />
    </div>
  );
}

function ProjectMobile() {
  const revealButtonRef = useRef<HTMLButtonElement>(null);
  const collapseScrollFrameRef = useRef<number | null>(null);
  const activeCollapseAnimationsRef = useRef(0);
  const shouldTrackCollapseScrollRef = useRef(false);
  const [visibleProjectCount, setVisibleProjectCount] = useState(
    MOBILE_VISIBLE_PROJECTS,
  );
  const maxMobileProjectCount = Math.max(
    ...Object.values(mobileProjectLanes).map((projects) => projects.length),
  );
  const hasHiddenProjects = maxMobileProjectCount > MOBILE_VISIBLE_PROJECTS;
  const hasShownAllProjects = visibleProjectCount >= maxMobileProjectCount;

  const centerRevealButtonInViewport = useCallback(() => {
    const revealButton = revealButtonRef.current;

    if (!revealButton) {
      return;
    }

    const buttonRect = revealButton.getBoundingClientRect();
    const buttonCenter = buttonRect.top + buttonRect.height / 2;
    const viewportCenter = window.innerHeight / 2;
    const scrollDistance = buttonCenter - viewportCenter;

    if (Math.abs(scrollDistance) > 1) {
      window.scrollBy(0, scrollDistance);
    }
  }, []);

  const stopCollapseScrollTracking = useCallback(() => {
    if (
      !shouldTrackCollapseScrollRef.current &&
      activeCollapseAnimationsRef.current === 0
    ) {
      return;
    }

    activeCollapseAnimationsRef.current = Math.max(
      activeCollapseAnimationsRef.current - 1,
      0,
    );

    if (activeCollapseAnimationsRef.current > 0) {
      return;
    }

    shouldTrackCollapseScrollRef.current = false;

    if (collapseScrollFrameRef.current) {
      window.cancelAnimationFrame(collapseScrollFrameRef.current);
      collapseScrollFrameRef.current = null;
    }

    centerRevealButtonInViewport();
  }, [centerRevealButtonInViewport]);

  const startCollapseScrollTracking = useCallback(() => {
    if (!shouldTrackCollapseScrollRef.current) {
      return;
    }

    activeCollapseAnimationsRef.current += 1;

    if (collapseScrollFrameRef.current) {
      return;
    }

    const trackButtonPosition = () => {
      centerRevealButtonInViewport();

      if (activeCollapseAnimationsRef.current > 0) {
        collapseScrollFrameRef.current =
          window.requestAnimationFrame(trackButtonPosition);
        return;
      }

      collapseScrollFrameRef.current = null;
    };

    collapseScrollFrameRef.current =
      window.requestAnimationFrame(trackButtonPosition);
  }, [centerRevealButtonInViewport]);

  useEffect(() => {
    return () => {
      if (collapseScrollFrameRef.current) {
        window.cancelAnimationFrame(collapseScrollFrameRef.current);
      }
    };
  }, []);

  const handleProjectReveal = () => {
    if (hasShownAllProjects) {
      shouldTrackCollapseScrollRef.current = true;
      activeCollapseAnimationsRef.current = 0;
      setVisibleProjectCount(MOBILE_VISIBLE_PROJECTS);
      return;
    }

    setVisibleProjectCount((currentCount) => {
      return Math.min(
        currentCount + MOBILE_PROJECTS_REVEAL_STEP,
        maxMobileProjectCount,
      );
    });
  };

  return (
    <div className="flex flex-col items-center gap-[clamp(2rem,calc(0.75rem_+_6.25vw),3.75rem)] pt-[clamp(4.75rem,calc(1.4464rem_+_16.5179vw),9.375rem)] pb-35 xl:hidden">
      <Logo className="w-[clamp(9.1875rem,calc(2.8036rem_+_31.9196vw),18.125rem)] h-auto" />
      <div className="px-2 w-full">
        <div className="flex flex-row items-center text-center">
          <p className="text-h3 uppercase w-full">
            разработка <br /> молекул
          </p>
          <div className="w-px h-[clamp(5rem,calc(2.1429rem_+_14.2857vw),9rem)] bg-[#B1B1B1]" />
          <p className="text-h3 uppercase w-full">
            цифровые <br /> продукты
          </p>
        </div>
        <div className="w-full h-20 border-t rounded-2xl border-[#B1B1B1] " />
        <div className="flex flex-row justify-between -mt-20 w-full">
          <ProjectLane
            align="left"
            projects={mobileProjectLanes.left}
            visibleProjectCount={visibleProjectCount}
            onCollapseAnimationComplete={stopCollapseScrollTracking}
            onCollapseAnimationStart={startCollapseScrollTracking}
          />
          <ProjectLane
            align="right"
            projects={mobileProjectLanes.right}
            visibleProjectCount={visibleProjectCount}
            onCollapseAnimationComplete={stopCollapseScrollTracking}
            onCollapseAnimationStart={startCollapseScrollTracking}
          />
        </div>
      </div>
      {hasHiddenProjects && (
        <motion.button
          ref={revealButtonRef}
          type="button"
          onClick={handleProjectReveal}
          whileTap={{ scale: 0.98 }}
          transition={projectRevealTransition}
          className="text-h3 uppercase text-white mx-auto py-[clamp(0.75rem,calc(0.5714rem_+_0.8929vw),1rem)] px-[clamp(1.125rem,calc(0.5893rem_+_2.6786vw),1.875rem)] rounded-[10px] bg-[radial-gradient(894.94%_276.37%_at_100%_100%,#A4989B_2%,#A1A1A9_33.26%,#ADB9BC_64.94%,#A3AEA7_94.72%)]"
        >
          {hasShownAllProjects ? "Показать меньше" : "Показать больше"}
        </motion.button>
      )}
    </div>
  );
}

function ProjectLane({
  align,
  onCollapseAnimationComplete,
  onCollapseAnimationStart,
  projects,
  visibleProjectCount,
}: {
  align: ProjectLaneAlign;
  onCollapseAnimationComplete: () => void;
  onCollapseAnimationStart: () => void;
  projects: { id: string }[];
  visibleProjectCount: number;
}) {
  const initialProjects = projects.slice(0, MOBILE_VISIBLE_PROJECTS);
  const revealedProjects = projects.slice(
    MOBILE_VISIBLE_PROJECTS,
    visibleProjectCount,
  );
  const hasRevealedProjects = revealedProjects.length > 0;
  const hasShownAllLaneProjects = visibleProjectCount >= projects.length;

  return (
    <div
      className={`flex flex-col border-x border-[#B1B1B1] w-full h-fit rounded-t-2xl ${projectLaneGapClass} pt-[clamp(8.25rem,calc(10.3929rem_-_4.4643vw),9.5rem)]`}
      style={{
        borderLeft: align === "right" ? "none" : "",
        borderRight: align === "left" ? "none" : "",
        paddingLeft: align === "left" ? 8 : undefined,
        paddingRight: align === "right" ? 8 : undefined,
      }}
    >
      {initialProjects.map((project) => (
        <ProjectItem key={project.id} align={align} />
      ))}
      <AnimatePresence initial={false}>
        {hasRevealedProjects && (
          <motion.div
            key={`${align}-remaining-projects`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            layout
            onAnimationComplete={onCollapseAnimationComplete}
            onAnimationStart={onCollapseAnimationStart}
            transition={projectRevealTransition}
            className={`flex flex-col overflow-hidden ${projectLaneGapClass}`}
          >
            {revealedProjects.map((project) => (
              <ProjectItem key={project.id} align={align} />
            ))}
            {hasShownAllLaneProjects && (
              <Image
                src={align === "left" ? numbers.thirty : numbers.ten}
                alt={align === "left" ? "numbers.thirty" : "numbers.ten"}
                width={127}
                height={105}
                className={align === "left" ? "mr-auto" : "ml-auto"}
              />
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function ProjectItem({ align }: { align?: "left" | "right" }) {
  return (
    <div
      className="flex flex-col gap-[clamp(1rem,calc(0.6429rem_+_1.7857vw),1.5rem)] md:gap-[clamp(1.5rem,calc(-1.4063rem_+_6.0547vw),3.4375rem)] xl:gap-13.75 2xl:gap-[clamp(3.4375rem,calc(0.6875rem_+_2.8646vw),4.125rem)] 3xl:gap-[clamp(4.125rem,3.4375vw,5.5rem)]"
      style={{
        alignItems: align === "left" ? "flex-start" : "flex-end",
      }}
    >
      <div className="w-[clamp(2.875rem,calc(1.9821rem_+_4.4643vw),4.125rem)] h-[clamp(2.875rem,calc(1.9821rem_+_4.4643vw),4.125rem)] bg-[#B1B1B1] xl:w-[clamp(4.125rem,calc(-0.25rem_+_5.4688vw),5rem)] xl:h-[clamp(4.125rem,calc(-0.25rem_+_5.4688vw),5rem)] 2xl:w-[clamp(5rem,5.2083vw,6.25rem)] 2xl:h-[clamp(5rem,5.2083vw,6.25rem)] 3xl:w-[clamp(6.25rem,5.2083vw,8.3333rem)] 3xl:h-[clamp(6.25rem,5.2083vw,8.3333rem)]" />
      <div className="flex flex-col gap-[clamp(1rem,calc(0.6429rem_+_1.7857vw),1.5rem)] md:gap-[clamp(1.125rem,calc(2.0625rem_-_1.1719vw),1.5rem)] xl:gap-[clamp(1.125rem,calc(-0.125rem_+_1.5625vw),1.375rem)] 2xl:gap-[clamp(1.375rem,calc(-0.125rem_+_1.5625vw),1.75rem)] 3xl:gap-[clamp(1.75rem,1.4583vw,2.3333rem)]">
        <div
          className="flex flex-col gap-3 xl:gap-[clamp(0.75rem,calc(0.125rem_+_0.7813vw),0.875rem)] 2xl:gap-[clamp(0.875rem,calc(-0.125rem_+_1.0417vw),1.125rem)] 3xl:gap-[clamp(1.125rem,0.9375vw,1.5rem)]"
          style={{ alignItems: align === "left" ? "flex-start" : "flex-end" }}
        >
          <button className="w-[clamp(1rem,calc(0.8214rem_+_0.8929vw),1.25rem)] h-[clamp(1rem,calc(0.8214rem_+_0.8929vw),1.25rem)] flex items-center justify-center bg-[#E3E3E3] rounded-full">
            <PlusIcon />
          </button>
          <div
            className="flex flex-col gap-[clamp(0.25rem,calc(0.1607rem_+_0.4464vw),0.375rem)] 2xl:gap-[clamp(0.375rem,calc(-0.125rem_+_0.5208vw),0.5rem)] 3xl:gap-[clamp(0.5rem,0.4167vw,0.6667rem)]"
            style={{ alignItems: align === "left" ? "flex-start" : "flex-end" }}
          >
            <p className="text-h3">TNIK</p>
            <p className="text-text font-diatype">Phase II</p>
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
