"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import {
  type MouseEvent,
  type PointerEvent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

import { Logo } from "@/components/ui/logo";
import { PlusIcon } from "@/components/ui/pattern-icons";
import { Tag } from "@/components/ui/tag";
import type { HomePageData, HomeTag, SanityImage } from "@/sanity/lib/home";

import { numbers } from "./assets";
import { CloseIcon } from "./icons";
import { SanityImageView } from "./sanity-image";

const MOBILE_VISIBLE_PROJECTS = 5;
const MOBILE_PROJECTS_REVEAL_STEP = 4;
const DESKTOP_PROJECTS_PER_LANE = 8;
const DESKTOP_DRAG_CLICK_THRESHOLD = 5;
const projectLaneGapClass =
  "gap-[clamp(3.75rem,calc(3.5714rem_+_0.8929vw),4rem)]";
const desktopProjectLaneGapClass = "gap-12.5";
const desktopProjectEndImageClass = "mt-auto w-auto h-30.5 shrink-0";
const mobileProjectEndImageClass = "w-[127px] h-[105px] object-contain";
const projectRevealTransition = {
  duration: 0.45,
  ease: [0.32, 0.72, 0, 1],
} as const;

type ProjectLaneAlign = "left" | "right";
type PortfolioData = NonNullable<HomePageData["portfolio"]>;
type PortfolioSection = NonNullable<
  NonNullable<PortfolioData["sections"]>[number]
>;
type Project = NonNullable<NonNullable<PortfolioSection["projects"]>[number]>;

function tagShape(type: HomeTag["type"]) {
  return type ?? "rectangle";
}

export function Projects({ data }: { data?: PortfolioData | null }) {
  const [openedProject, setOpenedProject] = useState<Project | null>(null);
  const sections = data?.sections ?? [];
  const leftSection = sections[0];
  const rightSection = sections[1];

  if (!leftSection || !rightSection) {
    return null;
  }

  return (
    <div id="portfolio" data-nav-title="Портфолио">
      <ProjectItemPopup
        project={openedProject}
        close={() => {
          setOpenedProject(null);
        }}
      />
      <ProjectDesktop
        leftSection={leftSection}
        rightSection={rightSection}
        openProject={(project: Project) => {
          setOpenedProject(project);
        }}
      />
      <ProjectMobile
        leftSection={leftSection}
        rightSection={rightSection}
        openProject={(project: Project) => {
          setOpenedProject(project);
        }}
      />
    </div>
  );
}

