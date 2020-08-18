<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class SectionAspect extends Model
{

    protected $fillable = ['section_id','aspect_name','translated'];

	public function items() {
		
		return $this->hasMany('App\AspectItem','aspect_id');		
		
	}

}
