<?php

namespace App\Http\Controllers\Auth; 

use App\Http\Controllers\Controller;
use App\Providers\RouteServiceProvider;
use Illuminate\Foundation\Auth\AuthenticatesUsers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;

class LoginController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Login Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles authenticating users for the application and
    | redirecting them to your home screen. The controller uses a trait
    | to conveniently provide its functionality to your applications.
    |
    */

    use AuthenticatesUsers;

    /**
     * Where to redirect users after login.
     *
     * @var string
     */
    protected $redirectTo = RouteServiceProvider::HOME;

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {        
        $this->middleware('guest')->except('logout');
    }

    public function showLoginForm()
    {
        return view('login-ajax');
    }    

    public function username()
    {
        return 'username';
    } 

    /**
     * Send the response after the user was authenticated.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    protected function sendLoginResponse(Request $request)
    {
        $request->session()->regenerate();

        $this->clearLoginAttempts($request);

        if ($response = $this->authenticated($request, $this->guard()->user())) {
            return $response;
        }

		$user = $request->user();
		
		/**
		 * Profile Picture
		 */
		$avatar = "images/avatar.png";
		
		$profile = [
			"id"=>$user->id,
			"firstname"=>$user->firstname,
			"lastname"=>$user->lastname,
			"api_token"=>$user->api_token,
			"office"=>$user->office,
			"avatar"=>$avatar
		];        

        return $request->wantsJson()
                    ? new Response($profile, 200)
                    : redirect()->intended($this->redirectPath());
    }

}
