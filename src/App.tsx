import React, { useState } from 'react';
import { ActivePage, FarmerProfile, Language, VideoReel } from './types';
import { I18N } from './data/translations';
import { Header } from './components/Header';
import { MobileAppView } from './components/MobileAppView';
import { DashboardView } from './components/DashboardView';
import { AssistantView } from './components/AssistantView';
import { WeatherView } from './components/WeatherView';
import { SoilView } from './components/SoilView';
import { MarketView } from './components/MarketView';
import { FarmProfileView } from './components/FarmProfileView';
import { CropDoctorModal } from './components/CropDoctorModal';
import { FertilizerAdviceModal } from './components/FertilizerAdviceModal';
import { ProductVerificationModal } from './components/ProductVerificationModal';
import { ProductsCatalogModal } from './components/ProductsCatalogModal';
import { VideoPlayerModal } from './components/VideoPlayerModal';
import { ShareGuideModal } from './components/ShareGuideModal';
import { Toast } from './components/Toast';
import {
  LayoutDashboard,
  Stethoscope,
  Sprout,
  CloudSun,
  FlaskConical,
  TrendingUp,
  MessageSquare,
  ShoppingBag,
  User,
  ShieldCheck,
  Smartphone,
  Monitor,
} from 'lucide-react';

export default function App() {
  const [farmer, setFarmer] = useState<FarmerProfile>({
    name: 'Ramesh Reddy',
    location: 'Hyderabad, Telangana',
    crop: 'Paddy',
    area: 2,
    phone: '+91 98480 12345',
    language: 'en',
    agriCoins: 2000,
  });

  const t = I18N[farmer.language] || I18N.en;

  const [activePage, setActivePage] = useState<ActivePage>('dashboard');
  const [viewMode, setViewMode] = useState<'desktop' | 'mobile'>('desktop');
  const [checklist, setChecklist] = useState<boolean[]>([false, false, false, false]);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Modals state
  const [isCropDoctorOpen, setIsCropDoctorOpen] = useState(false);
  const [isFertilizerOpen, setIsFertilizerOpen] = useState(false);
  const [isVerifyOpen, setIsVerifyOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [activeVideo, setActiveVideo] = useState<VideoReel | null>(null);
  const [isShareGuideOpen, setIsShareGuideOpen] = useState(false);

  const rewardCoins = (amount: number, reason: string) => {
    setFarmer((prev) => ({
      ...prev,
      agriCoins: prev.agriCoins + amount,
    }));
    setToastMessage(`+${amount} 🪙 Coins earned: ${reason}! Total: ${farmer.agriCoins + amount}`);
  };

  const handleToggleTask = (index: number) => {
    const updated = [...checklist];
    updated[index] = !updated[index];
    setChecklist(updated);

    if (updated[index]) {
      rewardCoins(25, 'Completed daily farm inspection task');
    }
  };

  const handleUpdateProfile = (updated: Partial<FarmerProfile>) => {
    setFarmer((prev) => ({ ...prev, ...updated }));
  };

  const handleNavigate = (page: ActivePage) => {
    if (page === 'disease') {
      setIsCropDoctorOpen(true);
      return;
    }
    if (page === 'fertilizer') {
      setIsFertilizerOpen(true);
      return;
    }
    if (page === 'products') {
      setIsProductsOpen(true);
      return;
    }
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#f6f9f5] text-[#1c2e24] flex flex-col font-sans">
      {/* Header bar */}
      <Header
        farmer={farmer}
        activePage={activePage}
        onNavigate={handleNavigate}
        viewMode={viewMode}
        onToggleViewMode={() => setViewMode(viewMode === 'desktop' ? 'mobile' : 'desktop')}
        language={farmer.language}
        onLanguageChange={(lang: Language) => {
          setFarmer((prev) => ({ ...prev, language: lang }));
          setToastMessage(`Language changed to ${lang.toUpperCase()}`);
        }}
        onOpenShareGuide={() => setIsShareGuideOpen(true)}
      />

      {/* Main Body */}
      {viewMode === 'mobile' ? (
        <main className="flex-1 max-w-7xl mx-auto w-full py-6 px-4">
          <div className="flex flex-col items-center justify-center">
            <div className="text-center mb-3">
              <span className="text-xs font-bold text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full uppercase tracking-wider inline-flex items-center gap-1.5">
                <Smartphone className="w-3.5 h-3.5" />
                Mobile Smartphone View (FarmRise Prototype Inspired)
              </span>
              <p className="text-xs text-slate-500 mt-1">
                Interact with the phone below, or click{' '}
                <button
                  onClick={() => setViewMode('desktop')}
                  className="font-bold text-emerald-700 underline"
                >
                  Portal Workspace
                </button>{' '}
                for the full dashboard
              </p>
            </div>

            <MobileAppView
              farmer={farmer}
              language={farmer.language}
              onOpenCropDoctor={() => setIsCropDoctorOpen(true)}
              onOpenFertilizer={() => setIsFertilizerOpen(true)}
              onOpenVerify={() => setIsVerifyOpen(true)}
              onOpenProducts={() => setIsProductsOpen(true)}
              onOpenVideo={(video) => setActiveVideo(video)}
              onNavigatePage={(page) => handleNavigate(page)}
              onRewardCoins={rewardCoins}
            />
          </div>
        </main>
      ) : (
        <div className="flex-1 max-w-[1600px] w-full mx-auto flex">
          {/* Sidebar Navigation */}
          <aside className="hidden md:flex flex-col w-64 bg-white border-r border-slate-200/90 p-4 space-y-6 shrink-0">
            <div>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider px-3 block mb-2">
                {t.farmWorkspace}
              </span>
              <nav className="space-y-1">
                <button
                  onClick={() => handleNavigate('dashboard')}
                  className={`w-full text-left px-3 py-2.5 rounded-xl text-xs font-bold flex items-center gap-3 transition-colors ${
                    activePage === 'dashboard'
                      ? 'bg-emerald-50 text-emerald-900 border border-emerald-200'
                      : 'text-slate-600 hover:bg-slate-100/70'
                  }`}
                >
                  <LayoutDashboard className="w-4 h-4 text-emerald-700" />
                  <span>{t.overview}</span>
                </button>

                <button
                  onClick={() => setIsCropDoctorOpen(true)}
                  className="w-full text-left px-3 py-2.5 rounded-xl text-xs font-bold flex items-center justify-between text-slate-600 hover:bg-slate-100/70 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <Stethoscope className="w-4 h-4 text-emerald-700" />
                    <span>{t.cropDoctor}</span>
                  </div>
                  <span className="text-[9px] font-extrabold bg-emerald-100 text-emerald-800 px-1.5 py-0.5 rounded">
                    VISION
                  </span>
                </button>

                <button
                  onClick={() => setIsFertilizerOpen(true)}
                  className="w-full text-left px-3 py-2.5 rounded-xl text-xs font-bold flex items-center gap-3 text-slate-600 hover:bg-slate-100/70 transition-colors"
                >
                  <Sprout className="w-4 h-4 text-amber-700" />
                  <span>{t.fertilizerAdvice}</span>
                </button>

                <button
                  onClick={() => handleNavigate('weather')}
                  className={`w-full text-left px-3 py-2.5 rounded-xl text-xs font-bold flex items-center gap-3 transition-colors ${
                    activePage === 'weather'
                      ? 'bg-emerald-50 text-emerald-900 border border-emerald-200'
                      : 'text-slate-600 hover:bg-slate-100/70'
                  }`}
                >
                  <CloudSun className="w-4 h-4 text-sky-700" />
                  <span>{t.weatherPlanner}</span>
                </button>

                <button
                  onClick={() => handleNavigate('soil')}
                  className={`w-full text-left px-3 py-2.5 rounded-xl text-xs font-bold flex items-center gap-3 transition-colors ${
                    activePage === 'soil'
                      ? 'bg-emerald-50 text-emerald-900 border border-emerald-200'
                      : 'text-slate-600 hover:bg-slate-100/70'
                  }`}
                >
                  <FlaskConical className="w-4 h-4 text-teal-700" />
                  <span>{t.soilNutrients}</span>
                </button>

                <button
                  onClick={() => handleNavigate('market')}
                  className={`w-full text-left px-3 py-2.5 rounded-xl text-xs font-bold flex items-center gap-3 transition-colors ${
                    activePage === 'market'
                      ? 'bg-emerald-50 text-emerald-900 border border-emerald-200'
                      : 'text-slate-600 hover:bg-slate-100/70'
                  }`}
                >
                  <TrendingUp className="w-4 h-4 text-orange-700" />
                  <span>{t.mandiPrices}</span>
                </button>

                <button
                  onClick={() => handleNavigate('assistant')}
                  className={`w-full text-left px-3 py-2.5 rounded-xl text-xs font-bold flex items-center justify-between transition-colors ${
                    activePage === 'assistant'
                      ? 'bg-emerald-50 text-emerald-900 border border-emerald-200'
                      : 'text-slate-600 hover:bg-slate-100/70'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <MessageSquare className="w-4 h-4 text-purple-700" />
                    <span>{t.aiAgents}</span>
                  </div>
                  <span className="text-[9px] font-extrabold bg-purple-100 text-purple-800 px-1.5 py-0.5 rounded">
                    GEMINI
                  </span>
                </button>

                <button
                  onClick={() => setIsProductsOpen(true)}
                  className="w-full text-left px-3 py-2.5 rounded-xl text-xs font-bold flex items-center gap-3 text-slate-600 hover:bg-slate-100/70 transition-colors"
                >
                  <ShoppingBag className="w-4 h-4 text-blue-700" />
                  <span>{t.agriProducts}</span>
                </button>

                <button
                  onClick={() => handleNavigate('farm')}
                  className={`w-full text-left px-3 py-2.5 rounded-xl text-xs font-bold flex items-center gap-3 transition-colors ${
                    activePage === 'farm'
                      ? 'bg-emerald-50 text-emerald-900 border border-emerald-200'
                      : 'text-slate-600 hover:bg-slate-100/70'
                  }`}
                >
                  <User className="w-4 h-4 text-emerald-700" />
                  <span>{t.myFarm}</span>
                </button>
              </nav>
            </div>

            {/* Quick Action Box */}
            <div className="mt-auto bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-200 rounded-2xl p-3.5 space-y-2 text-xs">
              <span className="font-bold text-emerald-900 block">{t.agriCoins}</span>
              <p className="text-[11px] text-emerald-700 leading-relaxed">
                {farmer.language === 'te'
                  ? `మీ వద్ద ${farmer.agriCoins} కాయిన్స్ ఉన్నాయి. రోజువారీ పనులు పూర్తి చేసి లేదా వ్యవసాయ వీడియోలు చూసి మరిన్ని కాయిన్స్ సంపాదించండి.`
                  : farmer.language === 'hi'
                  ? `आपके पास ${farmer.agriCoins} सिक्के हैं। दैनिक कार्य पूरे करें या अधिक सिक्के कमाने के लिए वीडियो देखें।`
                  : `You have ${farmer.agriCoins} coins. Complete daily checklists or watch advisory videos to earn more.`}
              </p>
              <button
                onClick={() => setViewMode('mobile')}
                className="w-full text-center text-xs font-bold bg-[#1b6243] text-white py-2 rounded-xl shadow-xs hover:bg-[#144b33] transition-colors"
              >
                {t.switchModeMobile}
              </button>
            </div>
          </aside>

          {/* Page Content */}
          <main className="flex-1 p-4 lg:p-8 overflow-y-auto">
            {activePage === 'dashboard' && (
              <DashboardView
                farmer={farmer}
                language={farmer.language}
                onOpenCropDoctor={() => setIsCropDoctorOpen(true)}
                onOpenFertilizer={() => setIsFertilizerOpen(true)}
                onOpenVerify={() => setIsVerifyOpen(true)}
                onOpenVideo={(video) => setActiveVideo(video)}
                onNavigate={handleNavigate}
                checklist={checklist}
                onToggleTask={handleToggleTask}
              />
            )}

            {activePage === 'weather' && (
              <WeatherView
                farmer={farmer}
                language={farmer.language}
                onUpdateLocation={(loc) => handleUpdateProfile({ location: loc })}
              />
            )}

            {activePage === 'soil' && (
              <SoilView
                farmer={farmer}
                language={farmer.language}
                onOpenFertilizerAdvice={() => setIsFertilizerOpen(true)}
                onRewardCoins={rewardCoins}
              />
            )}

            {activePage === 'market' && (
              <MarketView
                language={farmer.language}
                onRewardCoins={rewardCoins}
              />
            )}

            {activePage === 'assistant' && (
              <AssistantView
                farmer={farmer}
                language={farmer.language}
                onRewardCoins={rewardCoins}
              />
            )}

            {activePage === 'farm' && (
              <FarmProfileView
                farmer={farmer}
                language={farmer.language}
                onUpdateProfile={handleUpdateProfile}
                onRewardCoins={rewardCoins}
              />
            )}
          </main>
        </div>
      )}

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white py-4 px-6 text-center text-xs text-slate-500">
        <p>
          AgriSathi · Academic Prototype · Bharat Institute of Engineering and Technology · Multi-Agent AI System
        </p>
      </footer>

      {/* Modals */}
      <CropDoctorModal
        isOpen={isCropDoctorOpen}
        onClose={() => setIsCropDoctorOpen(false)}
        language={farmer.language}
        onRewardCoins={rewardCoins}
      />

      <FertilizerAdviceModal
        isOpen={isFertilizerOpen}
        onClose={() => setIsFertilizerOpen(false)}
        language={farmer.language}
        onRewardCoins={rewardCoins}
      />

      <ProductVerificationModal
        isOpen={isVerifyOpen}
        onClose={() => setIsVerifyOpen(false)}
        language={farmer.language}
        onRewardCoins={rewardCoins}
      />

      <ProductsCatalogModal
        isOpen={isProductsOpen}
        onClose={() => setIsProductsOpen(false)}
        language={farmer.language}
        onSelectProductForVerification={(code) => {
          setIsVerifyOpen(true);
        }}
      />

      <VideoPlayerModal
        video={activeVideo}
        onClose={() => setActiveVideo(null)}
        language={farmer.language}
        onRewardCoins={rewardCoins}
      />

      <ShareGuideModal
        isOpen={isShareGuideOpen}
        onClose={() => setIsShareGuideOpen(false)}
        language={farmer.language}
      />

      {/* Toast alert */}
      <Toast message={toastMessage} onClose={() => setToastMessage(null)} />
    </div>
  );
}
