import React, { useState } from 'react';
import { Card, CardContent } from './ui/card';
import { Lightbulb, BookOpen, Award, Users, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from './ui/button';

const iconMap = {
  Lightbulb,
  BookOpen,
  Award,
  Users
};

const SkillsCarousel = ({ coreCompetencies }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerView = 2;
  const maxIndex = Math.max(0, coreCompetencies.length - itemsPerView);

  const nextSlide = () => {
    setCurrentIndex(prev => Math.min(prev + 1, maxIndex));
  };

  const prevSlide = () => {
    setCurrentIndex(prev => Math.max(prev - 1, 0));
  };

  return (
    <section className="py-20 bg-gradient-to-b from-slate-800 to-slate-900">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-4xl font-black text-white mb-2">Core Competencies</h2>
            <p className="text-gray-300 text-lg">Versatile strengths that drive adaptable technology excellence</p>
          </div>
          
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={prevSlide}
              disabled={currentIndex === 0}
              className="border-slate-600 bg-slate-800/50 backdrop-blur-sm text-gray-300 hover:bg-slate-700/50 hover:border-slate-500 hover:text-white disabled:opacity-30 rounded-full w-10 h-10 p-0 shadow-sm"
            >
              <ChevronLeft size={20} />
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={nextSlide}
              disabled={currentIndex >= maxIndex}
              className="border-slate-600 bg-slate-800/50 backdrop-blur-sm text-gray-300 hover:bg-slate-700/50 hover:border-slate-500 hover:text-white disabled:opacity-30 rounded-full w-10 h-10 p-0 shadow-sm"
            >
              <ChevronRight size={20} />
            </Button>
          </div>
        </div>

        {/* Skills carousel */}
        <div className="relative overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-in-out gap-8"
            style={{ transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)` }}
          >
            {coreCompetencies.map((competency) => {
              const IconComponent = iconMap[competency.icon];
              return (
                <div key={competency.id} className="min-w-0 flex-shrink-0" style={{ width: `${100 / itemsPerView}%` }}>
                  <Card className="bg-slate-800/60 backdrop-blur-md border border-slate-700/50 hover:border-slate-600 hover:bg-slate-700/60 transition-all duration-300 transform hover:scale-105 hover:shadow-xl group h-full shadow-lg">
                    <CardContent className="p-8">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center group-hover:from-blue-700 group-hover:to-purple-700 transition-all duration-300 shadow-lg">
                          {IconComponent && <IconComponent size={32} className="text-white" />}
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white mb-1">{competency.title}</h3>
                          <div className="text-blue-400 font-semibold text-sm">{competency.metrics}</div>
                        </div>
                      </div>
                      
                      <p className="text-gray-300 leading-relaxed mb-6">
                        {competency.description}
                      </p>
                      
                      {/* Progress bar effect */}
                      <div className="w-full bg-slate-700/50 backdrop-blur-sm rounded-full h-2 overflow-hidden">
                        <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full w-full transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 shadow-sm"></div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>

        {/* Dots indicator */}
        <div className="flex justify-center mt-8 gap-2">
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-gradient-to-r from-blue-500 to-purple-500 scale-125 shadow-lg' 
                  : 'bg-slate-600/60 backdrop-blur-sm hover:bg-slate-500/60'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsCarousel;