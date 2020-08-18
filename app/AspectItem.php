<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class AspectItem extends Model
{

    protected $fillable = [
		'aspect_id',
		'required',		
		'item_name',
		'translated',
		'item_type',
		'item_presentation',
		'max_checkbox_selections',
		'item_infographic',
		'use_images',
		'text_is_multiple'
	];	

	public function values() {
		
		return $this->hasMany('App\AspectItemValue','aspect_item_id');		
		
	}
	
    protected $casts = [
		'use_images' => 'boolean',
		'text_is_multiple' => 'boolean',
		'required' => 'boolean'
    ];	

}
