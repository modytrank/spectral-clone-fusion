import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // Prevent background scrolling when menu is open
    document.body.style.overflow = !isMenuOpen ? 'hidden' : '';
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    
    // Close mobile menu if open
    if (isMenuOpen) {
      setIsMenuOpen(false);
      document.body.style.overflow = '';
    }
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled 
          ? "py-2 sm:py-3" 
          : "py-4 sm:py-6"
      )}
    >
      {/* Centered Navigation Container */}
      <div className="flex justify-center px-4 sm:px-6 lg:px-8">
        <div className={cn(
          "flex items-center justify-between transition-all duration-300 px-6 lg:px-8",
          isScrolled 
            ? "bg-white/95 backdrop-blur-md shadow-lg rounded-full border border-gray-200/50 max-w-4xl w-full" 
            : "bg-white/80 backdrop-blur-sm rounded-2xl border border-white/30 max-w-5xl w-full shadow-sm"
        )}>
          {/* Logo */}
          <a 
            href="#" 
            className="flex items-center space-x-3"
            onClick={(e) => {
              e.preventDefault();
              scrollToTop();
            }}
            aria-label="MovinWare"
          >
            <div className="w-8 h-8 text-pulse-500">
              <svg viewBox="0 0 494.95 492.9" fill="currentColor" className="w-full h-full">
                <g>
                  <polygon points="297.32 0 67.34 482.87 0 341.74 162.63 0 297.32 0"/>
                  <polygon points="494.95 178.76 343.02 476.88 332.83 480.38 294.08 387.79 304.42 386.86 408.85 174.5 494.95 178.76"/>
                  <polygon points="402.47 102.46 213.4 488.21 200.41 492.9 148.94 374.77 162.18 373.37 291.99 98.66 402.47 102.46"/>
                </g>
              </svg>
            </div>
            <div className="text-xl lg:text-2xl font-bold text-gray-900">MovinWare</div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8">
            <a 
              href="#" 
              className="nav-link text-sm font-medium"
              onClick={(e) => {
                e.preventDefault();
                scrollToTop();
              }}
            >
              Home
            </a>
            <a href="#value" className="nav-link text-sm font-medium">360° Value</a>
            <a href="#platform" className="nav-link text-sm font-medium">Platform</a>
            <a href="#industries" className="nav-link text-sm font-medium">Industries</a>
            <a href="#erp-solutions" className="nav-link text-sm font-medium">Solutions</a>
            <a href="#services" className="nav-link text-sm font-medium">Services</a>
            <a href="#packages" className="nav-link text-sm font-medium">Packages</a>
            <a href="#contact" className="nav-link text-sm font-medium">Contact</a>
          </nav>

          {/* Mobile menu button */}
          <button 
            className="lg:hidden text-gray-700 p-2 rounded-full hover:bg-gray-100 transition-colors duration-200 focus:outline-none" 
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={cn(
        "fixed inset-0 z-40 bg-white flex flex-col pt-20 px-6 lg:hidden transition-all duration-300 ease-in-out",
        isMenuOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full pointer-events-none"
      )}>
        <nav className="flex flex-col space-y-6 items-center mt-8">
          <a 
            href="#" 
            className="text-lg font-medium py-3 px-6 w-full text-center rounded-xl hover:bg-gray-50 transition-colors duration-200" 
            onClick={(e) => {
              e.preventDefault();
              scrollToTop();
              setIsMenuOpen(false);
              document.body.style.overflow = '';
            }}
          >
            Home
          </a>
          <a 
            href="#value" 
            className="text-lg font-medium py-3 px-6 w-full text-center rounded-xl hover:bg-gray-50 transition-colors duration-200" 
            onClick={() => {
              setIsMenuOpen(false);
              document.body.style.overflow = '';
            }}
          >
            360° Value
          </a>
          <a 
            href="#platform" 
            className="text-lg font-medium py-3 px-6 w-full text-center rounded-xl hover:bg-gray-50 transition-colors duration-200" 
            onClick={() => {
              setIsMenuOpen(false);
              document.body.style.overflow = '';
            }}
          >
            Platform
          </a>
          <a 
            href="#industries" 
            className="text-lg font-medium py-3 px-6 w-full text-center rounded-xl hover:bg-gray-50 transition-colors duration-200" 
            onClick={() => {
              setIsMenuOpen(false);
              document.body.style.overflow = '';
            }}
          >
            Industries
          </a>
          <a 
            href="#erp-solutions" 
            className="text-lg font-medium py-3 px-6 w-full text-center rounded-xl hover:bg-gray-50 transition-colors duration-200" 
            onClick={() => {
              setIsMenuOpen(false);
              document.body.style.overflow = '';
            }}
          >
            Solutions
          </a>
          <a 
            href="#services" 
            className="text-lg font-medium py-3 px-6 w-full text-center rounded-xl hover:bg-gray-50 transition-colors duration-200" 
            onClick={() => {
              setIsMenuOpen(false);
              document.body.style.overflow = '';
            }}
          >
            Services
          </a>
          <a 
            href="#packages" 
            className="text-lg font-medium py-3 px-6 w-full text-center rounded-xl hover:bg-gray-50 transition-colors duration-200" 
            onClick={() => {
              setIsMenuOpen(false);
              document.body.style.overflow = '';
            }}
          >
            Packages
          </a>
          <a 
            href="#contact" 
            className="text-lg font-medium py-3 px-6 w-full text-center rounded-xl hover:bg-gray-50 transition-colors duration-200" 
            onClick={() => {
              setIsMenuOpen(false);
              document.body.style.overflow = '';
            }}
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;