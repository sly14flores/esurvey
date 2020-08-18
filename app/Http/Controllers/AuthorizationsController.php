<?php

namespace App\Http\Controllers;

use App\System\Authorizations;

use Illuminate\Http\Request;

class AuthorizationsController extends Controller
{
	
	private $Authorizations;
	
	public function __construct()
	{

		$this->Authorizations = new Authorizations();
	
	}
	
    public function get_template()
	{

		return $this->Authorizations->form_template();
	
	}

}
