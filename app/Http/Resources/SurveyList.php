<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class SurveyList extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        // return parent::toArray($request);
		return [
			"id"=>$this->id,
			"name"=>$this->name,
			"description"=>$this->description,
			"office"=>$this->office,
			"office_name"=>$this->survey_office->name,
			"created_at"=>$this->created_at
		];
    }
}
