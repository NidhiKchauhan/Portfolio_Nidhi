import { motion } from 'motion/react';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import resumeData from '../data/resume.json';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="connect" className="py-20 px-6 border-t border-white/5 bg-slate-950">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10 mb-16">
          <div className="text-center md:text-left">
            <h4 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400 mb-4">
              Let's build something together.
            </h4>
            <p className="text-slate-400 max-w-md">
              Currently based in Ontario, Canada. Feel free to reach out for collaborations or just a friendly hello.
            </p>
          </div>

          <div className="flex items-center gap-6">
            <a
              href={`mailto:${resumeData.basics.email}`}
              className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-slate-300 hover:bg-blue-600 hover:text-white transition-all"
            >
              <Mail size={20} />
            </a>
            {resumeData.basics.links.map((link) => (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-slate-300 hover:bg-blue-600 hover:text-white transition-all"
              >
                {link.label === 'LinkedIn' ? <Linkedin size={20} /> : <Github size={20} />}
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-10 border-t border-white/5">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} {resumeData.basics.name}. All rights reserved.
          </p>
          
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-slate-400 hover:text-blue-400 transition-colors text-sm font-medium"
          >
            Back to top
            <ArrowUp size={16} className="group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
};
