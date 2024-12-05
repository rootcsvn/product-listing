<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProductController; // Import the App-level ProductController
use App\Http\Controllers\Api\ProductController as ApiProductController; // Import the API-level ProductController

// API Routes for Third-Party Integration
Route::prefix('products')->group(function () {
    // Fetch paginated products via the API ProductController
    Route::get('/', [ApiProductController::class, 'getProducts']);
    Route::get('/products', [ProductController::class, 'getProducts']);
});

// App-level Product Logic
Route::prefix('app-products')->group(function () {
    // Fetch all products (Example: App-specific logic)
    Route::get('/', [ProductController::class, 'index']);

    // Show a specific product by ID
    Route::get('/{id}', [ProductController::class, 'show']);
});

// Example Route for API Status
Route::get('/status', function () {
    return response()->json(['status' => 'API is working'], 200);
});