<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Office;
use App\Group;
use App\Survey;

use Illuminate\Support\Facades\Auth;

class Selections extends Controller
{

	public function offices()
	{
		
        $offices = Office::all('id','name');
		
		return $offices;
		
	}
	
	public function groups()
	{
		
        $groups = Group::all('id','name');
		
		return $groups;
		
	}
	
	public function surveys(Request $request)
	{
		
		if (is_null($request->office)) {

			$surveys = Survey::all('id','token','name');
			
		} else {

			$surveys = Survey::where('office',$request->office)->get();
		
		}
		
		return $surveys;
	
	}

}