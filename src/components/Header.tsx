import React, { useState, useEffect } from 'react';
import { Menu, X, Github as GitHub, Linkedin, Mail } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="#home" className="text-2xl font-bold tracking-tight text-gray-900">
            Portfolio
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <NavLinks />
            <div className="flex items-center space-x-4">
              <a href="#contact" className="inline-flex items-center justify-center px-5 py-2 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition">
                Contact Me
              </a>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-700 hover:text-gray-900 focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white">
          <div className="container mx-auto px-6 py-4 space-y-6">
            <nav className="flex flex-col space-y-4">
              <NavLinks isMobile onClick={() => setIsMenuOpen(false)} />
              <div className="pt-4 flex space-x-4">
                <a href="https://github.com/karthikapadal23" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">
                  <GitHub className="h-5 w-5" />
                </a>
                <a href="https://www.linkedin.com/in/karthika-padala/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="mailto:2200030970cseh@gmail.com" className="text-gray-600 hover:text-gray-900">
                  <Mail className="h-5 w-5" />
                </a>
              </div>
              <a 
                href="#contact" 
                className="inline-flex items-center justify-center px-5 py-2 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition w-full"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact Me
              </a>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

const NavLinks = ({ isMobile = false, onClick = () => {} }) => {
  const links = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
  ];

  return (
    <>
      {links.map((link) => (
        <a
          key={link.name}
          href={link.href}
          className={`text-base font-medium text-gray-600 hover:text-gray-900 transition ${
            isMobile ? 'block py-2' : ''
          }`}
          onClick={onClick}
        >
          {link.name}
        </a>
      ))}
    </>
  );
};

export default Header;