import React, { useState } from 'react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { 
  Network, Shield, Wifi, Globe, Server, Wrench, Database, Users,
  Code, Smartphone, Zap, Brain, BarChart3, Cloud, GitBranch
} from 'lucide-react';

const iconMap = {
  Network, Shield, Wifi, Globe, Server, Wrench, Database, Users,
  Code, Smartphone, Zap, Brain, BarChart3, Cloud, GitBranch
};

const SkillsSection = ({ skills }) => {
  const [activeTab, setActiveTab] = useState('networking');

  const skillCategories = [
    { id: 'networking', label: 'Networking', color: 'from-blue-500 to-cyan-600', description: 'Network infrastructure expertise' },
    { id: 'technical', label: 'Technical Support', color: 'from-green-500 to-emerald-600', description: 'System administration & support' },
    { id: 'programming', label: 'Programming Foundations', color: 'from-purple-500 to-violet-600', description: 'Development & scripting skills' },
    { id: 'emerging', label: 'Emerging AI Skills', color: 'from-orange-500 to-red-600', description: 'Future-focused technologies' }
  ];

  const getLevelColor = (level) => {
    switch (level) {
      case 'Expert': return 'from-green-500 to-emerald-600';
      case 'Advanced': return 'from-blue-500 to-indigo-600';
      case 'Intermediate': return 'from-yellow-500 to-orange-600';
      case 'Basic': return 'from-gray-500 to-slate-600';
      case 'Learning': return 'from-pink-500 to-rose-600';
      default: return 'from-gray-500 to-slate-600';
    }
  };

  const getLevelWidth = (level) => {
    switch (level) {
      case 'Expert': return 'w-full';
      case 'Advanced': return 'w-4/5';
      case 'Intermediate': return 'w-3/5';
      case 'Basic': return 'w-2/5';
      case 'Learning': return 'w-1/3';
      default: return 'w-1/4';
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-slate-800 to-slate-900">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-white mb-4">Multi-Domain Expertise</h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Versatile skill set spanning traditional networking, technical support, programming foundations, and emerging AI technologies
          </p>
        </div>

        {/* Skill category tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {skillCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveTab(category.id)}
              className={`px-6 py-4 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 group ${
                activeTab === category.id
                  ? `bg-gradient-to-r ${category.color} text-white shadow-xl`
                  : 'bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 text-gray-300 hover:bg-slate-700/50 hover:text-white'
              }`}
            >
              <div className="text-lg font-bold">{category.label}</div>
              <div className="text-xs opacity-80 mt-1">{category.description}</div>
            </button>
          ))}
        </div>

        {/* Skills grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {skills[activeTab]?.map((skill) => {
            const IconComponent = iconMap[skill.icon];
            const currentCategory = skillCategories.find(cat => cat.id === activeTab);
            
            return (
              <Card 
                key={skill.id}
                className="bg-slate-800/60 backdrop-blur-md border border-slate-700/50 hover:border-slate-600 hover:bg-slate-700/60 transition-all duration-300 transform hover:scale-105 hover:shadow-xl group shadow-lg"
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-br ${currentCategory.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg flex-shrink-0`}>
                      {IconComponent && <IconComponent size={24} className="text-white" />}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-bold text-white mb-1 leading-tight">{skill.name}</h3>
                      <Badge 
                        className={`bg-gradient-to-r ${getLevelColor(skill.level)} text-white text-xs px-2 py-1`}
                      >
                        {skill.level}
                      </Badge>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">
                    {skill.description}
                  </p>
                  
                  {/* Skill level indicator */}
                  <div className="w-full bg-slate-700/50 backdrop-blur-sm rounded-full h-2 overflow-hidden">
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
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-md border border-slate-600/50 rounded-2xl p-8 max-w-4xl mx-auto shadow-xl">
            <h3 className="text-2xl font-bold text-white mb-4">Adaptable Technology Professional</h3>
            <p className="text-gray-300 leading-relaxed mb-6">
              With expertise spanning networking infrastructure, technical support excellence, programming foundations, and emerging AI technologies, 
              I bring versatile problem-solving capabilities to modern technology challenges.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Badge className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-4 py-2 text-sm">
                Network Expert
              </Badge>
              <Badge className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-2 text-sm">
                Technical Support
              </Badge>
              <Badge className="bg-gradient-to-r from-purple-500 to-violet-600 text-white px-4 py-2 text-sm">
                Programming
              </Badge>
              <Badge className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-4 py-2 text-sm">
                AI Ready
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;