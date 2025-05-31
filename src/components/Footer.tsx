import React from 'react';
import { Github, Linkedin, Mail, Code } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-dark-space border-t border-electric-blue border-opacity-30 mt-16">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="font-heading text-sm text-electric-blue">
              Made with <span className="text-neon-pink">🤖</span> bolts and <span className="text-neon-pink">&lt;/&gt;</span> tags
            </p>
          </div>
          
          <div className="flex space-x-4 items-center">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-electric-blue hover:text-neon-pink transition-colors duration-300"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://linkedin.com/in/sanidhya-labh139" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-electric-blue hover:text-neon-pink transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="mailto:sanidhyalabh@gmail.com" 
              className="text-electric-blue hover:text-neon-pink transition-colors duration-300"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
        
        <div className="mt-6 pt-6 border-t border-electric-blue border-opacity-20 text-center">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Sanidhya Labh | Cosmic Code Garage
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;