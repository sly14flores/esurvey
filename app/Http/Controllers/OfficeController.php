<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Office;
use App\Http\Resources\OfficeResource;
use App\Http\Resources\OfficeCollection;

use App\Customs\AuthorizationMaps;
use Illuminate\Support\Facades\Gate;

class OfficeController extends Controller
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
		Gate::authorize($this->cmpm[__FUNCTION__], Office::class);		
		
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

		Gate::authorize($this->cmpm[__FUNCTION__], Office::class);			
		
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
		Gate::authorize($this->cmpm[__FUNCTION__], $office);			
		
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
		
		Gate::authorize($this->cmpm[__FUNCTION__], $office);	
		
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

		Gate::authorize($this->cmpm[__FUNCTION__], $office);			
		
        $office->delete();

        return response()->json();
    }
}
