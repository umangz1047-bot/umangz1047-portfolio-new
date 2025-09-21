import React, { useState } from 'react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { ChevronLeft, ChevronRight, MapPin, Calendar } from 'lucide-react';
import { Button } from './ui/button';

const ExperienceSection = ({ experiences }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerView = 2;
  const maxIndex = Math.max(0, experiences.length - itemsPerView);

  const nextSlide = () => {
    setCurrentIndex(prev => Math.min(prev + 1, maxIndex));
  };

  const prevSlide = () => {
    setCurrentIndex(prev => Math.max(prev - 1, 0));
  };

  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 to-blue-50/30">
      <div className="container mx-auto px-6">
        {/* Glassmorphism section header */}
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-4xl font-black text-slate-800 mb-2">Professional Journey</h2>
            <p className="text-slate-600 text-lg">A journey through impactful roles and achievements</p>
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

        {/* Experience carousel with glassmorphism */}
        <div className="relative overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-in-out gap-8"
            style={{ transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)` }}
          >
            {experiences.map((exp) => (
              <div key={exp.id} className="min-w-0 flex-shrink-0" style={{ width: `${100 / itemsPerView}%` }}>
                <Card className="bg-white/60 backdrop-blur-md border border-white/40 hover:border-blue-300/60 hover:bg-white/70 transition-all duration-300 transform hover:scale-105 hover:shadow-xl group overflow-hidden h-full shadow-lg">
                  {/* Image header with glassmorphism overlay */}
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={exp.image} 
                      alt={`${exp.role} at ${exp.company}`}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-500/20 to-transparent backdrop-blur-[1px]"></div>
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-blue-600/90 backdrop-blur-sm text-white font-semibold border border-blue-500/30 shadow-lg">
                        {exp.company}
                      </Badge>
                    </div>
                  </div>
                  
                  <CardContent className="p-6">
                    <div className="mb-4">
                      <h3 className="text-xl font-bold text-slate-800 mb-2">{exp.role}</h3>
                      <div className="flex items-center gap-4 text-sm text-slate-500 mb-3">
                        <div className="flex items-center gap-1 bg-slate-100/60 backdrop-blur-sm px-2 py-1 rounded-full">
                          <Calendar size={14} />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center gap-1 bg-slate-100/60 backdrop-blur-sm px-2 py-1 rounded-full">
                          <MapPin size={14} />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                      <p className="text-slate-600 mb-4">{exp.description}</p>
                    </div>
                    
                    {/* Tags with glassmorphism */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {exp.tags.map((tag, index) => (
                        <Badge 
                          key={index} 
                          variant="outline" 
                          className="border-blue-300/50 bg-blue-50/50 backdrop-blur-sm text-blue-700 hover:bg-blue-100/60"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    
                    {/* Key achievements */}
                    <div className="space-y-2">
                      <h4 className="text-sm font-semibold text-blue-600 uppercase tracking-wide">Key Achievements</h4>
                      <ul className="space-y-2">
                        {exp.achievements.slice(0, 3).map((achievement, index) => (
                          <li key={index} className="text-sm text-slate-600 flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0 shadow-sm"></div>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
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

export default ExperienceSection;