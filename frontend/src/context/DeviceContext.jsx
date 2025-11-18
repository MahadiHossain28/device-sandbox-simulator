import React, {createContext, useEffect, useState} from "react";
import {getDevicesApi, getPresetsApi, savePresetApi} from "../api/Apis.jsx";

// eslint-disable-next-line react-refresh/only-export-components
export const DeviceContext = createContext();

export const DeviceProvider = ({ children }) => {
    const [defaultDevices, setDefaultDevices] = useState(() => {
        const savedDefaultDevices = localStorage.getItem('defaultDevices');
        return savedDefaultDevices ? JSON.parse(savedDefaultDevices) : [];
    });
    const [devices, setDevices] = useState(() => {
        const savedDevices = localStorage.getItem('devices');
        return savedDevices ? JSON.parse(savedDevices) : [];
    });
    const [presets, setPresets] = useState([]);
    const [isChanged, setIsChanged] = useState(false);

    const addDevice = (device) => {
        // const newDevices = [...devices, { ...device, spacial_id: Date.now() }];
        const newDevices = [{ ...device, spacial_id: Date.now() }];
        setDevices(newDevices);
        localStorage.setItem('devices', JSON.stringify(newDevices));
        setIsChanged(false);
    };

    const updateDevice = (id, spacial_id, settings) => {
        const updatedDevices = devices.map(d =>
            d.spacial_id === spacial_id
                ? { ...d, settings: { ...d.settings, ...settings } }
                : d
        );
        setDevices(updatedDevices);
        localStorage.setItem('devices', JSON.stringify(updatedDevices));

        const updatedDefaultDevices = defaultDevices.map(d =>
            d.id === id
                ? { ...d, settings: { ...d.settings, ...settings } }
                : d
        );
        setDefaultDevices(updatedDefaultDevices);
        localStorage.setItem('defaultDevices', JSON.stringify(updatedDefaultDevices));
    };

    const savePreset = async (data) => {
        await savePresetApi(data)
            .then(r => {
                const newPresets = [...presets, r.data.data];
                setPresets(newPresets);
                localStorage.setItem('presets', JSON.stringify(newPresets));
                setIsChanged(false);
            });
    };

    const fetchPresets = async () => {
        const cachedPresets = localStorage.getItem('presets');
        if (cachedPresets) {
            return JSON.parse(cachedPresets);
        }
        const response = await getPresetsApi();
        localStorage.setItem('presets', JSON.stringify(response.data.data));
        return response.data.data;
    };
    const fetchDevices = async () => {
        const cachedDefaultDevices = localStorage.getItem('defaultDevices');
        if (cachedDefaultDevices && cachedDefaultDevices !== 'null' && cachedDefaultDevices !== '') {
            return JSON.parse(cachedDefaultDevices);
        }
        const response = await getDevicesApi();
        localStorage.setItem('defaultDevices', JSON.stringify(response.data.data));
        return response.data.data;
    };

    useEffect(() => {
        localStorage.setItem('devices', JSON.stringify(devices));
    }, [devices]);

    useEffect(() => {
        fetchPresets().then(data => setPresets(data));
        fetchDevices().then(data => setDefaultDevices(data));
    }, []);

    return (
        <DeviceContext.Provider value={{ defaultDevices, devices, addDevice, updateDevice, presets, savePreset, fetchPresets, isChanged, setIsChanged }}>
            {children}
        </DeviceContext.Provider>
    );
};
