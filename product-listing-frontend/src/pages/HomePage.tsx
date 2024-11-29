import React, { useState, useEffect } from 'react';
import { fetchProducts } from '../services/api';
import ProductList from '../components/ProductList';
import SearchBar from '../components/SearchBar';
import { Product } from '../types/Product';

const HomePage: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
    const [searchTerm, setSearchTerm] = useState<string>('');

    useEffect(() => {
        const getProducts = async () => {
            const data = await fetchProducts();
            setProducts(data);
            setFilteredProducts(data);
        };
        getProducts();
    }, []);

    // Update product list based on search term
    useEffect(() => {
        setFilteredProducts(
            products.filter((product) =>
                product.title.toLowerCase().includes(searchTerm.toLowerCase())
            )
        );
    }, [searchTerm, products]);

    return (
        <div style={{ padding: '20px' }}>
            <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
            <ProductList products={filteredProducts} />
        </div>
    );
};

export default HomePage;
