"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Detect touch devices — they have their own momentum scrolling
    // that Lenis fights against, causing jank
    const isTouchDevice = window.matchMedia("(pointer: coarse)").matches;

    const lenis = new Lenis({
      duration: isTouchDevice ? 0.8 : 1.2,         // Shorter duration on mobile = less lag
      easing: (t) => Math.min(1, 1.01 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      touchMultiplier: 1.5,                          // Let touch scrolling feel faster/more responsive
      syncTouch: isTouchDevice,                      // Sync with native touch momentum on mobile
    });

    let rafId: number;

    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
