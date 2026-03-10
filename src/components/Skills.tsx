import { motion } from 'motion/react';
import resumeData from '../data/resume.json';

export const Skills = () => {
  return (
    <section id="skills" className="py-5 px-6 bg-slate-950/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-xl font-mono text-blue-400 uppercase tracking-[0.3em] mb-4">Technical Stack</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-slate-100">Skills & Expertise</h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(resumeData.skills).map(([category, skills], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-all group"
            >
              <h4 className="text-lg font-bold text-blue-400 mb-6 flex items-center justify-between">
                {category}
                <span className="w-8 h-px bg-blue-500/20 group-hover:w-12 transition-all" />
              </h4>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-lg bg-slate-900 text-slate-300 text-sm border border-white/5 hover:border-blue-500/30 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
