<?php

namespace App\Http\Middleware;

use Closure;

use Illuminate\Support\Facades\Auth;

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
        /**
         * For api request only
         */
        if ($request->wantsJson()) {

            if ($request->header('Authorization') == "Bearer null") {
                Auth::logout();
            }

        }

        $response = $next($request);

        return $response;
    }
}
