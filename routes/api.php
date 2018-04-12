<?php

use Illuminate\Http\Request;

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
/*
Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
*/

Route::post('register', 'AuthController@register');
Route::post('login', 'AuthController@login');
//Route::post('recover', 'AuthController@recover');
Route::group(['middleware' => ['jwt.auth']], function () {
  Route::get('logout', 'AuthController@logout');
  Route::get('user', 'AuthController@user');

  Route::resource('cars', 'CarController');
  Route::resource('parks', 'ParkController');
  Route::resource('carmarks', 'CarmarkController');
  Route::resource('carmodels', 'CarmodelController');
  Route::resource('carcategories', 'CarcategoryController');
  Route::resource('fuels', 'FuelController');
});