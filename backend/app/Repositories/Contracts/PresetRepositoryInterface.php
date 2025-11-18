<?php

namespace App\Repositories\Contracts;

interface PresetRepositoryInterface
{
    public function all();
    public function create(array $data);
}
