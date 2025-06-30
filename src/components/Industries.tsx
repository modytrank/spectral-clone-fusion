import React from "react";
import { GraduationCap, ShoppingCart, Factory, Truck, ArrowRight, Users, Building, TrendingUp } from "lucide-react";

const Industries = () => {
  const industries = [
    {
      icon: GraduationCap,
      title: "Education",
      description: "Comprehensive solutions for educational institutions",
      clients: "Schools, Universities, Training Centers",
      color: "from-blue-500 to-indigo-600",
      stats: "500+ Institutions"
    },
    {
      icon: ShoppingCart,
      title: "Retail",
      description: "Complete retail management and e-commerce solutions",
      clients: "Retail Chains, Online Stores, Fashion",
      color: "from-green-500 to-emerald-600",
      stats: "1000+ Stores"
    },
    {
      icon: Factory,
      title: "Manufacturing",
      description: "End-to-end manufacturing and production management",
      clients: "Manufacturers, Assembly Lines, Processing",
      color: "from-orange-500 to-red-600",
      stats: "200+ Factories"
    },
    {
      icon: Truck,
      title: "Logistics",
      description: "Advanced logistics and supply chain optimization",
      clients: "Shipping Companies, 3PL Providers",
      color: "from-purple-500 to-pink-600",
      stats: "300+ Companies"
    }
  ];

  const companySizes = [
    { icon: TrendingUp, title: "Startups", count: "50+", color: "text-green-600" },
    { icon: Users, title: "SMEs", count: "500+", color: "text-blue-600" },
    { icon: Building, title: "Enterprises", count: "100+", color: "text-purple-600" }
  ];

  return (
    <section className="py-24 bg-gray-50 overflow-hidden relative" id="industries">
      {/* Modern decorative elements */}
      <div className="pattern-dots absolute inset-0"></div>
      <div className="decorative-blob w-96 h-96 -top-48 -right-48"></div>
      <div className="liquid-element w-full h-24 top-1/3 left-0"></div>
      <div className="floating-particle top-16 left-1/5"></div>
      <div className="floating-particle top-32 right-1/4" style={{ animationDelay: "1.5s" }}></div>
      <div className="crystalline-element top-24 left-1/3"></div>
      <div className="crystalline-element bottom-24 right-1/5" style={{ animationDelay: "3s" }}></div>
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20 opacity-0 animate-fade-scale">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white text-gray-600 text-sm font-medium mb-6 shadow-sm">
            <span className="w-2 h-2 bg-pulse-500 rounded-full mr-3 animate-gentle-float"></span>
            Industries
          </div>
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6 tracking-tight">
            Tailored for<br />
            <span className="font-medium animate-gradient-flow bg-clip-text text-transparent">every sector</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Specialized solutions designed for your industry's unique challenges
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {industries.map((industry, index) => (
            <div 
              key={index}
              className="group opacity-0 animate-slide-up"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <div className="relative bg-white rounded-3xl p-8 border border-gray-200 hover:border-gray-300 transition-all duration-500 hover:shadow-xl hover:-translate-y-2 overflow-hidden interactive-card">
                {/* Animated background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${industry.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                {/* Modern floating elements */}
                <div className="geometric-shape w-6 h-6 top-6 right-6"></div>
                <div className="crystalline-element top-12 right-12" style={{ animationDelay: "0.3s" }}></div>
                
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center">
                      <div className={`w-14 h-14 bg-gradient-to-br ${industry.color} rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-500 shadow-lg animate-crystalline`}>
                        <industry.icon className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-medium text-gray-900">{industry.title}</h3>
                        <div className="text-sm text-pulse-500 font-medium animate-gentle-float">{industry.stats}</div>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">{industry.description}</p>
                  
                  <p className="text-sm text-gray-500 mb-6">
                    <span className="font-medium">Perfect for:</span> {industry.clients}
                  </p>
                  
                  <div className="flex items-center text-pulse-500 font-medium text-sm group-hover:text-pulse-600 transition-colors duration-300 cursor-pointer">
                    View solutions
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Company sizes with animation */}
        <div className="opacity-0 animate-fade-scale" style={{ animationDelay: "0.5s" }}>
          <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-sm relative overflow-hidden">
            <div className="liquid-element w-full h-8 top-0 left-0"></div>
            <h3 className="text-xl font-medium text-gray-900 mb-8 text-center relative z-10">Trusted by companies of all sizes</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
              {companySizes.map((size, index) => (
                <div 
                  key={index} 
                  className="text-center group hover:scale-105 transition-transform duration-300"
                  style={{ animationDelay: `${0.6 + 0.1 * index}s` }}
                >
                  <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-gray-100 transition-colors duration-300 animate-gentle-float" style={{ animationDelay: `${index * 0.5}s` }}>
                    <size.icon className={`w-8 h-8 ${size.color} group-hover:scale-110 transition-transform duration-300`} />
                  </div>
                  <div className="text-2xl font-light text-gray-900 mb-1">{size.count}</div>
                  <div className="text-sm font-medium text-gray-600">{size.title}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Success stories teaser */}
        <div className="mt-16 text-center opacity-0 animate-slide-up" style={{ animationDelay: "0.8s" }}>
          <div className="bg-gradient-to-r from-pulse-500 to-purple-600 rounded-3xl p-12 text-white relative overflow-hidden">
            {/* Modern animated background elements */}
            <div className="decorative-blob w-32 h-32 top-0 right-0"></div>
            <div className="liquid-element w-full h-16 bottom-0 left-0" style={{ animationDelay: "1s" }}></div>
            
            <div className="relative z-10">
              <h3 className="text-2xl font-light mb-4">Ready to transform your industry?</h3>
              <p className="text-white/90 mb-8 max-w-2xl mx-auto">Join thousands of companies already using our solutions to drive growth and efficiency.</p>
              <button className="bg-white text-pulse-500 px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-all duration-300 hover:scale-105 hover:shadow-lg group animate-gentle-float">
                Get Started Today
                <ArrowRight className="w-4 h-4 ml-2 inline group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Industries;