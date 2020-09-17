<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Office;
use App\Http\Resources\OfficeResource;
use App\Http\Resources\OfficeCollection;

class OfficeController extends Controller
{
	
	public function __construct()
	{
		$this->middleware('auth:api');

        $this->authorizeResource(Office::class, 'office');
	}	
	
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
		return new OfficeCollection(Office::paginate(15));
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
		
        $office = new Office;
		
        $office->name = $request->name;
        $office->description = $request->description;
        
        $office->save();
        
        return new OfficeResource($office);
		
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Office $office)
    {
		return new OfficeResource($office);
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

        $office = Office::find($id);
		
		Gate::authorize('update', $office);
		
		$office->name = $request->name;
		$office->description = $request->description;
		
		$office->save();
		
		return new OfficeResource($office);

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $office = Office::find($id);	

		Gate::authorize('delete', $office);			
		
        $office->delete();

        return response()->json();
    }
}
