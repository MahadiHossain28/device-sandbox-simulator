import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://127.0.0.1:8000/api/v1/',
});

export const getPresetsApi = () => instance.get("presets");
export const getDevicesApi = () => instance.get("devices");
export const savePresetApi = (data) => instance.post("presets", data);
