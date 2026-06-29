"use client";

import { AnimatePresence, motion, stagger } from "motion/react";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";

import { CloseIcon, MenuIcon } from "@/components/home/icons";
import { Logo } from "@/components/ui/logo";

const DARK_NAV_COLOR = "#411319";
const LIGHT_NAV_COLOR = "#FAFAFA";

type RgbColor = {
  r: number;
  g: number;
  b: number;
  alpha: number;
};

const navSections = [
  { title: "о компании", href: "#about" },
  { title: "Услуги", href: "#services" },
  { title: "портфолио", href: "#portfolio" },
  { title: "Xantir", href: "#xantir" },
  { title: "команда", href: "#team" },
  { title: "партнеры", href: "#partners" },
  { title: "Контакты", href: "#contacts" },
];

const navVariants = {
  open: {
    transition: { delayChildren: stagger(0.03, { startDelay: 0.1 }) },
  },
  closed: {
    transition: { delayChildren: stagger(0.01, { from: "last" }) },
  },
};

const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: { y: { stiffness: 1000, velocity: -100 } },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: { y: { stiffness: 1000 } },
  },
};

export default function Navbar() {
  const navRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [currentSectionTitle, setCurrentSectionTitle] = useState("");
  const [hasPassedFirstScreen, setHasPassedFirstScreen] = useState(false);
  const [navColor, setNavColor] = useState(LIGHT_NAV_COLOR);
  const visibleSectionTitle =
    currentSectionTitle === "Главная" ? "" : currentSectionTitle;

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const updateNavState = useCallback(() => {
    const nextHasPassedFirstScreen = window.scrollY >= window.innerHeight;
    const nextTitle = getCurrentSectionTitle();
    const nextColor = nextHasPassedFirstScreen
      ? getContrastingNavbarColor(navRef.current)
      : LIGHT_NAV_COLOR;

    setHasPassedFirstScreen(nextHasPassedFirstScreen);
    setCurrentSectionTitle(nextTitle);
    setNavColor(nextColor);
  }, []);

  useEffect(() => {
    let animationFrame = 0;

    const requestNavStateUpdate = () => {
      if (animationFrame) {
        return;
      }

      animationFrame = window.requestAnimationFrame(() => {
        animationFrame = 0;
        updateNavState();
      });
    };

    requestNavStateUpdate();
    window.addEventListener("scroll", requestNavStateUpdate, { passive: true });
    window.addEventListener("resize", requestNavStateUpdate);

    return () => {
      window.removeEventListener("scroll", requestNavStateUpdate);
      window.removeEventListener("resize", requestNavStateUpdate);

      if (animationFrame) {
        window.cancelAnimationFrame(animationFrame);
      }
    };
  }, [updateNavState]);

  return (
    <div
      ref={navRef}
      data-navbar
      className="pointer-events-none w-dvw h-screen fixed top-0 left-0 z-100"
    >
      <div className="flex flex-col w-full h-full gap-23 relative px-2 pt-5">
        {!hasPassedFirstScreen ? (
          <div
            className="absolute top-5 left-2 z-10 hidden flex-col gap-2.5 xl:flex"
            style={{ color: LIGHT_NAV_COLOR }}
          >
            <NavSectionList isOpen={true} />
          </div>
        ) : null}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: isOpen ? 1 : 0,
          }}
          className="bg-white/20 backdrop-blur-md absolute top-0 left-0 w-full h-full xl:hidden"
        />
        <div className="flex flex-row items-center justify-between w-full z-10">
          <div className="flex flex-row items-center gap-3">
            <button
              data-navbar-menu
              className="pointer-events-auto xl:hidden"
              onClick={handleToggle}
              type="button"
              aria-expanded={isOpen}
              aria-label={
                visibleSectionTitle
                  ? `Открыть меню, текущий раздел: ${visibleSectionTitle}`
                  : "Открыть меню"
              }
              style={{ color: navColor }}
            >
              <MenuIcon className="w-5 h-5 shrink-0" />
            </button>
            <AnimatePresence mode="popLayout" initial={false}>
              {visibleSectionTitle ? (
                <motion.p
                  initial={{
                    opacity: 0,
                    y: 10,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                    y: -10,
                  }}
                  key={`mobile-${visibleSectionTitle}`}
                  style={{ color: navColor }}
                  className="text-h3 font-aeonik-mono uppercase xl:hidden"
                >
                  {visibleSectionTitle}
                </motion.p>
              ) : null}
            </AnimatePresence>
            <AnimatePresence mode="popLayout" initial={false}>
              {hasPassedFirstScreen && visibleSectionTitle ? (
                <motion.button
                  initial={{
                    opacity: 0,
                    y: 10,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                    y: -10,
                  }}
                  key={`desktop-${visibleSectionTitle}`}
                  style={{ color: navColor }}
                  className="pointer-events-auto hidden text-left text-h3 font-aeonik-mono uppercase xl:block"
                  onClick={handleScrollToTop}
                  type="button"
                  aria-label="Прокрутить к началу страницы"
                >
                  {visibleSectionTitle}
                </motion.button>
              ) : null}
            </AnimatePresence>
          </div>
          {isOpen ? (
            <motion.button
              onClick={handleToggle}
              type="button"
              aria-label="Закрыть меню"
              style={{ color: DARK_NAV_COLOR }}
              className="pointer-events-auto h-6.25 w-6.25 flex items-center justify-center bg-[#E3E3E3] rounded-md xl:hidden"
            >
              <CloseIcon className="w-1.5 h-1.5" />
            </motion.button>
          ) : !hasPassedFirstScreen ? (
            <motion.div
              data-navbar-logo
              style={{ color: navColor }}
              className="xl:fixed xl:left-1/2 xl:-translate-x-1/2 xl:top-3.5 2xl:top-4.5 3xl:top-5"
            >
              <Logo className="w-auto h-6 xl:h-7.5 3xl:h-9.5" />
            </motion.div>
          ) : (
            <div className="h-6 w-0" aria-hidden />
          )}
        </div>
        <motion.div
          initial={false}
          animate={isOpen ? "open" : "closed"}
          variants={navVariants}
          className="flex flex-col gap-2.5 z-10 xl:hidden"
          style={{
            color: navColor,
          }}
        >
          <NavSectionList
            isOpen={isOpen}
            motionItemVariants={itemVariants}
            onNavigate={() => setIsOpen(false)}
          />
        </motion.div>
      </div>
    </div>
  );
}

