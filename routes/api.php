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
Route::post('invoices', 'InvoicesController@store');
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
Route::put('categories/{id}', 'CategoriesController@update');
Route::delete('categories/{id}', 'CategoriesController@destroy');
// end categorias
// start productos
Route::get('products', 'ProductsController@index');
Route::get('products/{id}', 'ProductsController@show');
Route::get('products/productTax/{id}', 'ProductsController@productTax');
Route::post('products', 'ProductsController@store');
Route::put('products/{id}', 'ProductsController@update');
Route::delete('products/{id}', 'ProductsController@destroy');
// end productos
// start impuestos
Route::get('taxes', 'TaxesController@index');
// end impuestos
});
