<?php

use Illuminate\Support\Facades\Route;

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

// Route::get('/', function () {
//     return view('app');
// });
// Route::post('api/login', 'UserController@login');
Route::get('/{any}', function () {
    return view('app'); // 確保返回的是包含 Vue app 的視圖
})->where('any', '.*');