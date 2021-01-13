<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Office;
use App\Group;
use App\Survey;
use App\Customs\Themes;

use Illuminate\Support\Facades\Auth;

class Selections extends Controller
{

	use Themes;

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

		$user = Auth::guard('api')->user();
		
		if (!is_null($user)) {

			if (($user->isSuperAdmin()) || ($user->is_admin())) {

				$surveys = Survey::all('id','token','name');
				
				return $surveys;
			
			}
		
		}

		if (is_null($request->office)) {
			
			$surveys = Survey::all('id','token','name');
			
		} else {

			$surveys = Survey::where('office',$request->office)->get();
		
		}
		
		return $surveys;
	
	}
	
	public function generalSurveys(Request $request)
	{

		$surveys = Survey::where('include_office',false)->get();

		return $surveys;
	
	}

	public function specificSurveys(Request $request)
	{

		$surveys = Survey::where('include_office',true)->get();

		return $surveys;

	}

	public function conductThemes()
	{
		return $this->themes();
	}

}