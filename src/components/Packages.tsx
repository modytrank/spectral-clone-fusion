import React from "react";
import { Zap, Building, Building2, MessageSquare, Check } from "lucide-react";

const Packages = () => {
  const packages = [
    {
      icon: Zap,
      title: "Startup",
      description: "Perfect for growing businesses",
      price: "$299",
      period: "/month",
      features: ["Quick Implementation", "Core Modules", "Basic Support", "Cloud Hosting"],
      popular: false
    },
    {
      icon: Building,
      title: "Professional",
      description: "Comprehensive solution for established companies",
      price: "$599",
      period: "/month",
      features: ["Advanced Features", "Custom Workflows", "Priority Support", "Multi-location", "Advanced Analytics", "API Access"],
      popular: true
    },
    {
      icon: Building2,
      title: "Enterprise",
      description: "Advanced solution for large organizations",
      price: "Custom",
      period: "pricing",
      features: ["White-label Options", "Dedicated Support", "Custom Development", "Compliance Tools", "Advanced Security", "SLA Guarantee"],
      popular: false
    }
  ];

  return (
    <section className="py-24 bg-white" id="packages">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-20 opacity-0 animate-on-scroll">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gray-100 text-gray-600 text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-pulse-500 rounded-full mr-3"></span>
            Packages
          </div>
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6 tracking-tight">
            Choose your<br />
            <span className="font-medium">perfect plan</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Flexible packages designed to grow with your business
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {packages.map((pkg, index) => (
            <div 
              key={index}
              className={`
                relative group opacity-0 animate-on-scroll
                ${pkg.popular ? 'lg:scale-105' : ''}
              `}
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="bg-pulse-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </div>
                </div>
              )}
              
              <div className={`
                relative h-full bg-white rounded-3xl p-8 transition-all duration-500 group-hover:-translate-y-2
                ${pkg.popular ? 'border-2 border-pulse-500 shadow-lg' : 'border border-gray-200 hover:shadow-lg'}
              `}>
                <div className="text-center mb-8">
                  <div className={`
                    inline-flex items-center justify-center w-12 h-12 rounded-2xl mb-6
                    ${pkg.popular ? 'bg-pulse-500 text-white' : 'bg-gray-100 text-gray-600'}
                  `}>
                    <pkg.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-medium text-gray-900 mb-2">{pkg.title}</h3>
                  <p className="text-gray-600 mb-6">{pkg.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-light text-gray-900">{pkg.price}</span>
                    <span className="text-gray-500 ml-1">{pkg.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="w-4 h-4 text-pulse-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button className={`
                  w-full py-3 px-6 rounded-full font-medium transition-all duration-300
                  ${pkg.popular 
                    ? 'bg-pulse-500 text-white hover:bg-pulse-600' 
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }
                `}>
                  {pkg.price === "Custom" ? "Contact Sales" : "Get Started"}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Custom solution section */}
        <div className="bg-gray-50 rounded-3xl p-12 text-center border border-gray-100 opacity-0 animate-on-scroll" style={{ animationDelay: "0.4s" }}>
          <div className="max-w-2xl mx-auto">
            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm">
              <MessageSquare className="w-8 h-8 text-gray-600" />
            </div>
            <h3 className="text-2xl font-medium text-gray-900 mb-4">Need something custom?</h3>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Every business is unique. Let us create a tailored solution that fits your specific requirements and budget.
            </p>
            <button className="bg-pulse-500 text-white px-8 py-3 rounded-full font-medium hover:bg-pulse-600 transition-colors duration-300">
              Get Custom Quote
            </button>
          </div>
        </div>

        {/* Simple comparison */}
        <div className="mt-20 pt-16 border-t border-gray-200">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-light text-gray-900 mb-4">What's included</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              { title: "Core Features", desc: "Essential business modules for all plans" },
              { title: "Advanced Tools", desc: "Professional and Enterprise plans" },
              { title: "Premium Support", desc: "Enterprise plan with dedicated support" }
            ].map((item, index) => (
              <div key={index} className="p-6">
                <h4 className="font-medium text-gray-900 mb-2">{item.title}</h4>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Packages;