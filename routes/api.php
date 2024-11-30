<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProductController;

// Define a route to fetch products
Route::get('/products', [ProductController::class, 'fetchProducts']);
