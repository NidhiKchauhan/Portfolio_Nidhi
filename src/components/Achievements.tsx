import { motion } from 'motion/react';
import { Trophy, Star, Zap, Award } from 'lucide-react';
import resumeData from '../data/resume.json';

export const Achievements = () => {
  const icons = [<Zap />, <Star />, <Award />, <Trophy />];

  return (
    <section id="achievements" className="py-5 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-xl font-mono text-blue-400 uppercase tracking-[0.3em] mb-4">Key Results</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-slate-100">Achievements</h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {resumeData.achievements.map((ach, index) => (
            <motion.div
              key={ach.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -10 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-blue-500/30 transition-all duration-500"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl" />
              
              <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-400 mb-6 group-hover:scale-110 transition-transform">
                {icons[index % icons.length]}
              </div>

              <div className="text-4xl font-bold text-slate-100 mb-2 font-mono">
                {ach.item}
              </div>
              <div className="text-lg font-semibold text-blue-400 mb-4">
                {ach.label}
              </div>
              <p className="text-sm text-slate-400 leading-relaxed">
                {ach.context}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-3xl bg-slate-900/50 border border-white/5"
          >
            <h4 className="text-xl font-bold text-slate-100 mb-6">Certifications</h4>
            <div className="flex flex-wrap gap-3">
              {resumeData.certifications.map((cert) => (
                <span key={cert} className="px-4 py-2 rounded-xl bg-white/5 border border-white/5 text-sm text-slate-300">
                  {cert}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-3xl bg-slate-900/50 border border-white/5"
          >
            <h4 className="text-xl font-bold text-slate-100 mb-6">Publications</h4>
            <div className="space-y-4">
              {resumeData.publications.map((pub) => (
                <div key={pub} className="flex gap-3 text-sm text-slate-400">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                  {pub}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
