import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-[#002bba] text-white pt-24 pb-8 px-6 md:px-12 font-sans">
      <div className="max-w-[90rem] mx-auto">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 mb-32">
          {/* Logo */}
          <div className="md:col-span-4">
            <img 
              src="https://cdn.prod.website-files.com/67fcd4974b30a00d13095550/6819bf649b401dcaba25fabc_logo_white.svg" 
              alt="Double Play Logo" 
              className="h-10"
            />
          </div>

          {/* Menu */}
          <div className="md:col-span-3 flex flex-col gap-4">
            <h4 className="text-white/50 text-sm font-medium mb-2">Menu</h4>
            <a href="/projects" className="text-xl hover:opacity-70 transition-opacity">Projects</a>
            <a href="/about" className="text-xl hover:opacity-70 transition-opacity">About</a>
            <a href="/pricing" className="text-xl hover:opacity-70 transition-opacity">Pricing</a>
            <a href="/community" className="text-xl hover:opacity-70 transition-opacity">Community</a>
          </div>

          {/* Socials */}
          <div className="md:col-span-3 flex flex-col gap-4">
            <h4 className="text-white/50 text-sm font-medium mb-2">Socials</h4>
            <a href="#" className="text-xl hover:opacity-70 transition-opacity">Instagram</a>
            <a href="#" className="text-xl hover:opacity-70 transition-opacity">LinkedIn</a>
            <a href="#" className="text-xl hover:opacity-70 transition-opacity">TikTok</a>
            <a href="#" className="text-xl hover:opacity-70 transition-opacity">Awwwards</a>
          </div>

          {/* Legal (Mobile only, on desktop it's at the bottom) */}
          <div className="md:hidden flex flex-col gap-4">
            <h4 className="text-white/50 text-sm font-medium mb-2">Legal</h4>
            <a href="#" className="text-xl hover:opacity-70 transition-opacity">Imprint</a>
            <a href="#" className="text-xl hover:opacity-70 transition-opacity">Privacy</a>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 pt-8 border-t border-white/20 text-sm">
          <div className="text-white/70">
            © 2025 | Double Play GmbH
          </div>
          
          <div className="hidden md:block">
            <img 
              src="https://cdn.prod.website-files.com/67fcd4974b30a00d13095550/6844257374d0c67269c5dc45_2c2aca64324756f339174ae46f0d5ade_premium_partner_badge_white.png" 
              alt="Webflow Premium Partner" 
              className="h-12"
            />
          </div>

          <div className="hidden md:flex gap-4 text-white/70">
            <a href="#" className="hover:text-white transition-colors">Imprint</a>
            <span>|</span>
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          </div>

          {/* Mobile Badge */}
          <div className="md:hidden w-full flex justify-between items-center">
            <div className="text-white/70">© 2025 | Double Play</div>
            <img 
              src="https://cdn.prod.website-files.com/67fcd4974b30a00d13095550/6844257374d0c67269c5dc45_2c2aca64324756f339174ae46f0d5ade_premium_partner_badge_white.png" 
              alt="Webflow Premium Partner" 
              className="h-8"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
