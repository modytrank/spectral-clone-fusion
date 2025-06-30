import React from "react";
import { GraduationCap, ShoppingCart, Factory, Truck } from "lucide-react";

const Industries = () => {
  const industries = [
    {
      icon: GraduationCap,
      title: "Education",
      description: "Comprehensive solutions for educational institutions",
      clients: "Schools, Universities, Training Centers"
    },
    {
      icon: ShoppingCart,
      title: "Retail",
      description: "Complete retail management and e-commerce solutions",
      clients: "Retail Chains, Online Stores, Fashion"
    },
    {
      icon: Factory,
      title: "Manufacturing",
      description: "End-to-end manufacturing and production management",
      clients: "Manufacturers, Assembly Lines, Processing"
    },
    {
      icon: Truck,
      title: "Logistics",
      description: "Advanced logistics and supply chain optimization",
      clients: "Shipping Companies, 3PL Providers"
    }
  ];

  return (
    <section className="py-24 bg-gray-50" id="industries">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-20 opacity-0 animate-on-scroll">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white text-gray-600 text-sm font-medium mb-6 shadow-sm">
            <span className="w-2 h-2 bg-pulse-500 rounded-full mr-3"></span>
            Industries
          </div>
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6 tracking-tight">
            Tailored for<br />
            <span className="font-medium">every sector</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
          {industries.map((industry, index) => (
            <div 
              key={index}
              className="group opacity-0 animate-on-scroll"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <div className="bg-white rounded-3xl p-8 hover:shadow-lg transition-all duration-500 border border-gray-100">
                <div className="flex items-center mb-6">
                  <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center mr-4 group-hover:bg-pulse-50 transition-colors duration-300">
                    <industry.icon className="w-7 h-7 text-gray-600 group-hover:text-pulse-500 transition-colors duration-300" />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium text-gray-900">{industry.title}</h3>
                  </div>
                </div>
                <p className="text-gray-600 mb-4 leading-relaxed">{industry.description}</p>
                <p className="text-sm text-gray-500">
                  <span className="font-medium">Perfect for:</span> {industry.clients}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <div className="inline-flex items-center space-x-8 bg-white rounded-full px-8 py-4 shadow-sm border border-gray-100">
            {["Startups", "SMEs", "Enterprises"].map((size, index) => (
              <div key={index} className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-pulse-500 rounded-full"></div>
                <span className="text-sm font-medium text-gray-700">{size}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Industries;