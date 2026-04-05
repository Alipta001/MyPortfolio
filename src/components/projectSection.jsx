// import React, { useRef } from 'react';
// import { motion } from 'framer-motion';
// const projects = [
//   {
//     title: "Zingo",
//     category: "Food Logistics",
//     desc: "Next-gen delivery engine with real-time state synchronization.",
//     tech: ["Next.js", "Redux", "Socket.io"],
//     image: "https://images.unsplash.com/photo-1512132411229-c30391241dd8?q=80&w=600",
//     gradient: "from-[#FF4E50] to-[#F9D423]",
//     size: "lg:col-span-8",
//   },
//   {
//     title: "DocReserve",
//     category: "Healthcare SaaS",
//     desc: "Seamless doctor booking ecosystem powered by TanStack Query.",
//     tech: ["React", "Node.js", "MongoDB"],
//     image: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?q=80&w=600",
//     gradient: "from-[#11998e] to-[#38ef7d]",
//     size: "lg:col-span-4",
//   },
//   {
//     title: "InventoryHub",
//     category: "Enterprise ERP",
//     desc: "Smart product management with automated analytics dashboards.",
//     tech: ["MERN", "Firebase", "OAuth"],
//     image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=600",
//     gradient: "from-[#8E2DE2] to-[#4A00E0]",
//     size: "lg:col-span-4",
//   },
//   {
//     title: "RupaKar",
//     category: "Cultural E-com",
//     desc: "An immersive e-commerce platform for artisanal crafts.",
//     tech: ["React", "Firebase", "Stripe"],
//     image: "https://images.unsplash.com/photo-1610902263303-a26227916eb0?q=80&w=600",
//     gradient: "from-[#00c6ff] to-[#0072ff]",
//     size: "lg:col-span-8",
//   },
// ];

// export default function Projects() {
//   return (
//     <section id="projects" className="py-24 bg-[#030303] text-white overflow-hidden">
//       <div className="max-w-7xl mx-auto px-6">
//         <header className="mb-16">
//           <motion.p 
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             className="text-cyan-500 font-mono tracking-[0.5em] text-xs uppercase mb-4"
//           >
//             / Case Studies
//           </motion.p>
//           <h2 className="text-5xl md:text-8xl font-[1000] italic tracking-tighter uppercase italic">
//             Featured <span className="stroke-text opacity-50">Works.</span>
//           </h2>
//         </header>

//         {/* Using a Flexible Flex/Grid layout that handles small/large cards better */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
//           {projects.map((project, i) => (
//             <ModernProjectCard key={i} project={project} index={i} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// function ModernProjectCard({ project, index }) {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 30 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}
//       transition={{ delay: index * 0.1 }}
//       className={`relative h-[550px] rounded-[2rem] overflow-hidden group bg-[#0a0a0a] border border-white/5 ${project.size}`}
//     >
//       {/* 1. IMAGE ZONE (Top 65%) */}
//       <div className="absolute top-0 left-0 w-full h-[65%] overflow-hidden">
//         <img 
//           src={project.image} 
//           alt={project.title} 
//           className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
//         />
//         <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent" />
//       </div>

//       {/* 2. CONTENT TRAY (Bottom 35% + Expand on hover) */}
//       <div className="absolute bottom-0 left-0 w-full p-8 transition-all duration-500 ease-[0.23, 1, 0.32, 1] translate-y-4 group-hover:translate-y-0 flex flex-col justify-end min-h-[40%] bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/95 to-transparent">
        
//         {/* Category & Badge */}
//         <div className="flex items-center gap-3 mb-4">
//           <span className={`h-[1px] w-8 bg-gradient-to-r ${project.gradient}`} />
//           <span className="text-[10px] font-bold tracking-[0.2em] text-cyan-500 uppercase">
//             {project.category}
//           </span>
//         </div>

//         {/* Title: Size adjusted for small vs large cards */}
//         <h3 className={`font-black italic tracking-tighter uppercase mb-2 leading-none transition-all
//           ${project.size.includes('col-span-4') ? 'text-4xl' : 'text-5xl md:text-7xl'}`}>
//           {project.title}
//         </h3>

