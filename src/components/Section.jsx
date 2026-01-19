import React from 'react';
import clsx from 'clsx';

export const Section = ({ children, className, id }) => {
  return (
    <section id={id} className={clsx("max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24", className)}>
      {children}
    </section>
  );
};
