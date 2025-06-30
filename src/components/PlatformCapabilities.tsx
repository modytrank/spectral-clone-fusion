import React from "react";
import { Cpu, Zap, Link, Smartphone, ArrowRight } from "lucide-react";

const PlatformCapabilities = () => {
  const capabilities = [
    {
      icon: Cpu,
      title: "Core Modules",
      description: "Comprehensive business modules covering all aspects of your operations",
      features: ["Accounting & Finance", "Human Resources", "Sales & CRM", "Inventory Management"],
      gradient: "from-blue-500 to-purple-600"
    },
    {
      icon: Zap,
      title: "AI Features",
      description: "Intelligent automation and insights powered by advanced AI",
      features: ["Predictive Analytics", "Smart Workflows", "Automated Reporting", "Decision Support"],
      gradient: "from-yellow-500 to-orange-600"
    },
    {
      icon: Link,
      title: "Integration",
      description: "Seamless connectivity with your existing tools and systems",
      features: ["API Integration", "Third-party Connectors", "Data Synchronization", "Legacy Migration"],
      gradient: "from-green-500 to-teal-600"
    },
    {
      icon: Smartphone,
      title: "Mobile & Cloud",
      description: "Access your business data anywhere, anytime, on any device",
      features: ["Mobile Apps", "Cloud Hosting", "Offline Capabilities", "Real-time Sync"],
      gradient: "from-purple-500 to-pink-600"
    }
  ];

  return (
    <section className="py-24 bg-white overflow-hidden relative" id="platform">
      {/* Modern decorative elements */}
      <div className="decorative-blob w-64 h-64 top-10 -right-32"></div>
      <div className="liquid-element w-full h-32 top-1/4 left-0"></div>
      <div className="floating-particle top-20 left-1/4"></div>
      <div className="floating-particle top-40 right-1/3" style={{ animationDelay: "1s" }}></div>
      <div className="crystalline-element top-32 right-1/4"></div>
      <div className="crystalline-element bottom-32 left-1/3" style={{ animationDelay: "2s" }}></div>
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20 opacity-0 animate-slide-up">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gray-100 text-gray-600 text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-pulse-500 rounded-full mr-3 animate-gentle-float"></span>
            Platform Capabilities
          </div>
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6 tracking-tight">
            Everything you need,<br />
            <span className="font-medium animate-gradient-flow bg-clip-text text-transparent">beautifully integrated</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            A comprehensive platform designed for modern businesses
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {capabilities.map((capability, index) => (
            <div 
              key={index}
              className={`group opacity-0 ${index % 2 === 0 ? 'animate-slide-left' : 'animate-slide-right'}`}
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <div className="relative bg-white rounded-3xl p-8 border border-gray-100 hover:border-gray-200 transition-all duration-500 hover:shadow-xl hover:-translate-y-2 overflow-hidden interactive-card">
                {/* Animated background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${capability.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                {/* Modern floating elements instead of particles */}
                <div className="geometric-shape w-8 h-8 top-4 right-4"></div>
                <div className="crystalline-element top-8 right-8" style={{ animationDelay: "0.5s" }}></div>
                
                <div className="relative z-10">
                  <div className="flex items-center mb-6">
                    <div className={`w-14 h-14 bg-gradient-to-br ${capability.gradient} rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-500 shadow-lg animate-crystalline`}>
                      <capability.icon className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-medium text-gray-900 group-hover:text-gray-800 transition-colors duration-300">{capability.title}</h3>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">{capability.description}</p>
                  
                  <div className="space-y-3 mb-6">
                    {capability.features.map((feature, featureIndex) => (
                      <div 
                        key={featureIndex} 
                        className="flex items-center text-sm text-gray-600 group-hover:text-gray-700 transition-all duration-300"
                        style={{ transitionDelay: `${featureIndex * 50}ms` }}
                      >
                        <div className="w-1.5 h-1.5 bg-pulse-500 rounded-full mr-3 group-hover:scale-125 transition-transform duration-300 animate-gentle-float" style={{ animationDelay: `${featureIndex * 0.2}s` }}></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex items-center text-pulse-500 font-medium text-sm group-hover:text-pulse-600 transition-colors duration-300 cursor-pointer">
                    Learn more
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive demo section */}
        <div className="mt-20 opacity-0 animate-fade-scale" style={{ animationDelay: "0.6s" }}>
          <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-3xl p-12 text-center border border-gray-200 relative overflow-hidden">
            {/* Modern animated background elements */}
            <div className="decorative-blob w-32 h-32 top-0 left-0"></div>
            <div className="liquid-element w-full h-16 bottom-0 left-0" style={{ animationDelay: "1s" }}></div>
            
            <div className="relative z-10">
              <h3 className="text-2xl font-light text-gray-900 mb-4">See it in action</h3>
              <p className="text-gray-600 mb-8 max-w-2xl mx-auto">Experience our platform capabilities with a personalized demo tailored to your business needs.</p>
              <button className="bg-pulse-500 text-white px-8 py-3 rounded-full font-medium hover:bg-pulse-600 transition-all duration-300 hover:scale-105 hover:shadow-lg group animate-gentle-float">
                Schedule Demo
                <ArrowRight className="w-4 h-4 ml-2 inline group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlatformCapabilities;