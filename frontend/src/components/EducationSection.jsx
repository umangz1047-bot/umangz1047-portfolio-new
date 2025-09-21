import React from 'react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { GraduationCap, MapPin, Calendar } from 'lucide-react';

const EducationSection = ({ education }) => {
  return (
    <section className="py-20 bg-gray-950">
      <div className="container mx-auto px-6">
        {/* Netflix-style section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-white mb-4">Educational Foundation</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Technical expertise built on solid academic foundations
          </p>
        </div>

        {/* Education cards */}
        <div className="max-w-4xl mx-auto">
          {education.map((edu) => (
            <Card 
              key={edu.id} 
              className="bg-gray-900 border-gray-800 hover:border-red-600 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl group mb-8"
            >
              <CardContent className="p-8">
                <div className="flex items-start gap-6">
                  {/* Icon */}
                  <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center group-hover:bg-red-500 transition-colors flex-shrink-0">
                    <GraduationCap size={32} className="text-white" />
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-start justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-2">{edu.degree}</h3>
                        <h4 className="text-xl text-red-400 font-semibold mb-2">{edu.field}</h4>
                        <div className="text-lg text-gray-300 font-medium mb-3">{edu.institution}</div>
                      </div>
                      
                      <div className="flex flex-col items-end gap-2">
                        <div className="flex items-center gap-2 text-gray-400">
                          <Calendar size={16} />
                          <span>{edu.period}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-400">
                          <MapPin size={16} />
                          <span>{edu.location}</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Coursework */}
                    <div>
                      <h5 className="text-sm font-semibold text-red-400 uppercase tracking-wide mb-3">Specialized Coursework</h5>
                      <div className="flex flex-wrap gap-2">
                        {edu.coursework.map((course, index) => (
                          <Badge 
                            key={index} 
                            variant="outline" 
                            className="border-gray-600 text-gray-300 hover:border-red-600 hover:text-red-400 transition-colors"
                          >
                            {course}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Progress bar effect */}
                <div className="mt-6 w-full bg-gray-800 rounded-full h-1">
                  <div className="bg-gradient-to-r from-red-600 to-red-400 h-1 rounded-full w-full transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-1000"></div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;