
// import React, { useRef } from 'react';
// import { motion, useScroll, useTransform } from 'framer-motion';

// export default function Hero() {
//   const containerRef = useRef(null);
  
//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start start", "end start"],
//   });

//   // Parallax: Background moves slightly to create depth
//   const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
//   const blurBg = useTransform(scrollYProgress, [0, 0.5], ["blur(0px)", "blur(8px)"]);
//   const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
//   const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);

//   return (
//     <section 
//       ref={containerRef}
//       id="home" 
//       className="relative min-h-[100svh] flex flex-col justify-center items-center overflow-hidden px-6 bg-[#030303]"
//     >
//       {/* LAYER 1: Parallax Image */}
//       <motion.div 
//         style={{ y: yBg, filter: blurBg }}
//         className="absolute inset-0 z-0 h-[120%] w-full"
//       >
//         <img 
//           src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2000"
//           alt="Developer Environment"
//           className="w-full h-full object-cover grayscale-[20%] brightness-50"
//         />
//         <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#030303]/80 to-[#030303]" />
//       </motion.div>

//       {/* LAYER 2: Atmospheric Glow */}
//       <motion.div 
//         style={{ scale }}
//         className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-cyan-500/10 blur-[120px] rounded-full z-10" 
//       />
      
//       {/* LAYER 3: Content */}
//       <motion.div 
//         style={{ opacity }}
//         className="relative z-20 w-full max-w-7xl flex flex-col items-center text-center"
//       >
//         <motion.p 
//           initial={{ opacity: 0, y: 10 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="text-cyan-500 font-mono tracking-[0.5em] text-[10px] md:text-sm mb-6 uppercase"
//         >
//           / MERN Stack Architect
//         </motion.p>

//         <motion.h1 
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.2 }}
//           className="text-[16vw] md:text-[10vw] font-[1000] leading-[0.8] tracking-tighter text-white uppercase italic group cursor-default"
//         >
//           ALIPTA <br className="hidden md:block" />
//           <span className="stroke-text group-hover:text-white transition-all duration-700">
//             GHOSH
//           </span>
//         </motion.h1>

//         <motion.div 
//           initial={{ width: 0 }}
//           animate={{ width: "80px" }}
//           transition={{ delay: 0.6, duration: 1 }}
//           className="h-[2px] bg-cyan-500 shadow-[0_0_20px_#06b6d4] my-10"
//         />

//         <motion.p 
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.8 }}
//           className="text-gray-400 max-w-xl text-sm md:text-xl font-light leading-relaxed px-4"
//         >
//           Crafting <span className="text-white">pixel-perfect</span> digital interfaces and engineering robust, high-performance backends.
//         </motion.p>
//       </motion.div>

//       {/* Scroll Indicator */}
//       <motion.div 
//         animate={{ y: [0, 10, 0] }}
//         transition={{ repeat: Infinity, duration: 2 }}
//         className="absolute bottom-10 flex flex-col items-center gap-3 z-30 opacity-40"
//       >
//         <div className="w-[1px] h-12 bg-gradient-to-b from-cyan-500 to-transparent" />
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

  // Reduce the parallax intensity for mobile to prevent "white gaps" at the bottom
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]); 
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section 
      ref={containerRef}
      id="home" 
      /* Changed to h-[100dvh] - Dynamic Viewport Height is better for mobile browsers */
      className="relative h-[100dvh] w-full flex flex-col justify-center items-center overflow-hidden bg-[#030303]"
    >
      {/* LAYER 1: Background Image Fix */}
      <motion.div 
        style={{ y: yBg }}
        className="absolute inset-0 z-0 w-full h-full lg:h-[120%]"
      >
        <img 
          src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2000"
          alt="Developer Environment"
          /* 1. h-full w-full object-cover: Ensures it fills the screen
             2. object-center: Keeps the focus in the middle on narrow phones
             3. brightness: Lowered for better text contrast on small screens
          */
          className="w-full h-full object-cover object-center grayscale-[30%] brightness-[0.35] md:brightness-50"
        />
        
        {/* Multi-layer Gradient: Prevents the "stark" edge at the bottom on mobile */}
        <div className="absolute inset-0 bg-[#030303]/30" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#030303]/60 to-[#030303]" />
      </motion.div>

      {/* LAYER 3: Content (Added z-index and padding for mobile) */}
      <motion.div 
        style={{ opacity }}
        className="relative z-20 w-full max-w-7xl flex flex-col items-center text-center px-6"
      >
        <motion.p 
          className="text-cyan-500 font-mono tracking-[0.3em] md:tracking-[0.5em] text-[10px] md:text-sm mb-4 uppercase"
        >
          / MERN Stack Architect
        </motion.p>

        <motion.h1 
          className="text-[16vw] md:text-[10vw] font-[1000] leading-[0.9] md:leading-[0.8] tracking-tighter text-white uppercase italic"
        >
          ALIPTA <br />
          <span className="text-transparent" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.3)' }}>
            GHOSH
          </span>
        </motion.h1>

        <div className="h-[2px] w-12 md:w-20 bg-cyan-500 shadow-[0_0_20px_#06b6d4] my-8" />

        <p className="text-gray-400 max-w-[300px] md:max-w-xl text-sm md:text-xl font-light leading-relaxed">
          Crafting <span className="text-white">pixel-perfect</span> digital interfaces and robust backends.
        </p>
      </motion.div>
    </section>
  );
}