<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class SectionItem extends Model
{
	
    protected $fillable = [
		'section_id',
		'required',
		'item_name',
		'translated',
		'item_type',
		'item_presentation',
		'item_infographic',
		'use_images',
		'text_is_multiple'
	];		

	public function values() {
		
		return $this->hasMany('App\SectionItemValue','section_item_id');		
		
	}
	
    protected $casts = [
		'use_images' => 'boolean',
		'text_is_multiple' => 'boolean',
		'required' => 'boolean'
    ];	

}
