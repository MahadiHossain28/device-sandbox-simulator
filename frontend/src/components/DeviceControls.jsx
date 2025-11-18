import React, {useContext, useEffect, useState} from "react";
import {DeviceContext} from "../context/DeviceContext.jsx";

export default function DeviceControls({ device, colorMap = null }) {

    const { updateDevice, setIsChanged } = useContext(DeviceContext);

    const [settings, setSettings] = useState(() => {
        const baseSettings = {
            power: device.settings.power,
        };

        if (device.type === 'fan') {
            baseSettings.speed = device.settings.speed;
        }

        if (device.type === 'light') {
            baseSettings.color = device.settings.color;
            baseSettings.brightness = device.settings.brightness;
        }

        return baseSettings;
    });


    function handleChange (event) {
        const { name, value, type, checked } = event.target;
        const newValue = type === 'checkbox' ? checked : value;
        setSettings(prev => ({
            ...prev,
            [name] : newValue
        }));
        setIsChanged(true);
    }

    useEffect(() => {
        updateDevice(device.id, device.spacial_id, settings);
    }, [settings]);

    return (
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 border z-10 p-4 rounded-lg shadow-lg w-96">
            <div className="mb-3 flex justify-between">
                <label htmlFor="power">Power</label>
                <input
                    id="power"
                    type="checkbox"
                    checked={settings.power}
                    className="toggle checked:border-blue-500 checked:bg-blue-400 checked:text-gray-100"
                    name="power"
                    onChange={handleChange}
                />
            </div>
            {device.type === 'fan' && (
                <div className="mb-3 flex flex-col">
                    <label htmlFor="speed" className="flex justify-between items-center mb-1">
                        <span>Speed</span>
                        <span>{settings.speed}</span>
                    </label>
                    <input id="speed" type="range" min={0} max={100} value={settings.speed} name="speed" className="range w-full" onChange={handleChange}/>
                </div>
            )}
            {device.type === 'light' && (
                <>
                    <div className="mb-3 flex flex-col">
                        <span className="mb-1">Color Temperature</span>
                        <div className="flex justify-between items-center">
                            {Object.keys(colorMap).map((colorKey) => (
                                <div key={colorKey} className="flex-1 text-center">
                                    <input
                                        id={`color-temp-${colorKey}`}
                                        type="radio"
                                        name="color"
                                        className="hidden"
                                        value={colorKey}
                                        checked={settings.color === colorKey}
                                        onChange={handleChange}
                                    />
                                    <label
                                        htmlFor={`color-temp-${colorKey}`}
                                        className={`block cursor-pointer h-8 rounded-md border-2 mx-1 ${settings.color === colorKey ? 'border-blue-500' : 'border-gray-300'}`}
                                        style={{ backgroundColor: colorMap[colorKey] }}
                                    >
                                    </label>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="mb-3 flex flex-col">
                        <label htmlFor="brigthness" className="flex justify-between items-center mb-1">
                            <span>Brightness</span>
                            <span>{settings.brightness}</span>
                        </label>
                        <input id="brightness" type="range" name='brightness' min={0} max={100} value={settings.brightness} className="range w-full" onChange={handleChange}/>
                    </div>
                </>
            )}
        </div>
    )
}