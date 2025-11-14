<?php

use App\Http\Controllers\Api\v1\DeviceController;
use App\Http\Controllers\Api\v1\PresetController;
use Illuminate\Support\Facades\Route;

Route::group(['prefix' => 'v1'], function () {
    Route::apiResource('devices', DeviceController::class)->except(['show','destroy']);
    Route::apiResource('presets', PresetController::class)->except(['destroy']);
});
