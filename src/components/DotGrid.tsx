"use client";

import { useEffect, useRef } from "react";

interface DotGridProps {
  ink?: string;
  accent?: string;
  gap?: number;
  dot?: number;
  alpha?: number;
  className?: string;
}

export default function DotGrid({
  ink = "38,38,38",
  accent = "212,115,17",
  gap = 9,
  dot = 6,
  alpha = 0.12,
  className = "",
}: DotGridProps) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let raf = 0;
    let running = true;
    let last = 0;

    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      const rect = parent.getBoundingClientRect();
      canvas.width = Math.max(1, Math.floor(rect.width * dpr));
      canvas.height = Math.max(1, Math.floor(rect.height * dpr));
      draw(0);
    };

    const draw = (t: number) => {
      const { width: W, height: H } = canvas;
      ctx.clearRect(0, 0, W, H);
      const step = gap * dpr;
      const size = dot * dpr;
      let row = 0;
      for (let y = step / 2; y < H; y += step, row++) {
        let col = 0;
        for (let x = step / 2; x < W; x += step, col++) {
          const isAccent = (row * 5 + col * 11) % 7 === 0;
          ctx.fillStyle = isAccent ? `rgba(${accent},1)` : `rgba(${ink},1)`;
          const twinkle = (row * 7 + col * 13) % 11 === 0;
          const a = twinkle
            ? alpha + 0.14 * Math.sin(t / 900 + (row + col) * 0.7)
            : alpha;
          ctx.globalAlpha = Math.max(0.06, a);
          ctx.fillRect(x - size / 2, y - size / 2, size, size);
        }
      }
      ctx.globalAlpha = 1;
    };

    const frame = (now: number) => {
      if (!running) return;
      if (now - last > 66) {
        last = now;
        draw(now);
      }
      raf = requestAnimationFrame(frame);
    };

    draw(0);
    if (!reduced) raf = requestAnimationFrame(frame);

    const onVisibility = () => {
      if (document.hidden) {
        running = false;
        cancelAnimationFrame(raf);
      } else if (!reduced) {
        running = true;
        last = performance.now();
        raf = requestAnimationFrame(frame);
      }
    };
    document.addEventListener("visibilitychange", onVisibility);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (reduced) return;
        if (entry.isIntersecting && !running && !document.hidden) {
          running = true;
          raf = requestAnimationFrame(frame);
        } else if (!entry.isIntersecting && running) {
          running = false;
          cancelAnimationFrame(raf);
        }
      },
      { threshold: 0 }
    );
    observer.observe(canvas);

    const ro = new ResizeObserver(resize);
    if (canvas.parentElement) ro.observe(canvas.parentElement);
    window.addEventListener("resize", resize);

    return () => {
      running = false;
      cancelAnimationFrame(raf);
      document.removeEventListener("visibilitychange", onVisibility);
      observer.disconnect();
      ro.disconnect();
      window.removeEventListener("resize", resize);
    };
  }, [ink, accent, gap, dot, alpha]);

  return <canvas ref={ref} className={className} aria-hidden="true" />;
}