function ProjectDesktop({
  leftSection,
  rightSection,
  openProject,
}: {
  leftSection: PortfolioSection;
  rightSection: PortfolioSection;
  openProject: (project: Project) => void;
}) {
  return (
    <div className="hidden xl:flex flex-col items-center pt-3.5 gap-6 pb-10 xl:pt-[clamp(0.875rem,calc(0.25rem_+_0.7813vw),1rem)] xl:gap-[clamp(1.5rem,calc(-0.375rem_+_2.3438vw),1.875rem)] 2xl:pt-[clamp(1rem,1.0417vw,1.25rem)] 2xl:gap-[clamp(1.875rem,calc(-1.125rem_+_3.125vw),2.625rem)] 2xl:pb-[clamp(2.5rem,calc(-19.5rem_+_22.9167vw),1rem)] 3xl:pt-[clamp(1.25rem,1.0417vw,1.6667rem)] 3xl:gap-[clamp(2.625rem,2.1875vw,3.5rem)] 3xl:pb-[clamp(8rem,6.6667vw,3rem)] relative">
      <div
        className="absolute top-2 right-2 hidden xl:flex flex-row items-start gap-3 z-100 text-white py-4 px-5 w-78 rounded-2xl 2xl:w-94 3xl:w-117.5 3xl:gap-4"
        style={{
          background:
            "radial-gradient(276.56% 1199.59% at 164.54% 144.07%, #A4989B 0%, #A1A1A9 33.26%, #ADB9BC 64.94%, #A3AEA7 94.72%)",
        }}
      >
        <div className="w-1.5 h-1.5 rounded-full bg-white translate-y-2 shrink-0" />
        <div className="flex flex-col gap-2 3xl:gap-2.5">
          <p className="text-h3 font-aeonik-mono uppercase">Подсказка</p>
          <p className="text-text font-diatype">
            Перемещайтесь по схеме с помощью горизонтального скролла
          </p>
        </div>
      </div>
      <Logo className="w-45 h-auto text-[#411319] xl:w-[clamp(11.25rem,calc(5rem_+_7.8125vw),12.5rem)] 2xl:w-[clamp(12.5rem,calc(7.5rem_+_5.2083vw),13.75rem)] 3xl:w-[clamp(13.75rem,11.4583vw,18.3333rem)]" />
      <div className="px-2 w-full pointer-events-none">
        <div className="flex flex-row items-center text-center border-b-[0.5px] z-20 relative">
          <p className="text-h3 uppercase w-full -translate-y-[200%] flex items-center justify-end pr-50">
            {leftSection.title}
          </p>
          <div className="w-px h-109 bg-[#B1B1B1] xl:h-[clamp(27.25rem,calc(-0.25rem_+_34.375vw),25rem)] 2xl:h-[clamp(32.75rem,calc(-0.25rem_+_34.375vw),35rem)] 3xl:h-[clamp(41rem,34.1667vw,45rem)]" />
          <p className="text-h3 uppercase w-full -translate-y-[200%] flex items-center justify-start pl-50">
            {rightSection.title}
          </p>
        </div>
      </div>
      <div className="flex flex-row items-center justify-center w-full *:w-1/2! -translate-y-[110px] xl:-translate-y-[clamp(6.875rem,calc(0.625rem_+_7.8125vw),8.125rem)] 2xl:-translate-y-[clamp(8.125rem,calc(0.625rem_+_7.8125vw),10rem)] 3xl:-translate-y-[clamp(160px,8.3333vw,213px)]">
        <ProjectDesktopLane
          side="left"
          projects={(leftSection.projects ?? []).slice(
            0,
            DESKTOP_PROJECTS_PER_LANE,
          )}
          endImage={leftSection.endImage}
          openProject={(project: Project) => {
            openProject(project);
          }}
        />
        <ProjectDesktopLane
          side="right"
          projects={(rightSection.projects ?? []).slice(
            0,
            DESKTOP_PROJECTS_PER_LANE,
          )}
          endImage={rightSection.endImage}
          openProject={(project: Project) => {
            openProject(project);
          }}
        />
      </div>
    </div>
  );
}

