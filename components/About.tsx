"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

const SKILLS = [
  ["Next.js 15", "TypeScript", "React 19", "Tailwind CSS", "Framer Motion", "Supabase", "Vercel", "PostgreSQL"],
  ["Google Gemini AI", "Genkit", "AI Content Pipelines", "Workflow Automation"],
  ["Docker", "Kubernetes", "Server Migrations", "End-to-End DevOps Setup", "Email Migrations"],
  ["Power BI", "Tableau", "Metabase", "MongoDB", "ClickHouse", "MySQL"],
];

function Counter({ value, label }: { value: number; label: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const countRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!isInView || !countRef.current) return;
    
    let rafId: number;
    const start = performance.now();
    const duration = 2000;

    const animate = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(2, -10 * progress);
      if (countRef.current) {
        countRef.current.textContent = String(Math.round(eased * value));
      }
      if (progress < 1) {
        rafId = requestAnimationFrame(animate);
      }
    };

    rafId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafId);
  }, [isInView, value]);

  return (
    <div ref={ref} className="flex flex-col items-center">
      <div className="flex items-baseline gap-1">
        <span ref={countRef} className="text-4xl md:text-6xl font-heading font-bold tabular-nums">0</span>
        <span className="text-2xl md:text-3xl font-bold text-accent">+</span>
      </div>
      <p className="text-xs md:text-sm uppercase tracking-widest text-secondary mt-2">{label}</p>
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="relative z-20 bg-background px-6 py-32 md:px-24">
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-6xl mx-auto"
      >
        <div className="mb-16">
          <p className="text-accent font-medium tracking-widest uppercase text-sm mb-4">About Me</p>
          <h2 className="text-4xl md:text-7xl font-heading font-bold tracking-tighter leading-tight max-w-4xl">
            I turn ideas into <span className="text-accent italic font-serif">AI-powered</span> products.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
          <div className="space-y-6 text-base md:text-xl text-secondary leading-relaxed">
            <p>
              I'm a Mumbai-based <span className="text-foreground font-medium">Senior Creative Developer</span> with 4 years of experience shipping production-grade web applications.
            </p>
            <p>
              Currently working full-time as a Solution Engineer, I've built AI-integrated e-commerce platforms, real-time D2C storefronts, data pipelines, and DevOps infrastructure from scratch. 
            </p>
            <p>
              I don't just write code — I understand the business problem first, then engineer the most elegant solution to solve it.
            </p>
          </div>

          <div className="space-y-8">
            {SKILLS.map((row, rowIndex) => (
              <div key={rowIndex} className="flex flex-wrap gap-3">
                {row.map((skill, i) => (
                  <motion.span
                    key={skill}
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ 
                      type: "spring", 
                      stiffness: 200, 
                      damping: 15, 
                      delay: rowIndex * 0.1 + i * 0.05 
                    }}
                    className="px-4 py-2 rounded-full border border-accent/40 bg-accent/5 text-accent text-xs md:text-sm font-medium hover:bg-accent hover:text-white hover:shadow-[0_0_20px_rgba(41,121,255,0.4)] transition-all cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-32 grid grid-cols-3 gap-8 py-12 border-y border-white/5">
          <Counter value={4} label="Years of Experience" />
          <Counter value={2} label="Products Shipped" />
          <Counter value={3} label="Happy Clients" />
        </div>
      </motion.div>
    </section>
  );
}
