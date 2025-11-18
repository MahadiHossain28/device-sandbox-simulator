<?php

namespace Database\Seeders;

use App\Models\Device;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    use WithoutModelEvents;

    /**
     * Seed the application's database.
     */
    public function run(): void
    {
         Device::create([
             'name' => 'Light',
             'type' => 'light',
             'settings' => [
                 'power' => false,
                 'color' => 'warm',
                 'brightness' => 10,
             ]
         ]);

         Device::create([
             'name' => 'Fan',
             'type' => 'fan',
             'settings' => [
                 'power' => false,
                 'speed' => 10,
             ]
         ]);
    }
}
