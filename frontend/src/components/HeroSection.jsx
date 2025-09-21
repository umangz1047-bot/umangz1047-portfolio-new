import React from 'react';
import { Button } from './ui/button';
import { ArrowRight, MapPin, Mail, Linkedin } from 'lucide-react';

const HeroSection = ({ data }) => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-black via-red-950 to-black flex items-center justify-center overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 bg-red-600 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-red-800 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-128 h-128 bg-white rounded-full blur-3xl opacity-5"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Netflix-style badge */}
          <div className="inline-flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-8 animate-fade-in">
            <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
            Available for Executive Opportunities
          </div>
          
          {/* Main heading with cinematic typography */}
          <h1 className="text-6xl md:text-8xl font-black text-white mb-6 leading-tight tracking-tight">
            <span className="block">{data.name}</span>
          </h1>
          
          <div className="text-2xl md:text-3xl font-bold text-red-400 mb-4 tracking-wide">
            {data.title}
          </div>
          
          <div className="text-xl md:text-2xl text-gray-300 mb-8 font-medium">
            {data.tagline}
          </div>
          
          <p className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
            {data.description}
          </p>
          
          {/* Contact info row */}
          <div className="flex flex-wrap justify-center items-center gap-6 mb-12 text-gray-300">
            <div className="flex items-center gap-2">
              <MapPin size={20} className="text-red-400" />
              <span>{data.location}</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={20} className="text-red-400" />
              <span>{data.email}</span>
            </div>
            <div className="flex items-center gap-2">
              <Linkedin size={20} className="text-red-400" />
              <span>{data.linkedin}</span>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
            >
              View My Journey
              <ArrowRight size={20} className="ml-2" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-red-600 text-red-400 hover:bg-red-600 hover:text-white px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105"
            >
              Download Resume
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-red-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-red-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;