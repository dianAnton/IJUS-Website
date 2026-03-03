import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';

export const Preloader = ({ onComplete }: { onComplete: () => void }) => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timer1 = setTimeout(() => setStep(1), 1800);
    const timer2 = setTimeout(() => setStep(2), 3600);
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-primary text-white origin-top"
      initial={{ y: 0 }}
      animate={{ y: "-100%" }}
      transition={{ duration: 1, ease: [0.76, 0, 0.24, 1], delay: 4 }}
      onAnimationComplete={onComplete}
    >
      <div className="overflow-visible px-4 relative flex items-center justify-center w-full h-full">
        <AnimatePresence mode="wait">
          {step === 0 && (
            <motion.div
              key="ijus"
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -40, opacity: 0 }}
              transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
              className="text-6xl md:text-8xl font-serif italic absolute text-center"
            >
              IJUS
            </motion.div>
          )}
          {step === 1 && (
            <motion.div
              key="welcome"
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -40, opacity: 0 }}
              transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
              className="text-3xl md:text-5xl font-medium absolute text-center"
            >
              Bienvenido a casa
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};
