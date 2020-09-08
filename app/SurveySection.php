<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class SurveySection extends Model
{
	
    protected $fillable = ['survey_id','section_name','translated','is_hidden'];	

	public function aspects() {
		
		return $this->hasMany('App\SectionAspect','section_id');		
		
	}
	
	public function items() {
		
		return $this->hasMany('App\SectionItem','section_id');		
		
	}
	
    protected $casts = [
		'is_hidden' => 'boolean'
    ];		

}
