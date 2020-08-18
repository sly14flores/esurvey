<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class UserResource extends JsonResource
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
		return array(
			"id"=>$this->id,
			"firstname"=>$this->firstname,
			"middlename"=>$this->middlename,
			"lastname"=>$this->lastname,
			"email"=>$this->email,
			"username"=>$this->username,
			"office"=>$this->office,
			"group"=>$this->group
		);
    }
}