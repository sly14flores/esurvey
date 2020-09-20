<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Providers\RouteServiceProvider;
use App\User;
use Illuminate\Foundation\Auth\RegistersUsers;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;
use Illuminate\Http\Response;

use App\Office;

use App\Notifications\NewUserRegistration;

class RegisterController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Register Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles the registration of new users as well as their
    | validation and creation. By default this controller uses a trait to
    | provide this functionality without requiring any additional code.
    |
    */

    use RegistersUsers;

    /**
     * Where to redirect users after registration.
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
        $this->middleware('guest');
    }

	
	public function messages()
	{
		return [
			'firstname.required' => 'First name is required',
			// 'middlename.required'  => 'Middle name is required',
			'lastname.required'  => 'Last name is required',
		];
	}

    /**
     * Get a validator for an incoming registration request.
     *
     * @param  array  $data
     * @return \Illuminate\Contracts\Validation\Validator
     */
    protected function validator(array $data)
    {
		$customMessages = [
			'firstname.required' => 'First name is required',
			// 'middlename.required' => 'Middle name is required',
			'lastname.required' => 'Last name is required',
			'office.required' => 'Office is required',
			'email.required' => 'Email address is required',
			'username.required' => 'Username is required',
			'password.required' => 'Password is required',
			'password_confirmation.required' => 'Please confirm password',
			'password_confirmation.same' => 'Password confirmation does not match'
		];
		
        $validator = Validator::make($data, [
            'firstname' => ['required', 'string', 'max:255'],
            // 'middlename' => ['required', 'string', 'max:255'],
            'lastname' => ['required', 'string', 'max:255'],
            'office' => ['required', 'integer'],			
            'email' => ['required', 'string', 'email', 'max:255'],
            'username' => ['required', 'string', 'max:255', 'unique:users'],      
            'password' => ['required', 'string', 'min:8'],
            'password_confirmation' => ['required', 'string', 'min:8', 'same:password'],
        ], $customMessages);

		return $validator;

    }

    /**
     * Create a new user instance after a valid registration.
     *
     * @param  array  $data
     * @return \App\User
     */
    protected function create(array $data)
    {		
		
		$user = User::create([
			'firstname' => $data['firstname'],
			'middlename' => $data['middlename'],
			'lastname' => $data['lastname'],
			'office' => $data['office'],
            'email' => $data['email'],
            'username' => $data['username'],
            'password' => Hash::make($data['password']),
			'api_token' => Str::random(80)	
        ]);
		
		$user_office = Office::find($data['office']);
		
		$payload = [
			"id"=>$user->id,
			"name"=>$data['firstname']." ".$data['lastname'],
			"office"=>$user_office->name,
			"email"=>$data['email']
		];

		$super_admin = User::where('is_super_admin',1)->first();
		
		if (!is_null($super_admin)) $super_admin->notify(new NewUserRegistration($payload));		

        return $user;
    }
	
	public function showRegistrationForm() {
		
		$offices = Office::all(['id','name']);
		
		return view("register", ['offices'=>$offices]);
		
	}
	
}
