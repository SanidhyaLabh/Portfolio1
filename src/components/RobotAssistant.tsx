import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { HelpCircle } from 'lucide-react';

const RobotAssistant = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [message, setMessage] = useState('');
  const [isWaving, setIsWaving] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Show the assistant after 3 seconds
    const timer = setTimeout(() => {
      setIsVisible(true);
      setMessage('Hello! Need help navigating the cosmic code garage?');
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isWaving) {
      const timer = setTimeout(() => {
        setIsWaving(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [isWaving]);

  const handleMouseEnter = () => {
    setIsWaving(true);
    setMessage('Hello there! Click me for assistance!');
  };

  const handleClick = () => {
    // Cycle through different messages
    const messages = [
      'Use the Konami code for a surprise! (↑↑↓↓←→←→BA)',
      'Check out my projects in the spaceship control panels!',
      'My skills are visualized as robot upgrades!',
      'My resume is styled as a Robotic Operating Manual!',
      'Want to contact me? The form submission has a cool beam-up animation!'
    ];
    
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    setMessage(randomMessage);
  };

  // Update position randomly within constraints
  useEffect(() => {
    const moveInterval = setInterval(() => {
      if (Math.random() > 0.7) { // Only move 30% of the time
        setPosition({
          x: Math.random() * 20 - 10,
          y: Math.random() * 20 - 10
        });
      }
    }, 3000);
    
    return () => clearInterval(moveInterval);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-24 right-4 z-30">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ 
          opacity: 1, 
          y: 0,
          x: position.x,
          y: position.y
        }}
        transition={{ 
          type: "spring",
          stiffness: 100,
          damping: 10
        }}
        className="flex flex-col items-end"
      >
        {message && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mb-2 p-3 bg-electric-blue text-space rounded-lg rounded-br-none max-w-xs shadow-glow-blue"
          >
            <p className="text-sm font-body">{message}</p>
          </motion.div>
        )}
        
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="w-14 h-14 bg-neon-pink rounded-full flex items-center justify-center cursor-pointer shadow-glow-pink"
          onMouseEnter={handleMouseEnter}
          onClick={handleClick}
        >
          <div className="relative">
            {/* Robot face */}
            <div className="w-10 h-10 bg-space rounded-full flex items-center justify-center overflow-hidden border-2 border-electric-blue">
              <div className="flex space-x-1">
                {/* Robot eyes */}
                <div className={`w-2 h-2 rounded-full bg-electric-blue ${isWaving ? 'animate-pulse-slow' : ''}`}></div>
                <div className={`w-2 h-2 rounded-full bg-electric-blue ${isWaving ? 'animate-pulse-slow' : ''}`}></div>
              </div>
            </div>
            
            {/* Robot arm waving */}
            {isWaving && (
              <motion.div
                initial={{ rotate: -20 }}
                animate={{ rotate: 40 }}
                transition={{ repeat: 4, duration: 0.3, repeatType: "reverse" }}
                className="absolute top-5 -left-3 w-4 h-1 bg-electric-blue rounded-full origin-right"
              />
            )}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default RobotAssistant;