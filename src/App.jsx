import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Work from './components/Work';
import About from './components/About';
import Skills from './components/Skills';
import POR from './components/POR';
import Contact from './components/Contact';
import Blog from './pages/Blog';
import ProjectPage from './pages/ProjectPage';

function App() {
  return (
    <div className="bg-white min-h-screen selection:bg-black selection:text-white bg-grid">
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <About />
            <Work />
            <Skills />
            <POR />
            <Contact />
          </>
        } />
        <Route path="/blog" element={<Blog />} />
        <Route path="/project/:slug" element={<ProjectPage />} />
      </Routes>
    </div>
  );
}

export default App;
