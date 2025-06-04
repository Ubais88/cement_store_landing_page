import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Truck } from 'lucide-react';
import { submitFormData } from '../lib/submitFormData.ts';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const res = await submitFormData("contactMessages", formData);
    setLoading(false);
    setStatus(res.success ? "Message sent!" : "Failed to send message.");
    if (res.success)
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };


  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Contact Us
          </h2>
          <p className="mt-4 text-gray-600">
            Have questions about our products or services? Reach out to our team
            and we'll be happy to assist you.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div>
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">
                Get In Touch
              </h3>

              <div className="space-y-6">
                <div className="flex">
                  <div className="flex-shrink-0 mt-1">
                    <MapPin size={20} className="text-blue-700" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-800">
                      Store Location
                    </h4>
                    <p className="text-gray-600 mt-1">
                      Pakwara, DingarPur Road, Uttar Pradesh 244102
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex-shrink-0 mt-1">
                    <Phone size={20} className="text-blue-700" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-800">Phone</h4>
                    <p className="text-gray-600 mt-1">
                      Sales: +91 9927655072
                      <br />
                      Support: +91 9927655072
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex-shrink-0 mt-1">
                    <Mail size={20} className="text-blue-700" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-800">Email</h4>
                    <p className="text-gray-600 mt-1">
                      Sales: moubais2143@gmail.com
                      <br />
                      Support: moubais2143@gmail.com
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex-shrink-0 mt-1">
                    <Clock size={20} className="text-blue-700" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-800">
                      Business Hours
                    </h4>
                    <p className="text-gray-600 mt-1">
                      Monday-Saturday: 8:00 AM - 7:00 PM
                      <br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex-shrink-0 mt-1">
                    <Truck size={20} className="text-blue-700" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-800">
                      Delivery Information
                    </h4>
                    <p className="text-gray-600 mt-1">
                      Free delivery within 20km radius for orders above ₹10,000.
                      <br />
                      Delivery time: 24-48 hours from order confirmation.
                    </p>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="mt-8 h-[300px] rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3495.9545428193646!2d78.67240127538778!3d28.810428475568038!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390afd92332b8457%3A0xb3a3c4b95704c6d2!2sAshrafi%20Cement%20Store!5e0!3m2!1sen!2sin!4v1747466394048!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  title="Ashrafi Cement Store Location"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">
                Send Us a Message
              </h3>

              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-gray-700 font-medium mb-2"
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-600"
                      placeholder="John Doe"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-gray-700 font-medium mb-2"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-600"
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="phone"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-600"
                    placeholder="+91 9876543210"
                  />
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="subject"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-600"
                    placeholder="Product Inquiry"
                    required
                  />
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="message"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-600 resize-none"
                    placeholder="Your message here..."
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-700 hover:bg-blue-800 text-white font-medium py-3 rounded-md transition-colors duration-300"
                  disabled={loading}
                >
                  Send Message
                </button>
                {/* Status */}
                {status && (
                  <p className="mt-4 text-center text-sm text-green-600 font-medium">
                    {status}
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;