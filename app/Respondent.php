<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

use App\Events\UpdateDashboard;

use App\Office;

class Respondent extends Model
{

	protected $fillable = ['survey_id'];
	
	protected $hidden = [
		'anon_id',
		'survey_id',
		'survey',
		'created_at',
		'updated_at'
	];
	
    protected $casts = [];
	
	public function section_item_answers()
	{
		
		return $this->hasMany('App\SectionItemAnswer');		
		
	}
	
	public function section_item_value_answers()
	{
		
		return $this->hasMany('App\SectionItemValueAnswer');		
		
	}	
	
	public function section_item_sub_item_answers()
	{
		
		return $this->hasMany('App\SectionItemSubItemAnswer');		
		
	}
	
	public function aspect_item_answers()
	{
		
		return $this->hasMany('App\AspectItemAnswer');		
		
	}
	
	public function aspect_item_sub_item_answers()
	{
		
		return $this->hasMany('App\AspectItemSubItemAnswer');		
		
	}
	
	public function survey()
	{

		return $this->belongsTo('App\Survey');

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

	public function last_update()
	{
        return date("M j, Y h:i A",strtotime($this->created_at));
	}	
	
    protected $dispatchesEvents = [
        'created' => UpdateDashboard::class
    ];	


	/**
	 * Custom Attributes
	 */

	// Attributes
	// JSON Response
	protected $appends = [
		'office_name',
		'survey_name',
		'item_answers',
		'date'
	];

	public function getOfficeNameAttribute()
	{
		$office = Office::find($this->office);
		$office_name = null;
		if (!is_null($office)) $office_name = $office->name;
		
		return $office_name;
	}

	// Survey Name
	public function getSurveyNameAttribute()
	{
		return $this->survey->name;
	}

	public function getDateAttribute()
	{
        return date("M j, Y h:i A",strtotime($this->created_at));
	}

	public function getItemAnswersAttribute()
	{
		return $this->section_item_answers()->get();
	}

}
