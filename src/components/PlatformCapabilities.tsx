import React from "react";
import { Cpu, Zap, Link, Smartphone } from "lucide-react";

const PlatformCapabilities = () => {
  const capabilities = [
    {
      icon: Cpu,
      title: "Core Modules",
      description: "Comprehensive business modules covering all aspects of your operations",
      features: ["Accounting & Finance", "Human Resources", "Sales & CRM", "Inventory Management", "Manufacturing", "Asset Management"]
    },
    {
      icon: Zap,
      title: "AI Features",
      description: "Intelligent automation and insights powered by advanced AI",
      features: ["Predictive Analytics", "Smart Workflows", "Automated Reporting", "Decision Support", "Process Optimization", "Data Intelligence"]
    },
    {
      icon: Link,
      title: "Integration Capabilities",
      description: "Seamless connectivity with your existing tools and systems",
      features: ["API Integration", "Third-party Connectors", "Data Synchronization", "Legacy System Migration", "Cloud Platforms", "Custom Integrations"]
    },
    {
      icon: Smartphone,
      title: "Mobile & Cloud Access",
      description: "Access your business data anywhere, anytime, on any device",
      features: ["Mobile Apps", "Cloud Hosting", "Offline Capabilities", "Real-time Sync", "Multi-device Support", "Secure Access"]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden" id="platform">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-pulse-100/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-100/40 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
      
      <div className="section-container relative z-10 opacity-0 animate-on-scroll">
        <div className="text-center mb-16">
          <div className="pulse-chip mx-auto mb-4">
            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-pulse-500 text-white mr-2">03</span>
            <span>Platform Capabilities</span>
          </div>
          <h2 className="section-title mb-4">Comprehensive ERP Platform</h2>
          <p className="section-subtitle mx-auto">
            Everything you need to run your business efficiently, all in one integrated platform.
          </p>
        </div>

        {/* Hero capability - larger featured section */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-pulse-500 to-purple-600 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-2xl translate-x-1/3 -translate-y-1/3"></div>
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center mb-4">
                  <Cpu className="w-8 h-8 mr-3" />
                  <h3 className="text-2xl md:text-3xl font-bold">Core Business Modules</h3>
                </div>
                <p className="text-lg mb-6 text-white/90">
                  Complete suite of integrated modules that work seamlessly together to power your entire business operation.
                </p>
                <button className="bg-white text-pulse-500 px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors">
                  Explore Modules
                </button>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {capabilities[0].features.map((feature, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                    <span className="text-sm font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Grid layout for remaining capabilities */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {capabilities.slice(1).map((capability, index) => (
            <div 
              key={index} 
              className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-pulse-100 to-purple-100 rounded-2xl mb-6 group-hover:scale-110 transition-transform">
                <capability.icon className="w-8 h-8 text-pulse-500" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">{capability.title}</h3>
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">{capability.description}</p>
              <div className="space-y-2">
                {capability.features.slice(0, 3).map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center text-sm text-gray-700">
                    <div className="w-2 h-2 bg-pulse-500 rounded-full mr-3 flex-shrink-0"></div>
                    {feature}
                  </div>
                ))}
                <div className="text-xs text-pulse-500 font-medium mt-3">
                  +{capability.features.length - 3} more features
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