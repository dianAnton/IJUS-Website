import { motion } from "motion/react";
import React from "react";

interface Project {
  name: string;
  type: string;
  year: string;
  status?: string;
  awards?: string[];
  image: string;
}

const AnimatedText = ({ text }: { text: string }) => {
  return (
    <span className="relative inline-flex overflow-hidden group-hover:cursor-pointer">
      {text.split("").map((char, i) => (
        <span key={i} className="relative inline-block">
          <motion.span
            className="inline-block"
            variants={{
              initial: { y: 0 },
              hover: { y: "-100%" }
            }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1], delay: i * 0.015 }}
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
          <motion.span
            className="absolute left-0 top-full inline-block"
            variants={{
              initial: { y: 0 },
              hover: { y: "-100%" }
            }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1], delay: i * 0.015 }}
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        </span>
      ))}
    </span>
  );
};

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

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-6 bg-white/90 backdrop-blur-sm">
      <div className="flex gap-8 text-sm font-medium">
        <a href="#" className="group"><AnimatedText text="Projects" /></a>
        <a href="#" className="group"><AnimatedText text="About" /></a>
        <a href="#" className="group"><AnimatedText text="Pricing" /></a>
        <a href="#" className="group"><AnimatedText text="Community" /></a>
      </div>
      
      <div className="absolute left-1/2 -translate-x-1/2">
        <img src="https://cdn.prod.website-files.com/67fcd4974b30a00d13095550/6819bf4d3f9724f4f5c886ca_logo_blue.svg" alt="Double Play" className="h-6" />
      </div>
      
      <div>
        <button className="group flex items-center gap-3 bg-white border border-gray-200 text-black px-5 py-2.5 rounded-full text-sm font-medium hover:bg-gray-50 transition-colors">
          <AnimatedText text="Contact" />
          <div className="w-4 h-4 relative overflow-hidden rounded-full">
            <motion.div 
              animate={{ rotate: 360 }} 
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              className="w-full h-full border-[1.5px] border-[#002bba]/30 border-t-[#002bba] rounded-full"
            />
          </div>
        </button>
      </div>
    </nav>
  );
};

