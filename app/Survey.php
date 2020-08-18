<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

use App\Events\UpdateDashboard;

class Survey extends Model
{

    protected $fillable = ['name','description','office'];

	public function introductions() {
		
		return $this->hasMany('App\Introduction');
		
	}

	public function sections() {
		
		return $this->hasMany('App\SurveySection');
		
	}

	public function survey_office() {

		return $this->belongsTo('App\Office','office');
	
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
