import React from 'react';
import { Section } from './Section';
import { BentoGrid, BentoItem } from './BentoGrid';
import { motion } from 'framer-motion';
import { SiReact, SiVite, SiTailwindcss, SiPython, SiNodedotjs, SiPostgresql, SiFigma, SiNotion, SiJira, SiMiro } from 'react-icons/si';
import { Video, Film, Camera, Brain, Rocket, Cpu } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const About = () => {
  const { t } = useLanguage();

  const techStack = [
    { name: 'React', icon: SiReact, color: 'text-blue-400' },
    { name: 'Vite', icon: SiVite, color: 'text-purple-400' },
    { name: 'Tailwind', icon: SiTailwindcss, color: 'text-cyan-400' },
    { name: 'Python', icon: SiPython, color: 'text-yellow-400' },
    { name: 'Node.js', icon: SiNodedotjs, color: 'text-green-400' },
    { name: 'Postgres', icon: SiPostgresql, color: 'text-blue-300' }
  ];

  const designTools = [
    { name: 'Figma', icon: SiFigma, color: 'text-pink-400' },
    { name: 'DaVinci', icon: Film, color: 'text-indigo-400' },
    { name: 'FCPX', icon: Video, color: 'text-purple-400' },
    { name: 'Notion', icon: SiNotion, color: 'text-white' },
    { name: 'Jira', icon: SiJira, color: 'text-blue-500' },
    { name: 'Miro', icon: SiMiro, color: 'text-yellow-300' }
  ];

  return (
    <Section id="about" className="min-h-screen md:h-screen md:snap-start flex flex-col justify-center py-20 md:py-12 px-6 md:px-24 md:overflow-hidden relative">
      <div className="absolute top-0 right-0 p-32 bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 p-32 bg-purple-500/5 blur-[120px] rounded-full pointer-events-none" />

      <h2 className="text-3xl md:text-5xl font-display font-bold mb-10 text-center shrink-0 tracking-tight text-white/90">
        {t.about.title}
      </h2>

      <BentoGrid className="grid-cols-1 md:grid-cols-12 md:grid-rows-[auto_1fr] gap-6 h-auto md:h-full md:max-h-[75vh] w-full max-w-6xl mx-auto">
        {/* Personal Summary - Top Left */}
        <BentoItem className="md:col-span-8 p-8 md:p-10 flex flex-col justify-center bg-white/[0.03] backdrop-blur-xl border-white/[0.08] hover:bg-white/[0.05] transition-colors relative overflow-hidden">
          <div className="absolute top-0 right-0 p-16 bg-blue-500/5 blur-3xl rounded-full pointer-events-none" />
          <h3 className="text-sm md:text-base font-bold text-primary uppercase tracking-[0.2em] mb-6 flex items-center gap-3 opacity-90">
            <span className="w-8 h-px bg-primary/50"></span>
            {t.about.summaryTitle}
          </h3>
          <p className="text-base md:text-lg text-slate-300 leading-loose font-light text-pretty opacity-90">
            {t.about.summaryContent || t.about.summaryP1}
          </p>
        </BentoItem>

        {/* Right Column: Tech Stack + Design Tools */}
        <BentoItem rowSpan={2} className="md:col-span-4 md:row-span-2 p-8 bg-gradient-to-b from-white/[0.05] to-transparent flex flex-col justify-between border-white/[0.08]">
          <div className="flex flex-col gap-6 ">
            <h4 className="text-sm md:text-base font-bold text-primary uppercase tracking-[0.2em] mb-6 flex items-center gap-3 opacity-90">
              <span className="w-8 h-px bg-primary/50"></span>
              {t.about.techStack}
            </h4>
            <motion.div
              className="grid grid-cols-3 gap-4"
            >
              {techStack.map((tech) => (
                <motion.div
                  key={tech.name}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="flex flex-col items-center justify-center gap-3 p-3 rounded-2xl bg-white/5 border border-white/5 hover:border-blue-400/30 hover:bg-blue-400/5 transition-all cursor-default aspect-square"
                >
                  <tech.icon className={`w-6 h-6 md:w-8 md:h-8 ${tech.color}`} />
                  <span className="text-[10px] font-medium text-slate-400 tracking-wide">{tech.name}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <div className="flex flex-col gap-6">
            <h4 className="text-sm md:text-base font-bold text-primary uppercase tracking-[0.2em] mb-6 flex items-center gap-3 opacity-90">
              <span className="w-8 h-px bg-primary/50"></span>
              {t.about.designTools}
            </h4>
            <div className="grid grid-cols-3 gap-4">
              {designTools.map((tool) => (
                <motion.div
                  key={tool.name}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="flex flex-col items-center justify-center gap-3 p-3 rounded-2xl bg-white/5 border border-white/5 hover:border-pink-400/30 hover:bg-pink-400/5 transition-all cursor-default aspect-square"
                >
                  <tool.icon className={`w-6 h-6 md:w-8 md:h-8 ${tool.color}`} />
                  <span className="text-[10px] font-medium text-slate-400 tracking-wide">{tool.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </BentoItem>

        {/* Self Evaluation - Bottom Left */}
        <BentoItem className="md:col-span-8 p-8 md:p-10 bg-white/[0.03] border-white/[0.08] flex flex-col justify-center relative overflow-hidden">
          <div className="absolute bottom-0 right-0 p-20 bg-primary/5 blur-3xl rounded-full pointer-events-none" />
          <h3 className="text-sm md:text-base font-bold text-primary uppercase tracking-[0.2em] mb-8 flex items-center gap-3 opacity-90">
            <span className="w-8 h-px bg-primary/50"></span>
            {t.about.selfEvalTitle || "自我评价"}
          </h3>
          <div className="grid grid-cols-1 gap-8">
            {(t.about.selfEval || []).map((item, index) => (
              <div key={index} className="flex gap-6 group items-start">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-all duration-300 group-hover:scale-110 border border-primary/10">
                  <span className="text-primary font-bold text-base md:text-lg font-display">0{index + 1}</span>
                </div>
                <div className="flex flex-col gap-2 pt-1">
                  <h4 className="text-base md:text-xl font-bold text-slate-200 group-hover:text-primary transition-colors tracking-tight">
                    {item.title}
                  </h4>
                  <p className="text-sm md:text-base text-slate-400 font-light leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </BentoItem>
      </BentoGrid>
    </Section>
  )
}
