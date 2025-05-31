import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';

const NotFoundPage: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-24 pb-16 flex items-center justify-center"
    >
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ 
            type: "spring",
            stiffness: 260,
            damping: 20
          }}
        >
          <h1 className="text-6xl md:text-8xl font-heading text-electric-blue mb-4">404</h1>
          
          <div className="max-w-lg mx-auto mb-8 relative">
            <div className="w-64 h-64 mx-auto relative">
              {/* Robot */}
              <div className="absolute inset-0">
                <div className="w-48 h-48 bg-dark-space rounded-xl mx-auto border-4 border-electric-blue overflow-hidden relative">
                  {/* Robot face */}
                  <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 flex space-x-8">
                    <div className="w-6 h-6 bg-error rounded-full animate-pulse-slow"></div>
                    <div className="w-6 h-6 bg-warning rounded-full animate-pulse-slow delay-100"></div>
                  </div>
                  
                  <div className="absolute bottom-1/4 left-1/2 transform -translate-x-1/2 w-16 h-4 bg-neon-pink rounded"></div>
                </div>
                
                {/* Robot arms */}
                <div className="absolute top-1/3 left-0 w-12 h-4 bg-electric-blue rounded-full origin-right"
                  style={{ transform: 'rotate(-30deg)' }}
                ></div>
                
                <motion.div 
                  className="absolute top-1/3 right-0 w-12 h-4 bg-electric-blue rounded-full origin-left"
                  animate={{ rotate: [-30, 30, -30] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                ></motion.div>
              </div>
              
              {/* Satellite */}
              <div className="absolute top-0 right-0">
                <div className="w-24 h-6 bg-dark-space border-2 border-neon-pink rounded-lg"></div>
                <motion.div 
                  className="w-12 h-12 border-2 border-neon-pink rounded-full mx-auto mt-2"
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
                >
                  <div className="w-full h-0.5 bg-electric-blue absolute top-1/2 transform -translate-y-1/2"></div>
                  <div className="w-0.5 h-full bg-electric-blue absolute left-1/2 transform -translate-x-1/2"></div>
                </motion.div>
              </div>
            </div>
          </div>
          
          <h2 className="text-2xl font-heading text-neon-pink mb-4">Navigation System Error</h2>
          
          <p className="text-gray-300 mb-8 max-w-md mx-auto">
            It seems your spacecraft has ventured into uncharted territory. This sector of the Cosmic Code Garage doesn't exist or is under construction.
          </p>
          
          <Link to="/" className="btn btn-primary inline-flex items-center">
            <Home size={16} className="mr-2" />
            Return to Base
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default NotFoundPage;