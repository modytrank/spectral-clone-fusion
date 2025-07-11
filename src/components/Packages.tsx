import React, { useState } from "react";
import { Zap, Building, Building2, MessageSquare, Check } from "lucide-react";
import DetailModal from "./DetailModal";
import PreviewCard from "./PreviewCard";

const Packages = () => {
  const [selectedPackage, setSelectedPackage] = useState<any>(null);
  
  const packages = [
    {
      icon: Zap,
      title: "Startup",
      description: "Perfect for growing businesses ready to scale their operations efficiently.",
      price: "$299",
      period: "/month",
      originalPrice: "$399",
      features: ["Quick Implementation", "Core Modules", "Basic Support", "Cloud Hosting", "Up to 10 Users", "Mobile Access"],
      popular: false,
      fullDescription: "Our Startup package is designed for growing businesses that need powerful ERP capabilities without the complexity. Perfect for companies with 5-50 employees who want to streamline operations, improve efficiency, and scale sustainably with integrated business management tools.",
      detailedFeatures: [
        "Quick Implementation (2-4 weeks setup)",
        "Core Business Modules (Accounting, CRM, Inventory)",
        "Email & Chat Support (Business Hours)",
        "Secure Cloud Hosting with 99.5% uptime",
        "Up to 10 Active Users",
        "Mobile Apps for iOS & Android",
        "Basic Reporting & Analytics",
        "Standard Security Features",
        "Monthly Data Backups",
        "Online Training Resources"
      ],
      benefits: [
        "Rapid deployment gets you operational quickly",
        "Cost-effective solution for growing businesses",
        "Scalable architecture grows with your business",
        "Mobile access ensures productivity anywhere"
      ],
      idealFor: "Startups, small businesses, growing companies with basic ERP needs"
    },
    {
      icon: Building,
      title: "Professional",
      description: "Comprehensive solution for established companies with complex operational needs.",
      price: "$599",
      period: "/month",
      originalPrice: "$799",
      features: ["Advanced Features", "Custom Workflows", "Priority Support", "Multi-location", "Advanced Analytics", "API Access", "Up to 50 Users", "Custom Reports"],
      popular: true,
      fullDescription: "The Professional package offers comprehensive ERP functionality for established businesses with complex operations. Ideal for companies with 50-200 employees requiring advanced features, custom workflows, and multi-location support with priority technical assistance.",
      detailedFeatures: [
        "Advanced Feature Set (All Modules Included)",
        "Custom Workflow Design & Implementation",
        "Priority Support (24/5, 4-hour response)",
        "Multi-location & Multi-currency Support",
        "Advanced Analytics & Business Intelligence",
        "Full API Access for Integrations",
        "Up to 50 Active Users",
        "Custom Report Builder",
        "Advanced Security & Permissions",
        "Weekly Data Backups",
        "Dedicated Account Manager",
        "Custom Training Sessions"
      ],
      benefits: [
        "Comprehensive functionality covers all business needs",
        "Custom workflows optimize your specific processes",
        "Priority support ensures minimal downtime",
        "Multi-location support enables business expansion"
      ],
      idealFor: "Mid-market companies, multi-location businesses, established enterprises"
    },
    {
      icon: Building2,
      title: "Enterprise",
      description: "Advanced solution for large organizations with complex compliance and customization requirements.",
      price: "$1,299",
      period: "/month",
      originalPrice: "$1,599",
      features: ["White-label Options", "Dedicated Support", "Custom Development", "Compliance Tools", "Advanced Security", "SLA Guarantee", "Unlimited Users", "On-premise Option"],
      popular: false,
      fullDescription: "Our Enterprise package delivers maximum flexibility and customization for large organizations with complex requirements. Perfect for companies with 200+ employees requiring white-label solutions, custom development, and enterprise-grade security with guaranteed service levels.",
      detailedFeatures: [
        "White-label & Custom Branding Options",
        "Dedicated Support Team (24/7, 1-hour response)",
        "Custom Development & Feature Building",
        "Industry-specific Compliance Tools",
        "Enterprise Security & Audit Trails",
        "99.9% Uptime SLA Guarantee",
        "Unlimited Users & Concurrent Sessions",
        "On-premise Deployment Option",
        "Advanced Integration Capabilities",
        "Daily Data Backups & Disaster Recovery",
        "Executive Dashboards & Reporting",
        "Dedicated Implementation Team",
        "Custom Training & Change Management"
      ],
      benefits: [
        "Complete customization meets unique requirements",
        "Dedicated support team ensures optimal performance",
        "Enterprise security protects sensitive data",
        "SLA guarantee provides business continuity assurance"
      ],
      idealFor: "Large enterprises, regulated industries, organizations with complex compliance needs"
    }
  ];

  const headerBg = {
    backgroundImage: 'url("/Header-background.webp")',
    backgroundPosition: 'center 30%'
  };

  return (
    <section className="bg-white" id="packages">
      <div className="relative py-32 bg-cover bg-center" style={headerBg}>
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/40 via-purple-600/30 to-pink-600/40"></div>
        <div className="absolute inset-0 bg-black/20"></div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <div className="section-header-badge animate-badge-float mb-8">
            <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-pulse-500 text-white mr-3 text-sm font-bold">08</span>
            <span className="font-semibold">Packages</span>
          </div>
          <h2 className="section-header-title animate-header-glow">
            Choose your<br />
            <span className="font-medium">perfect plan</span>
          </h2>
          <p className="section-header-subtitle">
            Transparent pricing with no hidden fees. Start your free trial today.
          </p>
        </div>
      </div>

      <div className="py-20 max-w-6xl mx-auto px-6">
        <div className="text-center mb-12 opacity-0 animate-on-scroll">
          <div className="inline-flex items-center bg-gray-100 rounded-full p-1 mb-8">
            <button className="px-6 py-2 rounded-full bg-white text-gray-900 font-medium shadow-sm">
              Monthly
            </button>
            <button className="px-6 py-2 rounded-full text-gray-600 font-medium">
              Annual (Save 20%)
            </button>
          </div>
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
                <div className="text-center mb-6">
                  <div className={`
                    inline-flex items-center justify-center w-12 h-12 rounded-2xl mb-4
                    ${pkg.popular ? 'bg-pulse-500 text-white' : 'bg-gray-100 text-gray-600'}
                  `}>
                    <pkg.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-medium text-gray-900 mb-2">{pkg.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{pkg.description}</p>
                  
                  <div className="flex items-center justify-center mb-2">
                    <span className="text-3xl font-light text-gray-900">{pkg.price}</span>
                    <span className="text-gray-500 ml-1">{pkg.period}</span>
                  </div>
                  <div className="flex items-center justify-center mb-4">
                    <span className="text-sm text-gray-400 line-through mr-2">{pkg.originalPrice}</span>
                    <span className="text-sm text-green-600 font-medium">Save 25%</span>
                  </div>
                </div>
                
                <ul className="space-y-2 mb-6">
                  {pkg.features.slice(0, 4).map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm">
                      <Check className="w-4 h-4 text-pulse-500 mr-2 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                  {pkg.features.length > 4 && (
                    <li className="text-sm text-gray-500 pl-6">
                      +{pkg.features.length - 4} more features
                    </li>
                  )}
                </ul>
                
                <button 
                  onClick={() => setSelectedPackage(pkg)}
                  className="w-full py-2 px-4 rounded-xl text-sm font-medium mb-4 border border-gray-300 text-gray-700 hover:bg-gray-50 transition-all duration-300"
                >
                  View Details
                </button>
                
                <button className={`
                  w-full py-3 px-6 rounded-full font-medium transition-all duration-300
                  ${pkg.popular 
                    ? 'bg-pulse-500 text-white hover:bg-pulse-600' 
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }
                `}>
                  Start Free Trial
                </button>
                
                <p className="text-xs text-gray-500 text-center mt-3">
                  14-day free trial • No credit card required
                </p>
              </div>
            </div>
          ))}
        </div>

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

        <div className="mt-20 pt-16 border-t border-gray-200">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-light text-gray-900 mb-4">What's included in every plan</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {[
              { title: "Free Setup", desc: "Professional onboarding included" },
              { title: "Data Migration", desc: "We handle your data transfer" },
              { title: "Training Included", desc: "Comprehensive user training" },
              { title: "24/7 Support", desc: "Always here when you need us" }
            ].map((item, index) => (
              <div key={index} className="p-6">
                <div className="w-12 h-12 bg-pulse-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Check className="w-6 h-6 text-pulse-500" />
                </div>
                <h4 className="font-medium text-gray-900 mb-2">{item.title}</h4>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center opacity-0 animate-on-scroll" style={{ animationDelay: "0.6s" }}>
          <div className="bg-green-50 rounded-2xl p-8 border border-green-200">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Check className="w-6 h-6 text-green-600" />
            </div>
            <h4 className="text-lg font-medium text-gray-900 mb-2">30-Day Money-Back Guarantee</h4>
            <p className="text-gray-600">Not satisfied? Get a full refund within 30 days, no questions asked.</p>
          </div>
        </div>
      </div>
      
      <DetailModal
        isOpen={selectedPackage !== null}
        onClose={() => setSelectedPackage(null)}
        title={selectedPackage?.title || ""}
        description={selectedPackage?.fullDescription || selectedPackage?.description || ""}
        capabilities={selectedPackage?.detailedFeatures || []}
        benefits={selectedPackage?.benefits || []}
        pricing={selectedPackage ? {
          price: selectedPackage.price,
          period: selectedPackage.period,
          originalPrice: selectedPackage.originalPrice,
          features: selectedPackage.features
        } : undefined}
        additionalInfo={selectedPackage?.idealFor}
        icon={selectedPackage?.icon || Zap}
      />
    </section>
  );
};

export default Packages;
