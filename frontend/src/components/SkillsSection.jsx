import React, { useState } from 'react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { 
  Database, Code, Smartphone, Router, Network, Globe, 
  BarChart3, Lightbulb, Brain, Search, MessageCircle, 
  Target, Users as UsersIcon, Settings, Users
} from 'lucide-react';

const iconMap = {
  Database, Code, Smartphone, Router, Network, Globe,
  BarChart3, Lightbulb, Brain, Search, MessageCircle,
  Target, UsersIcon, Settings, Users
};

const SkillsSection = ({ skills }) => {
  const [activeTab, setActiveTab] = useState('technical');

  const skillCategories = [
    { id: 'technical', label: 'Technical Skills', color: 'from-blue-500 to-indigo-600' },
    { id: 'networking', label: 'Networking Skills', color: 'from-green-500 to-emerald-600' },
    { id: 'analytical', label: 'Analytical Skills', color: 'from-purple-500 to-violet-600' },
    { id: 'soft', label: 'Soft Skills', color: 'from-orange-500 to-red-600' }
  ];

  const getLevelColor = (level) => {
    switch (level) {
      case 'Expert': return 'from-green-500 to-emerald-600';
      case 'Advanced': return 'from-blue-500 to-indigo-600';
      case 'Basic': return 'from-yellow-500 to-orange-600';
      default: return 'from-gray-500 to-slate-600';
    }
  };

  const getLevelWidth = (level) => {
    switch (level) {
      case 'Expert': return 'w-full';
      case 'Advanced': return 'w-4/5';
      case 'Basic': return 'w-2/5';
      default: return 'w-1/4';
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-slate-800 mb-4">Technical Expertise</h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Comprehensive skill set tailored for Application Support Engineer excellence
          </p>
        </div>

        {/* Skill category tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {skillCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveTab(category.id)}
              className={`px-6 py-3 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 ${
                activeTab === category.id
                  ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                  : 'bg-white/60 backdrop-blur-sm border border-white/40 text-slate-600 hover:bg-white/70'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Skills grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {skills[activeTab]?.map((skill) => {
            const IconComponent = iconMap[skill.icon];
            const currentCategory = skillCategories.find(cat => cat.id === activeTab);
            
            return (
              <Card 
                key={skill.id}
                className="bg-white/60 backdrop-blur-md border border-white/40 hover:border-blue-300/60 hover:bg-white/70 transition-all duration-300 transform hover:scale-105 hover:shadow-xl group shadow-lg"
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-br ${currentCategory.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg flex-shrink-0`}>
                      {IconComponent && <IconComponent size={24} className="text-white" />}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-bold text-slate-800 mb-1 leading-tight">{skill.name}</h3>
                      <Badge 
                        className={`bg-gradient-to-r ${getLevelColor(skill.level)} text-white text-xs px-2 py-1`}
                      >
                        {skill.level}
                      </Badge>
                    </div>
                  </div>
                  
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">
                    {skill.description}
                  </p>
                  
                  {/* Skill level indicator */}
                  <div className="w-full bg-slate-200/50 backdrop-blur-sm rounded-full h-2 overflow-hidden">
                    <div 
                      className={`bg-gradient-to-r ${getLevelColor(skill.level)} h-2 rounded-full ${getLevelWidth(skill.level)} transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 shadow-sm`}
                    ></div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Skills summary */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-500/10 to-indigo-500/10 backdrop-blur-sm border border-blue-200/30 rounded-2xl p-8 max-w-4xl mx-auto shadow-lg">
            <h3 className="text-2xl font-bold text-slate-800 mb-4">Application Support Engineer Ready</h3>
            <p className="text-slate-600 leading-relaxed">
              With a comprehensive blend of technical expertise, networking knowledge, analytical thinking, and strong soft skills, 
              I'm equipped to excel in Application Support Engineer roles and drive exceptional customer experiences.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;