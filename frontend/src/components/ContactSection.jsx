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
    <section className="py-20 bg-black" id="contact">
      <div className="container mx-auto px-6">
        {/* Netflix-style section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-white mb-4">Watch Next: Let's Connect</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Ready to elevate your operations with Netflix-worthy Application Support excellence? Let's start the conversation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
              <p className="text-gray-300 mb-8 leading-relaxed">
                Whether you're looking for a strategic partner, technical leader, or customer success innovator, 
                I'm here to discuss how we can create transformative outcomes together.
              </p>
            </div>

            {/* Contact details */}
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
                  <Mail size={24} className="text-white" />
                </div>
                <div>
                  <div className="text-gray-400 text-sm">Email</div>
                  <div className="text-white font-semibold">{contactInfo.email}</div>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
                  <Linkedin size={24} className="text-white" />
                </div>
                <div>
                  <div className="text-gray-400 text-sm">LinkedIn</div>
                  <div className="text-white font-semibold">{contactInfo.linkedin}</div>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
                  <MapPin size={24} className="text-white" />
                </div>
                <div>
                  <div className="text-gray-400 text-sm">Location</div>
                  <div className="text-white font-semibold">{contactInfo.location}</div>
                </div>
              </div>
            </div>

            {/* Call to action box */}
            <Card className="bg-red-600 border-red-600">
              <CardContent className="p-6">
                <h4 className="text-white font-bold text-lg mb-2">Ready for a Consultation?</h4>
                <p className="text-red-100 mb-4">Let's discuss your technical operations challenges and growth opportunities.</p>
                <Button 
                  variant="secondary" 
                  className="bg-white text-red-600 hover:bg-gray-100 font-semibold w-full"
                >
                  Schedule a Strategy Session
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="bg-gray-900 border-gray-800 hover:border-red-600 transition-all duration-300">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name" className="text-gray-300">Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-gray-800 border-gray-700 text-white focus:border-red-600 mt-1"
                      placeholder="Your full name"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="email" className="text-gray-300">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-gray-800 border-gray-700 text-white focus:border-red-600 mt-1"
                      placeholder="your.email@company.com"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="company" className="text-gray-300">Company</Label>
                    <Input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="bg-gray-800 border-gray-700 text-white focus:border-red-600 mt-1"
                      placeholder="Your company"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="role" className="text-gray-300">Role</Label>
                    <Input
                      id="role"
                      name="role"
                      value={formData.role}
                      onChange={handleChange}
                      className="bg-gray-800 border-gray-700 text-white focus:border-red-600 mt-1"
                      placeholder="Your role/title"
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="message" className="text-gray-300">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="bg-gray-800 border-gray-700 text-white focus:border-red-600 mt-1 resize-none"
                    placeholder="Tell me about your technical operations challenges, growth opportunities, or how we might collaborate..."
                  />
                </div>
                
                <Button
                  type="submit"
                  disabled={isSubmitting || isSubmitted}
                  className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 transition-all duration-300 transform hover:scale-105"
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