import { motion } from 'motion/react';
import { AnimatedText } from './AnimatedText';
import { useState } from 'react';
import { cn } from '../utils/cn';

const ministries = [
  { name: 'Jóvenes', desc: 'Generación de cambio', year: '2026', image: 'https://images.unsplash.com/photo-1523580494112-071dcb849a1d?q=80&w=2070&auto=format&fit=crop' },
  { name: 'Niños', desc: 'El futuro de la iglesia', year: '2026', image: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?q=80&w=2000&auto=format&fit=crop' },
  { name: 'Adoración', desc: 'Conectando con Dios', year: '2026', image: 'https://images.unsplash.com/photo-1510590337019-5ef8d3d32116?q=80&w=2070&auto=format&fit=crop' },
  { name: 'Matrimonios', desc: 'Familias fuertes', year: '2026', image: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=2070&auto=format&fit=crop' },
];

export const Ministries = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-24 md:py-40 px-6 md:px-12 bg-primary text-white" id="ministerios">
      <div className="max-w-screen-2xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
          <div className="flex items-start gap-2">
            <AnimatedText text="Ministerios" className="text-4xl md:text-5xl font-medium" />
            <span className="text-sm uppercase tracking-widest mt-2">04</span>
          </div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-sm text-sm md:text-base opacity-80"
          >
            Ayudamos a cada miembro de la familia a crecer en su relación con Dios a través de nuestros diferentes ministerios.
          </motion.p>
        </div>
        
        <div className="flex flex-col relative">
          {ministries.map((item, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group border-t border-white/20 py-8 md:py-12 flex flex-col md:flex-row justify-between items-start md:items-center cursor-pointer relative z-10"
            >
              <div className="flex items-center gap-8 md:gap-16 w-full md:w-auto">
                <h3 className="text-4xl md:text-6xl font-medium transition-transform duration-500 group-hover:translate-x-4">{item.name}</h3>
                <div className={cn(
                  "hidden md:block w-64 h-40 rounded-lg overflow-hidden absolute left-1/2 -translate-x-1/2 transition-all duration-500 pointer-events-none",
                  hoveredIndex === i ? "opacity-100 scale-100" : "opacity-0 scale-95"
                )}>
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="flex items-center justify-between w-full md:w-auto md:gap-24 mt-4 md:mt-0">
                <span className="text-sm md:text-base opacity-80">{item.desc}</span>
                <span className="text-sm md:text-base opacity-80">{item.year}</span>
              </div>
            </motion.div>
          ))}
          <div className="border-t border-white/20" />
        </div>
      </div>
    </section>
  );
};
