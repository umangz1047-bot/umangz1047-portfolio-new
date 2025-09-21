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

const SkillsCarousel = ({ skills }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerView = 3;
  const maxIndex = Math.max(0, skills.length - itemsPerView);

  const nextSlide = () => {
    setCurrentIndex(prev => Math.min(prev + 1, maxIndex));
  };

  const prevSlide = () => {
    setCurrentIndex(prev => Math.max(prev - 1, 0));
  };

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-6">
        {/* Netflix-style section header */}
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-4xl font-black text-white mb-2">Featured Skills</h2>
            <p className="text-gray-400 text-lg">Core competencies that drive results</p>
          </div>
          
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={prevSlide}
              disabled={currentIndex === 0}
              className="border-red-600 text-red-400 hover:bg-red-600 hover:text-white disabled:opacity-30 rounded-full w-10 h-10 p-0"
            >
              <ChevronLeft size={20} />
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={nextSlide}
              disabled={currentIndex >= maxIndex}
              className="border-red-600 text-red-400 hover:bg-red-600 hover:text-white disabled:opacity-30 rounded-full w-10 h-10 p-0"
            >
              <ChevronRight size={20} />
            </Button>
          </div>
        </div>

        {/* Skills carousel */}
        <div className="relative overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-in-out gap-6"
            style={{ transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)` }}
          >
            {skills.map((skill) => {
              const IconComponent = iconMap[skill.icon];
              return (
                <div key={skill.id} className="min-w-0 flex-shrink-0" style={{ width: `${100 / itemsPerView}%` }}>
                  <Card className="bg-gray-900 border-gray-800 hover:border-red-600 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl group h-full">
                    <CardContent className="p-8">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center group-hover:bg-red-500 transition-colors">
                          {IconComponent && <IconComponent size={32} className="text-white" />}
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white mb-1">{skill.title}</h3>
                          <div className="text-red-400 font-semibold text-sm">{skill.metrics}</div>
                        </div>
                      </div>
                      
                      <p className="text-gray-300 leading-relaxed mb-6">
                        {skill.description}
                      </p>
                      
                      {/* Progress bar effect */}
                      <div className="w-full bg-gray-800 rounded-full h-1">
                        <div className="bg-gradient-to-r from-red-600 to-red-400 h-1 rounded-full w-full transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-1000"></div>
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
                index === currentIndex ? 'bg-red-600 scale-125' : 'bg-gray-600 hover:bg-gray-500'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsCarousel;