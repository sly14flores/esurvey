<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class SectionItemAnswer extends Model
{

    protected $fillable = ['respondent_id','section_item_id','answer'];
    
    protected $hidden = [
        'respondent_id',
        'section_item_id',
		'created_at',
        'updated_at',
        'section_item'
    ];
    
    protected $casts = [];

    public function section_item()
    {
        return $this->belongsTo('App\SectionItem','section_item_id','id');
    }
	
	public function respondent()
	{
		return $this->belongsTo('App\Respondent','respondent_id','id');
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
	protected $appends = [
        'item_name',
		'section_name',
		'item_type',
		'value_answers'
    ];

    public function getItemNameAttribute()
    {
        return $this->section_item->item_name;
    }
	
	public function getSectionNameAttribute()
	{
		return $this->section_item->section->section_name;
	}
	
	public function getItemTypeAttribute()
	{
		return $this->section_item->item_type;
	}

	public function getValueAnswersAttribute()
	{

	}

}