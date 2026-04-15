"use client";

import { useRef } from "react";
import { useScroll, motion, useTransform } from "framer-motion";
import ScrollyCanvas from "@/components/ScrollyCanvas";
import Overlay from "@/components/Overlay";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Navbar from "@/components/Navbar";
import CustomCursor from "@/components/CustomCursor";
import SmoothScroll from "@/components/SmoothScroll";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const scrollIndicatorOpacity = useTransform(scrollYProgress, [0, 0.05], [1, 0]);

  return (
    <SmoothScroll>
      <main className="relative bg-background font-sans selection:bg-accent selection:text-white">
        <CustomCursor />
        <Navbar />
        
        {/* Hero Section with 3D Interaction */}
        <section id="home" ref={containerRef} className="relative h-[500vh] w-full">
          <ScrollyCanvas scrollYProgress={scrollYProgress} />
          
          <Overlay scrollYProgress={scrollYProgress} />

          {/* Scroll Indicator - Fixed to viewport bottom */}
          <motion.div
            style={{ opacity: scrollIndicatorOpacity }}
            className="fixed bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-[55] pointer-events-none scroll-indicator-bob"
          >
            <span className="text-[10px] uppercase tracking-[0.2em] text-secondary">Scroll</span>
            <div className="h-12 w-[1px] bg-gradient-to-b from-accent to-transparent" />
          </motion.div>
        </section>

        {/* Extended Content Sections */}
        <div className="relative">
          <About />
          <Projects />
          <Services />
          <Contact />
        </div>

      </main>
    </SmoothScroll>
  );
}
