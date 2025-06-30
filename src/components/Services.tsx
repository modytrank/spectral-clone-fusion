import React from "react";
import { Settings, Building2, Brain, Palette, Database, Headphones, ArrowRight, CheckCircle } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Settings,
      title: "ERP Implementation",
      description: "End-to-end implementation with proven methodologies and dedicated project management",
      capabilities: ["System Architecture", "Custom Development", "Data Migration", "User Training"],
      timeline: "8-12 weeks"
    },
    {
      icon: Building2,
      title: "Industry Solutions",
      description: "Specialized solutions tailored to your industry's unique requirements and compliance needs",
      capabilities: ["Healthcare Systems", "Educational Platforms", "Manufacturing Solutions", "Logistics Management"],
      timeline: "6-10 weeks"
    },
    {
      icon: Brain,
      title: "AI Integration",
      description: "Advanced AI capabilities to automate processes and provide intelligent business insights",
      capabilities: ["Predictive Analytics", "Process Automation", "Document Processing", "Decision Support"],
      timeline: "4-8 weeks"
    },
    {
      icon: Palette,
      title: "UX Design & Localization",
      description: "User-centered design with full localization support for MENA markets",
      capabilities: ["RTL Interface Design", "Multi-language Support", "Cultural Adaptation", "Accessibility Compliance"],
      timeline: "3-6 weeks"
    },
    {
      icon: Database,
      title: "Data Migration & Integration",
      description: "Secure, efficient data migration with seamless third-party system integrations",
      capabilities: ["Legacy System Migration", "API Development", "Real-time Synchronization", "Data Validation"],
      timeline: "2-4 weeks"
    },
    {
      icon: Headphones,
      title: "Support & Maintenance",
      description: "Comprehensive support services ensuring optimal system performance and user satisfaction",
      capabilities: ["24/7 Technical Support", "Performance Monitoring", "Regular Updates", "Training Programs"],
      timeline: "Ongoing"
    }
  ];

  const serviceProcess = [
    { step: "Consultation", description: "Understanding your requirements" },
    { step: "Planning", description: "Detailed project roadmap" },
    { step: "Execution", description: "Professional implementation" },
    { step: "Delivery", description: "Quality assurance & handover" },
    { step: "Support", description: "Ongoing maintenance & optimization" }
  ];

  return (
    <section className="bg-gray-50" id="services">
      {/* Enhanced Header with Background */}
      <div 
        className="relative py-32 bg-cover bg-center"
        style={{
          backgroundImage: 'url("/Header-background.webp")',
          backgroundPosition: 'center 30%'
        }}
      >
        {/* Enhanced overlay with better contrast */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/40 via-pink-600/30 to-red-600/40"></div>
        <div className="absolute inset-0 bg-black/20"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <div className="section-header-badge animate-badge-float mb-8">
            <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-pulse-500 text-white mr-3 text-sm font-bold">06</span>
            <span className="font-semibold">Professional Services</span>
          </div>
          <h2 className="section-header-title animate-header-glow">
            Expert services for<br />
            <span className="font-medium">successful implementation</span>
          </h2>
          <p className="section-header-subtitle">
            Our certified professionals ensure your ERP implementation is delivered on time, within budget, and exceeds expectations
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="py-20 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group opacity-0 animate-slide-up"
              style={{ animationDelay: `${0.05 * index}s` }}
            >
              <div className="bg-white rounded-3xl p-8 border border-gray-200 hover:border-gray-300 transition-all duration-500 hover:shadow-xl h-full">
                <div className="flex items-start mb-6">
                  <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center mr-4 group-hover:bg-pulse-50 transition-all duration-500">
                    <service.icon className="w-7 h-7 text-gray-600 group-hover:text-pulse-500 transition-all duration-500" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-medium text-gray-900">{service.title}</h3>
                      <span className="text-xs text-pulse-500 font-medium bg-pulse-50 px-3 py-1 rounded-full">
                        {service.timeline}
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-sm font-medium text-gray-900 mb-3 flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Key Capabilities
                  </h4>
                  <div className="grid grid-cols-2 gap-2">
                    {service.capabilities.map((capability, capIndex) => (
                      <div key={capIndex} className="flex items-center text-xs text-gray-600">
                        <div className="w-1.5 h-1.5 bg-pulse-500 rounded-full mr-2"></div>
                        {capability}
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="flex items-center text-pulse-500 font-medium text-sm group-hover:text-pulse-600 transition-colors duration-300 cursor-pointer">
                  Learn more about this service
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Service Process */}
        <div className="opacity-0 animate-fade-scale" style={{ animationDelay: "0.4s" }}>
          <div className="bg-white rounded-3xl p-12 border border-gray-200 shadow-sm">
            <div className="text-center mb-12">
              <h3 className="text-2xl font-light text-gray-900 mb-4">Our Service Methodology</h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                A structured approach that ensures quality delivery and client satisfaction at every stage
              </p>
            </div>
            
            <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0 md:space-x-4 relative">
              {serviceProcess.map((process, index) => (
                <div key={index} className="flex flex-col items-center text-center relative flex-1">
                  <div className="w-12 h-12 bg-pulse-500 rounded-full flex items-center justify-center text-white font-medium mb-4 text-sm relative z-10">
                    {index + 1}
                  </div>
                  <h4 className="font-medium text-gray-900 mb-2">{process.step}</h4>
                  <p className="text-sm text-gray-600 max-w-32">{process.description}</p>
                  {index < serviceProcess.length - 1 && (
                    <div className="hidden md:block absolute left-full top-6 w-full h-px bg-gray-200 transform -translate-y-1/2 z-0"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Professional Credentials */}
        <div className="mt-20 opacity-0 animate-slide-up" style={{ animationDelay: "0.6s" }}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center bg-white rounded-3xl p-8 border border-gray-200">
              <div className="text-3xl font-light text-pulse-500 mb-2">50+</div>
              <div className="font-medium text-gray-900 mb-1">Certified Professionals</div>
              <div className="text-sm text-gray-600">Expert consultants and developers</div>
            </div>
            <div className="text-center bg-white rounded-3xl p-8 border border-gray-200">
              <div className="text-3xl font-light text-pulse-500 mb-2">500+</div>
              <div className="font-medium text-gray-900 mb-1">Successful Projects</div>
              <div className="text-sm text-gray-600">Across various industries</div>
            </div>
            <div className="text-center bg-white rounded-3xl p-8 border border-gray-200">
              <div className="text-3xl font-light text-pulse-500 mb-2">99%</div>
              <div className="font-medium text-gray-900 mb-1">Client Satisfaction</div>
              <div className="text-sm text-gray-600">Based on project completion surveys</div>
            </div>
          </div>
        </div>

        {/* Professional CTA */}
        <div className="mt-20 text-center opacity-0 animate-slide-up" style={{ animationDelay: "0.8s" }}>
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-12 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full opacity-5"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-pulse-500 rounded-full opacity-10"></div>
            
            <div className="relative z-10">
              <h3 className="text-2xl font-light mb-4">Ready to work with experts?</h3>
              <p className="text-white/80 mb-8 max-w-2xl mx-auto">
                Schedule a consultation with our professional services team to discuss your project requirements and timeline.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-gray-900 px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-all duration-300">
                  Schedule Consultation
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

export default Services;