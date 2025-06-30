import React from "react";
import { Cpu, Zap, Link, Smartphone } from "lucide-react";

const PlatformCapabilities = () => {
  const capabilities = [
    {
      icon: Cpu,
      title: "Core Modules",
      description: "Comprehensive business modules covering all aspects of your operations",
      features: ["Accounting & Finance", "Human Resources", "Sales & CRM", "Inventory Management"]
    },
    {
      icon: Zap,
      title: "AI Features",
      description: "Intelligent automation and insights powered by advanced AI",
      features: ["Predictive Analytics", "Smart Workflows", "Automated Reporting", "Decision Support"]
    },
    {
      icon: Link,
      title: "Integration",
      description: "Seamless connectivity with your existing tools and systems",
      features: ["API Integration", "Third-party Connectors", "Data Synchronization", "Legacy Migration"]
    },
    {
      icon: Smartphone,
      title: "Mobile & Cloud",
      description: "Access your business data anywhere, anytime, on any device",
      features: ["Mobile Apps", "Cloud Hosting", "Offline Capabilities", "Real-time Sync"]
    }
  ];

  return (
    <section className="py-24 bg-white" id="platform">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-20 opacity-0 animate-slide-up">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gray-100 text-gray-600 text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-pulse-500 rounded-full mr-3"></span>
            Platform Capabilities
          </div>
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6 tracking-tight">
            Everything you need,<br />
            <span className="font-medium">beautifully integrated</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            A comprehensive platform designed for modern businesses
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {capabilities.map((capability, index) => (
            <div 
              key={index}
              className={`group opacity-0 ${index % 2 === 0 ? 'animate-slide-left' : 'animate-slide-right'}`}
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <div className="flex items-start space-x-6 hover:animate-gentle-float">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gray-100 rounded-2xl flex items-center justify-center group-hover:bg-pulse-50 transition-all duration-500">
                    <capability.icon className="w-6 h-6 text-gray-600 group-hover:text-pulse-500 transition-all duration-500" />
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-xl font-medium text-gray-900 mb-3">{capability.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{capability.description}</p>
                  <div className="space-y-2">
                    {capability.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-gray-500">
                        <div className="w-1 h-1 bg-gray-300 rounded-full mr-3"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlatformCapabilities;