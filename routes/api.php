<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::group([
    'prefix' => 'auth'
], function ($router) {
    Route::post('login', 'UserController@login');
    Route::post('register', 'UserController@register');
    Route::post('recoverPassword', 'UserController@recoverPassword');
    Route::post('verifyCode', 'UserController@verifyCode');
    Route::post('logout', 'UserController@logout');
    Route::put('newPassword', 'UserController@newPassword');
});
Route::put('categories/{id}', 'CategoriesController@update');
Route::group([
    'middleware' => 'jwt.auth',
], function ($router) {
//start proveedores
	Route::get('providers', 'ProvidersController@index');
    Route::post('providers', 'ProvidersController@store');
    Route::put('providers/{id}', 'ProvidersController@update');
    Route::delete('providers/{id}', 'ProvidersController@destroy');
//end proveedores
// start categorias
Route::get('categories', 'CategoriesController@index');
Route::post('categories', 'CategoriesController@store');
Route::delete('categories/{id}', 'CategoriesController@destroy');
// end categorias
});
