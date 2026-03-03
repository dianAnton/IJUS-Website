import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

export const ParallaxSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  return (
    <section ref={ref} className="relative h-[80vh] md:h-screen w-full overflow-hidden flex items-center justify-center px-6 md:px-12">
      <motion.div style={{ y }} className="absolute inset-0 z-0 scale-125">
        <img src="https://images.unsplash.com/photo-1438232992991-995b7058bbb3?q=80&w=2073&auto=format&fit=crop" alt="Church" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/50" />
      </motion.div>
      <div className="relative z-10 w-full max-w-screen-2xl mx-auto flex flex-col items-start justify-end h-full pb-24">
        <motion.div 
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="w-full h-[1px] bg-white/30 mb-12 origin-left"
        />
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 w-full">
          <div className="md:col-span-4">
            <motion.h2 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-medium text-white"
            >
              Somos IJUS.
            </motion.h2>
          </div>
          <div className="md:col-span-8">
            <motion.p 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-3xl text-white leading-relaxed"
            >
              Una iglesia apasionada por crear experiencias transformadoras con mensajes claros, adoración genuina y una comunidad unida. Todo entregado con la precisión, energía y dedicación de un amor incondicional.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
};
