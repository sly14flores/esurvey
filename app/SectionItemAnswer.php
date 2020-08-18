<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class SectionItemAnswer extends Model
{

    protected $fillable = ['respondent_id','section_item_id','answer'];
	
    protected $casts = [];

}