<?php

namespace Database\Factories;

use App\Enums\DeviceType;
use App\Enums\SettingColor;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Device>
 */
class DeviceFactory extends Factory
{
    public function definition(): array
    {
        $type = $this->faker->randomElement(DeviceType::class)->value;

        return [
            'type' => $type,
            'name' => $this->generateName($type),
            'settings' => $this->generateSettings($type),
        ];
    }

    private function generateName($type)
    {
        return match ($type) {
            'light' => $this->faker->randomElement([
                'Living Room Light',
                'Kitchen Light',
                'Bedroom Light'
            ]),
            'fan' => $this->faker->randomElement([
                'Bedroom Fan',
                'Office Fan',
                'Living Room Fan'
            ]),
            default => 'Unknown Device',
        };
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
