import { motion } from 'motion/react';
import { GraduationCap } from 'lucide-react';
import resumeData from '../data/resume.json';

export const Education = () => {
  return (
    <section id="education" className="py-5 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <GraduationCap className="mx-auto text-blue-400 mb-4" size={40} />
          <h3 className="text-4xl font-bold text-slate-100">Education</h3>
        </motion.div>

        <div className="space-y-8">
          {resumeData.education.map((edu, index) => (
            <motion.div
              key={edu.institution}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative pl-8 border-l border-blue-500/20"
            >
              <div className="absolute left-[-5px] top-0 w-2.5 h-2.5 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
              <div className="text-blue-400 text-sm font-mono mb-1">{edu.dates}</div>
              <h4 className="text-2xl font-bold text-slate-100 mb-1">{edu.institution}</h4>
              <p className="text-slate-400 text-lg">{edu.degree}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
