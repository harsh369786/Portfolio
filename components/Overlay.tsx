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

  return (
    <motion.div 
      style={{ 
        opacity: useTransform(scrollYProgress, [0.95, 1.0], [1, 0]),
        visibility: outerVisibility as any,
        pointerEvents: "none"
      }}
      className="fixed top-0 left-0 w-full h-screen z-[50] overflow-hidden"
    >
      {/* Dynamic Vignette */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          background: "radial-gradient(ellipse at center, transparent 30%, rgba(0,0,0,0.8) 100%)"
        }}
      />

      {/* Section 1 */}
      <motion.div
        style={{ 
          opacity: useTransform(scrollYProgress, [0, 0.25, 0.35], [1, 1, 0]), 
          y: useTransform(scrollYProgress, [0, 0.35], [0, -50]),
          filter: useTransform(scrollYProgress, [0, 0.25, 0.35], ["blur(0px)", "blur(0px)", "blur(12px)"]),
          scale: useTransform(scrollYProgress, [0, 0.25, 0.35], [1, 1, 0.9])
        }}
        className="absolute inset-0 flex items-center justify-center px-6 text-center z-10"
      >
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-8xl font-heading font-black tracking-tighter text-white drop-shadow-[0_0_30px_rgba(0,0,0,0.5)]">
            HARSH SHAH.
            <br />
            <span className="text-accent opacity-50">CREATIVE DEVELOPER.</span>
          </h1>
        </div>
      </motion.div>

      {/* Section 2 */}
      <motion.div
        style={{ 
          opacity: useTransform(scrollYProgress, [0.30, 0.40, 0.60, 0.70], [0, 1, 1, 0]), 
          y: useTransform(scrollYProgress, [0.30, 0.40, 0.60, 0.70], [50, 0, 0, -50]),
          filter: useTransform(scrollYProgress, [0.30, 0.40, 0.60, 0.70], ["blur(12px)", "blur(0px)", "blur(0px)", "blur(12px)"]),
          scale: useTransform(scrollYProgress, [0.30, 0.40, 0.60, 0.70], [0.9, 1, 1, 0.9])
        }}
        className="absolute inset-0 flex items-center justify-start px-8 md:px-24 z-10"
      >
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-6xl font-heading font-bold leading-tight tracking-tight text-white/90 drop-shadow-[0_0_30px_rgba(0,0,0,0.5)]">
            I build <span className="text-accent italic font-serif">digital experiences</span> that push the boundaries of the web.
          </h2>
        </div>
      </motion.div>

      {/* Section 3 */}
      <motion.div
        style={{ 
          opacity: useTransform(scrollYProgress, [0.65, 0.75, 0.90, 1.0], [0, 1, 1, 0]), 
          y: useTransform(scrollYProgress, [0.65, 0.75], [50, 0]),
          filter: useTransform(scrollYProgress, [0.65, 0.75, 0.90, 1.0], ["blur(12px)", "blur(0px)", "blur(0px)", "blur(12px)"]),
          scale: useTransform(scrollYProgress, [0.65, 0.75, 0.90, 1.0], [0.9, 1, 1, 0.9])
        }}
        className="absolute inset-0 flex items-center justify-end px-8 md:px-24 text-right z-10"
      >
        <div className="max-w-3xl">
          <h2 className="text-3xl md:text-6xl font-heading font-bold leading-tight tracking-tight text-white/90 drop-shadow-[0_0_30px_rgba(0,0,0,0.5)]">
            Bridging the gap between <span className="text-accent italic">design</span> and <span className="text-accent italic font-serif">engineering</span>.
          </h2>
        </div>
      </motion.div>
    </motion.div>
  );
}
