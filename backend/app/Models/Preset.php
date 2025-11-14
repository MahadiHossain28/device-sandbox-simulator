<?php

namespace App\Models;

use App\Http\Resources\PresetResource;
use Illuminate\Database\Eloquent\Attributes\UseResource;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

#[useResource(PresetResource::class)]
class Preset extends Model
{
    /** @use HasFactory<\Database\Factories\PresetFactory> */
    use HasFactory;
    protected $fillable = [
        'name',
        'device'
    ];
    protected $casts = [
        'device' => 'array'
    ];
}
