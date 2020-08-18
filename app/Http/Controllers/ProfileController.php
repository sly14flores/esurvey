<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ProfileController extends Controller
{
	
	public function __construct()
	{
		$this->middleware('auth');
	}	
	
	public function get_profile(Request $request) {
		
		// return $request->user();
		
		$user = $request->user();
		
		/**
		 * Profile Picture
		 */
		$avatar = "images/avatar.png";
		
		return [
			"id"=>$user->id,
			"firstname"=>$user->firstname,
			"lastname"=>$user->lastname,
			"api_token"=>$user->api_token,
			"avatar"=>$avatar
		];
		
	}
	
	public function api_token(Request $request) {

		return $request->user()->api_token;
		
	}
	
}
