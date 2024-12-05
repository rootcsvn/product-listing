<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class ProductController extends Controller
{
    /**
     * Fetch products with pagination from a third-party API.
     *
     * @param Request $request - The incoming HTTP request.
     * @return \Illuminate\Http\JsonResponse - The JSON response with paginated products.
     */
    public function getProducts(Request $request)
    {
        // Fetch products from the third-party API
        // Replace the URL with the actual API if needed
        $products = Http::get('https://dummyjson.com/products')->json();

        // Get the 'per_page' query parameter from the request, defaulting to 10 if not provided
        $perPage = $request->query('per_page', 10);

        // Get the 'page' query parameter from the request, defaulting to 1 (first page) if not provided
        $currentPage = $request->query('page', 1);

        /**
         * Paginate the products using Laravel's collection helper:
         * - `forPage($currentPage, $perPage)` returns items for the given page and limit.
         */
        $paginatedProducts = collect($products['products'])->forPage($currentPage, $perPage);

        // Total number of products in the dataset
        $total = count($products['products']);

        // Calculate the total number of pages (rounding up to include partial pages)
        $totalPages = ceil($total / $perPage);

        // Return the paginated products and metadata as a JSON response
        return response()->json([
            'products' => $paginatedProducts->values(), // Convert the collection to a JSON-friendly array
            'total' => $total,                         // Total number of products
            'per_page' => $perPage,                    // Number of products per page
            'current_page' => $currentPage,            // Current page number
            'total_pages' => $totalPages,              // Total number of pages
        ]);
    }
}
