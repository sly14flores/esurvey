<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class SectionItemValueAnswer extends Model
{

    protected $fillable = ['respondent_id','section_item_value_id','answer'];

    protected $casts = [];

}
