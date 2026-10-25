import React from 'react';
import { ActivePage, FarmerProfile, Language } from '../types';
import { I18N } from '../data/translations';
import { Smartphone, Monitor, Globe, Download, HelpCircle, LogOut } from 'lucide-react';

interface HeaderProps {
  farmer: FarmerProfile;
  activePage: ActivePage;
  onNavigate: (page: ActivePage) => void;
  viewMode: 'desktop' | 'mobile';
  onToggleViewMode: () => void;
  language: Language;
  onLanguageChange: (lang: Language) => void;
  onOpenShareGuide: () => void;
  onLogout?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  farmer,
  activePage,
  onNavigate,
  viewMode,
  onToggleViewMode,
  language,
  onLanguageChange,
  onOpenShareGuide,
  onLogout,
}) => {
  const t = I18N[language] || I18N.en;

  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-slate-200/80 px-4 lg:px-8 py-3.5 flex items-center justify-between gap-4">
      {/* Zone 1: Brand Wordmark */}
      <div className="flex items-center gap-3 shrink-0">
        <button
          onClick={() => onNavigate('dashboard')}
          className="flex items-center gap-2.5 text-left focus:outline-none"
        >
          <div className="w-9 h-9 rounded-xl bg-[#1b6243] text-white flex items-center justify-center font-bold text-lg shadow-sm">
            ✿
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-base tracking-tight text-[#14422e]">
              AgriSathi
            </span>
            <span className="text-[10px] text-slate-500 font-medium">
              {t.subTitle}
            </span>
          </div>
        </button>
      </div>

      {/* Zone 2: Navigation Links (Desktop) */}
      <nav className="hidden xl:flex items-center gap-6 text-xs font-semibold text-slate-600">
        <button
          onClick={() => onNavigate('dashboard')}
          className={`hover:text-[#1b6243] transition-colors whitespace-nowrap shrink-0 ${
            activePage === 'dashboard' ? 'text-[#1b6243] font-bold' : ''
          }`}
        >
          {t.overview}
        </button>
        <button
          onClick={() => onNavigate('disease')}
          className={`hover:text-[#1b6243] transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5 ${
            activePage === 'disease' ? 'text-[#1b6243] font-bold' : ''
          }`}
        >
          {t.cropDoctor}
          <span className="text-[9px] bg-emerald-100 text-emerald-800 px-1.5 py-0.2 rounded font-bold">
            AI
          </span>
        </button>
        <button
          onClick={() => onNavigate('fertilizer')}
          className={`hover:text-[#1b6243] transition-colors whitespace-nowrap shrink-0 ${
            activePage === 'fertilizer' ? 'text-[#1b6243] font-bold' : ''
          }`}
        >
          {t.fertilizerAdvice}
        </button>
        <button
          onClick={() => onNavigate('weather')}
          className={`hover:text-[#1b6243] transition-colors whitespace-nowrap shrink-0 ${
            activePage === 'weather' ? 'text-[#1b6243] font-bold' : ''
          }`}
        >
          {t.weatherPlanner}
        </button>
        <button
          onClick={() => onNavigate('market')}
          className={`hover:text-[#1b6243] transition-colors whitespace-nowrap shrink-0 ${
            activePage === 'market' ? 'text-[#1b6243] font-bold' : ''
          }`}
        >
          {t.mandiPrices}
        </button>
        <button
          onClick={() => onNavigate('assistant')}
          className={`hover:text-[#1b6243] transition-colors whitespace-nowrap shrink-0 flex items-center gap-1 ${
            activePage === 'assistant' ? 'text-[#1b6243] font-bold' : ''
          }`}
        >
          <span>✦</span>
          <span>{t.aiAgents}</span>
        </button>
        <button
          onClick={() => onNavigate('products')}
          className={`hover:text-[#1b6243] transition-colors whitespace-nowrap shrink-0 ${
            activePage === 'products' ? 'text-[#1b6243] font-bold' : ''
          }`}
        >
          {t.agriProducts}
        </button>
      </nav>

      {/* Zone 3: Primary Actions */}
      <div className="flex items-center gap-2.5 shrink-0">
        {/* View Mode Toggle: Mobile Smartphone vs Desktop Portal */}
        <button
          onClick={onToggleViewMode}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold border transition-all ${
            viewMode === 'mobile'
              ? 'bg-emerald-800 text-white border-emerald-900 shadow-sm'
              : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
          }`}
          title="Switch between Smartphone Prototype and Portal Workspace"
        >
          {viewMode === 'mobile' ? (
            <>
              <Monitor className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">{t.switchModeDesktop}</span>
            </>
          ) : (
            <>
              <Smartphone className="w-3.5 h-3.5 text-emerald-600" />
              <span className="hidden sm:inline">{t.switchModeMobile}</span>
            </>
          )}
        </button>

        {/* Multilingual Selector: English, Hindi, Telugu, Kannada */}
        <div className="relative flex items-center bg-slate-100 rounded-xl px-2 py-1 text-xs border border-slate-200">
          <Globe className="w-3.5 h-3.5 text-slate-500 mr-1.5 shrink-0" />
          <select
            value={language}
            onChange={(e) => onLanguageChange(e.target.value as Language)}
            className="bg-transparent text-xs font-semibold text-slate-800 focus:outline-none cursor-pointer pr-1"
          >
            <option value="en">English</option>
            <option value="hi">हिन्दी (Hindi)</option>
            <option value="te">తెలుగు (Telugu)</option>
            <option value="kn">ಕನ್ನಡ (Kannada)</option>
          </select>
        </div>

        {/* Download Project ZIP directly */}
        <a
          href="/agrisathi-project.zip"
          download="AgriSathi_Full_Source_Code.zip"
          className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-xl text-xs font-bold bg-white text-slate-700 border border-slate-200 hover:border-emerald-500 hover:text-emerald-700 hover:bg-slate-50 transition-colors shadow-xs"
          title="Download full project source code as a ZIP file"
        >
          <Download className="w-3.5 h-3.5 text-emerald-700" />
          <span className="hidden sm:inline">{language === 'te' ? 'ప్రాజెక్ట్ ZIP' : 'Download ZIP'}</span>
          <span className="sm:hidden text-[10px]">ZIP</span>
        </a>

        {/* Phone & Local Setup Guide (fixes 403) */}
        <button
          onClick={onOpenShareGuide}
          className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl text-xs font-bold bg-emerald-50 text-emerald-800 border border-emerald-300 hover:bg-emerald-100 transition-colors shadow-xs"
          title="Phone access & 403 fix guide"
        >
          <HelpCircle className="w-3.5 h-3.5 text-emerald-700" />
          <span className="hidden sm:inline">{language === 'te' ? 'ఫోన్ / PC గైడ్' : 'Phone / PC Guide'}</span>
        </button>

        {/* AgriCoins Balance */}
        <div
          onClick={() => onNavigate('farm')}
          className="cursor-pointer flex items-center gap-1.5 bg-amber-50 text-amber-900 border border-amber-300 px-2.5 py-1.5 rounded-xl text-xs font-black shadow-xs hover:bg-amber-100 transition-colors"
          title="Your earned AgriCoins reward balance"
        >
          <span>🪙</span>
          <span className="tabular-nums">{farmer.agriCoins}</span>
        </div>

        {/* Farmer Avatar */}
        <button
          onClick={() => onNavigate('farm')}
          className="w-8 h-8 rounded-full bg-[#1b6243]/15 text-[#1b6243] border border-[#1b6243]/30 font-bold text-xs flex items-center justify-center hover:bg-[#1b6243] hover:text-white transition-colors"
          title="My Farm Profile"
        >
          {farmer.name.slice(0, 1).toUpperCase()}
        </button>

        {/* Logout Button */}
        {onLogout && (
          <button
            onClick={onLogout}
            className="flex items-center gap-1 text-[11px] font-bold text-slate-500 hover:text-rose-700 bg-slate-100 hover:bg-rose-50 px-2 py-1.5 rounded-xl border border-slate-200 hover:border-rose-200 transition-colors ml-0.5"
            title={language === 'te' ? 'లాగ్ అవుట్' : 'Sign Out to Login Screen'}
          >
            <LogOut className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">{language === 'te' ? 'లాగ్ అవుట్' : 'Logout'}</span>
          </button>
        )}
      </div>
    </header>
  );
};
