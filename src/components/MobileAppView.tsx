import React, { useState, useRef, useEffect } from 'react';
import {
  ActivePage,
  FarmerProfile,
  Language,
  VideoReel,
} from '../types';
import { VIDEO_REELS } from '../data/mockData';
import { I18N } from '../data/translations';
import {
  QrCode,
  Sprout,
  ShoppingBag,
  Stethoscope,
  ChevronDown,
  ChevronUp,
  Play,
  CloudRain,
  ShieldAlert,
  TrendingUp,
  FlaskConical,
  Wind,
  Home,
  MessageSquare,
  User,
  ArrowLeft,
} from 'lucide-react';
import { WeatherView } from './WeatherView';
import { SoilView } from './SoilView';
import { MarketView } from './MarketView';
import { AssistantView } from './AssistantView';
import { FarmProfileView } from './FarmProfileView';

interface MobileAppViewProps {
  farmer: FarmerProfile;
  language: Language;
  activePage: ActivePage;
  onOpenCropDoctor: () => void;
  onOpenFertilizer: () => void;
  onOpenVerify: () => void;
  onOpenProducts: () => void;
  onOpenVideo: (video: VideoReel) => void;
  onNavigatePage: (page: ActivePage) => void;
  onRewardCoins: (amount: number, reason: string) => void;
  onUpdateProfile: (updated: Partial<FarmerProfile>) => void;
}

