"use client";

import { motion } from "framer-motion";
import { Code, ShoppingBag, Server, BarChart2 } from "lucide-react";

const SERVICES = [
  {
    icon: <Code className="w-7 h-7 md:w-8 md:h-8" />,
    title: "AI-Powered Web Apps",
    description: "Full-stack web applications with AI features baked in — from AI-generated content pipelines to intelligent automation workflows. Built with Next.js, Supabase, and Google Gemini."
  },
  {
    icon: <ShoppingBag className="w-7 h-7 md:w-8 md:h-8" />,
    title: "E-Commerce Platforms",
    description: "High-conversion D2C and B2C storefronts with custom payment flows, admin dashboards, real-time inventory, and transactional email systems. Mobile-first, fast, and scalable."
  },
  {
    icon: <Server className="w-7 h-7 md:w-8 md:h-8" />,
    title: "DevOps & Infrastructure",
    description: "End-to-end DevOps setup from scratch — Docker, Kubernetes, server migrations, and cloud infrastructure. Including full email migrations with zero data loss."
  },
  {
    icon: <BarChart2 className="w-7 h-7 md:w-8 md:h-8" />,
    title: "Data Analytics & Dashboards",
    description: "Business intelligence dashboards using Power BI, Tableau, and Metabase — connected to MongoDB, ClickHouse, MySQL, and PostgreSQL. Turn raw data into decisions."
  }
];

const PROCESS = [
  { step: "01", name: "Discovery Call", detail: "Understand your problem, goals, and timeline" },
  { step: "02", name: "Proposal & Scope", detail: "Fixed-price proposal with clear deliverables" },
  { step: "03", name: "Build & Update", detail: "Regular async updates throughout delivery" },
  { step: "04", name: "Launch & Support", detail: "Live deployment + 2 weeks post-launch support" }
];

/* Stagger animation for section entrance */
const headerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } }
};

const headerItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
};

export default function Services() {
  return (
    <section id="services" className="relative z-20 bg-background px-6 py-28 md:py-32 md:px-24">
      {/* Gradient divider at top */}
      <div className="section-divider absolute top-0 left-0 right-0" />

      <div className="max-w-6xl mx-auto">
        {/* Animated Section Header */}
        <motion.div 
          className="mb-16 md:mb-20 text-center md:text-left"
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.p variants={headerItemVariants} className="text-xs uppercase tracking-[0.4em] text-accent font-medium mb-4">What I Do</motion.p>
          <motion.h2 variants={headerItemVariants} className="text-3xl md:text-6xl font-heading font-bold mb-4 tracking-tight text-white">Services Built for Founders & Businesses</motion.h2>
          <motion.p variants={headerItemVariants} className="text-secondary text-base md:text-lg max-w-2xl mx-auto md:mx-0">From idea to deployed product — I handle the full stack.</motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-24 md:mb-32">
          {SERVICES.map((service, index) => (
            <motion.div
              key={index}
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-[#111111] p-8 md:p-10 rounded-2xl md:rounded-3xl border border-white/5 transition-all duration-300 hover:border-accent hover:shadow-[0_0_30px_rgba(59,130,246,0.1)]"
            >
              <div className="text-accent mb-5 md:mb-6 transition-transform group-hover:scale-110 duration-300">
                {service.icon}
              </div>
              <h3 className="text-lg md:text-2xl font-bold mb-3 md:mb-4 group-hover:text-accent transition-colors text-white">
                {service.title}
              </h3>
              <p className="text-secondary text-sm md:text-base leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        <div>
          <h3 className="text-xl md:text-2xl font-heading font-bold mb-12 md:mb-16 text-center text-white">How I Work</h3>
          <div className="relative flex flex-col md:flex-row justify-between gap-10 md:gap-4 px-4">
            {/* Dotted Line connector for Desktop */}
            <div className="hidden md:block absolute top-[23px] left-0 w-full h-[1px] border-t border-dashed border-accent/40 z-0" />
            
            {/* Vertical connector for Mobile */}
            <div className="md:hidden absolute top-0 bottom-0 left-[27px] w-[1px] border-l border-dashed border-accent/40 z-0" />
            
            {PROCESS.map((p, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative z-10 flex flex-row md:flex-col items-center md:items-center text-left md:text-center md:w-1/4 gap-5 md:gap-0"
              >
                <div className="w-12 h-12 rounded-full bg-[#111111] border-2 border-accent flex items-center justify-center font-bold text-accent md:mb-6 shadow-[0_0_15px_rgba(59,130,246,0.3)] flex-shrink-0">
                  {p.step}
                </div>
                <div>
                  <h4 className="text-base font-bold mb-1 md:mb-2 text-white">{p.name}</h4>
                  <p className="text-[12px] text-secondary leading-tight md:max-w-[120px] md:mx-auto">{p.detail}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
