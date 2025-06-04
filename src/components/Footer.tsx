import React from 'react';
import Logo from './Logo';
import { Facebook, Twitter, Instagram, Linkedin, CreditCard, Mail, ArrowRight } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <Logo />
              <h3 className="text-xl font-bold ml-2">Ashrafi Cement Store</h3>
            </div>
            <p className="text-gray-400 mb-6">
              Your one-stop destination for premium construction materials.
              Quality products at competitive prices.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center"
                >
                  <ArrowRight size={16} className="mr-2" />
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#products"
                  className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center"
                >
                  <ArrowRight size={16} className="mr-2" />
                  Products
                </a>
              </li>
              <li>
                <a
                  href="#features"
                  className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center"
                >
                  <ArrowRight size={16} className="mr-2" />
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#testimonials"
                  className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center"
                >
                  <ArrowRight size={16} className="mr-2" />
                  Testimonials
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center"
                >
                  <ArrowRight size={16} className="mr-2" />
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Product Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">
              Product Categories
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#products"
                  className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center"
                >
                  <ArrowRight size={16} className="mr-2" />
                  Cement Products
                </a>
              </li>
              <li>
                <a
                  href="#products"
                  className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center"
                >
                  <ArrowRight size={16} className="mr-2" />
                  Iron & Steel Materials
                </a>
              </li>
              <li>
                <a
                  href="#products"
                  className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center"
                >
                  <ArrowRight size={16} className="mr-2" />
                  Concrete Products
                </a>
              </li>
              <li>
                <a
                  href="#products"
                  className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center"
                >
                  <ArrowRight size={16} className="mr-2" />
                  Construction Fixtures
                </a>
              </li>
              <li>
                <a
                  href="#products"
                  className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center"
                >
                  <ArrowRight size={16} className="mr-2" />
                  All Products
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">
              Newsletter
            </h3>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter to receive updates on new products,
              special offers, and industry news.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="flex-grow px-4 py-2 bg-gray-800 border border-gray-700 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              <button className="bg-amber-500 hover:bg-amber-600 px-4 py-2 rounded-r-md transition-colors duration-300">
                <Mail size={20} />
              </button>
            </div>

            {/* Payment Methods */}
            <div className="mt-6">
              <h4 className="text-sm font-medium mb-2">We Accept</h4>
              <div className="flex space-x-2">
                <CreditCard size={24} className="text-gray-400" />
                <span className="text-gray-400">
                  Visa, Mastercard, PayTM, UPI, Cash
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between">
          <p className="text-gray-400 text-sm text-center md:text-left">
            &copy; {new Date().getFullYear()} Ashrafi Cement Store. All rights
            reserved.
          </p>
          <div className="mt-4 md:mt-0 flex justify-center md:justify-end space-x-4 text-sm text-gray-400">
            <a
              href="#"
              className="hover:text-white transition-colors duration-300"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="hover:text-white transition-colors duration-300"
            >
              Terms & Conditions
            </a>
            <a
              href="#"
              className="hover:text-white transition-colors duration-300"
            >
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;