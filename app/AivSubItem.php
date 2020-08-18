<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class AivSubItem extends Model
{

    protected $fillable = [
		'vsi_id',
		'display',
		'vsi_value',
		'vsi_value_other',
		'vsi_min',
		'min_below',
		'vsi_max',
		'max_above',
		'data_type'
	];
	
    protected $casts = [
		'vsi_value_other' => 'boolean',
		'min_below' => 'boolean',
		'max_above' => 'boolean'
	];	

}
