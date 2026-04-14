"use client";

import { motion } from "framer-motion";
import { Code, ShoppingBag, Server, BarChart2 } from "lucide-react";

const SERVICES = [
  {
    icon: <Code className="w-8 h-8" />,
    title: "AI-Powered Web Apps",
    description: "Full-stack web applications with AI features baked in — from AI-generated content pipelines to intelligent automation workflows. Built with Next.js, Supabase, and Google Gemini."
  },
  {
    icon: <ShoppingBag className="w-8 h-8" />,
    title: "E-Commerce Platforms",
    description: "High-conversion D2C and B2C storefronts with custom payment flows, admin dashboards, real-time inventory, and transactional email systems. Mobile-first, fast, and scalable."
  },
  {
    icon: <Server className="w-8 h-8" />,
    title: "DevOps & Infrastructure",
    description: "End-to-end DevOps setup from scratch — Docker, Kubernetes, server migrations, and cloud infrastructure. Including full email migrations with zero data loss."
  },
  {
    icon: <BarChart2 className="w-8 h-8" />,
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

export default function Services() {
  return (
    <section id="services" className="relative z-20 bg-background px-6 py-32 md:px-24 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <div className="mb-20 text-center md:text-left">
          <p className="text-xs uppercase tracking-[0.4em] text-accent font-medium mb-4">What I Do</p>
          <h2 className="text-4xl md:text-6xl font-heading font-bold mb-4 tracking-tight">Services Built for Founders & Businesses</h2>
          <p className="text-secondary text-lg max-w-2xl">From idea to deployed product — I handle the full stack.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
          {SERVICES.map((service, index) => (
            <motion.div
              key={index}
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-[#1A1A1A] p-10 rounded-3xl border-[0.5px] border-accent/30 transition-all duration-300 hover:border-accent hover:shadow-[0_0_30px_rgba(41,121,255,0.15)]"
            >
              <div className="text-accent mb-6 transition-transform group-hover:scale-110 duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-4 group-hover:text-accent transition-colors">
                {service.title}
              </h3>
              <p className="text-secondary text-sm md:text-base leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        <div>
          <h3 className="text-2xl font-heading font-bold mb-16 text-center">How I Work</h3>
          <div className="relative flex flex-col md:flex-row justify-between gap-12 md:gap-4 px-4">
            {/* Dotted Line connector for Desktop */}
            <div className="hidden md:block absolute top-[22px] left-0 w-full h-[1px] border-t border-dashed border-accent/40 z-0" />
            
            {PROCESS.map((p, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative z-10 flex flex-col items-center text-center md:w-1/4"
              >
                <div className="w-12 h-12 rounded-full bg-[#1A1A1A] border-2 border-accent flex items-center justify-center font-bold text-accent mb-6 shadow-[0_0_15px_rgba(41,121,255,0.3)]">
                  {p.step}
                </div>
                <h4 className="text-base font-bold mb-2">{p.name}</h4>
                <p className="text-[12px] text-secondary leading-tight max-w-[120px]">{p.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
