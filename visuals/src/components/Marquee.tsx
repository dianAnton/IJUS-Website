import { motion } from 'motion/react';

export const Marquee = () => {
  return (
    <div className="overflow-hidden whitespace-nowrap py-8 md:py-12 bg-light flex items-center border-y border-black/10">
      <motion.div 
        className="flex gap-8 md:gap-16 items-center text-5xl md:text-8xl font-medium uppercase text-dark"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
      >
        <span>Fe</span>
        <span className="font-serif italic text-primary">&</span>
        <span>Esperanza</span>
        <span className="font-serif italic text-primary">&</span>
        <span>Amor</span>
        <span className="font-serif italic text-primary">&</span>
        <span>Fe</span>
        <span className="font-serif italic text-primary">&</span>
        <span>Esperanza</span>
        <span className="font-serif italic text-primary">&</span>
        <span>Amor</span>
        <span className="font-serif italic text-primary">&</span>
      </motion.div>
    </div>
  );
};
