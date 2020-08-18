<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use App\User;
use App\Providers\RouteServiceProvider;

class DefaultPassword extends Controller
{
	
    protected $redirectTo = RouteServiceProvider::HOME;	

	public function show() {
	
		return view('change_password');
	
	}

	public function update(Request $request) {
	
		$validatedData = $request->validate([
            'password' => 'required|min:8',
            'password_confirmation' => 'required|min:8|same:password',
		],[
			'password_confirmation.same' => 'Password confirmation does not match'		
		]);		
	
		$id = Auth::id();
		
		$user = User::find($id);		
		$user->password = Hash::make($request->password);
		$user->save();
		
		return redirect($this->redirectTo);
	
	}

}
