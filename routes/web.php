<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

Auth::routes();

Route::get('/', function () {
    return view('welcome');
});

Route::get('about', function () {
    return Inertia::render('About');
});

Route::middleware('auth')->group(function () {
    Route::get('home', function () {
        return Inertia::render('Home');
    });
});
