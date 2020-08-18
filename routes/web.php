<?php

use Illuminate\Support\Facades\Route;
use App\Notifications\Sample;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Auth::routes(['verify' => true]);

Route::get('/', 'DashboardController')->middleware(['verified','default.password']);

Route::post('/profile','ProfileController@get_profile');
Route::post('/api_token','ProfileController@api_token');
Route::post('/username','Username');

Route::get('/change/password','DefaultPassword@show')->name('change.password.show');
Route::post('/change/password','DefaultPassword@update')->name('change.password');

Route::get('/survey', 'ConductSurvey');

Route::get('preview/mail', function() {
	
	return (new Sample())
                ->toMail(null);	
	
});