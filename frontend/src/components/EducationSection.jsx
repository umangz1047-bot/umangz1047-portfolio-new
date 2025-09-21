import React from 'react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { GraduationCap, MapPin, Calendar } from 'lucide-react';

const EducationSection = ({ education }) => {
  return (
    <section className="py-20 bg-gradient-to-b from-indigo-50/50 to-purple-50/30">
      <div className="container mx-auto px-6">
        {/* Glassmorphism section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-slate-800 mb-4">Educational Foundation</h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Technical expertise built on solid academic foundations in application support
          </p>
        </div>

        {/* Education cards with glassmorphism */}
        <div className="max-w-4xl mx-auto">
          {education.map((edu) => (
            <Card 
              key={edu.id} 
              className="bg-white/60 backdrop-blur-md border border-white/40 hover:border-blue-300/60 hover:bg-white/70 transition-all duration-300 transform hover:scale-105 hover:shadow-xl group mb-8 shadow-lg"
            >
              <CardContent className="p-8">
                <div className="flex items-start gap-6">
                  {/* Icon with glassmorphism */}
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center group-hover:from-blue-600 group-hover:to-indigo-700 transition-all duration-300 flex-shrink-0 shadow-lg">
                    <GraduationCap size={32} className="text-white" />
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-start justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-slate-800 mb-2">{edu.degree}</h3>
                        <h4 className="text-xl text-blue-600 font-semibold mb-2">{edu.field}</h4>
                        <div className="text-lg text-slate-600 font-medium mb-3">{edu.institution}</div>
                      </div>
                      
                      <div className="flex flex-col items-end gap-2">
                        <div className="flex items-center gap-2 bg-slate-100/60 backdrop-blur-sm px-3 py-1 rounded-full text-slate-600 border border-slate-200/50">
                          <Calendar size={16} />
                          <span>{edu.period}</span>
                        </div>
                        <div className="flex items-center gap-2 bg-slate-100/60 backdrop-blur-sm px-3 py-1 rounded-full text-slate-600 border border-slate-200/50">
                          <MapPin size={16} />
                          <span>{edu.location}</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Coursework with glassmorphism */}
                    <div>
                      <h5 className="text-sm font-semibold text-blue-600 uppercase tracking-wide mb-3">Specialized Coursework</h5>
                      <div className="flex flex-wrap gap-2">
                        {edu.coursework.map((course, index) => (
                          <Badge 
                            key={index} 
                            variant="outline" 
                            className="border-slate-300/50 bg-slate-50/50 backdrop-blur-sm text-slate-700 hover:border-blue-400/60 hover:bg-blue-50/60 hover:text-blue-700 transition-all duration-300"
                          >
                            {course}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Progress bar effect with glassmorphism */}
                <div className="mt-6 w-full bg-slate-200/50 backdrop-blur-sm rounded-full h-2 overflow-hidden">
                  <div className="bg-gradient-to-r from-blue-500 to-indigo-500 h-2 rounded-full w-full transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 shadow-sm"></div>
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