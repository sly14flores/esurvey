<?php

namespace App\Http\Controllers\Reports;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Exports\SurveyReport;
use Maatwebsite\Excel\Facades\Excel;

class Survey extends Controller
{

    public function export()
    {

        return Excel::download(new SurveyReport, 'Report.xlsx');

    }

}
