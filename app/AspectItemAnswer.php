<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class AspectItemAnswer extends Model
{

    protected $fillable = ['respondent_id','aspect_item_id','answer'];

    protected $casts = [];

}
