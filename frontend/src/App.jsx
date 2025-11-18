import React from "react";
import Sidebar from "./components/Sidebar";
import Canvas from "./components/Canvas/Canvas.jsx";
import { DeviceProvider } from "./context/DeviceContext";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

function App() {
    return (
        <DeviceProvider>
            <DndProvider backend={HTML5Backend}>
                <div className="flex h-screen bg-gray-950 text-gray-100">
                    <Sidebar />
                    <Canvas />
                </div>
            </DndProvider>
        </DeviceProvider>
    );
}

export default App;
