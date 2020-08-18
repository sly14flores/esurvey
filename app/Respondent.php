<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

use App\Events\UpdateDashboard;

class Respondent extends Model
{

    protected $fillable = ['survey_id'];
	
    protected $casts = [];
	
	public function section_item_answers()
	{
		
		return $this->hasMany('App\SectionItemAnswer');		
		
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
	
    /**
     * created_at mutator
     *
     * @var attribute
     */
    public function getCreatedAtAttribute($value)
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

}
