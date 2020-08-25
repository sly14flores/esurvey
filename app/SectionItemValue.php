<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class SectionItemValue extends Model
{
	
    protected $fillable = [
		'section_item_id',
		'display',
		'display_translated',
		'siv_value',
		'siv_value_other',
		'siv_min',
		'min_below',
		'siv_max',
		'max_above',
		'data_type',
		'row_type',
		'siv_infographic',
		'highest',
		'lowest',	
		'required'	
	];
	
	public function items() {
		
		return $this->hasMany('App\SivSubItem','vsi_id');
		
	}

    protected $casts = [
		'siv_value_other' => 'boolean',
		'min_below' => 'boolean',
		'max_above' => 'boolean',
		'highest' => 'boolean',
		'lowest' => 'boolean',
		'required' => 'boolean'
    ];		

}
