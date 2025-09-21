import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Menu, X, Download } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Achievements', href: '#achievements' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/70 backdrop-blur-md border-b border-white/30 shadow-lg' 
          : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo with glassmorphism */}
            <div className="text-2xl font-black text-slate-800 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              UP
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.href);
                  }}
                  className="text-slate-700 hover:text-blue-600 transition-colors font-medium cursor-pointer"
                >
                  {item.label}
                </a>
              ))}
            </div>

            {/* Desktop CTA with glassmorphism */}
            <div className="hidden md:flex items-center gap-4">
              <Button 
                variant="outline" 
                size="sm"
                className="border-blue-300/50 bg-white/50 backdrop-blur-sm text-blue-600 hover:bg-blue-50 hover:border-blue-400 shadow-sm"
              >
                <Download size={16} className="mr-2" />
                Resume
              </Button>
              <Button 
                size="sm"
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-lg"
                onClick={() => scrollToSection('#contact')}
              >
                Let's Connect
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden text-slate-800 hover:text-blue-600 hover:bg-blue-50/50"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu with glassmorphism */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white/80 backdrop-blur-md border-t border-white/30 shadow-lg">
            <div className="container mx-auto px-6 py-4">
              <div className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(item.href);
                    }}
                    className="text-slate-700 hover:text-blue-600 transition-colors font-medium cursor-pointer py-2"
                  >
                    {item.label}
                  </a>
                ))}
                <div className="flex flex-col gap-2 pt-4 border-t border-slate-200/50">
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="border-blue-300/50 bg-white/50 backdrop-blur-sm text-blue-600 hover:bg-blue-50 hover:border-blue-400 shadow-sm"
                  >
                    <Download size={16} className="mr-2" />
                    Download Resume
                  </Button>
                  <Button 
                    size="sm"
                    className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-lg"
                    onClick={() => scrollToSection('#contact')}
                  >
                    Let's Connect
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navigation;