/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import SelectedWork from './components/SelectedWork';
import JakobAndSam from './components/JakobAndSam';
import Footer from './components/Footer';

export default function App() {
  return (
    <main className="min-h-screen bg-black">
      {/* Placeholder for the rest of the site above this section */}
      <div className="h-screen flex items-center justify-center text-white text-4xl font-bold bg-zinc-900">
        Hero Section (Scroll Down)
      </div>
      
      <SelectedWork />
      <JakobAndSam />
      <Footer />
    </main>
  );
}
