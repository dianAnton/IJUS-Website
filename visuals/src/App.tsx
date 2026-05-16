import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import { SmoothScroll } from './components/SmoothScroll';
import { Navbar } from './components/Navbar';
import MVPFooter from './components/MVPFooter';
import { VisitModal } from './components/VisitModal';
import Home from './pages/Home';
import Novedades from './pages/Novedades';
import { AuthProvider } from './lib/AuthContext';
import { ProtectedRoute } from './components/ProtectedRoute';
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';

function PublicLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <MVPFooter />
      <VisitModal />
    </>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <SmoothScroll>
          <div className="bg-light min-h-screen font-sans text-dark selection:bg-primary selection:text-white">
            <Routes>
              {/* Rutas Públicas */}
              <Route element={<PublicLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/novedades" element={<Novedades />} />
              </Route>

              {/* Rutas Administrativas */}
              <Route path="/admin/login" element={<AdminLogin />} />
              <Route element={<ProtectedRoute />}>
                <Route path="/admin/dashboard" element={<AdminDashboard />} />
              </Route>
            </Routes>
          </div>
        </SmoothScroll>
      </BrowserRouter>
    </AuthProvider>
  );
}
