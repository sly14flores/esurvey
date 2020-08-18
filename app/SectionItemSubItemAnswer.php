<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class SectionItemSubItemAnswer extends Model
{

    protected $fillable = ['respondent_id','section_item_sub_item_id','answer'];
	
    protected $casts = [];

}
