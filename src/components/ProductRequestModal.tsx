import React, { useState, useEffect } from "react";
import { X } from "lucide-react";
import { submitFormData } from "../lib/submitFormData.ts";
import toast, { Toaster } from "react-hot-toast";
import emailjs from "@emailjs/browser";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  productName?: string;
}

const ProductRequestModal: React.FC<Props> = ({
  isOpen,
  onClose,
  productName,
}) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (productName) {
      setMessage(`I’m interested in: ${productName}`);
    }
  }, [productName]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = {
      name,
      email,
      message,
    };

    const result = await submitFormData("product_requests", formData);

    if (result.success) {
      try {
        await emailjs.send(
          import.meta.env.VITE_SERVICE_ID!,
          import.meta.env.VITE_TEMPLATE_ID!,
          {
            from_name: name,
            reply_to: email,
            message: message,
          },
          import.meta.env.VITE_PUBLIC_KEY!
        );

        // toast.success("Message sent and email delivered!");
      } catch (error) {
        console.error("Email send failed:", error);
        toast.error("Saved, but failed to send email.");
      }

      toast.success("Request submitted successfully!");
      setTimeout(() => {
        setEmail("");
        setName("");
        setMessage("");
        setTimeout(onClose, 1000);
      }, 300);
    } else {
      toast.error("Failed to submit request. Please try again.");
    }

    setIsLoading(false);
  };

  if (!isOpen) return null;

  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 transition-opacity">
        <div className="bg-white w-full max-w-lg rounded-2xl shadow-xl p-6 sm:p-8 relative animate-fadeIn">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
          >
            <X size={20} />
          </button>

          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Request a Product Quote
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />

            <input
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              placeholder="Your Email or Number"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <textarea
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              placeholder="Message"
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />

            <div className="flex justify-end gap-3 pt-2">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-5 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition disabled:opacity-50"
                disabled={isLoading}
              >
                {isLoading ? "Sending..." : "Send"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ProductRequestModal;
