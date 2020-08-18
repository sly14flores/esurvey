<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use App\System\Authorizations;

class GroupResource extends JsonResource
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

		$Authorizations = new Authorizations();
		$gates_policies = $Authorizations->decode($this->authorizations);

		return [
			"id"=>$this->id,
			"name"=>$this->name,
			"description"=>$this->description,
			"authorizations"=>$gates_policies,
			"created_at"=>$this->created_at
		];
    }
}