function NavSectionList({
  isOpen,
  motionItemVariants,
  onNavigate,
}: {
  isOpen: boolean;
  motionItemVariants?: typeof itemVariants;
  onNavigate?: () => void;
}) {
  return (
    <>
      {navSections.map((section) =>
        motionItemVariants ? (
          <motion.div
            initial={false}
            variants={motionItemVariants}
            key={section.href}
            className="text-h2 xl:text-h3 font-aeonik-mono uppercase"
          >
            <Link
              href={section.href}
              data-open={isOpen}
              className="data-[open=true]:pointer-events-auto block"
              onClick={onNavigate}
            >
              {section.title}
            </Link>
          </motion.div>
        ) : (
          <Link
            href={section.href}
            key={section.href}
            data-open={isOpen}
            className="data-[open=true]:pointer-events-auto block text-h2 xl:text-h3 font-aeonik-mono uppercase"
            onClick={onNavigate}
          >
            {section.title}
          </Link>
        ),
      )}
    </>
  );
}

function getCurrentSectionTitle() {
  const sections = Array.from(
    document.querySelectorAll<HTMLElement>("[data-nav-title]"),
  );
  const viewportCheckpoint = window.innerHeight * 0.5;
  const centeredSection = sections.find((section) => {
    const rect = section.getBoundingClientRect();

    return rect.top <= viewportCheckpoint && rect.bottom > viewportCheckpoint;
  });

  if (centeredSection?.dataset.navTitle) {
    return centeredSection.dataset.navTitle;
  }

  const mostVisibleSection = sections
    .map((section) => {
      const rect = section.getBoundingClientRect();
      const visibleHeight =
        Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0);

      return {
        section,
        visibleHeight,
      };
    })
    .sort((a, b) => b.visibleHeight - a.visibleHeight)[0]?.section;

  return mostVisibleSection?.dataset.navTitle ?? "";
}

function getContrastingNavbarColor(navElement: HTMLElement | null) {
  const samplePoints = [
    { x: 24, y: 32 },
    { x: window.innerWidth - 24, y: 32 },
    { x: window.innerWidth / 2, y: 32 },
  ];
  const luminanceValues = samplePoints
    .map(({ x, y }) => getBackgroundLuminanceAtPoint(x, y, navElement))
    .filter((luminance): luminance is number => luminance !== null);

  if (luminanceValues.length === 0) {
    return DARK_NAV_COLOR;
  }

  const averageLuminance =
    luminanceValues.reduce((sum, luminance) => sum + luminance, 0) /
    luminanceValues.length;

  return averageLuminance > 0.42 ? DARK_NAV_COLOR : LIGHT_NAV_COLOR;
}

