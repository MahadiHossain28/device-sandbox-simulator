<?php

namespace Tests\Feature;

use App\Enums\DeviceType;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class PresetApiTest extends TestCase
{
    use RefreshDatabase, WithFaker;

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
}
