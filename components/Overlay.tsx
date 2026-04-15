"use client";

import { motion, useTransform, MotionValue, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

interface OverlayProps {
  scrollYProgress: MotionValue<number>;
}

export default function Overlay({ scrollYProgress }: OverlayProps) {
  const outerVisibility = useTransform(
    scrollYProgress,
    [0.94, 0.95, 1.0],
    ["visible", "visible", "hidden"]
  );

  const text1 = "HARSH SHAH.";
  const text2 = "CREATIVE DEVELOPER.";

  // Mouse tracking for radial glow
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { damping: 50, stiffness: 400 });
  const smoothY = useSpring(mouseY, { damping: 50, stiffness: 400 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <motion.div 
      style={{ 
        opacity: useTransform(scrollYProgress, [0.95, 1.0], [1, 0]),
        visibility: outerVisibility as any,
        pointerEvents: "none"
      }}
      className="fixed top-0 left-0 w-full h-screen z-[50] overflow-hidden"
    >
      {/* Dynamic Mouse Tracking Radial Glow (Desktop Only) */}
      <motion.div
        className="hidden md:block absolute inset-0 z-0 opacity-40 mix-blend-screen pointer-events-none"
        style={{
          background: useTransform(
            [smoothX, smoothY],
            ([x, y]) => `radial-gradient(1000px circle at ${x}px ${y}px, rgba(59,130,246,0.15), transparent 60%)`
          )
        }}
      />

      {/* Premium Vignette Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-gradient-to-b from-black/20 via-transparent to-black/80"
      />
      <div 
        className="absolute inset-0 z-0"
        style={{
          background: "radial-gradient(circle at 50% 50%, transparent 40%, rgba(0,0,0,0.8) 100%)"
        }}
      />

      {/* Section 1: Kinetic Hero */}
      <motion.div
        style={{ 
          opacity: useTransform(scrollYProgress, [0, 0.25, 0.35], [1, 1, 0]), 
          filter: useTransform(scrollYProgress, [0, 0.25, 0.35], ["blur(0px)", "blur(0px)", "blur(12px)"]),
          scale: useTransform(scrollYProgress, [0, 0.25, 0.35], [1, 1, 0.85]),
          y: useTransform(scrollYProgress, [0, 0.35], [0, -40])
        }}
        className="absolute inset-0 flex items-center justify-center px-4 md:px-6 text-center z-10"
      >
        <div className="max-w-6xl w-full">
          {/* Main Name — Fluid Typography Scale using clamp() */}
          <h1 
            className="font-heading font-black tracking-tighter text-white uppercase leading-[0.85] overflow-hidden py-4"
            style={{ fontSize: "clamp(2.5rem, 8vw, 8rem)" }}
          >
            {text1.split("").map((char, i) => (
              <motion.span
                key={i}
                initial={{ y: "110%", rotate: 10 }}
                animate={{ y: 0, rotate: 0 }}
                transition={{ duration: 1, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
                style={{ 
                  display: "inline-block",
                  y: useTransform(scrollYProgress, [0, 0.2 + (i * 0.01), 0.35], [0, -20, -100]),
                  rotate: useTransform(scrollYProgress, [0, 0.2 + (i * 0.01), 0.35], [0, i % 2 === 0 ? 5 : -5, 15]),
                }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </h1>

          {/* Tagline — Staggered Reveal */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: { 
                opacity: 1, 
                transition: { staggerChildren: 0.05, delayChildren: 0.8 } 
              }
            }}
            className="mt-6 flex justify-center gap-[0.2em] md:gap-[0.5em] flex-wrap"
          >
            {text2.split(" ").map((word, wordIndex) => (
              <span key={wordIndex} className="inline-block overflow-hidden">
                <motion.span 
                  variants={{
                    hidden: { y: "100%" },
                    visible: { y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
                  }}
                  className="inline-block text-accent font-black uppercase tracking-[0.2em] md:tracking-[0.5em]"
                  style={{
                    fontSize: "clamp(0.875rem, 2vw, 1.5rem)",
                    textShadow: "0 0 30px rgba(59,130,246,0.5), 0 0 60px rgba(59,130,246,0.2)"
                  }}
                >
                  {word}&nbsp;
                </motion.span>
              </span>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Section 2: Narrative Reveal */}
      <motion.div
        style={{ 
          opacity: useTransform(scrollYProgress, [0.30, 0.40, 0.60, 0.70], [0, 1, 1, 0]), 
          y: useTransform(scrollYProgress, [0.30, 0.40, 0.60, 0.70], [60, 0, 0, -60]),
          filter: useTransform(scrollYProgress, [0.30, 0.40, 0.60, 0.70], ["blur(20px)", "blur(0px)", "blur(0px)", "blur(20px)"]),
          scale: useTransform(scrollYProgress, [0.30, 0.40, 0.60, 0.70], [0.85, 1, 1, 0.85])
        }}
        className="absolute inset-0 flex items-center justify-start px-6 md:px-32 z-10"
      >
        <div className="max-w-4xl">
          <h2 
            className="font-heading font-bold leading-[1.1] tracking-tight text-white/95"
            style={{ fontSize: "clamp(2rem, 6.5vw, 5rem)" }}
          >
            Your <span className="text-accent italic font-serif">one-stop</span> tech partner.
          </h2>
        </div>
      </motion.div>

      {/* Section 3: The Vision */}
      <motion.div
        style={{ 
          opacity: useTransform(scrollYProgress, [0.65, 0.75, 0.90, 1.0], [0, 1, 1, 0]), 
          y: useTransform(scrollYProgress, [0.65, 0.75, 0.90, 1.0], [60, 0, 0, -60]),
          filter: useTransform(scrollYProgress, [0.65, 0.75, 0.90, 1.0], ["blur(20px)", "blur(0px)", "blur(0px)", "blur(20px)"]),
          scale: useTransform(scrollYProgress, [0.65, 0.75, 0.90, 1.0], [0.85, 1, 1, 0.85])
        }}
        className="absolute inset-0 flex items-center justify-end px-6 md:px-32 text-right z-10"
      >
        <div className="max-w-4xl">
          <h2 
            className="font-heading font-bold leading-[1.1] tracking-tight text-white/95"
            style={{ fontSize: "clamp(2rem, 6.5vw, 5rem)" }}
          >
            Defining the <span className="text-accent italic">future</span> of the web, <span className="text-secondary">one pixel</span> at a time.
          </h2>
        </div>
      </motion.div>
    </motion.div>
  );
}
