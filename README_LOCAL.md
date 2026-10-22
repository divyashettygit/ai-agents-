# AgriSathi - AI Multi-Agent Farming Assistant 🌾

An AI-powered multi-agent farming assistant integrating plant pathology leaf disease diagnosis, stage-wise NPK fertilizer dosage calculation, weather planning, APMC mandi rates, voice assistance (English, Telugu, Hindi, Kannada), educational advisory video shorts, and agrochemical anti-counterfeit verification.

Developed for **Bharat Institute of Engineering and Technology (BIET)** 4th-Year B.Tech Academic Project.

---

## 💻 How to Run Locally on Your PC (Windows / Mac / Linux)

### 1. Prerequisites
- **Node.js**: Version 18 or higher (Download from [nodejs.org](https://nodejs.org/))
- **npm** (comes bundled with Node.js)

---

### 2. Quick Setup

1. **Unzip the project** into any folder on your computer.
2. Open a terminal (PowerShell, Command Prompt, or Terminal) in that folder.
3. Install dependencies:
   ```bash
   npm install
   ```

4. *(Optional)* Configure your Google Gemini API Key:
   - Create a file named `.env` in the root folder:
     ```env
     GEMINI_API_KEY=your_gemini_api_key_here
     PORT=3000
     ```
   - *Note: If no API key is provided, AgriSathi automatically runs in offline agronomy mode with built-in agricultural knowledge bases!*

5. Start the development server:
   ```bash
   npm run dev
   ```

6. Open your browser and visit:
   ```
   http://localhost:3000
   ```

---

## 🛠️ Project Structure
```
├── server.ts               # Express backend hosting Gemini API proxies & agronomy engine
├── index.html              # HTML entry point with fonts & metadata
├── vite.config.ts          # Vite build configuration with Tailwind CSS v4
├── package.json            # Project dependencies and run scripts
├── src/
│   ├── main.tsx            # React root entry
│   ├── App.tsx             # Master navigation, layout, and modal orchestrator
│   ├── index.css           # Global Tailwind CSS styling
│   ├── types.ts            # TypeScript interfaces for agents, crops, mandis, reels
│   ├── data/
│   │   ├── mockData.ts     # Video reels, mandi benchmark rates, agrochemicals catalog
│   │   └── translations.ts # Full I18N dictionary for Telugu, Hindi, Kannada & English
│   └── components/
│       ├── Header.tsx                 # Multilingual top bar & AgriCoins balance
│       ├── DashboardView.tsx          # Farm snapshot, daily checklist, video carousel
│       ├── MobileAppView.tsx          # Bayer FarmRise smartphone UI prototype
│       ├── AssistantView.tsx          # Multi-Agent AI chat with microphone voice input
│       ├── CropDoctorModal.tsx        # Leaf disease vision scanner & treatment plans
│       ├── FertilizerAdviceModal.tsx  # Split NPK application calculator (Urea/DAP/MOP)
│       ├── ProductVerificationModal.tsx# CIBRC batch code anti-counterfeit scanner
│       ├── ProductsCatalogModal.tsx   # Verified input products directory
│       ├── WeatherView.tsx            # Microclimate spraying window & irrigation advisory
│       ├── SoilView.tsx               # Soil health card & pH nutrient advisor
│       ├── MarketView.tsx             # APMC mandi rates table with CSV export
│       ├── FarmProfileView.tsx        # Farm parameters & academic report export
│       ├── VideoPlayerModal.tsx       # Reels / Shorts video player with YouTube embed
│       └── Toast.tsx                  # AgriCoins reward toast notifications
└── public/                 # Static assets and images
```

---

## 🌟 Key Features
- **Telugu (`తెలుగు`) & Multilingual Support**: 100% localized interface, leaf disease diagnoses, symptoms, remedies, and chat responses.
- **Voice Input (Web Speech API)**: Microphone input for farmers in Telugu, Hindi, and English with live sound wave visualizers.
- **Instagram / Meesho-Style Video Shorts**: Vertical 9:16 playable agricultural video clips with live YouTube playback, like counts, and AgriCoin rewards.
- **Academic Report Download**: Generates downloadable session reports for college project presentations.
