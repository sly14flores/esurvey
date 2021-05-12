<?php

namespace App\Http\Middleware;

use Closure;

class LogoutMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        var_dump($request->header('Authorization'));

        $response = $next($request);

        return $response;
    }
}
