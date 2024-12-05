import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from './ProductCard'; // Import ProductCard component
import SearchBar from './SearchBar';    // Import SearchBar component
import Pagination from './Pagination'; // Import Pagination component

// TypeScript type for a product
export interface Product {
    id: number;
    title: string;
    description: string;
    price: number;
    thumbnail: string;
}

const ProductList: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]); // Stores products for the current page
    const [totalPages, setTotalPages] = useState(1); // Total number of pages
    const [currentPage, setCurrentPage] = useState(1); // Current page number
    const [searchTerm, setSearchTerm] = useState(''); // Tracks the search term

    const productsPerPage = 8; // Number of products per page

    // Fetch products from the backend
    const fetchProducts = (page: number, search = '') => {
        axios
            .get('http://localhost:8000/api/products', {
                params: { page, per_page: productsPerPage, search },
            })
            .then((response) => {
                setProducts(response.data.products);
                setTotalPages(response.data.total_pages);
                setCurrentPage(response.data.current_page);
            })
            .catch((error) => {
                console.error('Error fetching products:', error);
            });
    };

    // Fetch products on component mount and when the search term changes
    useEffect(() => {
        fetchProducts(currentPage, searchTerm);
    }, [currentPage, searchTerm]);

    // Handle search input changes
    const handleSearch = (term: string) => {
        setSearchTerm(term);
        setCurrentPage(1); // Reset to the first page on new search
    };

    // Handle page changes
    const handlePageChange = (page: number) => {
        setCurrentPage(page);
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
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-6">
                <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={handlePageChange}
                />
            </div>
        </div>
    );
};

export default ProductList;
