<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Office;
use App\Group;
use App\Survey;

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
	
	public function surveys()
	{

		$surveys = Survey::all('id','token','name');
		
		return $surveys;
	
	}

}