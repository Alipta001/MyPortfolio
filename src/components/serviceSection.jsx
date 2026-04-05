import React from 'react';
import { motion } from 'framer-motion';
import { Layout, Code, Smartphone, Zap } from 'lucide-react';

const services = [
  {
    title: "Full-Stack Development",
    icon: <Code className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800",
    desc: "Robust, scalable web systems built with the MERN stack and Next.js for high-performance enterprise needs.",
    tags: ["MERN", "Next.js", "API"],
    color: "from-blue-600/20 to-cyan-400/20",
  },
  {
    title: "UI/UX Design",
    icon: <Layout className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?q=80&w=800",
    desc: "Premium, dark-themed interfaces with glassmorphism, fluid animations, and high-end user experiences.",
    tags: ["Figma", "Tailwind", "Framer"],
    color: "from-purple-600/20 to-pink-500/20",
  },
  {
    title: "Mobile Solutions",
    icon: <Smartphone className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=800",
    desc: "Cross-platform mobile experiences that feel native, responsive, and buttery smooth on every screen.",
    tags: ["PWA", "Mobile-First", "React"],
    color: "from-orange-600/20 to-yellow-500/20",
  },
  {
    title: "Performance Optimization",
    icon: <Zap className="w-6 h-6" />,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800",
    desc: "Advanced speed optimization, SEO mastery, and lightning-fast state synchronization.",
    tags: ["SEO", "Redux", "Speed"],
    color: "from-green-600/20 to-emerald-500/20",
  }
];

export default function ServiceSection() {
  return (
    <section id="services" className="py-24 md:py-40 bg-[#030303] text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <header className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <span className="text-cyan-500 font-mono tracking-[0.4em] text-[10px] uppercase border border-cyan-500/20 px-4 py-2 rounded-full">
              Expertise
            </span>
            <h2 className="text-6xl md:text-8xl font-[1000] italic tracking-tighter uppercase leading-[0.8]">
              SERVICES <br />
              <span className="text-transparent stroke-text" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.2)' }}>
                OFFERED.
              </span>
            </h2>
          </motion.div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, i) => (
            <ServiceCard key={i} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.8 }}
      className="relative group h-[400px] md:h-[450px] rounded-[3rem] overflow-hidden border border-white/5 bg-[#0a0a0a]"
    >
      {/* 1. BACKGROUND IMAGE LAYER */}
      <div className="absolute inset-0 z-0">
        <img 
          src={service.image} 
          alt={service.title}
          className="w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-60 group-hover:scale-110 transition-all duration-700"
        />
        {/* Dark Overlays for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent" />
        <div className={`absolute inset-0 bg-gradient-to-br ${service.color} mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
      </div>

      {/* 2. CONTENT LAYER */}
      <div className="relative z-10 h-full p-8 md:p-12 flex flex-col justify-between">
        
        {/* Top Section: Icon and Index */}
        <div className="flex justify-between items-start">
          <div className="w-14 h-14 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 flex items-center justify-center text-white group-hover:border-cyan-500/50 group-hover:text-cyan-400 transition-all duration-500">
            {service.icon}
          </div>
          <span className="text-5xl font-black italic opacity-10 group-hover:opacity-30 transition-opacity duration-500">
            0{index + 1}
          </span>
        </div>

        {/* Bottom Section: Text */}
        <div className="space-y-4">
          <h3 className="text-3xl md:text-4xl font-black italic tracking-tighter uppercase group-hover:text-cyan-400 transition-colors duration-500">
            {service.title}
          </h3>
          
          <p className="text-gray-400 text-sm md:text-base font-light leading-relaxed max-w-sm group-hover:text-white transition-colors duration-500">
            {service.desc}
          </p>

          <div className="flex flex-wrap gap-2 pt-4">
            {service.tags.map((tag) => (
              <span 
                key={tag} 
                className="px-4 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/5 text-[9px] font-bold uppercase tracking-widest text-gray-400 group-hover:border-cyan-500/30 group-hover:text-cyan-400 transition-all"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative Glow on Hover */}
      <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-cyan-500/20 blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
    </motion.div>
  );
}