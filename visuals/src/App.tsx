import { useState, useEffect, useLayoutEffect } from 'react';
import { SmoothScroll } from './components/SmoothScroll';
import { Preloader } from './components/Preloader';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { WhatToExpect } from './components/WhatToExpect';
import { Team } from './components/Team';
import { Connect } from './components/Connect';
import { Impact } from './components/Impact';
import MVPSelectedWork from './components/MVPSelectedWork';
import MVPJakobAndSam from './components/MVPJakobAndSam';
import MVPFooter from './components/MVPFooter';
import { VisitModal } from './components/VisitModal';
import { AnimatePresence } from 'motion/react';

export default function App() {
  const [loading, setLoading] = useState(true);

  // useLayoutEffect runs synchronously before the browser paints
  useLayoutEffect(() => {
    // Prevent browser from restoring scroll position
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }

    // Clear hash from URL immediately before anything renders
    if (window.location.hash) {
      window.history.replaceState(null, '', window.location.pathname + window.location.search);
    }

    // Force scroll to top immediately
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    // Keep forcing scroll to top while loading
    if (loading) {
      document.body.style.overflow = 'hidden';
      window.scrollTo(0, 0);

      // Aggressive scroll lock during loading
      const lockScroll = () => window.scrollTo(0, 0);
      window.addEventListener('scroll', lockScroll);

      return () => {
        window.removeEventListener('scroll', lockScroll);
      };
    } else {
      document.body.style.overflow = '';
    }
  }, [loading]);

  return (
    <SmoothScroll>
      <AnimatePresence mode="wait">
        {loading && <Preloader key="preloader" onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      <div className="bg-light min-h-screen font-sans text-dark selection:bg-primary selection:text-white">
        <Navbar />
        <main>
          <Hero />
          <WhatToExpect />
          <Team />
          <Connect />
          <Impact />
          <MVPSelectedWork />
          <MVPJakobAndSam />
        </main>
        <MVPFooter />
      </div>
      <VisitModal />
    </SmoothScroll>
  );
}
