import React from 'react';
import { motion } from 'framer-motion';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Timeline } from './components/Timeline';
import { Section } from './components/Section';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { LanguageSwitcher } from './components/LanguageSwitcher';

const PortfolioContent = () => {
  const { t } = useLanguage();

  const education = [
    {
      date: t.timeline.items.uq.location,
      role: t.timeline.items.uq.role,
      company: t.timeline.items.uq.company,
      location: '',
      description: t.timeline.items.uq.desc
    },
    {
      date: t.timeline.items.nankai.location,
      role: t.timeline.items.nankai.role,
      company: t.timeline.items.nankai.company,
      location: '',
      description: t.timeline.items.nankai.desc
    }
  ];

  const experience = [
    {
      date: t.timeline.items.xpeng.location,
      role: t.timeline.items.xpeng.role,
      company: t.timeline.items.xpeng.company,
      location: '',
      description: t.timeline.items.xpeng.desc
    },
    {
      date: t.timeline.items.studio.location,
      role: t.timeline.items.studio.role,
      company: t.timeline.items.studio.company,
      location: '',
      description: t.timeline.items.studio.desc
    },
    {
      date: t.timeline.items.huien?.location || "2019 - 2021",
      role: t.timeline.items.huien?.role || "市场/销售助理",
      company: t.timeline.items.huien?.company || "惠恩商贸",
      location: '',
      description: t.timeline.items.huien?.desc || []
    }
  ];

  return (
    <div className="bg-dark min-h-screen text-light selection:bg-primary selection:text-white relative md:snap-y md:snap-mandatory md:h-screen md:overflow-y-scroll scroll-smooth">
      <div className="fixed top-0 right-0 z-50">
        <LanguageSwitcher />
      </div>

      <div className="md:snap-start md:h-screen min-h-screen overflow-hidden">
        <Hero />
      </div>

      <div className="md:snap-start min-h-screen flex items-center py-20 md:py-0">
        <About />
      </div>

      <div className="bg-dark relative">
        {/* Experience Section */}
        <div className="md:snap-start min-h-screen relative bg-dark">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true, margin: "-10%" }}
            className="w-full max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-16"
          >
            {/* Title Section (1/4) - Sticky Center */}
            <div className="md:col-span-1 hidden md:block">
              <div className="h-screen sticky top-0 flex flex-col justify-center">
                <h2 className="text-4xl md:text-6xl font-display font-bold flex flex-col gap-2 text-white/90">
                  <span className="text-primary text-lg md:text-xl font-normal tracking-widest uppercase">01.</span>
                  {t.timeline.experience}
                </h2>
              </div>
            </div>
            {/* Mobile Title */}
            <div className="md:hidden pt-24 pb-4">
              <h2 className="text-3xl font-display font-bold flex flex-col gap-2 text-white/90">
                <span className="text-primary text-base font-normal tracking-widest uppercase">01.</span>
                {t.timeline.experience}
              </h2>
            </div>

            {/* Content Section (3/4) */}
            <div className="md:col-span-3 py-10 md:py-0">
              <Timeline items={experience} />
            </div>
          </motion.div>
        </div>

        {/* Education Section */}
        <div className="md:snap-start min-h-screen relative bg-dark">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true, margin: "-10%" }}
            className="w-full max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-16"
          >
            {/* Title Section (1/4) - Sticky Center */}
            <div className="md:col-span-1 hidden md:block">
              <div className="h-screen sticky top-0 flex flex-col justify-center">
                <h2 className="text-4xl md:text-6xl font-display font-bold flex flex-col gap-2 text-white/90">
                  <span className="text-primary text-lg md:text-xl font-normal tracking-widest uppercase">02.</span>
                  {t.timeline.education}
                </h2>
              </div>
            </div>
            {/* Mobile Title */}
            <div className="md:hidden pt-24 pb-4">
              <h2 className="text-3xl font-display font-bold flex flex-col gap-2 text-white/90">
                <span className="text-primary text-base font-normal tracking-widest uppercase">02.</span>
                {t.timeline.education}
              </h2>
            </div>

            {/* Content Section (3/4) */}
            <div className="md:col-span-3 py-10 md:py-0">
              <Timeline items={education} />
            </div>
          </motion.div>
        </div>
      </div>

      <footer className="md:snap-start py-8 text-center text-slate-600 border-t border-white/5">
        <p>{t.footer}</p>
      </footer>
    </div>
  );
};

function App() {
  return (
    <LanguageProvider>
      <PortfolioContent />
    </LanguageProvider>
  );
}

export default App;
