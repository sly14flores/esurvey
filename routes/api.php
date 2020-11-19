<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Events\SendMessage;
use Illuminate\Support\Facades\Http;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/profile', function (Request $request) {
    return $request->user();
});

Route::get('authorizations','AuthorizationsController@get_template');

Route::post('/login','LoginApiController@login');

Route::post('/dashboard/data','DashboardData');

Route::apiResource('user', 'UserController')->except('index');
Route::apiResource('/users', 'UserController')->only('index');

Route::apiResource('office','OfficeController')->except('index');
Route::apiResource('/offices', 'OfficeController')->only('index');

Route::apiResource('group','GroupController')->except('index');
Route::apiResource('/groups', 'GroupController')->only('index');

Route::apiResource('survey','SurveyController')->except('index');
Route::apiResource('/surveys', 'SurveyController')->only('index');

Route::apiResource('/survey/introduction', 'IntroductionController')->only('destroy');
Route::apiResource('/survey/section', 'SurveySectionController')->only('destroy');
Route::apiResource('/survey/section/item', 'SectionItemController')->only('destroy');
Route::apiResource('/survey/section/item/value', 'SectionItemValueController')->only('destroy');
Route::apiResource('/survey/section/item/value/sub_item', 'SivSubItemController')->only('destroy');

Route::apiResource('/survey/section/aspect', 'SectionAspectController')->only('destroy');
Route::apiResource('/survey/section/aspect/item', 'AspectItemController')->only('destroy');
Route::apiResource('/survey/section/aspect/item/value', 'AspectItemValueController')->only('destroy');
Route::apiResource('/survey/section/aspect/item/value/sub_item', 'AivSubItemController')->only('destroy');

Route::prefix('selections')->group(function() {

	Route::get('offices','Selections@offices');
	Route::get('groups','Selections@groups');
	Route::get('surveys','Selections@surveys');
	Route::get('surveys/{office}','Selections@surveys');
	Route::get('general/surveys','Selections@generalSurveys');
	Route::get('specific/surveys','Selections@specificSurveys');

});

Route::prefix('conduct')->group(function() {

	Route::post('/{token}', 'FetchSurvey');
	Route::post('/survey/respondent', 'SurveyRespondent@update');
	Route::post('/survey/respondent/{survey_id}/tags', 'SurveyRespondent@tags');
	Route::post('/survey/respondent/{survey_id}/get', 'SurveyRespondent@show');

});

/*
* trigger/broadcast an event
**/
Route::get('send/message/{message}', function($message) {
	
	// event(new SendMessage($message));
	broadcast(new SendMessage($message));	
	
});

/*
* Redis set/get tests
**/
// Route::get('redis/message/set/{message}','RedisTest@setMessage');
// Route::get('redis/message/get','RedisTest@getMessage');

/*
* Redis pub/sub test
**/
// Route::get('redis/publish/{message}','RedisTest@publish');

/*
* Http client
**/
// Route::get('http', function() {
	
	// return Http::get('https://slyflores.com');
	
// });