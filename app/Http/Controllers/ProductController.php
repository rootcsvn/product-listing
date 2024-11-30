<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Http;

class ProductController extends Controller
{
    // Method to fetch products from the Dummy Products API
    public function fetchProducts()
    {
        // Fetch the API URL from the .env file
        $apiUrl = env('DUMMY_PRODUCTS_API_URL');
        
        // Make a GET request to the API
        $response = Http::get($apiUrl);
        
        // Return the response JSON back to the frontend
        return $response->json();
    }
}
