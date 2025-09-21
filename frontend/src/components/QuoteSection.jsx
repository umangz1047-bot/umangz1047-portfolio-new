import React from 'react';
import { Quote } from 'lucide-react';

const QuoteSection = ({ quote }) => {
  return (
    <section className="py-20 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Quote icon */}
          <div className="mb-8">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto shadow-2xl">
              <Quote size={40} className="text-white" />
            </div>
          </div>
          
          {/* Main quote */}
          <blockquote className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8 leading-tight">
            <span className="bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">
              "{quote.text}"
            </span>
          </blockquote>
          
          {/* Author */}
          <div className="mb-6">
            <cite className="text-xl md:text-2xl text-gray-300 font-semibold not-italic">
              — {quote.author}
            </cite>
          </div>
          
          {/* Context */}
          <div className="bg-slate-800/40 backdrop-blur-md border border-slate-700/50 rounded-2xl p-6 max-w-3xl mx-auto shadow-xl">
            <p className="text-gray-300 text-lg leading-relaxed italic">
              {quote.context}
            </p>
          </div>
          
          {/* Decorative elements */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuoteSection;