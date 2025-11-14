<?php

namespace App\Repositories\Contracts;

interface PresetRepositoryInterface
{
    public function all();
    public function find($id);
    public function create(array $data);
    public function update($id, array $data);
}
