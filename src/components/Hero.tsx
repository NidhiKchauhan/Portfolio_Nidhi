import { motion } from 'motion/react';
import { ArrowDown, Mail, Linkedin, Globe, Github } from 'lucide-react';
import resumeData from '../data/resume.json';
import { generateResumePDF } from '../utils/generateResume';

export const Hero = () => {
  const getIcon = (label: string) => {
    switch (label.toLowerCase()) {
      case 'linkedin': return <Linkedin size={18} />;
      case 'github': return <Github size={18} />;
      default: return <Globe size={18} />;
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-32 pb-5 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto z-10 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-shrink-0 relative group"
          >
            <div className="absolute -inset-4 bg-blue-500/20 rounded-full blur-3xl opacity-50 group-hover:opacity-100 transition-opacity duration-700" />
            <img
              src="https://www.salesforce.com/news/wp-content/uploads/sites/3/2022/06/ASTRO_NoOutfit_WalkRight_SFS20_sRGB.png?w=1218"
              alt="Salesforce Trailblazer Mascot"
              className="w-[280px] md:w-[400px] h-auto relative z-10 drop-shadow-[0_0_50px_rgba(59,130,246,0.3)] transition-transform duration-500 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
          </motion.div>

          <div className="flex-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-8"
            >
              <h1 className="font-bold tracking-tighter leading-[1.1]">
                <span className="block text-5xl md:text-7xl xl:text-8xl text-slate-100 mb-6">
                  {resumeData.basics.name}
                </span>
                <div className="relative inline-flex items-center px-8 py-3 rounded-full bg-gradient-to-r from-blue-600 via-emerald-500 to-blue-600 mb-8 overflow-hidden group">
                  <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="relative text-lg md:text-xl xl:text-2xl font-bold text-white tracking-wide">
                    {resumeData.basics.title}
                  </span>
                </div>
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="max-w-2xl mx-auto lg:mx-0"
            >
              <div className="relative p-6 md:p-8 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-md mb-12">
                <p className="text-base md:text-lg text-slate-300 leading-relaxed font-medium whitespace-pre-line">
                  {resumeData.basics.summary}
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4"
            >
              <a
                href="#experience"
                className="group px-10 py-5 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-bold transition-all flex items-center justify-center gap-3 shadow-2xl shadow-blue-500/40 hover:-translate-y-1"
              >
                View Journey
                <ArrowDown size={20} className="group-hover:translate-y-1 transition-transform" />
              </a>
              <button
                onClick={generateResumePDF}
                className="px-10 py-5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-slate-200 font-bold transition-all backdrop-blur-sm hover:-translate-y-1"
              >
                Download Resume
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 1 }}
              className="mt-12 flex flex-wrap items-center justify-center lg:justify-start gap-8 text-slate-400"
            >
              {resumeData.basics.links.map((link) => (
                <a
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition-all flex items-center gap-2 text-sm font-semibold uppercase tracking-widest hover:scale-105"
                >
                  {getIcon(link.label)}
                  {link.label}
                </a>
              ))}
              <a
                href={`mailto:${resumeData.basics.email}`}
                className="hover:text-blue-400 transition-all flex items-center gap-2 text-sm font-semibold uppercase tracking-widest hover:scale-105"
              >
                <Mail size={18} />
                Email
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-blue-600/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-emerald-600/10 rounded-full blur-[150px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(30,41,59,0.2)_0%,transparent_70%)]" />
      </div>
    </section>
  );
};
