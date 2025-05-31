import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, BookOpen, Briefcase, Award, Download } from 'lucide-react';

const ResumePage: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-24 pb-16"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-heading text-electric-blue mb-6">Robotic Operating Manual</h1>
            <div className="h-1 w-24 bg-neon-pink mx-auto mb-8"></div>
            <p className="text-lg text-gray-300">
              Technical specifications and operational history of Unit: Sanidhya Labh
            </p>
            
            <a 
              href="/resume.pdf" 
              className="btn btn-primary mt-6 inline-flex items-center"
              download
            >
              <Download size={16} className="mr-2" />
              Download Manual
            </a>
          </div>
          
          <div className="circuit-border p-6 md:p-8 mb-12">
            <div className="flex flex-wrap">
              <div className="w-full md:w-1/3 mb-4 md:mb-0">
                <h2 className="text-xl font-heading text-electric-blue mb-2">Sanidhya Labh</h2>
                <p className="text-neon-pink">CSE Freshman</p>
              </div>
              
              <div className="w-full md:w-2/3">
                <p className="text-gray-300 mb-4">
                  Driven by a passion for emerging technologies, I possess a strong foundation in computer science with a focused
                  interest in UI/UX design. Actively engaged in robotics and AI/ML initiatives, demonstrating a commitment to developing innovative
                  software and design solutions. Proficient in Python and experienced with UI/UX tools such as Figma and Canva, with a goal to enhance
                  user experiences through modern, intuitive interfaces.
                </p>
                
                <div className="flex flex-wrap items-center text-sm text-gray-400">
                  <div className="mr-4 mb-2">
                    <span className="text-electric-blue">📧</span> sanidhyalabh@gmail.com
                  </div>
                  <div className="mr-4 mb-2">
                    <span className="text-electric-blue">📱</span> 8149256844
                  </div>
                  <div className="mr-4 mb-2">
                    <span className="text-electric-blue">📍</span> Vellore, India
                  </div>
                  <div className="mb-2">
                    <span className="text-electric-blue">🔗</span> linkedin.com/in/sanidhya-labh139
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Work Experience */}
          <div className="mb-12">
            <div className="flex items-center mb-6">
              <Briefcase size={24} className="text-electric-blue mr-3" />
              <h2 className="text-2xl font-heading text-electric-blue">Work Experience</h2>
            </div>
            
            <div className="space-y-8">
              {[
                {
                  title: "Core Team Member",
                  company: "TAM-VIT",
                  period: "03/2025 - Present",
                  description: [
                    "Active member of the AI-ML Club at VIT Vellore, engaged in cutting-edge artificial intelligence and machine learning projects",
                    "Contributed to UI/UX design using tools like Figma and Canva for project prototyping and interface development"
                  ]
                },
                {
                  title: "Core Team Member",
                  company: "loThinC-VIT",
                  period: "03/2025 - Present",
                  description: [
                    "Recently joined the IoT Club to engage in hands-on projects involving sensor networks, embedded systems, and real-time data integration",
                    "Currently exploring core IoT concepts and contributing to team-based prototyping initiatives"
                  ]
                },
                {
                  title: "Core Team Member",
                  company: "VIT Music Club",
                  period: "03/2025 - Present",
                  description: [
                    "Active member of the VIT Music Club, engaging in musical collaborations and college-level performances across genres"
                  ]
                }
              ].map((exp, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-dark-space p-6 rounded-lg border border-electric-blue"
                >
                  <div className="flex flex-wrap justify-between mb-2">
                    <h3 className="text-xl font-heading text-electric-blue">{exp.title}</h3>
                    <div className="flex items-center text-neon-pink">
                      <Calendar size={14} className="mr-1" />
                      <span className="text-sm">{exp.period}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-400 font-heading text-sm mb-4">{exp.company}</p>
                  
                  <ul className="space-y-2">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex">
                        <span className="text-electric-blue mr-2">•</span>
                        <span className="text-gray-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* Education */}
          <div className="mb-12">
            <div className="flex items-center mb-6">
              <BookOpen size={24} className="text-electric-blue mr-3" />
              <h2 className="text-2xl font-heading text-electric-blue">Education</h2>
            </div>
            
            <div className="space-y-8">
              {[
                {
                  degree: "Bachelor Of Technology (CSE-IoT)",
                  institution: "Vellore Institute of Technology, Vellore",
                  period: "07/2024 - Present",
                  details: ""
                },
                {
                  degree: "Higher Secondary Certificate (HSC)",
                  institution: "Narayana Junior College, Hyderabad",
                  period: "04/2024",
                  details: "86%"
                },
                {
                  degree: "Secondary School Certificate (SSC)",
                  institution: "Atomic Energy Central School, Tarapur",
                  period: "04/2022",
                  details: "92%"
                }
              ].map((edu, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-dark-space p-6 rounded-lg border border-electric-blue"
                >
                  <div className="flex flex-wrap justify-between mb-2">
                    <h3 className="text-xl font-heading text-electric-blue">{edu.degree}</h3>
                    <div className="flex items-center text-neon-pink">
                      <Calendar size={14} className="mr-1" />
                      <span className="text-sm">{edu.period}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-400 font-heading text-sm mb-2">{edu.institution}</p>
                  
                  {edu.details && (
                    <p className="text-gray-300">{edu.details}</p>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* Skills & Projects */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Skills */}
            <div>
              <div className="flex items-center mb-6">
                <Award size={24} className="text-electric-blue mr-3" />
                <h2 className="text-2xl font-heading text-electric-blue">Skills</h2>
              </div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-dark-space p-6 rounded-lg border border-electric-blue h-full"
              >
                <div className="flex flex-wrap gap-2">
                  {[
                    "C++", "Figma", "Canva", "3D Design", "UI/UX", "Python", "Robotics"
                  ].map((skill, index) => (
                    <div 
                      key={index} 
                      className="px-3 py-2 bg-space text-electric-blue rounded-md border border-electric-blue"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
                
                <h3 className="text-xl font-heading text-electric-blue mt-6 mb-4">Languages</h3>
                <ul className="space-y-2">
                  {[
                    { lang: "English", level: "Full Professional Proficiency" },
                    { lang: "Hindi", level: "Full Professional Proficiency" },
                    { lang: "Telugu", level: "Elementary Proficiency" }
                  ].map((lang, index) => (
                    <li key={index} className="flex justify-between">
                      <span className="text-gray-300">{lang.lang}</span>
                      <span className="text-electric-blue text-sm">{lang.level}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
            
            {/* Projects */}
            <div>
              <div className="flex items-center mb-6">
                <Award size={24} className="text-electric-blue mr-3" />
                <h2 className="text-2xl font-heading text-electric-blue">Personal Projects</h2>
              </div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-dark-space p-6 rounded-lg border border-electric-blue h-full"
              >
                <ul className="space-y-6">
                  {[
                    {
                      name: "LexiRead",
                      description: "Developed a web application aimed at promoting inclusive and accessible reading experiences for Dyslexic Patients. Designed the user-friendly front end using HTML, CSS, and Figma for intuitive and responsive interface design."
                    },
                    {
                      name: "AR Video Game - The Last Call",
                      description: "Created a 3D character model using Blender and designed the user interface for a game application, ensuring a cohesive visual experience and intuitive user interaction."
                    },
                    {
                      name: "AI-Powered Exoskeleton for Rehabilitation (In Progress)",
                      description: "Designing an exoskeleton system aimed at assisting rehabilitation and physiotherapy using a combination of AI and basic robotics."
                    }
                  ].map((project, index) => (
                    <li key={index}>
                      <h3 className="text-lg font-heading text-electric-blue mb-2">{project.name}</h3>
                      <p className="text-gray-300 text-sm">{project.description}</p>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ResumePage;