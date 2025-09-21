import React from 'react';
import { Card, CardContent } from './ui/card';

const SpotlightSection = ({ spotlights }) => {
  return (
    <section className="py-20 bg-gradient-to-b from-blue-50/30 to-indigo-50/50">
      <div className="container mx-auto px-6">
        {/* Glassmorphism section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-slate-800 mb-4">Key Achievements</h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Transformative moments that define application support excellence and drive measurable impact
          </p>
        </div>

        {/* Spotlight grid with glassmorphism */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {spotlights.map((spotlight, index) => (
            <Card 
              key={spotlight.id} 
              className="bg-white/60 backdrop-blur-md border border-white/40 hover:border-blue-300/60 hover:bg-white/70 transition-all duration-500 transform hover:scale-105 hover:shadow-xl group overflow-hidden shadow-lg"
            >
              {/* Image with glassmorphism overlay */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={spotlight.image} 
                  alt={spotlight.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-500/20 to-transparent backdrop-blur-[1px]"></div>
                
                {/* Floating metric with glassmorphism */}
                <div className="absolute top-4 right-4 bg-blue-600/90 backdrop-blur-sm border border-blue-500/30 text-white px-4 py-2 rounded-2xl shadow-lg">
                  <div className="text-2xl font-black">{spotlight.metric}</div>
                  <div className="text-xs font-semibold opacity-90">{spotlight.metricLabel}</div>
                </div>
                
                {/* Title overlay with glassmorphism */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl p-4 shadow-lg">
                    <h3 className="text-xl font-bold text-white mb-1">{spotlight.title}</h3>
                  </div>
                </div>
              </div>
              
              <CardContent className="p-6">
                <p className="text-slate-600 leading-relaxed">
                  {spotlight.description}
                </p>
                
                {/* Animated progress bar with glassmorphism */}
                <div className="mt-4 w-full bg-slate-200/50 backdrop-blur-sm rounded-full h-2 overflow-hidden">
                  <div 
                    className="bg-gradient-to-r from-blue-500 to-indigo-500 h-2 rounded-full transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 shadow-sm"
                    style={{ animationDelay: `${index * 200}ms` }}
                  ></div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to action with glassmorphism */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-2 bg-blue-600/90 backdrop-blur-sm border border-blue-500/30 text-white px-8 py-4 rounded-2xl text-lg font-semibold hover:bg-blue-700/90 transition-all duration-300 cursor-pointer shadow-lg transform hover:scale-105">
            <span className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse shadow-sm"></span>
            Ready to create the next breakthrough moment?
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpotlightSection;