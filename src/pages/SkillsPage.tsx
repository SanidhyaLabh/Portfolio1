import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SkillNode from '../components/SkillNode';
import { Code, Monitor, Database, Bot, Cpu, Smartphone, PenTool, Music } from 'lucide-react';

const SkillsPage: React.FC = () => {
  const [activeSkill, setActiveSkill] = useState<number | null>(null);

  const skills = [
    {
      id: 1,
      name: "Programming",
      icon: <Code />,
      level: 4,
      description: "Proficient in Python and C++ with experience in building various applications and systems. Strong problem-solving skills and algorithmic thinking."
    },
    {
      id: 2,
      name: "UI/UX Design",
      icon: <Monitor />,
      level: 5,
      description: "Expert in creating user-centered designs using Figma and Canva. Skilled in wireframing, prototyping, and implementing responsive interfaces."
    },
    {
      id: 3,
      name: "Database",
      icon: <Database />,
      level: 3,
      description: "Working knowledge of database design and implementation. Experience with SQL and NoSQL databases for web and mobile applications."
    },
    {
      id: 4,
      name: "Robotics",
      icon: <Bot />,
      level: 4,
      description: "Strong foundation in robotics principles and programming. Experience designing and building robotic systems for various applications."
    },
    {
      id: 5,
      name: "IoT",
      icon: <Cpu />,
      level: 4,
      description: "Expertise in Internet of Things technologies and applications. Skilled in sensor networks, embedded systems, and real-time data integration."
    },
    {
      id: 6,
      name: "Mobile Dev",
      icon: <Smartphone />,
      level: 2,
      description: "Basic knowledge of mobile app development principles and practices. Experience with responsive design for mobile web applications."
    },
    {
      id: 7,
      name: "3D Design",
      icon: <PenTool />,
      level: 3,
      description: "Intermediate skills in 3D modeling and design using Blender. Created character models and environments for game applications."
    },
    {
      id: 8,
      name: "Music",
      icon: <Music />,
      level: 4,
      description: "Active member of the VIT Music Club with experience in musical collaborations and performances across various genres."
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
          <h1 className="text-4xl font-heading text-electric-blue mb-6">Robot Upgrade Tree</h1>
          <div className="h-1 w-24 bg-neon-pink mx-auto mb-8"></div>
          <p className="text-lg text-gray-300">
            Explore my technical skills visualized as a robot upgrade system. Each skill represents a capability I've developed through education, projects, and hands-on experience.
          </p>
        </div>
        
        <div className="relative">
          {/* Tech tree connecting lines - simplified representation */}
          <div className="absolute inset-0 pointer-events-none">
            <svg className="w-full h-full" viewBox="0 0 1000 600" preserveAspectRatio="none">
              <g stroke="#00F5FF" strokeWidth="2" strokeOpacity="0.3">
                <path d="M500,100 L300,250" />
                <path d="M500,100 L500,250" />
                <path d="M500,100 L700,250" />
                <path d="M300,250 L150,400" />
                <path d="M300,250 L300,400" />
                <path d="M500,250 L500,400" />
                <path d="M700,250 L700,400" />
                <path d="M700,250 L850,400" />
              </g>
            </svg>
          </div>
          
          <div className="flex justify-center mb-16">
            <SkillNode
              name="Core Systems"
              icon="🧠"
              level={5}
              description="Foundation of all technical capabilities with strong problem-solving and learning abilities."
              isActive={activeSkill === 0}
              onClick={() => setActiveSkill(activeSkill === 0 ? null : 0)}
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {skills.slice(0, 3).map((skill, index) => (
              <div key={skill.id} className="flex justify-center">
                <SkillNode
                  name={skill.name}
                  icon={skill.icon}
                  level={skill.level}
                  description={skill.description}
                  isActive={activeSkill === skill.id}
                  onClick={() => setActiveSkill(activeSkill === skill.id ? null : skill.id)}
                />
              </div>
            ))}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mt-16">
            {skills.slice(3).map((skill, index) => (
              <div key={skill.id} className="flex justify-center">
                <SkillNode
                  name={skill.name}
                  icon={skill.icon}
                  level={skill.level}
                  description={skill.description}
                  isActive={activeSkill === skill.id}
                  onClick={() => setActiveSkill(activeSkill === skill.id ? null : skill.id)}
                />
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-20 max-w-3xl mx-auto">
          <div className="circuit-border p-6">
            <h2 className="text-2xl font-heading text-electric-blue mb-4">Software Proficiency</h2>
            
            <div className="space-y-4">
              {[
                { name: "Figma", level: 90 },
                { name: "Canva", level: 95 },
                { name: "Python", level: 85 },
                { name: "C++", level: 80 },
                { name: "Blender", level: 70 }
              ].map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-electric-blue font-heading text-sm">{skill.name}</span>
                    <span className="text-neon-pink font-heading text-sm">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-dark-space rounded-full h-2.5">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      className="h-2.5 rounded-full bg-electric-blue"
                    ></motion.div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default SkillsPage;