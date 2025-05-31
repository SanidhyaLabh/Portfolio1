import React from 'react';
import { motion } from 'framer-motion';

type SkillNodeProps = {
  name: string;
  icon: React.ReactNode;
  level: number; // 1-5
  description: string;
  isActive: boolean;
  onClick: () => void;
};

const SkillNode: React.FC<SkillNodeProps> = ({
  name,
  icon,
  level,
  description,
  isActive,
  onClick,
}) => {
  // Define colors based on the level
  const getBorderColor = () => {
    const colors = [
      'border-gray-500',
      'border-electric-blue',
      'border-neon-pink',
      'border-warning',
      'border-success'
    ];
    return colors[level - 1] || colors[0];
  };

  return (
    <div className="flex flex-col items-center">
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className={`tech-tree-node ${getBorderColor()} ${isActive ? 'active' : ''} cursor-pointer`}
        onClick={onClick}
      >
        <div className="flex flex-col items-center justify-center">
          <div className="text-2xl mb-1">{icon}</div>
          <div className="flex">
            {Array.from({ length: 5 }).map((_, i) => (
              <div 
                key={i} 
                className={`w-1 h-1 mx-0.5 rounded-full ${i < level ? 'bg-electric-blue' : 'bg-gray-600'}`}
              />
            ))}
          </div>
        </div>
      </motion.div>
      
      <p className="mt-2 text-center text-xs font-heading text-electric-blue">{name}</p>
      
      {isActive && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-2 p-3 bg-dark-space border border-electric-blue rounded-md w-full max-w-xs"
        >
          <h4 className="text-sm font-heading text-electric-blue mb-1">{name} - Level {level}</h4>
          <p className="text-xs text-gray-300">{description}</p>
        </motion.div>
      )}
    </div>
  );
};

export default SkillNode;