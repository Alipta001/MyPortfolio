import { motion } from 'framer-motion';

const skills = [
  { category: "Frontend", tools: ["React", "Next.js", "Tailwind", "Redux"], icon: "✦" },
  { category: "Backend", tools: ["Node.js", "Express", "MongoDB", "Rest API"], icon: "⚡" },
  { category: "Design", tools: ["Figma", "Glassmorphism", "Responsive UI"], icon: "🎨" },
];

export default function SkillSection() {
  return (
    <section id="skills" className="py-20 md:py-32 px-6 max-w-7xl mx-auto overflow-hidden">
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">
        
        {/* Sidebar Header */}
        <div className="w-full lg:w-1/3 lg:sticky lg:top-32">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-5xl md:text-7xl font-[1000] italic tracking-tighter uppercase mb-6 leading-[0.9]"
          >
            Mastered<br/>
            <span className="text-cyan-500 transition-all duration-500 hover:text-blue-500">
              Skills.
            </span>
          </motion.h2>
          <p className="text-gray-400 text-sm md:text-base max-w-sm font-light leading-relaxed">
            Continuous learning and building with the latest industry standards. 
            Focused on performance and pixel-perfect execution.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="w-full lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {skills.map((skill, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="group p-6 md:p-8 bg-white/[0.02] border border-white/5 rounded-[32px] md:rounded-[40px] hover:bg-white/[0.05] hover:border-cyan-500/40 transition-all duration-500"
            >
              {/* Icon with Glow */}
              <div className="text-3xl mb-6 flex items-center justify-center w-12 h-12 rounded-2xl bg-white/5 group-hover:bg-cyan-500/10 group-hover:text-cyan-400 transition-colors">
                {skill.icon}
              </div>
              
              <h3 className="text-xl md:text-2xl font-bold mb-6 tracking-tight text-white/90">
                {skill.category}
              </h3>

              <div className="flex flex-wrap gap-2 md:gap-3">
                {skill.tools.map(tool => (
                  <span 
                    key={tool} 
                    className="px-4 py-2 rounded-xl bg-black/40 border border-white/5 text-[10px] md:text-xs uppercase tracking-widest text-gray-500 group-hover:text-white group-hover:border-white/20 transition-all duration-300"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}