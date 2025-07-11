
import React from "react";
import { Calculator, Users, ShoppingCart, Package, Factory, Wrench, ArrowRight, CheckCircle } from "lucide-react";

const ERPSolutions = () => {
  const solutions = [
    {
      icon: Calculator,
      title: "Accounting & Finance",
      description: "Complete financial management and reporting system with real-time insights and automated processes for comprehensive business control.",
      capabilities: ["Real-time Financial Reporting", "Multi-currency Support & Conversion", "Tax Compliance & Regulatory Reporting", "Automated AP/AR Management"],
      timeline: "Full Integration"
    },
    {
      icon: Users,
      title: "Human Resources",
      description: "Comprehensive HR management system covering the entire employee lifecycle from recruitment to retirement with advanced analytics.",
      capabilities: ["Employee Self-service Portal", "Automated Payroll & Tax Calculations", "Performance Tracking & Goal Management", "Time & Attendance with Biometrics"],
      timeline: "Complete HR Suite"
    },
    {
      icon: ShoppingCart,
      title: "Sales & CRM",
      description: "End-to-end sales and customer relationship management with AI-powered insights and automation for maximum conversion rates.",
      capabilities: ["Lead Tracking & Opportunity Management", "Advanced Sales Pipeline & Forecasting", "Customer Insights & Behavior Analytics", "Automated Marketing Campaigns"],
      timeline: "Sales Optimization"
    },
    {
      icon: Package,
      title: "Inventory Management",
      description: "Advanced inventory and warehouse management with real-time tracking and optimization capabilities for maximum efficiency.",
      capabilities: ["Smart Stock Optimization & Forecasting", "Barcode & RFID Scanning Integration", "Automated Reordering & Supplier Alerts", "Multi-location Inventory Tracking"],
      timeline: "Smart Inventory"
    },
    {
      icon: Factory,
      title: "Manufacturing",
      description: "Complete production management solution that optimizes manufacturing processes and quality control with real-time monitoring.",
      capabilities: ["Production Planning & Capacity Optimization", "Quality Control Workflows & Compliance", "Resource Allocation & Equipment Scheduling", "Bill of Materials Management & Costing"],
      timeline: "Production Excellence"
    },
    {
      icon: Wrench,
      title: "Asset Management",
      description: "Comprehensive asset tracking and maintenance management to maximize equipment uptime and ROI with predictive analytics.",
      capabilities: ["Preventive Maintenance Scheduling", "Asset Lifecycle Tracking & Depreciation", "Work Order Management & Dispatch", "Equipment Performance Analytics"],
      timeline: "Asset Optimization"
    }
  ];

  const integrationStats = [
    { metric: "100%", label: "Module Integration", desc: "Seamless data flow across all modules" },
    { metric: "Real-time", label: "Data Updates", desc: "Instant synchronization everywhere" },
    { metric: "Single", label: "Database", desc: "Unified source of truth for all data" },
    { metric: "Custom", label: "Workflows", desc: "Tailored to your business processes" }
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
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <div className="section-header-badge animate-badge-float mb-8">
            <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-pulse-500 text-white mr-3 text-sm font-bold">05</span>
            <span className="font-semibold">ERP Solutions</span>
          </div>
          <h2 className="section-header-title animate-header-glow">
            Complete business<br />
            <span className="font-medium">solutions</span>
          </h2>
          <p className="section-header-subtitle">
            Integrated modules that work together seamlessly to power every aspect of your business operations
          </p>
        </div>
      </div>

      <div className="py-20 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {solutions.map((solution, index) => (
            <div 
              key={index}
              className="group opacity-0 animate-slide-up"
              style={{ animationDelay: `${0.05 * index}s` }}
            >
              <div className="bg-white rounded-3xl p-8 border border-gray-200 hover:border-gray-300 transition-all duration-500 hover:shadow-xl h-full flex flex-col">
                <div className="flex items-start mb-6">
                  <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center mr-4 group-hover:bg-pulse-50 transition-all duration-500">
                    <solution.icon className="w-7 h-7 text-gray-600 group-hover:text-pulse-500 transition-all duration-500" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-medium text-gray-900">{solution.title}</h3>
                      <span className="text-xs text-pulse-500 font-medium bg-pulse-50 px-3 py-1 rounded-full">
                        {solution.timeline}
                      </span>
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">{solution.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-sm font-medium text-gray-900 mb-3 flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Key Capabilities
                  </h4>
                  <div className="space-y-2">
                    {solution.capabilities.map((capability, capIndex) => (
                      <div key={capIndex} className="flex items-start text-xs text-gray-600">
                        <div className="w-1.5 h-1.5 bg-pulse-500 rounded-full mr-2 mt-2 flex-shrink-0"></div>
                        <span className="leading-relaxed">{capability}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="flex items-center text-pulse-500 font-medium text-sm group-hover:text-pulse-600 transition-colors duration-300 cursor-pointer mt-auto">
                  Explore module details
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="opacity-0 animate-fade-scale" style={{ animationDelay: "0.4s" }}>
          <div className="bg-white rounded-3xl p-12 border border-gray-200 shadow-sm">
            <div className="text-center mb-12">
              <h3 className="text-2xl font-light text-gray-900 mb-4">Seamless integration across all modules</h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                All modules share data in real-time, providing a unified view of your business operations with complete transparency and control
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
              {integrationStats.map((stat, index) => (
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
              <h3 className="text-2xl font-light mb-4">Ready for complete business integration?</h3>
              <p className="text-white/80 mb-8 max-w-2xl mx-auto">
                Experience the power of fully integrated ERP modules working together to streamline your entire business operation
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-gray-900 px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-all duration-300">
                  View Integration Demo
                </button>
                <button className="border border-white/30 text-white px-8 py-3 rounded-full font-medium hover:bg-white/10 transition-all duration-300">
                  Download Module Guide
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ERPSolutions;
