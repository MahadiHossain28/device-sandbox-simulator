<?php

namespace App\Enums;

enum SettingColor: string
{
    case WARM = 'warm';
    case COOL = 'cool';
    case NEUTRAL = 'neutral';

    /**
     * Display Order List Page Label.
     */
    public function label(): string
    {
        return match ($this) {
            self::WARM => 'Warm',
            self::COOL => 'Cool',
            self::NEUTRAL => 'Neutral',
        };
    }
}
