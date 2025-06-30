import React from "react";
import { Mail, Phone, MapPin, MessageCircle, Calendar, Users } from "lucide-react";

const Contact = () => {
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
      title: "Schedule Consultation",
      description: "Book a free consultation"
    },
    {
      icon: MessageCircle,
      title: "WhatsApp Support",
      description: "Get instant support via WhatsApp"
    }
  ];

  return (
    <section className="py-20 bg-white" id="contact">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="opacity-0 animate-on-scroll">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Send us a message</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                  <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pulse-500 focus:border-transparent" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input type="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pulse-500 focus:border-transparent" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Company</label>
                  <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pulse-500 focus:border-transparent" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                  <input type="tel" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pulse-500 focus:border-transparent" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Inquiry Type</label>
                <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pulse-500 focus:border-transparent">
                  <option>General Inquiry</option>
                  <option>ERP Implementation</option>
                  <option>Custom Development</option>
                  <option>Support</option>
                  <option>Partnership</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea rows={4} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pulse-500 focus:border-transparent" placeholder="Tell us about your project..."></textarea>
              </div>
              <button type="submit" className="w-full bg-pulse-500 text-white px-6 py-3 rounded-lg hover:bg-pulse-600 transition-colors duration-200">
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info & Quick Actions */}
          <div className="space-y-8">
            {/* Contact Information */}
            <div className="opacity-0 animate-on-scroll" style={{ animationDelay: "0.2s" }}>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <a 
                    key={index}
                    href={info.link}
                    className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                  >
                    <div className="flex items-center justify-center w-10 h-10 bg-pulse-100 rounded-lg mr-4">
                      <info.icon className="w-5 h-5 text-pulse-500" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">{info.title}</p>
                      <p className="text-gray-600">{info.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="opacity-0 animate-on-scroll" style={{ animationDelay: "0.4s" }}>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Quick Actions</h3>
              <div className="space-y-4">
                {quickActions.map((action, index) => (
                  <button 
                    key={index}
                    className="w-full flex items-center p-4 bg-white border border-gray-200 rounded-lg hover:shadow-elegant-hover transition-all duration-200"
                  >
                    <div className="flex items-center justify-center w-10 h-10 bg-pulse-100 rounded-lg mr-4">
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
    </section>
  );
};

export default Contact;