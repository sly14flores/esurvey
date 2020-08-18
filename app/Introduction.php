<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Introduction extends Model
{

    protected $fillable = ['survey_id','content','translated'];
	
	public function itemType() {

		return "intro";
	
	}
	
	public function required() {

		return false;
	
	}	

}
