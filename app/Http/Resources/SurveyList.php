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
        $app_url = env('APP_URL');
        $once_link = "";
        $recursive_link = "";
        if (is_null($this->office)) {
            $once_link = $app_url.'/survey/'.$this->token.'#/general/once/'.$this->token;
            $recursive_link = $app_url.'/survey/'.$this->token.'#/general/recursive/'.$this->token;
        } else {
            $once_link = $app_url.'/survey/'.$this->token.'#/specific/once/'.$this->token;
            $recursive_link = $app_url.'/survey/'.$this->token.'#/specific/recursive/'.$this->token;
        }

		return [
			"id"=>$this->id,
			"name"=>$this->name,
			"description"=>$this->description,
			"office"=>$this->office,
			"office_name"=>$this->survey_office->name,
            "created_at"=>$this->created_at,
            "once_link"=>$once_link,
            "recursive_link"=>$recursive_link,
		];
    }
}
