import { useState, useEffect, useLayoutEffect } from 'react';
import { Preloader } from '../components/Preloader';
import { Hero } from '../components/Hero';
import { WhatToExpect } from '../components/WhatToExpect';
import { Team } from '../components/Team';
import { Connect } from '../components/Connect';
import { Impact } from '../components/Impact';
import MVPSelectedWork from '../components/MVPSelectedWork';
import MVPJakobAndSam from '../components/MVPJakobAndSam';
import { AnimatePresence } from 'motion/react';

export default function Home() {
    const [loading, setLoading] = useState(true);

    useLayoutEffect(() => {
        if ('scrollRestoration' in history) {
            history.scrollRestoration = 'manual';
        }
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        if (loading) {
            document.body.style.overflow = 'hidden';
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
        <>
            <AnimatePresence mode="wait">
                {loading && <Preloader key="preloader" onComplete={() => setLoading(false)} />}
            </AnimatePresence>
            <main>
                <Hero />
                <WhatToExpect />
                <Team />
                <Connect />
                <Impact />
                <MVPSelectedWork />
                <MVPJakobAndSam />
            </main>
        </>
    );
}
