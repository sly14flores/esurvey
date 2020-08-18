<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class DashboardController extends Controller
{

	public function __construct()
	{
		$this->middleware(['auth']);
	}

	public function __invoke(Request $request)
	{
		
		$data = array("page"=>"dashboard");

		return view('app',$data);		
		
	}

}
