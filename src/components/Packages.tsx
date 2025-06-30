import React from "react";
import { Zap, Building, Building2, MessageSquare, Check, Star } from "lucide-react";

const Packages = () => {
  const packages = [
    {
      icon: Zap,
      title: "Startup Package",
      description: "Perfect for growing businesses",
      price: "Starting at $299/month",
      features: ["Quick Implementation", "Scalable Architecture", "Cost-Effective", "Basic Support", "Core Modules"],
      color: "from-green-500 to-emerald-500",
      popular: false
    },
    {
      icon: Building,
      title: "SME Package",
      description: "Comprehensive solution for mid-sized companies",
      price: "Starting at $599/month",
      features: ["Feature-Rich Platform", "Customizable Workflows", "Easy Integration", "Dedicated Support", "Advanced Analytics", "Multi-location Support"],
      color: "from-blue-500 to-cyan-500",
      popular: true
    },
    {
      icon: Building2,
      title: "Enterprise Package",
      description: "Advanced solution for large organizations",
      price: "Custom Pricing",
      features: ["Advanced Analytics", "Multi-Location Support", "Regulatory Compliance", "24/7 Premium Support", "Custom Development", "White-label Options"],
      color: "from-purple-500 to-pink-500",
      popular: false
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden" id="packages">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-pulse-100/30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-100/40 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      
      <div className="section-container relative z-10">
        <div className="text-center mb-16 opacity-0 animate-on-scroll">
          <div className="pulse-chip mx-auto mb-4">
            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-pulse-500 text-white mr-2">08</span>
            <span>Packages</span>
          </div>
          <h2 className="section-title mb-4">Choose Your Package</h2>
          <p className="section-subtitle mx-auto">
            Flexible packages designed to meet your business needs and budget.
          </p>
        </div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {packages.map((pkg, index) => (
            <div 
              key={index}
              className={`
                relative group opacity-0 animate-on-scroll
                ${pkg.popular ? 'lg:scale-105 lg:-translate-y-4' : ''}
              `}
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="bg-gradient-to-r from-pulse-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center">
                    <Star className="w-4 h-4 mr-1" />
                    Most Popular
                  </div>
                </div>
              )}
              
              <div className={`
                relative h-full bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300
                ${pkg.popular ? 'border-2 border-pulse-500' : 'border border-gray-200'}
                group-hover:-translate-y-2
              `}>
                <div className="text-center mb-8">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${pkg.color} mb-4`}>
                    <pkg.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.title}</h3>
                  <p className="text-gray-600 mb-4">{pkg.description}</p>
                  <div className="text-3xl font-bold text-gray-900">{pkg.price}</div>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button className={`
                  w-full py-3 px-6 rounded-full font-medium transition-all duration-300
                  ${pkg.popular 
                    ? 'bg-gradient-to-r from-pulse-500 to-purple-500 text-white hover:shadow-lg' 
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }
                `}>
                  {pkg.price === "Custom Pricing" ? "Contact Sales" : "Get Started"}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Custom quote section */}
        <div className="bg-gradient-to-r from-pulse-500 to-purple-600 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden opacity-0 animate-on-scroll" style={{ animationDelay: "0.4s" }}>
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-2xl translate-x-1/3 -translate-y-1/3"></div>
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center mb-4">
                <MessageSquare className="w-8 h-8 mr-3" />
                <h3 className="text-2xl md:text-3xl font-bold">Need Something Custom?</h3>
              </div>
              <p className="text-lg mb-6 text-white/90">
                Every business is unique. Let us create a tailored solution that fits your specific requirements and budget.
              </p>
              <button className="bg-white text-pulse-500 px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors">
                Get Custom Quote
              </button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {["Custom Requirements", "Flexible Pricing", "Dedicated Team", "Priority Support"].map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                  <span className="text-sm font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Comparison table */}
        <div className="mt-20 pt-16 border-t border-gray-200">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Compare All Features</h3>
            <p className="text-gray-600">See what's included in each package</p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="text-left p-4 font-medium text-gray-900">Features</th>
                    <th className="text-center p-4 font-medium text-gray-900">Startup</th>
                    <th className="text-center p-4 font-medium text-gray-900 bg-pulse-50">SME</th>
                    <th className="text-center p-4 font-medium text-gray-900">Enterprise</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {[
                    ["Core Modules", true, true, true],
                    ["Advanced Analytics", false, true, true],
                    ["Multi-location Support", false, true, true],
                    ["24/7 Support", false, false, true],
                    ["Custom Development", false, false, true]
                  ].map(([feature, startup, sme, enterprise], index) => (
                    <tr key={index}>
                      <td className="p-4 font-medium text-gray-900">{feature}</td>
                      <td className="text-center p-4">
                        {startup ? <Check className="w-5 h-5 text-green-500 mx-auto" /> : <span className="text-gray-400">—</span>}
                      </td>
                      <td className="text-center p-4 bg-pulse-50/50">
                        {sme ? <Check className="w-5 h-5 text-green-500 mx-auto" /> : <span className="text-gray-400">—</span>}
                      </td>
                      <td className="text-center p-4">
                        {enterprise ? <Check className="w-5 h-5 text-green-500 mx-auto" /> : <span className="text-gray-400">—</span>}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Packages;