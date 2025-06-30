import React from "react";
import { Calculator, Users, ShoppingCart, Package, Factory, Wrench, ArrowRight } from "lucide-react";

const ERPSolutions = () => {
  const solutions = [
    {
      icon: Calculator,
      title: "Accounting",
      description: "Complete financial management and reporting",
      features: ["Real-time reporting", "Multi-currency", "Tax compliance"]
    },
    {
      icon: Users,
      title: "Human Resources",
      description: "Comprehensive HR management system",
      features: ["Employee portal", "Payroll automation", "Performance tracking"]
    },
    {
      icon: ShoppingCart,
      title: "Sales & CRM",
      description: "End-to-end sales and customer management",
      features: ["Lead tracking", "Sales pipeline", "Customer insights"]
    },
    {
      icon: Package,
      title: "Inventory",
      description: "Advanced inventory and warehouse management",
      features: ["Stock optimization", "Barcode scanning", "Automated reordering"]
    },
    {
      icon: Factory,
      title: "Manufacturing",
      description: "Complete production management solution",
      features: ["Production planning", "Quality control", "Resource optimization"]
    },
    {
      icon: Wrench,
      title: "Asset Management",
      description: "Comprehensive asset tracking and maintenance",
      features: ["Maintenance scheduling", "Asset tracking", "Depreciation management"]
    }
  ];

  const headerBg = {
    backgroundImage: 'url("/Header-background.webp")',
    backgroundPosition: 'center 30%'
  };

  return (
    <section className="bg-white" id="erp-solutions">
      <div className="relative py-32 bg-cover bg-center" style={headerBg}>
        <div className="absolute inset-0 bg-gradient-to-br from-green-600/40 via-blue-600/30 to-purple-600/40"></div>
        <div className="absolute inset-0 bg-black/20"></div>
        
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <div className="section-header-badge animate-badge-float mb-8">
            <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-pulse-500 text-white mr-3 text-sm font-bold">05</span>
            <span className="font-semibold">ERP Solutions</span>
          </div>
          <h2 className="section-header-title animate-header-glow">
            Complete business<br />
            <span className="font-medium">solutions</span>
          </h2>
          <p className="section-header-subtitle">
            Integrated modules that work together seamlessly
          </p>
        </div>
      </div>

      <div className="py-20 max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {solutions.map((solution, index) => (
            <div 
              key={index}
              className="group opacity-0 animate-fade-scale"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <div className="relative bg-white p-8 rounded-2xl border border-gray-100 hover:border-gray-200 transition-all duration-700 hover:shadow-sm hover:-translate-y-1">
                <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-gray-100 transition-colors duration-500">
                  <solution.icon className="w-6 h-6 text-gray-600" />
                </div>
                
                <h3 className="text-lg font-medium text-gray-900 mb-3">{solution.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">{solution.description}</p>
                
                <div className="space-y-2 mb-6">
                  {solution.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-xs text-gray-400">
                      <div className="w-1 h-1 bg-gray-300 rounded-full mr-3"></div>
                      {feature}
                    </div>
                  ))}
                </div>
                
                <div className="flex items-center text-gray-400 text-xs font-medium group-hover:text-gray-600 transition-colors duration-300 cursor-pointer">
                  Explore
                  <ArrowRight className="w-3 h-3 ml-2 group-hover:translate-x-0.5 transition-transform duration-300" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="opacity-0 animate-slide-up" style={{ animationDelay: "0.6s" }}>
          <div className="bg-gray-50 rounded-3xl p-16 text-center border border-gray-100">
            <h3 className="text-2xl font-light text-gray-900 mb-4">Seamless integration</h3>
            <p className="text-gray-500 mb-8 max-w-lg mx-auto leading-relaxed">
              All modules share data in real-time, providing a unified view of your business operations.
            </p>
            <button className="bg-gray-900 text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors duration-300">
              View Integration Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ERPSolutions;