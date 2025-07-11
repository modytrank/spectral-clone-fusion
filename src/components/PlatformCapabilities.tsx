
import React from "react";
import { Cpu, Zap, Link, Smartphone, ArrowRight } from "lucide-react";

const PlatformCapabilities = () => {
  const capabilities = [
    {
      icon: Cpu,
      title: "Core Modules",
      description: "Comprehensive business modules covering all aspects of your operations, designed to streamline processes and boost productivity across your entire organization.",
      features: [
        "Accounting & Finance - Complete financial management with real-time reporting",
        "Human Resources - Employee lifecycle management and payroll automation", 
        "Sales & CRM - Lead tracking, pipeline management, and customer insights",
        "Inventory Management - Stock optimization with automated reordering"
      ]
    },
    {
      icon: Zap,
      title: "AI Features", 
      description: "Intelligent automation and insights powered by advanced AI technology that learns from your business patterns to provide actionable recommendations and streamline operations.",
      features: [
        "Predictive Analytics - Forecast trends and identify opportunities",
        "Smart Workflows - Automated processes that adapt to your business",
        "Automated Reporting - Generate insights without manual intervention",
        "Decision Support - AI-powered recommendations for better choices"
      ]
    },
    {
      icon: Link,
      title: "Integration",
      description: "Seamless connectivity with your existing tools and systems, ensuring data flows smoothly across your entire technology stack without disrupting current workflows.",
      features: [
        "API Integration - Connect with 500+ popular business applications",
        "Third-party Connectors - Pre-built integrations for major platforms",
        "Data Synchronization - Real-time data sync across all systems",
        "Legacy Migration - Smooth transition from your current systems"
      ]
    },
    {
      icon: Smartphone,
      title: "Mobile & Cloud",
      description: "Access your business data anywhere, anytime, on any device with our cloud-native platform that ensures your team stays productive whether in office or on the go.",
      features: [
        "Mobile Apps - Native iOS and Android applications",
        "Cloud Hosting - 99.9% uptime with enterprise-grade security",
        "Offline Capabilities - Work seamlessly without internet connection",
        "Real-time Sync - Instant updates across all devices and platforms"
      ]
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
        
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
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

      <div className="py-20 max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {capabilities.map((capability, index) => (
            <div 
              key={index}
              className="group opacity-0 animate-slide-up"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <div className="bg-white rounded-3xl p-10 border border-gray-200 hover:border-gray-300 transition-all duration-700 hover:shadow-sm hover:-translate-y-1">
                <div className="flex items-center mb-8">
                  <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center mr-5 group-hover:bg-gray-100 transition-colors duration-500">
                    <capability.icon className="w-7 h-7 text-gray-600" />
                  </div>
                  <h3 className="text-xl font-medium text-gray-900">{capability.title}</h3>
                </div>
                
                <p className="text-gray-500 leading-relaxed mb-8">{capability.description}</p>
                
                <div className="space-y-4 mb-8">
                  {capability.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-gray-300 rounded-full mr-4 mt-2 flex-shrink-0"></div>
                      <span className="leading-relaxed">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="flex items-center text-gray-400 text-sm font-medium group-hover:text-gray-600 transition-colors duration-300 cursor-pointer">
                  Learn more
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-0.5 transition-transform duration-300" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 text-center opacity-0 animate-slide-up" style={{ animationDelay: "0.5s" }}>
          <div className="bg-white rounded-3xl p-16 border border-gray-200 shadow-sm">
            <h3 className="text-2xl font-light text-gray-900 mb-4">Ready to transform your business?</h3>
            <p className="text-gray-500 mb-8 max-w-lg mx-auto leading-relaxed">
              Discover how our integrated platform capabilities can streamline your operations and accelerate growth across every aspect of your business.
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
