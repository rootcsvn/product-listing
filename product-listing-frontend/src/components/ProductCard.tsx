import React from 'react';
import { Product } from './ProductList'; // Import the Product type for type safety

interface ProductCardProps {
    product: Product; // Props for a single product
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    return (
        <div className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105">
            {/* Product Image */}
            <div className="h-48 bg-gray-100 flex items-center justify-center overflow-hidden">
                <img
                    src={product.thumbnail}
                    alt={product.title}
                    className="w-full h-full object-contain"
                />
            </div>
            {/* Product Details */}
            <div className="p-4">
                <h3 className="font-semibold text-lg text-gray-800 truncate">{product.title}</h3>
                <p className="text-sm text-gray-500 mt-2 line-clamp-2">{product.description}</p>
                <div className="mt-4 flex items-center justify-between">
                    <span className="text-lg font-bold text-blue-600">${product.price}</span>
                    <button className="px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700">
                        Buy Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
