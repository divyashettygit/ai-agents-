import React from 'react';
import { FarmerProfile, Language, VideoReel } from '../types';
import { VIDEO_REELS } from '../data/mockData';
import { I18N } from '../data/translations';
import {
  Stethoscope,
  Sprout,
  QrCode,
  TrendingUp,
  CloudSun,
  ShieldCheck,
  ArrowUpRight,
  Play,
  Award,
} from 'lucide-react';

interface DashboardViewProps {
  farmer: FarmerProfile;
  language: Language;
  onOpenCropDoctor: () => void;
  onOpenFertilizer: () => void;
  onOpenVerify: () => void;
  onOpenVideo: (video: VideoReel) => void;
  onNavigate: (page: any) => void;
  checklist: boolean[];
  onToggleTask: (index: number) => void;
}

export const DashboardView: React.FC<DashboardViewProps> = ({
  farmer,
  language,
  onOpenCropDoctor,
  onOpenFertilizer,
  onOpenVerify,
  onOpenVideo,
  onNavigate,
  checklist,
  onToggleTask,
}) => {
  const t = I18N[language];
  const completedTasks = checklist.filter(Boolean).length;

  return (
    <div className="space-y-6">
      {/* Hero Section */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#174e35] via-[#226744] to-[#2c7d54] text-white p-7 lg:p-9 shadow-lg">
        <div className="relative z-10 max-w-2xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 text-emerald-100 text-xs font-semibold backdrop-blur-xs">
            <span>✿</span>
            <span>{t.smartFarming} · AI Multi-Agent Ecosystem</span>
          </div>

          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white leading-tight">
            {t.heroTitle}, {farmer.name}! <br />
            <span className="text-emerald-200 font-semibold">{t.heroSub}</span>
          </h1>

          <p className="text-xs sm:text-sm text-emerald-100/90 leading-relaxed max-w-xl">
            {t.heroDesc}
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-3">
            <button
              onClick={() => onNavigate('assistant')}
              className="bg-white text-[#164932] hover:bg-emerald-50 px-4 py-2.5 rounded-xl font-bold text-xs shadow-md transition-all flex items-center gap-2"
            >
              <span>✦</span>
              <span>{t.askAgriSathi}</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>

            <button
              onClick={onOpenCropDoctor}
              className="bg-white/20 hover:bg-white/30 text-white border border-white/30 px-4 py-2.5 rounded-xl font-semibold text-xs backdrop-blur-xs transition-all flex items-center gap-2"
            >
              <Stethoscope className="w-3.5 h-3.5 text-emerald-300" />
              <span>{t.diagnoseLeafBtn}</span>
            </button>
          </div>
        </div>

        {/* Ambient Farm Badge */}
        <div className="hidden lg:block absolute right-8 bottom-8 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 text-xs space-y-1">
          <span className="text-emerald-200 font-semibold block text-[11px]">{t.activeFarmBadge}</span>
          <b className="text-sm font-bold text-white block">
            {farmer.crop} · {farmer.area} {language === 'te' ? 'ఎకరాలు' : 'Acres'}
          </b>
          <span className="text-emerald-100 block">{farmer.location}</span>
          <div className="pt-1 flex items-center gap-1.5 text-amber-300 font-bold text-[11px]">
            <span>🪙 {farmer.agriCoins} {t.agriCoins}</span>
          </div>
        </div>
      </div>

      {/* Farm Snapshot 4-Card Strip */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5">
        <div
          onClick={() => onNavigate('weather')}
          className="cursor-pointer bg-white border border-slate-200/90 rounded-2xl p-4 shadow-xs hover:border-emerald-300 transition-colors"
        >
          <div className="flex items-center justify-between text-slate-500 text-xs mb-2">
            <span className="font-bold">{t.localWeather}</span>
            <div className="w-8 h-8 rounded-lg bg-sky-50 text-sky-700 flex items-center justify-center">
              <CloudSun className="w-4 h-4" />
            </div>
          </div>
          <b className="text-2xl font-black text-slate-800 tabular-nums">29°C</b>
          <p className="text-[11px] text-slate-500 mt-0.5">
            {language === 'te' ? 'పాక్షిక ఎండ · వర్షం 20%' : 'Partly sunny · Rain prob 20%'}
          </p>
        </div>

        <div
          onClick={() => onNavigate('farm')}
          className="cursor-pointer bg-white border border-slate-200/90 rounded-2xl p-4 shadow-xs hover:border-emerald-300 transition-colors"
        >
          <div className="flex items-center justify-between text-slate-500 text-xs mb-2">
            <span className="font-bold">{t.registeredCrop}</span>
            <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center">
              <Sprout className="w-4 h-4" />
            </div>
          </div>
          <b className="text-2xl font-black text-emerald-800">{farmer.crop}</b>
          <p className="text-[11px] text-slate-500 mt-0.5">
            {farmer.area} {language === 'te' ? 'ఎకరాలు · పెరుగుదల దశ' : 'Acres · Vegetative'}
          </p>
        </div>

        <div
          onClick={() => onNavigate('market')}
          className="cursor-pointer bg-white border border-slate-200/90 rounded-2xl p-4 shadow-xs hover:border-emerald-300 transition-colors"
        >
          <div className="flex items-center justify-between text-slate-500 text-xs mb-2">
            <span className="font-bold">{t.mandiBenchmark}</span>
            <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-700 flex items-center justify-center">
              <TrendingUp className="w-4 h-4" />
            </div>
          </div>
          <b className="text-2xl font-black text-slate-800 tabular-nums">₹2,450</b>
          <p className="text-[11px] text-emerald-700 font-semibold mt-0.5">
            {language === 'te' ? '↑ 1.8% క్రితం వారం కంటే' : '↑ 1.8% vs last week'}
          </p>
        </div>

        <div className="bg-white border border-slate-200/90 rounded-2xl p-4 shadow-xs">
          <div className="flex items-center justify-between text-slate-500 text-xs mb-2">
            <span className="font-bold">{t.tasksCompleted}</span>
            <div className="w-8 h-8 rounded-lg bg-purple-50 text-purple-700 flex items-center justify-center">
              <Award className="w-4 h-4" />
            </div>
          </div>
          <b className="text-2xl font-black text-purple-900 tabular-nums">
            {completedTasks} / 4
          </b>
          <p className="text-[11px] text-slate-500 mt-0.5">{t.dailyChecks}</p>
        </div>
      </div>

      {/* Main 2-Column Split: Action Grid & Daily Checklist */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Core Quick Services (7 Cols) */}
        <div className="lg:col-span-7 space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-base font-bold text-slate-900">{t.whatToDo}</h2>
              <p className="text-xs text-slate-500">{t.whatToDoSub}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {/* 1. Crop Doctor */}
            <button
              onClick={onOpenCropDoctor}
              className="text-left bg-white border border-slate-200 rounded-2xl p-4 hover:border-emerald-400 hover:shadow-md transition-all group relative"
            >
              <div className="w-10 h-10 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                <Stethoscope className="w-5 h-5" />
              </div>
              <b className="text-sm font-bold text-slate-900 block group-hover:text-emerald-800 transition-colors">
                {t.cropDoctor}
              </b>
              <p className="text-xs text-slate-500 mt-1">
                {language === 'te'
                  ? 'ఆకు ఫోటోను అప్‌లోడ్ చేసి AI ద్వారా తెగుళ్లు, సేంద్రీయ మరియు రసాయన నివారణలు పొందండి.'
                  : 'Upload leaf photo for AI pathogen classification, organic & chemical remedies.'}
              </p>
              <ArrowUpRight className="w-4 h-4 text-emerald-700 absolute right-4 bottom-4" />
            </button>

            {/* 2. Fertilizer Advice */}
            <button
              onClick={onOpenFertilizer}
              className="text-left bg-white border border-slate-200 rounded-2xl p-4 hover:border-amber-400 hover:shadow-md transition-all group relative"
            >
              <div className="w-10 h-10 rounded-2xl bg-amber-100 text-amber-800 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                <Sprout className="w-5 h-5" />
              </div>
              <b className="text-sm font-bold text-slate-900 block group-hover:text-amber-800 transition-colors">
                {t.fertilizerAdvice}
              </b>
              <p className="text-xs text-slate-500 mt-1">
                {language === 'te'
                  ? 'నేల pH మరియు పంట దశకు తగినట్లుగా యూరియా, డీఏపీ, పొటాష్ బస్తాల సంఖ్యను లెక్కించండి.'
                  : 'Calculate precise bags of Urea, DAP, and MOP tailored to soil pH and crop stage.'}
              </p>
              <ArrowUpRight className="w-4 h-4 text-amber-700 absolute right-4 bottom-4" />
            </button>

            {/* 3. Verify Products */}
            <button
              onClick={onOpenVerify}
              className="text-left bg-white border border-slate-200 rounded-2xl p-4 hover:border-blue-400 hover:shadow-md transition-all group relative"
            >
              <div className="w-10 h-10 rounded-2xl bg-blue-100 text-blue-800 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                <QrCode className="w-5 h-5" />
              </div>
              <b className="text-sm font-bold text-slate-900 block group-hover:text-blue-800 transition-colors">
                {t.verifyProducts}
              </b>
              <p className="text-xs text-slate-500 mt-1">
                {language === 'te'
                  ? 'నకిలీ పురుగుమందులను అరికట్టడానికి CIBRC రిజిస్ట్రేషన్ బ్యాచ్ కోడ్‌ను ధృవీకరించండి.'
                  : 'Verify batch authenticity and CIBRC registrations to stop counterfeit agrochemicals.'}
              </p>
              <ArrowUpRight className="w-4 h-4 text-blue-700 absolute right-4 bottom-4" />
            </button>

            {/* 4. Mandi Rates */}
            <button
              onClick={() => onNavigate('market')}
              className="text-left bg-white border border-slate-200 rounded-2xl p-4 hover:border-orange-400 hover:shadow-md transition-all group relative"
            >
              <div className="w-10 h-10 rounded-2xl bg-orange-100 text-orange-800 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                <TrendingUp className="w-5 h-5" />
              </div>
              <b className="text-sm font-bold text-slate-900 block group-hover:text-orange-800 transition-colors">
                {t.mandiPrices}
              </b>
              <p className="text-xs text-slate-500 mt-1">
                {language === 'te'
                  ? 'సమీప APMC మార్కెట్ల తాజా ధరలు, రాబడులు మరియు CSV డేటాను డౌన్‌లోడ్ చేసుకోండి.'
                  : 'Live prices from nearby APMC markets, arrival trends, and CSV dataset export.'}
              </p>
              <ArrowUpRight className="w-4 h-4 text-orange-700 absolute right-4 bottom-4" />
            </button>
          </div>

          {/* Section: "Videos for you" (from screenshot & YouTube Shorts) */}
          <div className="pt-2">
            <div className="flex items-center justify-between mb-3">
              <div>
                <h3 className="text-sm font-bold text-slate-900">{t.videosForYou}</h3>
                <p className="text-xs text-slate-500">{t.videosForYouSub}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {VIDEO_REELS.map((vid) => {
                const title =
                  language === 'te'
                    ? vid.titleTe
                    : language === 'hi'
                    ? vid.titleHi
                    : vid.title;

                const category =
                  language === 'te'
                    ? vid.categoryTe || vid.category
                    : vid.category;

                return (
                  <div
                    key={vid.id}
                    onClick={() => onOpenVideo(vid)}
                    className="cursor-pointer bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition-all group"
                  >
                    <div className="relative aspect-video bg-slate-900 overflow-hidden">
                      <img
                        src={vid.thumbnail}
                        alt={vid.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-10 h-10 rounded-full bg-white/95 text-emerald-800 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                          <Play className="w-5 h-5 ml-0.5 fill-current" />
                        </div>
                      </div>
                    </div>
                    <div className="p-3">
                      <span className="text-[10px] font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded uppercase">
                        {category}
                      </span>
                      <h4 className="text-xs font-bold text-slate-900 line-clamp-1 mt-1.5">
                        {title}
                      </h4>
                      <div className="flex items-center justify-between text-[10px] text-slate-500 mt-1.5">
                        <span>{vid.duration}</span>
                        <span className="text-amber-600 font-bold">+50 🪙</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Daily Farm Checklist (5 Cols) */}
        <div className="lg:col-span-5 bg-white border border-slate-200 rounded-3xl p-5 shadow-xs flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-3">
              <div>
                <h3 className="text-sm font-bold text-slate-900">{t.dailyChecklist}</h3>
                <p className="text-xs text-slate-500">{t.dailyChecklistSub}</p>
              </div>
              <span className="text-xs font-bold px-2.5 py-1 bg-emerald-50 text-emerald-800 rounded-lg border border-emerald-200">
                {completedTasks}/4 {language === 'te' ? 'పూర్తయింది' : 'Done'}
              </span>
            </div>

            <div className="space-y-2.5">
              {[
                { title: t.check1Title, desc: t.check1Desc },
                { title: t.check2Title, desc: t.check2Desc },
                { title: t.check3Title, desc: t.check3Desc },
                { title: t.check4Title, desc: t.check4Desc },
              ].map((task, idx) => (
                <label
                  key={idx}
                  className={`flex items-start gap-3 p-3 rounded-2xl border transition-colors cursor-pointer ${
                    checklist[idx]
                      ? 'bg-emerald-50/60 border-emerald-200 text-slate-700'
                      : 'bg-slate-50/50 border-slate-200 hover:bg-slate-100/60'
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={checklist[idx]}
                    onChange={() => onToggleTask(idx)}
                    className="mt-1 w-4 h-4 rounded text-emerald-600 focus:ring-emerald-500 accent-emerald-600 cursor-pointer"
                  />
                  <div className="text-xs">
                    <b className={`block ${checklist[idx] ? 'line-through text-slate-400' : 'text-slate-800'}`}>
                      {task.title}
                    </b>
                    <span className="text-[11px] text-slate-500 mt-0.5 block">{task.desc}</span>
                  </div>
                </label>
              ))}
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-slate-100 bg-emerald-50/60 rounded-2xl p-3.5 text-xs text-emerald-950 flex items-start gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
            <div>
              <b className="block">{language === 'te' ? 'జాగ్రత్త గమనిక:' : 'Decision Support Disclaimer:'}</b>
              <p className="mt-0.5 text-[11px] text-emerald-800 leading-relaxed">
                {t.safetyDisclaimer}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
