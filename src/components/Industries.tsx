
import React from "react";
import { GraduationCap, ShoppingCart, Factory, Truck, Users, Building, TrendingUp, CheckCircle, ArrowRight } from "lucide-react";

const Industries = () => {
  const industries = [
    {
      icon: GraduationCap,
      title: "Education",
      description: "Comprehensive solutions for educational institutions, from student management to curriculum planning and administrative efficiency.",
      capabilities: ["Student Information Systems", "Learning Management Platform", "Financial Aid Processing", "Academic Performance Analytics"],
      timeline: "500+ Institutions",
      clients: "Schools, Universities, Training Centers, Online Learning Platforms"
    },
    {
      icon: ShoppingCart,
      title: "Retail",
      description: "Complete retail management and e-commerce solutions designed to optimize sales, inventory, and customer experience across all channels.",
      capabilities: ["Point of Sale Systems", "E-commerce Integration", "Customer Loyalty Programs", "Multi-channel Inventory Management"],
      timeline: "1,000+ Stores",
      clients: "Retail Chains, Online Stores, Fashion Brands, Specialty Retailers"
    },
    {
      icon: Factory,
      title: "Manufacturing",
      description: "End-to-end manufacturing and production management solutions that optimize efficiency, quality control, and supply chain operations.",
      capabilities: ["Production Planning & Scheduling", "Quality Management Systems", "Equipment Maintenance Tracking", "Supply Chain Optimization"],
      timeline: "200+ Factories",
      clients: "Manufacturers, Assembly Lines, Processing Plants, Industrial Equipment"
    },
    {
      icon: Truck,
      title: "Logistics",
      description: "Advanced logistics and supply chain optimization tools that ensure timely delivery, cost efficiency, and complete visibility across operations.",
      capabilities: ["Route Optimization Algorithms", "Fleet Management Systems", "Warehouse Operations Control", "Real-time Shipment Tracking"],
      timeline: "300+ Companies",
      clients: "Shipping Companies, 3PL Providers, Freight Forwarders, Distribution Centers"
    }
  ];

  const companySizes = [
    { 
      icon: TrendingUp, 
      title: "Startups", 
      count: "50+",
      description: "Growing businesses ready to scale",
      details: "Flexible solutions that grow with your business"
    },
    { 
      icon: Users, 
      title: "SMEs", 
      count: "500+",
      description: "Established mid-market companies",
      details: "Comprehensive features for complex operations"
    },
    { 
      icon: Building, 
      title: "Enterprises", 
      count: "100+",
      description: "Large organizations with complex needs",
      details: "Enterprise-grade security and customization"
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
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
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

      <div className="py-20 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {industries.map((industry, index) => (
            <div 
              key={index}
              className="group opacity-0 animate-slide-up"
              style={{ animationDelay: `${0.05 * index}s` }}
            >
              <div className="bg-white rounded-3xl p-8 border border-gray-200 hover:border-gray-300 transition-all duration-500 hover:shadow-xl h-full">
                <div className="flex items-start mb-6">
                  <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center mr-4 group-hover:bg-pulse-50 transition-all duration-500">
                    <industry.icon className="w-7 h-7 text-gray-600 group-hover:text-pulse-500 transition-all duration-500" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-medium text-gray-900">{industry.title}</h3>
                      <span className="text-xs text-pulse-500 font-medium bg-pulse-50 px-3 py-1 rounded-full">
                        {industry.timeline}
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">{industry.description}</p>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-sm font-medium text-gray-900 mb-3 flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Key Capabilities
                  </h4>
                  <div className="grid grid-cols-1 gap-2">
                    {industry.capabilities.map((capability, capIndex) => (
                      <div key={capIndex} className="flex items-center text-xs text-gray-600">
                        <div className="w-1.5 h-1.5 bg-pulse-500 rounded-full mr-2"></div>
                        {capability}
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="border-t border-gray-100 pt-4 mb-6">
                  <p className="text-xs text-gray-500">
                    <span className="font-medium text-gray-700">Perfect for:</span> {industry.clients}
                  </p>
                </div>

                <div className="flex items-center text-pulse-500 font-medium text-sm group-hover:text-pulse-600 transition-colors duration-300 cursor-pointer">
                  Explore industry solutions
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="opacity-0 animate-fade-scale" style={{ animationDelay: "0.4s" }}>
          <div className="bg-white rounded-3xl p-12 border border-gray-200 shadow-sm">
            <div className="text-center mb-12">
              <h3 className="text-2xl font-light text-gray-900 mb-4">Trusted by companies of all sizes</h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                From startups to enterprises, we scale with your business needs and provide tailored solutions for every growth stage
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {companySizes.map((size, index) => (
                <div key={index} className="text-center bg-gray-50 rounded-2xl p-8 hover:bg-gray-100 transition-colors duration-300">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mx-auto mb-4 shadow-sm">
                    <size.icon className="w-6 h-6 text-pulse-500" />
                  </div>
                  <div className="text-3xl font-light text-pulse-500 mb-2">{size.count}</div>
                  <div className="font-medium text-gray-900 mb-2">{size.title}</div>
                  <div className="text-sm text-gray-600 mb-2">{size.description}</div>
                  <div className="text-xs text-gray-500">{size.details}</div>
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
              <h3 className="text-2xl font-light mb-4">Ready for industry-specific solutions?</h3>
              <p className="text-white/80 mb-8 max-w-2xl mx-auto">
                Discover how our tailored industry solutions can address your sector's unique challenges and compliance requirements
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-gray-900 px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-all duration-300">
                  Schedule Industry Demo
                </button>
                <button className="border border-white/30 text-white px-8 py-3 rounded-full font-medium hover:bg-white/10 transition-all duration-300">
                  View Case Studies
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Industries;
