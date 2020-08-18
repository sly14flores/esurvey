<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Office extends Model
{
	
    protected $fillable = ['name','description'];
	
    public function getCreatedAtAttribute($value)
    {
        return date("F j, Y h:i A",strtotime($value));
    }
	
}