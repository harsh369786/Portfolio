"use client";

import { motion, useTransform, MotionValue } from "framer-motion";

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

  return (
    <motion.div 
      style={{ 
        opacity: useTransform(scrollYProgress, [0.95, 1.0], [1, 0]),
        visibility: outerVisibility as any,
        pointerEvents: "none"
      }}
      className="fixed top-0 left-0 w-full h-screen z-[50] overflow-hidden"
    >
      {/* Premium Vignette Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-gradient-to-b from-black/20 via-transparent to-black/60"
      />
      <div 
        className="absolute inset-0 z-0"
        style={{
          background: "radial-gradient(circle at 50% 50%, transparent 40%, rgba(0,0,0,0.7) 100%)"
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
        className="absolute inset-0 flex items-center justify-center px-6 text-center z-10"
      >
        <div className="max-w-5xl">
          <h1 className="text-5xl md:text-[9vw] font-heading font-black tracking-tighter text-white uppercase leading-[0.85] overflow-hidden py-4">
            {text1.split("").map((char, i) => (
              <motion.span
                key={i}
                initial={{ y: "110%", rotate: 10 }}
                animate={{ y: 0, rotate: 0 }}
                transition={{ duration: 1, delay: i * 0.03, ease: [0.33, 1, 0.68, 1] }}
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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 0.5, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-6"
          >
            <span className="text-accent text-sm md:text-xl font-medium tracking-[0.5em] uppercase">
              {text2}
            </span>
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
        className="absolute inset-0 flex items-center justify-start px-8 md:px-32 z-10"
      >
        <div className="max-w-3xl">
          <h2 className="text-4xl md:text-7xl font-heading font-bold leading-[1.1] tracking-tight text-white/95">
            Crafting <span className="text-accent italic font-serif">immersive</span> digital worlds where <span className="text-accent">code</span> meets <span className="text-secondary italic">art</span>.
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
        className="absolute inset-0 flex items-center justify-end px-8 md:px-32 text-right z-10"
      >
        <div className="max-w-4xl">
          <h2 className="text-4xl md:text-7xl font-heading font-bold leading-[1.1] tracking-tight text-white/95">
            Defining the <span className="text-accent italic">future</span> of the web, <span className="text-secondary">one pixel</span> at a time.
          </h2>
        </div>
      </motion.div>
    </motion.div>
  );
}
