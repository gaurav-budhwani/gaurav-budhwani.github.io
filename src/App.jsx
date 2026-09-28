import { Routes, Route, useLocation } from 'react-router-dom';
import React, { useEffect, Suspense } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Work from './components/Work';
import Publications from './components/Publications';
import About from './components/About';
import Skills from './components/Skills';
import POR from './components/POR';
import Contact from './components/Contact';

const Blog = React.lazy(() => import('./pages/Blog'));
const ProjectPage = React.lazy(() => import('./pages/ProjectPage'));

function App() {
  const location = useLocation();

  useEffect(() => {
    // Check if we have a hash or state to scroll to
    if (location.state && location.state.scrollTo) {
      const element = document.getElementById(location.state.scrollTo);
      if (element) {
        // Small timeout ensures DOM is ready
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  return (
    <div className="bg-white min-h-screen selection:bg-black selection:text-white bg-grid">
      <Navbar />
      <Suspense fallback={<div className="flex h-screen items-center justify-center">Loading...</div>}>
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <About />
              <Publications />
              <Work />
              <Skills />
              <POR />
              <Contact />
            </>
          } />
          <Route path="/blog" element={<Blog />} />
          <Route path="/project/:slug" element={<ProjectPage />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
