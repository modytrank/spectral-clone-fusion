import React from "react";
import { Search, Palette, Code, Rocket, TrendingUp } from "lucide-react";

const ImplementationProcess = () => {
  const phases = [
    {
      icon: Search,
      title: "Assessment & Planning",
      duration: "1-2 weeks",
      activities: ["Process Mapping", "Gap Analysis", "Audit", "Requirements"],
      deliverables: ["Reports", "Roadmap"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Palette,
      title: "Design & Configuration",
      duration: "2-3 weeks",
      activities: ["Workflow", "AI", "Bilingual", "Security"],
      deliverables: ["Blueprint", "Specs", "Mockups", "Integration Plan"],
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Code,
      title: "Development & Testing",
      duration: "3-4 weeks",
      activities: ["Dev", "Demos", "Migration", "QA"],
      deliverables: ["Ready System", "Data", "Results", "Docs"],
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Rocket,
      title: "Deployment & Training",
      duration: "1-2 weeks",
      activities: ["Training", "Go-Live", "Monitoring", "Support"],
      deliverables: ["Trained Users", "Live System", "Support Plan"],
      color: "from-orange-500 to-red-500"
    },
    {
      icon: TrendingUp,
      title: "Optimization & Growth",
      duration: "Ongoing",
      activities: ["Reviews", "Tuning", "Upgrades"],
      deliverables: ["Reports", "Features", "Growth Plan"],
      color: "from-indigo-500 to-purple-500"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-purple-50 relative" id="implementation">
      <div className="section-container">
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

        {/* Timeline layout */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-pulse-500 to-purple-500 rounded-full hidden lg:block"></div>
          
          <div className="space-y-12">
            {phases.map((phase, index) => (
              <div 
                key={index}
                className={`flex flex-col lg:flex-row items-center gap-8 opacity-0 animate-on-scroll ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                {/* Content Card */}
                <div className="flex-1 max-w-lg">
                  <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                    <div className="flex items-center mb-4">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${phase.color} flex items-center justify-center mr-4`}>
                        <phase.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900">{phase.title}</h3>
                        <p className="text-pulse-500 font-medium text-sm">{phase.duration}</p>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-medium text-gray-900 mb-2 text-sm">Key Activities</h4>
                        <div className="space-y-1">
                          {phase.activities.map((activity, activityIndex) => (
                            <div key={activityIndex} className="flex items-center text-sm text-gray-600">
                              <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${phase.color} mr-2`}></div>
                              {activity}
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-medium text-gray-900 mb-2 text-sm">Deliverables</h4>
                        <div className="space-y-1">
                          {phase.deliverables.map((deliverable, deliverableIndex) => (
                            <div key={deliverableIndex} className="text-sm text-gray-600 bg-gray-50 px-2 py-1 rounded">
                              {deliverable}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Timeline Node */}
                <div className="hidden lg:flex items-center justify-center w-16 h-16 bg-white rounded-full shadow-lg border-4 border-pulse-500 relative z-10">
                  <span className="text-pulse-500 font-bold text-lg">{index + 1}</span>
                </div>

                {/* Visual Element */}
                <div className="flex-1 max-w-lg">
                  <div className={`h-48 rounded-2xl bg-gradient-to-br ${phase.color} p-6 flex items-center justify-center relative overflow-hidden`}>
                    <div className="absolute top-0 right-0 w-24 h-24 bg-white/20 rounded-full blur-xl translate-x-1/2 -translate-y-1/2"></div>
                    <phase.icon className="w-16 h-16 text-white/80" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Success metrics */}
        <div className="mt-20 pt-16 border-t border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              { metric: "85%", label: "Faster Implementation" },
              { metric: "Zero", label: "Downtime Deployments" },
              { metric: "98%", label: "User Adoption Rate" }
            ].map((stat, index) => (
              <div key={index} className="bg-gradient-to-br from-pulse-50 to-purple-50 rounded-2xl p-6 border border-pulse-100">
                <div className="text-3xl font-bold text-pulse-500 mb-2">{stat.metric}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImplementationProcess;