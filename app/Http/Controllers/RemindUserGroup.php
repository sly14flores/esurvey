<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Notifications\RemindGroupAssignment;

use Illuminate\Support\Facades\Auth;
use App\User;
use App\Office;

class RemindUserGroup extends Controller
{
	public function __construct()
	{
		$this->middleware('auth');		
	}
	
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke(Request $request)
    {

		$user = Auth::user();
		
		$user_office = Office::find($user->office);
		
		$payload = [
			"id"=>$user->id,
			"name"=>$user->firstname." ".$user->lastname,
			"office"=>$user_office->name,
			"email"=>$user['email']
		];		
		
		$super_admin = User::where('is_super_admin',1)->first();
		
		if (!is_null($super_admin)) {
			$super_admin->notify(new RemindGroupAssignment($payload));
			$request->session()->put('super_admin_reminded', true);			
		}

		return redirect('account/no_group');

    }
}
