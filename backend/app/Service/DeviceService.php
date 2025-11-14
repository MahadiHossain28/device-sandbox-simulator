<?php

namespace App\Service;

use App\Models\Device;
use App\Repositories\Contracts\DeviceRepositoryInterface;

class DeviceService
{
    /**
     * Create a new class instance.
     */
    public function __construct(protected DeviceRepositoryInterface $deviceRepository)
    {

    }

    public function getAllDevices()
    {
        return $this->deviceRepository->all();
    }

    public function createDevice(array $data)
    {
        return $this->deviceRepository->create($data);
    }

    public function updateDevice(array $data, $id)
    {
        return $this->deviceRepository->update($id, $data);
    }
}
