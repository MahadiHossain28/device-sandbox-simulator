<?php

namespace App\Http\Controllers\Api\v1;

use App\Http\Controllers\Controller;
use App\Http\Requests\DeviceRequest;
use App\Services\DeviceService;

class DeviceController extends Controller
{
    public function __construct(protected DeviceService $deviceService){}

    public function index()
    {
        try{
            return response()->json([
                'success' => true,
                'data' => $this->deviceService->getAllDevices()->toResourceCollection()
            ], 200);
        } catch (\Throwable $e) {
            return response()->json([
                'status' => 'error',
                'message' => $e->getMessage(),
            ], 500);
        }
    }

    public function store(DeviceRequest $request)
    {
        try{
            return response()->json([
                'success' => true,
                'data' => $this->deviceService->createDevice($request->validated())->toResource()
            ],201);
        } catch (\Throwable $e) {
            return response()->json([
                'status' => 'error',
                'message' => $e->getMessage(),
            ], 500);
        }
    }

    public function update(DeviceRequest $request, string $id)
    {
        try{
            return response()->json([
                'success' => true,
                'data' => $this->deviceService->updateDevice($request->validated(), $id)->toResource()
            ],200);
        } catch (\Throwable $e) {
            return response()->json([
                'status' => 'error',
                'message' => $e->getMessage(),
            ], 500);
        }
    }
}
