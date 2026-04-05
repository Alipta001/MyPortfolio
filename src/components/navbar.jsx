import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = ['Home', 'About', 'Skills', 'Projects'];

  return (
    <nav className="fixed w-full top-0 md:top-6 z-[100] flex justify-center p-4">
      <motion.div 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`flex items-center justify-between w-full max-w-4xl px-5 py-3 rounded-2xl md:rounded-full border border-white/10 transition-all duration-500 ${
          scrolled || isOpen ? "bg-black/90 backdrop-blur-2xl shadow-2xl" : "bg-white/5 backdrop-blur-md"
        }`}
      >
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 bg-gradient-to-tr from-cyan-500 to-blue-600 rounded-full flex items-center justify-center font-black text-black text-[10px] shadow-lg shadow-cyan-500/20">
            AG
          </div>
          <span className="text-white font-bold tracking-tighter text-sm hidden xs:block">ARITRA</span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-400 hover:text-cyan-400 transition-colors">
              {item}
            </a>
          ))}
        </div>

        {/* Action Button */}
        <div className="flex items-center gap-3">
          <a href="#contact" className="hidden sm:block bg-white text-black px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-wider hover:bg-cyan-500 hover:text-white transition-all">
            Contact
          </a>
          
          {/* Hamburger Menu */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden flex flex-col gap-1.5 p-2">
            <motion.span animate={isOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }} className="h-0.5 w-6 bg-white rounded-full" />
            <motion.span animate={isOpen ? { opacity: 0 } : { opacity: 1 }} className="h-0.5 w-6 bg-white rounded-full" />
            <motion.span animate={isOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }} className="h-0.5 w-6 bg-white rounded-full" />
          </button>
        </div>
      </motion.div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="absolute top-20 left-4 right-4 bg-black/95 backdrop-blur-3xl border border-white/10 rounded-[2rem] p-10 flex flex-col items-center gap-8 md:hidden shadow-3xl"
          >
            {navLinks.map((item, i) => (
              <motion.a 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                key={item} 
                href={`#${item.toLowerCase()}`}
                onClick={() => setIsOpen(false)}
                className="text-2xl font-black italic tracking-tighter uppercase text-white hover:text-cyan-500"
              >
                {item}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}