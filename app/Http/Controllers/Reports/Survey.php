<?php

namespace App\Http\Controllers\Reports;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;

use App\Exports\SurveyReport;
use Maatwebsite\Excel\Facades\Excel;

use App\Customs\Respondents;

class Survey extends Controller
{

	use Respondents;

    public function export(Request $request)
    {

		$survey_id = $request->survey_id;
        $user_id = $request->user_id;

        $tags = [];

        $key = "$user_id-$survey_id"."-visible-columns";
		$cached_toggles = Cache::get($key);
        $toggles = unserialize($cached_toggles);

		$columns = $this->columns($survey_id,$toggles);
		$rows = $this->rows($survey_id,$toggles);

        return Excel::download(new SurveyReport($columns,$rows), 'Survey_data.csv');
		// return (new SurveyReport($columns,$rows))->download('Survey_data.csv', Excel::CSV, ['Content-Type' => 'text/csv']);		

    }

}
