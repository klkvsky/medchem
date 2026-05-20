"use client";

import { useEffect, useRef } from "react";
import { Tag } from "@/components/tag";

const COLOR = "#411319";
const CANVAS_PILL_LABELS = [
  "ЦИФРОВЫЕ ПРОДУКТЫ",
  "FIRST-IN-CLASS",
  "NEXT-IN-CLASS МОЛЕКУЛЫ",
  "PHARMA",
  "AGROCHEM",
  "ANIMAL CARE",
  "VC FUNDS",
  "IP-TEAMS",
] as const;

// Draw at origin — caller applies translate + scale via ctx transform
function drawDiamond(ctx: CanvasRenderingContext2D, s: number) {
  const h = s / 2;
  ctx.beginPath();
  ctx.moveTo(0, -h);
  ctx.lineTo(h, 0);
  ctx.lineTo(0, h);
  ctx.lineTo(-h, 0);
  ctx.closePath();
  ctx.fillStyle = COLOR;
  ctx.fill();
}

function drawGrid(ctx: CanvasRenderingContext2D, s: number) {
  const ratio = s / 10;
  const pts = [1.08, 4.725, 8.37].map((p) => p * ratio);
  const r = 1.08 * ratio;
  ctx.fillStyle = COLOR;
  for (const dy of pts)
    for (const dx of pts) {
      ctx.beginPath();
      ctx.arc(dx - s / 2, dy - s / 2, r, 0, Math.PI * 2);
      ctx.fill();
    }
}

function drawSubtract(ctx: CanvasRenderingContext2D, s: number) {
  const h = s / 2;
  ctx.beginPath();
  ctx.rect(-h, -h, s, s);
  ctx.arc(0, 0, s * 0.3, 0, Math.PI * 2, true);
  ctx.fillStyle = COLOR;
  ctx.fill("evenodd");
}

function drawPill(
  ctx: CanvasRenderingContext2D,
  text: string,
  fontSize: number,
) {
  ctx.font = `300 ${fontSize}px "AeonikMono", monospace`;
  const tw = ctx.measureText(text).width;
  const padX = fontSize * 0.85;
  const padY = fontSize * 0.42;
  const w = tw + padX * 2;
  const h = fontSize + padY * 2;
  const r = h / 2;

  ctx.beginPath();
  if (typeof ctx.roundRect === "function") {
    ctx.roundRect(-w / 2, -h / 2, w, h, r);
  } else {
    ctx.rect(-w / 2, -h / 2, w, h);
  }
  ctx.strokeStyle = COLOR;
  ctx.lineWidth = 0.5;
  ctx.stroke();

  ctx.fillStyle = COLOR;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(text, 0, 0);
}

interface AnimDecor {
  xFrac: number;
  yFrac: number;
  age: number;
  delay: number;
  lifespan: number;
  noScale: boolean; // text pills fade only — no scale transform
  drawAt: (ctx: CanvasRenderingContext2D) => void;
  spawn: () => [number, number];
}

