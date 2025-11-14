<?php

namespace App\Providers;

use App\Repositories\Contracts\DeviceRepositoryInterface;
use App\Repositories\Contracts\PresetRepositoryInterface;
use App\Repositories\Eloquents\DeviceRepository;
use App\Repositories\Eloquents\PresetRepository;
use Illuminate\Support\ServiceProvider;

class RepositoryServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     */
    public function register(): void
    {
        $this->app->bind(DeviceRepositoryInterface::class, DeviceRepository::class);
        $this->app->bind(PresetRepositoryInterface::class, PresetRepository::class);
    }

    /**
     * Bootstrap services.
     */
    public function boot(): void
    {
        //
    }
}
