<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Group;
use App\Http\Resources\GroupResource;
use App\Http\Resources\GroupCollection;
use App\System\Authorizations;

use App\Customs\AuthorizationMaps;
use Illuminate\Support\Facades\Gate;

class GroupController extends Controller
{
	
	use AuthorizationMaps;
	
	public function __construct()
	{
		$this->middleware('auth:api');
	}	
	
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
		Gate::authorize($this->cmpm[__FUNCTION__], Group::class);		
		
		return new GroupCollection(Group::paginate(15));
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
		
		Gate::authorize($this->cmpm[__FUNCTION__], Group::class);		
		
		$Authorizations = new Authorizations();
		$gates_policies = $Authorizations->encode($request->authorizations);
		
        $group = new Group;
		
		$group->name = $request->name;
		$group->description = $request->description;
		$group->authorizations = $gates_policies;
		
		$group->save();
		
		return new GroupResource($group);		
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Group $group)
    {

		Gate::authorize($this->cmpm[__FUNCTION__], $group);		
		
		return new GroupResource($group);

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

		$Authorizations = new Authorizations();
		$gates_policies = $Authorizations->encode($request->authorizations);		

        $group = Group::find($id);
		
		Gate::authorize($this->cmpm[__FUNCTION__], $group);		

		$group->name = $request->name;
		$group->description = $request->description;
		$group->authorizations = $gates_policies;

		$group->save();

		return new GroupResource($group);

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $group = Group::find($id);	
		
		Gate::authorize($this->cmpm[__FUNCTION__], $group);
		
        $group->delete();

        return response()->json();
    }
}
