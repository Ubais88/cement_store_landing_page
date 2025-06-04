import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-20 lg:pt-0 h-screen max-h-[800px] min-h-[600px] flex items-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: "url('https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')"
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-900/60"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 z-10 relative">
        <div className="max-w-2xl">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight animate-fadeIn">
            Building Foundations for <span className="text-amber-500">Stronger Futures</span>
          </h2>
          <p className="text-xl text-gray-200 mt-6 max-w-xl animate-fadeIn animation-delay-100">
            Premium construction materials for all your building needs. Quality products, competitive prices, and expert advice.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 animate-fadeIn animation-delay-200">
            <a 
              href="#products" 
              className="px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white font-medium rounded-md transition-all duration-300 text-center"
            >
              Explore Products
            </a>
            <a 
              href="#contact" 
              className="px-6 py-3 bg-transparent hover:bg-white/10 border border-white text-white font-medium rounded-md transition-all duration-300 text-center"
            >
              Contact Us
            </a>
          </div>
          
          {/* Stats */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-6 max-w-2xl animate-fadeIn animation-delay-300">
            <div className="text-center">
              <p className="text-3xl font-bold text-amber-500">5000+</p>
              <p className="text-white/80 text-sm mt-1">Products</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-amber-500">15+</p>
              <p className="text-white/80 text-sm mt-1">Years of Experience</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-amber-500">2000+</p>
              <p className="text-white/80 text-sm mt-1">Happy Customers</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;