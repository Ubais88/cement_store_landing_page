import React, { useState } from "react";
import { products, categories } from "../data/products";
import ProductCard from "./ProductCard";
import { Category, Product } from "../types";
import ProductRequestModal from "./ProductRequestModal";

const ProductCatalog: React.FC = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [selectedProductName, setSelectedProductName] = useState<
    string | undefined
  >();

  const filteredProducts =
    activeCategory === "all"
      ? products
      : products.filter((product) => product.category === activeCategory);

  const handleRequestQuote = (productName?: string | undefined) => {
    setSelectedProductName(productName);
    setModalOpen(true);
  };

  return (
    <section id="products" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Our Product Catalog
          </h2>
          <p className="mt-4 text-gray-600">
            Browse our comprehensive range of high-quality construction
            materials. We offer competitive pricing, bulk discounts, and
            delivery services.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="mt-10 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => setActiveCategory("all")}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${
              activeCategory === "all"
                ? "bg-blue-700 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            All Products
          </button>

          {categories.map((category: Category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${
                activeCategory === category.id
                  ? "bg-blue-700 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product: Product) => (
            <ProductCard
              key={product.id}
              product={product}
              onRequestQuote={() => handleRequestQuote(product.name)}
            />
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <p className="text-gray-700 mb-4">
            Don't see what you're looking for? We have many more products
            available.
          </p>
          <button
            onClick={() => handleRequestQuote("Other Query")}
            className="px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white font-medium rounded-md transition-all duration-300"
          >
            Request Custom Quote
          </button>
        </div>
        <ProductRequestModal
          isOpen={isModalOpen}
          onClose={() => setModalOpen(false)}
          productName={selectedProductName}
        />
      </div>
    </section>
  );
};

export default ProductCatalog;
