import React from 'react';
import { Card, CardContent } from './ui/card';

const SpotlightSection = ({ spotlights }) => {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-6">
        {/* Netflix-style section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-white mb-4">Spotlight Achievements</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Transformative moments that define leadership excellence and drive measurable impact
          </p>
        </div>

        {/* Spotlight grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {spotlights.map((spotlight, index) => (
            <Card 
              key={spotlight.id} 
              className="bg-gray-900 border-gray-800 hover:border-red-600 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl group overflow-hidden"
            >
              {/* Image with overlay */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={spotlight.image} 
                  alt={spotlight.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                
                {/* Floating metric */}
                <div className="absolute top-4 right-4 bg-red-600 text-white px-4 py-2 rounded-full">
                  <div className="text-2xl font-black">{spotlight.metric}</div>
                  <div className="text-xs font-semibold opacity-90">{spotlight.metricLabel}</div>
                </div>
                
                {/* Title overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{spotlight.title}</h3>
                </div>
              </div>
              
              <CardContent className="p-6">
                <p className="text-gray-300 leading-relaxed">
                  {spotlight.description}
                </p>
                
                {/* Animated progress bar */}
                <div className="mt-4 w-full bg-gray-800 rounded-full h-1">
                  <div 
                    className="bg-gradient-to-r from-red-600 to-red-400 h-1 rounded-full transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-1000"
                    style={{ animationDelay: `${index * 200}ms` }}
                  ></div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-2 bg-red-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-red-700 transition-colors cursor-pointer">
            <span className="w-3 h-3 bg-white rounded-full animate-pulse"></span>
            Ready to create the next spotlight moment?
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpotlightSection;