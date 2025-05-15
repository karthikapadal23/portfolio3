import React from 'react';
import { Github as GitHub, Linkedin, Mail, ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative pt-20 md:pt-32 pb-20 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3184454/pexels-photo-3184454.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-fixed bg-cover opacity-10"></div>
      
      <div className="container mx-auto px-6 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <p className="text-blue-600 text-lg font-medium mb-3">Hello, I'm</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
              Karthika Padala
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-700 mb-6">
               Software Engineer
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-xl">
              Specialized in building exceptional digital experiences with a focus on 
              performance, accessibility, and user-centered design.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <a 
                href="#contact" 
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition shadow-sm"
              >
                Contact Me
              </a>
              <a 
                href="#projects" 
                className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition shadow-sm"
              >
                View My Work
              </a>
            </div>
            
            <div className="flex space-x-5">
              <a href="https://github.com/karthikapadal23" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 transition">
                <GitHub className="h-6 w-6" />
              </a>
              <a href="https://www.linkedin.com/in/karthika-padala/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 transition">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="mailto:2200030970cseh@gmail.com" className="text-gray-600 hover:text-gray-900 transition">
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 flex justify-center items-center">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-xl">
                <img 
                  src="./profile.jpg" 
                  alt="Karthika Padala" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-blue-600 rounded-full opacity-0 hover:opacity-10 transition-opacity duration-300"></div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-gray-500 hover:text-gray-700 transition">
          <ArrowDown className="h-6 w-6" />
        </a>
      </div>
    </section>
  );
};

export default Hero;