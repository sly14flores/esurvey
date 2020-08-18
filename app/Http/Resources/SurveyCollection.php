<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\ResourceCollection;
use App\Http\Resources\SurveyList;
use App\Survey;

class SurveyCollection extends ResourceCollection
{
    /**
     * Transform the resource collection into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
		$this->collection->transform(function (Survey $survey) {
			return new SurveyList($survey);
		});
        return parent::toArray($request);
    }
}
