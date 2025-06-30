import React from "react";
import { GraduationCap, ShoppingCart, Factory, Truck } from "lucide-react";

const Industries = () => {
  const industries = [
    {
      icon: GraduationCap,
      title: "Education",
      description: "Comprehensive solutions for educational institutions",
      features: ["Student Management", "Academic Planning", "Parent Portal", "Fee Management"],
      clients: "Schools, Universities, Training Centers",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50"
    },
    {
      icon: ShoppingCart,
      title: "Retail",
      description: "Complete retail management and e-commerce solutions",
      features: ["POS Systems", "Inventory Sync", "Loyalty Programs", "Multi-channel Sales"],
      clients: "Retail Chains, Online Stores, Fashion",
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50"
    },
    {
      icon: Factory,
      title: "Manufacturing",
      description: "End-to-end manufacturing and production management",
      features: ["Production Planning", "Quality Control", "Supply Chain", "Maintenance"],
      clients: "Manufacturers, Assembly Lines, Processing",
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-50"
    },
    {
      icon: Truck,
      title: "Logistics",
      description: "Advanced logistics and supply chain optimization",
      features: ["Fleet Management", "Route Optimization", "Tracking", "Customs"],
      clients: "Shipping Companies, 3PL Providers",
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-50"
    }
  ];

  return (
    <section className="py-20 bg-white relative" id="industries">
      <div className="section-container">
        <div className="text-center mb-16 opacity-0 animate-on-scroll">
          <div className="pulse-chip mx-auto mb-4">
            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-pulse-500 text-white mr-2">04</span>
            <span>Industries</span>
          </div>
          <h2 className="section-title mb-4">Tailored Solutions for Every Sector</h2>
          <p className="section-subtitle mx-auto">
            Specialized ERP solutions designed for each industry, from startups to enterprises.
          </p>
        </div>

        {/* Alternating layout */}
        <div className="space-y-16">
          {industries.map((industry, index) => (
            <div 
              key={index}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-12 items-center opacity-0 animate-on-scroll`}
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              {/* Content Side */}
              <div className="flex-1 space-y-6">
                <div className="flex items-center space-x-4">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${industry.color} flex items-center justify-center shadow-lg`}>
                    <industry.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{industry.title}</h3>
                    <p className="text-gray-600">{industry.description}</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-3">
                  {industry.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${industry.color}`}></div>
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className={`p-4 rounded-xl ${industry.bgColor} border-l-4 border-gradient-to-b ${industry.color}`}>
                  <p className="text-sm font-medium text-gray-700">Perfect for:</p>
                  <p className="text-sm text-gray-600">{industry.clients}</p>
                </div>
              </div>

              {/* Visual Side */}
              <div className="flex-1">
                <div className={`relative h-64 lg:h-80 rounded-3xl bg-gradient-to-br ${industry.color} p-8 overflow-hidden`}>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 rounded-full blur-xl translate-x-1/2 -translate-y-1/2"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full blur-lg -translate-x-1/2 translate-y-1/2"></div>
                  <div className="relative z-10 h-full flex items-center justify-center">
                    <industry.icon className="w-24 h-24 text-white/80" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Company sizes - horizontal layout */}
        <div className="mt-20 pt-16 border-t border-gray-200">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">Solutions for Every Size</h3>
            <p className="text-gray-600">From startups to enterprises, we scale with your business.</p>
          </div>
          
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8">
            {["Startups", "SMEs", "Enterprises"].map((size, index) => (
              <div key={index} className="flex items-center space-x-4 p-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors">
                <div className="w-12 h-12 bg-pulse-500 rounded-full flex items-center justify-center text-white font-bold">
                  {index + 1}
                </div>
                <span className="font-medium text-gray-900">{size}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Industries;