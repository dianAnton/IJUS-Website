import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { supabase } from '../lib/supabase';
import { Link } from 'react-router-dom';

export default function SelectedWork() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [events, setEvents] = useState<any[]>([]);

  useEffect(() => {
    async function fetchEvents() {
      const { data, error } = await supabase
        .from('event')
        .select('*')
        .order('date', { ascending: true });

      if (error) {
        console.error('Error fetching events:', error);
      } else {
        if (data && data.length > 0) {
          const formattedEvents = data.map((evt: any) => {
            const d = new Date(evt.date);
            const days = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];

            return {
              id: evt.id,
              title: evt.title,
              category: days[d.getDay()],
              year: d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
              image: evt.image_url || '/ijus-noticias-eventos-placeholder.png'
            };
          });
          setEvents(formattedEvents);
        } else {
          // Fallback placeholders si la BD está vacía
          setEvents([
            {
              id: 1,
              title: 'Próximamente',
              category: 'Por definir',
              year: 'Por definir',
              image: '/ijus-noticias-eventos-placeholder.png',
            },
            {
              id: 2,
              title: 'Próximamente',
              category: 'Por definir',
              year: 'Por definir',
              image: '/ijus-noticias-eventos-placeholder.png',
            },
            {
              id: 3,
              title: 'Próximamente',
              category: 'Por definir',
              year: 'Por definir',
              image: '/ijus-noticias-eventos-placeholder.png',
            }
          ]);
        }
      }
    }

    fetchEvents();
  }, []);

  return (
    <section className="bg-primary text-white py-24 px-6 md:px-12 w-full min-h-screen font-sans overflow-hidden" id="eventos">
      <div className="max-w-[120rem] mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-start justify-between mb-24 gap-8">
          <h2 className="text-5xl md:text-[4.5rem] font-medium tracking-tight flex items-start">
            Eventos y Noticias
          </h2>
          <p className="text-xl md:text-2xl max-w-xl opacity-90 leading-snug font-light md:mt-4">
            Mantente informado sobre lo que sucede en nuestra casa. Te invitamos a ser parte de todas nuestras actividades.
          </p>
        </div>

        {/* Desktop List */}
        <div className="hidden md:block border-b border-light/20">
          {events.map((event) => (
            <motion.a
              href={`#evento-${event.id}`}
              onClick={(e) => {
                e.preventDefault();
                setSelectedImage(event.image);
              }}
              key={event.id}
              initial="initial"
              whileHover="hover"
              variants={{
                initial: { color: "#ffffff" },
                hover: { color: "#001a4d" }
              }}
              className="group relative border-t border-light/20 py-16 flex flex-col items-center justify-center cursor-pointer z-10 block"
            >
              {/* Background Hover Effect (Animacion blanca) */}
              <motion.div
                variants={{
                  initial: { scaleY: 0 },
                  hover: { scaleY: 1 }
                }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0 bg-white origin-bottom -z-10"
              />

              {/* Title & Inline Image */}
              <div className="flex items-center justify-center relative z-30 px-4 md:px-12 lg:px-24 max-w-full w-full">
                <motion.h3
                  variants={{
                    initial: { scale: 1 },
                    hover: { scale: 1.02 }
                  }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="text-4xl lg:text-5xl xl:text-6xl leading-tight font-serif italic tracking-tight whitespace-nowrap truncate pb-2"
                >
                  {event.title}
                </motion.h3>

                <motion.div
                  variants={{
                    initial: { width: 0, opacity: 0, marginLeft: 0 },
                    hover: { width: 'var(--hover-img-w, 180px)', opacity: 1, marginLeft: 'var(--hover-img-ml, 1.5rem)' }
                  }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden rounded-xl flex-shrink-0 lg:[--hover-img-w:120px] xl:[--hover-img-w:180px] lg:[--hover-img-ml:1.5rem] xl:[--hover-img-ml:2rem]"
                >
                  <motion.img
                    variants={{
                      initial: { scale: 1.2 },
                      hover: { scale: 1 }
                    }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    src={event.image}
                    alt={event.title}
                    className="w-[var(--hover-img-w,180px)] h-[80px] xl:h-[120px] object-cover rounded-xl max-w-none shadow-2xl"
                    referrerPolicy="no-referrer"
                  />
                </motion.div>
              </div>

              {/* Meta info (Category, Year) - absolutely positioned on the sides */}
              <div className="absolute left-8 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 font-sans text-xl font-light z-40">
                {event.category}
              </div>
              <div className="absolute right-8 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 font-sans text-xl font-light text-right z-40">
                {event.year}
              </div>
            </motion.a>
          ))}
        </div>

        {/* Mobile List */}
        <div className="md:hidden flex flex-col">
          {events.map((event) => (
            <a
              href={`#evento-${event.id}`}
              onClick={(e) => {
                e.preventDefault();
                setSelectedImage(event.image);
              }}
              key={event.id}
              className="flex flex-col py-10 border-t border-light/20 group relative overflow-hidden"
            >
              {/* Mobile Animacion Blanca */}
              <div className="absolute inset-0 bg-white origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-500 ease-out -z-10" />

              <div className="flex flex-col items-center justify-center mb-8 text-center group-hover:text-primary transition-colors duration-500 px-4">
                <h3 className="text-3xl sm:text-4xl leading-tight font-serif italic tracking-tight break-words hyphens-auto pb-2">{event.title}</h3>
                <span className="text-xs opacity-70 uppercase tracking-widest mt-4">
                  {event.category} - {event.year}
                </span>
              </div>

              <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  referrerPolicy="no-referrer"
                />
              </div>
            </a>
          ))}

        </div>

        {/* View All Button */}
        <div className="mt-16 md:mt-24 flex justify-center">
          <Link
            to="/novedades"
            className="group relative inline-flex items-center gap-3 bg-white text-primary px-8 py-4 rounded-full font-serif italic text-xl md:text-2xl hover:bg-light transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1"
          >
            <span>Ver todas las novedades</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-70 group-hover:translate-x-1 transition-transform"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
          </Link>
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-dark/80 backdrop-blur-md p-4 md:p-12 cursor-pointer"
          >
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              src={selectedImage}
              alt="Evento Expandido"
              className="max-w-full max-h-full rounded-2xl shadow-2xl object-contain"
            />
            {/* Close button */}
            <button className="absolute top-6 right-6 text-white bg-black/40 hover:bg-black/80 rounded-full p-3 backdrop-blur-sm transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
