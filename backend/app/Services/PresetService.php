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

    public function getAllPresets()
    {
        return $this->presetRepository->all();
    }

    public function createPreset(array $data)
    {
        return $this->presetRepository->create($data);
    }

    public function getPresetById($id)
    {
        return $this->presetRepository->find($id);
    }

    public function updatePreset(array $data, $id)
    {
        return $this->presetRepository->update($id, $data);
    }
}
