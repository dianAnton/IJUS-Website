import React, { useState, useEffect, useLayoutEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { supabase } from '../lib/supabase';

const RevealText = ({ text, delay = 0 }: { text: string; delay?: number }) => {
    return (
        <div className="overflow-hidden">
            <motion.div
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay }}
            >
                {text}
            </motion.div>
        </div>
    );
};

const ProjectItem: React.FC<{ event: any, onSelectImage: (img: string) => void }> = ({ event, onSelectImage }) => {
    return (
        <motion.div
            className="group relative cursor-pointer"
            initial="initial"
            whileHover="hover"
            onClick={() => onSelectImage(event.image)}
        >
            {/* Top Border Line */}
            <motion.div
                className="absolute top-0 left-0 h-[1px] bg-primary/20 group-hover:bg-transparent z-20 transition-colors duration-500"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                style={{ originX: 0, width: "100%" }}
            />

            {/* Background fill */}
            <motion.div
                className="absolute inset-0 bg-primary origin-bottom z-0"
                variants={{
                    initial: { scaleY: 0 },
                    hover: { scaleY: 1 }
                }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            />

            <div className="relative z-10 grid grid-cols-12 gap-4 md:gap-8 items-end px-4 md:px-8 py-8 md:py-12 transition-colors duration-500 group-hover:text-white">
                <div className="col-span-8 md:col-span-6 flex items-center h-16 md:h-20">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight font-serif italic tracking-tight shrink-0 truncate max-w-full pb-2">{event.title}</h2>
                    <motion.div
                        className="h-20 rounded-lg overflow-hidden origin-left shrink-0 hidden md:block"
                        variants={{
                            initial: { width: 0, opacity: 0, marginLeft: 0 },
                            hover: { width: 140, opacity: 1, marginLeft: 24 }
                        }}
                        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <img src={event.image} alt={event.title} className="w-full h-full object-cover" />
                    </motion.div>
                </div>

                <div className="hidden md:block col-span-2 pb-1 relative z-20">
                    <p className="text-lg font-medium">{event.category}</p>
                </div>

                <div className="hidden md:block col-span-2 pb-1 text-right relative z-20">
                    <p className="text-lg font-medium">{event.dateFormatted}</p>
                </div>

                <div className="col-span-4 md:col-span-2 pb-1 flex flex-col items-end relative z-20">
                    <p className="text-sm sm:text-lg font-medium md:hidden text-right">{event.dateFormatted}</p>
                    <span className="font-semibold mb-1 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden md:block">Ubicación</span>
                    <span className="text-sm md:text-lg font-medium leading-tight text-right hidden md:block group-hover:text-white/80">{event.location}</span>
                </div>
            </div>
        </motion.div>
    );
};

export default function Novedades() {
    const [events, setEvents] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    useLayoutEffect(() => {
        window.scrollTo(0, 0);
    }, []);

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
                        const months = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];

                        return {
                            id: evt.id,
                            title: evt.title,
                            category: days[d.getDay()],
                            dateFormatted: `${d.getDate()} ${months[d.getMonth()]} - ${d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`,
                            location: evt.location || 'Constantino 104',
                            image: evt.image_url || '/ijus-noticias-eventos-placeholder.png'
                        };
                    });
                    setEvents(formattedEvents);
                }
            }
            setLoading(false);
        }

        fetchEvents();
    }, []);

    return (
        <div className="min-h-screen bg-light text-dark font-sans selection:bg-primary selection:text-white pt-32">
            {/* Page Transition Overlay */}
            <motion.div
                className="fixed inset-0 bg-primary z-[100] pointer-events-none"
                initial={{ y: 0 }}
                animate={{ y: "-100%" }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            />

            <main className="pb-20">
                <section className="px-6 md:px-12 mb-20 md:mb-32 max-w-[90rem] mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                        <div className="md:col-span-8 flex flex-col items-start gap-4">
                            <span className="text-primary font-semibold uppercase tracking-widest text-sm">Calendario General</span>
                            <h1 className="text-6xl md:text-[8rem] leading-[0.9] font-medium tracking-tighter">
                                <RevealText text="Novedades" delay={0.4} />
                            </h1>
                        </div>
                        <div className="md:col-span-4 pt-2 md:pt-12">
                            <motion.p
                                className="text-lg md:text-xl leading-relaxed font-light opacity-80"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
                            >
                                Explora el plan completo para los próximos meses. Todas las vigilias, estudios bíblicos, reuniones de jóvenes y eventos especiales de nuestra iglesia en un solo lugar.
                                <br /><br />
                                Jesucristo Único Salvador.
                            </motion.p>
                        </div>
                    </div>
                </section>

                <section className="flex flex-col max-w-[90rem] mx-auto">
                    {events.length > 0 ? events.map((event, index) => (
                        <ProjectItem key={index} event={event} onSelectImage={setSelectedImage} />
                    )) : (
                        !loading && (
                            <div className="py-20 text-center text-dark/50 font-light">
                                Aún no hay eventos programados. Vuelve pronto.
                            </div>
                        )
                    )}
                    {/* Bottom border for the last item */}
                    {events.length > 0 && (
                        <motion.div
                            className="h-[1px] bg-primary/20 w-full"
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                            style={{ originX: 0 }}
                        />
                    )}
                </section>

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
            </main>
        </div>
    );
}
