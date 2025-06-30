import React from "react";
import { Mail, Phone, MapPin, ArrowRight, Linkedin, Twitter, Facebook, Instagram } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "Solutions",
      links: [
        { name: "ERP Implementation", href: "#erp-solutions" },
        { name: "Industry Solutions", href: "#industries" },
        { name: "AI Integration", href: "#services" },
        { name: "Platform Capabilities", href: "#platform" }
      ]
    },
    {
      title: "Industries",
      links: [
        { name: "Education", href: "#industries" },
        { name: "Retail & E-commerce", href: "#industries" },
        { name: "Manufacturing", href: "#industries" },
        { name: "Logistics", href: "#industries" }
      ]
    },
    {
      title: "Services",
      links: [
        { name: "Professional Services", href: "#services" },
        { name: "Implementation", href: "#implementation" },
        { name: "Support & Training", href: "#services" },
        { name: "Consultation", href: "#contact" }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "#" },
        { name: "Careers", href: "#" },
        { name: "Case Studies", href: "#" },
        { name: "Blog", href: "#" }
      ]
    }
  ];

  const socialLinks = [
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" }
  ];

  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-pulse-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-500 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10">
        {/* Newsletter Section */}
        <div className="border-b border-gray-800">
          <div className="max-w-7xl mx-auto px-6 py-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-light mb-4">Stay ahead of the curve</h3>
                <p className="text-gray-400 text-lg leading-relaxed">
                  Get the latest insights on ERP trends, industry best practices, and MovinWare updates delivered to your inbox.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-6 py-4 bg-gray-800 border border-gray-700 rounded-full text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pulse-500 focus:border-transparent"
                />
                <button className="bg-pulse-500 text-white px-8 py-4 rounded-full font-medium hover:bg-pulse-600 transition-all duration-300 flex items-center justify-center group">
                  Subscribe
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Company Info */}
            <div className="lg:col-span-4">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-white mb-4">MovinWare</h2>
                <p className="text-gray-400 leading-relaxed mb-6">
                  Transforming businesses across the MENA region with intelligent ERP solutions. 
                  We combine cutting-edge technology with deep industry expertise to deliver 
                  exceptional results.
                </p>
              </div>

              {/* Contact Info */}
              <div className="space-y-4 mb-8">
                <div className="flex items-center text-gray-400">
                  <Mail className="w-5 h-5 mr-3 text-pulse-500" />
                  <a href="mailto:info@movinware.com" className="hover:text-white transition-colors duration-300">
                    info@movinware.com
                  </a>
                </div>
                <div className="flex items-center text-gray-400">
                  <Phone className="w-5 h-5 mr-3 text-pulse-500" />
                  <a href="tel:+97141234567" className="hover:text-white transition-colors duration-300">
                    +971 4 123 4567
                  </a>
                </div>
                <div className="flex items-center text-gray-400">
                  <MapPin className="w-5 h-5 mr-3 text-pulse-500" />
                  <span>Dubai, United Arab Emirates</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:bg-pulse-500 hover:text-white transition-all duration-300 hover:scale-110"
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Footer Links */}
            <div className="lg:col-span-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {footerSections.map((section, index) => (
                  <div key={index}>
                    <h4 className="text-white font-medium mb-6">{section.title}</h4>
                    <ul className="space-y-4">
                      {section.links.map((link, linkIndex) => (
                        <li key={linkIndex}>
                          <a
                            href={link.href}
                            className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
                          >
                            {link.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800">
          <div className="max-w-7xl mx-auto px-6 py-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-gray-400 text-sm">
                © {currentYear} MovinWare. All rights reserved.
              </div>
              
              <div className="flex flex-wrap items-center space-x-6 text-sm">
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Privacy Policy
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Terms of Service
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Cookie Policy
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Security
                </a>
              </div>
              
              <div className="text-gray-400 text-sm">
                Built with ❤️ by{" "}
                <a 
                  href="https://x.com/rezaul_arif" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-pulse-500 hover:text-pulse-400 transition-colors duration-300"
                >
                  Rezaul Arif
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;