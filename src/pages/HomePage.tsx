import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Monitor, Bot, Code, Lightbulb } from 'lucide-react';
import { Link } from 'react-router-dom';
import HeroSection from '../components/HeroSection';

const HomePage: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <HeroSection />
      
      {/* About Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-heading text-electric-blue mb-6">About The Cosmic Coder</h2>
            <div className="h-1 w-24 bg-neon-pink mx-auto mb-8"></div>
            <p className="text-lg text-gray-300 mb-6">
              Hi, I'm Sanidhya Labh, a CSE freshman passionate about Frontend Development and Robotics.
              My mission is to build interfaces that are not only visually stunning but also intuitive and accessible.
            </p>
            <p className="text-lg text-gray-300">
              When I'm not coding, you'll find me tinkering with robots, designing 3D models, or playing music.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Monitor className="text-electric-blue\" size={36} />,
                title: "UI/UX Design",
                description: "Creating intuitive and engaging user interfaces with Figma and Canva"
              },
              {
                icon: <Code className="text-electric-blue" size={36} />,
                title: "Frontend Dev",
                description: "Building responsive web applications with modern frameworks"
              },
              {
                icon: <Bot className="text-electric-blue\" size={36} />,
                title: "Robotics",
                description: "Designing and programming robotic systems for real-world applications"
              },
              {
                icon: <Lightbulb className="text-electric-blue" size={36} />,
                title: "IoT Solutions",
                description: "Connecting devices to create smart, integrated systems"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-dark-space p-6 rounded-lg border border-electric-blue shadow-glow-blue"
              >
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-xl font-heading text-electric-blue mb-2">{item.title}</h3>
                <p className="text-gray-300">{item.description}</p>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <Link to="/skills" className="btn btn-primary inline-flex items-center">
              Explore My Skills
              <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* Featured Projects Section */}
      <section className="py-20 bg-dark-space">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-heading text-electric-blue mb-6">Featured Projects</h2>
            <div className="h-1 w-24 bg-neon-pink mx-auto mb-8"></div>
            <p className="text-lg text-gray-300">
              Check out some of my recent work from the Cosmic Code Garage
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "LexiRead",
                description: "A web application designed to provide accessible reading experiences for Dyslexic patients.",
                image: "https://s3.ezgif.com/tmp/ezgif-384d5449aefc9.jpg",
                tags: ["HTML", "CSS", "Figma", "Accessibility"]
              },
              {
                title: "The Last Call",
                description: "AR video game featuring custom 3D character models and immersive gameplay.",
                image: "https://images.pexels.com/photos/7915357/pexels-photo-7915357.jpeg?auto=compress&cs=tinysrgb&w=800",
                tags: ["Blender", "3D Design", "UI/UX", "Game Dev"]
              },
              {
                title: "AI Exoskeleton",
                description: "Rehabilitation exoskeleton system combining AI and robotics for physiotherapy.",
                image: "https://s3.ezgif.com/tmp/ezgif-340f34513ebb2.png",
                tags: ["Robotics", "AI", "Healthcare", "In Progress"]
              }
            ].map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="control-panel"
              >
                <div className="relative overflow-hidden mb-4 rounded-md bg-space border border-electric-blue">
                  <div className="absolute top-0 left-0 w-full h-8 bg-space border-b border-electric-blue flex items-center px-3">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 rounded-full bg-error"></div>
                      <div className="w-3 h-3 rounded-full bg-warning"></div>
                      <div className="w-3 h-3 rounded-full bg-success"></div>
                    </div>
                  </div>
                  
                  <div className="pt-8">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-48 object-cover object-center"
                    />
                  </div>
                </div>
                
                <h3 className="text-xl font-heading text-electric-blue mb-2">{project.title}</h3>
                
                <p className="text-gray-300 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span 
                      key={i} 
                      className="px-2 py-1 bg-space text-electric-blue text-xs rounded-md border border-electric-blue"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <Link to="/projects" className="btn btn-primary inline-flex items-center">
              View All Projects
              <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* Contact CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center circuit-border p-8 md:p-12">
            <h2 className="text-3xl font-heading text-electric-blue mb-6">Ready to collaborate?</h2>
            <p className="text-lg text-gray-300 mb-8">
              Let's build something extraordinary together. Whether you have a project in mind or just want to connect, I'd love to hear from you!
            </p>
            <Link to="/contact" className="btn btn-secondary inline-flex items-center">
              Contact Me
              <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default HomePage;