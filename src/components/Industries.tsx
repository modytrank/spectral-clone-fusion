
import React from "react";
import { GraduationCap, ShoppingCart, Factory, Truck, Users, Building, TrendingUp } from "lucide-react";

const Industries = () => {
  const industries = [
    {
      icon: GraduationCap,
      title: "Education",
      description: "Comprehensive solutions for educational institutions",
      features: ["Student Management", "Academic Planning", "Parent Portal", "Fee Management"],
      clients: "Schools, Universities, Training Centers, Online Learning"
    },
    {
      icon: ShoppingCart,
      title: "Retail",
      description: "Complete retail management and e-commerce solutions",
      features: ["POS Systems", "Inventory Sync", "Loyalty Programs", "Multi-channel Sales"],
      clients: "Retail Chains, Online Stores, Fashion, Electronics"
    },
    {
      icon: Factory,
      title: "Manufacturing",
      description: "End-to-end manufacturing and production management",
      features: ["Production Planning", "Quality Control", "Supply Chain Management", "Preventive Maintenance"],
      clients: "Manufacturers, Assembly Lines, Food Processing, Textile"
    },
    {
      icon: Truck,
      title: "Logistics",
      description: "Advanced logistics and supply chain optimization",
      features: ["Fleet Management", "Route Optimization", "Inventory Tracking", "Customs Management"],
      clients: "Shipping Companies, 3PL Providers, Distribution Centers, Freight Companies"
    }
  ];

  const companySizes = [
    {
      icon: TrendingUp,
      title: "Startups",
      description: "Quick Implementation, Scalable, Cost-Effective",
      color: "bg-green-100 text-green-600"
    },
    {
      icon: Users,
      title: "SMEs",
      description: "Feature-Rich, Customizable, Easy Integration, Dedicated Support",
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: Building,
      title: "Enterprises",
      description: "Advanced Analytics, Multi-Location, Regulatory Compliance, 24/7 Support",
      color: "bg-purple-100 text-purple-600"
    }
  ];

  return (
    <section className="py-20 bg-white" id="industries">
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

        {/* Industries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {industries.map((industry, index) => (
            <div 
              key={index}
              className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-elegant-hover transition-all duration-300 hover:translate-y-[-5px] opacity-0 animate-on-scroll"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <div className="flex items-center mb-6">
                <div className="flex items-center justify-center w-12 h-12 bg-pulse-100 rounded-xl mr-4">
                  <industry.icon className="w-6 h-6 text-pulse-500" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">{industry.title}</h3>
                  <p className="text-gray-600 text-sm">{industry.description}</p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-3 mb-4">
                {industry.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center text-sm">
                    <div className="w-2 h-2 bg-pulse-500 rounded-full mr-2"></div>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
              
              <div className="pt-4 border-t border-gray-100">
                <p className="text-xs text-gray-500 font-medium">Ideal for:</p>
                <p className="text-sm text-gray-700">{industry.clients}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Company Sizes */}
        <div className="text-center mb-8">
          <h3 className="text-2xl font-semibold text-gray-900 mb-2">Solutions for Every Size</h3>
          <p className="text-gray-600">From startups to enterprises, we have the right solution for your business size.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {companySizes.map((size, index) => (
            <div 
              key={index}
              className="text-center p-6 bg-gray-50 rounded-2xl opacity-0 animate-on-scroll"
              style={{ animationDelay: `${0.2 + 0.1 * index}s` }}
            >
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl mb-4 ${size.color}`}>
                <size.icon className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">{size.title}</h4>
              <p className="text-sm text-gray-600">{size.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
