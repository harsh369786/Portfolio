"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = ["Work", "About", "Services", "Contact"];

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-6 py-6 md:py-8 md:px-24"
      >
        {/* Background Glass Plate */}
        <div className="absolute inset-0 bg-[#0A0A0A]/40 backdrop-blur-xl border-b border-white/5 pointer-events-none" />

        <a 
          href="#home" 
          onClick={() => setIsOpen(false)}
          className="relative z-10 text-2xl font-heading font-black tracking-tighter text-accent cursor-pointer interactive"
        >
          H.S
        </a>
        
        {/* Desktop Menu */}
        <div className="relative z-10 hidden md:flex items-center gap-12 text-[10px] font-bold uppercase tracking-[0.4em] text-secondary">
          {menuItems.map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              className="group relative hover:text-accent transition-colors duration-500 interactive"
            >
              {item}
              <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-accent transition-all duration-500 group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="relative z-10 p-2 text-accent md:hidden interactive"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[90] bg-[#0A0A0A]/95 backdrop-blur-2xl flex items-center justify-center md:hidden"
          >
            <div className="flex flex-col items-center gap-8">
              {menuItems.map((item, i) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  onClick={() => setIsOpen(false)}
                  className="text-5xl font-heading font-black tracking-tighter text-white hover:text-accent transition-colors interactive"
                >
                  {item}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
