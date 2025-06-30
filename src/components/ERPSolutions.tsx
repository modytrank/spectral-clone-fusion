
import React from "react";
import { Calculator, Users, ShoppingCart, Package, Factory, Wrench } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const ERPSolutions = () => {
  const solutions = [
    {
      icon: Calculator,
      title: "Accounting",
      description: "Complete financial management and reporting",
      features: ["General Ledger", "Invoicing", "Reporting", "Compliance"]
    },
    {
      icon: Users,
      title: "Human Resources",
      description: "Comprehensive HR management system",
      features: ["Records", "Attendance", "Payroll", "Leave Calendar"]
    },
    {
      icon: ShoppingCart,
      title: "Sales & CRM",
      description: "End-to-end sales and customer management",
      features: ["Leads", "Quotes", "Orders", "Customer Portal"]
    },
    {
      icon: Package,
      title: "Inventory",
      description: "Advanced inventory and warehouse management",
      features: ["Stock Tracking", "Warehousing", "Pricing", "Labeling"]
    },
    {
      icon: Factory,
      title: "Manufacturing",
      description: "Complete production management solution",
      features: ["BOM", "Orders", "Planning", "Quality"]
    },
    {
      icon: Wrench,
      title: "Asset Management",
      description: "Comprehensive asset tracking and maintenance",
      features: ["Depreciation", "Maintenance", "QR", "Alerts"]
    }
  ];

  return (
    <section className="py-20 bg-white" id="erp-solutions">
      <div className="section-container">
        <div className="text-center mb-16 opacity-0 animate-on-scroll">
          <div className="pulse-chip mx-auto mb-4">
            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-pulse-500 text-white mr-2">05</span>
            <span>ERP Solutions</span>
          </div>
          <h2 className="section-title mb-4">Complete Business Solutions</h2>
          <p className="section-subtitle mx-auto">
            Comprehensive ERP modules to manage every aspect of your business operations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <Card 
              key={index}
              className="hover:shadow-elegant-hover transition-all duration-300 hover:translate-y-[-5px] opacity-0 animate-on-scroll border-gray-200"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <CardHeader className="pb-4">
                <div className="flex items-center justify-center w-12 h-12 bg-pulse-100 rounded-xl mb-4">
                  <solution.icon className="w-6 h-6 text-pulse-500" />
                </div>
                <CardTitle className="text-xl text-gray-900">{solution.title}</CardTitle>
                <CardDescription className="text-sm">{solution.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {solution.features.map((feature, featureIndex) => (
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
      </div>
    </section>
  );
};

export default ERPSolutions;
