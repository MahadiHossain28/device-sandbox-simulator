import React, {useContext, useState} from "react";
import { DeviceContext } from "../../context/DeviceContext.jsx";
import { useDrop } from "react-dnd";
import LightItem from "../Light/LightItem.jsx";
import FanItem from "../Fan/FanItem.jsx";
import "./Canvas.css";

const Canvas = () => {
    const { devices, addDevice, isChanged, setIsChanged, savePreset } = useContext(DeviceContext);

    const [newDeviceName, setNewDeviceName] = useState('');
    const [nameError, setNameError] = useState('');
    const [isSuccess, setIsSuccess] = useState(false);

    const validateName = (name) => {
        if (!name || name.trim() === '') return 'Name is required';
        if (name.length < 3) return 'Name must be at least 3 characters';
        if (name.length > 30) return 'Name must be less than 30 characters';
        return '';
    };

    const handleNameChange = (e) => {
        setNewDeviceName(e.target.value);
        setNameError(validateName(e.target.value));
    };

    function handleShowModal() {
        document.getElementById('my_modal_1').showModal();
        setIsChanged(false);
        setNameError('');
    }

    async function handlePresetSubmit(e) {
        e.preventDefault();

        const error = validateName(newDeviceName);
        if (error) {
            setNameError(error);
            return;
        }


        let data = {
            name: newDeviceName,
            device: devices[0]
        };
        try {
            await savePreset(data);
            setNameError('');
            setNewDeviceName('');
            document.getElementById('my_modal_1').close();
            setIsSuccess(true);
            setTimeout(() => setIsSuccess(false), 5000);
        } catch(err) {
            if (err.response && err.response.status === 422) {
                const validationErrors = err.response.data?.errors || {};
                setNameError(validationErrors.name?.[0]);
            }
        }
    }

    const [, drop] = useDrop(() => ({
        accept: "DEVICE",
        drop: (item) => {
            addDevice({ ...item });
        },
    }));

    return (
        <div
            ref={drop}
            className="flex-1 flex flex-col p-8 relative min-h-[500px]"
        >
            <div className="flex intem-center justify-between mb-5">
                <h1>Testing Canvas</h1>
                {isChanged && (
                    <div className="flex gap-2">
                        <button className="btn btn-sm bg-[#1E2939] rounded-[8px]">Clear</button>
                        <button
                            className="btn btn-sm text-white bg-[#2B7FFF] rounded-[8px]"
                            onClick={handleShowModal}
                        >
                            Save Preset
                        </button>
                    </div>
                )}
            </div>
            <div className={`relative border border-[#1E2939] bg-[#0A101D] rounded-[14px] h-full ${devices.length === 0 && 'flex justify-center items-center'}`}>
                {devices.map((device) =>
                    device.type === "light" ? (
                        <LightItem key={device.id} device={device}/>
                    ) : (
                        <FanItem key={device.id} device={device}/>
                    )
                )}
                {devices.length === 0 && <p className="text-gray-200 opacity-30">Drag devices here</p>}
            </div>

            {/* Toast */}
            {isSuccess && (
                <div className="toast-body w-[261px] absolute top-25 left-[50%] -translate-x-[50%] bg-[#242C32] rounded-[8px] px-4 py-3 text-white shadow-lg">
                    <div className="flex items-center justify-center gap-4">
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="32" height="32" rx="16" fill="#303746"/>
                            <mask id="mask0_32_1113" maskUnits="userSpaceOnUse" x="4" y="4" width="24" height="24">
                                <rect x="4" y="4" width="24" height="24" fill="#D9D9D9"/>
                            </mask>
                            <g mask="url(#mask0_32_1113)">
                                <path d="M14.6 20.6L21.65 13.55L20.25 12.15L14.6 17.8L11.75 14.95L10.35 16.35L14.6 20.6ZM16 26C14.6167 26 13.3167 25.7373 12.1 25.212C10.8833 24.6873 9.825 23.975 8.925 23.075C8.025 22.175 7.31267 21.1167 6.788 19.9C6.26267 18.6833 6 17.3833 6 16C6 14.6167 6.26267 13.3167 6.788 12.1C7.31267 10.8833 8.025 9.825 8.925 8.925C9.825 8.025 10.8833 7.31233 12.1 6.787C13.3167 6.26233 14.6167 6 16 6C17.3833 6 18.6833 6.26233 19.9 6.787C21.1167 7.31233 22.175 8.025 23.075 8.925C23.975 9.825 24.6873 10.8833 25.212 12.1C25.7373 13.3167 26 14.6167 26 16C26 17.3833 25.7373 18.6833 25.212 19.9C24.6873 21.1167 23.975 22.175 23.075 23.075C22.175 23.975 21.1167 24.6873 19.9 25.212C18.6833 25.7373 17.3833 26 16 26Z" fill="#00DF80"/>
                            </g>
                        </svg>
                        <p className="text-sm">Preset Saved</p>
                    </div>
                </div>
            )}

            {/* Daisy UI Dialog */}
            <dialog id="my_modal_1" className="modal">
                <div className="modal-box">
                    <div className="flex justify-between items-center">
                        <h3 className="font-bold text-lg">Give me a name</h3>
                        <form method="dialog">
                            <button className="btn btn-md">X</button>
                        </form>
                    </div>
                    <hr className="my-3 border-gray-400"/>
                    <div className="py-3">
                        <div className="form-control">
                            <input
                                type="text"
                                placeholder="Name it"
                                className={`input input-bordered w-full mb-2 ${nameError ? 'border-red-500' : ''}`}
                                value={newDeviceName}
                                onChange={handleNameChange}
                            />
                            {nameError && <p className="text-red-500">{nameError}</p>}
                            <span>By adding this effect as a preset you can reuse this anytime.</span>
                        </div>

                    </div>
                    <div className="modal-action">
                        <form method="dialog">
                            <button className="btn btn-md bg-[#1E2939] rounded-[8px] mr-3">Cancel</button>
                            <button className="btn btn-md text-white bg-[#2B7FFF] rounded-[8px]" onClick={handlePresetSubmit}>Save Preset</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default Canvas;
