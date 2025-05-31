import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

type ProjectCardProps = {
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubLink?: string;
  liveLink?: string;
};

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  tags,
  githubLink,
  liveLink,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      className="control-panel"
    >
      <div className="relative overflow-hidden mb-4 rounded-md bg-dark-space border border-electric-blue">
        <div className="absolute top-0 left-0 w-full h-8 bg-dark-space border-b border-electric-blue flex items-center px-3">
          <div className="flex space-x-2">
            <div className="w-3 h-3 rounded-full bg-error"></div>
            <div className="w-3 h-3 rounded-full bg-warning"></div>
            <div className="w-3 h-3 rounded-full bg-success"></div>
          </div>
          <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
            <p className="text-xs font-heading text-electric-blue">SPACESHIP CONTROL PANEL</p>
          </div>
        </div>
        
        <div className="pt-8">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-48 object-cover object-center"
          />
        </div>
      </div>
      
      <h3 className="text-xl font-heading text-electric-blue mb-2">{title}</h3>
      
      <p className="text-gray-300 mb-4">{description}</p>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag, index) => (
          <span 
            key={index} 
            className="px-2 py-1 bg-dark-space text-electric-blue text-xs rounded-md border border-electric-blue"
          >
            {tag}
          </span>
        ))}
      </div>
      
      <div className="flex space-x-3">
        {githubLink && (
          <a 
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary text-xs py-2 px-3"
          >
            <Github size={14} className="mr-1" />
            Code
          </a>
        )}
        
        {liveLink && (
          <a 
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary text-xs py-2 px-3"
          >
            <ExternalLink size={14} className="mr-1" />
            Demo
          </a>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard;