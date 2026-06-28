"use client";

import { useEffect, useRef, useState } from "react";
import Image, { type StaticImageData } from "next/image";
import { motion } from "motion/react";

import { HomeIcon, type HomeIconName } from "./icons";

const ABOUT_DECORATION_EDGE_GAP = 2;
const ABOUT_DECORATION_CONTENT_GAP = 24;
const MIN_ABOUT_DECORATION_SIZE = 8.5;
const ABOUT_DECORATION_SIZE_RANGE = 7;
const ABOUT_DECORATION_COUNT = 8;

export type AboutDecorationAsset =
  | { kind: "icon"; name: HomeIconName }
  | { kind: "image"; src: StaticImageData };

export type AboutDecoration = {
  asset: AboutDecorationAsset;
  x: number;
  y: number;
  size: number;
  opacity: number;
  rotate: number;
  delay: number;
  duration: number;
};

export function AboutDecorations({
  assets,
}: {
  assets: AboutDecorationAsset[];
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [decorations, setDecorations] = useState<AboutDecoration[]>([]);

  useEffect(() => {
    function generateDecorations() {
      const container = containerRef.current;
      const section = container?.parentElement;
      const content = section?.querySelector<HTMLElement>(
        "[data-about-content]",
      );

      if (!container || !section || !content) {
        return;
      }

      setDecorations(
        createAboutDecorations(
          assets,
          section.getBoundingClientRect(),
          content.getBoundingClientRect(),
        ),
      );
    }

    const frame = requestAnimationFrame(generateDecorations);
    window.addEventListener("resize", generateDecorations);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", generateDecorations);
    };
  }, [assets]);

  return (
    <div
      ref={containerRef}
      aria-hidden
      data-about-decorations
      className="pointer-events-none absolute inset-0 z-0"
    >
      {decorations.map((decoration, index) => {
        const edgeInset = getDecorationEdgeInset(decoration.size);
        const clampedX = `clamp(${edgeInset}px, ${decoration.x}%, calc(100% - ${edgeInset}px))`;
        const clampedY = `clamp(${edgeInset}px, ${decoration.y}%, calc(100% - ${edgeInset}px))`;

        return (
          <motion.div
            key={index}
            className="absolute h-auto object-contain"
            style={{
              left: clampedX,
              top: clampedY,
              width: `${decoration.size}px`,
              transform: `translate(-50%, -50%) rotate(${decoration.rotate}deg)`,
            }}
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0, decoration.opacity, decoration.opacity, 0],
            }}
            transition={{
              duration: decoration.duration,
              delay: decoration.delay,
              ease: "easeInOut",
              times: [0, 0.2, 0.8, 1],
              repeat: Infinity,
              repeatDelay: 1.5,
            }}
          >
            {decoration.asset.kind === "icon" ? (
              <HomeIcon
                name={decoration.asset.name}
                className="h-auto w-full"
              />
            ) : (
              <Image
                src={decoration.asset.src}
                alt=""
                className="h-auto w-full object-contain"
              />
            )}
          </motion.div>
        );
      })}
    </div>
  );
}

function getDecorationEdgeInset(size: number) {
  return Math.ceil((size * Math.SQRT2) / 2) + ABOUT_DECORATION_EDGE_GAP;
}

type Rect = {
  top: number;
  right: number;
  bottom: number;
  left: number;
  width: number;
  height: number;
};

function createAboutDecorations(
  assets: AboutDecorationAsset[],
  sectionRect: Rect,
  contentRect: Rect,
): AboutDecoration[] {
  return Array.from({ length: ABOUT_DECORATION_COUNT }, (_, index) => {
    const asset = assets[index % assets.length];
    const size =
      MIN_ABOUT_DECORATION_SIZE +
      Math.random() * ABOUT_DECORATION_SIZE_RANGE;
    const edgeInset = getDecorationEdgeInset(size);
    const contentSafeRect = getContentSafeRect(
      sectionRect,
      contentRect,
      edgeInset,
    );
    const { x, y } = getRandomSafePoint(sectionRect, contentSafeRect, edgeInset);

    return {
      asset,
      x: (x / sectionRect.width) * 100,
      y: (y / sectionRect.height) * 100,
      size,
      opacity: 1,
      rotate: Math.random() * 80 - 40,
      delay: Math.random() * 4,
      duration: 8 + Math.random() * 5,
    };
  });
}

function getContentSafeRect(
  sectionRect: Rect,
  contentRect: Rect,
  edgeInset: number,
) {
  const inset = edgeInset + ABOUT_DECORATION_CONTENT_GAP;

  return {
    top: contentRect.top - sectionRect.top - inset,
    right: contentRect.right - sectionRect.left + inset,
    bottom: contentRect.bottom - sectionRect.top + inset,
    left: contentRect.left - sectionRect.left - inset,
  };
}

function getRandomBetween(min: number, max: number) {
  return min + Math.random() * Math.max(0, max - min);
}

function getRandomSafePoint(
  sectionRect: Rect,
  contentSafeRect: Pick<Rect, "top" | "right" | "bottom" | "left">,
  edgeInset: number,
) {
  const minX = edgeInset;
  const maxX = sectionRect.width - edgeInset;
  const minY = edgeInset;
  const maxY = sectionRect.height - edgeInset;
  const areas = [
    { left: minX, right: maxX, top: minY, bottom: contentSafeRect.top },
    { left: minX, right: maxX, top: contentSafeRect.bottom, bottom: maxY },
    {
      left: minX,
      right: contentSafeRect.left,
      top: Math.max(minY, contentSafeRect.top),
      bottom: Math.min(maxY, contentSafeRect.bottom),
    },
    {
      left: contentSafeRect.right,
      right: maxX,
      top: Math.max(minY, contentSafeRect.top),
      bottom: Math.min(maxY, contentSafeRect.bottom),
    },
  ]
    .map((area) => ({
      ...area,
      width: Math.max(0, area.right - area.left),
      height: Math.max(0, area.bottom - area.top),
    }))
    .filter((area) => area.width > 0 && area.height > 0);

  const totalArea = areas.reduce((sum, area) => sum + area.width * area.height, 0);
  let cursor = Math.random() * totalArea;

  for (const area of areas) {
    cursor -= area.width * area.height;

    if (cursor <= 0) {
      return {
        x: getRandomBetween(area.left, area.right),
        y: getRandomBetween(area.top, area.bottom),
      };
    }
  }

  return { x: minX, y: minY };
}
