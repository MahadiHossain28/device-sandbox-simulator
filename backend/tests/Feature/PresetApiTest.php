<?php

namespace Tests\Feature;

use App\Enums\DeviceType;
use App\Models\Device;
use App\Models\Preset;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class PresetApiTest extends TestCase
{
    use RefreshDatabase, WithFaker;

    public function test_can_get_preset_list(): void
    {
        Preset::factory()->count(2)->create();

        $response = $this->getJson('/api/v1/presets');

        $response->assertStatus(200)
            ->assertJsonStructure([
                'success',
                'data' => [
                    '*' => [
                        'id',
                        'name',
                        'device',
                    ]
                ]
            ]);
    }

    public function test_can_create_preset(): void
    {
        $presetData = [
            'name' => $this->faker->name,
            'device' => [
                'type' => $this->faker->randomElement(DeviceType::class)->value,
                'settings' => [
                    'power' => $this->faker->boolean,
                ]
            ],
        ];

        $response = $this->postJson('/api/v1/presets', $presetData);

        $response->assertStatus(201)
            ->assertJsonStructure([
                'success',
                'data' => [
                    'id',
                    'name',
                    'device',
                ]
            ])
            ->assertJson([
                'success' => true,
                'data' => $presetData,
            ]);

        $this->assertDatabaseHas('presets', array_merge($presetData, ['device' => json_encode($presetData['device'])]));
    }

    public function test_can_get_preset(): void
    {
        $preset = Preset::factory()->create();

        $response = $this->getJson('/api/v1/presets/' . $preset->id);

        $response->assertStatus(200)
            ->assertJsonStructure([
                'success',
                'data' => [
                        'id',
                        'name',
                        'device',
                    ]
                ]);
    }

    public function test_can_update_device()
    {
        $preset = Preset::factory()->create();

        $updatedData = [
            'name' => 'Updated Preset Name',
            'device' => [
                'type' => $this->faker->randomElement(DeviceType::class)->value,
                'settings' => [
                    'power' => $this->faker->boolean,
                ]
            ],
        ];

        $response = $this->putJson('/api/v1/presets/' . $preset->id, $updatedData);

        $response->assertStatus(200)
            ->assertJsonStructure([
                'success',
                'data' => [
                    'id',
                    'name',
                    'device',
                ]
            ])
            ->assertJson([
                'success' => true,
                'data' => $updatedData,
            ]);

         $this->assertDatabaseHas('presets', array_merge($updatedData, ['device' => json_encode($updatedData['device'])]));
    }
}
