<?php

namespace App\Http\Controllers\Reports;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Exports\SurveyReport;
use Maatwebsite\Excel\Facades\Excel;

use App\Customs\Respondents;

class Survey extends Controller
{

	use Respondents;

    public function export(Request $request)
    {

		$survey_id = $request->survey_id;
        
        $tags = [];
		$columns = $this->columns($survey_id);
		$rows = $this->rows($survey_id);

        return Excel::download(new SurveyReport($columns,$rows), 'Survey_data.xlsx');

    }

}
