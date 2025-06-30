import React from "react";
import { Search, Palette, Code, Rocket, TrendingUp } from "lucide-react";

const ImplementationProcess = () => {
  const phases = [
    {
      icon: Search,
      title: "Assessment & Planning",
      duration: "1-2 weeks",
      activities: ["Process Mapping", "Gap Analysis", "Audit", "Requirements"],
      deliverables: ["Reports", "Roadmap"]
    },
    {
      icon: Palette,
      title: "Design & Configuration",
      duration: "2-3 weeks",
      activities: ["Workflow", "AI", "Bilingual", "Security"],
      deliverables: ["Blueprint", "Specs", "Mockups", "Integration Plan"]
    },
    {
      icon: Code,
      title: "Development & Testing",
      duration: "3-4 weeks",
      activities: ["Dev", "Demos", "Migration", "QA"],
      deliverables: ["Ready System", "Data", "Results", "Docs"]
    },
    {
      icon: Rocket,
      title: "Deployment & Training",
      duration: "1-2 weeks",
      activities: ["Training", "Go-Live", "Monitoring", "Support"],
      deliverables: ["Trained Users", "Live System", "Support Plan"]
    },
    {
      icon: TrendingUp,
      title: "Optimization & Growth",
      duration: "Ongoing",
      activities: ["Reviews", "Tuning", "Upgrades"],
      deliverables: ["Reports", "Features", "Growth Plan"]
    }
  ];

  const proofPoints = [
    "Faster Implementation",
    "Zero Downtime",
    "High Adoption within first month"
  ];

  return (
    <section className="py-20 bg-white relative" id="implementation">
      {/* Simple pattern background */}
      <div className="pattern-grid absolute inset-0"></div>
      
      <div className="section-container relative z-10">
        <div className="text-center mb-16 opacity-0 animate-on-scroll">
          <div className="pulse-chip mx-auto mb-4">
            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-pulse-500 text-white mr-2">07</span>
            <span>Implementation Process</span>
          </div>
          <h2 className="section-title mb-4">Proven Implementation Methodology</h2>
          <p className="section-subtitle mx-auto">
            Our structured approach ensures successful ERP implementation with minimal disruption.
          </p>
        </div>

        <div className="space-y-8 mb-12">
          {phases.map((phase, index) => (
            <div 
              key={index}
              className="bg-white border border-gray-200 rounded-2xl p-6 lg:p-8 hover:shadow-elegant-hover transition-all duration-300 opacity-0 animate-on-scroll"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                <div className="flex items-center gap-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-pulse-100 rounded-xl">
                    <phase.icon className="w-6 h-6 text-pulse-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{phase.title}</h3>
                    <p className="text-pulse-500 font-medium">{phase.duration}</p>
                  </div>
                </div>
                
                <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Activities</h4>
                    <div className="flex flex-wrap gap-2">
                      {phase.activities.map((activity, activityIndex) => (
                        <span 
                          key={activityIndex}
                          className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                        >
                          {activity}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Deliverables</h4>
                    <div className="flex flex-wrap gap-2">
                      {phase.deliverables.map((deliverable, deliverableIndex) => (
                        <span 
                          key={deliverableIndex}
                          className="px-3 py-1 bg-pulse-100 text-pulse-700 rounded-full text-sm"
                        >
                          {deliverable}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <h3 className="text-2xl font-semibold text-gray-900 mb-6">Proof Points</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {proofPoints.map((point, index) => (
              <div 
                key={index}
                className="bg-pulse-50 rounded-2xl p-6 opacity-0 animate-on-scroll"
                style={{ animationDelay: `${0.6 + 0.1 * index}s` }}
              >
                <p className="text-pulse-700 font-medium">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImplementationProcess;