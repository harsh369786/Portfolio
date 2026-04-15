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

/* Stagger animation variants for section entrance */
const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } }
};

export default function About() {
  return (
    <section id="about" className="relative z-20 bg-background px-6 py-28 md:py-40 md:px-24 overflow-hidden">
      {/* Background Polish */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-accent/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Animated gradient divider at top */}
      <div className="section-divider absolute top-0 left-0 right-0" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Content */}
          <motion.div 
            className="space-y-10 md:space-y-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <div>
              <motion.p 
                variants={itemVariants}
                className="text-xs uppercase tracking-[0.6em] text-accent font-bold mb-6 italic"
              >
                Who am I?
              </motion.p>
              <motion.h2 
                variants={itemVariants}
                className="text-4xl md:text-7xl lg:text-8xl font-heading font-black tracking-tighter leading-tight"
              >
                Harsh Shah.
              </motion.h2>
              <motion.p 
                variants={itemVariants}
                className="text-accent text-lg md:text-xl font-medium tracking-widest uppercase mt-4"
              >
                Engineering the Future.
              </motion.p>
            </div>

            <motion.div
              variants={itemVariants}
              className="space-y-6 text-secondary text-base md:text-xl leading-[1.7]"
            >
              <p>
                I'm a full-stack creative developer and your <strong className="text-white font-semibold">one-stop tech partner</strong> — from AI-powered platforms to pixel-perfect e-commerce, I handle the entire journey from concept to deployment.
              </p>
              <p>
                My approach is rooted in technical excellence and artistic intuition. I don't just ship code — I deliver products that resonate, convert, and scale.
              </p>
            </motion.div>

            <div className="grid grid-cols-3 gap-6 md:gap-12 pt-4 md:pt-8">
              {STATS.map((stat, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="group"
                >
                  <div className="flex items-center gap-2 md:gap-3 text-accent mb-2">
                    {stat.icon}
                    <p className="text-[8px] md:text-[10px] uppercase tracking-wider md:tracking-widest font-black opacity-60 group-hover:opacity-100 transition-opacity">{stat.label}</p>
                  </div>
                  <p className="text-3xl md:text-5xl font-heading font-black tracking-tighter">
                    <Counter value={stat.value} suffix={stat.suffix} />
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Tech Stack Card */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative h-[450px] md:h-[600px] bg-[#111111] rounded-[2rem] md:rounded-[3rem] border border-white/5 overflow-hidden group shadow-2xl"
          >
            {/* Subtle hover glow on the entire card */}
            <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/[0.02] transition-colors duration-700 pointer-events-none" />
            
            <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-between">
              <div className="flex justify-between items-start">
                <div className="space-y-1">
                  <p className="text-accent font-black text-xs tracking-widest uppercase">Tech Stack</p>
                  <h3 className="text-2xl md:text-3xl font-heading font-black tracking-tight">Vanguard Engineering</h3>
                </div>
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent">
                   <Cpu className="w-5 h-5 md:w-6 md:h-6" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 md:gap-4">
                {["Next.js 15", "React 19", "TypeScript", "Framer Motion", "Tailwind CSS", "Supabase", "Gemini AI", "Genkit"].map((tech, i) => (
                  <motion.div 
                    key={tech} 
                    whileHover={{ scale: 1.04, borderColor: "rgba(59,130,246,0.4)" }}
                    transition={{ type: "spring", stiffness: 400, damping: 20 }}
                    className="px-4 md:px-6 py-3 md:py-4 rounded-xl md:rounded-2xl bg-white/5 border border-white/10 text-[10px] md:text-xs font-bold uppercase tracking-wider md:tracking-widest text-secondary hover:text-white transition-colors duration-300 interactive"
                  >
                    {tech}
                  </motion.div>
                ))}
              </div>

              <div className="pt-8 text-[60px] md:text-[120px] font-heading font-black text-white/[0.02] absolute -bottom-10 -right-10 select-none uppercase italic pointer-events-none">
                Elite
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