//         {/* Description: Visible on mobile, height-reveal on desktop */}
//         <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-500 lg:opacity-0 lg:group-hover:opacity-100">
//           <div className="overflow-hidden">
//             <p className="text-gray-400 text-sm md:text-base font-light mb-6 mt-4 max-w-sm leading-relaxed">
//               {project.desc}
//             </p>
//           </div>
//         </div>

//         {/* Tech Stack: Always visible but cleaned up */}
//         <div className="flex flex-wrap gap-2 mt-4">
//           {project.tech.map((t) => (
//             <span key={t} className="px-3 py-1 rounded-md bg-white/5 border border-white/10 text-[9px] font-mono text-gray-400 uppercase">
//               {t}
//             </span>
//           ))}
//         </div>
//       </div>

//       {/* 3. FLOATING LINK BUTTON */}
//       <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-4 group-hover:translate-x-0">
//         <div className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center hover:bg-cyan-500 hover:text-white transition-colors cursor-pointer">
//           <svg width="18" height="18" viewBox="0 0 15 15" fill="none"><path d="M3.64645 11.3536L10.2929 4.70711V9C10.2929 9.27614 10.5167 9.5 10.7929 9.5C11.069 9.5 11.2929 9.27614 11.2929 9V3.5C11.2929 3.22386 11.069 3 10.7929 3H5.29289C5.01675 3 4.79289 3.22386 4.79289 3.5C4.79289 3.77614 5.01675 4 5.29289 4H9.58579L2.93934 10.6464C2.74408 10.8417 2.74408 11.1583 2.93934 11.3536C3.1346 11.5489 3.45118 11.5489 3.64645 11.3536Z" fill="currentColor"></path></svg>
//         </div>
//       </div>
//     </motion.div>
//   );
// }


import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

