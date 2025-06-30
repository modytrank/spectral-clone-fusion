import React, { useState } from "react";
import { Mail, Phone, MapPin, MessageCircle, Calendar, Users, Send, CheckCircle } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    company: "",
    phone: "",
    inquiryType: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "info@movinware.com",
      link: "mailto:info@movinware.com"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+971 4 123 4567",
      link: "tel:+97141234567"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Dubai, UAE",
      link: "#"
    }
  ];

  const quickActions = [
    {
      icon: Users,
      title: "Talk to Expert",
      description: "Schedule a call with our experts"
    },
    {
      icon: Calendar,
      title: "Schedule Demo",
      description: "Book a personalized demo"
    },
    {
      icon: MessageCircle,
      title: "Live Chat",
      description: "Get instant support"
    }
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        fullName: "",
        email: "",
        company: "",
        phone: "",
        inquiryType: "",
        message: ""
      });
    }, 3000);
  };

  return (
    <section className="py-24 bg-gray-50" id="contact">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-20 opacity-0 animate-slide-up">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white text-gray-600 text-sm font-medium mb-6 shadow-sm">
            <span className="w-2 h-2 bg-pulse-500 rounded-full mr-3 animate-pulse-glow"></span>
            Get In Touch
          </div>
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6 tracking-tight">
            Ready to transform<br />
            <span className="font-medium gradient-text">your business?</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Let's discuss how MovinWare can streamline your operations and boost efficiency
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="opacity-0 animate-slide-left">
            <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-sm interactive-card">
              <h3 className="text-2xl font-medium text-gray-900 mb-6">Send us a message</h3>
              
              {isSubmitted ? (
                <div className="text-center py-12 animate-fade-scale">
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4 animate-pulse-glow" />
                  <h4 className="text-xl font-medium text-gray-900 mb-2">Message sent successfully!</h4>
                  <p className="text-gray-600">We'll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="animate-gentle-float">
                      <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                      <input 
                        type="text" 
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pulse-500 focus:border-transparent transition-all duration-300" 
                      />
                    </div>
                    <div className="animate-gentle-float" style={{ animationDelay: "0.1s" }}>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                      <input 
                        type="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pulse-500 focus:border-transparent transition-all duration-300" 
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="animate-gentle-float" style={{ animationDelay: "0.2s" }}>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Company</label>
                      <input 
                        type="text" 
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pulse-500 focus:border-transparent transition-all duration-300" 
                      />
                    </div>
                    <div className="animate-gentle-float" style={{ animationDelay: "0.3s" }}>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                      <input 
                        type="tel" 
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pulse-500 focus:border-transparent transition-all duration-300" 
                      />
                    </div>
                  </div>
                  
                  <div className="animate-gentle-float" style={{ animationDelay: "0.4s" }}>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Inquiry Type</label>
                    <select 
                      name="inquiryType"
                      value={formData.inquiryType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pulse-500 focus:border-transparent transition-all duration-300"
                    >
                      <option value="">Select inquiry type</option>
                      <option value="demo">Request Demo</option>
                      <option value="implementation">ERP Implementation</option>
                      <option value="support">Support</option>
                      <option value="partnership">Partnership</option>
                    </select>
                  </div>
                  
                  <div className="animate-gentle-float" style={{ animationDelay: "0.5s" }}>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                    <textarea 
                      rows={4} 
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pulse-500 focus:border-transparent transition-all duration-300" 
                      placeholder="Tell us about your project..."
                    />
                  </div>
                  
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-pulse-500 text-white px-6 py-3 rounded-xl hover:bg-pulse-600 transition-all duration-300 flex items-center justify-center font-medium disabled:opacity-50 animate-gentle-float"
                    style={{ animationDelay: "0.6s" }}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="w-4 h-4 ml-2" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Contact Info & Quick Actions */}
          <div className="space-y-8">
            {/* Contact Information */}
            <div className="opacity-0 animate-slide-right" style={{ animationDelay: "0.2s" }}>
              <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-sm">
                <h3 className="text-2xl font-medium text-gray-900 mb-6">Contact Information</h3>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <a 
                      key={index}
                      href={info.link}
                      className="flex items-center p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all duration-300 group interactive-card"
                    >
                      <div className="flex items-center justify-center w-12 h-12 bg-white rounded-xl mr-4 group-hover:bg-pulse-50 transition-colors duration-300 animate-gentle-float">
                        <info.icon className="w-5 h-5 text-pulse-500" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">{info.title}</p>
                        <p className="text-gray-600 text-sm">{info.value}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="opacity-0 animate-slide-right" style={{ animationDelay: "0.4s" }}>
              <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-sm">
                <h3 className="text-2xl font-medium text-gray-900 mb-6">Quick Actions</h3>
                <div className="space-y-4">
                  {quickActions.map((action, index) => (
                    <button 
                      key={index}
                      className="w-full flex items-center p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all duration-300 group interactive-card"
                    >
                      <div className="flex items-center justify-center w-12 h-12 bg-white rounded-xl mr-4 group-hover:bg-pulse-50 transition-colors duration-300 animate-gentle-float" style={{ animationDelay: `${index * 0.2}s` }}>
                        <action.icon className="w-5 h-5 text-pulse-500" />
                      </div>
                      <div className="text-left">
                        <p className="font-medium text-gray-900">{action.title}</p>
                        <p className="text-sm text-gray-600">{action.description}</p>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Response time indicator */}
        <div className="mt-16 text-center opacity-0 animate-fade-scale" style={{ animationDelay: "0.6s" }}>
          <div className="inline-flex items-center px-6 py-3 bg-white rounded-full border border-gray-200 shadow-sm">
            <div className="w-2 h-2 bg-green-500 rounded-full mr-3 animate-pulse-glow"></div>
            <span className="text-sm text-gray-600">We typically respond within 2 hours</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;