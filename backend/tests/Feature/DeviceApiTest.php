<?php

namespace Tests\Feature;

use App\Enums\DeviceType;
use App\Models\Device;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class DeviceApiTest extends TestCase
{
    use RefreshDatabase, WithFaker;

    public function test_can_list_devices()
    {
        Device::factory()->count(2)->create();

        $response = $this->getJson('/api/v1/devices');

        $response->assertStatus(200)
            ->assertJsonStructure([
                'success',
                'data' => [
                    '*' => [
                        'id',
                        'name',
                        'type',
                    ]
                ]
            ]);
    }

    public function test_can_create_device()
    {
        $deviceData = [
            'name' => $this->faker->name,
            'type' => $this->faker->randomElement(DeviceType::class)->value,
            'settings' => [
                'power' => $this->faker->boolean,
            ]
        ];

        $response = $this->postJson('/api/v1/devices', $deviceData);

        $response->assertStatus(201)
            ->assertJsonStructure([
                'success',
                'data' => [
                    'id',
                    'name',
                    'type',
                ]
            ])
            ->assertJson([
                'success' => true,
                'data' => $deviceData,
            ]);

        $this->assertDatabaseHas('devices', array_merge($deviceData, ['settings' => json_encode($deviceData['settings'])]));
    }

    public function test_can_update_device()
    {
        $device = Device::factory()->create();

        $updatedData = [
            'name' => 'Updated Device Name',
            'type' => $this->faker->randomElement(DeviceType::class)->value,
            'settings' => [
                'power' => $this->faker->boolean,
            ]
        ];

        $response = $this->putJson('/api/v1/devices/' . $device->id, $updatedData);

        $response->assertStatus(200)
            ->assertJsonStructure([
                'success',
                'data' => [
                    'id',
                    'name',
                    'type',
                ]
            ])
            ->assertJson([
                'success' => true,
                'data' => $updatedData,
            ]);
    }
}
