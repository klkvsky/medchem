"use client";

import { useEffect, useRef } from "react";
import { Tag } from "@/components/tag";

const COLOR = "#411319";

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
        (c) => drawPill(c, "PRECISE", 8 * s),
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
      (c) => drawPill(c, "INNOVATIVE", 9 * s),
      rIn(0, 3),
      true,
    ),
    makeDecor(
      () => [rIn(0.04, 0.13), rIn(0.33, 0.5)],
      (c) => drawPill(c, "PRECISE", 9 * s),
      rIn(0, 3),
      true,
    ),
    makeDecor(
      // top-centre band — above the text block
      () => [rIn(0.38, 0.58), rIn(0.06, 0.16)],
      (c) => drawPill(c, "THOUGHTFUL", 9 * s),
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

export default function DrugDiscovery() {
  return (
    <div className="text-burgundy w-full flex flex-col h-dvh justify-center relative overflow-hidden">
      <FloatingCanvas />

      <div className="flex flex-row items-start mt-20 mx-auto translate-x-[25%] gap-2 md:-translate-x-full md:mt-0 relative z-10 md:gap-5">
        <div className="md:translate-y-0.5">
          <Tag
            icon="rectangle"
            size={9}
            sizes={{
              base: 16,
              md: 9,
              xl: 21,
            }}
          />
        </div>
        <div className="flex flex-col gap-2 xl:gap-6">
          <h2 className="text-hero-subtitle uppercase font-aeonik-mono">
            drug discovery
          </h2>
          <div className="flex flex-col gap-0 text-subtitle-1 font-diatype">
            <p>Поиск и выбор мишени</p>
            <p>Валидация мишени</p>
            <p>Поиск и оптимизация</p>
            <p>Доклинические исследования</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col mt-43 ml-13.5 -space-y-3 md:absolute md:right-20 md:bottom-20 relative z-10 xl:-space-y-10 xl:right-50 xl:bottom-50">
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
    </div>
  );
}
