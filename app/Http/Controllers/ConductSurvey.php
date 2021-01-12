<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class ConductSurvey extends Controller
{
	    
	public function __invoke(Request $request)
	{

        $default = 'conduct.themes.default';
        $napanam = 'conduct.themes.napanam';

        $theme = $napanam;

        return view($theme);

    }

}