const ProjectItem = ({ project }: { project: Project }) => {
  return (
    <motion.div
      className="group relative cursor-pointer"
      initial="initial"
      whileHover="hover"
    >
      {/* Top Border Line */}
      <motion.div
        className="absolute top-0 left-0 h-[1px] bg-[#002bba] z-20"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        style={{ originX: 0, width: "100%" }}
      />

      {/* Background fill */}
      <motion.div
        className="absolute inset-0 bg-[#002bba] origin-bottom z-0"
        variants={{
          initial: { scaleY: 0 },
          hover: { scaleY: 1 }
        }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      />
      
      <div className="relative z-10 grid grid-cols-12 gap-8 items-end px-8 py-12 transition-colors duration-500 group-hover:text-white">
        <div className="col-span-5 flex items-center h-20">
          <h2 className="text-[4.5rem] leading-none font-medium tracking-tight shrink-0">{project.name}</h2>
          <motion.div
            className="h-20 rounded-lg overflow-hidden origin-left shrink-0"
            variants={{
              initial: { width: 0, opacity: 0, marginLeft: 0 },
              hover: { width: 140, opacity: 1, marginLeft: 24 }
            }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <img src={project.image} alt={project.name} className="w-full h-full object-cover" />
          </motion.div>
        </div>
        
        <div className="col-span-2 pb-1">
          <p className="text-lg font-medium">{project.type}</p>
        </div>
        
        <div className="col-span-2 pb-1 text-right">
          <p className="text-lg font-medium">{project.year}</p>
        </div>
        
        <div className="col-span-3 pb-1 flex flex-col items-end">
          {project.status ? (
            <p className="text-lg font-medium">{project.status}</p>
          ) : (
            <div className="flex flex-col items-end">
              <span className="font-semibold mb-1 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">Awards</span>
              {project.awards?.map((award, i) => (
                <span key={i} className="text-lg font-medium leading-tight">{award}</span>
              ))}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default function App() {
  const projects: Project[] = [
    {
      name: "Era of Arc",
      type: "Product",
      year: "2026",
      status: "Coming soon",
      image: "https://cdn.prod.website-files.com/67fcd4974b30a00d13095575/697f3cf8098a1b3502de781b_era.jpg"
    },
    {
      name: "Bloomfield",
      type: "Start-up",
      year: "2026",
      status: "Coming soon",
      image: "https://cdn.prod.website-files.com/67fcd4974b30a00d13095575/698ee6dfd7bcdc0a30d58f3b_bloom.jpg"
    },
    {
      name: "Champions",
      type: "Start-up",
      year: "2025",
      awards: ["Awwwards SOTD", "FWA WOTD", "CSSDA WOTD"],
      image: "https://cdn.prod.website-files.com/67fcd4974b30a00d13095575/697f3c59084c35c66bc8286c_Bildschirmfoto%202026-02-01%20um%2012.42.03.png"
    },
    {
      name: "Rasten",
      type: "Real estate",
      year: "2025",
      status: "Coming soon",
      image: "https://cdn.prod.website-files.com/67fcd4974b30a00d13095575/6932c756e67416ab5d430f95_rasten.jpg"
    },
    {
      name: "Heavn",
      type: "Product",
      year: "2024",
      awards: ["Awwwards SOTD", "FWA WOTD", "CSSDA WOTD"],
      image: "https://cdn.prod.website-files.com/67fcd4974b30a00d13095575/68e50e43919cf9f72a3a5bee_heavn.jpg"
    },
    {
      name: "Stryds",
      type: "Start-up",
      year: "2024",
      awards: ["CSSDA WOTD", "Awwwards HM"],
      image: "https://cdn.prod.website-files.com/67fcd4974b30a00d13095575/68e50e6030fb595d4c0f400b_stryds.jpg"
    },
    {
      name: "Heid",
      type: "Real estate",
      year: "2024",
      awards: ["Awwwards HM"],
      image: "https://cdn.prod.website-files.com/67fcd4974b30a00d13095575/6932c62afcc02507fc12d403_heid.jpg"
    },
    {
      name: "HiFi Pro",
      type: "Product",
      year: "2023",
      awards: ["Awwwards HM"],
      image: "https://cdn.prod.website-files.com/67fcd4974b30a00d13095575/68e50e8cf81a428c71f16923_audio_pro.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-[#002bba] selection:text-white">
      {/* Page Transition Overlay */}
      <motion.div
        className="fixed inset-0 bg-[#002bba] z-[100] pointer-events-none"
        initial={{ y: 0 }}
        animate={{ y: "-100%" }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
      />
      
      <Navbar />

      <main className="pt-48 pb-20">
        <section className="px-8 mb-32">
          <div className="grid grid-cols-12 gap-8 items-start">
            <div className="col-span-8 flex items-start gap-6">
              <h1 className="text-[10rem] leading-[0.85] font-medium tracking-tighter">
                <RevealText text="Projects" delay={0.4} />
              </h1>
              <motion.img 
                src="https://cdn.prod.website-files.com/67fcd4974b30a00d13095550/685472c3d6909db987360d2a_dep_blue.svg" 
                alt="icon" 
                className="w-20 h-20 mt-6"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.8 }}
              />
            </div>
            <div className="col-span-4 pt-6">
              <motion.p 
                className="text-xl leading-relaxed font-medium text-gray-800"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
              >
                Our work doesn’t just impress our clients – it’s been honored by the international design community with multiple awards.
                <br /><br />
                2x Awwwards Site of the Day. 3x CSSDA Website of the Day. 1x FWA Website of the Day. And we don't plan to stop anytime soon.
              </motion.p>
            </div>
          </div>
        </section>

        <section className="flex flex-col">
          {projects.map((project, index) => (
            <ProjectItem key={index} project={project} />
          ))}
          {/* Bottom border for the last item */}
          <motion.div
            className="h-[1px] bg-[#002bba] w-full"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            style={{ originX: 0 }}
          />
        </section>

        <div className="flex justify-center py-32">
          <motion.div 
            className="w-32 h-32 rounded-full border-[3px] border-[#002bba] flex items-center justify-center"
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          >
            <div className="w-24 h-24 rounded-full border-[2px] border-[#002bba]/50 flex items-center justify-center">
              <div className="w-16 h-16 rounded-full border border-[#002bba]/30" />
            </div>
          </motion.div>
        </div>
      </main>

      <footer className="bg-[#002bba] text-white pt-24 pb-12 px-8">
        <div className="grid grid-cols-12 gap-8 mb-32">
          <div className="col-span-4">
            <img src="https://cdn.prod.website-files.com/67fcd4974b30a00d13095550/6819bf649b401dcaba25fabc_logo_white.svg" alt="Double Play" className="h-8" />
          </div>
          <div className="col-span-2 flex flex-col gap-3">
            <h4 className="text-white/50 mb-2 font-medium">Menu</h4>
            <a href="#" className="hover:underline underline-offset-4">Projects</a>
            <a href="#" className="hover:underline underline-offset-4">About</a>
            <a href="#" className="hover:underline underline-offset-4">Pricing</a>
            <a href="#" className="hover:underline underline-offset-4">Community</a>
          </div>
          <div className="col-span-2 flex flex-col gap-3">
            <h4 className="text-white/50 mb-2 font-medium">Socials</h4>
            <a href="#" className="hover:underline underline-offset-4">Instagram</a>
            <a href="#" className="hover:underline underline-offset-4">LinkedIn</a>
            <a href="#" className="hover:underline underline-offset-4">TikTok</a>
            <a href="#" className="hover:underline underline-offset-4">Awwwards</a>
          </div>
        </div>
        
        <div className="grid grid-cols-12 gap-8 items-center text-sm">
          <div className="col-span-4">
            <p>© 2025 | Double Play GmbH</p>
          </div>
          <div className="col-span-4 flex justify-center">
            <img src="https://cdn.prod.website-files.com/67fcd4974b30a00d13095550/6844257374d0c67269c5dc45_2c2aca64324756f339174ae46f0d5ade_premium_partner_badge_white.png" alt="Partner Badge" className="h-12" />
          </div>
          <div className="col-span-4 text-right">
            <a href="#" className="hover:underline underline-offset-4">Imprint</a> | <a href="#" className="hover:underline underline-offset-4">Privacy Policy</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
