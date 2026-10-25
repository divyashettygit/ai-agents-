import React, { useState } from 'react';
import { FarmerProfile, Language } from '../types';
import { User, Award, FileText, CheckCircle2, ShieldCheck, Download, Layers } from 'lucide-react';

interface FarmProfileViewProps {
  farmer: FarmerProfile;
  language: Language;
  onUpdateProfile: (updated: Partial<FarmerProfile>) => void;
  onRewardCoins: (amount: number, reason: string) => void;
}

const PROFILE_I18N = {
  en: {
    badge: 'Farmer Profile & Settings',
    title: 'My Farm Profile & Project Architecture',
    sub: 'Manage your personal farm parameters and inspect project technical specifications',
    downloadReport: 'Download Academic Session Report',
    specsTitle: 'Farmer & Plot Specifications',
    coins: 'AgriCoins',
    fullName: 'Farmer Full Name',
    district: 'Farm District / Location',
    crop: 'Primary Crop',
    acres: 'Land Size (Acres)',
    phone: 'Kisan Mobile Number',
    saveBtn: 'Save Farm Profile (+25 🪙)',
    savedSuccess: 'Profile updated successfully.',
    academicTitle: 'Academic Review Specifications',
    projectBadge: 'B.Tech Engineering Project',
  },
  te: {
    badge: 'రైతు ప్రొఫైల్ & సెట్టింగ్‌లు',
    title: 'నా వ్యవసాయ ప్రొఫైల్ & ప్రాజెక్ట్ వివరాలు',
    sub: 'మీ వ్యవసాయ వివరాలను నిర్వహించండి మరియు ప్రాజెక్ట్ వివరాలను తనిఖీ చేయండి',
    downloadReport: 'అకడమిక్ రిపోర్ట్ డౌన్‌లోడ్',
    specsTitle: 'రైతు మరియు పొలం వివరాలు',
    coins: 'అగ్రి కాయిన్స్',
    fullName: 'రైతు పూర్తి పేరు',
    district: 'జిల్లా / ప్రాంతం',
    crop: 'ప్రధాన పంట',
    acres: 'భూమి విస్తీర్ణం (ఎకరాలు)',
    phone: 'కిసాన్ మొబైల్ నంబర్',
    saveBtn: 'ప్రొఫైల్ భద్రపరచండి (+25 🪙)',
    savedSuccess: 'ప్రొఫైల్ విజయవంతంగా నవీకరించబడింది.',
    academicTitle: 'అకడమిక్ రివ్యూ స్పెసిఫికేషన్లు',
    projectBadge: 'బి.టెక్ ఇంజనీరింగ్ ప్రాజెక్ట్',
  },
  hi: {
    badge: 'किसान प्रोफाइल और सेटिंग्स',
    title: 'मेरी कृषि प्रोफाइल और प्रोजेक्ट विवरण',
    sub: 'अपने कृषि मापदंडों का प्रबंधन करें और तकनीकी विनिर्देश देखें',
    downloadReport: 'अकादमिक रिपोर्ट डाउनलोड करें',
    specsTitle: 'किसान और खेत विनिर्देश',
    coins: 'एग्री-कॉइन',
    fullName: 'किसान का पूरा नाम',
    district: 'जिला / स्थान',
    crop: 'प्रमुख फसल',
    acres: 'भूमि का आकार (एकड़)',
    phone: 'किसान मोबाइल नंबर',
    saveBtn: 'प्रोफाइल सहेजें (+25 🪙)',
    savedSuccess: 'प्रोफाइल सफलतापूर्वक अपडेट की गई।',
    academicTitle: 'अकादमिक समीक्षा विनिर्देश',
    projectBadge: 'बी.टेक इंजीनियरिंग प्रोजेक्ट',
  },
  kn: {
    badge: 'ರೈತ ವಿವರ ಮತ್ತು ಸೆಟ್ಟಿಂಗ್‌ಗಳು',
    title: 'ನನ್ನ ಕೃಷಿ ಪ್ರೊಫೈಲ್ ಮತ್ತು ಪ್ರಾಜೆಕ್ಟ್ ವಿವರ',
    sub: 'ನಿಮ್ಮ ಕೃಷಿ ವಿವರಗಳನ್ನು ನಿರ್ವಹಿಸಿ ಮತ್ತು ತಾಂತ್ರಿಕ ಅಂಶಗಳನ್ನು ಪರಿಶೀಲಿಸಿ',
    downloadReport: 'ಅಕಾಡೆಮಿಕ್ ವರದಿ ಡೌನ್‌ಲೋಡ್',
    specsTitle: 'ರೈತ ಮತ್ತು ಜಮೀನಿನ ವಿವರಗಳು',
    coins: 'ಅಗ್ರಿ ಕಾಯಿನ್ಸ್',
    fullName: 'ರೈತನ ಪೂರ್ಣ ಹೆಸರು',
    district: 'ಜಿಲ್ಲೆ / ಸ್ಥಳ',
    crop: 'ಮುಖ್ಯ ಬೆಳೆ',
    acres: 'ಜಮೀನಿನ ವಿಸ್ತೀರ್ಣ (ಎಕರೆ)',
    phone: 'ಕಿಸಾನ್ ಮೊಬೈಲ್ ಸಂಖ್ಯೆ',
    saveBtn: 'ಪ್ರೊಫೈಲ್ ಉಳಿಸಿ (+25 🪙)',
    savedSuccess: 'ಪ್ರೊಫೈಲ್ ಯಶಸ್ವಿಯಾಗಿ ನವೀಕರಿಸಲಾಗಿದೆ.',
    academicTitle: 'ಅಕಾಡೆಮಿಕ್ ವಿಮರ್ಶಾ ವಿವರಗಳು',
    projectBadge: 'ಬಿ.ಟೆಕ್ ಎಂಜಿನಿಯರಿಂಗ್ ಪ್ರಾಜೆಕ್ಟ್',
  },
};

