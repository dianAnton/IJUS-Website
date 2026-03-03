import React from 'react';
import { motion } from 'motion/react';

const projects = [
  {
    id: 1,
    title: 'Era of Arc',
    category: 'Product',
    year: '2026',
    status: 'Coming soon',
    image: 'https://cdn.prod.website-files.com/67fcd4974b30a00d13095575/697f3cf8098a1b3502de781b_era.jpg',
    awards: []
  },
  {
    id: 2,
    title: 'Bloomfield',
    category: 'Start-up',
    year: '2026',
    status: 'Coming soon',
    image: 'https://cdn.prod.website-files.com/67fcd4974b30a00d13095575/698ee6dfd7bcdc0a30d58f3b_bloom.jpg',
    awards: []
  },
  {
    id: 3,
    title: 'Champions',
    category: 'Start-up',
    year: '2025',
    status: 'Coming soon',
    image: 'https://cdn.prod.website-files.com/67fcd4974b30a00d13095575/697f3c59084c35c66bc8286c_Bildschirmfoto%202026-02-01%20um%2012.42.03.png',
    awards: []
  },
  {
    id: 4,
    title: 'Rasten',
    category: 'Real estate',
    year: '2025',
    status: 'Coming soon',
    image: 'https://cdn.prod.website-files.com/67fcd4974b30a00d13095575/6932c756e67416ab5d430f95_rasten.jpg',
    awards: []
  },
  {
    id: 5,
    title: 'Heavn',
    category: 'Product',
    year: '2024',
    status: '',
    image: 'https://cdn.prod.website-files.com/67fcd4974b30a00d13095575/68e50e43919cf9f72a3a5bee_heavn.jpg',
    awards: ['Awwwards SOTD', 'FWA WOTD', 'CSSDA WOTD']
  },
  {
    id: 6,
    title: 'Stryds',
    category: 'Start-up',
    year: '2024',
    status: '',
    image: 'https://cdn.prod.website-files.com/67fcd4974b30a00d13095575/68e50e6030fb595d4c0f400b_stryds.jpg',
    awards: ['CSSDA WOTD', 'Awwwards HM']
  },
  {
    id: 7,
    title: 'HiFi Pro',
    category: 'Product',
    year: '2023',
    status: '',
    image: 'https://cdn.prod.website-files.com/67fcd4974b30a00d13095575/68e50e8cf81a428c71f16923_audio_pro.jpg',
    awards: ['Awwwards HM']
  }
];

export default function SelectedWork() {
  return (
    <section className="bg-[#002bba] text-white py-24 px-6 md:px-12 w-full min-h-screen font-sans overflow-hidden">
      <div className="max-w-[90rem] mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-start justify-between mb-24 gap-8">
          <h2 className="text-5xl md:text-[4.5rem] font-medium tracking-tight flex items-start">
            Selected work
            <sup className="text-xl md:text-2xl ml-2 mt-3 opacity-70">07</sup>
          </h2>
          <p className="text-xl md:text-2xl max-w-xl opacity-90 leading-snug font-light md:mt-4">
            We help ambitious companies, agencies and start-ups around the globe to level up their branding and website game.
          </p>
        </div>

        {/* Desktop List */}
        <div className="hidden md:block border-b border-white/20">
          {projects.map((project) => (
            <motion.a
              href="#"
              key={project.id}
              initial="initial"
              whileHover="hover"
              variants={{
                initial: { color: "#ffffff" },
                hover: { color: "#002bba" }
              }}
              className="group relative border-t border-white/20 py-16 flex flex-col items-center justify-center cursor-pointer z-10 block"
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
              <div className="flex items-center justify-center relative z-30">
                <motion.h3 
                  variants={{
                    initial: { scale: 1 },
                    hover: { scale: 1.02 }
                  }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="text-[5rem] md:text-[6.5rem] leading-none font-serif italic tracking-tight whitespace-nowrap"
                >
                  {project.title}
                </motion.h3>

                <motion.div 
                  variants={{
                    initial: { width: 0, opacity: 0, marginLeft: 0 },
                    hover: { width: '320px', opacity: 1, marginLeft: '2rem' }
                  }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden rounded-xl flex-shrink-0"
                >
                  <motion.img 
                    variants={{
                      initial: { scale: 1.2 },
                      hover: { scale: 1 }
                    }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    src={project.image} 
                    alt={project.title} 
                    className="w-[320px] h-[220px] object-cover rounded-xl max-w-none shadow-2xl"
                    referrerPolicy="no-referrer"
                  />
                </motion.div>
              </div>

              {/* Meta info (Category, Year) - absolutely positioned on the sides */}
              <div className="absolute left-8 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 font-sans text-xl font-light">
                {project.category}
              </div>
              <div className="absolute right-8 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 font-sans text-xl font-light text-right">
                {project.year}
                {project.status && <div className="text-sm mt-1 opacity-70 uppercase tracking-widest">{project.status}</div>}
              </div>
            </motion.a>
          ))}
        </div>

        {/* Mobile List */}
        <div className="md:hidden flex flex-col">
          {projects.map((project) => (
            <a href="#" key={project.id} className="flex flex-col py-10 border-t border-white/20 group relative overflow-hidden">
              {/* Mobile Animacion Blanca */}
              <div className="absolute inset-0 bg-white origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-500 ease-out -z-10" />
              
              <div className="flex flex-col items-center justify-center mb-8 text-center group-hover:text-[#002bba] transition-colors duration-500">
                <h3 className="text-[3.5rem] leading-none font-serif italic tracking-tight">{project.title}</h3>
                <span className="text-xs opacity-70 uppercase tracking-widest mt-4">
                  {project.status || 'Tap to open'}
                </span>
              </div>
              
              <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  referrerPolicy="no-referrer"
                />
              </div>
            </a>
          ))}
          
          <div className="pt-10 text-center">
            <a href="#" className="inline-block border-b border-white/30 pb-1 text-lg font-medium hover:opacity-70 transition-opacity">
              Explore more projects
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
