<?php

namespace App\Http\Requests;

use App\Enums\DeviceType;
use App\Enums\SettingColor;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class PresetRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'name' => 'required|string|max:255',
            'device' => 'required|array',
            'device.type' => ['required', 'string', Rule::enum(DeviceType::class)],
            'device.settings' => 'required|array',
            'device.settings.power' => 'required|boolean',
            'device.settings.brightness' => 'nullable|integer|min:0|max:100',
            'device.settings.color' => ['nullable','string', Rule::enum(SettingColor::class)],
            'device.settings.speed' => 'nullable|integer|min:0|max:100',
        ];
    }
}
