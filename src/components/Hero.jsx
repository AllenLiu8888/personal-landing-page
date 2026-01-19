import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { Section } from './Section';
import { FaGithub, FaLinkedin, FaEnvelope, FaFilePdf } from 'react-icons/fa';
import resumePdf from '../assets/新简历.pdf';

export const Hero = () => {
  const { t } = useLanguage();

  return (
    <Section className="min-h-[90vh] flex flex-col justify-center relative">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 -z-10" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-purple-500/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 -z-10" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10"
      >
        <div className="flex items-center gap-2 mb-6">
          <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20">
            {t.hero.location}
          </span>
          <span className="px-3 py-1 rounded-full bg-green-500/10 text-green-400 text-sm font-medium border border-green-500/20 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            {t.hero.openToWork}
          </span>
        </div>

        <h1 className="text-7xl md:text-9xl font-display font-bold mb-6 tracking-tight leading-none">
          YIKAI <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-400">LIU</span>
          <span className="text-primary text-6xl md:text-9xl">.</span>
        </h1>

        <h2 className="text-2xl md:text-3xl text-white/80 font-light mb-8 max-w-3xl">
          <span className="font-semibold text-white">{t.hero.role} </span>
          {t.hero.roleDesc}
        </h2>

        <p className="text-lg text-slate-400 max-w-2xl mb-10 leading-relaxed">
          {t.hero.bio}
        </p>

        <div className="flex flex-wrap gap-4 pt-4">
          <PrimaryBtn href="mailto:18547172459@163.com" icon={<FaEnvelope className="w-5 h-5" />}>
            {t.hero.cta}
          </PrimaryBtn>
          <SecondaryBtn href="https://github.com/AllenLiu8888" target="_blank" rel="noopener noreferrer" icon={<FaGithub className="w-5 h-5" />}>
            GitHub
          </SecondaryBtn>
          <SecondaryBtn href="https://www.linkedin.com/in/allen-yikailiu/" target="_blank" rel="noopener noreferrer" icon={<FaLinkedin className="w-5 h-5" />}>
            LinkedIn
          </SecondaryBtn>
          <SecondaryBtn href={resumePdf} target="_blank" rel="noopener noreferrer" icon={<FaFilePdf className="w-5 h-5" />}>
            {t.hero.resume}
          </SecondaryBtn>
        </div>
      </motion.div>
    </Section>
  )
}

const PrimaryBtn = ({ href, children, icon, ...props }) => (
  <a
    href={href}
    {...props}
    className="group flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-full font-medium hover:bg-blue-600 transition-all hover:scale-105 active:scale-95"
  >
    {icon}
    {children}
  </a>
)

const SecondaryBtn = ({ href, children, icon, ...props }) => (
  <a
    href={href}
    {...props}
    className="group flex items-center gap-2 px-6 py-3 bg-white/5 text-white border border-white/10 rounded-full font-medium hover:bg-white/10 hover:border-primary/50 transition-all hover:scale-105 active:scale-95"
  >
    {icon}
    {children}
  </a>
)
