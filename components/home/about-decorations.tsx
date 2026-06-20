"use client";

import Image, { type StaticImageData } from "next/image";
import { motion } from "motion/react";

type AboutDecoration = {
  src: StaticImageData;
  x: number;
  y: number;
  size: number;
  opacity: number;
  rotate: number;
  delay: number;
  duration: number;
};

export function AboutDecorations({
  decorations,
}: {
  decorations: AboutDecoration[];
}) {
  return (
    <div
      aria-hidden
      data-about-decorations
      className="pointer-events-none absolute inset-0 z-0"
    >
      {decorations.map((decoration, index) => (
        <motion.div
          key={index}
          className="absolute h-auto object-contain"
          style={{
            left: `${decoration.x}%`,
            top: `${decoration.y}%`,
            width: `${decoration.size}px`,
            transform: `translate(-50%, -50%) rotate(${decoration.rotate}deg)`,
          }}
          initial={{ opacity: 0, scale: 0.65 }}
          animate={{
            opacity: [0, decoration.opacity, decoration.opacity, 0],
            scale: [0.65, 1, 1, 0.45],
          }}
          transition={{
            duration: decoration.duration,
            delay: decoration.delay,
            ease: "easeInOut",
            repeat: Infinity,
            repeatDelay: 1.5,
          }}
        >
          <Image
            src={decoration.src}
            alt=""
            className="h-auto w-full object-contain"
          />
        </motion.div>
      ))}
    </div>
  );
}
