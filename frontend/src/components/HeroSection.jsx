import React from 'react';
import { Button } from './ui/button';
import { ArrowRight, MapPin, Mail, Linkedin, Star, Zap, Brain } from 'lucide-react';

const HeroSection = ({ data }) => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 flex items-center justify-center overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-128 h-128 bg-cyan-500/5 rounded-full blur-3xl"></div>
        
        {/* Floating particles */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-ping"></div>
        <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-purple-400 rounded-full animate-ping delay-500"></div>
        <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-cyan-400 rounded-full animate-ping delay-1000"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-5xl mx-auto">
          {/* Dynamic status badge */}
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-md border border-blue-400/30 text-blue-300 px-6 py-3 rounded-full text-sm font-semibold mb-8 animate-fade-in shadow-lg">
            <div className="flex items-center gap-2">
              <Zap size={16} className="text-yellow-400 animate-pulse" />
              <span>Adaptable Tech Professional</span>
            </div>
            <div className="h-4 w-px bg-blue-400/50"></div>
            <div className="flex items-center gap-2">
              <Brain size={16} className="text-purple-400" />
              <span>AI Curious</span>
            </div>
          </div>
          
          {/* Main heading */}
          <h1 className="text-6xl md:text-8xl font-black text-white mb-6 leading-tight tracking-tight">
            <span className="block">{data.name}</span>
          </h1>
          
          <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4 tracking-wide">
            {data.title}
          </div>
          
          <div className="text-lg md:text-xl text-gray-300 mb-6 font-medium italic">
            {data.subtitle}
          </div>
          
          <div className="text-xl md:text-2xl text-blue-300 mb-8 font-medium">
            {data.tagline}
          </div>
          
          <p className="text-lg text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            {data.description}
          </p>
          
          {/* Highlights */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10 max-w-4xl mx-auto">
            {data.highlights.map((highlight, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 px-4 py-3 rounded-xl text-gray-300 text-sm font-medium hover:bg-slate-700/50 transition-colors shadow-lg">
                <Star size={16} className="text-yellow-400 mb-1 mx-auto" />
                {highlight}
              </div>
            ))}
          </div>
          
          {/* Contact info row */}
          <div className="flex flex-wrap justify-center items-center gap-6 mb-12">
            <div className="flex items-center gap-2 bg-slate-800/30 backdrop-blur-sm border border-slate-600/40 px-4 py-2 rounded-full text-gray-300 shadow-sm hover:bg-slate-700/40 transition-colors">
              <MapPin size={18} className="text-blue-400" />
              <span className="text-sm font-medium">{data.location}</span>
            </div>
            <div className="flex items-center gap-2 bg-slate-800/30 backdrop-blur-sm border border-slate-600/40 px-4 py-2 rounded-full text-gray-300 shadow-sm hover:bg-slate-700/40 transition-colors">
              <Mail size={18} className="text-blue-400" />
              <span className="text-sm font-medium">{data.email}</span>
            </div>
            <div className="flex items-center gap-2 bg-slate-800/30 backdrop-blur-sm border border-slate-600/40 px-4 py-2 rounded-full text-gray-300 shadow-sm hover:bg-slate-700/40 transition-colors">
              <Linkedin size={18} className="text-blue-400" />
              <span className="text-sm font-medium">LinkedIn Profile</span>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-xl shadow-lg border-0"
            >
              Explore My Journey
              <ArrowRight size={20} className="ml-2" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-slate-600 bg-slate-800/20 backdrop-blur-sm text-gray-300 hover:bg-slate-700/40 hover:border-slate-500 hover:text-white px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Download Resume
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-blue-400/60 bg-slate-800/20 backdrop-blur-sm rounded-full flex justify-center shadow-sm">
          <div className="w-1 h-3 bg-gradient-to-b from-blue-400 to-purple-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;