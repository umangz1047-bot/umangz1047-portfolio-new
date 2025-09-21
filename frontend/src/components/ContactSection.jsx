import React, { useState } from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { useToast } from '../hooks/use-toast';
import { Mail, MapPin, Linkedin, Send, CheckCircle, Zap, Brain } from 'lucide-react';

const ContactSection = ({ contactInfo }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    role: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Mock API call - will be replaced with real backend
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setIsSubmitted(true);
      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for reaching out. I'll get back to you within 24 hours.",
      });
      
      setFormData({
        name: '',
        email: '',
        company: '',
        role: '',
        message: ''
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "There was an issue sending your message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setIsSubmitted(false), 3000);
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-slate-800 to-slate-900" id="contact">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-white mb-4">Let's Build Something Amazing</h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Ready to bring adaptable tech expertise to your team? Whether it's networking, technical support, or exploring AI opportunities - let's connect.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Multiple Ways to Connect</h3>
              <p className="text-gray-300 mb-8 leading-relaxed">
                Whether you're seeking a versatile technologist for networking roles, technical support positions, 
                or entry-level AI opportunities, I'm excited to discuss how my adaptable skills can contribute to your team's success.
              </p>
            </div>

            {/* Contact details */}
            <div className="space-y-6">
              <div className="flex items-center gap-4 bg-slate-800/60 backdrop-blur-sm border border-slate-700/50 p-4 rounded-2xl shadow-lg hover:bg-slate-700/60 transition-colors">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                  <Mail size={24} className="text-white" />
                </div>
                <div>
                  <div className="text-gray-400 text-sm font-medium">Email</div>
                  <div className="text-white font-semibold">{contactInfo.email}</div>
                </div>
              </div>
              
              <div className="flex items-center gap-4 bg-slate-800/60 backdrop-blur-sm border border-slate-700/50 p-4 rounded-2xl shadow-lg hover:bg-slate-700/60 transition-colors">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                  <Linkedin size={24} className="text-white" />
                </div>
                <div>
                  <div className="text-gray-400 text-sm font-medium">LinkedIn</div>
                  <div className="text-white font-semibold">Professional Profile</div>
                </div>
              </div>
              
              <div className="flex items-center gap-4 bg-slate-800/60 backdrop-blur-sm border border-slate-700/50 p-4 rounded-2xl shadow-lg hover:bg-slate-700/60 transition-colors">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                  <MapPin size={24} className="text-white" />
                </div>
                <div>
                  <div className="text-gray-400 text-sm font-medium">Location</div>
                  <div className="text-white font-semibold">{contactInfo.location}</div>
                </div>
              </div>
            </div>

            {/* Opportunity areas */}
            <Card className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-md border border-slate-600/50 shadow-xl">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Zap size={24} className="text-yellow-400" />
                  <h4 className="text-white font-bold text-lg">Open to Opportunities</h4>
                  <Brain size={24} className="text-purple-400" />
                </div>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div className="bg-slate-800/50 rounded-lg p-3 text-center">
                    <div className="text-blue-400 font-semibold">Networking Roles</div>
                    <div className="text-gray-300">Infrastructure & Security</div>
                  </div>
                  <div className="bg-slate-800/50 rounded-lg p-3 text-center">
                    <div className="text-green-400 font-semibold">Technical Support</div>
                    <div className="text-gray-300">Multi-domain Excellence</div>
                  </div>
                  <div className="bg-slate-800/50 rounded-lg p-3 text-center">
                    <div className="text-purple-400 font-semibold">Entry-level AI</div>
                    <div className="text-gray-300">Learning & Growing</div>
                  </div>
                  <div className="bg-slate-800/50 rounded-lg p-3 text-center">
                    <div className="text-orange-400 font-semibold">Hybrid Roles</div>
                    <div className="text-gray-300">Best of Both Worlds</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="bg-slate-800/60 backdrop-blur-md border border-slate-700/50 hover:border-slate-600 hover:bg-slate-700/60 transition-all duration-300 shadow-lg">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name" className="text-gray-300 font-medium">Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-slate-800/50 backdrop-blur-sm border border-slate-600/50 text-white focus:border-blue-400 focus:bg-slate-700/50 mt-1 shadow-sm"
                      placeholder="Your full name"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="email" className="text-gray-300 font-medium">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-slate-800/50 backdrop-blur-sm border border-slate-600/50 text-white focus:border-blue-400 focus:bg-slate-700/50 mt-1 shadow-sm"
                      placeholder="your.email@company.com"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="company" className="text-gray-300 font-medium">Company</Label>
                    <Input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="bg-slate-800/50 backdrop-blur-sm border border-slate-600/50 text-white focus:border-blue-400 focus:bg-slate-700/50 mt-1 shadow-sm"
                      placeholder="Your company"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="role" className="text-gray-300 font-medium">Role</Label>
                    <Input
                      id="role"
                      name="role"
                      value={formData.role}
                      onChange={handleChange}
                      className="bg-slate-800/50 backdrop-blur-sm border border-slate-600/50 text-white focus:border-blue-400 focus:bg-slate-700/50 mt-1 shadow-sm"
                      placeholder="Your role/title"
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="message" className="text-gray-300 font-medium">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="bg-slate-800/50 backdrop-blur-sm border border-slate-600/50 text-white focus:border-blue-400 focus:bg-slate-700/50 mt-1 resize-none shadow-sm"
                    placeholder="Tell me about the role, technical challenges, or how my versatile tech background might fit your team..."
                  />
                </div>
                
                <Button
                  type="submit"
                  disabled={isSubmitting || isSubmitted}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 transition-all duration-300 transform hover:scale-105 shadow-lg border-0"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Sending Message...
                    </>
                  ) : isSubmitted ? (
                    <>
                      <CheckCircle size={20} className="mr-2" />
                      Message Sent!
                    </>
                  ) : (
                    <>
                      <Send size={20} className="mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;