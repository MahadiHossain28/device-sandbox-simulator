<?php

namespace App\Http\Controllers\Api\v1;

use App\Http\Controllers\Controller;
use App\Http\Requests\PresetRequest;
use App\Services\PresetService;

class PresetController extends Controller
{
    public function __construct(protected PresetService $presetService)
    {

    }

    public function store(PresetRequest $request)
    {
        try {
            return response()->json([
                'success' => true,
                'data' => $this->presetService->createPreset($request->validated())->toResource()
            ],201);
        } catch (\Throwable $e) {
            return response()->json([
                'status' => 'error',
                'message' => $e->getMessage(),
            ], 500);
        }
    }
}
