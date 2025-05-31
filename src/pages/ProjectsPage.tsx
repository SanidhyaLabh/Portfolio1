import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';

const ProjectsPage: React.FC = () => {
  const projects = [
    {
      title: "LexiRead",
      description: "A web application aimed at promoting inclusive and accessible reading experiences for Dyslexic patients. Designed the user-friendly front end using HTML, CSS, and Figma for intuitive and responsive interface design.",
      image: "https://s3.ezgif.com/tmp/ezgif-384d5449aefc9.jpg",
      tags: ["HTML", "CSS", "Figma", "Accessibility", "UX Design"],
      githubLink: "https://github.com",
      liveLink: "https://example.com"
    },
    {
      title: "AR Video Game - The Last Call",
      description: "Created a 3D character model using Blender and designed the user interface for a game application, ensuring a cohesive visual experience and intuitive user interaction.",
      image: "https://images.pexels.com/photos/7915357/pexels-photo-7915357.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["Blender", "3D Design", "UI/UX", "Game Dev", "AR"],
      githubLink: "https://github.com",
      liveLink: "https://example.com"
    },
    {
      title: "AI-Powered Exoskeleton",
      description: "Designing an exoskeleton system aimed at assisting rehabilitation and physiotherapy using a combination of AI and basic robotics. Currently in progress.",
      image: "https://s3.ezgif.com/tmp/ezgif-340f34513ebb2.png",
      tags: ["Robotics", "AI", "Healthcare", "Python", "In Progress"],
      githubLink: "https://github.com"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-24 pb-16"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-heading text-electric-blue mb-6">Spaceship Control Panels</h1>
          <div className="h-1 w-24 bg-neon-pink mx-auto mb-8"></div>
          <p className="text-lg text-gray-300">
            Explore my collection of projects from the digital frontier. Each project represents a unique challenge and solution crafted with passion and technical expertise.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              image={project.image}
              tags={project.tags}
              githubLink={project.githubLink}
              liveLink={project.liveLink}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectsPage;