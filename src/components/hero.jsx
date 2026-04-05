// import { motion, AnimatePresence } from 'framer-motion';
// export default function Hero() {
//   return (
//     <section id="home" className="relative min-h-[100svh] flex flex-col justify-center items-center overflow-hidden px-6 pt-20">
//       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] md:w-[600px] h-[280px] md:h-[600px] bg-cyan-600/20 blur-[80px] md:blur-[150px] rounded-full animate-pulse" />
      
//       <div className="relative z-10 text-center w-full max-w-5xl">
//         <motion.p 
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="text-cyan-500 font-mono tracking-[0.3em] text-[10px] md:text-xs mb-4 uppercase"
//         >
//           MERN Stack Developer
//         </motion.p>

//         <motion.h1 
//           initial={{ opacity: 0, scale: 0.9 }}
//           animate={{ opacity: 1, scale: 1 }}
//           className="text-[16vw] sm:text-[12vw] md:text-[9vw] font-[1000] leading-[0.85] tracking-[ -0.05em] text-white uppercase italic"
//         >
//           ARITRA <br className="xs:hidden" />
//           <span className="text-transparent stroke-text" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.2)' }}>
//             GHOSH
//           </span>
//         </motion.h1>

//         <motion.div 
//           initial={{ width: 0 }}
//           animate={{ width: "60px" }}
//           className="h-1 bg-cyan-500 mx-auto my-8 rounded-full shadow-[0_0_20px_#06b6d4]"
//         />

//         <p className="text-gray-400 max-w-md mx-auto text-sm md:text-lg font-light leading-relaxed">
//           Crafting <span className="text-white">high-performance</span> digital ecosystems with the MERN stack.
//         </p>
//       </div>
//     </section>
//   );
// }


// import { motion, useScroll, useTransform } from 'framer-motion';
// import { useRef } from 'react';

// export default function Hero() {
//   const containerRef = useRef(null);
  
//   // Scroll animations for parallax effect
//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start start", "end start"],
//   });

//   const yText = useTransform(scrollYProgress, [0, 1], [0, 200]);
//   const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
//   const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

//   return (
//     <section 
//       ref={containerRef}
//       id="home" 
//       className="relative min-h-[100svh] flex flex-col justify-center items-center overflow-hidden px-6 pt-28 md:pt-20"
//     >
//       {/* Dynamic Background Glow */}
//       <motion.div 
//         style={{ scale }}
//         className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[700px] h-[300px] md:h-[700px] bg-cyan-600/10 blur-[120px] rounded-full animate-pulse" 
//       />
      
//       <motion.div 
//         style={{ y: yText, opacity }}
//         className="relative z-10 w-full max-w-7xl flex flex-col items-center"
//       >
//         {/* Profile Image & Name Row */}
//         <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10 mb-8">
          
//           {/* Circular Photo with Premium Border */}
//           <motion.div 
//             initial={{ scale: 0, rotate: -20 }}
//             animate={{ scale: 1, rotate: 0 }}
//             transition={{ type: "spring", stiffness: 260, damping: 20 }}
//             className="relative group"
//           >
//             <div className="absolute -inset-1 bg-gradient-to-tr from-cyan-500 to-blue-600 rounded-full blur opacity-40 group-hover:opacity-75 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
//             <div className="relative h-24 w-24 md:h-40 md:w-40 rounded-full overflow-hidden border-2 border-white/10 bg-[#111]">
//               <img 
//                 src="src/media/Alipta.jpg" // Replace with your actual path
//                 alt="Aritra Ghosh"
//                 className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
//               />
//             </div>
//           </motion.div>

