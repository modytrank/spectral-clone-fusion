import React from "react";
import { Search, Palette, Code, Rocket, TrendingUp } from "lucide-react";

const ImplementationProcess = () => {
  const phases = [
    {
      icon: Search,
      title: "Assessment & Planning",
      duration: "1-2 weeks",
      description: "We analyze your current processes and create a detailed implementation roadmap."
    },
    {
      icon: Palette,
      title: "Design & Configuration",
      duration: "2-3 weeks",
      description: "Custom workflows and system configuration tailored to your business needs."
    },
    {
      icon: Code,
      title: "Development & Testing",
      duration: "3-4 weeks",
      description: "System development, data migration, and comprehensive testing phases."
    },
    {
      icon: Rocket,
      title: "Deployment & Training",
      duration: "1-2 weeks",
      description: "Go-live support with comprehensive user training and system monitoring."
    },
    {
      icon: TrendingUp,
      title: "Optimization & Growth",
      duration: "Ongoing",
      description: "Continuous optimization and feature enhancements for sustained growth."
    }
  ];

  return (
    <section className="py-24 bg-white" id="implementation">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-20 opacity-0 animate-slide-up">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gray-100 text-gray-600 text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-pulse-500 rounded-full mr-3"></span>
            Implementation Process
          </div>
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6 tracking-tight">
            Proven<br />
            <span className="font-medium">methodology</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Our structured approach ensures successful implementation with minimal disruption
          </p>
        </div>

        <div className="space-y-16">
          {phases.map((phase, index) => (
            <div 
              key={index}
              className={`flex flex-col lg:flex-row items-center gap-12 opacity-0 hover:animate-gentle-float ${
                index % 2 === 1 ? 'lg:flex-row-reverse animate-slide-right' : 'animate-slide-left'
              }`}
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <div className="flex-1 text-center lg:text-left">
                <div className="inline-flex items-center mb-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-2xl flex items-center justify-center mr-4 transition-all duration-500 hover:bg-pulse-50">
                    <phase.icon className="w-6 h-6 text-gray-600 transition-all duration-500 hover:text-pulse-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium text-gray-900">{phase.title}</h3>
                    <p className="text-sm text-pulse-500 font-medium">{phase.duration}</p>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed max-w-md mx-auto lg:mx-0">
                  {phase.description}
                </p>
              </div>
              
              <div className="flex-1 flex justify-center">
                <div className="w-32 h-32 bg-gray-50 rounded-3xl flex items-center justify-center transition-all duration-500 hover:bg-pulse-50">
                  <phase.icon className="w-16 h-16 text-gray-300 transition-all duration-500 hover:text-pulse-300" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {[
            { metric: "85%", label: "Faster Implementation" },
            { metric: "Zero", label: "Downtime Deployments" },
            { metric: "98%", label: "User Adoption Rate" }
          ].map((stat, index) => (
            <div key={index} className="bg-gray-50 rounded-3xl p-8 border border-gray-100 opacity-0 animate-fade-scale hover:animate-gentle-float" style={{ animationDelay: `${0.6 + 0.1 * index}s` }}>
              <div className="text-3xl font-light text-pulse-500 mb-2">{stat.metric}</div>
              <div className="text-gray-600 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImplementationProcess;