# 🍁 MapleStory Classic World Guide (מדריך מייפל סטורי קלאסי)

[![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)](https://github.com/maori30/maplestory-classic-guide)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
[![React](https://img.shields.io/badge/React-18.3.1-61dafb.svg)](https://react.dev/)
[![Electron](https://img.shields.io/badge/Electron-45.0.0-47848F.svg)](https://www.electronjs.org/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4.15-38bdf8.svg)](https://tailwindcss.com/)

An open-source, offline-first desktop companion encyclopedia and guide for classic MapleStory (Pre-BigBang v62). Built with React 18, Vite, Tailwind CSS, and Electron.

---

## ✨ Features

- **🗺️ Interactive Map & Radar Explorer**: Real-time interactive radar and minimap previews for iconic classic hunting grounds (Pig Beach, Ant Tunnel, Sleepywood, Sahel, etc.).
- **👾 Comprehensive Monster Database**: Level, HP, MP, EXP, defense values, and authentic drop tables for all classic monsters and world bosses.
- **🛡️ Authentic Equipment Stats Grid (לוח נתוני ציוד)**: Over 1,900 classic items with verified level requirements, stat requirements (STR/DEX/INT/LUK), physical & magic defense/attack, stat bonuses, and scroll upgrade slots.
- **📜 Quest & Walkthrough Tracker**: Detailed quest walkthroughs, NPC town locations, required item checklists, and reward summaries.
- **⏱️ Boss Spawn & Channel Timers**: Multi-channel spawn tracking, respawn windows, and audio alerts for classic area bosses (Mushmom, Zombie Mushmom, Mano, Stumpy, etc.).
- **🌐 Bilingual Support**: Full Hebrew RTL (`dir="rtl"`) and English language toggle with pixel-perfect typography.
- **🔒 100% Offline-First & Privacy-Focused**: All database records and assets are embedded locally. Zero telemetry, zero analytics tracking, and zero background network scraping.

---

## 🛠️ Technology Stack

- **Frontend**: [React 18](https://reactjs.org/) with Hooks and Context API
- **Desktop Runtime**: [Electron](https://www.electronjs.org/)
- **Bundler**: [Vite 6](https://vitejs.dev/)
- **Styling**: [Tailwind CSS 3](https://tailwindcss.com/) with custom glassmorphism components
- **Packaging**: [Electron Builder](https://www.electron.build/) for portable Windows executables

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18.0.0 or higher recommended)
- `npm` (included with Node.js)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/maori30/maplestory-classic-guide.git
   cd maplestory-classic-guide
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run in development mode:
   ```bash
   npm run dev
   ```

4. Launch the desktop application:
   ```bash
   npm run app
   ```

5. Build the portable Windows `.exe` executable:
   ```bash
   npm run dist
   ```

---

## 📦 Project Structure

```text
├── build/                # Application icons and desktop assets
├── public/               # Public assets and favicon
├── src/
│   ├── assets/           # Local map renders and icons
│   ├── components/       # React UI components (Radar, Timers, Database, etc.)
│   ├── context/          # Language and theme context providers
│   ├── data/             # Offline data records (Monsters, Items, Maps, NPCs, Quests)
│   ├── services/         # Update verification and local storage services
│   ├── App.jsx           # Main application shell and tab router
│   └── main.jsx          # React DOM entry point
├── electron.cjs          # Electron main process and window lifecycle
├── package.json          # Project configuration and build scripts
└── vite.config.js        # Vite bundler configuration
```

---

## 📄 License

This project is licensed under the MIT License.
