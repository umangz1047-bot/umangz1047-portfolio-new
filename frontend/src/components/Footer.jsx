import React from 'react';
import { Mail, Linkedin, MapPin, Heart, Zap, Brain } from 'lucide-react';

const Footer = ({ contactInfo }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-slate-900 to-black border-t border-slate-700/50">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                <Zap size={24} className="text-white" />
              </div>
              <div>
                <div className="text-2xl font-black bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Umang Patel
                </div>
                <div className="text-lg font-semibold text-gray-300">
                  Adaptable Technology Professional
                </div>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Versatile tech professional bridging networking expertise, technical support excellence, 
              and emerging AI exploration for next-generation solutions.
            </p>
            <div className="flex items-center gap-2 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 px-4 py-2 rounded-full">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-green-400 text-sm font-medium">Open to Opportunities</span>
              </div>
              <div className="h-4 w-px bg-slate-600"></div>
              <Brain size={16} className="text-purple-400" />
              <span className="text-purple-400 text-sm">AI Curious</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white">Quick Navigation</h3>
            <div className="grid grid-cols-2 gap-2">
              {[
                { label: 'Skills', href: '#skills' },
                { label: 'Experience', href: '#experience' },
                { label: 'Journey', href: '#journey' },
                { label: 'Education', href: '#education' },
                { label: 'Contact', href: '#contact' }
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-gray-400 hover:text-white transition-colors font-medium text-sm cursor-pointer bg-slate-800/30 backdrop-blur-sm border border-slate-700/30 px-3 py-2 rounded-lg hover:bg-slate-700/40 hover:border-slate-600/40 shadow-sm"
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
              <div className="flex items-center gap-3 bg-slate-800/30 backdrop-blur-sm border border-slate-700/30 p-3 rounded-xl shadow-sm hover:bg-slate-700/40 transition-colors">
                <Mail size={18} className="text-blue-400" />
                <a 
                  href={`mailto:${contactInfo.email}`}
                  className="text-gray-300 hover:text-white transition-colors font-medium"
                >
                  {contactInfo.email}
                </a>
              </div>
              
              <div className="flex items-center gap-3 bg-slate-800/30 backdrop-blur-sm border border-slate-700/30 p-3 rounded-xl shadow-sm hover:bg-slate-700/40 transition-colors">
                <Linkedin size={18} className="text-blue-400" />
                <a 
                  href={`https://${contactInfo.linkedin}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors font-medium"
                >
                  LinkedIn Profile
                </a>
              </div>
              
              <div className="flex items-center gap-3 bg-slate-800/30 backdrop-blur-sm border border-slate-700/30 p-3 rounded-xl shadow-sm">
                <MapPin size={18} className="text-blue-400" />
                <span className="text-gray-300 font-medium">{contactInfo.location}</span>
              </div>
            </div>

            {/* Opportunity indicators */}
            <div className="space-y-2">
              <h4 className="text-sm font-semibold text-gray-300 uppercase tracking-wide">Open For</h4>
              <div className="flex flex-wrap gap-2">
                <span className="bg-blue-600/20 text-blue-300 px-3 py-1 rounded-full text-xs font-medium border border-blue-500/30">
                  Networking Roles
                </span>
                <span className="bg-green-600/20 text-green-300 px-3 py-1 rounded-full text-xs font-medium border border-green-500/30">
                  Technical Support
                </span>
                <span className="bg-purple-600/20 text-purple-300 px-3 py-1 rounded-full text-xs font-medium border border-purple-500/30">
                  Entry-level AI
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-700/50 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm font-medium">
              © {currentYear} Umang Patel - Adaptable Technology Professional. All rights reserved.
            </div>
            
            <div className="flex items-center gap-2 text-gray-400 text-sm bg-slate-800/30 backdrop-blur-sm border border-slate-700/30 px-4 py-2 rounded-full shadow-sm">
              <span>Built with</span>
              <Heart size={16} className="text-red-400 fill-current" />
              <span>and future-focused technology</span>
            </div>
            
            <div className="text-gray-400 text-sm font-medium bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 px-4 py-2 rounded-full shadow-sm">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent font-semibold">Ready for What's Next</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;