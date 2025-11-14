<?php

namespace App\Repositories\Eloquents;

use App\Models\Device;
use App\Repositories\BaseRepository;
use App\Repositories\Contracts\DeviceRepositoryInterface;

class DeviceRepository extends BaseRepository implements DeviceRepositoryInterface
{
    public function __construct(Device $model)
    {
        parent::__construct($model);
    }

}
