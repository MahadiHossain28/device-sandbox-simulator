<?php

namespace App\Http\Controllers\Api\v1;

use App\Http\Controllers\Controller;
use App\Http\Requests\DeviceRequest;
use App\Service\DeviceService;

class DeviceController extends Controller
{
    public function __construct(protected DeviceService $deviceService){}

    public function index()
    {
        return response()->json([
            'success' => true,
            'data' => $this->deviceService->getAllDevices()->toResourceCollection()
        ], 200);
    }

    public function store(DeviceRequest $request)
    {
        return response()->json([
            'success' => true,
            'data' => $this->deviceService->createDevice($request->validated())->toResource()
        ],201);
    }

    public function update(DeviceRequest $request, string $id)
    {
        return response()->json([
            'success' => true,
            'data' => $this->deviceService->updateDevice($request->validated(), $id)->toResource()
        ],200);
    }
}
