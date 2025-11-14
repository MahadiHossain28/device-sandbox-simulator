<?php

namespace App\Repositories\Eloquents;

use App\Models\Preset;
use App\Repositories\BaseRepository;
use App\Repositories\Contracts\PresetRepositoryInterface;

class PresetRepository extends BaseRepository implements PresetRepositoryInterface
{
    public function __construct(Preset $model)
    {
        parent::__construct($model);
    }
}
