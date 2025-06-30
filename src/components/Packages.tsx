
import React from "react";
import { Zap, Building, Building2, MessageSquare } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Packages = () => {
  const packages = [
    {
      icon: Zap,
      title: "Startup Package",
      description: "Perfect for growing businesses",
      features: ["Quick Implementation", "Scalable", "Cost-Effective"],
      color: "bg-green-100 text-green-600"
    },
    {
      icon: Building,
      title: "SME Package",
      description: "Comprehensive solution for mid-sized companies",
      features: ["Feature-Rich", "Customizable", "Easy Integration", "Dedicated Support"],
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: Building2,
      title: "Enterprise Package",
      description: "Advanced solution for large organizations",
      features: ["Advanced Analytics", "Multi-Location", "Regulatory Compliance", "24/7 Support"],
      color: "bg-purple-100 text-purple-600"
    },
    {
      icon: MessageSquare,
      title: "Custom Quote",
      description: "Tailored solution for your specific needs",
      features: ["Custom Requirements", "Flexible Pricing", "Dedicated Team"],
      color: "bg-orange-100 text-orange-600"
    }
  ];

  return (
    <section className="py-20 bg-gray-50" id="packages">
      <div className="section-container">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {packages.map((pkg, index) => (
            <Card 
              key={index}
              className="hover:shadow-elegant-hover transition-all duration-300 hover:translate-y-[-5px] opacity-0 animate-on-scroll"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <CardHeader className="pb-4">
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl mb-4 ${pkg.color}`}>
                  <pkg.icon className="w-6 h-6" />
                </div>
                <CardTitle className="text-xl text-gray-900">{pkg.title}</CardTitle>
                <CardDescription className="text-sm">{pkg.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start text-sm text-gray-700">
                      <div className="w-1.5 h-1.5 bg-pulse-500 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="opacity-0 animate-on-scroll" style={{ animationDelay: "0.5s" }}>
          <CardHeader>
            <CardTitle className="text-2xl text-gray-900 text-center">Get Your Custom Quote</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Company Name</label>
                <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pulse-500 focus:border-transparent" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Industry</label>
                <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pulse-500 focus:border-transparent">
                  <option>Select Industry</option>
                  <option>Education</option>
                  <option>Retail</option>
                  <option>Manufacturing</option>
                  <option>Logistics</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Company Size</label>
                <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pulse-500 focus:border-transparent">
                  <option>Select Size</option>
                  <option>Startup (1-10 employees)</option>
                  <option>SME (11-100 employees)</option>
                  <option>Enterprise (100+ employees)</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Region</label>
                <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pulse-500 focus:border-transparent">
                  <option>Select Region</option>
                  <option>UAE</option>
                  <option>Saudi Arabia</option>
                  <option>Egypt</option>
                  <option>Other MENA</option>
                </select>
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">Custom Requirements</label>
                <textarea rows={4} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pulse-500 focus:border-transparent" placeholder="Describe your specific needs..."></textarea>
              </div>
              <div className="md:col-span-2 text-center">
                <button type="submit" className="bg-pulse-500 text-white px-8 py-3 rounded-lg hover:bg-pulse-600 transition-colors duration-200">
                  Get Custom Quote
                </button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Packages;
