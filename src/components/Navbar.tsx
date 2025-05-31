import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Volume2, VolumeX, Rocket } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();
  const { soundEnabled, toggleSound } = useTheme();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Projects', path: '/projects' },
    { name: 'Skills', path: '/skills' },
    { name: 'Resume', path: '/resume' },
    { name: 'Contact', path: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
        scrolled ? 'bg-space bg-opacity-90 shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <Rocket size={24} className="text-electric-blue" />
            <span className="font-heading text-electric-blue text-lg">SL</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-12">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-heading text-sm transition-colors duration-300 ${
                  pathname === link.path
                    ? 'text-neon-pink'
                    : 'text-electric-blue hover:text-neon-pink'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <button
              onClick={toggleSound}
              className="text-electric-blue hover:text-neon-pink transition-colors duration-300"
              aria-label={soundEnabled ? 'Disable sound' : 'Enable sound'}
            >
              {soundEnabled ? <Volume2 size={20} /> : <VolumeX size={20} />}
            </button>
          </nav>

          {/* Mobile Navigation Toggle */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-electric-blue"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-space bg-opacity-95 border-t border-electric-blue"
        >
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`font-heading text-sm py-2 ${
                    pathname === link.path
                      ? 'text-neon-pink'
                      : 'text-electric-blue'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <button
                onClick={toggleSound}
                className="flex items-center text-electric-blue py-2"
                aria-label={soundEnabled ? 'Disable sound' : 'Enable sound'}
              >
                {soundEnabled ? (
                  <>
                    <Volume2 size={20} className="mr-2" /> Sound On
                  </>
                ) : (
                  <>
                    <VolumeX size={20} className="mr-2" /> Sound Off
                  </>
                )}
              </button>
            </nav>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Navbar;