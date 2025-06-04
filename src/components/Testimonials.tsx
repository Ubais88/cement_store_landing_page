import React from 'react';
import { testimonials } from '../data/testimonials';
import { Star } from 'lucide-react';

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            What Our Customers Say
          </h2>
          <p className="mt-4 text-gray-600">
            Don't just take our word for it. Here's what our valued customers
            have to say about their experience with Ashrafi Cement Store.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-gray-50 p-6 rounded-lg shadow-md relative"
            >
              {/* Quote mark */}
              <div className="absolute top-4 right-6 text-5xl text-gray-200 font-serif">
                "
              </div>

              <p className="text-gray-600 mb-6 relative z-10">
                {testimonial.testimonial}
              </p>

              {/* Rating */}
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className={
                      i < testimonial.rating
                        ? "text-amber-500 fill-amber-500"
                        : "text-gray-300"
                    }
                  />
                ))}
              </div>

              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-800">
                    {testimonial.name}
                  </h4>
                  <p className="text-gray-500 text-sm">{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            Join our growing list of satisfied customers
          </p>
          <a
            href="#contact"
            className="inline-block px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white font-medium rounded-md transition-all duration-300"
          >
            Contact Us Today
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;