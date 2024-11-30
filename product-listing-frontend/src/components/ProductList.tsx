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
        <div className="container mx-auto p-4">
            {/* SearchBar Component */}
            <SearchBar searchTerm={searchTerm} onSearch={handleSearch} />

            {/* Product List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
                {filteredProducts.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default ProductList;
