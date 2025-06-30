import React from "react";
import { GraduationCap, ShoppingCart, Factory, Truck, Users, Building, TrendingUp } from "lucide-react";

const Industries = () => {
  const industries = [
    {
      icon: GraduationCap,
      title: "Education",
      description: "Comprehensive solutions for educational institutions",
      clients: "Schools, Universities, Training Centers",
      stats: "500+ Institutions"
    },
    {
      icon: ShoppingCart,
      title: "Retail",
      description: "Complete retail management and e-commerce solutions",
      clients: "Retail Chains, Online Stores, Fashion",
      stats: "1000+ Stores"
    },
    {
      icon: Factory,
      title: "Manufacturing",
      description: "End-to-end manufacturing and production management",
      clients: "Manufacturers, Assembly Lines, Processing",
      stats: "200+ Factories"
    },
    {
      icon: Truck,
      title: "Logistics",
      description: "Advanced logistics and supply chain optimization",
      clients: "Shipping Companies, 3PL Providers",
      stats: "300+ Companies"
    }
  ];

  const companySizes = [
    { icon: TrendingUp, title: "Startups", count: "50+" },
    { icon: Users, title: "SMEs", count: "500+" },
    { icon: Building, title: "Enterprises", count: "100+" }
  ];

  return (
    <section className="bg-white" id="industries">
      {/* Content Section */}
      <div className="py-20 max-w-5xl mx-auto px-6">
        {/* Industries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          {industries.map((industry, index) => (
            <div 
              key={index}
              className="group opacity-0 animate-slide-up"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <div className="bg-white rounded-2xl p-8 border border-gray-100 hover:border-gray-200 transition-all duration-700 hover:shadow-sm hover:-translate-y-1">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center mr-4 group-hover:bg-gray-100 transition-colors duration-500">
                    <industry.icon className="w-6 h-6 text-gray-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">{industry.title}</h3>
                    <div className="text-xs text-gray-400 font-medium">{industry.stats}</div>
                  </div>
                </div>
                
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{industry.description}</p>
                
                <p className="text-xs text-gray-400">
                  <span className="font-medium">Perfect for:</span> {industry.clients}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Company sizes */}
        <div className="opacity-0 animate-fade-scale" style={{ animationDelay: "0.5s" }}>
          <div className="bg-gray-50 rounded-3xl p-12 border border-gray-100">
            <h3 className="text-xl font-light text-gray-900 mb-8 text-center">Trusted by companies of all sizes</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {companySizes.map((size, index) => (
                <div 
                  key={index} 
                  className="text-center group"
                  style={{ animationDelay: `${0.6 + 0.1 * index}s` }}
                >
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-gray-100 transition-colors duration-300">
                    <size.icon className="w-6 h-6 text-gray-600" />
                  </div>
                  <div className="text-2xl font-light text-gray-900 mb-1">{size.count}</div>
                  <div className="text-sm text-gray-500">{size.title}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Industries;