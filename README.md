# 🧪 Device Sandbox Simulator

### A full-stack drag-and-drop environment for simulating devices (Lights & Fans)

The **Device Sandbox Simulator** lets users drag smart devices into a virtual room, control them in real time, and save/load presets through a Laravel backend.

---

## Table of Contents

- [Tech Stack](#-tech-stack)
- [Features](#-features)
- [System Architecture](#-system-architecture)
    - [Frontend Structure](#frontend-structure)
    - [Backend (Laravel)](#backend-laravel)
- [Installation](#️-installation)
    - [Clone the Repository](#1️⃣-clone-the-repository)
- [🖥️ Backend Setup (Laravel)](#️-backend-setup-laravel)
    - [Install Laravel Dependencies](#2️⃣-install-laravel-dependencies)
    - [Setup Environment](#3️⃣-setup-environment)
    - [Run Migrations](#4️⃣-run-migrations)
    - [Start Laravel Server](#5️⃣-start-laravel-server)
- [💻 Frontend Setup (React)](#-frontend-setup-react)
    - [Install Dependencies](#6️⃣-install-dependencies)
    - [Start React App](#7️⃣-start-react-app)
- [🔗 API Endpoints](#-api-endpoints)
- [🧬 State Management](#-state-management)
- [🧪 Testing](#-testing)
- [🧹 Additional Improvements](#-additional-improvements)
- [🚀 Future Enhancements](#-future-enhancements)
- [📄 License](#-license)

---

## 🌐 Tech Stack

### **Frontend**

* ⚛️ React (Functional Components + Hooks)
* 🎯 React DnD (drag & drop)
* 🔗 Axios (REST API client)
* 🧠 Context API

### **Backend**

* 🐘 Laravel 12
* 🌐 REST API + Eloquent ORM
* 🗄️ MySQL

---

## 🎉 Features

### 🎛️ **Drag & Drop Builder**

* Sidebar device list (Light, Fan)
* Drag devices into the Testing Canvas
* Dynamic device controllers appear when added

---

### 💡 **Light Controls**

* Power toggle
* Color temperature: warm / neutral / cool / pink
* Brightness slider (0–100%)
* Real-time visual updates

---

### 🌀 **Fan Controls**

* Power on/off
* Speed slider (0–100%)
* Smooth animation based on speed

---

### 📁 **Preset Management**

* Save entire canvas configuration
* Name your preset
* Presets appear in the sidebar
* Drag preset into canvas to restore device states
* Fully persistent via Laravel API + MySQL

---

## 🏗️ System Architecture

### **Frontend Structure**

```
src/
 ├── api/
 │    └── Apis.jsx
 ├── components/
 │    ├── Canvas/
 │    ├── Fan/
 │    ├── Light/
 │    ├── DeviceControls.jsx
 │    └── Sidebar.jsx
 ├── context/
 │    └── DeviceContext.jsx
 ├── App.jsx
 ├── App.css
 ├── index.css
 └── main.jsx
```

---

### **Backend (Laravel)**

```
app/
 ├── Enums/
 │    ├── DeviceType.php
 │    └── SettingColor.php
 ├── Http/
 │    ├── Controllers/
 │    │    └── Api/
 │    │         └── v1
 │    │             ├── BasicApiControlle.php
 │    │             └── PresetController.php
 │    ├── Requests/
 │    │    └── PresetRequest.php
 │    └── Resources/
 │         ├── DeviceResource.php
 │         └── PresetResource.php
 ├── Models/
 │    ├── Device.php
 │    └── Preset.php
 ├── Providers/
 │    ├── AppServiceProvider.php
 │    └── RepositoryServiceProvider.php
 ├── Repositories/
 │    ├── Contracts/
 │    │    ├── DeviceRepositoryInterface.php
 │    │    └── PresetRepositoryInterface.php
 │    ├── Elouquents/
 │    │    ├── DeviceRepository.php
 │    │    └── PresetRepository.php
 │    └── BaseRepository.php
 └── Services/
      ├── BasicDataService.php
      └── PresetService.php
database/
 ├── dump/
 │    └── db_dump.sql
 ├── factories/
 ├── migrations/
 └── seeders/
routes/
 └── api.php
tests/
 ├── Feature/
 └── Unit/
```

---

## ⚙️ Installation

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/MahadiHossain28/device-sandbox-simulator.git
cd device-sandbox-simulator
```

---

## 🖥️ Backend Setup (Laravel)

### 2️⃣ Install Laravel Dependencies

```bash
cd backend
composer install
```

### 3️⃣ Setup Environment

Copy `.env.example` → `.env` :

```bash
cp .env.example .env
```
Configure .env:

```
DB_DATABASE=device_sandbox
DB_USERNAME=root
DB_PASSWORD=
```

### 4️⃣ Generate Key

```bash
php artisan key:generate
```

### 5️⃣ Run Migrations

```bash
php artisan migrate --seed
```

### 6️⃣ Start Laravel Server

```bash
php artisan serve
```

Backend runs at:
👉 **[http://localhost:8000](http://localhost:8000)** or **[http://127.0.0.1:8000](http://127.0.0.1:8000)**

---

## 💻 Frontend Setup (React)

### 6️⃣ Install Dependencies

```bash
cd ../
cd frontend
npm install 
```

### 7️⃣ Start React App

```bash
npm run dev
```

Frontend runs at:
👉 **[http://localhost:5173](http://localhost:5173)**

or

```bash
npm run build
npm run preview
```

Frontend runs at:
👉 **[http://localhost:4173](http://localhost:4173)**


---

## 🔗 API Endpoints

### **GET** `/api/get-data`

Fetch all devices and presets.

### **POST** `/api/presets`

Save a new preset:

```json
{
  "name": "Living Room Scene",
  "devices": [
    {
      "type": "light",
      "settings": {
        "power": true,
        "brightness": 80,
        "colorTemp": "warm"
      }
    }
  ]
}
```

---

## 🧬 State Management

Managed via Context API :

* Devices in the canvas
* Individual device settings
* Preset list loading/saving
* Global loading & UI states

Ensures smooth and consistent UI behavior.

---

---

## 🧪 Testing

A sample PHPUnit test is included in ```tests/Feature/``` .

Run all tests:

```bash
cd backend
php artisan test
```

---

## 🧹 Additional Improvements

* Smooth animations
* Clean modular device components
* Error handling + toast notifications
* Fully documented codebase

---

## 🚀 Future Enhancements

* 🔐 User authentication (Laravel Sanctum)
* 🔌 More device types (AC, RGB Bulb, Smart Plug)
* 📡 Real-time updates with WebSockets
* ☁️ Cloud preset syncing

---

## 📄 License

**MIT License** – free to use, modify, and distribute.

---
