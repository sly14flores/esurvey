<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Survey;

class ConductSurvey extends Controller
{
	    
	public function __invoke($token)
	{
        $survey = Survey::where('token',$token)->first();

        $default = "conduct.themes.default";
        $selected = "conduct.themes.{$survey->theme}";

        $theme = (is_null($survey->theme))?$default:$selected;

        return view($theme);

    }

}
