<?php

namespace App\Http\Middleware;

use Illuminate\Support\Facades\Auth;
use App\User;

use Closure;

class CheckForGroup
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
		
		$id = Auth::id();

		$user = User::find($id);
		
		if (is_null($user->group)) {
            return redirect('account/no_group');		
		};
		
        return $next($request);
    }
}
