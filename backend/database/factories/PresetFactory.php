<?php

namespace Database\Factories;

use App\Enums\DeviceType;
use App\Enums\SettingColor;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Preset>
 */
class PresetFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $type = $this->faker->randomElement(DeviceType::class)->value;

        return [
            'name' => $this->faker->name(),
            'device' => [
                'type' => $type,
                'settings' => $this->generateSettings($type)
            ]
        ];
    }

    private function generateSettings($type)
    {
        return match ($type) {
            'light' => [
                'power'     => $this->faker->boolean(),
                'brightness'=> $this->faker->numberBetween(0, 100),
                'color'     => $this->faker->randomElement(SettingColor::class)->value,
            ],
            'fan' => [
                'power' => $this->faker->boolean(),
                'speed' => $this->faker->numberBetween(0, 100),
            ],
            default => [],
        };
    }
}