export const FarmProfileView: React.FC<FarmProfileViewProps> = ({
  farmer,
  language,
  onUpdateProfile,
  onRewardCoins,
}) => {
  const [name, setName] = useState(farmer.name);
  const [location, setLocation] = useState(farmer.location);
  const [crop, setCrop] = useState(farmer.crop);
  const [area, setArea] = useState(farmer.area);
  const [phone, setPhone] = useState(farmer.phone || '+91 98765 43210');
  const [isSaved, setIsSaved] = useState(false);

  const t = PROFILE_I18N[language] || PROFILE_I18N.en;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onUpdateProfile({
      name,
      location,
      crop,
      area: Number(area),
      phone,
    });
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 3000);
    onRewardCoins(25, 'Updated farm profile details');
  };

  const handleDownloadReport = () => {
    const text = `AGRISATHI - COMPREHENSIVE DEMO & PROJECT REPORT
Project Title: AgriSathi - AI Multi-Agent Farming Assistant
Project Domain: Artificial Intelligence & Agriculture (Autonomous Multi-Agent System)
Author: 4th Year B.Tech (CSE / ECE)
Date: ${new Date().toLocaleDateString('en-IN')}

1. FARMER PROFILE & LOCAL CONTEXT
- Farmer Name: ${farmer.name}
- Farm Location: ${farmer.location}
- Primary Crop: ${farmer.crop}
- Holding Size: ${farmer.area} Acres
- Reward Balance: ${farmer.agriCoins} AgriCoins
- Interface Language: ${language}

2. MULTI-AGENT ARCHITECTURE STATUS
[✓] Coordinator Agent: Master intent routing and unified response synthesis
[✓] Crop Health Agent: Leaf disease diagnosis using PlantVillage taxonomy
[✓] Soil & Fertilizer Advisor: Stage-wise NPK calculator (Urea, DAP, MOP bags)
[✓] Weather Planning Agent: Spraying window & precipitation risk advisories
[✓] Mandi Insights Agent: Agmarknet APMC market rates & CSV export
[✓] Govt Schemes Agent: Pradhan Mantri Fasal Bima Yojana (PMFBY) guidance

3. SYSTEM HIGHLIGHTS
- Multilingual Support: English, Hindi (हिन्दी), Telugu (తెలుగు), Kannada (ಕನ್ನಡ)
- Voice Assistance: Web Speech API speech-to-text input & TTS voice audio
- Agrochemical Verification: Anti-counterfeit CIBRC batch code scanner
- Educational Advisory Reels: Short farmer videos on farm mechanization & insurance

4. DATASET BENCHMARKS
- PlantVillage Dataset (54,000+ plant leaf pathology images)
- Agmarknet / Data.gov.in daily market arrival records
- Crop & Fertilizer Recommendation Datasets`;

    const blob = new Blob([text], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `AgriSathi_Academic_Project_Report_${new Date().toISOString().split('T')[0]}.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-6">
      {/* Intro */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <div>
          <div className="inline-flex items-center gap-1.5 text-[11px] font-bold text-emerald-800 bg-emerald-100 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
            <span>▤</span> {t.badge}
          </div>
          <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900 mt-1">
            {t.title}
          </h1>
          <p className="text-xs text-slate-500">
            {t.sub}
          </p>
        </div>

        <div className="flex items-center gap-2">
          <a
            href="/agrisathi-project.zip"
            download="AgriSathi_Full_Source_Code.zip"
            className="text-xs font-bold bg-white hover:bg-slate-50 text-slate-700 border border-slate-300 px-3.5 py-2 rounded-xl flex items-center gap-1.5 transition-colors shadow-xs"
            title="Download full project source code as a ZIP file"
          >
            <Download className="w-3.5 h-3.5 text-emerald-700" />
            {language === 'te' ? 'ప్రాజెక్ట్ ZIP డౌన్‌లోడ్' : 'Download Project ZIP'}
          </a>
          <button
            onClick={handleDownloadReport}
            className="text-xs font-bold bg-[#1b6243] hover:bg-[#144b33] text-white px-3.5 py-2 rounded-xl flex items-center gap-1.5 transition-colors shadow-xs"
          >
            <Download className="w-3.5 h-3.5" />
            {t.downloadReport}
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Profile Settings Form (6 Cols) */}
        <div className="lg:col-span-6 bg-white border border-slate-200 rounded-2xl p-5 shadow-xs space-y-4">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
              <User className="w-4 h-4 text-emerald-700" />
              {t.specsTitle}
            </h3>
            <div className="flex items-center gap-1 bg-amber-100 text-amber-900 px-2.5 py-0.5 rounded-full text-xs font-bold">
              <span>🪙</span>
              <span>{farmer.agriCoins} {t.coins}</span>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-3.5">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                {t.fullName}
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full text-xs rounded-xl border border-slate-200 px-3 py-2 bg-slate-50 focus:bg-white text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  {t.district}
                </label>
                <input
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  required
                  className="w-full text-xs rounded-xl border border-slate-200 px-3 py-2 bg-slate-50 focus:bg-white text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  {t.crop}
                </label>
                <select
                  value={crop}
                  onChange={(e) => setCrop(e.target.value)}
                  className="w-full text-xs rounded-xl border border-slate-200 px-3 py-2 bg-slate-50 focus:bg-white text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                >
                  <option value="Paddy">{language === 'te' ? 'వరి (Paddy)' : 'Paddy / Rice'}</option>
                  <option value="Maize">{language === 'te' ? 'మొక్కజొన్న (Maize)' : 'Maize / Corn'}</option>
                  <option value="Tomato">{language === 'te' ? 'టమోటా (Tomato)' : 'Tomato'}</option>
                  <option value="Cotton">{language === 'te' ? 'పత్తి (Cotton)' : 'Cotton'}</option>
                  <option value="Chilli">{language === 'te' ? 'మిర్చి (Chilli)' : 'Chilli'}</option>
                  <option value="Groundnut">{language === 'te' ? 'వేరుశనగ (Groundnut)' : 'Groundnut'}</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  {t.acres}
                </label>
                <input
                  type="number"
                  min="0.25"
                  max="1000"
                  step="0.25"
                  value={area}
                  onChange={(e) => setArea(Number(e.target.value))}
                  required
                  className="w-full text-xs rounded-xl border border-slate-200 px-3 py-2 bg-slate-50 focus:bg-white text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  {t.phone}
                </label>
                <input
                  type="text"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full text-xs rounded-xl border border-slate-200 px-3 py-2 bg-slate-50 focus:bg-white text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-[#1b6243] hover:bg-[#144b33] text-white font-bold text-xs py-2.5 rounded-xl shadow-xs transition-colors"
            >
              {t.saveBtn}
            </button>

            {isSaved && (
              <div className="p-2.5 bg-emerald-50 border border-emerald-200 rounded-xl text-xs font-semibold text-emerald-800 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                {t.savedSuccess}
              </div>
            )}
          </form>
        </div>

        {/* Academic Project Status (6 Cols) */}
        <div className="lg:col-span-6 bg-white border border-slate-200 rounded-2xl p-5 shadow-xs space-y-4">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
              <FileText className="w-4 h-4 text-slate-700" />
              Academic Review Specifications
            </h3>
            <span className="text-[10px] font-bold text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
              {t.projectBadge}
            </span>
          </div>

          <div className="space-y-2.5 text-xs">
            <div className="bg-emerald-50/60 border border-emerald-200 rounded-xl p-3 flex items-start gap-2.5">
              <span className="w-5 h-5 rounded-full bg-emerald-600 text-white flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
                ✓
              </span>
              <div>
                <b className="text-emerald-950 font-bold block">Objective 1: Multi-Agent AI System</b>
                <p className="text-[11px] text-emerald-800 mt-0.5">
                  6 integrated specialist agents (Coordinator, Crop Doctor, Soil Advisor, Weather Planner, Mandi Insights, and PMFBY Policy).
                </p>
              </div>
            </div>

            <div className="bg-emerald-50/60 border border-emerald-200 rounded-xl p-3 flex items-start gap-2.5">
              <span className="w-5 h-5 rounded-full bg-emerald-600 text-white flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
                ✓
              </span>
              <div>
                <b className="text-emerald-950 font-bold block">Objective 2: Generative AI & Deep Learning</b>
                <p className="text-[11px] text-emerald-800 mt-0.5">
                  Deep neural networks with multimodal vision pathology and precision NPK dosage calculator.
                </p>
              </div>
            </div>

            <div className="bg-emerald-50/60 border border-emerald-200 rounded-xl p-3 flex items-start gap-2.5">
              <span className="w-5 h-5 rounded-full bg-emerald-600 text-white flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
                ✓
              </span>
              <div>
                <b className="text-emerald-950 font-bold block">Objective 3: Multilingual & Voice Assistance</b>
                <p className="text-[11px] text-emerald-800 mt-0.5">
                  Web Speech API voice transcription, TTS speech synthesis, English/Hindi/Telugu/Kannada language engine.
                </p>
              </div>
            </div>

            <div className="bg-emerald-50/60 border border-emerald-200 rounded-xl p-3 flex items-start gap-2.5">
              <span className="w-5 h-5 rounded-full bg-emerald-600 text-white flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
                ✓
              </span>
              <div>
                <b className="text-emerald-950 font-bold block">New Screenshot Enhancements</b>
                <p className="text-[11px] text-emerald-800 mt-0.5">
                  Bayer FarmRise mobile prototype replica, Anti-counterfeit Product QR Verification, Agri Store Catalog, and "Videos for you" advisory reels.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* System Architecture Diagram Section */}
      <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-xs space-y-5">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base font-extrabold text-slate-900">
                {language === 'te'
                  ? 'సిస్టమ్ ఆర్కిటెక్చర్ & బ్లాక్ రేఖాచిత్రం (Project Architecture Diagram)'
                  : 'System Architecture & Block Diagram (B.Tech Stage-1)'}
              </h2>
              <p className="text-xs text-slate-500">
                {language === 'te'
                  ? 'మల్టీ-ఏజెంట్ సిస్టమ్, డేటా సోర్సెస్ మరియు అవుట్‌పుట్ ఫ్లో రేఖాచిత్రం'
                  : 'Complete architectural block diagram for project documentation and report submission'}
              </p>
            </div>
          </div>

          <a
            href="/agrisathi-architecture-diagram.jpg"
            download="AgriSathi_Architecture_Diagram.jpg"
            className="inline-flex items-center gap-2 bg-[#1b6243] hover:bg-[#144b33] text-white text-xs font-bold px-4 py-2.5 rounded-xl transition-colors shadow-xs shrink-0"
            title="Download high-resolution image for your B.Tech report"
          >
            <Download className="w-4 h-4" />
            <span>{language === 'te' ? 'ఆర్కిటెక్చర్ ఇమేజ్ డౌన్‌లోడ్' : 'Download Diagram Image'}</span>
          </a>
        </div>

        {/* High Resolution Architecture Image Display */}
        <div className="rounded-2xl overflow-hidden border border-slate-200 bg-slate-50 relative group p-2">
          <img
            src="/agrisathi-architecture-diagram.jpg"
            alt="AgriSathi AI Multi-Agent Farming Assistant System Architecture Diagram"
            className="w-full h-auto object-contain max-h-[780px] mx-auto rounded-xl shadow-xs"
          />
        </div>

        {/* Description & Block Breakdown for academic report */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
          <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-4 space-y-1.5">
            <b className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-600" />
              1. Input & Data Sources
            </b>
            <p className="text-[11px] text-slate-600 leading-relaxed">
              Farmer details, crop image upload for disease detection, voice/text questions in Indian languages (Telugu, Hindi, Kannada, English) integrated with real-time Weather APIs, soil data, and Agmarknet mandi rates.
            </p>
          </div>

          <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-4 space-y-1.5">
            <b className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-blue-600" />
              2. Multi-Agent Generative AI
            </b>
            <p className="text-[11px] text-slate-600 leading-relaxed">
              Agent Orchestrator coordinates 7 specialized agents: Crop Recommendation, Weather Forecast, Crop Disease Detection, Irrigation Management, Fertilizer Recommendation, Market Price Analysis, and AI Chat Assistant.
            </p>
          </div>

          <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-4 space-y-1.5">
            <b className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-amber-600" />
              3. Outputs & SDG Outcomes
            </b>
            <p className="text-[11px] text-slate-600 leading-relaxed">
              Personalized treatment plans, stage-wise NPK bag doses, spray windows, and multi-language voice responses supporting SDG 2 (Zero Hunger) and SDG 12 (Sustainable Farming).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
