
import React from "react";
import { GraduationCap, ShoppingCart, Factory, Truck, Users, Building, TrendingUp } from "lucide-react";

const Industries = () => {
  const industries = [
    {
      icon: GraduationCap,
      title: "Education",
      description: "Comprehensive solutions for educational institutions, from student management to curriculum planning and administrative efficiency.",
      clients: "Schools, Universities, Training Centers, Online Learning Platforms",
      stats: "500+ Institutions",
      features: ["Student Information Systems", "Learning Management", "Financial Aid Processing", "Academic Analytics"]
    },
    {
      icon: ShoppingCart,
      title: "Retail",
      description: "Complete retail management and e-commerce solutions designed to optimize sales, inventory, and customer experience across all channels.",
      clients: "Retail Chains, Online Stores, Fashion Brands, Specialty Retailers",
      stats: "1000+ Stores",
      features: ["Point of Sale Systems", "E-commerce Integration", "Customer Loyalty Programs", "Multi-channel Inventory"]
    },
    {
      icon: Factory,
      title: "Manufacturing",
      description: "End-to-end manufacturing and production management solutions that optimize efficiency, quality control, and supply chain operations.",
      clients: "Manufacturers, Assembly Lines, Processing Plants, Industrial Equipment",
      stats: "200+ Factories",
      features: ["Production Planning", "Quality Management", "Equipment Maintenance", "Supply Chain Optimization"]
    },
    {
      icon: Truck,
      title: "Logistics",
      description: "Advanced logistics and supply chain optimization tools that ensure timely delivery, cost efficiency, and complete visibility across operations.",
      clients: "Shipping Companies, 3PL Providers, Freight Forwarders, Distribution Centers",
      stats: "300+ Companies",
      features: ["Route Optimization", "Fleet Management", "Warehouse Operations", "Real-time Tracking"]
    }
  ];

  const companySizes = [
    { 
      icon: TrendingUp, 
      title: "Startups", 
      count: "50+",
      description: "Growing businesses ready to scale"
    },
    { 
      icon: Users, 
      title: "SMEs", 
      count: "500+",
      description: "Established mid-market companies"
    },
    { 
      icon: Building, 
      title: "Enterprises", 
      count: "100+",
      description: "Large organizations with complex needs"
    }
  ];

  const headerBg = {
    backgroundImage: 'url("/Header-background.webp")',
    backgroundPosition: 'center 30%'
  };

  return (
    <section className="bg-white" id="industries">
      <div className="relative py-32 bg-cover bg-center" style={headerBg}>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/40 via-green-600/30 to-teal-600/40"></div>
        <div className="absolute inset-0 bg-black/20"></div>
        
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <div className="section-header-badge animate-badge-float mb-8">
            <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-pulse-500 text-white mr-3 text-sm font-bold">04</span>
            <span className="font-semibold">Industries</span>
          </div>
          <h2 className="section-header-title animate-header-glow">
            Tailored for<br />
            <span className="font-medium">every sector</span>
          </h2>
          <p className="section-header-subtitle">
            Industry-specific solutions designed to meet the unique challenges and requirements of your business sector
          </p>
        </div>
      </div>

      <div className="py-20 max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          {industries.map((industry, index) => (
            <div 
              key={index}
              className="group opacity-0 animate-slide-up"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <div className="bg-white rounded-2xl p-8 border border-gray-100 hover:border-gray-200 transition-all duration-700 hover:shadow-sm hover:-translate-y-1 h-full">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center mr-4 group-hover:bg-gray-100 transition-colors duration-500">
                    <industry.icon className="w-6 h-6 text-gray-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">{industry.title}</h3>
                    <div className="text-xs text-gray-400 font-medium">{industry.stats}</div>
                  </div>
                </div>
                
                <p className="text-gray-500 text-sm leading-relaxed mb-6">{industry.description}</p>
                
                <div className="mb-6">
                  <p className="text-xs text-gray-400 font-medium mb-3">Key Features:</p>
                  <div className="grid grid-cols-2 gap-2">
                    {industry.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-xs text-gray-500">
                        <div className="w-1 h-1 bg-gray-300 rounded-full mr-2"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="border-t border-gray-100 pt-4">
                  <p className="text-xs text-gray-400">
                    <span className="font-medium">Perfect for:</span> {industry.clients}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="opacity-0 animate-fade-scale" style={{ animationDelay: "0.5s" }}>
          <div className="bg-gray-50 rounded-3xl p-12 border border-gray-100">
            <h3 className="text-xl font-light text-gray-900 mb-2 text-center">Trusted by companies of all sizes</h3>
            <p className="text-gray-500 text-sm text-center mb-8">From startups to enterprises, we scale with your business needs</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {companySizes.map((size, index) => (
                <div key={index} className="text-center group" style={{ animationDelay: `${0.6 + 0.1 * index}s` }}>
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-gray-100 transition-colors duration-300">
                    <size.icon className="w-6 h-6 text-gray-600" />
                  </div>
                  <div className="text-2xl font-light text-gray-900 mb-1">{size.count}</div>
                  <div className="text-sm font-medium text-gray-700 mb-1">{size.title}</div>
                  <div className="text-xs text-gray-500">{size.description}</div>
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
