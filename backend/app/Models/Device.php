<?php

namespace App\Models;

use App\Enums\DeviceType;
use App\Http\Resources\DeviceResource;
use Illuminate\Database\Eloquent\Attributes\UseResource;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

#[UseResource(DeviceResource::class)]
class Device extends Model
{
    use HasFactory;
    protected $fillable = [
        'type',
        'name',
        'settings'
    ];

    protected $casts = [
        'type' => DeviceType::class,
        'settings' => 'array'
    ];
}
