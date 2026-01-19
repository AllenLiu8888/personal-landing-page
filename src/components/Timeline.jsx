import { motion } from 'framer-motion';

const TimelineItem = ({ item, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0.6, ease: "easeOut" }
      }}
      viewport={{ amount: 0.6 }} // Trigger when 60% visible
      className="md:snap-center min-h-[60vh] md:h-screen flex flex-col justify-center pl-8 md:pl-12 group relative py-16 md:py-10"
    >
      {/* Dot */}
      <motion.div
        className="absolute -left-[5px] md:-left-[9px] top-1/2 transform -translate-y-1/2 h-4 w-4 md:h-6 md:w-6 rounded-full border-4 border-dark bg-slate-600 group-hover:bg-primary transition-colors z-20 shadow-[0_0_15px_rgba(59,130,246,0.5)]"
      />

      {/* Content */}
      <div className="max-w-4xl">
        <div className="flex flex-col sm:flex-row sm:items-baseline gap-4 mb-6">
          <span className="text-primary font-mono text-xl md:text-2xl font-bold tracking-wider">{item.date}</span>
        </div>

        <h3 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">{item.role}</h3>

        {item.company && <p className="text-xl md:text-2xl text-slate-400 font-medium mb-8">@ {item.company}</p>}

        {item.location && <p className="text-slate-500 text-lg mb-6">{item.location}</p>}

        <ul className="list-none text-slate-400 space-y-4 ml-1">
          {item.description.map((desc, i) => {
            if (typeof desc === 'object' && desc.text) {
              return (
                <li key={i} className="text-lg md:text-xl leading-relaxed">
                  <span className="block mb-2 text-slate-300" dangerouslySetInnerHTML={{
                    __html: desc.text.replace(/\*\*(.*?)\*\*/g, '<span class="text-white font-bold text-shadow-sm">$1</span>')
                  }} />
                  {desc.sub && desc.sub.length > 0 && (
                    <ul className="list-disc list-outside ml-6 space-y-2 mt-3 text-slate-400/80 text-base md:text-lg">
                      {desc.sub.map((subItem, j) => (
                        <li key={j} dangerouslySetInnerHTML={{
                          __html: subItem.replace(/\*\*(.*?)\*\*/g, '<span class="text-slate-200 font-medium">$1</span>')
                        }} />
                      ))}
                    </ul>
                  )}
                </li>
              )
            }
            return (
              <li key={i} className="text-lg md:text-xl leading-relaxed pl-6 relative before:content-['•'] before:absolute before:left-0 before:text-primary before:text-2xl">
                {desc}
              </li>
            )
          })}
        </ul>
      </div>
    </motion.div>
  );
};

export const Timeline = ({ items }) => {
  return (
    <div className="relative border-l-2 border-white/10 ml-4 md:ml-10">
      {items.map((item, index) => (
        <TimelineItem key={index} item={item} index={index} />
      ))}
    </div>
  )
}
