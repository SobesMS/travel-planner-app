# 🌍 Travel Planner App

A modern, clean travel planning app prototype. This project includes a Trip Dashboard and Trip Overview built with React and Tailwind CSS, featuring Google Maps integration.

## 🚀 Getting Started

### Prerequisites

- Node.js & npm
- A Google Cloud Platform account (for Google Maps API Key)

### Installation

```bash
git clone https://github.com/YOUR-USERNAME/travel-planner-app.git
cd travel-planner-app
npm install
npm run dev
```

## 🗺️ Google Maps API Key Setup

### 1. Get Your API Key

- Go to [Google Cloud Console](https://console.cloud.google.com/).
- Create a new project (or use an existing one).
- Navigate to **APIs & Services > Library**.
- Enable **Maps Embed API**.
- Navigate to **APIs & Services > Credentials**.
- Create an API Key.

### 2. Configure API Key

- Optionally, add **Application Restrictions**:
  - For development: None
  - For production: HTTP referrers (e.g., `https://yourdomain.com/*`)
- Add **API Restrictions** and select **Maps Embed API**.

### 3. Add the API Key to the Project

- Create a `.env` file in the root of your project.
- Add this line:

```
VITE_GOOGLE_MAPS_API_KEY=your_real_api_key_here
```

- Restart your dev server:

```bash
npm run dev
```

## 📂 Folder Structure

```
travel-planner-app/
├── index.html
├── public/
├── src/
│   ├── components/
│   │   └── TripCard.jsx
│   │   └── TripOverview.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .env
├── .gitignore
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
├── package.json
└── README.md
```

## ✨ Features

- Responsive trip card components
- Trip overview screen with embedded Google Maps
- Clean, minimal interface with Tailwind CSS
- Environment variable support for secure API key management

## 🛠️ Tech Stack

- React
- Tailwind CSS
- Vite (development server)
- Google Maps Embed API

## 📜 License

MIT