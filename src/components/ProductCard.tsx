// import React from 'react';
// import { Product } from '../types';
// import { Check, X } from 'lucide-react';

// interface ProductCardProps {
//   product: Product;
//   onRequestQuote: () => void;
// }

// const ProductCard: React.FC<ProductCardProps> = ({
//   product,
//   onRequestQuote,
// }) => {
//   return (
//     <>
//       <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
//         <div className="h-48 overflow-hidden relative">
//           <img
//             src={product.image}
//             alt={product.name}
//             className="w-full h-full object-fit transition-transform duration-500 hover:scale-110"
//           />
//           <div
//             className={`absolute top-2 right-2 ${
//               product.inStock ? "bg-green-500" : "bg-red-500"
//             } text-white text-xs px-2 py-1 rounded-full`}
//           >
//             {product.inStock ? "In Stock" : "Out of Stock"}
//           </div>
//         </div>

//         <div className="p-5">
//           <h3 className="text-xl font-semibold text-gray-800 mb-2">
//             {product.name}
//           </h3>
//           <p className="text-gray-600 text-sm mb-4">{product.description}</p>

//           <div className="flex justify-between items-center mb-4">
//             <span className="font-semibold text-blue-700">{product.price}</span>
//             <div className="flex items-center">
//               <span className="text-sm text-gray-600 mr-2">Availability:</span>
//               {product.inStock ? (
//                 <Check size={16} className="text-green-500" />
//               ) : (
//                 <X size={16} className="text-red-500" />
//               )}
//             </div>
//           </div>

//           <button
//             onClick={onRequestQuote}
//             className="w-full py-2 bg-blue-700 hover:bg-blue-800 text-white font-medium rounded-md transition-colors duration-300"
//           >
//             Request Quote
//           </button>
//         </div>
//       </div>
//     </>
//   );
// };

// export default ProductCard;

import React, { useState } from "react";
import { Product } from "../types";
import { Check, X } from "lucide-react";
import ProductRequestModal from "./ProductRequestModal";

interface ProductCardProps {
  product: Product;
  onRequestQuote: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onRequestQuote,
}) => {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <>
      <div className="bg-white rounded-2xl shadow-sm border hover:shadow-md transition-all duration-300 hover:-translate-y-1">
        <div className="relative h-[300px] contain overflow-hidden rounded-t-2xl">
          <img
            src={product.image}
            alt={product.name}
            className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
          />
          <span
            className={`absolute top-3 right-3 px-2.5 py-1 text-xs font-medium rounded-full ${
              product.inStock ? "bg-green-600" : "bg-red-600"
            } text-white`}
          >
            {product.inStock ? "In Stock" : "Out of Stock"}
          </span>
        </div>

        <div className="p-4 space-y-3">
          <h3 className="text-lg font-semibold text-gray-800">
            {product.name}
          </h3>
          <p className="text-sm text-gray-600 line-clamp-3">
            {product.description}
          </p>

          <div className="flex items-center justify-between">
            <span className="text-blue-700 font-semibold">{product.price}</span>
            <div className="flex items-center gap-1 text-sm text-gray-500">
              <span>Availability:</span>
              {product.inStock ? (
                <Check size={16} className="text-green-500" />
              ) : (
                <X size={16} className="text-red-500" />
              )}
            </div>
          </div>

          <button
            onClick={onRequestQuote}
            className="w-full mt-2 py-2 bg-blue-700 hover:bg-blue-800 text-white font-medium rounded-lg transition-colors duration-300"
          >
            Request Quote
          </button>
        </div>
      </div>

      <ProductRequestModal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
      />
    </>
  );
};

export default ProductCard;
