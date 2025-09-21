import React from 'react';
import { Mail, Linkedin, MapPin, Heart } from 'lucide-react';

const Footer = ({ contactInfo }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-slate-100/50 to-slate-200/50 backdrop-blur-sm border-t border-white/40">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section with glassmorphism */}
          <div className="space-y-4">
            <div className="text-3xl font-black bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Umang Patel
            </div>
            <div className="text-lg font-semibold text-slate-700 mb-2">
              Application Support Engineer
            </div>
            <p className="text-slate-600 leading-relaxed">
              Application Support Engineer driving customer success and operational excellence 
              in the restaurant technology sector.
            </p>
            <div className="flex items-center gap-2 bg-emerald-50/70 backdrop-blur-sm border border-emerald-200/50 px-3 py-2 rounded-full text-emerald-700 shadow-sm">
              <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span>
              Available for Application Support Opportunities
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-slate-800">Quick Navigation</h3>
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
                  className="text-slate-600 hover:text-blue-600 transition-colors font-medium text-sm cursor-pointer bg-white/40 backdrop-blur-sm border border-white/30 px-3 py-2 rounded-lg hover:bg-blue-50/50 hover:border-blue-200/50 shadow-sm"
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

          {/* Contact Info with glassmorphism */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-slate-800">Let's Connect</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3 bg-white/40 backdrop-blur-sm border border-white/30 p-3 rounded-xl shadow-sm hover:bg-white/50 transition-colors">
                <Mail size={18} className="text-blue-500" />
                <a 
                  href={`mailto:${contactInfo.email}`}
                  className="text-slate-600 hover:text-blue-600 transition-colors font-medium"
                >
                  {contactInfo.email}
                </a>
              </div>
              
              <div className="flex items-center gap-3 bg-white/40 backdrop-blur-sm border border-white/30 p-3 rounded-xl shadow-sm hover:bg-white/50 transition-colors">
                <Linkedin size={18} className="text-blue-500" />
                <a 
                  href={`https://${contactInfo.linkedin}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-600 hover:text-blue-600 transition-colors font-medium"
                >
                  LinkedIn Profile
                </a>
              </div>
              
              <div className="flex items-center gap-3 bg-white/40 backdrop-blur-sm border border-white/30 p-3 rounded-xl shadow-sm">
                <MapPin size={18} className="text-blue-500" />
                <span className="text-slate-600 font-medium">{contactInfo.location}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar with glassmorphism */}
        <div className="border-t border-white/40 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-slate-600 text-sm font-medium">
              © {currentYear} Umang Patel - Application Support Engineer. All rights reserved.
            </div>
            
            <div className="flex items-center gap-2 text-slate-600 text-sm bg-white/40 backdrop-blur-sm border border-white/30 px-4 py-2 rounded-full shadow-sm">
              <span>Built with</span>
              <Heart size={16} className="text-red-400 fill-current" />
              <span>and cutting-edge technology</span>
            </div>
            
            <div className="text-slate-600 text-sm font-medium bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200/50 px-4 py-2 rounded-full shadow-sm">
              <span className="text-blue-600 font-semibold">TouchBistro</span> • Application Support Excellence
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;