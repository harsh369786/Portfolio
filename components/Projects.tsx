"use client";

import { motion } from "framer-motion";
import { ExternalLink, ChevronRight, Quote as QuoteIcon } from "lucide-react";

interface TestimonialProps {
  quote: string;
  attribution: string;
}

function Testimonial({ quote, attribution }: TestimonialProps) {
  return (
    <motion.div
      initial={{ y: 40, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="mt-8 bg-[#1A1A1A] border-l-4 border-accent p-8 rounded-r-2xl relative overflow-hidden"
    >
      <QuoteIcon className="absolute top-4 left-4 w-12 h-12 text-accent opacity-20" />
      <p className="text-base text-[#D0D0D0] italic font-serif leading-relaxed relative z-10">
        "{quote}"
      </p>
      <p className="mt-4 text-sm text-accent font-medium tracking-wide">
        — {attribution}
      </p>
    </motion.div>
  );
}

const PROJECTS = [
  {
    number: "01",
    year: "2024",
    tags: ["E-Commerce", "AI Integration", "Full-Stack"],
    title: "PS Kitchenware",
    subtitle: "AI-Enhanced E-Commerce Ecosystem",
    description: "A high-performance, full-stack e-commerce platform for a premium kitchenware brand. Built with Next.js 15 and Supabase, integrated with Google Gemini AI to automate product content creation for administrators. Delivers a seamless mobile-first shopping experience with real-time inventory and secure server-side transaction handling.",
    highlights: [
      "Google Gemini AI auto-generates SEO-optimized product descriptions",
      "Role-based admin dashboard with real-time inventory and order tracking",
      "Server-side email system with dynamic HTML order confirmations"
    ],
    tech: ["Next.js 15", "TypeScript", "Supabase", "Google Gemini AI", "Genkit", "Tailwind CSS", "Radix UI", "Nodemailer"],
    link: "https://pskitchenware.in",
    testimonial: {
      quote: "We needed a digital presence that matched the quality of our products. Harsh delivered exactly that — a real-time catalog system that's helped us win contracts with hotel groups and premium retailers.",
      attribution: "Smit Shah, Business Owner, PS Kitchenware"
    }
  },
  {
    number: "02",
    year: "2024",
    tags: ["D2C", "E-Commerce", "Payments", "Automation"],
    title: "Alum Fresh by The Aura Company",
    subtitle: "Premium D2C E-Commerce Experience",
    description: "A high-performance D2C e-commerce platform for The Aura Company, transforming a traditional mineral remedy (Alum) into a premium modern skincare brand. Built for conversion, luxury aesthetics, and fully automated operational workflows.",
    highlights: [
      "Custom Order ID Architecture (YYMMDDSRNO) with daily auto-reset",
      "Razorpay integration with Zero-Total Bypass for promotional campaigns",
      "Real-time Google Sheets sync for instant fulfillment visibility"
    ],
    tech: ["Next.js 15", "React 19", "Supabase", "Razorpay", "Google Sheets API", "Tailwind CSS", "Framer Motion", "Nodemailer"],
    link: "https://theauracompany.co.in",
    testimonial: {
      quote: "Harsh took us from a basic concept to a launch-ready premium brand — fast. The automated order tracking and Google Sheets integration made our daily operations effortless from day one.",
      attribution: "Darshil Gada, Business Owner, The Aura Company"
    }
  }
];

export default function Projects() {
  return (
    <section id="work" className="relative z-20 bg-background px-6 py-32 md:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <p className="text-xs uppercase tracking-[0.4em] text-accent font-medium mb-4">Selected Work (02)</p>
          <h2 className="text-4xl md:text-6xl font-heading font-bold tracking-tight">Things I've Built</h2>
        </div>

        <div className="space-y-32">
          {PROJECTS.map((project, index) => (
            <div key={index} className="space-y-8">
              <motion.div
                initial={{ y: 40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="group relative flex flex-col lg:flex-row gap-12 bg-[#161616] p-8 md:p-12 rounded-3xl border border-white/5 transition-all duration-500 hover:bg-[#1E1E1E] hover:-translate-y-1 overflow-hidden"
              >
                {/* Accent Border Animation */}
                <div className="absolute left-0 top-0 w-[4px] h-0 bg-accent transition-all duration-500 group-hover:h-full" />

                {/* Left: Metadata */}
                <div className="lg:w-1/4 space-y-4 md:space-y-6">
                  <span className="text-6xl md:text-8xl font-heading font-black text-accent/10 group-hover:text-accent/20 transition-colors">
                    {project.number}
                  </span>
                  <div className="space-y-2">
                    <p className="text-accent font-medium tracking-widest text-sm uppercase">{project.year}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map(tag => (
                        <span key={tag} className="text-[10px] uppercase tracking-wider text-secondary">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right: Content */}
                <div className="lg:w-3/4 space-y-6 md:space-y-8">
                  <div>
                    <h3 className="text-2xl md:text-5xl font-heading font-bold mb-2 group-hover:text-accent transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-lg md:text-xl text-accent font-medium">{project.subtitle}</p>
                  </div>

                  <p className="text-secondary text-sm md:text-lg leading-relaxed max-w-3xl">
                    {project.description}
                  </p>

                  <ul className="space-y-3">
                    {project.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start gap-3 text-secondary text-base">
                        <ChevronRight className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                        {highlight}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map(t => (
                      <span key={t} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] text-secondary font-medium uppercase tracking-wider">
                        {t}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-8 py-3 rounded-full border-2 border-accent text-accent font-bold uppercase tracking-widest text-xs transition-all hover:bg-accent hover:text-white group/btn interactive"
                  >
                    View Live Site
                    <ExternalLink className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                  </a>
                </div>
              </motion.div>

              <Testimonial 
                quote={project.testimonial.quote} 
                attribution={project.testimonial.attribution} 
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
