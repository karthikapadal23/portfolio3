import React from 'react';
import { Calendar, MapPin, Briefcase, Mail, Phone, FileText } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="bg-gray-100 rounded-xl overflow-hidden shadow-md transform hover:-translate-y-2 transition-transform duration-300">
            <img 
              src="./about2.jpg" 
              alt="About Karthika Padala" 
              className="w-full h-64 md:h-96 object-cover"
            />
          </div>
          
          <div>
            <p className="text-lg text-gray-600 mb-6">
              I’m a DevOps Engineer and Software Developer with a passion for building, automating, and optimizing end-to-end solutions that drive innovation and efficiency. With a strong foundation in software development and deep experience in CI/CD pipelines, containerization, and cloud infrastructure, I thrive at the intersection where code meets operations.

My toolbox includes technologies like Java, Spring Boot, Python, Docker, Kubernetes, GitHub Actions, and AWS—allowing me to architect applications that are not just functional, but fast, secure, and ready to scale. I believe in writing clean code and building reliable pipelines with equal enthusiasm.

What sets me apart is a mindset that’s both creative and systems-oriented. I love designing solutions that are as elegant behind the scenes as they are impactful to end users—whether that means automating deployments, fine-tuning infrastructure, or writing robust backend services.

Driven by curiosity and continuous learning, I stay ahead of evolving trends in DevSecOps, cloud-native development, and intelligent automation. For me, every challenge is a chance to innovate, collaborate, and deliver value through technology.


            </p>
            <p className="text-lg text-gray-600 mb-8">
              My approach combines technical expertise with a deep understanding of user needs. 
              I believe in clean code, continuous learning, and collaborative development.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <div className="flex items-center space-x-3">
                <Calendar className="h-5 w-5 text-blue-600" />
                <span className="text-gray-700">Born: September 08, 2004</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-blue-600" />
                <span className="text-gray-700">Vijayawada,Andhra Pradesh</span>
              </div>
              <div className="flex items-center space-x-3">
                <Briefcase className="h-5 w-5 text-blue-600" />
                <span className="text-gray-700">Software Engineer</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-600" />
                <span className="text-gray-700">2200030970cseh@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-600" />
                <span className="text-gray-700">9030451676</span>
              </div>
              <div className="flex items-center space-x-3">
                <FileText className="h-5 w-5 text-blue-600" />
              <a href="/Karthika_P.pdf" download className="text-blue-600 hover:text-blue-800 transition"> Download Resume</a>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <a 
                href="#experience" 
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition shadow-sm"
              >
                My Experience
              </a>
              <a 
                href="#contact" 
                className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition shadow-sm"
              >
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;