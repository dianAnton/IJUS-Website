import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { SmoothScroll } from './components/SmoothScroll';
import { Navbar } from './components/Navbar';
import MVPFooter from './components/MVPFooter';
import { VisitModal } from './components/VisitModal';
import Home from './pages/Home';
import Novedades from './pages/Novedades';

export default function App() {
  return (
    <BrowserRouter>
      <SmoothScroll>
        <div className="bg-light min-h-screen font-sans text-dark selection:bg-primary selection:text-white">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/novedades" element={<Novedades />} />
          </Routes>
          <MVPFooter />
        </div>
        <VisitModal />
      </SmoothScroll>
    </BrowserRouter>
  );
}
