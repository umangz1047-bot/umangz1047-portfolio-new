import React from 'react';
import { Button } from './ui/button';
import { ArrowRight, MapPin, Mail, Linkedin } from 'lucide-react';

const HeroSection = ({ data }) => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 flex items-center justify-center overflow-hidden">
      {/* Animated background elements with glassmorphism */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-blue-200/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-indigo-200/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-128 h-128 bg-purple-100/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Glassmorphism badge */}
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md border border-white/30 text-slate-700 px-6 py-3 rounded-full text-sm font-semibold mb-8 shadow-lg animate-fade-in">
            <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse shadow-sm"></span>
            Available for Application Support Opportunities
          </div>
          
          {/* Main heading with soft typography */}
          <h1 className="text-6xl md:text-8xl font-black text-slate-800 mb-6 leading-tight tracking-tight">
            <span className="block">{data.name}</span>
          </h1>
          
          <div className="text-2xl md:text-3xl font-bold text-blue-700 mb-4 tracking-wide">
            {data.title}
          </div>
          
          <div className="text-xl md:text-2xl text-slate-600 mb-8 font-medium">
            {data.tagline}
          </div>
          
          <p className="text-lg text-slate-500 mb-12 max-w-3xl mx-auto leading-relaxed">
            {data.description}
          </p>
          
          {/* Contact info row with glassmorphism */}
          <div className="flex flex-wrap justify-center items-center gap-6 mb-12">
            <div className="flex items-center gap-2 bg-white/30 backdrop-blur-sm border border-white/40 px-4 py-2 rounded-full text-slate-600 shadow-sm">
              <MapPin size={18} className="text-blue-500" />
              <span className="text-sm font-medium">{data.location}</span>
            </div>
            <div className="flex items-center gap-2 bg-white/30 backdrop-blur-sm border border-white/40 px-4 py-2 rounded-full text-slate-600 shadow-sm">
              <Mail size={18} className="text-blue-500" />
              <span className="text-sm font-medium">{data.email}</span>
            </div>
            <div className="flex items-center gap-2 bg-white/30 backdrop-blur-sm border border-white/40 px-4 py-2 rounded-full text-slate-600 shadow-sm">
              <Linkedin size={18} className="text-blue-500" />
              <span className="text-sm font-medium">LinkedIn Profile</span>
            </div>
          </div>
          
          {/* CTA Buttons with glassmorphism */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-blue-600/90 backdrop-blur-sm hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-xl shadow-lg border border-blue-500/20"
            >
              View My Journey
              <ArrowRight size={20} className="ml-2" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-blue-500/30 bg-white/20 backdrop-blur-sm text-blue-700 hover:bg-white/30 hover:border-blue-600/50 px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Download Resume
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-blue-400/60 bg-white/20 backdrop-blur-sm rounded-full flex justify-center shadow-sm">
          <div className="w-1 h-3 bg-blue-500 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;