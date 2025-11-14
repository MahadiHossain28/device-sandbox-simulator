<?php

namespace App\Http\Requests;

use App\Enums\DeviceType;
use App\Enums\SettingColor;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class DeviceRequest extends FormRequest
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
            'type' => ['required', 'string', Rule::enum(DeviceType::class)],
            'name' => 'required|string|max:255',

            'settings.*' => 'required|array',

            'settings.power' => 'required|boolean',
            'settings.brightness' => 'nullable|integer|min:0|max:100',
            'settings.color' => ['nullable','string', Rule::enum(SettingColor::class)],
            'settings.speed' => 'nullable|integer|min:0|max:100',
        ];
    }
}
