<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class ConductSurvey extends Controller
{
	    
	public function __invoke(Request $request)
	{

        return view('conduct');

    }

}
