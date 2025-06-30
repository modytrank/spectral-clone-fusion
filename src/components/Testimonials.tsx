import React, { useRef } from "react";

interface TestimonialProps {
  content: string;
  author: string;
  role: string;
  gradient: string;
  backgroundImage?: string;
}

const testimonials: TestimonialProps[] = [{
  content: "MovinWare transformed our production line, handling repetitive tasks while our team focuses on innovation. 30% increase in output within three months.",
  author: "Sarah Chen",
  role: "VP of Operations, Axion Manufacturing",
  gradient: "from-blue-700 via-indigo-800 to-purple-900",
  backgroundImage: "/background-section1.png"
}, {
  content: "Implementing MovinWare in our fulfillment centers reduced workplace injuries by 40% while improving order accuracy. The learning capabilities are remarkable.",
  author: "Michael Rodriguez",
  role: "Director of Logistics, GlobalShip",
  gradient: "from-indigo-900 via-purple-800 to-orange-500",
  backgroundImage: "/background-section2.png"
}, {
  content: "MovinWare adapted to our lab protocols faster than any system we've used. It's like having another researcher who never gets tired and maintains perfect precision.",
  author: "Dr. Amara Patel",
  role: "Lead Scientist, BioAdvance Research",
  gradient: "from-purple-800 via-pink-700 to-red-500",
  backgroundImage: "/background-section3.png"
}, {
  content: "As a mid-size business, we never thought advanced ERP would be accessible to us. MovinWare changed that equation entirely with its versatility and ease of deployment.",
  author: "Jason Lee",
  role: "CEO, Innovative Solutions Inc.",
  gradient: "from-orange-600 via-red-500 to-purple-600",
  backgroundImage: "/background-section1.png"
}];

const TestimonialCard = ({
  content,
  author,
  role,
  backgroundImage = "/background-section1.png"
}: TestimonialProps) => {
  return (
    <div className="bg-cover bg-center rounded-3xl p-8 h-full flex flex-col justify-between text-white transform transition-all duration-700 hover:-translate-y-2 relative overflow-hidden interactive-card group" 
         style={{ backgroundImage: `url('${backgroundImage}')` }}>
      
      <div className="absolute top-4 right-4 w-16 h-16 bg-white/10 rounded-full backdrop-blur-sm animate-gentle-float"></div>
      
      <div className="relative z-10">
        <div className="mb-6">
          <div className="w-8 h-8 bg-white/20 rounded-full mb-4 animate-pulse-glow"></div>
          <p className="text-lg mb-6 font-medium leading-relaxed group-hover:text-white/90 transition-colors duration-300">
            {`"${content}"`}
          </p>
        </div>
        
        <div className="border-t border-white/20 pt-6">
          <h4 className="font-semibold text-lg mb-1 gradient-text">{author}</h4>
          <p className="text-white/80 text-sm">{role}</p>
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section className="py-24 bg-white relative" id="testimonials" ref={sectionRef}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-20 opacity-0 animate-slide-up">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gray-100 text-gray-600 text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-pulse-500 rounded-full mr-3 animate-pulse-glow"></span>
            Client Stories
          </div>
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6 tracking-tight">
            What our clients<br />
            <span className="font-medium gradient-text">are saying</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Real stories from businesses that transformed with MovinWare
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="opacity-0 animate-fade-scale"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <TestimonialCard 
                content={testimonial.content} 
                author={testimonial.author} 
                role={testimonial.role} 
                gradient={testimonial.gradient} 
                backgroundImage={testimonial.backgroundImage} 
              />
            </div>
          ))}
        </div>

        {/* Trust indicators */}
        <div className="mt-20 opacity-0 animate-slide-up" style={{ animationDelay: "0.5s" }}>
          <div className="bg-gray-50 rounded-3xl p-12 text-center border border-gray-100">
            <h3 className="text-xl font-light text-gray-900 mb-8">Trusted by industry leaders</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="animate-gentle-float">
                <div className="text-2xl font-light text-pulse-500 mb-2 gradient-text">200+</div>
                <div className="text-sm text-gray-600">Companies served</div>
              </div>
              <div className="animate-gentle-float" style={{ animationDelay: "0.5s" }}>
                <div className="text-2xl font-light text-pulse-500 mb-2 gradient-text">15+</div>
                <div className="text-sm text-gray-600">Countries</div>
              </div>
              <div className="animate-gentle-float" style={{ animationDelay: "1s" }}>
                <div className="text-2xl font-light text-pulse-500 mb-2 gradient-text">5 Years</div>
                <div className="text-sm text-gray-600">Average partnership</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;