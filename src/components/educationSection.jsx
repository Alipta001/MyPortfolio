import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';
import { getEducation } from '../api/endpoints';

export default function EducationSection() {
  const [education, setEducation] = useState([]);

  useEffect(() => {
    getEducation()
      .then(setEducation)
      .catch(() => setEducation([]));
  }, []);

  return (
    <section id="education" className="py-20 md:py-32 px-6 bg-[#030303] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <p className="text-cyan-500 font-mono tracking-[0.5em] text-xs uppercase mb-4">
            / Academic Path
          </p>
          <h2 className="text-5xl md:text-8xl font-[1000] italic tracking-tighter uppercase leading-[0.85]">
            Education <span className="text-transparent" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.3)' }}>.</span>
          </h2>
        </motion.div>

        <div className="relative max-w-4xl">
          <div className="absolute left-5 top-4 bottom-4 w-px bg-gradient-to-b from-cyan-500 via-white/20 to-transparent" />
          <div className="space-y-6">
            {education.map((item, index) => (
              <motion.article
                key={item._id || `${item.institution}-${index}`}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.12, duration: 0.6 }}
                className="relative pl-14"
              >
                <div className="absolute left-0 top-5 w-10 h-10 rounded-full bg-[#030303] border border-cyan-500/60 text-cyan-400 flex items-center justify-center">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div className="p-6 md:p-8 bg-white/[0.02] border border-white/5 rounded-[2rem] hover:border-cyan-500/40 hover:bg-white/[0.04] transition-all duration-500">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-4">
                    <div>
                      <p className="text-cyan-400 font-mono text-[10px] uppercase tracking-[0.2em] mb-2">
                        {item.startDate || 'Academic'} {item.endDate ? `— ${item.endDate}` : ''}
                      </p>
                      <h3 className="text-2xl md:text-3xl font-black italic tracking-tight uppercase">
                        {item.degree}
                      </h3>
                    </div>
                    <span className="text-sm text-gray-400 md:text-right">
                      {item.institution}
                    </span>
                  </div>
                  {item.description && (
                    <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-2xl">
                      {item.description}
                    </p>
                  )}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
