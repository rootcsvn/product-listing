import React from 'react';
import { Product } from './ProductList'; // Import the Product type for type safety

interface ProductCardProps {
    product: Product; // Props for a single product
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    return (
        <div className="bg-white shadow-md rounded-lg overflow-hidden hover:scale-105 transition-transform duration-200">
            {/* Product Image */}
            <div className="h-48 overflow-hidden">
                <img
                    src={product.thumbnail}
                    alt={product.title}
                    className="w-full h-full object-cover"
                />
            </div>
            {/* Product Details */}
            <div className="p-4">
                <h3 className="font-semibold text-lg truncate">{product.title}</h3>
                <p className="text-sm text-gray-600 mt-2 line-clamp-2">
                    {product.description}
                </p>
                <p className="text-lg font-bold text-gray-800 mt-4">${product.price}</p>
            </div>
        </div>
    );
};

export default ProductCard;
