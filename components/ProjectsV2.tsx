"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ExternalLink, ChevronRight, Quote as QuoteIcon } from "lucide-react";
import React, { useRef } from "react";

interface TestimonialProps {
  quote: string;
  attribution: string;
}

function Testimonial({ quote, attribution }: TestimonialProps) {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="mt-6 bg-white/5 backdrop-blur-[12px] saturate-[180%] border-l-4 border-accent border-r border-t border-b border-white/[0.05] p-6 lg:p-8 rounded-2xl md:rounded-[2rem] relative overflow-hidden"
    >
      <QuoteIcon className="absolute top-4 left-4 w-12 h-12 text-accent opacity-10" />
      <p className="text-sm md:text-base text-[#D0D0D0] italic font-serif leading-relaxed relative z-10">
        &ldquo;{quote}&rdquo;
      </p>
      <p className="mt-4 text-xs md:text-sm text-accent font-medium tracking-wide font-sans uppercase">
        — {attribution}
      </p>
    </motion.div>
  );
}

const PROJECTS = [
  {
    number: "01",
    year: "2026",
    tags: ["E-Commerce", "AI Integration", "Full-Stack"],
    title: "PS Kitchenware",
    subtitle: "AI-Enhanced E-Commerce Ecosystem",
    description: "A high-performance, full-stack e-commerce platform for a premium kitchenware brand. Built with Next.js 15 and Supabase, integrated with Google Gemini AI to automate product content creation.",
    highlights: [
      "Gemini AI auto-generates SEO product descriptions",
      "Real-time inventory and order tracking",
      "Dynamic HTML order confirmations"
    ],
    tech: ["Next.js 15", "Supabase", "Genkit", "Radix UI"],
    link: "https://pskitchenware.in",
    testimonial: {
      quote: "We needed a digital presence that matched the quality of our products. Harsh delivered exactly that — a real-time catalog system that's helped us win contracts with hotel groups and premium retailers.",
      attribution: "Smit Shah, Business Owner, PS Kitchenware"
    },
    colSpan: "lg:col-span-8",
    rowSpan: "lg:row-span-2"
  },
  {
    number: "02",
    year: "2026",
    tags: ["D2C", "E-Commerce", "Payments"],
    title: "Alum Fresh",
    subtitle: "Premium D2C E-Commerce",
    description: "A high-performance D2C platform transforming a traditional mineral remedy into a modern premium skincare brand. Built for conversion and automated operations.",
    highlights: [
      "Zero-Total Bypass for campaigns",
      "Real-time Google Sheets sync"
    ],
    tech: ["Next.js 15", "Razorpay", "Google Sheets API"],
    link: "https://theauracompany.co.in",
    testimonial: {
      quote: "Harsh took us from a basic concept to a launch-ready premium brand — fast. The automated order tracking made our daily operations effortless.",
      attribution: "Darshil Gada, Business Owner, The Aura Company"
    },
    colSpan: "lg:col-span-4",
    rowSpan: "lg:row-span-2"
  }
];

interface BentoCardProps {
  project: typeof PROJECTS[0];
  index: number;
}

function BentoCard({ project, index }: BentoCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  // 3D Tilt Effect: Max 5 degrees
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["5deg", "-5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-5deg", "5deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current || window.matchMedia("(pointer: coarse)").matches) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div className={`relative perspective-1000 ${project.colSpan} ${project.rowSpan}`}>
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        initial={{ y: 60, opacity: 0, filter: "blur(10px)" }}
        whileInView={{ y: 0, opacity: 1, filter: "blur(0px)" }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
        className="group h-full w-full bg-white/5 backdrop-blur-[12px] saturate-[180%] border border-white/[0.05] rounded-[2rem] p-8 md:p-10 flex flex-col justify-between overflow-hidden shadow-2xl relative"
      >
        {/* Shine effect on hover */}
        <motion.div 
          className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2rem]"
          style={{
            background: useTransform(
              [mouseXSpring, mouseYSpring],
              ([mx, my]) => `radial-gradient(1000px circle at ${(mx + 0.5) * 100}% ${(my + 0.5) * 100}%, rgba(255,255,255,0.06), transparent 40%)`
            )
          }}
        />

        <div className="relative z-10 space-y-6" style={{ transform: "translateZ(30px)" }}>
          <div className="flex justify-between items-start">
            <span className="text-4xl md:text-6xl font-heading font-black text-accent/20 group-hover:text-accent/30 transition-colors">
              {project.number}
            </span>
            <div className="flex gap-2 flex-wrap justify-end max-w-[60%]">
              {project.tags.slice(0, 2).map((tag, i) => (
                <span key={i} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[9px] text-secondary uppercase tracking-wider font-medium">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl md:text-4xl font-heading font-bold mb-2 group-hover:text-accent transition-colors text-white">
              {project.title}
            </h3>
            <p className="text-sm md:text-base text-accent font-medium uppercase tracking-wide">
              {project.subtitle}
            </p>
          </div>

          <p className="text-secondary text-sm md:text-base leading-relaxed">
            {project.description}
          </p>
        </div>

        <div className="relative z-10 pt-8" style={{ transform: "translateZ(40px)" }}>
          <div className="mb-8 space-y-2">
            {project.highlights.map((highlight, i) => (
              <p key={i} className="flex items-center gap-2 text-secondary text-xs md:text-sm">
                <ChevronRight className="w-3 h-3 text-accent" />
                {highlight}
              </p>
            ))}
          </div>

          <div className="flex justify-between items-end">
            <div className="flex flex-col gap-2">
              <span className="text-[10px] text-white/40 uppercase tracking-widest font-bold">Tech Stack</span>
              <div className="flex flex-wrap gap-1 w-3/4">
                {project.tech.map(t => (
                  <span key={t} className="text-xs text-secondary font-medium">
                    {t}{" "}
                  </span>
                ))}
              </div>
            </div>

            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-12 h-12 rounded-full border border-accent/40 bg-accent/10 text-accent hover:bg-accent hover:text-white transition-colors group/btn interactive flex-shrink-0"
            >
              <ExternalLink className="w-5 h-5 transition-transform group-hover/btn:scale-110 group-hover/btn:-translate-y-[2px]" />
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function ProjectsV2() {
  return (
    <section id="work" className="relative z-20 bg-background px-6 py-28 md:py-40 md:px-24">
      <div className="section-divider absolute top-0 left-0 right-0" />

      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="mb-16 md:mb-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: { transition: { staggerChildren: 0.1 } }
          }}
        >
          <motion.p 
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} 
            className="text-xs uppercase tracking-[0.4em] text-accent font-medium mb-4"
          >
            Selected Work (02)
          </motion.p>
          <motion.h2 
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} 
            className="font-heading font-black tracking-tight text-white"
            style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
          >
            Engineering Outcomes.
          </motion.h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 auto-rows-auto">
          <BentoCard project={PROJECTS[0]} index={0} />
          <BentoCard project={PROJECTS[1]} index={1} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 mt-6 lg:mt-8">
          <div className="lg:col-span-8">
            <Testimonial quote={PROJECTS[0].testimonial.quote} attribution={PROJECTS[0].testimonial.attribution} />
          </div>
          <div className="lg:col-span-4">
            <Testimonial quote={PROJECTS[1].testimonial.quote} attribution={PROJECTS[1].testimonial.attribution} />
          </div>
        </div>
      </div>
    </section>
  );
}
