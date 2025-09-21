import React from 'react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { GraduationCap, Award, Shield, Network, Code, MapPin, Calendar } from 'lucide-react';

const getEducationIcon = (type, field) => {
  if (field.toLowerCase().includes('security') || field.toLowerCase().includes('ethical')) {
    return Shield;
  }
  if (field.toLowerCase().includes('network')) {
    return Network;
  }
  if (field.toLowerCase().includes('computer') || field.toLowerCase().includes('engineering')) {
    return Code;
  }
  return type === 'degree' ? GraduationCap : Award;
};

const getEducationColor = (field) => {
  if (field.toLowerCase().includes('security')) {
    return 'from-red-500 to-rose-600';
  }
  if (field.toLowerCase().includes('network')) {
    return 'from-green-500 to-emerald-600';
  }
  if (field.toLowerCase().includes('computer')) {
    return 'from-purple-500 to-violet-600';
  }
  return 'from-blue-500 to-indigo-600';
};

const EducationSection = ({ education }) => {
  // Sort education by relevance - degrees first, then certificates
  const sortedEducation = [...education].sort((a, b) => {
    if (a.type === 'degree' && b.type !== 'degree') return -1;
    if (a.type !== 'degree' && b.type === 'degree') return 1;
    return 0;
  });

  return (
    <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-white mb-4">Educational Foundation</h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Comprehensive academic background spanning computer science, networking, and security - building blocks for versatile technology expertise
          </p>
        </div>

        {/* Education timeline */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {sortedEducation.map((edu, index) => {
              const IconComponent = getEducationIcon(edu.type, edu.field);
              const colorGradient = getEducationColor(edu.field);
              
              return (
                <Card 
                  key={edu.id}
                  className="bg-slate-800/60 backdrop-blur-md border border-slate-700/50 hover:border-slate-600 hover:bg-slate-700/60 transition-all duration-300 transform hover:scale-105 hover:shadow-xl group shadow-lg"
                >
                  <CardContent className="p-8">
                    {/* Header with icon and type */}
                    <div className="flex items-start gap-4 mb-6">
                      <div className={`w-16 h-16 bg-gradient-to-br ${colorGradient} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg flex-shrink-0`}>
                        <IconComponent size={32} className="text-white" />
                      </div>
                      <div className="flex-1">
                        <Badge 
                          className={`bg-gradient-to-r ${colorGradient} text-white mb-2`}
                        >
                          {edu.type === 'degree' ? 'Degree' : 'Certificate'}
                        </Badge>
                        <h3 className="text-xl font-bold text-white leading-tight mb-1">
                          {edu.degree}
                        </h3>
                        <h4 className="text-lg text-blue-400 font-semibold mb-2">
                          {edu.field}
                        </h4>
                      </div>
                    </div>

                    {/* Institution and location */}
                    <div className="mb-4">
                      <div className="text-lg text-gray-300 font-medium mb-2">{edu.institution}</div>
                      <div className="flex items-center gap-4 text-sm text-gray-400 mb-3">
                        <div className="flex items-center gap-1 bg-slate-700/50 backdrop-blur-sm px-2 py-1 rounded-full">
                          <Calendar size={14} />
                          <span>{edu.period}</span>
                        </div>
                        <div className="flex items-center gap-1 bg-slate-700/50 backdrop-blur-sm px-2 py-1 rounded-full">
                          <MapPin size={14} />
                          <span>{edu.location}</span>
                        </div>
                      </div>
                    </div>

                    {/* Specializations */}
                    <div className="mb-4">
                      <h5 className="text-sm font-semibold text-gray-300 uppercase tracking-wide mb-3">Key Areas</h5>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {edu.specializations.map((spec, specIndex) => (
                          <Badge 
                            key={specIndex}
                            variant="outline" 
                            className="border-slate-600/50 bg-slate-700/30 backdrop-blur-sm text-gray-300 hover:border-slate-500/60 hover:bg-slate-600/40 hover:text-white transition-all duration-300"
                          >
                            {spec}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Relevance to technology roles */}
                    <div className="mb-6">
                      <h5 className="text-sm font-semibold text-blue-400 uppercase tracking-wide mb-2">Technology Relevance</h5>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {edu.relevance}
                      </p>
                    </div>

                    {/* Progress bar effect */}
                    <div className="w-full bg-slate-700/50 backdrop-blur-sm rounded-full h-2 overflow-hidden">
                      <div 
                        className={`bg-gradient-to-r ${colorGradient} h-2 rounded-full w-full transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 shadow-sm`}
                        style={{ animationDelay: `${index * 200}ms` }}
                      ></div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Education summary */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-md border border-slate-600/50 rounded-2xl p-8 max-w-4xl mx-auto shadow-xl">
            <h3 className="text-2xl font-bold text-white mb-4">Multi-Domain Technical Foundation</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              My educational journey spans computer science fundamentals, advanced networking expertise, and security analysis - 
              creating a versatile foundation perfect for emerging technology roles including networking, technical support, and AI applications.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-6">
              <Badge className="bg-gradient-to-r from-purple-500 to-violet-600 text-white px-4 py-2">
                Computer Science Engineering
              </Badge>
              <Badge className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-2">
                Network Systems
              </Badge>
              <Badge className="bg-gradient-to-r from-red-500 to-rose-600 text-white px-4 py-2">
                Security Analysis
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;