import React from "react";
import { Settings, Building2, Brain, Palette, Database, Headphones } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Settings,
      title: "ERP Implementation",
      description: "Complete ERP implementation and deployment services"
    },
    {
      icon: Building2,
      title: "Industry Solutions",
      description: "Specialized solutions for specific industries"
    },
    {
      icon: Brain,
      title: "AI Integration",
      description: "Intelligent automation and AI-powered features"
    },
    {
      icon: Palette,
      title: "UX Design",
      description: "User-centered design and localization services"
    },
    {
      icon: Database,
      title: "Data Migration",
      description: "Secure and efficient data migration services"
    },
    {
      icon: Headphones,
      title: "Support",
      description: "Comprehensive support and maintenance services"
    }
  ];

  return (
    <section className="py-24 bg-gray-50" id="services">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-20 opacity-0 animate-slide-up">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white text-gray-600 text-sm font-medium mb-6 shadow-sm">
            <span className="w-2 h-2 bg-pulse-500 rounded-full mr-3"></span>
            Professional Services
          </div>
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6 tracking-tight">
            End-to-end<br />
            <span className="font-medium">support</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group opacity-0 animate-slide-up hover:animate-gentle-float"
              style={{ animationDelay: `${0.05 * index}s` }}
            >
              <div className="bg-white rounded-3xl p-8 hover:shadow-lg transition-all duration-500 border border-gray-100">
                <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-pulse-50 transition-all duration-500">
                  <service.icon className="w-6 h-6 text-gray-600 group-hover:text-pulse-500 transition-all duration-500" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 opacity-0 animate-fade-scale" style={{ animationDelay: "0.4s" }}>
          <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0 md:space-x-8 relative">
            {["Consultation", "Planning", "Implementation", "Training", "Support"].map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center relative">
                <div className="w-10 h-10 bg-pulse-500 rounded-full flex items-center justify-center text-white font-medium mb-3 text-sm">
                  {index + 1}
                </div>
                <span className="text-sm font-medium text-gray-700">{step}</span>
                {index < 4 && (
                  <div className="hidden md:block absolute left-full top-5 w-full h-px bg-gray-200 transform -translate-y-1/2"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;