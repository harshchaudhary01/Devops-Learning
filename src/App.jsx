import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { ScrollProgress, ScrollToTop } from './components/ScrollUtils';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import LearningPage from './pages/LearningPage';
import ContactPage from './pages/ContactPage';
import TechPage from './pages/TechPage';

// Scroll to top on route change
function RouteScrollReset() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function AppLayout({ darkMode, setDarkMode }) {
  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="min-h-screen bg-surface-900 text-slate-100 flex flex-col">
        <ScrollProgress />
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/learning" element={<LearningPage />} />
            <Route path="/learning/:id" element={<TechPage />} />
            <Route path="/contact" element={<ContactPage />} />
            {/* Catch-all */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
        <ScrollToTop />
      </div>
    </div>
  );
}

function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      <div className="text-7xl mb-6">🚀</div>
      <h1 className="font-display font-extrabold text-5xl text-white mb-4">404</h1>
      <p className="text-slate-400 text-lg mb-8">This page doesn't exist yet — but your DevOps career does!</p>
      <a href="/" className="btn-primary">Go Home</a>
    </div>
  );
}

export default function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <BrowserRouter>
      <RouteScrollReset />
      <AppLayout darkMode={darkMode} setDarkMode={setDarkMode} />
    </BrowserRouter>
  );
}
