"use client";

import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-[5000] flex items-center justify-between px-6 py-6 md:px-12 backdrop-blur-sm"
    >
      <a href="#home" className="text-2xl font-heading font-black tracking-tighter text-accent cursor-pointer interactive">H.S</a>
      <div className="hidden md:flex gap-12 text-[10px] font-bold uppercase tracking-[0.3em] text-secondary">
        <a href="#work" className="hover:text-accent transition-colors interactive">Work</a>
        <a href="#about" className="hover:text-accent transition-colors interactive">About</a>
        <a href="#services" className="hover:text-accent transition-colors interactive">Services</a>
        <a href="#contact" className="hover:text-accent transition-colors interactive">Contact</a>
      </div>
      <button className="rounded-full border border-accent/30 bg-accent/5 px-8 py-2 text-[10px] font-bold uppercase tracking-[0.2em] backdrop-blur-md transition-all hover:bg-accent/10 hover:border-accent/50 text-accent interactive">
        Resume
      </button>
    </motion.nav>
  );
}
