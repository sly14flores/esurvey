<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class SectionItem extends Model
{
	
    protected $fillable = [
		'section_id',
		'required',
		'is_shown',
		'item_name',
		'translated',
		'item_type',
		'item_presentation',
		'max_checkbox_selections',
		'item_infographic',
		'item_infographic_left',
		'item_infographic_right',
		'item_infographic_bottom_logo',
		'use_images',
		'text_is_multiple'
	];		

	public function values() {
		
		return $this->hasMany('App\SectionItemValue','section_item_id');		
		
	}
	
    protected $casts = [
		'use_images' => 'boolean',
		'text_is_multiple' => 'boolean',
		'required' => 'boolean',
		'is_shown' => 'boolean'
    ];	

}
