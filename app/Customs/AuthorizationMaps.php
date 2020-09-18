<?php

namespace App\Customs;

trait AuthorizationMaps
{
	
	protected $cmpm = [
		"index"=>"viewAny",
		"show"=>"view",
		"create"=>"create",
		"store"=>"create",
		"edit"=>"update",
		"update"=>"update",
		"destroy"=>"delete"
	];	
	
}