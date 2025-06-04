import React, { useState, useEffect } from "react";
import { Menu, X, Phone, Clock, Building as BuildingStore } from "lucide-react";
import Logo from "./Logo";
import ProductRequestModal from "./ProductRequestModal";

const navItems = [
  { name: "Home", href: "#" },
  { name: "Products", href: "#products" },
  { name: "Features", href: "#features" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Contact", href: "#contact" },
];

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const [isModalOpen, setModalOpen] = useState(false);
  const [requestType, setRequestType] = useState<string | undefined>();

  const handleRequestQuote = (productName?: string | undefined) => {
    setRequestType(productName);
    setModalOpen(true);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center">
              <Logo />
              <h1
                className={`text-2xl font-bold ml-2 ${
                  isScrolled ? "text-gray-800" : "text-white"
                }`}
              >
                Ashrafi Cement Store
              </h1>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`font-medium transition-colors duration-300 hover:text-amber-500 ${
                    isScrolled ? "text-gray-700" : "text-white"
                  }`}
                >
                  {item.name}
                </a>
              ))}
            </nav>

            {/* Contact Info - Desktop */}
            <div className="hidden lg:flex items-center space-x-6">
              <div
                className={`flex items-center ${
                  isScrolled ? "text-gray-700" : "text-white"
                }`}
              >
                <Phone size={18} className="mr-2" />
                <span>+91 9927655072</span>
              </div>
              <div
                className={`hidden xl:flex items-center ${
                  isScrolled ? "text-gray-700" : "text-white"
                }`}
              >
                <Clock size={18} className="mr-2" />
                <span>Mon-Sat: 8AM-7PM</span>
              </div>
              <button
                onClick={() => handleRequestQuote("Other Query")}
                className="bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded-md transition-colors duration-300"
              >
                Request Quote
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X
                  size={24}
                  className={isScrolled ? "text-gray-800" : "text-white"}
                />
              ) : (
                <Menu
                  size={24}
                  className={isScrolled ? "text-gray-800" : "text-white"}
                />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden bg-white rounded-lg mt-2 shadow-lg p-4 animate-fadeIn">
              <nav className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-gray-800 font-medium hover:text-amber-500 transition-colors duration-300"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
              </nav>
              <div className="mt-4 pt-4 border-t border-gray-200 space-y-4">
                <div className="flex items-center text-gray-700">
                  <Phone size={18} className="mr-2" />
                  <span>+91 9927655072</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <Clock size={18} className="mr-2" />
                  <span>Mon-Sat: 8AM-7PM</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <BuildingStore size={18} className="mr-2" />
                  <span>Pakwara, DingarPur Road, Uttar Pradesh 244102</span>
                </div>
                <button className="w-full bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded-md transition-colors duration-300">
                  Request Quote
                </button>
              </div>
            </div>
          )}
        </div>
      </header>
      <ProductRequestModal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        productName={requestType}
      />
    </>
  );
};

export default Header;
