import React from "react";
import { Settings, Building2, Brain, Palette, Database, Headphones } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Settings,
      title: "ERP Implementation",
      description: "Complete ERP implementation and deployment services",
      features: ["Architecture", "Custom Dev", "Migration", "Training"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Building2,
      title: "Industry Solutions",
      description: "Specialized solutions for specific industries",
      features: ["Healthcare", "Education", "Fitness", "Logistics"],
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Brain,
      title: "AI Integration",
      description: "Intelligent automation and AI-powered features",
      features: ["Forecasting", "Chatbots", "Document OCR", "Automation"],
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Palette,
      title: "UX Design",
      description: "User-centered design and localization services",
      features: ["RTL", "Localization", "Accessibility", "Responsive Design"],
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Database,
      title: "Data Migration",
      description: "Secure and efficient data migration services",
      features: ["Mapping", "API Integration", "Sync", "Backup"],
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: Headphones,
      title: "Support",
      description: "Comprehensive support and maintenance services",
      features: ["Updates", "Performance Tuning", "Development", "Monitoring"],
      color: "from-teal-500 to-green-500"
    }
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden" id="services">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, #4942E4 2px, transparent 2px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>
      
      <div className="section-container relative z-10">
        <div className="text-center mb-16 opacity-0 animate-on-scroll">
          <div className="pulse-chip mx-auto mb-4">
            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-pulse-500 text-white mr-2">06</span>
            <span>Services</span>
          </div>
          <h2 className="section-title mb-4">Professional Services</h2>
          <p className="section-subtitle mx-auto">
            Comprehensive services to ensure your ERP implementation success and ongoing growth.
          </p>
        </div>

        {/* Hexagonal grid layout */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="group relative"
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                {/* Hexagonal background */}
                <div className={`
                  relative bg-gradient-to-br ${service.color} rounded-2xl p-6 h-full
                  transform transition-all duration-300 hover:scale-105 hover:rotate-1
                  opacity-0 animate-on-scroll
                `}>
                  <div className="absolute inset-0 bg-white/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  
                  <div className="relative z-10 text-white h-full flex flex-col">
                    <div className="flex items-center justify-center w-16 h-16 bg-white/20 rounded-2xl mb-4 group-hover:scale-110 transition-transform">
                      <service.icon className="w-8 h-8" />
                    </div>
                    
                    <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                    <p className="text-white/90 text-sm mb-4 flex-1">{service.description}</p>
                    
                    <div className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-sm">
                          <div className="w-1.5 h-1.5 bg-white/80 rounded-full mr-2"></div>
                          {feature}
                        </div>
                      ))}
                    </div>
                    
                    <button className="mt-4 bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors backdrop-blur-sm">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Service process timeline */}
        <div className="mt-20 pt-16 border-t border-gray-200">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Our Service Process</h3>
            <p className="text-gray-600">From consultation to ongoing support, we're with you every step of the way.</p>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0 md:space-x-4">
            {["Consultation", "Planning", "Implementation", "Training", "Support"].map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-pulse-500 rounded-full flex items-center justify-center text-white font-bold mb-3">
                  {index + 1}
                </div>
                <span className="font-medium text-gray-900">{step}</span>
                {index < 4 && (
                  <div className="hidden md:block absolute w-full h-0.5 bg-pulse-200 top-6 left-1/2 transform -translate-y-1/2"></div>
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