function ProjectDesktopLane({
  side,
  projects,
  endImage,
  openProject,
}: {
  side: "left" | "right";
  projects: Project[];
  endImage?: SanityImage | null;
  openProject: (project: Project) => void;
}) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const dragRef = useRef({
    active: false,
    moved: false,
    startX: 0,
    scrollLeft: 0,
  });
  const suppressClickRef = useRef(false);
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
    const eventTarget = event.target;

    if (
      !scrollElement ||
      (eventTarget instanceof Element && eventTarget.closest("button"))
    ) {
      return;
    }

    dragRef.current = {
      active: true,
      moved: false,
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

    if (Math.abs(distance) > DESKTOP_DRAG_CLICK_THRESHOLD) {
      dragRef.current.moved = true;
    }

    scrollElement.scrollLeft = dragRef.current.scrollLeft - distance;
  };

  const stopDragging = (event: PointerEvent<HTMLDivElement>) => {
    const scrollElement = scrollRef.current;

    if (!dragRef.current.active) {
      return;
    }

    const shouldSuppressClick = dragRef.current.moved;
    suppressClickRef.current = shouldSuppressClick;
    if (suppressClickRef.current) {
      window.setTimeout(() => {
        suppressClickRef.current = false;
      }, 0);
    }

    dragRef.current = {
      ...dragRef.current,
      active: false,
      moved: false,
    };

    if (scrollElement?.hasPointerCapture(event.pointerId)) {
      scrollElement.releasePointerCapture(event.pointerId);
    }
  };

  const handleClickCapture = (event: MouseEvent<HTMLDivElement>) => {
    if (!suppressClickRef.current) {
      return;
    }

    suppressClickRef.current = false;
    event.preventDefault();
    event.stopPropagation();
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
        onClickCapture={handleClickCapture}
        className={`flex items-start ${desktopProjectLaneGapClass} justify-start overflow-x-auto select-none cursor-grab active:cursor-grabbing [scrollbar-width:none] [&::-webkit-scrollbar]:hidden ${
          side === "left"
            ? "flex-row-reverse pl-2 pr-11.5"
            : "flex-row pl-27.5 pr-2"
        }`}
      >
        {projects.map((project, index) => (
          <ProjectItem
            key={project._key ?? project.title ?? index}
            project={project}
            align="left"
            openProject={(project: Project) => {
              openProject(project);
            }}
          />
        ))}
        {endImage?.url ? (
          <SanityImageView
            image={endImage}
            className={desktopProjectEndImageClass}
            sizes="12vw"
          />
        ) : (
          <Image
            src={side === "left" ? numbers.ten : numbers.thirty}
            alt={side === "left" ? "numbers.ten" : "numbers.thirty"}
            width={127}
            height={105}
            className={desktopProjectEndImageClass}
            draggable={false}
          />
        )}
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

function ProjectMobile({
  leftSection,
  rightSection,
  openProject,
}: {
  leftSection: PortfolioSection;
  rightSection: PortfolioSection;
  openProject: (project: Project) => void;
}) {
  const mobileProjectLanes = {
    left: leftSection.projects ?? [],
    right: rightSection.projects ?? [],
  } satisfies Record<ProjectLaneAlign, Project[]>;
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
      <Logo className="w-[clamp(9.1875rem,calc(2.8036rem_+_31.9196vw),18.125rem)] h-auto text-[#411319]" />
      <div className="px-2 w-full">
        <div className="flex flex-row items-center text-center">
          <p className="text-h3 uppercase w-full">
            <span className="flex max-w-1/2 text-center mx-auto">
              {leftSection.title}
            </span>
          </p>
          <div className="w-px h-[clamp(5rem,calc(2.1429rem_+_14.2857vw),9rem)] bg-[#B1B1B1]" />
          <p className="text-h3 uppercase w-full">
            <span className="flex max-w-1/2 text-center mx-auto">
              {rightSection.title}
            </span>
          </p>
        </div>
        <div className="w-full h-20 border-t rounded-2xl border-[#B1B1B1] " />
        <div className="flex flex-row justify-between -mt-20 w-full">
          <ProjectLane
            align="left"
            projects={mobileProjectLanes.left}
            endImage={leftSection.endImage}
            visibleProjectCount={visibleProjectCount}
            onCollapseAnimationComplete={stopCollapseScrollTracking}
            onCollapseAnimationStart={startCollapseScrollTracking}
            openProject={(project: Project) => {
              openProject(project);
            }}
          />
          <ProjectLane
            align="right"
            projects={mobileProjectLanes.right}
            endImage={rightSection.endImage}
            visibleProjectCount={visibleProjectCount}
            onCollapseAnimationComplete={stopCollapseScrollTracking}
            onCollapseAnimationStart={startCollapseScrollTracking}
            openProject={(project: Project) => {
              openProject(project);
            }}
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
  endImage,
  visibleProjectCount,
  openProject,
}: {
  align: ProjectLaneAlign;
  onCollapseAnimationComplete: () => void;
  onCollapseAnimationStart: () => void;
  projects: Project[];
  endImage?: SanityImage | null;
  visibleProjectCount: number;
  openProject: (project: Project) => void;
}) {
  const initialProjects = projects.slice(0, MOBILE_VISIBLE_PROJECTS);
  const revealedProjects = projects.slice(
    MOBILE_VISIBLE_PROJECTS,
    visibleProjectCount,
  );
  const hasRevealedProjects = revealedProjects.length > 0;
  const hasShownAllLaneProjects = visibleProjectCount >= projects.length;
  const shouldShowStaticEndImage =
    hasShownAllLaneProjects && !hasRevealedProjects;

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
      {initialProjects.map((project, index) => (
        <ProjectItem
          key={project._key ?? project.title ?? index}
          project={project}
          align={align}
          openProject={(project: Project) => {
            openProject(project);
          }}
        />
      ))}
      {shouldShowStaticEndImage && (
        <ProjectLaneEndImage align={align} endImage={endImage} />
      )}
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
            {revealedProjects.map((project, index) => (
              <ProjectItem
                key={project._key ?? project.title ?? index}
                project={project}
                align={align}
                openProject={(project: Project) => {
                  openProject(project);
                }}
              />
            ))}
            {hasShownAllLaneProjects && (
              <ProjectLaneEndImage align={align} endImage={endImage} />
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function ProjectLaneEndImage({
  align,
  endImage,
}: {
  align: ProjectLaneAlign;
  endImage?: SanityImage | null;
}) {
  const className = `${align === "left" ? "mr-auto" : "ml-auto"} ${mobileProjectEndImageClass}`;

  if (endImage?.url) {
    return (
      <SanityImageView image={endImage} sizes="127px" className={className} />
    );
  }

  return (
    <Image
      src={align === "left" ? numbers.thirty : numbers.ten}
      alt={align === "left" ? "numbers.thirty" : "numbers.ten"}
      width={127}
      height={105}
      className={className}
    />
  );
}

function ProjectItem({
  align,
  project,
  openProject,
}: {
  align?: "left" | "right";
  project: Project;
  openProject: (project: Project) => void;
}) {
  const visibleTags = (project.tags ?? []).slice(0, 1);

  return (
    <>
      <div
        className="flex flex-col gap-[clamp(1rem,calc(0.6429rem_+_1.7857vw),1.5rem)] md:gap-[clamp(1.5rem,calc(-1.4063rem_+_6.0547vw),3.4375rem)] xl:gap-13.75 2xl:gap-[clamp(3.4375rem,calc(0.6875rem_+_2.8646vw),4.125rem)] 3xl:gap-[clamp(4.125rem,3.4375vw,5.5rem)]"
        style={{
          alignItems: align === "left" ? "flex-start" : "flex-end",
        }}
      >
        <div className="relative overflow-hidden w-[clamp(2.875rem,calc(1.9821rem_+_4.4643vw),4.125rem)] h-[clamp(2.875rem,calc(1.9821rem_+_4.4643vw),4.125rem)] xl:w-[clamp(4.125rem,calc(-0.25rem_+_5.4688vw),5rem)] xl:h-[clamp(4.125rem,calc(-0.25rem_+_5.4688vw),5rem)] 2xl:w-[clamp(5rem,5.2083vw,6.25rem)] 2xl:h-[clamp(5rem,5.2083vw,6.25rem)] 3xl:w-[clamp(6.25rem,5.2083vw,8.3333rem)] 3xl:h-[clamp(6.25rem,5.2083vw,8.3333rem)]">
          <SanityImageView
            image={project.image}
            fill
            sizes="8vw"
            className="object-contain"
          />
        </div>
        <div
          className="flex flex-col gap-[clamp(1rem,calc(0.6429rem_+_1.7857vw),1.5rem)] md:gap-[clamp(1.125rem,calc(2.0625rem_-_1.1719vw),1.5rem)] xl:gap-[clamp(1.125rem,calc(-0.125rem_+_1.5625vw),1.375rem)] 2xl:gap-[clamp(1.375rem,calc(-0.125rem_+_1.5625vw),1.75rem)] 3xl:gap-[clamp(1.75rem,1.4583vw,2.3333rem)]"
          style={{ alignItems: align === "left" ? "flex-start" : "flex-end" }}
        >
          <div
            className="flex flex-col gap-3 xl:gap-[clamp(0.75rem,calc(0.125rem_+_0.7813vw),0.875rem)] 2xl:gap-[clamp(0.875rem,calc(-0.125rem_+_1.0417vw),1.125rem)] 3xl:gap-[clamp(1.125rem,0.9375vw,1.5rem)]"
            style={{ alignItems: align === "left" ? "flex-start" : "flex-end" }}
          >
            <button
              type="button"
              aria-label={`Открыть проект ${project.title ?? ""}`}
              onClick={() => {
                openProject(project);
              }}
              className="w-[clamp(1rem,calc(0.8214rem_+_0.8929vw),1.25rem)] h-[clamp(1rem,calc(0.8214rem_+_0.8929vw),1.25rem)] min-[1280px]:min-w-[30px] min-[1280px]:min-h-[30px] flex items-center justify-center bg-[#E3E3E3] rounded-full cursor-pointer hover:opacity-50 xl:*:size-4"
            >
              <PlusIcon />
            </button>
            <div
              className="flex flex-col gap-[clamp(0.25rem,calc(0.1607rem_+_0.4464vw),0.375rem)] 2xl:gap-[clamp(0.375rem,calc(-0.125rem_+_0.5208vw),0.5rem)] 3xl:gap-[clamp(0.5rem,0.4167vw,0.6667rem)]"
              style={{
                alignItems: align === "left" ? "flex-start" : "flex-end",
              }}
            >
              <p className="text-h3 xl:whitespace-nowrap uppercase">
                {project.title}
              </p>
              <p className="text-text font-diatype xl:h-10">
                {project.subtitle}
              </p>
            </div>
          </div>
          <div className="flex flex-row items-center w-fit">
            {visibleTags.map((tag, index) => (
              <Tag
                key={tag._key ?? tag.name ?? index}
                text={tag.name ?? ""}
                shape={tagShape(tag.type)}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

function ProjectItemPopup({
  project,
  close,
}: {
  project: Project | null;
  close: () => void;
}) {
  return (
    <div>
      <AnimatePresence initial={false} mode="wait">
        {project && (
          <motion.div
            initial={{
              opacity: 0,
              pointerEvents: "none",
            }}
            animate={{
              opacity: 1,
              pointerEvents: "auto",
            }}
            exit={{
              opacity: 0,
              pointerEvents: "none",
            }}
            transition={{
              duration: 0.3,
            }}
            className="fixed top-0 left-0 w-screen h-dvh z-100"
            style={{
              background:
                "radial-gradient(160.91% 74.35% at 76.3% 74.35%, rgba(135, 134, 145, 0.95) 0%, rgba(161, 162, 169, 0.95) 33.26%, rgba(173, 185, 188, 0.95) 66%, rgba(163, 174, 167, 0.95) 100%)",
            }}
            onClick={close}
          />
        )}
      </AnimatePresence>
      <AnimatePresence initial={false} mode="wait">
        {project && (
          <motion.div
            initial={{
              opacity: 0,
              y: "150%",
              pointerEvents: "none",
            }}
            animate={{
              opacity: 1,
              y: 0,
              pointerEvents: "auto",
            }}
            exit={{
              opacity: 0,
              y: "100%",
              pointerEvents: "none",
            }}
            transition={{
              duration: 0.3,
            }}
            className="fixed bottom-0 left-0 md:left-1/2 md:-translate-x-1/2 w-dvw h-full max-h-[90dvh] bg-white z-101 max-w-2xl"
          >
            <div className="flex flex-col w-full h-full p-6 gap-11 overflow-y-auto">
              <button
                type="button"
                aria-label="Закрыть меню"
                className="pointer-events-auto h-6.25 w-6.25 flex items-center justify-center bg-[#E3E3E3] rounded-md shrink-0"
                onClick={close}
              >
                <CloseIcon className="w-1.5 h-1.5" />
              </button>
              <div>
                <div className="flex flex-col gap-6">
                  <div className="flex flex-col gap-2">
                    <p className="text-h2 font-aeonik-mono uppercase">
                      {project.title}
                    </p>
                    <p className="text-h3 font-aeonik-mono uppercase">
                      {project.subtitle}
                    </p>
                  </div>
                  <div className="flex flex-row items-center flex-wrap justify-start">
                    {(project.tags ?? []).map((tag, index) => (
                      <Tag
                        key={tag._key ?? tag.name ?? index}
                        text={tag.name ?? ""}
                        shape={tagShape(tag.type)}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-text font-diatype">{project.description}</p>
              <div className="relative w-full h-auto aspect-square bg-neutral-400">
                <SanityImageView
                  image={project.innerImage}
                  fill
                  sizes="(min-width: 768px) 28rem, 100vw"
                  className="object-cover"
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
