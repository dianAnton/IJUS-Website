import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-[#002bba] text-white pt-24 pb-8 px-6 md:px-12 font-sans">
      <div className="max-w-[90rem] mx-auto">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 mb-32">
          {/* Logo */}
          <div className="md:col-span-4">
            <a href="/" className="font-serif italic text-6xl font-bold tracking-wider text-white">
              IJUS
            </a>
          </div>

          {/* Menu */}
          <div className="md:col-span-3 flex flex-col gap-4">
            <h4 className="text-white/50 text-sm font-medium mb-2 uppercase tracking-widest">Menú</h4>
            <a href="/" className="text-xl hover:text-white/70 transition-colors">Inicio</a>
            <a href="/#que-esperar" className="text-xl hover:text-white/70 transition-colors">Visítanos</a>
            <a href="/#equipo" className="text-xl hover:text-white/70 transition-colors">Conócenos</a>
            <a href="/#eventos" className="text-xl hover:text-white/70 transition-colors">Eventos</a>
          </div>

          {/* Socials */}
          <div className="md:col-span-3 flex flex-col gap-4">
            <h4 className="text-white/50 text-sm font-medium mb-2 uppercase tracking-widest">Social</h4>
            <a href="https://www.instagram.com/ijus.chile/" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-white/70 transition-colors">Instagram</a>
            <a href="https://web.facebook.com/ijusinternacional/" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-white/70 transition-colors">Facebook</a>
            <a href="https://www.youtube.com/@IJUS_CHILE" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-white/70 transition-colors">YouTube</a>
          </div>

          {/* Contacto / Legal */}
          <div className="md:col-span-2 flex flex-col gap-4">
            <h4 className="text-white/50 text-sm font-medium mb-2 uppercase tracking-widest">Contacto</h4>
            <a href="https://wa.me/56963889467" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-white/70 transition-colors">WhatsApp</a>
            <a href="mailto:ijusinternacional12@gmail.com" className="text-xl hover:text-white/70 transition-colors">Email</a>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 pt-8 border-t border-white/20 text-sm">
          <div className="text-white/70">
            © 2026 | Iglesia Jesucristo Único Salvador
          </div>

          <div className="hidden md:flex gap-4 text-white/70">
            <a href="#" className="hover:text-white transition-colors">Privacidad</a>
            <span>|</span>
            <a href="#" className="hover:text-white transition-colors">Términos</a>
          </div>

          {/* Mobile Badge */}
          <div className="md:hidden w-full flex justify-between items-center">
            <div className="text-white/70">© 2026 | IJUS</div>
          </div>
        </div>
      </div>
    </footer>
  );
}
