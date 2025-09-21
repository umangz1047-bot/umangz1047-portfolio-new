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
    <section className="py-20 bg-gray-950">
      <div className="container mx-auto px-6">
        {/* Netflix-style section header */}
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-4xl font-black text-white mb-2">Experience Binge</h2>
            <p className="text-gray-400 text-lg">A journey through impactful roles and achievements</p>
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

        {/* Experience carousel */}
        <div className="relative overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-in-out gap-8"
            style={{ transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)` }}
          >
            {experiences.map((exp) => (
              <div key={exp.id} className="min-w-0 flex-shrink-0" style={{ width: `${100 / itemsPerView}%` }}>
                <Card className="bg-gray-900 border-gray-800 hover:border-red-600 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl group overflow-hidden h-full">
                  {/* Image header */}
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={exp.image} 
                      alt={`${exp.role} at ${exp.company}`}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-red-600 text-white font-semibold">
                        {exp.company}
                      </Badge>
                    </div>
                  </div>
                  
                  <CardContent className="p-6">
                    <div className="mb-4">
                      <h3 className="text-xl font-bold text-white mb-2">{exp.role}</h3>
                      <div className="flex items-center gap-4 text-sm text-gray-400 mb-3">
                        <div className="flex items-center gap-1">
                          <Calendar size={16} />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin size={16} />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                      <p className="text-gray-300 mb-4">{exp.description}</p>
                    </div>
                    
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {exp.tags.map((tag, index) => (
                        <Badge key={index} variant="outline" className="border-red-600 text-red-400">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    
                    {/* Key achievements */}
                    <div className="space-y-2">
                      <h4 className="text-sm font-semibold text-red-400 uppercase tracking-wide">Key Achievements</h4>
                      <ul className="space-y-2">
                        {exp.achievements.slice(0, 3).map((achievement, index) => (
                          <li key={index} className="text-sm text-gray-300 flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
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

export default ExperienceSection;