function rIn(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

function makeDecor(
  spawn: () => [number, number],
  drawAt: (ctx: CanvasRenderingContext2D) => void,
  initialDelay: number,
  noScale = false,
): AnimDecor {
  const [xFrac, yFrac] = spawn();
  return {
    xFrac,
    yFrac,
    age: 0,
    delay: initialDelay,
    lifespan: rIn(4, 8),
    noScale,
    drawAt,
    spawn,
  };
}

// Safe vignette zones that never overlap the "drug discovery" text block
// (desktop content ≈ x:0.15–0.52, y:0.28–0.65; image ≈ x:0.84–0.96, y:0.80–0.96)
function buildDecors(mobile: boolean, s: number): AnimDecor[] {
  if (mobile) {
    // Mobile content sits at x:0.38–0.78, y:0.28–0.62 (translate-x-[25%])
    return [
      makeDecor(
        () => [rIn(0.04, 0.14), rIn(0.3, 0.55)],
        (c) => drawPill(c, CANVAS_PILL_LABELS[0], 8 * s),
        rIn(0, 3),
        true,
      ),
      makeDecor(
        () => [rIn(0.06, 0.18), rIn(0.07, 0.2)],
        (c) => drawDiamond(c, 11 * s),
        rIn(0, 3),
      ),
      makeDecor(
        () => [rIn(0.78, 0.94), rIn(0.68, 0.82)],
        (c) => drawDiamond(c, 11 * s),
        rIn(0, 3),
      ),
      makeDecor(
        () => [rIn(0.74, 0.9), rIn(0.1, 0.24)],
        (c) => drawSubtract(c, 7 * s),
        rIn(0, 3),
      ),
    ];
  }

  return [
    // Text pills — noScale:true, placed in clear vignette zones
    makeDecor(
      () => [rIn(0.82, 0.92), rIn(0.17, 0.26)],
      (c) => drawPill(c, CANVAS_PILL_LABELS[0], 8 * s),
      rIn(0, 3),
      true,
    ),
    makeDecor(
      () => [rIn(0.04, 0.13), rIn(0.33, 0.5)],
      (c) => drawPill(c, CANVAS_PILL_LABELS[1], 9 * s),
      rIn(0, 3),
      true,
    ),
    makeDecor(
      // top-centre band — above the text block
      () => [rIn(0.38, 0.58), rIn(0.06, 0.16)],
      (c) => drawPill(c, CANVAS_PILL_LABELS[2], 8 * s),
      rIn(0, 3),
      true,
    ),
    // Icon decorations — kept in corners / edges
    makeDecor(
      () => [rIn(0.1, 0.2), rIn(0.07, 0.18)],
      (c) => drawDiamond(c, 11 * s),
      rIn(0, 2),
    ),
    makeDecor(
      () => [rIn(0.03, 0.1), rIn(0.55, 0.72)],
      (c) => drawGrid(c, 10 * s),
      rIn(0, 2),
    ),
    makeDecor(
      () => [rIn(0.78, 0.86), rIn(0.1, 0.2)],
      (c) => drawSubtract(c, 7 * s),
      rIn(0, 2),
    ),
    makeDecor(
      () => [rIn(0.86, 0.93), rIn(0.07, 0.17)],
      (c) => drawDiamond(c, 11 * s),
      rIn(0, 2),
    ),
    makeDecor(
      () => [rIn(0.42, 0.6), rIn(0.83, 0.93)],
      (c) => drawSubtract(c, 7 * s),
      rIn(0, 2),
    ),
    makeDecor(
      // right-edge mid — content ends at ~x:0.52, so x>0.72 is safe
      () => [rIn(0.72, 0.82), rIn(0.32, 0.52)],
      (c) => drawDiamond(c, 6 * s),
      rIn(0, 2),
    ),
    // --- extra tablet/desktop items ---
    makeDecor(
      // bottom-left strip — below the text block
      () => [rIn(0.05, 0.14), rIn(0.75, 0.87)],
      (c) => drawPill(c, CANVAS_PILL_LABELS[3], 9 * s),
      rIn(0, 3),
      true,
    ),
    makeDecor(
      // far-right mid strip — clear of content and image
      () => [rIn(0.89, 0.96), rIn(0.4, 0.6)],
      (c) => drawGrid(c, 10 * s),
      rIn(0, 2),
    ),
    makeDecor(
      () => [rIn(0.88, 0.96), rIn(0.28, 0.38)],
      (c) => drawPill(c, CANVAS_PILL_LABELS[4], 9 * s),
      rIn(0, 3),
      true,
    ),
    makeDecor(
      () => [rIn(0.18, 0.3), rIn(0.78, 0.9)],
      (c) => drawPill(c, CANVAS_PILL_LABELS[5], 9 * s),
      rIn(0, 3),
      true,
    ),
    makeDecor(
      () => [rIn(0.62, 0.78), rIn(0.2, 0.3)],
      (c) => drawPill(c, CANVAS_PILL_LABELS[6], 9 * s),
      rIn(0, 3),
      true,
    ),
    makeDecor(
      () => [rIn(0.72, 0.84), rIn(0.56, 0.66)],
      (c) => drawPill(c, CANVAS_PILL_LABELS[7], 9 * s),
      rIn(0, 3),
      true,
    ),
    makeDecor(
      // bottom-centre-right — below content, left of image
      () => [rIn(0.58, 0.74), rIn(0.72, 0.85)],
      (c) => drawDiamond(c, 9 * s),
      rIn(0, 2),
    ),
    makeDecor(
      // top-centre-right — above content block
      () => [rIn(0.63, 0.78), rIn(0.06, 0.18)],
      (c) => drawDiamond(c, 7 * s),
      rIn(0, 2),
    ),
    makeDecor(
      // right side, between content and image
      () => [rIn(0.73, 0.82), rIn(0.62, 0.75)],
      (c) => drawSubtract(c, 7 * s),
      rIn(0, 2),
    ),
    makeDecor(
      // bottom-left corner
      () => [rIn(0.04, 0.13), rIn(0.86, 0.94)],
      (c) => drawDiamond(c, 8 * s),
      rIn(0, 2),
    ),
  ];
}

// Simple ease curves
const easeIn = (t: number) => t * t;
const easeOut = (t: number) => 1 - (1 - t) * (1 - t);

function FloatingCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let decors: AnimDecor[] = [];
    let rafId: number;
    let lastTime = 0;
    let running = true;

    const FADE_IN = 0.12;
    const FADE_OUT = 0.35;

    const step = (timestamp: number) => {
      if (!running) return;

      const dt = lastTime ? Math.min((timestamp - lastTime) / 1000, 0.1) : 0;
      lastTime = timestamp;

      const dpr = window.devicePixelRatio || 1;
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;

      if (w && h) {
        const tw = Math.round(w * dpr);
        const th = Math.round(h * dpr);
        if (canvas.width !== tw || canvas.height !== th) {
          canvas.width = tw;
          canvas.height = th;
        }

        const ctx = canvas.getContext("2d")!;
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        ctx.clearRect(0, 0, w, h);

        for (const d of decors) {
          d.age += dt;
          const elapsed = d.age - d.delay;
          if (elapsed < 0) continue;

          const t = elapsed / d.lifespan;

          if (t >= 1) {
            const [xFrac, yFrac] = d.spawn();
            d.xFrac = xFrac;
            d.yFrac = yFrac;
            d.age = 0;
            d.delay = rIn(0, 1.5);
            d.lifespan = rIn(4, 8);
            continue;
          }

          let opacity: number;
          let scale: number;

          if (t < FADE_IN) {
            const p = easeOut(t / FADE_IN);
            opacity = p;
            scale = 0.5 + 0.5 * p;
          } else if (t > 1 - FADE_OUT) {
            const p = easeIn((t - (1 - FADE_OUT)) / FADE_OUT);
            opacity = 1 - p;
            scale = 1 - 0.5 * p;
          } else {
            opacity = 1;
            scale = 1;
          }

          ctx.save();
          ctx.globalAlpha = Math.max(0, Math.min(1, opacity));
          ctx.translate(d.xFrac * w, d.yFrac * h);
          if (!d.noScale) ctx.scale(scale, scale);
          d.drawAt(ctx);
          ctx.restore();
        }
      }

      rafId = requestAnimationFrame(step);
    };

    const init = async () => {
      await document.fonts.ready;
      const w = window.innerWidth;
      const sizeScale = w >= 1280 ? 1.8 : 1;
      decors = buildDecors(w < 768, sizeScale);
      rafId = requestAnimationFrame(step);
    };

    init();

    return () => {
      running = false;
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
    />
  );
}

