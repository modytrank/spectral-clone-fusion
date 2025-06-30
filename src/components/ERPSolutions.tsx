import React from "react";
import { Calculator, Users, ShoppingCart, Package, Factory, Wrench } from "lucide-react";

const ERPSolutions = () => {
  const solutions = [
    {
      icon: Calculator,
      title: "Accounting",
      description: "Complete financial management and reporting",
      features: ["General Ledger", "Invoicing", "Reporting", "Compliance"],
      highlight: true
    },
    {
      icon: Users,
      title: "Human Resources",
      description: "Comprehensive HR management system",
      features: ["Records", "Attendance", "Payroll", "Leave Calendar"]
    },
    {
      icon: ShoppingCart,
      title: "Sales & CRM",
      description: "End-to-end sales and customer management",
      features: ["Leads", "Quotes", "Orders", "Customer Portal"]
    },
    {
      icon: Package,
      title: "Inventory",
      description: "Advanced inventory and warehouse management",
      features: ["Stock Tracking", "Warehousing", "Pricing", "Labeling"]
    },
    {
      icon: Factory,
      title: "Manufacturing",
      description: "Complete production management solution",
      features: ["BOM", "Orders", "Planning", "Quality"]
    },
    {
      icon: Wrench,
      title: "Asset Management",
      description: "Comprehensive asset tracking and maintenance",
      features: ["Depreciation", "Maintenance", "QR", "Alerts"]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white" id="erp-solutions">
      <div className="section-container">
        <div className="text-center mb-16 opacity-0 animate-on-scroll">
          <div className="pulse-chip mx-auto mb-4">
            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-pulse-500 text-white mr-2">05</span>
            <span>ERP Solutions</span>
          </div>
          <h2 className="section-title mb-4">Complete Business Solutions</h2>
          <p className="section-subtitle mx-auto">
            Comprehensive ERP modules to manage every aspect of your business operations.
          </p>
        </div>

        {/* Masonry-style layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((solution, index) => (
            <div 
              key={index}
              className={`
                group relative overflow-hidden rounded-2xl transition-all duration-300 hover:-translate-y-2
                ${solution.highlight ? 'md:col-span-2 lg:col-span-1 lg:row-span-2' : ''}
                ${index === 0 ? 'bg-gradient-to-br from-pulse-500 to-purple-600 text-white' : 'bg-white border border-gray-200 hover:shadow-xl'}
              `}
            >
              {/* Background decoration for highlighted card */}
              {solution.highlight && (
                <>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl translate-x-1/2 -translate-y-1/2"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full blur-xl -translate-x-1/2 translate-y-1/2"></div>
                </>
              )}
              
              <div className={`relative z-10 p-6 ${solution.highlight ? 'h-full flex flex-col' : ''}`}>
                <div className={`flex items-center justify-center w-12 h-12 rounded-xl mb-4 ${
                  solution.highlight ? 'bg-white/20' : 'bg-pulse-100'
                }`}>
                  <solution.icon className={`w-6 h-6 ${solution.highlight ? 'text-white' : 'text-pulse-500'}`} />
                </div>
                
                <h3 className={`text-xl font-semibold mb-3 ${solution.highlight ? 'text-white' : 'text-gray-900'}`}>
                  {solution.title}
                </h3>
                
                <p className={`text-sm mb-4 ${solution.highlight ? 'text-white/90 flex-1' : 'text-gray-600'}`}>
                  {solution.description}
                </p>
                
                <ul className="space-y-2">
                  {solution.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start text-sm">
                      <div className={`w-1.5 h-1.5 rounded-full mt-2 mr-2 flex-shrink-0 ${
                        solution.highlight ? 'bg-white/80' : 'bg-pulse-500'
                      }`}></div>
                      <span className={solution.highlight ? 'text-white/90' : 'text-gray-700'}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                
                {solution.highlight && (
                  <button className="mt-6 bg-white text-pulse-500 px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors">
                    Learn More
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-pulse-50 to-purple-50 rounded-2xl p-8 border border-pulse-100">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Ready to streamline your operations?</h3>
            <p className="text-gray-600 mb-6">Get a personalized demo of our ERP solutions tailored to your industry.</p>
            <button className="bg-pulse-500 text-white px-8 py-3 rounded-full font-medium hover:bg-pulse-600 transition-colors">
              Schedule Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ERPSolutions;