import React from 'react';
import clsx from 'clsx';
import { motion } from 'framer-motion';

export const BentoGrid = ({ children, className }) => {
  return (
    <div className={clsx("grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[minmax(180px,auto)]", className)}>
      {children}
    </div>
  )
}

export const BentoItem = ({ children, className, colSpan = 1, rowSpan = 1, title }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className={clsx(
        "group bg-card/40 backdrop-blur-md border border-white/10 p-6 rounded-3xl flex flex-col transition-all duration-300 hover:border-primary/30 hover:bg-card/60 hover:shadow-2xl hover:shadow-primary/5",
        colSpan === 2 ? "md:col-span-2" : colSpan === 3 ? "md:col-span-3" : "md:col-span-1",
        rowSpan === 2 ? "md:row-span-2" : "md:row-span-1",
        className
      )}
    >
      {title && (
        <h3 className="text-lg font-medium text-white/50 mb-4 uppercase tracking-wider text-xs">
          {title}
        </h3>
      )}
      {children}
    </motion.div>
  )
}