type DrugDiscoveryData = {
  title: { ru: string; lines: readonly string[] };
  description: { ru: string };
  tags: readonly { label: string }[];
};

export default function DrugDiscovery({ data }: { data: DrugDiscoveryData }) {
  return (
    <section
      id="services"
      className="text-burgundy w-full flex flex-col h-dvh justify-center relative overflow-hidden max-w-dvw"
    >
      <FloatingCanvas />

      <div className="flex flex-row items-start mt-20 mx-auto translate-x-[20%] gap-2 md:-translate-x-1/2 md:mt-0 relative z-10 md:gap-5">
        <div className="translate-y-0.5">
          <Tag
            icon="rectangle"
            sizes={{
              base: 9,
              md: 9,
              xl: 21,
            }}
          />
        </div>
        <div className="flex flex-col gap-2 xl:gap-6 w-full">
          <h2 className="text-hero-subtitle uppercase font-aeonik-mono text-pretty max-md:w-[75%] md:max-w-sm">
            {data.title.ru}
          </h2>
          <p className="text-subtitle-1 font-diatype md:max-w-sm max-md:max-w-[75%]">
            {data.description.ru}
          </p>
          <div className="flex flex-row flex-wrap gap-1">
            {data.tags.map((tag) => (
              <span
                key={tag.label}
                className="text-caption-0 py-0.5 px-1 border-[0.5px] border-current font-aeonik-mono uppercase"
              >
                {tag.label}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col mt-43 ml-13.5 -space-y-3 md:absolute md:right-20 md:bottom-20 relative z-10 xl:-space-y-10 xl:right-[15dvw] xl:bottom-[15dvw]">
        <div className="w-19.5 h-auto aspect-square rounded-full bg-amber-50 xl:w-50" />
        <div className="grid grid-cols-4 gap-0.5 aspect-square w-9 xl:w-23">
          {Array.from({ length: 16 }).map((_, i) => {
            const cols = 4;
            const col = i % cols;
            const row = Math.floor(i / cols);
            const distance = col + (cols - 1 - row);
            return (
              <div key={i} className="flex items-center justify-center">
                <div
                  className="aspect-square bg-dark-gray rounded-full"
                  style={{
                    width: `${(0.5 + distance) * 25}%`,
                    animation: "dot-pulse 7s ease-in-out infinite",
                    animationDelay: `-${(10 - distance) * 0.3}s`,
                  }}
                />
              </div>
            );
          })}
        </div>
      </div>
      <div className="absolute bottom-10 left-2 xl:bottom-20 xl:left-14.5">
        <svg
          width="153"
          height="63"
          viewBox="0 0 153 63"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="md:w-[137px] md:h-[60px] xl:w-[344px] xl:h-[153px]"
        >
          <path
            d="M96.081 52.05V51.6H96.162C96.756 51.6 97.116 50.988 97.116 48.873V45.75H100.941V52.05H100.455V46.2H97.584V48.909C97.584 50.565 97.395 51.339 96.963 51.762C96.765 51.951 96.513 52.05 96.243 52.05H96.081ZM102.643 52.05V45.75H106.405V46.2H103.129V48.603H105.937V49.053H103.129V51.6H106.522V52.05H102.643ZM109.889 52.05V46.2H107.729V45.75H112.535V46.2H110.375V52.05H109.889ZM119.548 52.05V45.75H121.402C122.671 45.75 123.337 46.371 123.337 47.37C123.337 48.135 122.905 48.612 122.203 48.792C123.04 48.918 123.607 49.395 123.607 50.295C123.607 51.384 122.905 52.05 121.438 52.05H119.548ZM120.034 51.609H121.438C122.581 51.609 123.112 51.114 123.112 50.322C123.112 49.494 122.536 49.053 121.438 49.053H120.034V51.609ZM120.034 48.612H121.429C122.356 48.612 122.851 48.153 122.851 47.397C122.851 46.65 122.374 46.191 121.429 46.191H120.034V48.612ZM130.764 52.05V45.75H132.357C134.184 45.75 135.12 46.92 135.12 48.9C135.12 50.871 134.184 52.05 132.357 52.05H130.764ZM131.25 51.6H132.357C133.905 51.6 134.625 50.619 134.625 48.9C134.625 47.172 133.905 46.2 132.357 46.2H131.25V51.6ZM136.606 52.05V45.75H138.694C139.891 45.75 140.674 46.47 140.674 47.586C140.674 48.513 140.089 49.188 139.162 49.332L140.692 52.05H140.143L138.658 49.422H137.092V52.05H136.606ZM137.092 48.972H138.658C139.585 48.972 140.179 48.423 140.179 47.586C140.179 46.74 139.594 46.2 138.667 46.2H137.092V48.972ZM144.149 52.104C142.754 52.104 142.07 51.339 142.07 49.719V45.75H142.556V49.701C142.556 51.051 143.069 51.654 144.149 51.654C145.238 51.654 145.76 51.051 145.76 49.701V45.75H146.246V49.719C146.246 51.339 145.544 52.104 144.149 52.104ZM149.838 52.104C148.398 52.104 147.525 50.898 147.525 48.9C147.525 46.866 148.362 45.696 149.856 45.696C150.945 45.696 151.683 46.317 151.926 47.685H151.413C151.206 46.623 150.666 46.146 149.847 46.146C148.659 46.146 148.02 47.127 148.02 48.9C148.02 50.673 148.677 51.654 149.838 51.654C150.882 51.654 151.512 50.835 151.512 49.485V49.215H150V48.765H151.989V52.05H151.566L151.53 50.781C151.278 51.636 150.675 52.104 149.838 52.104ZM96.738 62.05V55.75H98.331C100.158 55.75 101.094 56.92 101.094 58.9C101.094 60.871 100.158 62.05 98.331 62.05H96.738ZM97.224 61.6H98.331C99.879 61.6 100.599 60.619 100.599 58.9C100.599 57.172 99.879 56.2 98.331 56.2H97.224V61.6ZM102.544 62.05V61.6H104.218V56.2H102.544V55.75H106.378V56.2H104.704V61.6H106.378V62.05H102.544ZM110.204 62.104C108.881 62.104 108.008 61.33 107.954 60.115H108.458C108.521 61.06 109.205 61.663 110.204 61.663C111.194 61.663 111.824 61.159 111.824 60.367C111.824 59.548 111.176 59.278 110.042 59.08C108.845 58.873 108.089 58.486 108.089 57.442C108.089 56.371 108.899 55.696 110.123 55.696C111.329 55.696 112.139 56.389 112.229 57.487H111.725C111.635 56.65 111.005 56.137 110.123 56.137C109.16 56.137 108.575 56.614 108.575 57.415C108.575 58.225 109.178 58.45 110.294 58.639C111.509 58.846 112.31 59.278 112.31 60.322C112.31 61.384 111.464 62.104 110.204 62.104ZM115.974 62.104C114.372 62.104 113.517 60.88 113.517 58.9C113.517 56.92 114.372 55.696 115.992 55.696C117.153 55.696 117.927 56.398 118.17 57.685H117.657C117.432 56.659 116.883 56.146 115.992 56.146C114.687 56.146 114.012 57.199 114.012 58.9C114.012 60.628 114.669 61.654 115.974 61.654C116.883 61.654 117.423 61.15 117.648 60.106H118.161C117.918 61.411 117.171 62.104 115.974 62.104ZM121.474 62.104C119.971 62.104 119.179 60.808 119.179 58.9C119.179 56.992 119.971 55.696 121.474 55.696C122.977 55.696 123.769 56.992 123.769 58.9C123.769 60.808 122.977 62.104 121.474 62.104ZM121.474 61.654C122.707 61.654 123.265 60.574 123.265 58.9C123.265 57.226 122.707 56.146 121.474 56.146C120.241 56.146 119.683 57.217 119.683 58.9C119.683 60.583 120.241 61.654 121.474 61.654ZM126.857 62.05L124.607 55.75H125.129L127.154 61.429L129.179 55.75H129.683L127.433 62.05H126.857ZM130.998 62.05V55.75H134.76V56.2H131.484V58.603H134.292V59.053H131.484V61.6H134.877V62.05H130.998ZM136.606 62.05V55.75H138.694C139.891 55.75 140.674 56.47 140.674 57.586C140.674 58.513 140.089 59.188 139.162 59.332L140.692 62.05H140.143L138.658 59.422H137.092V62.05H136.606ZM137.092 58.972H138.658C139.585 58.972 140.179 58.423 140.179 57.586C140.179 56.74 139.594 56.2 138.667 56.2H137.092V58.972ZM143.915 62.05V59.728L141.584 55.75H142.151L144.167 59.188L146.192 55.75H146.732L144.401 59.728V62.05H143.915Z"
            fill="#411319"
          />
          <path
            d="M6.63 56.61C6.00667 56.61 5.46833 56.3834 5.015 55.93C4.56167 55.4767 4.335 54.9667 4.335 54.4V48.28C4.335 47.6567 4.56167 47.1184 5.015 46.665C5.46833 46.2117 6.00667 45.985 6.63 45.985C7.31 45.985 7.87667 46.2117 8.33 46.665C8.78333 47.1184 9.01 47.6567 9.01 48.28V54.4C9.01 55.0234 8.78333 55.5617 8.33 56.015C7.87667 56.4117 7.31 56.61 6.63 56.61ZM4.25 57.545H46.325V62.135H4.25V57.545ZM6.8 44.2L37.485 16.15L45.22 24.225L14.535 52.275L6.8 44.2ZM46.41 21.42C46.41 21.7034 46.2683 21.9867 45.985 22.27C45.7583 22.5534 45.475 22.695 45.135 22.695C44.795 22.695 44.4833 22.5534 44.2 22.27C43.9733 21.9867 43.86 21.7034 43.86 21.42C43.86 17.9634 43.01 14.8184 41.31 11.985C39.61 9.09504 37.315 6.80005 34.425 5.10005C31.535 3.40005 28.3617 2.55004 24.905 2.55004C21.4483 2.55004 18.275 3.40005 15.385 5.10005C12.495 6.80005 10.2 9.09504 8.5 11.985C6.8 14.875 5.95 18.02 5.95 21.42C5.95 21.76 5.80833 22.0717 5.525 22.355C5.29833 22.5817 5.015 22.695 4.675 22.695C4.335 22.695 4.02333 22.5817 3.74 22.355C3.51333 22.0717 3.4 21.76 3.4 21.42C3.4 17.51 4.36333 13.94 6.29 10.71C8.21667 7.42338 10.8233 4.81671 14.11 2.89005C17.4533 0.96338 21.0517 4.72069e-05 24.905 4.72069e-05C28.815 4.72069e-05 32.4133 0.96338 35.7 2.89005C38.9867 4.81671 41.5933 7.42338 43.52 10.71C45.4467 13.94 46.41 17.51 46.41 21.42ZM89.4997 21.42C89.4997 21.76 89.358 22.0717 89.0747 22.355C88.848 22.5817 88.5647 22.695 88.2247 22.695C87.8847 22.695 87.573 22.5817 87.2897 22.355C87.063 22.0717 86.9497 21.76 86.9497 21.42C86.9497 18.4167 86.213 15.6684 84.7397 13.175C83.2664 10.6817 81.283 8.72671 78.7897 7.31004C76.2964 5.83671 73.548 5.10005 70.5447 5.10005C67.5414 5.10005 64.793 5.83671 62.2997 7.31004C59.8064 8.78338 57.823 10.7667 56.3497 13.26C54.8764 15.7534 54.1397 18.4734 54.1397 21.42C54.1397 21.76 53.998 22.0717 53.7147 22.355C53.488 22.5817 53.2047 22.695 52.8647 22.695C52.5247 22.695 52.213 22.5817 51.9297 22.355C51.703 22.0717 51.5897 21.76 51.5897 21.42C51.5897 18.02 52.4397 14.875 54.1397 11.985C55.8397 9.09504 58.1347 6.80005 61.0247 5.10005C63.9147 3.40005 67.088 2.55004 70.5447 2.55004C74.0014 2.55004 77.1747 3.40005 80.0647 5.10005C82.9547 6.80005 85.2497 9.09504 86.9497 11.985C88.6497 14.8184 89.4997 17.9634 89.4997 21.42ZM51.5897 43.095C51.5897 42.755 51.703 42.4717 51.9297 42.245C52.213 41.9617 52.5247 41.82 52.8647 41.82C53.2047 41.82 53.488 41.9617 53.7147 42.245C53.998 42.4717 54.1397 42.755 54.1397 43.095C54.1397 46.0417 54.8764 48.7617 56.3497 51.255C57.823 53.7484 59.8064 55.7317 62.2997 57.205C64.793 58.6784 67.5414 59.415 70.5447 59.415C73.548 59.415 76.2964 58.7067 78.7897 57.29C81.283 55.8167 83.2664 53.8334 84.7397 51.34C86.213 48.8467 86.9497 46.0984 86.9497 43.095C86.9497 42.755 87.063 42.4717 87.2897 42.245C87.573 41.9617 87.8847 41.82 88.2247 41.82C88.5647 41.82 88.848 41.9617 89.0747 42.245C89.358 42.4717 89.4997 42.755 89.4997 43.095C89.4997 46.5517 88.6497 49.725 86.9497 52.615C85.2497 55.4484 82.9547 57.715 80.0647 59.415C77.1747 61.115 74.0014 61.965 70.5447 61.965C67.088 61.965 63.9147 61.115 61.0247 59.415C58.1347 57.715 55.8397 55.42 54.1397 52.53C52.4397 49.64 51.5897 46.495 51.5897 43.095ZM54.0547 24.395V26.945H51.5047V24.395H54.0547ZM54.0547 28.645V31.195H51.5047V28.645H54.0547ZM54.0547 32.895V35.445H51.5047V32.895H54.0547ZM54.0547 37.145V39.695H51.5047V37.145H54.0547ZM89.4997 24.395V26.945H86.9497V24.395H89.4997ZM89.4997 28.645V31.195H86.9497V28.645H89.4997ZM89.4997 32.895V35.445H86.9497V32.895H89.4997ZM89.4997 37.145V39.695H86.9497V37.145H89.4997ZM71.7347 18.275V49.98H69.1847V18.275H71.7347Z"
            fill="#B1B1B1"
          />
          <path
            d="M102 26.05V32.05M102 38.05V32.05M102 32.05H108M102 32.05H96"
            stroke="#B1B1B1"
            strokeWidth="1.55"
          />
        </svg>
      </div>
    </section>
  );
}
