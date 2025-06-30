
import React from "react";
import { Settings, Building2, Brain, Palette, Database, Headphones } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Settings,
      title: "ERP Implementation",
      description: "Complete ERP implementation and deployment services",
      features: ["Architecture", "Custom Dev", "Migration", "Training"]
    },
    {
      icon: Building2,
      title: "Industry Solutions",
      description: "Specialized solutions for specific industries",
      features: ["Healthcare", "Education", "Fitness", "Logistics"]
    },
    {
      icon: Brain,
      title: "AI Integration",
      description: "Intelligent automation and AI-powered features",
      features: ["Forecasting", "Chatbots", "Document OCR", "Automation"]
    },
    {
      icon: Palette,
      title: "UX Design",
      description: "User-centered design and localization services",
      features: ["RTL", "Localization", "Accessibility", "Responsive Design"]
    },
    {
      icon: Database,
      title: "Data Migration",
      description: "Secure and efficient data migration services",
      features: ["Mapping", "API Integration", "Sync", "Backup"]
    },
    {
      icon: Headphones,
      title: "Support",
      description: "Comprehensive support and maintenance services",
      features: ["Updates", "Performance Tuning", "Development", "Monitoring"]
    }
  ];

  return (
    <section className="py-20 bg-gray-50" id="services">
      <div className="section-container">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-6 shadow-elegant hover:shadow-elegant-hover transition-all duration-300 hover:translate-y-[-5px] opacity-0 animate-on-scroll"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <div className="flex items-center justify-center w-12 h-12 bg-pulse-100 rounded-xl mb-4">
                <service.icon className="w-6 h-6 text-pulse-500" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">{service.title}</h3>
              <p className="text-gray-600 mb-4 text-sm">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start text-sm text-gray-700">
                    <div className="w-1.5 h-1.5 bg-pulse-500 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
