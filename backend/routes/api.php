<?php

use App\Http\Controllers\Api\v1\BasicApiController;
use App\Http\Controllers\Api\v1\PresetController;
use Illuminate\Support\Facades\Route;

Route::group(['prefix' => 'v1'], function () {
    Route::get('/get-data', BasicApiController::class);
    Route::apiResource('presets', PresetController::class)->only(['store']);
});
