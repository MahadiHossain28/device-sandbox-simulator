<?php

namespace App\Services;

use App\Repositories\Contracts\DeviceRepositoryInterface;
use App\Repositories\Contracts\PresetRepositoryInterface;

class BasicDataService
{
    /**
     * Create a new class instance.
     */
    public function __construct(protected DeviceRepositoryInterface $deviceRepository, protected PresetRepositoryInterface $presetRepository)
    {
        //
    }

    public function getAllData(): array
    {
        return [
            'devices' => $this->deviceRepository->all()->toResourceCollection(),
            'presets' => $this->presetRepository->all()->toResourceCollection(),
        ];
    }
}
