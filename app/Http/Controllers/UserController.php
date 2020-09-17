<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Resources\UserResource;
use App\Http\Resources\UserCollection;
use App\User;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
	
	public function __construct()
	{
		$this->middleware('auth:api');

        $this->authorizeResource(User::class, 'user');
	}
	
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return new UserCollection(User::paginate(15));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {

        $user = new User;

		$user->firstname = $request['firstname'];
		$user->middlename = $request['middlename'];
		$user->lastname = $request['lastname'];
		$user->email = $request['email'];
		$user->username = $request['username'];
		$user->office = $request['office'];
		$user->group = $request['group'];
		
		$user->password = Hash::make(env('USER_PASSWORD','12345678'));
		$user->api_token = Str::random(80);		

		$user->save();

        return new UserResource($user);

    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(User $user)
    {
		
		return new UserResource($user);
		
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
		
        $user = User::find($id);
		
		$user->firstname = $request['firstname'];
		$user->middlename = $request['middlename'];
		$user->lastname = $request['lastname'];
		$user->email = $request['email'];
		$user->username = $request['username'];
		$user->office = $request['office'];
		$user->group = $request['group'];		

		$user->save();	

        return new UserResource($user);
		
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
		
        $user = User::find($id);	
		
        $user->delete();

        return response()->json();
		
    }
}
