import { motion } from 'motion/react';
import { Briefcase, Calendar, MapPin, ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';
import resumeData from '../data/resume.json';

interface Role {
  role: string;
  dates: string;
  bullets: string[];
}

interface CompanyExperience {
  company: string;
  location: string;
  roles: Role[];
}

export const Experience = () => {
  const [expandedRoles, setExpandedRoles] = useState<string[]>([]);

  const toggleRole = (roleId: string) => {
    setExpandedRoles(prev => 
      prev.includes(roleId) ? prev.filter(id => id !== roleId) : [...prev, roleId]
    );
  };

  // Group experience by company
  const groupedExperience = resumeData.experience.reduce((acc, exp) => {
    const existing = acc.find(item => item.company === exp.company);
    if (existing) {
      existing.roles.push({
        role: exp.role,
        dates: exp.dates,
        bullets: exp.bullets
      });
    } else {
      acc.push({
        company: exp.company,
        location: exp.location,
        roles: [{
          role: exp.role,
          dates: exp.dates,
          bullets: exp.bullets
        }]
      });
    }
    return acc;
  }, [] as CompanyExperience[]);

  return (
    <section id="experience" className="py-5 px-6 bg-slate-950/50 relative overflow-hidden">
      <div className="max-w-5xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <h2 className="text-xl font-mono text-blue-400 uppercase tracking-[0.3em] mb-4">Professional Path</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-slate-100">My Journey</h3>
        </motion.div>

        <div className="relative">
          {/* Vertical Journey Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/50 via-blue-500/20 to-transparent hidden md:block" />
          
          <div className="space-y-16">
            {groupedExperience.map((companyExp, companyIndex) => (
              <div key={companyExp.company} className="relative">
                {/* Company Marker */}
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 top-0 z-10 hidden md:block">
                  <div className="w-4 h-4 rounded-full bg-slate-950 border-2 border-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.5)]" />
                </div>

                <div className={`flex flex-col ${companyIndex % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 md:gap-0`}>
                  {/* Company Info Side */}
                  <motion.div 
                    initial={{ opacity: 0, x: companyIndex % 2 === 0 ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className={`w-full md:w-1/2 ${companyIndex % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16 md:text-left'} pl-12 md:pl-0`}
                  >
                    <h4 className="text-2xl md:text-3xl font-bold text-slate-100 mb-2">{companyExp.company}</h4>
                    <div className={`flex items-center gap-2 text-slate-400 text-sm mb-4 ${companyIndex % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}>
                      <MapPin size={14} className="text-blue-400" />
                      {companyExp.location}
                    </div>
                  </motion.div>

                  {/* Roles Side */}
                  <div className={`w-full md:w-1/2 ${companyIndex % 2 === 0 ? 'md:pl-16' : 'md:pr-16'} pl-12 md:pl-0 space-y-6`}>
                    {companyExp.roles.map((role, roleIndex) => {
                      const roleId = `${companyExp.company}-${role.role}-${roleIndex}`;
                      const isExpanded = expandedRoles.includes(roleId);
                      
                      return (
                        <motion.div
                          key={roleId}
                          initial={{ opacity: 0, x: companyIndex % 2 === 0 ? 30 : -30 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: roleIndex * 0.1 }}
                          className={`group p-6 rounded-2xl border transition-all duration-300 ${
                            isExpanded 
                              ? 'bg-white/5 border-blue-500/30 shadow-lg shadow-blue-500/5' 
                              : 'bg-white/[0.02] border-white/5 hover:border-white/10'
                          }`}
                        >
                          <button
                            onClick={() => toggleRole(roleId)}
                            className="w-full text-left"
                          >
                            <div className="flex items-start justify-between gap-4">
                              <div>
                                <h5 className="text-lg font-bold text-blue-400 mb-1 group-hover:text-blue-300 transition-colors">
                                  {role.role}
                                </h5>
                                <div className="flex items-center gap-2 text-slate-500 text-xs font-mono">
                                  <Calendar size={12} />
                                  {role.dates}
                                </div>
                              </div>
                              <div className="mt-1 text-slate-500 group-hover:text-blue-400 transition-colors">
                                {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                              </div>
                            </div>
                          </button>

                          <motion.div
                            initial={false}
                            animate={{ height: isExpanded ? 'auto' : 0, opacity: isExpanded ? 1 : 0 }}
                            className="overflow-hidden"
                          >
                            <div className="pt-6 space-y-3">
                              <div className="h-px w-full bg-white/5 mb-4" />
                              <ul className="space-y-3">
                                {role.bullets.map((bullet, i) => (
                                  <li key={i} className="flex gap-3 text-sm text-slate-400 leading-relaxed">
                                    <span className="mt-2 w-1 h-1 rounded-full bg-blue-500 shrink-0" />
                                    {bullet}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </motion.div>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
