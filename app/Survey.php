<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

use App\Events\UpdateDashboard;

class Survey extends Model
{

    protected $fillable = [
		'name',
		'description',
		'office',
		'background',
		'left_infographic',
		'right_infographic',
		'include_office',
		'fullscreen_mobile',
		'theme',
	];

	public function introductions() {
		
		return $this->hasMany('App\Introduction');
		
	}

	public function sections() {
		
		return $this->hasMany('App\SurveySection');
		
	}

	public function survey_office() {

		return $this->belongsTo('App\Office','office');
	
	}
	
	public function thank_you() {

		return $this->hasOne('App\ThankYou');
	
	}
	
	public function privacy_notice() {

		return $this->hasOne('App\PrivacyNotice');
	
	}

	public function respondents() {

		return $this->hasMany('App\Respondent');

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
	
    protected $casts = [
		'include_office' => 'boolean',
		'fullscreen_mobile' => 'boolean'
    ];	
	
    protected $dispatchesEvents = [
        'created' => UpdateDashboard::class
    ];

}
