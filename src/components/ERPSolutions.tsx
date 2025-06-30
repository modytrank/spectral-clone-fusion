import React from "react";
import { Calculator, Users, ShoppingCart, Package, Factory, Wrench } from "lucide-react";

const ERPSolutions = () => {
  const solutions = [
    {
      icon: Calculator,
      title: "Accounting",
      description: "Complete financial management and reporting"
    },
    {
      icon: Users,
      title: "Human Resources",
      description: "Comprehensive HR management system"
    },
    {
      icon: ShoppingCart,
      title: "Sales & CRM",
      description: "End-to-end sales and customer management"
    },
    {
      icon: Package,
      title: "Inventory",
      description: "Advanced inventory and warehouse management"
    },
    {
      icon: Factory,
      title: "Manufacturing",
      description: "Complete production management solution"
    },
    {
      icon: Wrench,
      title: "Asset Management",
      description: "Comprehensive asset tracking and maintenance"
    }
  ];

  return (
    <section className="py-24 bg-white" id="erp-solutions">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-20 opacity-0 animate-slide-up">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gray-100 text-gray-600 text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-pulse-500 rounded-full mr-3"></span>
            ERP Solutions
          </div>
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6 tracking-tight">
            Complete business<br />
            <span className="font-medium">solutions</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <div 
              key={index}
              className="group opacity-0 animate-fade-scale hover:animate-gentle-float"
              style={{ animationDelay: `${0.05 * index}s` }}
            >
              <div className="text-center p-8 hover:bg-gray-50 rounded-3xl transition-all duration-500">
                <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-pulse-50 transition-all duration-500">
                  <solution.icon className="w-8 h-8 text-gray-600 group-hover:text-pulse-500 transition-all duration-500" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-3">{solution.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{solution.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center opacity-0 animate-slide-up" style={{ animationDelay: "0.4s" }}>
          <div className="bg-gray-50 rounded-3xl p-12 border border-gray-100">
            <h3 className="text-2xl font-light text-gray-900 mb-4">Ready to streamline your operations?</h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">Get a personalized demo of our ERP solutions tailored to your industry.</p>
            <button className="bg-pulse-500 text-white px-8 py-3 rounded-full font-medium hover:bg-pulse-600 transition-colors duration-300">
              Schedule Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ERPSolutions;