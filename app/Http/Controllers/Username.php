<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class Username extends Controller
{
	public function __invoke(Request $request) {
	
		$user = DB::table('users')->where('username', $request->username)->first();
		
		return array("taken"=>($user!=null)?true:false);
		
	}
}
