<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class SectionItemAnswer extends Model
{

    protected $fillable = ['respondent_id','section_item_id','answer'];
    
    protected $hidden = [
        'respondent_id',
        //'section_item_id',
		'created_at',
        'updated_at',
        'section_item'
    ];
    
    protected $casts = [];

    public function section_item()
    {
        return $this->belongsTo('App\SectionItem','section_item_id','id');
    }

    /**
     * created_at mutator
     *
     * @var attribute
     */
    public function getCreatedAtAttribute($value)
    {
        return date("F j, Y h:i A",strtotime($value));
    }
	
    public function getUpdatedAtAttribute($value)
    {
        return date("F j, Y h:i A",strtotime($value));
    }

	/**
	 * Custom Attributes
	 */
    protected $attributes = [
        'item_name',
    ];
    
	protected $appends = [
        'item_name'
    ];

    public function getItemNameAttribute()
    {
        return $this->section_item->item_name;
    }

}