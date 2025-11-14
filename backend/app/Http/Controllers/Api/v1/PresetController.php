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
    public function index()
    {
        try{
            return response()->json([
                'success' => true,
                'data' => $this->presetService->getAllPresets()->toResourceCollection()
            ], 200);
        } catch (\Throwable $e) {
            return response()->json([
                'status' => 'error',
                'message' => $e->getMessage(),
            ], 500);
        }
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

    public function show(string $id)
    {
        try{
            return response()->json([
                'success' => true,
                'data' => $this->presetService->getPresetById($id)->toResource()
            ],200);
        } catch (\Throwable $e) {
            return response()->json([
                'status' => 'error',
                'message' => $e->getMessage(),
            ], 500);
        }
    }

    public function update(PresetRequest $request, string $id)
    {
        try{
            return response()->json([
                'success' => true,
                'data' => $this->presetService->updatePreset($request->validated(), $id)->toResource()
            ],200);
        } catch (\Throwable $e) {
            return response()->json([
                'status' => 'error',
                'message' => $e->getMessage(),
            ], 500);
        }
    }
}
