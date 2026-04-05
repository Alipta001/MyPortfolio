import React from 'react';
import { motion } from 'framer-motion';

export default function AboutSection() {
  return (
    <section id="about" className="py-24 md:py-40 bg-[#030303] relative overflow-hidden text-white">
      {/* Background Accent Glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[400px] h-[400px] bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-20 items-center">
          
          {/* LEFT: Image with Responsive Grayscale & Frame */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative z-10 rounded-[3rem] overflow-hidden border border-white/10 aspect-[4/5] group bg-[#111]">
              <img 
                src="src/assets/Alipta.jpg" 
                alt="Alipta Ghosh" 
                /* grayscale-0: Color by default (Mobile)
                   lg:grayscale: B&W on Desktop
                   lg:group-hover:grayscale-0: Color on Desktop Hover
                */
                className="w-full h-full object-cover grayscale-0 lg:grayscale lg:group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 lg:opacity-100" />
            </div>
            
            {/* Decorative Offset Frame (Hidden on small mobile for cleaner look) */}
            <div className="hidden md:block absolute -bottom-6 -right-6 w-full h-full border-2 border-cyan-500/20 rounded-[3rem] -z-10" />
            
            {/* Experience Badge */}
            <div className="absolute -bottom-4 left-6 md:left-10 bg-white/5 backdrop-blur-2xl border border-white/10 p-5 md:p-6 rounded-2xl shadow-2xl">
              <span className="block text-2xl md:text-3xl font-black text-cyan-500 leading-none">MERN</span>
              <span className="text-[10px] uppercase tracking-[0.3em] text-gray-400 font-bold">Specialist</span>
            </div>
          </motion.div>

          {/* RIGHT: Content */}
          <div className="lg:col-span-7 space-y-8">
            <header>
              <motion.span 
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="text-cyan-500 font-mono tracking-[0.5em] text-xs uppercase block mb-4"
              >
                / The Identity
              </motion.span>
              <h2 className="text-6xl md:text-8xl font-[1000] italic tracking-tighter uppercase leading-[0.85]">
                I AM <br />
                <span className="text-transparent stroke-text" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.3)' }}>
                   ALIPTA.
                </span>
              </h2>
            </header>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <p className="text-xl md:text-2xl font-light text-gray-300 leading-relaxed italic">
                “Building high-performance digital experiences with the precision of a MERN specialist.”
              </p>
              
              <p className="text-gray-400 font-light leading-relaxed text-sm md:text-base max-w-xl">
                As a developer specializing in <strong>MongoDB, Express, React, and Node.js</strong>, 
                I bridge the gap between complex backend logic and premium frontend aesthetics. 
                My focus is on creating scalable, animated, and user-centric web applications like 
                <strong> Zingo</strong> and <strong>DocReserve</strong>.
              </p>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-8 pt-8 border-t border-white/5">
                <div>
                  <h4 className="text-white font-bold uppercase tracking-widest text-[10px] mb-2 text-cyan-500/80">Stack</h4>
                  <p className="text-gray-400 text-sm font-light uppercase tracking-tighter">React / Next.js / Tailwind</p>
                </div>
                <div>
                  <h4 className="text-white font-bold uppercase tracking-widest text-[10px] mb-2 text-cyan-500/80">Nickname</h4>
                  <p className="text-gray-400 text-sm font-light uppercase tracking-tighter">Chotu</p>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}