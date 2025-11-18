import React, {useContext, useEffect, useRef} from "react";
import {DeviceContext} from "../context/DeviceContext";
import {useDrag} from "react-dnd";

const DeviceButton = ({ name=null, id = null, device }) => {
    const { defaultDevices } = useContext(DeviceContext);
    const defaultDevicesRef = useRef(defaultDevices);

    useEffect(() => {
        defaultDevicesRef.current = defaultDevices;
    }, [defaultDevices]);

    const [{ isDragging }, drag] = useDrag(() => ({
        type: "DEVICE",
        item: () => {
            const newDevice = {...device, id: id ?? ''};
            return name ? newDevice : defaultDevicesRef.current.find(d => d.id === device.id);
        },

        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    }), [defaultDevices]);


    return (
        <div
            ref={drag}
            className={`flex items-center gap-x-3 border border-[#364153] cursor-pointer p-3 rounded-[10px] mb-2 text-white text-center bg-[#1E2939]
             ${isDragging ? "opacity-50" : "opacity-100"}`}
        >
            {device.type === "light" ?
                <svg width="25" height="25" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.5 11.6667C12.6667 10.8333 13.0833 10.25 13.75 9.58332C14.5833 8.83332 15 7.74999 15 6.66666C15 5.34057 14.4732 4.0688 13.5355 3.13112C12.5979 2.19344 11.3261 1.66666 10 1.66666C8.67392 1.66666 7.40215 2.19344 6.46447 3.13112C5.52678 4.0688 5 5.34057 5 6.66666C5 7.49999 5.16667 8.49999 6.25 9.58332C6.83333 10.1667 7.33333 10.8333 7.5 11.6667" stroke="#99A1AF" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M7.5 15H12.5" stroke="#99A1AF" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8.3335 18.3333H11.6668" stroke="#99A1AF" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                :
                <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.18762 12.8143C7.31442 13.2555 6.33216 13.4346 5.35941 13.33C4.38665 13.2253 3.46499 12.8413 2.70566 12.2244C1.94633 11.6074 1.38179 10.7839 1.08018 9.85316C0.778578 8.92244 0.752798 7.92432 1.00596 6.97927L5.51596 8.18761C5.07469 7.3144 4.89558 6.33214 5.00026 5.35939C5.10494 4.38664 5.48892 3.46497 6.10587 2.70564C6.72281 1.94631 7.54635 1.38177 8.47707 1.08017C9.40779 0.778563 10.4059 0.752783 11.351 1.00594L10.1426 5.51594C11.0158 5.07467 11.9981 4.89557 12.9708 5.00024C13.9436 5.10492 14.8653 5.48891 15.6246 6.10585C16.3839 6.7228 16.9485 7.54633 17.2501 8.47705C17.5517 9.40777 17.5774 10.4059 17.3243 11.3509L12.8143 10.1426C13.2556 11.0158 13.4347 11.9981 13.33 12.9708C13.2253 13.9436 12.8413 14.8652 12.2244 15.6246C11.6074 16.3839 10.7839 16.9484 9.85318 17.25C8.92246 17.5517 7.92434 17.5774 6.97929 17.3243L8.18762 12.8143Z" stroke="#99A1AF" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            }
            {name ?? device.name}
        </div>
    );
};

const Sidebar = () => {
    const { presets, defaultDevices } = useContext(DeviceContext);

    return (
        <div className="w-56 border-r border-[#1E2939] bg-[#101828] p-4 text-gray-100 flex flex-col gap-4 overflow-y-scroll">
            <h2 className="font-normal">Devices</h2>
            {defaultDevices.map((d) => (
                <DeviceButton key={d.id} device={d} />
            ))}

            <h2 className="font-normal">Presets</h2>

            {presets && presets.length > 0 ? (
                presets.map((p) => (
                    <DeviceButton
                        key={`presets_${p.id}`}
                        id={p.id}
                        name={p.name}
                        device={p.device}
                    />
                ))
            ) : (
                <div className="border border-[#364153] rounded-[10px] p-3 text-sm text-gray-500">
                    Nothing Added Yet.
                </div>
            )}

        </div>
    );
};

export default Sidebar;
