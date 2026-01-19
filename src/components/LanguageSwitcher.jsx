import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Globe } from 'lucide-react';
import { motion } from 'framer-motion';

export const LanguageSwitcher = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={toggleLanguage}
      className="fixed top-6 right-6 z-50 flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-full text-white hover:bg-white/10 transition-colors"
    >
      <Globe className="w-4 h-4" />
      <span className="text-sm font-medium w-6 text-center">
        {language === 'en' ? 'CN' : 'EN'}
      </span>
    </motion.button>
  );
};
