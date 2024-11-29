<?php

namespace App\Http\Middleware;

use Closure;

class CorsMiddleware
{
    // Handle method to intercept requests and add CORS headers
    public function handle($request, Closure $next)
    {
        // Headers to allow CORS and continue to the next middleware
        return $next($request)
            ->header('Access-Control-Allow-Origin', '*')
            ->header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
            ->header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    }
}