export const MobileAppView: React.FC<MobileAppViewProps> = ({
  farmer,
  language,
  activePage,
  onOpenCropDoctor,
  onOpenFertilizer,
  onOpenVerify,
  onOpenProducts,
  onOpenVideo,
  onNavigatePage,
  onRewardCoins,
  onUpdateProfile,
}) => {
  const [showMoreActions, setShowMoreActions] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const t = I18N[language] || I18N.en;

  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [activePage]);

  return (
    <div className="flex justify-center items-center py-4 px-2 w-full">
      {/* Smartphone frame container */}
      <div className="w-full max-w-[420px] bg-white rounded-[38px] sm:rounded-[44px] shadow-2xl border-[6px] sm:border-[10px] border-slate-900 overflow-hidden relative flex flex-col min-h-[820px]">
        {/* Notch & Status Bar */}
        <div className="bg-slate-900 text-white px-7 pt-3 pb-2 flex items-center justify-between text-xs select-none">
          <span className="font-semibold text-[11px] tracking-wide">12:30</span>
          {/* Camera punch-hole */}
          <div className="w-4 h-4 rounded-full bg-slate-950 border border-slate-800" />
          <div className="flex items-center gap-1.5 text-[10px]">
            <span>5G</span>
            <span>📶</span>
            <span>🔋 92%</span>
          </div>
        </div>

        {/* Scrollable App Body */}
        <div
          ref={scrollContainerRef}
          className="flex-1 overflow-y-auto px-3.5 sm:px-4 py-3 space-y-4 pb-20 bg-gradient-to-b from-white via-[#f8faf7] to-[#f4f7f2]"
        >
          {activePage === 'dashboard' ? (
            <>
              {/* Top Bar inside app */}
              <div className="flex items-center justify-between pt-1">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-emerald-100 border border-emerald-300 flex items-center justify-center text-emerald-800 font-extrabold text-xs shadow-sm">
                    ✿
                  </div>
                  <span className="text-sm font-bold text-slate-800 flex items-center gap-1">
                    {t.namaskar} <span className="text-amber-500">🙏</span> {farmer.name.split(' ')[0]}
                  </span>
                </div>
              </div>

              {/* Weather Card - Replicating screenshot */}
              <div
                onClick={() => onNavigatePage('weather')}
                className="cursor-pointer bg-gradient-to-r from-emerald-50 via-teal-50 to-emerald-100/70 border border-emerald-200/80 rounded-2xl p-4 shadow-sm hover:border-emerald-400 transition-all"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <span className="text-xs font-bold text-slate-700">
                      {language === 'te' ? 'ఈరోజు' : 'Today'}, {farmer.location.split(',')[0]}
                    </span>
                    <p className="text-[11px] text-slate-500 mt-0.5">
                      {language === 'te'
                        ? 'ఉరుములతో వర్షం, 4mm వర్షపాతం · అధిక తేమ'
                        : 'Thunderstorm, 4mm Rainfall · High Humidity'}
                    </p>
                    <div className="mt-2 text-[10px] text-emerald-800 bg-emerald-100/90 font-bold px-2 py-0.5 rounded-full inline-block">
                      {language === 'te' ? 'మధ్యాహ్నం 3 వరకు పిచికారీ వద్దు' : 'Spraying window closed until 3 PM'}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center justify-end gap-1.5">
                      <span className="text-2xl font-black text-slate-800 tabular-nums">24°</span>
                      <CloudRain className="w-6 h-6 text-sky-600 animate-pulse" />
                    </div>
                    <span className="text-[10px] text-slate-500">
                      {language === 'te' ? 'వర్షం సంభావ్యత: 85%' : 'Rain Prob: 85%'}
                    </span>
                  </div>
                </div>
              </div>

              {/* Quick Action Grid (4 icons + View More) */}
              <div className="bg-white border border-slate-200/70 rounded-2xl p-3.5 shadow-sm">
                <div className="grid grid-cols-4 gap-2 text-center">
                  {/* 1. Verify Products */}
                  <button
                    onClick={onOpenVerify}
                    className="flex flex-col items-center group p-1.5 rounded-xl hover:bg-emerald-50/50 transition-colors"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center justify-center mb-1.5 group-hover:scale-105 transition-transform shadow-xs">
                      <QrCode className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] sm:text-[11px] font-bold text-slate-800 leading-tight">
                      {t.verifyProducts}
                    </span>
                  </button>

                  {/* 2. Fertilizer Advice */}
                  <button
                    onClick={onOpenFertilizer}
                    className="flex flex-col items-center group p-1.5 rounded-xl hover:bg-amber-50/50 transition-colors"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-700 border border-amber-200 flex items-center justify-center mb-1.5 group-hover:scale-105 transition-transform shadow-xs">
                      <Sprout className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] sm:text-[11px] font-bold text-slate-800 leading-tight">
                      {t.fertilizerAdvice}
                    </span>
                  </button>

                  {/* 3. Agri Store */}
                  <button
                    onClick={onOpenProducts}
                    className="flex flex-col items-center group p-1.5 rounded-xl hover:bg-blue-50/50 transition-colors"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-700 border border-blue-200 flex items-center justify-center mb-1.5 group-hover:scale-105 transition-transform shadow-xs">
                      <ShoppingBag className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] sm:text-[11px] font-bold text-slate-800 leading-tight">
                      {t.agriProducts}
                    </span>
                  </button>

                  {/* 4. Crop Doctor */}
                  <button
                    onClick={onOpenCropDoctor}
                    className="flex flex-col items-center group p-1.5 rounded-xl hover:bg-emerald-50/50 transition-colors"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-800 border border-emerald-300 flex items-center justify-center mb-1.5 group-hover:scale-105 transition-transform shadow-xs">
                      <Stethoscope className="w-6 h-6 text-emerald-700" />
                    </div>
                    <span className="text-[10px] sm:text-[11px] font-bold text-slate-800 leading-tight">
                      {t.cropDoctor}
                    </span>
                  </button>
                </div>

                {/* Expandable "View More ⌵" */}
                <div className="mt-2 pt-2 border-t border-slate-100">
                  <button
                    onClick={() => setShowMoreActions(!showMoreActions)}
                    className="w-full flex items-center justify-center gap-1 text-[11px] font-bold text-emerald-800 hover:text-emerald-900 py-1"
                  >
                    <span>
                      {showMoreActions
                        ? language === 'te'
                          ? 'తక్కువ చూపించండి'
                          : 'View Less'
                        : language === 'te'
                        ? 'మరిన్ని చూడండి'
                        : 'View More'}
                    </span>
                    {showMoreActions ? (
                      <ChevronUp className="w-3.5 h-3.5" />
                    ) : (
                      <ChevronDown className="w-3.5 h-3.5" />
                    )}
                  </button>

                  {showMoreActions && (
                    <div className="grid grid-cols-4 gap-2 pt-3 border-t border-slate-100 text-center animate-in fade-in duration-200">
                      <button
                        onClick={() => onNavigatePage('assistant')}
                        className="flex flex-col items-center p-1 rounded-xl hover:bg-slate-50 transition-colors"
                      >
                        <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-700 border border-purple-200 flex items-center justify-center mb-1">
                          <ShieldAlert className="w-5 h-5" />
                        </div>
                        <span className="text-[10px] font-medium text-slate-700 leading-tight">
                          {language === 'te' ? 'పీఎంఎఫ్బీవై బీమా' : 'PMFBY Insurance'}
                        </span>
                      </button>

                      <button
                        onClick={() => onNavigatePage('market')}
                        className="flex flex-col items-center p-1 rounded-xl hover:bg-slate-50 transition-colors"
                      >
                        <div className="w-10 h-10 rounded-xl bg-orange-50 text-orange-700 border border-orange-200 flex items-center justify-center mb-1">
                          <TrendingUp className="w-5 h-5" />
                        </div>
                        <span className="text-[10px] font-medium text-slate-700 leading-tight">
                          {t.mandiPrices}
                        </span>
                      </button>

                      <button
                        onClick={() => onNavigatePage('soil')}
                        className="flex flex-col items-center p-1 rounded-xl hover:bg-slate-50 transition-colors"
                      >
                        <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-700 border border-teal-200 flex items-center justify-center mb-1">
                          <FlaskConical className="w-5 h-5" />
                        </div>
                        <span className="text-[10px] font-medium text-slate-700 leading-tight">
                          {language === 'te' ? 'భూసార పరీక్ష' : 'Soil Test'}
                        </span>
                      </button>

                      <button
                        onClick={() => onNavigatePage('weather')}
                        className="flex flex-col items-center p-1 rounded-xl hover:bg-slate-50 transition-colors"
                      >
                        <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-700 border border-sky-200 flex items-center justify-center mb-1">
                          <Wind className="w-5 h-5" />
                        </div>
                        <span className="text-[10px] font-medium text-slate-700 leading-tight">
                          {language === 'te' ? 'పిచికారీ ప్లాన్' : 'Spray Plan'}
                        </span>
                      </button>
                    </div>
                  )}
                </div>
              </div>

              {/* Section: "Videos for you" (Reels / Shorts) */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="text-xs font-bold text-slate-900 tracking-tight">
                    {t.videosForYou}
                  </h3>
                  <span className="text-[10px] text-emerald-700 font-bold cursor-pointer hover:underline">
                    {t.seeAll}
                  </span>
                </div>

                {/* Horizontal Video Reels Scroll */}
                <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-none snap-x">
                  {VIDEO_REELS.map((vid) => {
                    const title =
                      language === 'te'
                        ? vid.titleTe
                        : language === 'hi'
                        ? vid.titleHi
                        : vid.title;

                    return (
                      <div
                        key={vid.id}
                        onClick={() => onOpenVideo(vid)}
                        className="cursor-pointer shrink-0 w-36 rounded-2xl bg-white border border-slate-200/80 overflow-hidden shadow-sm hover:shadow-md transition-all group snap-start"
                      >
                        <div className="relative aspect-[3/4] bg-slate-900 overflow-hidden">
                          <img
                            src={vid.thumbnail}
                            alt={vid.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />

                          {/* Play Button Icon Overlay */}
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-10 h-10 rounded-full bg-white/95 text-emerald-800 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                              <Play className="w-4 h-4 ml-0.5 fill-current" />
                            </div>
                          </div>

                          {/* Video Tag / Duration */}
                          <span className="absolute bottom-2 left-2 right-2 text-[10px] font-bold text-white line-clamp-2 leading-tight drop-shadow">
                            {title}
                          </span>
                        </div>

                        <div className="p-2 text-[10px] flex items-center justify-between text-slate-500 font-medium">
                          <span>{vid.duration}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Farm Quick Status Pill */}
              <div className="bg-emerald-800 text-white rounded-2xl p-3.5 shadow-sm flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-wider text-emerald-200 block">
                    {t.registeredCrop}
                  </span>
                  <b className="text-sm font-bold">
                    {farmer.crop} · {farmer.area} {language === 'te' ? 'ఎకరాలు' : 'Acres'}
                  </b>
                  <p className="text-[10px] text-emerald-200 mt-0.5">
                    {language === 'te' ? 'పంట దశ: పిలకల పెరుగుదల' : 'Field stage: Vegetative tillering'}
                  </p>
                </div>
                <button
                  onClick={() => onNavigatePage('assistant')}
                  className="text-xs bg-white text-emerald-900 font-bold px-3 py-1.5 rounded-xl hover:bg-emerald-50 transition-colors shadow-sm"
                >
                  {language === 'te' ? 'AI ఏజెంట్‌ను అడగండి →' : 'Ask AI Agent →'}
                </button>
              </div>
            </>
          ) : (
            <div className="space-y-3.5">
              {/* Subpage Mobile Top Header */}
              <div className="flex items-center justify-between pt-1 pb-2 border-b border-slate-200">
                <button
                  onClick={() => onNavigatePage('dashboard')}
                  className="flex items-center gap-1 text-xs font-bold text-emerald-800 bg-emerald-100 hover:bg-emerald-200 px-2.5 py-1.5 rounded-xl transition-colors shadow-xs"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>{language === 'te' ? 'వెనుకకు' : language === 'hi' ? 'वापस' : 'Back'}</span>
                </button>
                <span className="text-xs font-extrabold text-slate-800 truncate max-w-[200px]">
                  {activePage === 'market' && (language === 'te' ? 'మండి ధరలు' : 'Mandi Market Prices')}
                  {activePage === 'assistant' && (language === 'te' ? 'AI అసిస్టెంట్' : 'AI Specialist Agents')}
                  {activePage === 'weather' && (language === 'te' ? 'వాతావరణం & పిచికారీ' : 'Weather & Spray Forecast')}
                  {activePage === 'soil' && (language === 'te' ? 'భూసార పరీక్ష' : 'Soil Nutrients Advisor')}
                  {activePage === 'farm' && (language === 'te' ? 'నా వ్యవసాయ ప్రొఫైల్' : 'My Farm Profile')}
                </span>
                <div className="w-8" />
              </div>

              {/* Render Selected View inside mobile container */}
              {activePage === 'weather' && (
                <WeatherView
                  farmer={farmer}
                  language={language}
                  onUpdateLocation={(loc) => onUpdateProfile({ location: loc })}
                />
              )}

              {activePage === 'soil' && (
                <SoilView
                  farmer={farmer}
                  language={language}
                  onOpenFertilizerAdvice={onOpenFertilizer}
                  onRewardCoins={onRewardCoins}
                />
              )}

              {activePage === 'market' && (
                <MarketView
                  language={language}
                  onRewardCoins={onRewardCoins}
                />
              )}

              {activePage === 'assistant' && (
                <AssistantView
                  farmer={farmer}
                  language={language}
                  onRewardCoins={onRewardCoins}
                />
              )}

              {activePage === 'farm' && (
                <FarmProfileView
                  farmer={farmer}
                  language={language}
                  onUpdateProfile={onUpdateProfile}
                  onRewardCoins={onRewardCoins}
                />
              )}
            </div>
          )}
        </div>

        {/* Bottom App Navigation Bar */}
        <div className="absolute bottom-0 inset-x-0 bg-white/95 backdrop-blur-md border-t border-slate-200 px-3 py-2 flex items-center justify-around z-20">
          <button
            onClick={() => onNavigatePage('dashboard')}
            className={`flex flex-col items-center text-[10px] transition-colors ${
              activePage === 'dashboard'
                ? 'text-emerald-800 font-extrabold'
                : 'text-slate-500 hover:text-emerald-800'
            }`}
          >
            <Home className="w-5 h-5 mb-0.5" />
            <span>{t.overview}</span>
          </button>

          <button
            onClick={onOpenCropDoctor}
            className="flex flex-col items-center text-slate-500 hover:text-emerald-800 text-[10px] transition-colors"
          >
            <Stethoscope className="w-5 h-5 mb-0.5" />
            <span>{t.cropDoctor}</span>
          </button>

          <button
            onClick={() => onNavigatePage('market')}
            className={`flex flex-col items-center text-[10px] transition-colors ${
              activePage === 'market'
                ? 'text-emerald-800 font-extrabold'
                : 'text-slate-500 hover:text-emerald-800'
            }`}
          >
            <TrendingUp className="w-5 h-5 mb-0.5" />
            <span>{language === 'te' ? 'ధరలు' : 'Mandi'}</span>
          </button>

          <button
            onClick={() => onNavigatePage('assistant')}
            className={`flex flex-col items-center text-[10px] transition-colors ${
              activePage === 'assistant'
                ? 'text-emerald-800 font-extrabold'
                : 'text-slate-500 hover:text-emerald-800'
            }`}
          >
            <MessageSquare className="w-5 h-5 mb-0.5" />
            <span>{t.aiAgents}</span>
          </button>

          <button
            onClick={() => onNavigatePage('farm')}
            className={`flex flex-col items-center text-[10px] transition-colors ${
              activePage === 'farm'
                ? 'text-emerald-800 font-extrabold'
                : 'text-slate-500 hover:text-emerald-800'
            }`}
          >
            <User className="w-5 h-5 mb-0.5" />
            <span>{t.myFarm}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
