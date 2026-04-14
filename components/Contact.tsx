"use client";

import { motion } from "framer-motion";
import { Mail, MessageCircle, Linkedin, MapPin, Send } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="relative z-20 bg-[#161616] px-6 py-32 md:px-24 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="mb-20 text-center md:text-left">
          <h2 className="text-5xl md:text-7xl font-heading font-bold mb-6 tracking-tighter">Let's Build Something</h2>
          <p className="text-secondary text-lg md:text-xl max-w-2xl">
            Have a project in mind? I take on 2–3 clients per quarter. Let's talk.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          {/* Left Column: Direct Contact */}
          <div className="space-y-12">
            <div className="space-y-8">
              <a
                href="mailto:shahharsh143.hs@gmail.com"
                className="group flex items-center gap-6 text-xl md:text-2xl font-medium transition-colors hover:text-accent interactive"
              >
                <div className="w-12 h-12 rounded-full border border-accent/20 flex items-center justify-center text-accent group-hover:bg-accent/10 group-hover:scale-110 transition-all">
                  <Mail className="w-6 h-6" />
                </div>
                shahharsh143.hs@gmail.com
              </a>

              <a
                href="https://wa.me/919821650772"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-6 text-xl md:text-2xl font-medium transition-colors hover:text-accent interactive"
              >
                <div className="w-12 h-12 rounded-full border border-accent/20 flex items-center justify-center text-accent group-hover:bg-accent/10 group-hover:scale-110 transition-all">
                  <MessageCircle className="w-6 h-6" />
                </div>
                +91 9821650772
              </a>

              <a
                href="https://linkedin.com/in/harsh-shah-595b52220"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-6 text-xl md:text-2xl font-medium transition-colors hover:text-accent interactive"
              >
                <div className="w-12 h-12 rounded-full border border-accent/20 flex items-center justify-center text-accent group-hover:bg-accent/10 group-hover:scale-110 transition-all">
                  <Linkedin className="w-6 h-6" />
                </div>
                LinkedIn Profile
              </a>

              <div className="flex items-center gap-6 text-xl md:text-2xl font-medium text-secondary">
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center">
                  <MapPin className="w-6 h-6" />
                </div>
                Mumbai, India
              </div>
            </div>

            <div className="flex items-center gap-3 py-4 px-6 rounded-full bg-accent/5 border border-accent/20 w-fit">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              <p className="text-sm font-medium tracking-wide">Currently available for freelance projects</p>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <form className="space-y-10 group/form">
            <div className="relative group">
              <input
                type="text"
                placeholder="Name"
                className="w-full bg-[#1E1E1E] px-6 py-5 rounded-xl text-foreground placeholder:text-white/30 focus:outline-none focus:ring-0 transition-all"
              />
              <div className="absolute bottom-0 left-0 w-full h-[2px] bg-accent scale-x-0 group-focus-within:scale-x-100 transition-transform duration-500 origin-left" />
            </div>

            <div className="relative group">
              <input
                type="email"
                placeholder="Email"
                className="w-full bg-[#1E1E1E] px-6 py-5 rounded-xl text-foreground placeholder:text-white/30 focus:outline-none focus:ring-0 transition-all"
              />
              <div className="absolute bottom-0 left-0 w-full h-[2px] bg-accent scale-x-0 group-focus-within:scale-x-100 transition-transform duration-500 origin-left" />
            </div>

            <div className="relative group">
              <textarea
                rows={4}
                placeholder="What are you building?"
                className="w-full bg-[#1E1E1E] px-6 py-5 rounded-xl text-foreground placeholder:text-white/30 focus:outline-none focus:ring-0 transition-all resize-none"
              />
              <div className="absolute bottom-0 left-0 w-full h-[2px] bg-accent scale-x-0 group-focus-within:scale-x-100 transition-transform duration-500 origin-left" />
            </div>

            <div className="relative group">
              <select className="w-full bg-[#1E1E1E] px-6 py-5 rounded-xl text-foreground placeholder:text-white/30 focus:outline-none focus:ring-0 appearance-none transition-all">
                <option value="" disabled selected>Budget Range</option>
                <option value="under-25k">Under ₹25k</option>
                <option value="25k-75k">₹25k–₹75k</option>
                <option value="75k-1.5L">₹75k–₹1.5L</option>
                <option value="1.5L-plus">₹1.5L+</option>
                <option value="intl">International ($500+)</option>
              </select>
              <div className="absolute bottom-0 left-0 w-full h-[2px] bg-accent scale-x-0 group-focus-within:scale-x-100 transition-transform duration-500 origin-left" />
            </div>

            <button
              type="submit"
              className="w-full bg-accent text-white font-bold py-5 rounded-xl uppercase tracking-[0.2em] text-sm hover:shadow-[0_0_30px_rgba(41,121,255,0.4)] transition-all flex items-center justify-center gap-3 group/btn interactive"
            >
              Send Message
              <Send className="w-5 h-5 transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
            </button>
          </form>
        </div>

        <footer className="mt-40 pt-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <p className="text-xl font-heading font-black tracking-tighter mb-2">Harsh Shah © 2026</p>
            <p className="text-secondary text-xs">Designed & built by me. Next.js · Framer Motion · Supabase · Vercel</p>
          </div>
          
          <div className="flex gap-8">
            <a href="https://linkedin.com/in/harsh-shah-595b52220" target="_blank" className="text-secondary hover:text-accent transition-colors interactive"><Linkedin className="w-5 h-5" /></a>
            <a href="mailto:shahharsh143.hs@gmail.com" className="text-secondary hover:text-accent transition-colors interactive"><Mail className="w-5 h-5" /></a>
            <a href="https://wa.me/919821650772" className="text-secondary hover:text-accent transition-colors interactive"><MessageCircle className="w-5 h-5" /></a>
          </div>
        </footer>
      </div>
    </section>
  );
}
