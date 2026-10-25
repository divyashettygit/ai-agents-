# AgriSathi - Autonomous Multi-Agent Agricultural Intelligence Platform 🌾

An AI-powered multi-agent farming assistant platform integrating plant pathology leaf disease diagnosis, stage-wise NPK fertilizer dosage calculation, microclimate weather spraying advisories, APMC mandi rates, voice assistance (English, Telugu, Hindi, Kannada), educational advisory video shorts, and agrochemical anti-counterfeit verification.

---

## 💻 How to Run Locally on Your PC (Windows / Mac / Linux)

### 1. Prerequisites
- **Node.js**: Version 18.0.0 or higher ([Download Node.js](https://nodejs.org/))
- **npm**: (Bundled automatically with Node.js)

Verify your installation:
```bash
node -v
npm -v
```

---

### 2. Quick Setup

1. **Unzip the downloaded project folder** on your computer.
2. Open your terminal / command prompt in that extracted directory:
   - On Windows: Right-click inside the folder and select **"Open in Terminal"** or **"Open PowerShell window here"**.
   - On Mac/Linux: Open Terminal and `cd` to the folder.

3. **Install the dependencies**:
   ```bash
   npm install
   ```

4. **Start the local development server**:
   ```bash
   npm run dev
   ```

5. **Open in your web browser**:
   ```
   http://localhost:3000
   ```

---

### 3. (Optional) Network & Mobile Access on Same Wi-Fi

To test or demo the app on your smartphone connected to the same Wi-Fi router:
1. Start the server with the `--host` flag:
   ```bash
   npm run dev -- --host
   ```
2. Terminal will display your local IP (e.g., `http://192.168.1.15:3000`).
3. Open that address in Chrome/Safari on your phone!

---

## 🛠️ Project Structure

```
├── server.ts                  # Express backend & agronomy calculation engine
├── index.html                 # HTML entry point with fonts & metadata
├── vite.config.ts             # Vite build configuration with Tailwind CSS
├── package.json               # Project dependencies and run scripts
├── tsconfig.json              # TypeScript compilation config
├── src/
│   ├── main.tsx               # React root entry
│   ├── App.tsx                # Master navigation, layout, and modal orchestrator
│   ├── index.css              # Global Tailwind CSS styling
│   ├── types.ts               # TypeScript interfaces for agents, crops, mandis, reels
│   ├── data/
│   │   ├── mockData.ts        # Video reels, mandi benchmark rates, agrochemicals catalog
│   │   └── translations.ts    # Full I18N dictionary for Telugu, Hindi, Kannada & English
│   └── components/
│       ├── Header.tsx         # Multilingual top bar, ZIP download & AgriCoins balance
│       ├── LoginView.tsx      # Authentication portal with Sign In / Sign Up / Guest Explore
│       ├── DashboardView.tsx  # Farm snapshot, daily checklist, video carousel
│       ├── MobileAppView.tsx  # Interactive smartphone UI prototype
│       ├── AssistantView.tsx  # Multi-Agent AI agronomy chat with voice input
│       ├── CropDoctorModal.tsx        # Leaf disease vision scanner & remedies
│       ├── FertilizerAdviceModal.tsx  # Split NPK application calculator (Urea/DAP/MOP)
│       ├── ProductVerificationModal.tsx# CIBRC batch code anti-counterfeit scanner
│       ├── ProductsCatalogModal.tsx   # Verified input products directory
│       ├── WeatherView.tsx    # Microclimate spraying window & irrigation advisory
│       ├── SoilView.tsx       # Soil health card & pH nutrient advisor
│       ├── MarketView.tsx     # APMC mandi rates table with CSV export
│       ├── FarmProfileView.tsx# Farm parameters & academic report export
│       ├── VideoPlayerModal.tsx# Reels / Shorts video player
│       └── Toast.tsx          # AgriCoins reward notifications
└── public/                    # Static assets, icons, and downloadable archives
```

---

## 🌟 Key Features

- **Multilingual Support**: 100% localized interface in Telugu (`తెలుగు`), Hindi (`हिन्दी`), Kannada (`ಕನ್ನಡ`), and English.
- **Voice Input (Web Speech API)**: Microphone input for farmers in Telugu, Hindi, and English with live sound wave visualizers.
- **Crop Doctor Vision Scanner**: Instant leaf disease analysis with symptom checks, organic solutions, and chemical treatment plans.
- **Fertilizer Dosage Calculator**: Exact stage-wise split recommendations for Urea, DAP, and MOP tailored to crop and acreage.
- **Smart Weather & Spray Windows**: Real-time microclimate advisory identifying safe spraying hours to prevent pesticide wash-off.
- **Agrochemical Authenticity Verification**: Anti-counterfeit CIBRC batch lookup with QR & code scanner.
- **Educational Video Shorts**: Vertical 9:16 agricultural clips with live playback and AgriCoin rewards.
- **Farm Profile & Academic Report Export**: Generates downloadable session reports for project documentation.