//           {/* Name & Title */}
//           <div className="text-center md:text-left">
//             <motion.p 
//               initial={{ opacity: 0, x: -20 }}
//               animate={{ opacity: 1, x: 0 }}
//               className="text-cyan-500 font-mono tracking-[0.4em] text-[10px] md:text-xs mb-2 uppercase"
//             >
//               MERN Stack Developer
//             </motion.p>
//             <motion.h1 
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               className="text-[14vw] md:text-[8vw] font-[1000] leading-[0.8] tracking-tighter text-white uppercase italic"
//             >
//               ALIPTA <br className="hidden md:block" />
//               <span className="text-transparent stroke-text" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.3)' }}>
//                 GHOSH
//               </span>
//             </motion.h1>
//           </div>
//         </div>

//         {/* Separator Line */}
//         <motion.div 
//           initial={{ width: 0 }}
//           animate={{ width: "100px" }}
//           transition={{ delay: 0.6, duration: 1 }}
//           className="h-1 bg-cyan-500 rounded-full shadow-[0_0_20px_rgba(6,182,212,0.8)] mb-8"
//         />

//         <motion.p 
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.8 }}
//           className="text-gray-400 max-w-lg text-center text-sm md:text-xl font-light leading-relaxed px-4"
//         >
//           Engineering high-performance <span className="text-white font-medium">digital ecosystems</span> with MongoDB, Express, React, and Node.js.
//         </motion.p>
//       </motion.div>

//       {/* Floating Scroll Indicator */}
//       <motion.div 
//         animate={{ y: [0, 12, 0] }}
//         transition={{ repeat: Infinity, duration: 2 }}
//         className="absolute bottom-10 flex flex-col items-center gap-2"
//       >
//         <div className="w-[1px] h-12 bg-gradient-to-b from-cyan-500 to-transparent" />
//         <span className="text-[10px] text-gray-500 font-mono tracking-widest uppercase">Scroll</span>
//       </motion.div>
//     </section>
//   );
// }




import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Hero() {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Parallax: Background moves slightly to create depth
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const blurBg = useTransform(scrollYProgress, [0, 0.5], ["blur(0px)", "blur(8px)"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);

  return (
    <section 
      ref={containerRef}
      id="home" 
      className="relative min-h-[100svh] flex flex-col justify-center items-center overflow-hidden px-6 bg-[#030303]"
    >
      {/* LAYER 1: Parallax Image */}
      <motion.div 
        style={{ y: yBg, filter: blurBg }}
        className="absolute inset-0 z-0 h-[120%] w-full"
      >
        <img 
          src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2000"
          alt="Developer Environment"
          className="w-full h-full object-cover grayscale-[20%] brightness-50"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#030303]/80 to-[#030303]" />
      </motion.div>

      {/* LAYER 2: Atmospheric Glow */}
      <motion.div 
        style={{ scale }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-cyan-500/10 blur-[120px] rounded-full z-10" 
      />
      
      {/* LAYER 3: Content */}
      <motion.div 
        style={{ opacity }}
        className="relative z-20 w-full max-w-7xl flex flex-col items-center text-center"
      >
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-cyan-500 font-mono tracking-[0.5em] text-[10px] md:text-sm mb-6 uppercase"
        >
          / MERN Stack Architect
        </motion.p>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-[16vw] md:text-[10vw] font-[1000] leading-[0.8] tracking-tighter text-white uppercase italic group cursor-default"
        >
          ALIPTA <br className="hidden md:block" />
          <span className="stroke-text group-hover:text-white transition-all duration-700">
            GHOSH
          </span>
        </motion.h1>

        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: "80px" }}
          transition={{ delay: 0.6, duration: 1 }}
          className="h-[2px] bg-cyan-500 shadow-[0_0_20px_#06b6d4] my-10"
        />

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-gray-400 max-w-xl text-sm md:text-xl font-light leading-relaxed px-4"
        >
          Crafting <span className="text-white">pixel-perfect</span> digital interfaces and engineering robust, high-performance backends.
        </motion.p>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 flex flex-col items-center gap-3 z-30 opacity-40"
      >
        <div className="w-[1px] h-12 bg-gradient-to-b from-cyan-500 to-transparent" />
      </motion.div>
    </section>
  );
}