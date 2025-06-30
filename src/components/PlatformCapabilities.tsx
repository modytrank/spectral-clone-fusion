
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
    <section className="py-20 bg-gray-50" id="platform">
      <div className="section-container opacity-0 animate-on-scroll">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {capabilities.map((capability, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl p-6 shadow-elegant hover:shadow-elegant-hover transition-all duration-300 hover:translate-y-[-5px]"
            >
              <div className="flex items-center justify-center w-12 h-12 bg-pulse-100 rounded-xl mb-4">
                <capability.icon className="w-6 h-6 text-pulse-500" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">{capability.title}</h3>
              <p className="text-gray-600 mb-4 text-sm">{capability.description}</p>
              <ul className="space-y-2">
                {capability.features.map((feature, featureIndex) => (
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

export default PlatformCapabilities;
