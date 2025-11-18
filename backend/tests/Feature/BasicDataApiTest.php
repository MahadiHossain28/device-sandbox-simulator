<?php

namespace Tests\Feature;

use App\Models\Device;
use App\Models\Preset;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class BasicDataApiTest extends TestCase
{
    use RefreshDatabase, WithFaker;

    public function test_can_list_devices()
    {
        Device::factory()->count(2)->create();
        Preset::factory()->count(2)->create();

        $response = $this->getJson('/api/v1/get-data');

        $response->assertStatus(200)
            ->assertJsonStructure([
                'success',
                'data' => [
                    'devices' => [
                        '*' => [
                            'id',
                            'name',
                            'type',
                        ]
                    ],
                    'presets' => [
                        '*' => [
                            'id',
                            'name',
                            'device',
                        ]
                    ]
                ]
            ]);
    }
}
