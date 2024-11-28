<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class ProductController extends Controller
{
    public function getProducts()
    {
        // Use Dummy Products API: https://dummyjson.com/products
        $response = Http::get('https://dummyjson.com/products');

        // Check if the API request was successful
        if ($response->successful()) {
            // Return the products data as JSON
            return response()->json($response->json(), 200);
        }

        // Return error if API request fails
        return response()->json(['message' => 'Failed to fetch products'], 500);
    }
}
