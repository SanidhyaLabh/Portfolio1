import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Rocket } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection: React.FC = () => {
  const [rocketLaunched, setRocketLaunched] = useState(false);

  const handleRocketLaunch = () => {
    if (!rocketLaunched) {
      setRocketLaunched(true);
      setTimeout(() => setRocketLaunched(false), 2000);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-electric-blue rounded-full filter blur-[100px] opacity-20 animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-neon-pink rounded-full filter blur-[100px] opacity-20 animate-pulse-slow"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading text-electric-blue mb-4">
              Sanidhya Labh
            </h1>
            
            <div className="h-1 w-32 bg-neon-pink mb-6 mx-auto lg:mx-0"></div>
            
            <p className="text-xl text-gray-300 mb-4">
              CSE Undergraduate
            </p>
            
            <p className="text-xl text-gray-300 mb-8">
              Frontend Developer & Robotics Enthusiast crafting digital experiences that are out of this world.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link to="/projects" className="btn btn-primary">
                View Projects
                <ArrowRight size={16} className="ml-2" />
              </Link>
              
              <motion.button 
                className="btn bg-dark-space text-electric-blue border-2 border-electric-blue hover:bg-light-space flex items-center justify-center"
                onClick={handleRocketLaunch}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Rocket 
                  size={18} 
                  className={`mr-2 ${rocketLaunched ? 'animate-rocket' : 'animate-float'}`} 
                />
                Launch Rocket
              </motion.button>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Main robot character */}
              <div className="w-64 h-64 md:w-80 md:h-80 bg-dark-space border-4 border-electric-blue rounded-3xl overflow-hidden shadow-glow-blue relative">
                <div className="absolute top-0 left-0 w-full h-full">
                  {/* Robot face elements */}
                  <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 flex space-x-12">
                    <div className="w-10 h-10 bg-electric-blue rounded-full animate-pulse-slow"></div>
                    <div className="w-10 h-10 bg-electric-blue rounded-full animate-pulse-slow"></div>
                  </div>
                  <div className="absolute bottom-1/4 left-1/2 transform -translate-x-1/2 w-20 h-8 bg-neon-pink rounded-lg"></div>
                  
                  {/* Robot antenna */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="w-4 h-12 bg-electric-blue"></div>
                    <div className="w-8 h-8 bg-neon-pink rounded-full -mt-4 animate-pulse-slow"></div>
                  </div>
                </div>
              </div>
              
              {/* Floating pixels around robot */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-electric-blue animate-float pixelated"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-neon-pink animate-float pixelated" style={{ animationDelay: "1s" }}></div>
              <div className="absolute top-1/3 -left-6 w-4 h-4 bg-success animate-float pixelated" style={{ animationDelay: "1.5s" }}></div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;