"use client";

import { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, motion, MotionValue, useMotionValueEvent } from "framer-motion";

const FRAME_COUNT = 82;
const IMAGE_BASE_PATH = "/sequence/Whisk_mgzwugz1edo2ezy10cm2gdotqdo3qtl0u2mk1cm_";

interface ScrollyCanvasProps {
  scrollYProgress: MotionValue<number>;
}

export default function ScrollyCanvas({ scrollYProgress }: ScrollyCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [loadProgress, setLoadProgress] = useState(0);
  const ctxRef = useRef<CanvasRenderingContext2D | null>(null);

  // Map scroll progress (0-1) to frame index (0-81)
  const currentIndex = useTransform(scrollYProgress, [0, 1], [0, FRAME_COUNT - 1]);

  // Preload images
  useEffect(() => {
    const loadedImages: HTMLImageElement[] = new Array(FRAME_COUNT);
    let loadedCount = 0;
    let cancelled = false;

    for (let i = 0; i < FRAME_COUNT; i++) {
      const img = new Image();
      img.decoding = "async";
      img.src = `${IMAGE_BASE_PATH}${i.toString().padStart(3, "0")}.webp`;
      img.onload = () => {
        if (cancelled) return;
        loadedImages[i] = img;
        loadedCount++;
        setLoadProgress(Math.round((loadedCount / FRAME_COUNT) * 100));

        // Show canvas immediately when frame 0 is ready
        if (i === 0) {
          imagesRef.current = loadedImages;
          renderFrame(0);
          setIsLoaded(true); // fade canvas in now, not after all 82
        }

        if (loadedCount === FRAME_COUNT) {
          imagesRef.current = loadedImages;
        }
      };
      img.onerror = () => {
        if (cancelled) return;
        loadedCount++; // count errors too so we don't hang
        if (loadedCount === FRAME_COUNT) {
          imagesRef.current = loadedImages;
        }
      };
    }

    return () => {
      cancelled = true;
    };
  }, []);

  // Handle Resize and Initial Draw
  // On mobile, render at 1x DPR to halve GPU fill-rate (major perf win)
  useEffect(() => {
    let debounceTimer: ReturnType<typeof setTimeout>;
    const isMobile = window.matchMedia("(pointer: coarse)").matches;
    const dpr = isMobile ? 1 : Math.min(window.devicePixelRatio || 1, 2);

    const handleResize = () => {
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(() => {
        if (!canvasRef.current) return;
        const w = window.innerWidth;
        const h = window.innerHeight;
        canvasRef.current.width = w * dpr;
        canvasRef.current.height = h * dpr;
        canvasRef.current.style.width = `${w}px`;
        canvasRef.current.style.height = `${h}px`;
        // Reset context after canvas resize (resize clears context state)
        ctxRef.current = canvasRef.current.getContext("2d", { alpha: false }) ?? null;
        if (ctxRef.current) ctxRef.current.scale(dpr, dpr);
        renderFrame(Math.round(currentIndex.get()));
      }, 100);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(debounceTimer);
    };
  }, [isLoaded]);

  const renderFrame = (index: number) => {
    if (!canvasRef.current || imagesRef.current.length === 0 || !imagesRef.current[index]) return;

    const ctx = ctxRef.current;
    if (!ctx) return;

    const img = imagesRef.current[index];
    // Use CSS pixel dimensions (ctx.scale handles DPR)
    const cw = canvasRef.current.clientWidth || window.innerWidth;
    const ch = canvasRef.current.clientHeight || window.innerHeight;

    // Object-fit: cover logic
    const imgRatio = img.width / img.height;
    const canvasRatio = cw / ch;
    let drawWidth, drawHeight, offsetX, offsetY;

    if (canvasRatio > imgRatio) {
      drawWidth = cw;
      drawHeight = cw / imgRatio;
      offsetX = 0;
      offsetY = (ch - drawHeight) / 2;
    } else {
      drawWidth = ch * imgRatio;
      drawHeight = ch;
      offsetX = (cw - drawWidth) / 2;
      offsetY = 0;
    }

    ctx.fillStyle = "#080808";
    ctx.fillRect(0, 0, cw, ch);
    ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
  };

  const lastFrameRef = useRef<number>(-1);
  const rafIdRef = useRef<number>(0);

  // Render on scroll - Optimized with lastFrameRef and useMotionValueEvent
  useMotionValueEvent(currentIndex, "change", (v) => {
    const rounded = Math.round(v);
    if (rounded !== lastFrameRef.current) {
      lastFrameRef.current = rounded;
      if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
      rafIdRef.current = requestAnimationFrame(() => renderFrame(rounded));
    }
  });

  return (
    <div className="sticky top-0 h-screen w-full overflow-hidden will-change-transform">
      <canvas
        ref={canvasRef}
        className="h-full w-full object-cover pointer-events-none"
        style={{
          opacity: isLoaded ? 1 : 0,
          transition: "opacity 0.5s ease-in-out",
        }}
      />
      {loadProgress < 100 && (
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-10">
          <div className="w-32 h-[1px] bg-white/10 relative overflow-hidden">
            <div
              className="absolute left-0 top-0 h-full bg-accent transition-all duration-300"
              style={{ width: `${loadProgress}%` }}
            />
          </div>
          <span className="text-[10px] uppercase tracking-[0.3em] text-secondary">
            {loadProgress}%
          </span>
        </div>
      )}
    </div>
  );
}
