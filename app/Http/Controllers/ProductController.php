<?php

namespace App\Http\Controllers;

// Import the HTTP Request class & facade for API requests
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class ProductController extends Controller
{
    // Method to fetch products from a third-party API
    public function getProducts()
    {
        // Use Dummy Products API: https://dummyjson.com/products
        $response = Http::get(env('DUMMY_PRODUCTS_API_URL'));

        // Check if the API request was successful
        if ($response->successful()) {
            // Return the products data as JSON
            return response()->json($response->json(), 200);
        }

        // Return error if API request fails
        return response()->json(['message' => 'Failed to fetch products'], 500);
    }
}
