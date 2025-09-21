import React from 'react';
import { Card, CardContent } from './ui/card';

const SpotlightSection = ({ spotlights }) => {
  return (
    <section className="py-20 bg-gradient-to-b from-slate-800 to-slate-900">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-white mb-4">Impact Highlights</h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Transformative achievements that demonstrate adaptable excellence across technology domains
          </p>
        </div>

        {/* Spotlight grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {spotlights.map((spotlight, index) => (
            <Card 
              key={spotlight.id} 
              className="bg-slate-800/60 backdrop-blur-md border border-slate-700/50 hover:border-slate-600 hover:bg-slate-700/60 transition-all duration-500 transform hover:scale-105 hover:shadow-xl group overflow-hidden shadow-lg"
            >
              {/* Image with overlay */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={spotlight.image} 
                  alt={spotlight.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-800/40 to-transparent"></div>
                
                {/* Floating metric */}
                <div className="absolute top-4 right-4 bg-gradient-to-r from-blue-600 to-purple-600 backdrop-blur-sm text-white px-4 py-2 rounded-2xl shadow-lg">
                  <div className="text-2xl font-black">{spotlight.metric}</div>
                  <div className="text-xs font-semibold opacity-90">{spotlight.metricLabel}</div>
                </div>
                
                {/* Title overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="bg-slate-800/60 backdrop-blur-md border border-slate-600/40 rounded-2xl p-4 shadow-lg">
                    <h3 className="text-xl font-bold text-white mb-1">{spotlight.title}</h3>
                  </div>
                </div>
              </div>
              
              <CardContent className="p-6">
                <p className="text-gray-300 leading-relaxed">
                  {spotlight.description}
                </p>
                
                {/* Animated progress bar */}
                <div className="mt-4 w-full bg-slate-700/50 backdrop-blur-sm rounded-full h-2 overflow-hidden">
                  <div 
                    className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 shadow-sm"
                    style={{ animationDelay: `${index * 200}ms` }}
                  ></div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 backdrop-blur-sm text-white px-8 py-4 rounded-2xl text-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 cursor-pointer shadow-lg transform hover:scale-105">
            <span className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse shadow-sm"></span>
            Ready to drive the next breakthrough in your tech team?
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpotlightSection;