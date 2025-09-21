import React from 'react';
import { Mail, Linkedin, MapPin, Heart } from 'lucide-react';

const Footer = ({ contactInfo }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-950 border-t border-gray-800">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="text-3xl font-black text-white">
              Umang Patel
            </div>
            <p className="text-gray-400 leading-relaxed">
              Technical Operations Leader driving customer success and operational excellence 
              in the restaurant technology sector.
            </p>
            <div className="flex items-center gap-2 text-red-400">
              <span className="w-2 h-2 bg-red-400 rounded-full animate-pulse"></span>
              Available for Executive Opportunities
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white">Quick Navigation</h3>
            <div className="grid grid-cols-2 gap-2">
              {[
                { label: 'Skills', href: '#skills' },
                { label: 'Experience', href: '#experience' },
                { label: 'Achievements', href: '#achievements' },
                { label: 'Education', href: '#education' },
                { label: 'Contact', href: '#contact' }
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-gray-400 hover:text-red-400 transition-colors font-medium text-sm cursor-pointer"
                  onClick={(e) => {
                    e.preventDefault();
                    const element = document.querySelector(item.href);
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white">Let's Connect</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-red-400" />
                <a 
                  href={`mailto:${contactInfo.email}`}
                  className="text-gray-400 hover:text-red-400 transition-colors"
                >
                  {contactInfo.email}
                </a>
              </div>
              
              <div className="flex items-center gap-3">
                <Linkedin size={18} className="text-red-400" />
                <a 
                  href={`https://${contactInfo.linkedin}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-red-400 transition-colors"
                >
                  LinkedIn Profile
                </a>
              </div>
              
              <div className="flex items-center gap-3">
                <MapPin size={18} className="text-red-400" />
                <span className="text-gray-400">{contactInfo.location}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm">
              © {currentYear} Umang Patel. All rights reserved.
            </div>
            
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <span>Built with</span>
              <Heart size={16} className="text-red-400 fill-current" />
              <span>and cutting-edge technology</span>
            </div>
            
            <div className="text-gray-400 text-sm">
              <span className="text-red-400">TouchBistro</span> • Technical Excellence
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;