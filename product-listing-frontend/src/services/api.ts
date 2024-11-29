import axios from 'axios';
import { Product } from '../types/Product';

// Configure Axios instance for API calls
const api = axios.create({
    baseURL: 'http://localhost:8000/api',
});

// Fetch products from the Laravel backend
export const fetchProducts = async (): Promise<Product[]> => {
    const response = await api.get('/products');
    return response.data.products;
};
