<?php

namespace App\Repositories\Contracts;

interface DeviceRepositoryInterface
{
    public function all();
    public function find($id);
    public function create(array $data);
    public function update($id, array $data);

}
