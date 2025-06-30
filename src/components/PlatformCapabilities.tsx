import React from "react";
import { Cpu, Zap, Link, Smartphone, ArrowRight } from "lucide-react";

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
    <section className="bg-white" id="platform">
      {/* Enhanced Header with Background */}
      <div 
        className="relative py-32 bg-cover bg-center"
        style={{
          backgroundImage: 'url("/Header-background.webp")',
          backgroundPosition: 'center 30%'
        }}
      >
        {/* Enhanced overlay with better contrast */}
        <div className="absolute inset-0 bg-gradient-to-br from-pulse-600/40 via-purple-600/30 to-blue-600/40"></div>
        <div className="absolute inset-0 bg-black/20"></div>
        
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <div className="section-header-badge animate-badge-float mb-8">
            <span className="font-semibold">Platform Capabilities</span>
          </div>
          <h2 className="section-header-title animate-header-glow">
            Everything you need,<br />
            <span className="font-medium">beautifully integrated</span>
          </h2>
          <p className="section-header-subtitle">
            A comprehensive platform designed for modern businesses
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="py-20 max-w-5xl mx-auto px-6">
        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {capabilities.map((capability, index) => (
            <div 
              key={index}
              className="group opacity-0 animate-slide-up"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <div className="bg-white rounded-3xl p-10 border border-gray-200 hover:border-gray-300 transition-all duration-700 hover:shadow-sm hover:-translate-y-1">
                {/* Header */}
                <div className="flex items-center mb-8">
                  <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center mr-5 group-hover:bg-gray-100 transition-colors duration-500">
                    <capability.icon className="w-7 h-7 text-gray-600" />
                  </div>
                  <h3 className="text-xl font-medium text-gray-900">{capability.title}</h3>
                </div>
                
                {/* Description */}
                <p className="text-gray-500 leading-relaxed mb-8">{capability.description}</p>
                
                {/* Features */}
                <div className="space-y-3 mb-8">
                  {capability.features.map((feature, featureIndex) => (
                    <div 
                      key={featureIndex} 
                      className="flex items-center text-sm text-gray-400"
                    >
                      <div className="w-1.5 h-1.5 bg-gray-300 rounded-full mr-4"></div>
                      {feature}
                    </div>
                  ))}
                </div>
                
                {/* Link */}
                <div className="flex items-center text-gray-400 text-sm font-medium group-hover:text-gray-600 transition-colors duration-300 cursor-pointer">
                  Learn more
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-0.5 transition-transform duration-300" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-24 text-center opacity-0 animate-slide-up" style={{ animationDelay: "0.5s" }}>
          <div className="bg-white rounded-3xl p-16 border border-gray-200 shadow-sm">
            <h3 className="text-2xl font-light text-gray-900 mb-4">Ready to explore?</h3>
            <p className="text-gray-500 mb-8 max-w-lg mx-auto leading-relaxed">
              See how our platform capabilities can transform your business operations.
            </p>
            <button className="bg-gray-900 text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors duration-300">
              Request Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlatformCapabilities;