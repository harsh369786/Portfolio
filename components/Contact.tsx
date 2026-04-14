"use client";

import { motion } from "framer-motion";
import { Mail, MessageCircle, Linkedin, MapPin, Send } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="relative z-20 bg-[#0A0A0A] px-6 py-40 md:px-24 overflow-hidden">
      {/* Dynamic Background Glows */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#3B82F6]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-32">
          {/* Left Column: Vision & Contact */}
          <div className="flex flex-col justify-between">
            <div className="space-y-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-6xl md:text-9xl font-heading font-black mb-8 tracking-tighter leading-[0.9]">
                  Let's <br /><span className="text-accent underline decoration-accent/20 underline-offset-8">Scale</span> <br />Together.
                </h2>
                <p className="text-secondary text-xl md:text-2xl max-w-lg leading-relaxed mt-10">
                  I specialize in turning high-growth ideas into battle-tested technological realities. I am currently accepting new projects.
                </p>
              </motion.div>

              <div className="space-y-10">
                <a
                  href="mailto:shahharsh143.hs@gmail.com"
                  className="group flex items-center gap-8 text-2xl md:text-3xl font-bold transition-all hover:text-accent interactive w-fit"
                >
                  <div className="w-16 h-16 rounded-2xl bg-[#111111] border border-white/5 flex items-center justify-center text-secondary group-hover:text-accent group-hover:border-accent/30 transition-all duration-500 group-hover:-rotate-6">
                    <Mail className="w-8 h-8" />
                  </div>
                  shahharsh143.hs@gmail.com
                </a>

                <div className="flex flex-col gap-6 pl-2">
                  <div className="flex items-center gap-4 text-secondary font-medium tracking-wide">
                    <MapPin className="w-5 h-5 text-accent" />
                    Mumbai, India · Available Worldwide
                  </div>
                  
                  <div className="flex items-center gap-4 py-3 px-6 rounded-2xl bg-accent/5 border border-accent/20 w-fit">
                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                    </span>
                    <p className="text-xs font-bold uppercase tracking-widest text-white/80">Available for Freelance Projects</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-20 flex gap-10">
              <a href="https://linkedin.com/in/harsh-shah-595b52220" target="_blank" className="text-secondary hover:text-accent transition-all duration-300 transform hover:scale-110 interactive"><Linkedin className="w-8 h-8" /></a>
              <a href="https://wa.me/919821650772" target="_blank" className="text-secondary hover:text-accent transition-all duration-300 transform hover:scale-110 interactive"><MessageCircle className="w-8 h-8" /></a>
            </div>
          </div>

          {/* Right Column: Premium Form */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-[#111111] p-8 md:p-16 rounded-[3rem] border border-white/5 shadow-2xl overflow-hidden relative"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-3xl" />
            
            <form className="space-y-12 relative z-10" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="relative group">
                  <input
                    type="text"
                    required
                    className="w-full bg-transparent border-b border-white/10 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-accent transition-all text-lg"
                    placeholder="Full Name"
                  />
                  <label className="absolute left-0 -top-6 text-[10px] uppercase tracking-[0.3em] text-accent font-bold opacity-0 group-focus-within:opacity-100 transition-all duration-300">Name</label>
                </div>
                <div className="relative group">
                  <input
                    type="email"
                    required
                    className="w-full bg-transparent border-b border-white/10 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-accent transition-all text-lg"
                    placeholder="Email Address"
                  />
                  <label className="absolute left-0 -top-6 text-[10px] uppercase tracking-[0.3em] text-accent font-bold opacity-0 group-focus-within:opacity-100 transition-all duration-300">Email</label>
                </div>
              </div>

              <div className="relative group">
                <input
                  type="text"
                  className="w-full bg-transparent border-b border-white/10 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-accent transition-all text-lg"
                  placeholder="Subject / Project Type"
                />
                <label className="absolute left-0 -top-6 text-[10px] uppercase tracking-[0.3em] text-accent font-bold opacity-0 group-focus-within:opacity-100 transition-all duration-300">Subject</label>
              </div>

              <div className="relative group">
                <textarea
                  rows={4}
                  required
                  className="w-full bg-transparent border-b border-white/10 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-accent transition-all text-lg resize-none"
                  placeholder="Tell me about your vision..."
                />
                <label className="absolute left-0 -top-6 text-[10px] uppercase tracking-[0.3em] text-accent font-bold opacity-0 group-focus-within:opacity-100 transition-all duration-300">Message</label>
              </div>

              <button
                type="submit"
                className="group/send relative w-full h-16 bg-accent rounded-2xl overflow-hidden interactive"
              >
                <div className="absolute inset-0 bg-white/10 translate-y-full group-hover/send:translate-y-0 transition-transform duration-500" />
                <span className="relative z-10 flex items-center justify-center gap-3 text-white font-black uppercase tracking-[0.4em] text-xs">
                  Dispatch Message
                </span>
              </button>
            </form>
          </motion.div>
        </div>

        {/* Minimal Footer */}
        <footer className="mt-60 pt-20 border-t border-white/5 flex flex-col md:flex-row justify-between items-end gap-12 pb-10">
          <div className="space-y-6">
            <h4 className="text-3xl font-heading font-black tracking-tighter">HARSH SHAH.</h4>
            <div className="h-0.5 w-12 bg-accent/30" />
            <p className="text-secondary text-sm max-w-xs leading-relaxed">
              Merging artistic vision with engineering precision to define the next web.
            </p>
          </div>
          
          <div className="flex flex-col items-end gap-4">
            <p className="text-[10px] uppercase tracking-widest text-secondary/50">© 2026 · All Rights Reserved</p>
            <div className="flex items-center gap-2 text-xs font-bold text-accent">
              <div className="w-10 h-[1px] bg-accent/30" />
              BUILT WITH PRECISION
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
}
