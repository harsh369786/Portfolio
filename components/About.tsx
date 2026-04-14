"use client";

import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { User, Cpu, Zap } from "lucide-react";

const STATS = [
  { label: "Products Shipped", value: 2, suffix: "+", icon: <Zap className="w-5 h-5" /> },
  { label: "Years Experience", value: 4, suffix: "+", icon: <Cpu className="w-5 h-5" /> },
  { label: "Happy Clients", value: 2, suffix: "+", icon: <User className="w-5 h-5" /> }
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / 2000, 1);
      setCount(Math.round(progress * value));
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          animationFrame = requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      cancelAnimationFrame(animationFrame);
      observer.disconnect();
    };
  }, [value]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function About() {
  return (
    <section id="about" className="relative z-20 bg-background px-6 py-40 md:px-24 border-t border-white/5 overflow-hidden">
      {/* Background Polish */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-accent/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          {/* Left: Content */}
          <div className="space-y-12">
            <div>
              <motion.p 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-xs uppercase tracking-[0.6em] text-accent font-bold mb-6 italic"
              >
                Who am I?
              </motion.p>
              <motion.h2 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-5xl md:text-8xl font-heading font-black tracking-tighter leading-tight"
              >
                Harsh Shah.
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-accent text-xl font-medium tracking-widest uppercase mt-4"
              >
                Engineering the Future.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="space-y-6 text-secondary text-lg md:text-xl leading-[1.6]"
            >
              <p>
                A senior creative developer dedicated to building high-performance, immersive digital experiences. I bridge the gap between complex engineering and award-winning design.
              </p>
              <p>
                My approach is rooted in technical excellence and artistic intuition. I don't just ship code; I deliver products that resonate and scale.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 gap-8 md:gap-12 pt-8">
              {STATS.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group"
                >
                  <div className="flex items-center gap-3 text-accent mb-2">
                    {stat.icon}
                    <p className="text-[10px] uppercase tracking-widest font-black opacity-60 group-hover:opacity-100 transition-opacity">{stat.label}</p>
                  </div>
                  <p className="text-3xl md:text-5xl font-heading font-black tracking-tighter">
                    <Counter value={stat.value} suffix={stat.suffix} />
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative h-[600px] bg-[#111111] rounded-[3rem] border border-white/5 overflow-hidden group shadow-2xl"
          >
            <div className="absolute inset-0 p-12 flex flex-col justify-between">
              <div className="flex justify-between items-start">
                <div className="space-y-1">
                  <p className="text-accent font-black text-xs tracking-widest uppercase">Tech Stack</p>
                  <h3 className="text-3xl font-heading font-black tracking-tight">Vanguard Engineering</h3>
                </div>
                <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent">
                   <Cpu className="w-6 h-6" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {["Next.js 15", "React 19", "TypeScript", "Framer Motion", "Tailwind CSS", "Supabase", "Gemini AI", "Genkit"].map((tech) => (
                  <div key={tech} className="px-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-widest text-secondary hover:border-accent/30 hover:text-white transition-all duration-300">
                    {tech}
                  </div>
                ))}
              </div>

              <div className="pt-8 text-[120px] font-heading font-black text-white/[0.02] absolute -bottom-10 -right-10 select-none uppercase italic pointer-events-none">
                Elite
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
