import React, { useState } from 'react';
import { Card, CardContent } from './ui/card';
import { Settings, Users, Network, Crown, TrendingUp, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from './ui/button';

const iconMap = {
  Settings,
  Users,
  Network,
  Crown,
  TrendingUp
};

const SkillsCarousel = ({ coreCompetencies }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerView = 3;
  const maxIndex = Math.max(0, coreCompetencies.length - itemsPerView);

  const nextSlide = () => {
    setCurrentIndex(prev => Math.min(prev + 1, maxIndex));
  };

  const prevSlide = () => {
    setCurrentIndex(prev => Math.max(prev - 1, 0));
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-6">
        {/* Glassmorphism section header */}
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-4xl font-black text-slate-800 mb-2">Core Competencies</h2>
            <p className="text-slate-600 text-lg">Key strengths that drive application support excellence</p>
          </div>
          
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={prevSlide}
              disabled={currentIndex === 0}
              className="border-blue-300/50 bg-white/50 backdrop-blur-sm text-blue-600 hover:bg-blue-50 hover:border-blue-400 disabled:opacity-30 rounded-full w-10 h-10 p-0 shadow-sm"
            >
              <ChevronLeft size={20} />
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={nextSlide}
              disabled={currentIndex >= maxIndex}
              className="border-blue-300/50 bg-white/50 backdrop-blur-sm text-blue-600 hover:bg-blue-50 hover:border-blue-400 disabled:opacity-30 rounded-full w-10 h-10 p-0 shadow-sm"
            >
              <ChevronRight size={20} />
            </Button>
          </div>
        </div>

        {/* Skills carousel with glassmorphism */}
        <div className="relative overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-in-out gap-6"
            style={{ transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)` }}
          >
            {coreCompetencies.map((skill) => {
              const IconComponent = iconMap[skill.icon];
              return (
                <div key={skill.id} className="min-w-0 flex-shrink-0" style={{ width: `${100 / itemsPerView}%` }}>
                  <Card className="bg-white/60 backdrop-blur-md border border-white/40 hover:border-blue-300/60 hover:bg-white/70 transition-all duration-300 transform hover:scale-105 hover:shadow-xl group h-full shadow-lg">
                    <CardContent className="p-8">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center group-hover:from-blue-600 group-hover:to-indigo-700 transition-all duration-300 shadow-lg">
                          {IconComponent && <IconComponent size={32} className="text-white" />}
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-slate-800 mb-1">{skill.title}</h3>
                          <div className="text-blue-600 font-semibold text-sm">{skill.metrics}</div>
                        </div>
                      </div>
                      
                      <p className="text-slate-600 leading-relaxed mb-6">
                        {skill.description}
                      </p>
                      
                      {/* Progress bar effect with glassmorphism */}
                      <div className="w-full bg-slate-200/50 backdrop-blur-sm rounded-full h-2 overflow-hidden">
                        <div className="bg-gradient-to-r from-blue-500 to-indigo-500 h-2 rounded-full w-full transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 shadow-sm"></div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>

        {/* Dots indicator with glassmorphism */}
        <div className="flex justify-center mt-8 gap-2">
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-blue-500 scale-125 shadow-lg' 
                  : 'bg-slate-300/60 backdrop-blur-sm hover:bg-slate-400/60'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsCarousel;