<?php

namespace App\Services;

use App\Models\Preset;
use App\Repositories\Contracts\PresetRepositoryInterface;

class PresetService
{
    /**
     * Create a new class instance.
     */
    public function __construct(protected PresetRepositoryInterface $presetRepository)
    {

    }

    public function createPreset(array $data)
    {
        return $this->presetRepository->create($data);
    }
}
