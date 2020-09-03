<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

use App\Survey;
use App\Respondent;

class DashboardData extends Controller
{
	public function __construct()
	{
		$this->middleware(['auth:api']);
	}

	public function __invoke(Request $request)
	{

		$id = $request->id;

		$q_survey = Survey::where('id',$id);

		$survey = $q_survey->first();

		$answers = Respondent::where('survey_id',$id);
		
		$data = array(
			"info"=>array(
				"survey"=>array(
					"data"=>($survey==null)?"":$survey->name,
					"last_update"=>($answers->first()==null)?"":$answers->first()->last_update()
				),
				"answered"=>array(
					"data"=>($answers==null)?0:$answers->count(),
					"last_update"=>($answers->first()==null)?"":$answers->first()->last_update()
				)
			)
		);
		
		return $data;

	}
}
