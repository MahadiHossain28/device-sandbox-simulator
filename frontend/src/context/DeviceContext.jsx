import React, {createContext, useEffect, useState} from "react";
import {getDataApi, savePresetApi} from "../api/Apis.jsx";

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

    const fetchData = async () => {
        try {
            const cachedDefaultDevices = localStorage.getItem('defaultDevices');
            const cachedPresets = localStorage.getItem('presets');

            const devices = cachedDefaultDevices ? JSON.parse(cachedDefaultDevices) : null;
            const presets = cachedPresets ? JSON.parse(cachedPresets) : null;

            // If both are cached, return them immediately
            if (devices && presets) {
                return { devices, presets };
            }

            // Fetch from API if anything is missing
            const response = await getDataApi();

            if (response?.data?.data) {
                const { devices: apiDevices, presets: apiPresets } = response.data.data;

                // Cache them in localStorage
                localStorage.setItem('defaultDevices', JSON.stringify(apiDevices));
                localStorage.setItem('presets', JSON.stringify(apiPresets));

                return { devices: apiDevices || [], presets: apiPresets || [] };
            }

            // Fallback if API fails
            return { devices: [], presets: [] };
        } catch (error) {
            console.error('Error fetching data:', error);
            return { devices: [], presets: [] };
        }
    };

    useEffect(() => {
        localStorage.setItem('devices', JSON.stringify(devices));
    }, [devices]);

    useEffect(() => {
        fetchData().then(data => {
            setDefaultDevices(data.devices);
            setPresets(data.presets);
        });
    }, []);

    return (
        <DeviceContext.Provider value={{ defaultDevices, devices, addDevice, updateDevice, presets, savePreset, isChanged, setIsChanged }}>
            {children}
        </DeviceContext.Provider>
    );
};
