import React, { useState } from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { useToast } from '../hooks/use-toast';
import { Mail, Phone, MapPin, Linkedin, Send, CheckCircle } from 'lucide-react';

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
    <section className="py-20 bg-gradient-to-b from-purple-50/30 to-slate-100/50" id="contact">
      <div className="container mx-auto px-6">
        {/* Glassmorphism section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-slate-800 mb-4">Let's Connect</h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Ready to discuss how my application support expertise can benefit your team? Let's start the conversation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info with glassmorphism */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-6">Get in Touch</h3>
              <p className="text-slate-600 mb-8 leading-relaxed">
                Whether you're looking for an experienced Application Support Engineer, technical problem solver, or customer success expert, 
                I'm here to discuss how we can create exceptional outcomes together.
              </p>
            </div>

            {/* Contact details with glassmorphism */}
            <div className="space-y-6">
              <div className="flex items-center gap-4 bg-white/50 backdrop-blur-sm border border-white/40 p-4 rounded-2xl shadow-sm">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
                  <Mail size={24} className="text-white" />
                </div>
                <div>
                  <div className="text-slate-500 text-sm font-medium">Email</div>
                  <div className="text-slate-800 font-semibold">{contactInfo.email}</div>
                </div>
              </div>
              
              <div className="flex items-center gap-4 bg-white/50 backdrop-blur-sm border border-white/40 p-4 rounded-2xl shadow-sm">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
                  <Linkedin size={24} className="text-white" />
                </div>
                <div>
                  <div className="text-slate-500 text-sm font-medium">LinkedIn</div>
                  <div className="text-slate-800 font-semibold">Professional Profile</div>
                </div>
              </div>
              
              <div className="flex items-center gap-4 bg-white/50 backdrop-blur-sm border border-white/40 p-4 rounded-2xl shadow-sm">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
                  <MapPin size={24} className="text-white" />
                </div>
                <div>
                  <div className="text-slate-500 text-sm font-medium">Location</div>
                  <div className="text-slate-800 font-semibold">{contactInfo.location}</div>
                </div>
              </div>
            </div>

            {/* Call to action box with glassmorphism */}
            <Card className="bg-gradient-to-br from-blue-500/90 to-indigo-600/90 backdrop-blur-sm border border-blue-400/30 shadow-xl">
              <CardContent className="p-6">
                <h4 className="text-white font-bold text-lg mb-2">Ready for Application Support Excellence?</h4>
                <p className="text-blue-100 mb-4">Let's discuss your technical challenges and growth opportunities.</p>
                <Button 
                  variant="secondary" 
                  className="bg-white/90 backdrop-blur-sm text-blue-700 hover:bg-white font-semibold w-full shadow-lg"
                >
                  Schedule a Technical Discussion
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form with glassmorphism */}
          <Card className="bg-white/60 backdrop-blur-md border border-white/40 hover:border-blue-300/60 hover:bg-white/70 transition-all duration-300 shadow-lg">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-slate-800 mb-6">Send a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name" className="text-slate-700 font-medium">Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-white/50 backdrop-blur-sm border border-slate-300/50 text-slate-800 focus:border-blue-400 focus:bg-white/70 mt-1 shadow-sm"
                      placeholder="Your full name"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="email" className="text-slate-700 font-medium">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-white/50 backdrop-blur-sm border border-slate-300/50 text-slate-800 focus:border-blue-400 focus:bg-white/70 mt-1 shadow-sm"
                      placeholder="your.email@company.com"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="company" className="text-slate-700 font-medium">Company</Label>
                    <Input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="bg-white/50 backdrop-blur-sm border border-slate-300/50 text-slate-800 focus:border-blue-400 focus:bg-white/70 mt-1 shadow-sm"
                      placeholder="Your company"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="role" className="text-slate-700 font-medium">Role</Label>
                    <Input
                      id="role"
                      name="role"
                      value={formData.role}
                      onChange={handleChange}
                      className="bg-white/50 backdrop-blur-sm border border-slate-300/50 text-slate-800 focus:border-blue-400 focus:bg-white/70 mt-1 shadow-sm"
                      placeholder="Your role/title"
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="message" className="text-slate-700 font-medium">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="bg-white/50 backdrop-blur-sm border border-slate-300/50 text-slate-800 focus:border-blue-400 focus:bg-white/70 mt-1 resize-none shadow-sm"
                    placeholder="Tell me about your application support needs, technical challenges, or how we might collaborate..."
                  />
                </div>
                
                <Button
                  type="submit"
                  disabled={isSubmitting || isSubmitted}
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-3 transition-all duration-300 transform hover:scale-105 shadow-lg"
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