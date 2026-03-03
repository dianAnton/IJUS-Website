import { HoverText } from './HoverLink';

export const Footer = () => {
  return (
    <footer className="bg-dark text-white py-16 md:py-24 px-6 md:px-12">
      <div className="max-w-screen-2xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 mb-24">
          <div className="md:col-span-6">
            <h2 className="text-5xl md:text-7xl font-serif italic text-primary">IJUS</h2>
          </div>
          <div className="md:col-span-3">
            <h4 className="text-sm uppercase tracking-widest text-gray-500 mb-6">Menú</h4>
            <ul className="space-y-3 text-base">
              <li><a href="#" className="hover:text-primary transition-colors"><HoverText>Inicio</HoverText></a></li>
              <li><a href="#nosotros" className="hover:text-primary transition-colors"><HoverText>Nosotros</HoverText></a></li>
              <li><a href="#ministerios" className="hover:text-primary transition-colors"><HoverText>Ministerios</HoverText></a></li>
              <li><a href="#contacto" className="hover:text-primary transition-colors"><HoverText>Contacto</HoverText></a></li>
            </ul>
          </div>
          <div className="md:col-span-3">
            <h4 className="text-sm uppercase tracking-widest text-gray-500 mb-6">Social</h4>
            <ul className="space-y-3 text-base">
              <li><a href="#" className="hover:text-primary transition-colors"><HoverText>Instagram</HoverText></a></li>
              <li><a href="#" className="hover:text-primary transition-colors"><HoverText>Facebook</HoverText></a></li>
              <li><a href="#" className="hover:text-primary transition-colors"><HoverText>YouTube</HoverText></a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© 2026 | IJUS Iglesia Jesucristo Unico Salvador</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacidad</a>
            <a href="#" className="hover:text-white transition-colors">Términos</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
