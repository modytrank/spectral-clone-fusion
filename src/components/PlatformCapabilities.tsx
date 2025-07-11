
import React from "react";
import { Cpu, Zap, Link, Smartphone, ArrowRight, CheckCircle } from "lucide-react";

const PlatformCapabilities = () => {
  const capabilities = [
    {
      icon: Cpu,
      title: "Core Modules",
      description: "Comprehensive business modules covering all aspects of your operations, designed to streamline processes and boost productivity across your entire organization.",
      capabilities: ["Accounting & Finance Management", "Human Resources & Payroll", "Sales & CRM Automation", "Inventory & Supply Chain"],
      timeline: "Core Foundation"
    },
    {
      icon: Zap,
      title: "AI Features", 
      description: "Intelligent automation and insights powered by advanced AI technology that learns from your business patterns to provide actionable recommendations.",
      capabilities: ["Predictive Analytics & Forecasting", "Smart Process Automation", "Intelligent Report Generation", "AI-Powered Decision Support"],
      timeline: "Smart Enhancement"
    },
    {
      icon: Link,
      title: "Integration Hub",
      description: "Seamless connectivity with your existing tools and systems, ensuring data flows smoothly across your entire technology stack without disruption.",
      capabilities: ["500+ API Integrations", "Third-party Platform Connectors", "Real-time Data Synchronization", "Legacy System Migration"],
      timeline: "Seamless Connection"
    },
    {
      icon: Smartphone,
      title: "Mobile & Cloud Platform",
      description: "Access your business data anywhere, anytime, on any device with our cloud-native platform that ensures maximum uptime and security.",
      capabilities: ["Native Mobile Applications", "99.9% Cloud Uptime SLA", "Offline Work Capabilities", "Multi-device Synchronization"],
      timeline: "Anywhere Access"
    }
  ];

  const headerBg = {
    backgroundImage: 'url("/Header-background.webp")',
    backgroundPosition: 'center 30%'
  };

  return (
    <section className="bg-white" id="platform">
      <div className="relative py-32 bg-cover bg-center" style={headerBg}>
        <div className="absolute inset-0 bg-gradient-to-br from-pulse-600/40 via-purple-600/30 to-blue-600/40"></div>
        <div className="absolute inset-0 bg-black/20"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <div className="section-header-badge animate-badge-float mb-8">
            <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-pulse-500 text-white mr-3 text-sm font-bold">03</span>
            <span className="font-semibold">Platform Capabilities</span>
          </div>
          <h2 className="section-header-title animate-header-glow">
            Everything you need,<br />
            <span className="font-medium">beautifully integrated</span>
          </h2>
          <p className="section-header-subtitle">
            A comprehensive platform designed for modern businesses with advanced features that grow with you
          </p>
        </div>
      </div>

      <div className="py-20 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {capabilities.map((capability, index) => (
            <div 
              key={index}
              className="group opacity-0 animate-slide-up"
              style={{ animationDelay: `${0.05 * index}s` }}
            >
              <div className="bg-white rounded-3xl p-8 border border-gray-200 hover:border-gray-300 transition-all duration-500 hover:shadow-xl h-full">
                <div className="flex items-start mb-6">
                  <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center mr-4 group-hover:bg-pulse-50 transition-all duration-500">
                    <capability.icon className="w-7 h-7 text-gray-600 group-hover:text-pulse-500 transition-all duration-500" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-medium text-gray-900">{capability.title}</h3>
                      <span className="text-xs text-pulse-500 font-medium bg-pulse-50 px-3 py-1 rounded-full">
                        {capability.timeline}
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">{capability.description}</p>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-sm font-medium text-gray-900 mb-3 flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Key Capabilities
                  </h4>
                  <div className="grid grid-cols-1 gap-2">
                    {capability.capabilities.map((cap, capIndex) => (
                      <div key={capIndex} className="flex items-center text-xs text-gray-600">
                        <div className="w-1.5 h-1.5 bg-pulse-500 rounded-full mr-2"></div>
                        {cap}
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="flex items-center text-pulse-500 font-medium text-sm group-hover:text-pulse-600 transition-colors duration-300 cursor-pointer">
                  Learn more about this capability
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="opacity-0 animate-fade-scale" style={{ animationDelay: "0.4s" }}>
          <div className="bg-white rounded-3xl p-12 border border-gray-200 shadow-sm">
            <div className="text-center mb-12">
              <h3 className="text-2xl font-light text-gray-900 mb-4">Platform Integration Overview</h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                A unified ecosystem where all capabilities work together seamlessly to provide comprehensive business management
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { metric: "500+", label: "API Integrations", desc: "Third-party connections available" },
                { metric: "99.9%", label: "Uptime SLA", desc: "Enterprise-grade reliability" },
                { metric: "24/7", label: "System Monitoring", desc: "Continuous performance tracking" },
                { metric: "Real-time", label: "Data Sync", desc: "Instant updates across devices" }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-light text-pulse-500 mb-2">{stat.metric}</div>
                  <div className="font-medium text-gray-900 mb-1">{stat.label}</div>
                  <div className="text-sm text-gray-600">{stat.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-20 text-center opacity-0 animate-slide-up" style={{ animationDelay: "0.6s" }}>
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-12 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full opacity-5"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-pulse-500 rounded-full opacity-10"></div>
            
            <div className="relative z-10">
              <h3 className="text-2xl font-light mb-4">Ready to transform your business?</h3>
              <p className="text-white/80 mb-8 max-w-2xl mx-auto">
                Experience the power of integrated platform capabilities that streamline operations and accelerate growth
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-gray-900 px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-all duration-300">
                  Request Platform Demo
                </button>
                <button className="border border-white/30 text-white px-8 py-3 rounded-full font-medium hover:bg-white/10 transition-all duration-300">
                  View Technical Specs
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlatformCapabilities;
