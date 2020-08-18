<?php

namespace App\Http\Middleware;

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use App\User;

use Closure;

class DefaultPassword
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

		$password_is_default = Hash::check(env('USER_PASSWORD','12345678'),$user->password);

        if ($password_is_default) {
            return redirect('change/password');
        }

        return $next($request);

    }
}
