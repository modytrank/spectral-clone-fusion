import React from "react";
import { Calculator, Users, ShoppingCart, Package, Factory, Wrench, ArrowRight, Zap } from "lucide-react";

const ERPSolutions = () => {
  const solutions = [
    {
      icon: Calculator,
      title: "Accounting",
      description: "Complete financial management and reporting",
      color: "from-blue-500 to-cyan-600",
      features: ["Real-time reporting", "Multi-currency", "Tax compliance"]
    },
    {
      icon: Users,
      title: "Human Resources",
      description: "Comprehensive HR management system",
      color: "from-green-500 to-teal-600",
      features: ["Employee portal", "Payroll automation", "Performance tracking"]
    },
    {
      icon: ShoppingCart,
      title: "Sales & CRM",
      description: "End-to-end sales and customer management",
      color: "from-purple-500 to-pink-600",
      features: ["Lead tracking", "Sales pipeline", "Customer insights"]
    },
    {
      icon: Package,
      title: "Inventory",
      description: "Advanced inventory and warehouse management",
      color: "from-orange-500 to-red-600",
      features: ["Stock optimization", "Barcode scanning", "Automated reordering"]
    },
    {
      icon: Factory,
      title: "Manufacturing",
      description: "Complete production management solution",
      color: "from-indigo-500 to-purple-600",
      features: ["Production planning", "Quality control", "Resource optimization"]
    },
    {
      icon: Wrench,
      title: "Asset Management",
      description: "Comprehensive asset tracking and maintenance",
      color: "from-yellow-500 to-orange-600",
      features: ["Maintenance scheduling", "Asset tracking", "Depreciation management"]
    }
  ];

  return (
    <section className="py-24 bg-white overflow-hidden relative" id="erp-solutions">
      {/* Modern decorative elements */}
      <div className="pattern-grid absolute inset-0"></div>
      <div className="decorative-blob w-80 h-80 -top-40 -left-40"></div>
      <div className="liquid-element w-full h-20 top-1/4 left-0"></div>
      <div className="floating-particle top-20 right-1/4"></div>
      <div className="floating-particle bottom-32 left-1/5" style={{ animationDelay: "2s" }}></div>
      <div className="crystalline-element top-16 left-1/4"></div>
      <div className="crystalline-element bottom-20 right-1/3" style={{ animationDelay: "1.5s" }}></div>
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20 opacity-0 animate-slide-up">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gray-100 text-gray-600 text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-pulse-500 rounded-full mr-3 animate-gentle-float"></span>
            ERP Solutions
          </div>
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6 tracking-tight">
            Complete business<br />
            <span className="font-medium animate-gradient-flow bg-clip-text text-transparent">solutions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Integrated modules that work together seamlessly
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {solutions.map((solution, index) => (
            <div 
              key={index}
              className="group opacity-0 animate-fade-scale"
              style={{ animationDelay: `${0.05 * index}s` }}
            >
              <div className="relative bg-white rounded-3xl p-8 border border-gray-100 hover:border-gray-200 transition-all duration-500 hover:shadow-xl hover:-translate-y-2 overflow-hidden interactive-card">
                {/* Animated background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${solution.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                {/* Modern floating elements */}
                <div className="geometric-shape w-4 h-4 top-4 right-4"></div>
                <div className="crystalline-element top-8 right-8" style={{ animationDelay: "0.5s" }}></div>
                
                <div className="relative z-10 text-center">
                  <div className={`w-16 h-16 bg-gradient-to-br ${solution.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg animate-crystalline`}>
                    <solution.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-lg font-medium text-gray-900 mb-3 group-hover:text-gray-800 transition-colors duration-300">{solution.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6 group-hover:text-gray-700 transition-colors duration-300">{solution.description}</p>
                  
                  <div className="space-y-2 mb-6">
                    {solution.features.map((feature, featureIndex) => (
                      <div 
                        key={featureIndex} 
                        className="flex items-center justify-center text-xs text-gray-500 group-hover:text-gray-600 transition-all duration-300"
                        style={{ transitionDelay: `${featureIndex * 50}ms` }}
                      >
                        <Zap className="w-3 h-3 text-pulse-500 mr-2 animate-gentle-float" style={{ animationDelay: `${featureIndex * 0.3}s` }} />
                        {feature}
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-center text-pulse-500 font-medium text-sm group-hover:text-pulse-600 transition-colors duration-300 cursor-pointer">
                    Explore module
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Integration showcase */}
        <div className="opacity-0 animate-slide-up" style={{ animationDelay: "0.4s" }}>
          <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-3xl p-12 border border-gray-200 relative overflow-hidden">
            {/* Modern animated connection lines */}
            <div className="liquid-element w-full h-12 top-0 left-0"></div>
            <div className="decorative-blob w-24 h-24 bottom-0 right-0"></div>
            
            <div className="relative z-10 text-center">
              <h3 className="text-2xl font-light text-gray-900 mb-4">All modules work together</h3>
              <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                Our integrated approach means data flows seamlessly between all modules, giving you a complete view of your business.
              </p>
              <button className="bg-pulse-500 text-white px-8 py-3 rounded-full font-medium hover:bg-pulse-600 transition-all duration-300 hover:scale-105 hover:shadow-lg group animate-gentle-float">
                See Integration Demo
                <ArrowRight className="w-4 h-4 ml-2 inline group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ERPSolutions;