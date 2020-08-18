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

		$office = Auth::user()->office;

		$q_surveys = Survey::where('office',$office)->orderBy('created_at','desc');
		$no_of_surveys = $q_surveys->count();
		
		$surveys = $q_surveys->get();
		
		$surveys_ids = [];
		foreach ($surveys as $survey) {
			
			$surveys_ids[] = $survey->id;
			
		}
		
		$answers = Respondent::whereIn('survey_id',$surveys_ids)->orderBy('created_at','desc');
		
		$data = array(
			"counts"=>array(
				"surveys"=>array(
					"data"=>($no_of_surveys==null)?0:$no_of_surveys,
					"last_update"=>($q_surveys->first()==null)?"":$q_surveys->first()->last_update()
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
