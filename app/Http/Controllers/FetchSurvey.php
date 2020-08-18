<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Survey;
use App\Http\Resources\SurveyResource;

class FetchSurvey extends Controller
{

	public function __invoke(Request $request)
	{
        
        $token = $request->token;

        $survey = Survey::where('token',$token)->get()->first();

        return new SurveyResource($survey);

    }

}
