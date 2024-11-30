import axios from 'axios';

// Define the base URL for the Laravel backend
const BASE_URL = 'http://localhost:8000/api';

// Fetch products from the Laravel backend
export const fetchProducts = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/products`);
        return response.data.products; // Return the list of products
    } catch (error) {
        console.error('Error fetching products:', error);
        throw error;
    }
};
