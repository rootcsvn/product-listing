import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from './ProductCard';
import SearchBar from './SearchBar';

// TypeScript type for a product
export interface Product {
    id: number;
    title: string;
    description: string;
    price: number;
    thumbnail: string;
}

const ProductList: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]); // Stores all products
    const [filteredProducts, setFilteredProducts] = useState<Product[]>([]); // Stores filtered products
    const [searchTerm, setSearchTerm] = useState(''); // Tracks the current search term

    // Fetch products from the backend on component mount
    useEffect(() => {
        axios.get('http://localhost:8000/api/products') // Replace with your backend's API URL
            .then(response => {
                setProducts(response.data.products); // Update state with fetched products
                setFilteredProducts(response.data.products); // Set initial filtered products
            })
            .catch(error => {
                console.error('Error fetching products:', error); // Handle errors
            });
    }, []);

    // Handle search input changes
    const handleSearch = (term: string) => {
        setSearchTerm(term); // Update search term state
        setFilteredProducts(
            products.filter(product =>
                product.title.toLowerCase().includes(term.toLowerCase())
            )
        ); // Filter products based on the search term
    };

    return (
        <div className="container mx-auto p-6 bg-gray-50 min-h-screen">
            {/* Page Header */}
            <header className="text-center mb-8">
                <h1 className="text-3xl font-extrabold text-gray-900 mb-2">Product Catalog</h1>
                <p className="text-gray-600">Browse through our collection of premium products.</p>
            </header>

            {/* SearchBar Component */}
            <SearchBar searchTerm={searchTerm} onSearch={handleSearch} />

            {/* Product List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-6">
                {filteredProducts.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default ProductList;
