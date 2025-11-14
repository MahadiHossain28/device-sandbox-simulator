<?php

namespace App\Enums;

enum DeviceType: string
{
    case LIGHT = 'light';
    case FAN = 'fan';

    /**
     * Display Order List Page Label.
     */
    public function label(): string
    {
        return match ($this) {
            self::LIGHT => 'Light',
            self::FAN => 'Fan',
        };
    }
}