const projects = [
  {
    title: "Zingo",
    category: "Food Logistics",
    desc: "Next-gen delivery engine with real-time state synchronization.",
    tech: ["Next.js", "Redux", "Socket.io"],
    image: "https://images.unsplash.com/photo-1512132411229-c30391241dd8?q=80&w=600",
    gradient: "from-[#FF4E50] to-[#F9D423]",
    size: "lg:col-span-8",
  },
  {
    title: "DocReserve",
    category: "Healthcare SaaS",
    desc: "Seamless doctor booking ecosystem powered by TanStack Query.",
    tech: ["React", "Node.js", "MongoDB"],
    image: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?q=80&w=600",
    gradient: "from-[#11998e] to-[#38ef7d]",
    size: "lg:col-span-4",
  },
  {
    title: "InventoryHub",
    category: "Enterprise ERP",
    desc: "Smart product management with automated analytics dashboards.",
    tech: ["MERN", "Firebase", "OAuth"],
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=600",
    gradient: "from-[#8E2DE2] to-[#4A00E0]",
    size: "lg:col-span-4",
  },
  {
    title: "RupaKar",
    category: "Cultural E-com",
    desc: "An immersive e-commerce platform for artisanal crafts.",
    tech: ["React", "Firebase", "Stripe"],
    image: "https://images.unsplash.com/photo-1610902263303-a26227916eb0?q=80&w=600",
    gradient: "from-[#00c6ff] to-[#0072ff]",
    size: "lg:col-span-8",
  },
];
export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-[#030303] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <header className="mb-16">
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-cyan-500 font-mono tracking-[0.5em] text-xs uppercase mb-4"
          >
            / Case Studies
          </motion.p>
          <h2 className="text-5xl md:text-8xl font-[1000] italic tracking-tighter uppercase leading-none">
            Featured <span className="text-transparent stroke-text" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.3)' }}>Works.</span>
          </h2>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
          {projects.map((project, i) => (
            <ModernProjectCard key={i} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ModernProjectCard({ project, index }) {
  const cardRef = useRef(null);
  
  // Motion values for the tilt
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth springs for that "premium" weight
  const mouseSpringConfig = { stiffness: 150, damping: 20 };
  const rotateX = useSpring(useTransform(y, [-300, 300], [7, -7]), mouseSpringConfig);
  const rotateY = useSpring(useTransform(x, [-300, 300], [-7, 7]), mouseSpringConfig);

  // Parallax for the image itself
  const imgX = useSpring(useTransform(x, [-300, 300], [10, -10]), mouseSpringConfig);
  const imgY = useSpring(useTransform(y, [-300, 300], [10, -10]), mouseSpringConfig);

  function handleMouseMove(e) {
    if (!cardRef.current || window.innerWidth < 1024) return;
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(e.clientX - centerX);
    y.set(e.clientY - centerY);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  const isSmallCard = project.size.includes('col-span-4');

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative h-[550px] rounded-[2.5rem] overflow-hidden group bg-[#0a0a0a] border border-white/5 ${project.size}`}
      style={{ perspective: 1000 }}
    >
      <motion.div 
        style={{ rotateX, rotateY }} 
        className="h-full w-full relative"
      >
        {/* 1. IMAGE ZONE (Top 70%) */}
        <div className="absolute top-0 left-0 w-full h-[70%] overflow-hidden pointer-events-none">
          <motion.img 
            style={{ x: imgX, y: imgY, scale: 1.15 }} // Scale up slightly so parallax doesn't show edges
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover transition-all duration-700 grayscale-[100%] group-hover:grayscale-0"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/20 to-transparent" />
        </div>

        {/* 2. CONTENT TRAY */}
        <div className={`absolute bottom-0 left-0 w-full transition-all duration-500 ease-out translate-y-2 group-hover:translate-y-0 flex flex-col justify-end min-h-[45%] bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/95 to-transparent
          ${isSmallCard ? 'p-6' : 'p-10'}`}
        >
          {/* Category */}
          <div className="flex items-center gap-3 mb-4">
            <span className={`h-[1px] w-6 bg-gradient-to-r ${project.gradient}`} />
            <span className="text-[10px] font-bold tracking-[0.2em] text-cyan-500 uppercase">
              {project.category}
            </span>
          </div>

          {/* Title */}
          <h3 className={`font-black italic tracking-tighter uppercase mb-2 leading-[0.85] transition-all
            ${isSmallCard ? 'text-3xl md:text-4xl' : 'text-5xl md:text-7xl'}`}>
            {project.title}
          </h3>

          {/* Description Expandable Logic */}
          <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-500 opacity-100 lg:opacity-0 lg:group-hover:opacity-100">
            <div className="overflow-hidden">
              <p className={`text-gray-400 font-light mb-4 mt-3 leading-relaxed
                ${isSmallCard ? 'text-xs max-w-[220px]' : 'text-sm md:text-base max-w-sm'}`}>
                {project.desc}
              </p>
            </div>
          </div>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 mt-2">
            {project.tech.map((t) => (
              <span key={t} className="px-3 py-1 rounded-md bg-white/5 border border-white/10 text-[9px] font-mono text-gray-400 uppercase group-hover:text-cyan-400/80 transition-colors">
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* 3. FLOATING LINK BUTTON */}
        <div className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-4 group-hover:translate-x-0">
          <div className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center hover:bg-cyan-500 hover:text-white transition-all shadow-xl">
            <svg width="18" height="18" viewBox="0 0 15 15" fill="none"><path d="M3.64645 11.3536L10.2929 4.70711V9C10.2929 9.27614 10.5167 9.5 10.7929 9.5C11.069 9.5 11.2929 9.27614 11.2929 9V3.5C11.2929 3.22386 11.069 3 10.7929 3H5.29289C5.01675 3 4.79289 3.22386 4.79289 3.5C4.79289 3.77614 5.01675 4 5.29289 4H9.58579L2.93934 10.6464C2.74408 10.8417 2.74408 11.1583 2.93934 11.3536C3.1346 11.5489 3.45118 11.5489 3.64645 11.3536Z" fill="currentColor"></path></svg>
          </div>
        </div>

        {/* Border Glow */}
        <div className="absolute inset-0 border border-white/0 group-hover:border-cyan-500/20 transition-colors duration-700 rounded-[2.5rem] pointer-events-none" />
      </motion.div>
    </motion.div>
  );
}