function getBackgroundLuminanceAtPoint(
  x: number,
  y: number,
  navElement: HTMLElement | null,
) {
  const underlyingElement = document
    .elementsFromPoint(x, y)
    .find((element): element is HTMLElement => {
      return element instanceof HTMLElement && !navElement?.contains(element);
    });

  if (!underlyingElement) {
    return null;
  }

  return getElementBackgroundLuminance(underlyingElement);
}

function getElementBackgroundLuminance(element: HTMLElement) {
  let currentElement: HTMLElement | null = element;

  while (currentElement) {
    const styles = window.getComputedStyle(currentElement);
    const backgroundImageLuminance = getBackgroundImageLuminance(
      styles.backgroundImage,
    );

    if (backgroundImageLuminance !== null) {
      return backgroundImageLuminance;
    }

    const backgroundColorLuminance = getBackgroundColorLuminance(
      styles.backgroundColor,
    );

    if (backgroundColorLuminance !== null) {
      return backgroundColorLuminance;
    }

    currentElement = currentElement.parentElement;
  }

  return null;
}

function getBackgroundImageLuminance(backgroundImage: string) {
  if (!backgroundImage || backgroundImage === "none") {
    return null;
  }

  const hexColors = backgroundImage.match(/#[0-9a-f]{3,8}/gi) ?? [];
  const hexLuminanceValues = hexColors
    .map(parseHexColor)
    .filter((color): color is RgbColor => color !== null)
    .map(getRelativeLuminance);
  const rgbLuminanceValues = (backgroundImage.match(/rgba?\([^)]+\)/gi) ?? [])
    .map(parseRgbColor)
    .filter((color): color is RgbColor => color !== null && color.alpha > 0)
    .map(getRelativeLuminance);
  const luminanceValues = [...hexLuminanceValues, ...rgbLuminanceValues];

  if (luminanceValues.length === 0) {
    return null;
  }

  return (
    luminanceValues.reduce((sum, luminance) => sum + luminance, 0) /
    luminanceValues.length
  );
}

function getBackgroundColorLuminance(color: string) {
  const rgbColor = parseRgbColor(color);

  if (rgbColor && rgbColor.alpha > 0) {
    return getRelativeLuminance(rgbColor);
  }

  const labLightness = parseLabLightness(color);

  if (labLightness !== null) {
    return labLightness / 100;
  }

  return null;
}

function parseRgbColor(color: string): RgbColor | null {
  const match = color.match(/rgba?\(([^)]+)\)/i);

  if (!match) {
    return null;
  }

  const [r, g, b, alpha = 1] = match[1]
    .split(/[,\s/]+/)
    .filter(Boolean)
    .map(Number);

  if ([r, g, b].some((value) => Number.isNaN(value))) {
    return null;
  }

  return { r, g, b, alpha };
}

function parseLabLightness(color: string) {
  const match = color.match(/^lab\(\s*([\d.]+)%?/i);

  if (!match) {
    return null;
  }

  const lightness = Number(match[1]);

  return Number.isNaN(lightness) ? null : lightness;
}

function parseHexColor(color: string): RgbColor | null {
  const normalizedColor = color.replace("#", "");
  const expandedColor =
    normalizedColor.length === 3
      ? normalizedColor
          .split("")
          .map((character) => character + character)
          .join("")
      : normalizedColor.slice(0, 6);

  if (expandedColor.length !== 6) {
    return null;
  }

  return {
    r: Number.parseInt(expandedColor.slice(0, 2), 16),
    g: Number.parseInt(expandedColor.slice(2, 4), 16),
    b: Number.parseInt(expandedColor.slice(4, 6), 16),
    alpha: 1,
  };
}

function getRelativeLuminance({ r, g, b }: RgbColor) {
  const [linearRed, linearGreen, linearBlue] = [r, g, b].map((value) => {
    const channel = value / 255;

    return channel <= 0.03928
      ? channel / 12.92
      : ((channel + 0.055) / 1.055) ** 2.4;
  });

  return 0.2126 * linearRed + 0.7152 * linearGreen + 0.0722 * linearBlue;
}
