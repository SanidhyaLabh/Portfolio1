import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Mail, Phone, MapPin } from 'lucide-react';

const ContactPage: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Reset form after showing success message
      setTimeout(() => {
        setIsSubmitted(false);
        setFormState({
          name: '',
          email: '',
          message: ''
        });
      }, 3000);
    }, 1500);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-24 pb-16"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-heading text-electric-blue mb-6">Establish Communication</h1>
          <div className="h-1 w-24 bg-neon-pink mx-auto mb-8"></div>
          <p className="text-lg text-gray-300">
            Have a project in mind or just want to connect? Send a transmission to my cosmic headquarters!
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {[
            { 
              icon: <Mail className="text-electric-blue" size={36} />,
              title: "Email",
              info: "sanidhyalabh@gmail.com",
              link: "mailto:sanidhyalabh@gmail.com"
            },
            { 
              icon: <Phone className="text-electric-blue" size={36} />,
              title: "Phone",
              info: "814-925-6844",
              link: "tel:8149256844"
            },
            { 
              icon: <MapPin className="text-electric-blue" size={36} />,
              title: "Location",
              info: "Vellore, India",
              link: null
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-dark-space p-6 rounded-lg border border-electric-blue text-center"
            >
              <div className="flex justify-center mb-4">{item.icon}</div>
              <h3 className="text-xl font-heading text-electric-blue mb-2">{item.title}</h3>
              {item.link ? (
                <a href={item.link} className="text-gray-300 hover:text-neon-pink transition-colors">
                  {item.info}
                </a>
              ) : (
                <p className="text-gray-300">{item.info}</p>
              )}
            </motion.div>
          ))}
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="circuit-border p-6 md:p-8 relative overflow-hidden">
            <h2 className="text-2xl font-heading text-electric-blue mb-6 text-center">Send Transmission</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <div>
                <label htmlFor="name" className="block text-electric-blue font-heading text-sm mb-2">
                  Identifier (Name)
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-dark-space border border-electric-blue rounded-md focus:border-neon-pink focus:ring focus:ring-neon-pink focus:ring-opacity-50 text-gray-200"
                  placeholder="Enter your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-electric-blue font-heading text-sm mb-2">
                  Communication Channel (Email)
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-dark-space border border-electric-blue rounded-md focus:border-neon-pink focus:ring focus:ring-neon-pink focus:ring-opacity-50 text-gray-200"
                  placeholder="Enter your email"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-electric-blue font-heading text-sm mb-2">
                  Transmission Content (Message)
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-dark-space border border-electric-blue rounded-md focus:border-neon-pink focus:ring focus:ring-neon-pink focus:ring-opacity-50 text-gray-200"
                  placeholder="Type your message here..."
                ></textarea>
              </div>
              
              <div className="text-center">
                <button
                  type="submit"
                  disabled={isSubmitting || isSubmitted}
                  className="btn btn-primary inline-flex items-center px-8 relative overflow-hidden"
                >
                  <AnimatePresence mode="wait">
                    {isSubmitting ? (
                      <motion.div
                        key="submitting"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 flex items-center justify-center bg-electric-blue"
                      >
                        <svg className="animate-spin h-5 w-5 text-space" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                      </motion.div>
                    ) : isSubmitted ? (
                      <motion.div
                        key="submitted"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="flex items-center"
                      >
                        <span className="mr-2">Transmission Sent!</span>
                      </motion.div>
                    ) : (
                      <motion.div
                        key="idle"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="flex items-center"
                      >
                        <Send size={16} className="mr-2" />
                        <span>Send Transmission</span>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </button>
              </div>
            </form>
            
            {/* Beam up animation */}
            <AnimatePresence>
              {isSubmitting && (
                <motion.div 
                  initial={{ opacity: 0, y: 0, scaleY: 0 }}
                  animate={{ opacity: 1, y: -300, scaleY: 20 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1.5 }}
                  className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-10 bg-neon-pink z-0"
                  style={{ 
                    transformOrigin: 'bottom',
                    boxShadow: '0 0 20px 5px rgba(255, 45, 117, 0.7)'
                  }}
                />
              )}
            </AnimatePresence>
            
            {/* UFO for beam up */}
            <AnimatePresence>
              {isSubmitting && (
                <motion.div
                  initial={{ opacity: 0, y: 100, x: '-50%' }}
                  animate={{ opacity: 1, y: -50, x: '-50%' }}
                  exit={{ opacity: 0, y: -200 }}
                  transition={{ duration: 2 }}
                  className="absolute left-1/2 bottom-0 w-16 h-8 z-0"
                >
                  <div className="w-16 h-4 bg-electric-blue rounded-full relative">
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-dark-space rounded-full border-2 border-neon-pink"></div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactPage;