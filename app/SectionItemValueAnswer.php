<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class SectionItemValueAnswer extends Model
{

    protected $fillable = ['respondent_id','section_item_value_id','section_item_answer_id','answer','other_answer'];

    protected $hidden = [
        'respondent_id',
		'created_at',
        'updated_at',
        'section_item_answer_id',
        'section_item_value',
    ];    

    protected $casts = [];

    public function section_item_value()
    {
        return $this->belongsTo('App\SectionItemValue','section_item_value_id','id');
    }

	/**
	 * Custom Attributes
	 */
	protected $appends = [
        'item_value_name',
    ];

    public function getItemValueNameAttribute()
    {
        return $this->section_item_value->display;
    }

}
