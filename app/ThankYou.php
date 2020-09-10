<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ThankYou extends Model
{
	
    protected $fillable = ['survey_id','infographic','message','translated'];
	
    /**
     * created_at mutator
     *
     * @var attribute
     */
    public function getCreatedAtAttribute($value)
    {
        return date("F j, Y h:i A",strtotime($value));
    }	
	
}
