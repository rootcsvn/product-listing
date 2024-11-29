<?php

namespace routes;

// Import the Route facade & ProductController
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProductController;

// Define an API route that uses the 'fetchProducts' method in ProductController
Route::get('/products', [ProductController::class, 'fetchProducts']);
