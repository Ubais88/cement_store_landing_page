import React from 'react';
import { features } from '../data/features';
import { Feature } from '../types';

const FeatureCard: React.FC<{ feature: Feature }> = ({ feature }) => {
  const Icon = feature.icon;
  
  return (
    <div className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg group">
      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-700 transition-colors duration-300">
        <Icon size={24} className="text-blue-700 group-hover:text-white transition-colors duration-300" />
      </div>
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
      <p className="text-gray-600">{feature.description}</p>
    </div>
  );
};

const Features: React.FC = () => {
  return (
    <section id="features" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Why Choose Ashrafi Cement Store(ACS)?
          </h2>
          <p className="mt-4 text-gray-600">
            We stand out from the competition with our commitment to quality,
            competitive pricing, and excellent customer service.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature: Feature) => (
            <FeatureCard key={feature.id} feature={feature} />
          ))}
        </div>

        {/* Additional Benefits */}
        <div className="mt-16 bg-blue-700 rounded-lg p-8 text-white">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 text-center md:text-left">
              <h3 className="text-2xl font-bold mb-2">
                Exclusive Bulk Order Benefits
              </h3>
              <p className="text-blue-100">
                Special discounts and dedicated support for contractors and bulk
                buyers
              </p>
            </div>
            <a
              href="#contact"
              className="px-6 py-3 bg-white text-blue-700 hover:bg-blue-50 font-medium rounded-md transition-all duration-300"
            >
              Contact Our B2B Team
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;