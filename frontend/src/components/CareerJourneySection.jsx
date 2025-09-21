import React from 'react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { 
  GraduationCap, Shield, Briefcase, Zap, Rocket,
  ArrowRight
} from 'lucide-react';

const getPhaseIcon = (phase) => {
  switch (phase) {
    case 'Foundation': return GraduationCap;
    case 'Specialization': return Shield;
    case 'Application': return Briefcase;
    case 'Evolution': return Zap;
    case 'Innovation': return Rocket;
    default: return Briefcase;
  }
};

const getPhaseColor = (phase) => {
  switch (phase) {
    case 'Foundation': return 'from-blue-500 to-indigo-600';
    case 'Specialization': return 'from-green-500 to-emerald-600';
    case 'Application': return 'from-purple-500 to-violet-600';
    case 'Evolution': return 'from-orange-500 to-red-600';
    case 'Innovation': return 'from-pink-500 to-rose-600';
    default: return 'from-gray-500 to-slate-600';
  }
};

const CareerJourneySection = ({ journey }) => {
  return (
    <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-white mb-4">Career Evolution</h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            A journey of continuous learning and adaptation across technology domains
          </p>
        </div>

        {/* Journey timeline */}
        <div className="max-w-6xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 rounded-full opacity-30"></div>
            
            {journey.map((item, index) => {
              const IconComponent = getPhaseIcon(item.phase);
              const colorGradient = getPhaseColor(item.phase);
              const isLeft = index % 2 === 0;
              const isFuture = item.year === 'Future';
              
              return (
                <div key={index} className={`relative flex items-center mb-12 ${isLeft ? 'flex-row-reverse' : 'flex-row'}`}>
                  {/* Timeline node */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                    <div className={`w-16 h-16 bg-gradient-to-br ${colorGradient} rounded-full flex items-center justify-center shadow-2xl border-4 border-slate-800 ${isFuture ? 'animate-pulse' : ''}`}>
                      <IconComponent size={28} className="text-white" />
                    </div>
                  </div>
                  
                  {/* Content card */}
                  <div className={`w-5/12 ${isLeft ? 'pr-8' : 'pl-8'}`}>
                    <Card className={`bg-slate-800/60 backdrop-blur-md border border-slate-700/50 hover:border-slate-600 hover:bg-slate-700/60 transition-all duration-300 transform hover:scale-105 shadow-xl ${isFuture ? 'border-pink-500/30' : ''}`}>
                      <CardContent className="p-6">
                        <div className="flex items-center gap-3 mb-3">
                          <Badge className={`bg-gradient-to-r ${colorGradient} text-white text-sm px-3 py-1`}>
                            {item.year}
                          </Badge>
                          <Badge variant="outline" className="border-slate-600 text-gray-300 text-xs">
                            {item.phase}
                          </Badge>
                        </div>
                        
                        <h3 className="text-xl font-bold text-white mb-3">
                          {item.title}
                        </h3>
                        
                        <p className="text-gray-300 leading-relaxed text-sm">
                          {item.description}
                        </p>
                        
                        {/* Progress indicator */}
                        <div className="mt-4 w-full bg-slate-700/50 rounded-full h-1 overflow-hidden">
                          <div 
                            className={`bg-gradient-to-r ${colorGradient} h-1 rounded-full transition-all duration-1000 ${
                              isFuture ? 'w-1/3 animate-pulse' : 'w-full'
                            }`}
                          ></div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                  
                  {/* Arrow indicator */}
                  {!isFuture && index < journey.length - 1 && (
                    <div className={`absolute top-20 left-1/2 transform -translate-x-1/2 ${isLeft ? 'rotate-45' : '-rotate-45'}`}>
                      <ArrowRight size={20} className="text-gray-500 animate-pulse" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Future focus call-to-action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-pink-600/20 to-purple-600/20 backdrop-blur-md border border-pink-500/30 rounded-2xl p-8 max-w-4xl mx-auto shadow-xl">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Rocket size={24} className="text-pink-400" />
              <h3 className="text-2xl font-bold text-white">Ready for What's Next</h3>
              <Rocket size={24} className="text-purple-400" />
            </div>
            <p className="text-gray-300 leading-relaxed">
              From networking foundations to AI exploration, my journey reflects adaptability and continuous growth. 
              Ready to bring this evolution mindset to your next-generation technology challenges.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerJourneySection;