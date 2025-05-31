import React, { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import RobotAssistant from './components/RobotAssistant';
import KonamiCodeDetector from './components/KonamiCodeDetector';
import BackgroundStars from './components/BackgroundStars';

// Pages
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import SkillsPage from './pages/SkillsPage';
import ResumePage from './pages/ResumePage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';

// Context
import { ThemeProvider } from './context/ThemeContext';

function App() {
  const location = useLocation();
  const [showDanceParty, setShowDanceParty] = useState(false);

  const handleKonamiCode = () => {
    setShowDanceParty(true);
    setTimeout(() => setShowDanceParty(false), 5000);
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col">
        <BackgroundStars />
        <Navbar />
        
        <main className="flex-grow">
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<HomePage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/skills" element={<SkillsPage />} />
              <Route path="/resume" element={<ResumePage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </AnimatePresence>
        </main>
        
        <KonamiCodeDetector onKonamiCode={handleKonamiCode} />
        
        {showDanceParty && (
          <div className="fixed inset-0 flex items-center justify-center bg-space bg-opacity-90 z-50">
            <div className="text-center">
              <h2 className="text-neon-pink mb-4">🤖 ROBOT DANCE PARTY! 🤖</h2>
              <div className="flex justify-center space-x-8">
                {[1, 2, 3].map((i) => (
                  <div 
                    key={i} 
                    className="animate-bounce" 
                    style={{
                      animationDuration: `${0.5 + (i * 0.2)}s`,
                      animationDelay: `${i * 0.1}s`
                    }}
                  >
                    <div className="text-7xl">🤖</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
        
        <RobotAssistant />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;