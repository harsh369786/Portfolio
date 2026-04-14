import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Cpu, LineChart, Server, ArrowRight, ExternalLink, Mail, Github, Linkedin } from 'lucide-react';

// --- Shared Animation Variants ---
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
};

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-cyan-500/30">

      {/* Animated Background Gradients */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-600/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-cyan-600/20 rounded-full blur-[120px]" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-slate-950/50 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <span className="text-xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-indigo-500">
            TechConsult.
          </span>
          <div className="hidden md:flex space-x-8 text-sm font-medium text-slate-400">
            <a href="#about" className="hover:text-cyan-400 transition-colors">About</a>
            <a href="#services" className="hover:text-cyan-400 transition-colors">Services</a>
            <a href="#work" className="hover:text-cyan-400 transition-colors">Work</a>
            <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      <main className="relative z-10">

        {/* --- 1. HERO SECTION --- */}
        <section className="min-h-screen flex items-center justify-center pt-20 px-6 relative">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="inline-block px-4 py-1.5 mb-6 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 text-sm font-semibold tracking-wide backdrop-blur-sm">
                4 Years Exp • Master's in Data Science
              </div>
              <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 leading-tight text-white">
                Architecting the <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-indigo-500 to-purple-500">
                  Future of Digital Systems
                </span>
              </h1>
              <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
                I build scalable digital products, AI workflows, analytics systems, and modern web platforms. Transforming complex data into elegant, high-performance solutions.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <motion.a
                  href="#work"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 rounded-lg bg-white text-slate-950 font-bold shadow-[0_0_30px_rgba(34,211,238,0.3)] hover:shadow-[0_0_40px_rgba(34,211,238,0.5)] transition-shadow w-full sm:w-auto text-center"
                >
                  View Work
                </motion.a>
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 rounded-lg border border-slate-700 bg-slate-900/50 hover:bg-slate-800 text-white font-bold backdrop-blur-sm transition-colors w-full sm:w-auto text-center"
                >
                  Hire Me
                </motion.a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* --- 2. ABOUT SECTION --- */}
        <section id="about" className="py-32 px-6">
          <motion.div
            className="max-w-5xl mx-auto bg-slate-900/40 border border-slate-800 rounded-3xl p-10 md:p-16 backdrop-blur-lg"
            variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
          >
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white text-left">The Analytical Mind Behind the Code.</h2>
                <p className="text-slate-400 leading-relaxed mb-6 text-left">
                  With a Master's in Data Science and 4 years of hands-on experience in the tech industry, I bridge the gap between engineering, analytics, and business strategy.
                </p>
                <p className="text-slate-400 leading-relaxed text-left">
                  I don't just write code; I deliver complete, end-to-end solutions. Whether it's architecting a robust DevOps pipeline, developing a user-facing e-commerce platform, or integrating AI automation into your daily workflows, I build systems designed to scale and generate ROI.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {['Engineering', 'Analytics', 'Automation', 'DevOps'].map((skill) => (
                  <div key={skill} className="bg-slate-950/50 border border-slate-800 p-6 rounded-xl flex items-center justify-center text-center text-slate-300 font-medium">
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </section>

        {/* --- 3. SERVICES SECTION --- */}
        <section id="services" className="py-32 px-6 bg-slate-950/50">
          <div className="max-w-7xl mx-auto">
            <div className="mb-16 text-left">
              <h2 className="text-4xl font-bold mb-4 text-white">Core Capabilities</h2>
              <p className="text-slate-400">Comprehensive technical solutions driving business growth.</p>
            </div>

            <motion.div
              className="grid md:grid-cols-2 gap-6"
              variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}
            >
              {[
                { title: "End-to-End Web Development", icon: <Code2 size={32} />, desc: "Full-stack scalable architectures. From modern, conversion-optimized frontends to secure, high-performance backends and custom admin panels." },
                { title: "AI Automation", icon: <Cpu size={32} />, desc: "Integrating LLMs and machine learning models into business workflows to automate repetitive tasks and unlock intelligent data processing." },
                { title: "Data Analytics", icon: <LineChart size={32} />, desc: "Transforming raw data into actionable insights. Building real-time dashboards, predictive models, and robust data pipelines." },
                { title: "DevOps & Infrastructure", icon: <Server size={32} />, desc: "Designing resilient cloud architectures, CI/CD pipelines, and automated deployments to ensure zero downtime and infinite scalability." }
              ].map((service, index) => (
                <motion.div
                  key={index} variants={fadeInUp}
                  className="group p-8 rounded-2xl bg-slate-900/30 border border-slate-800 hover:border-cyan-500/50 hover:bg-slate-900/80 transition-all duration-300 relative overflow-hidden text-left"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="text-cyan-400 mb-6 relative z-10">{service.icon}</div>
                  <h3 className="text-2xl font-bold mb-3 relative z-10 text-white">{service.title}</h3>
                  <p className="text-slate-400 relative z-10">{service.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* --- 4. PORTFOLIO SECTION --- */}
        <section id="work" className="py-32 px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold mb-16 text-white text-left">Featured Case Studies</h2>

            <div className="space-y-24">
              {/* Project 1: The Aura Company */}
              <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="order-2 lg:order-1 relative aspect-video bg-slate-900 rounded-2xl border border-slate-800 overflow-hidden flex items-center justify-center group">
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent z-10" />
                  {/* Placeholder for project image */}
                  <span className="text-slate-600 font-mono">Image / Mockup: The Aura Company</span>
                </div>
                <div className="order-1 lg:order-2 text-left">
                  <div className="text-cyan-400 font-mono text-sm mb-4">E-Commerce & Full-Stack Admin</div>
                  <h3 className="text-3xl font-bold mb-4 text-white">The Aura Company</h3>
                  <p className="text-slate-400 mb-6 font-medium">
                    A premium roll-on product website requiring a seamless consumer-facing frontend and a highly capable custom backend management system.
                  </p>
                  <ul className="space-y-3 mb-8">
                    {['Dynamic banner upload functionality', 'Coupon code generation & management', 'Seamless new product addition workflow', 'Real-time sales & analytics dashboard'].map((item, i) => (
                      <li key={i} className="flex items-start text-slate-300">
                        <ArrowRight className="text-cyan-500 mr-2 mt-1 shrink-0" size={16} /> <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <a href="https://www.theauracompany.co.in" target="_blank" rel="noreferrer" className="inline-flex items-center text-white bg-slate-800 hover:bg-slate-700 px-6 py-3 rounded-lg transition-colors">
                    Visit Live Site <ExternalLink size={16} className="ml-2" />
                  </a>
                </div>
              </motion.div>

              {/* Project 2: PS Kitchenware */}
              <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="text-left">
                  <div className="text-indigo-400 font-mono text-sm mb-4">Brand Identity & Web Dev</div>
                  <h3 className="text-3xl font-bold mb-4 text-white">PS Kitchenware</h3>
                  <p className="text-slate-400 mb-6">
                    A modern, polished brand presence for a premier manufacturer of high-quality stainless steel kitchenware. Designed to appeal to high-end hotels, restaurants, and households.
                  </p>
                  <ul className="space-y-3 mb-8">
                    {['Business website design & development', 'Modern product catalog presentation', 'Fully responsive, mobile-first execution', 'Brand-oriented storytelling'].map((item, i) => (
                      <li key={i} className="flex items-start text-slate-300">
                        <ArrowRight className="text-indigo-500 mr-2 mt-1 shrink-0" size={16} /> <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <a href="https://www.pskitchenware.in/" target="_blank" rel="noreferrer" className="inline-flex items-center text-white bg-slate-800 hover:bg-slate-700 px-6 py-3 rounded-lg transition-colors">
                    Visit Live Site <ExternalLink size={16} className="ml-2" />
                  </a>
                </div>
                <div className="relative aspect-video bg-slate-900 rounded-2xl border border-slate-800 overflow-hidden flex items-center justify-center">
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent z-10" />
                  {/* Placeholder for project image */}
                  <span className="text-slate-600 font-mono">Image / Mockup: PS Kitchenware</span>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* --- 5. CONTACT / CTA SECTION --- */}
        <section id="contact" className="py-32 px-6 relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-900/20 rounded-full blur-[150px] pointer-events-none" />

          <motion.div
            variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center relative z-10 bg-slate-900/50 border border-slate-700 backdrop-blur-xl rounded-3xl p-12 md:p-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Ready to scale your systems?</h2>
            <p className="text-lg text-slate-400 mb-10 max-w-2xl mx-auto">
              Available for freelance opportunities. Whether you need a high-end website build, a custom analytics dashboard, or AI integration consulting, let's build something exceptional.
            </p>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-12">
              <a href="mailto:hello@example.com" className="flex items-center text-xl font-medium hover:text-cyan-400 transition-colors text-white">
                <Mail className="mr-3" /> hello@example.com
              </a>
            </div>

            <div className="flex justify-center gap-6">
              <a href="#" className="p-4 bg-slate-800 rounded-full hover:bg-slate-700 hover:text-cyan-400 transition-all shadow-lg hover:shadow-cyan-500/20">
                <Linkedin size={24} />
              </a>
              <a href="#" className="p-4 bg-slate-800 rounded-full hover:bg-slate-700 hover:text-cyan-400 transition-all shadow-lg hover:shadow-cyan-500/20">
                <Github size={24} />
              </a>
            </div>
          </motion.div>
        </section>

      </main>

      {/* Footer */}
      <footer className="py-8 text-center text-slate-500 border-t border-white/5 text-sm">
        <p>© {new Date().getFullYear()} TechConsult. All rights reserved.</p>
      </footer>
    </div>
  );
}
