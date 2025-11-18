<?php

namespace App\Http\Controllers\Api\v1;

use App\Http\Controllers\Controller;
use App\Services\BasicDataService;
use Illuminate\Http\Request;

class BasicApiController extends Controller
{
    public function __construct(protected BasicDataService $basicDataService){}

    public function __invoke(Request $request)
    {
        try{
            return response()->json([
                'success' => true,
                'data' => $this->basicDataService->getAllData()
            ], 200);
        } catch (\Throwable $e) {
            return response()->json([
                'status' => 'error',
                'message' => $e->getMessage(),
            ], 500);
        }
    }
}
