import React from 'react';
import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold mb-2">Karthika Padala</h3>
            <p className="text-gray-400"> Software Engineer</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-6 md:mb-0">
            <div>
              <h4 className="text-lg font-medium mb-4">Navigation</h4>
              <ul className="space-y-2">
                <li><a href="#home" className="text-gray-400 hover:text-white transition">Home</a></li>
                <li><a href="#about" className="text-gray-400 hover:text-white transition">About</a></li>
                <li><a href="#experience" className="text-gray-400 hover:text-white transition">Experience</a></li>
                <li><a href="#skills" className="text-gray-400 hover:text-white transition">Skills</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-medium mb-4">More</h4>
              <ul className="space-y-2">
                <li><a href="#projects" className="text-gray-400 hover:text-white transition">Projects</a></li>
                <li><a href="#education" className="text-gray-400 hover:text-white transition">Education</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-white transition">Contact</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Resume</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-medium mb-4">Connect</h4>
              <ul className="space-y-2">
                <li><a href="https://github.com/karthikapadal23" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">GitHub</a></li>
                <li><a href="https://www.linkedin.com/in/karthika-padala/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">LinkedIn</a></li>
                
                <li><a href="mailto:2200030970cseh@gmail.com" className="text-gray-400 hover:text-white transition">Email</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <hr className="border-gray-800 my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Karthika Padala. All rights reserved.
          </p>
          
          <button 
            onClick={scrollToTop}
            className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full transition"
            aria-label="Scroll to top"
          >
            <ArrowUp className="h-5 w-5" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;