import React from 'react';
import { Language } from '../types';
import { X, Download, Smartphone, Laptop, AlertTriangle, CheckCircle2, ExternalLink, Terminal } from 'lucide-react';

interface ShareGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: Language;
}

export const ShareGuideModal: React.FC<ShareGuideModalProps> = ({
  isOpen,
  onClose,
  language,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200">
        {/* Header */}
        <div className="sticky top-0 bg-white/95 backdrop-blur-md px-6 py-4 border-b border-slate-100 flex items-center justify-between z-10">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-sm">
              📱
            </div>
            <div>
              <h2 className="text-base font-extrabold text-slate-900">
                {language === 'te'
                  ? 'మొబైల్ ఫోన్ & లోకల్ PC రన్ గైడ్ (403 ఎర్రర్ పరిష్కారం)'
                  : 'Mobile Phone & Local PC Setup Guide (403 Fix)'}
              </h2>
              <p className="text-xs text-slate-500">
                {language === 'te'
                  ? 'మీ ఫోన్‌లో లేదా PC లో అప్లికేషన్‌ను ఎలా ప్రారంభించాలో దశలవారీ మార్గదర్శకం'
                  : 'Step-by-step instructions to run locally or access on your smartphone'}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-600 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 space-y-6">
          {/* 403 Error explanation banner */}
          <div className="bg-amber-50 border-l-4 border-amber-500 rounded-xl p-4 flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <div className="text-xs space-y-1">
              <p className="font-bold text-amber-900">
                {language === 'te'
                  ? 'ఫోన్‌లో 403 ఎర్రర్ ("You do not have access to this page") ఎందుకు వచ్చింది?'
                  : 'Why did the 403 error ("You do not have access to this page") occur on your phone?'}
              </p>
              <p className="text-amber-800 leading-relaxed">
                {language === 'te'
                  ? 'మీరు ఫోన్‌లో తెరిచిన లింక్ (aistudio.google.com/...) గూగుల్ డెవలపర్ వర్క్‌స్పేస్ లింక్. ఇది మీ కంప్యూటర్ గూగుల్ లాగిన్‌కు మాత్రమే పరిమితం. పబ్లిక్ ఫోన్లలో ఇది అనుమతించబడదు.'
                  : 'You opened the private developer workspace link (aistudio.google.com) on your mobile browser. That internal workspace URL requires your developer Google login session and cannot be opened directly on phones without publishing.'}
              </p>
            </div>
          </div>

          {/* Solution 1: Download & Run on Local PC */}
          <div className="bg-emerald-50/60 border border-emerald-200 rounded-2xl p-5 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Laptop className="w-5 h-5 text-emerald-700" />
                <h3 className="text-sm font-bold text-slate-900">
                  {language === 'te'
                    ? 'విధానం 1: మీ కంప్యూటర్‌లో రన్ చేయడం (అత్యంత వేగవంతమైనది)'
                    : 'Method 1: Run on Your Local PC (Fastest & 100% Offline)'}
                </h3>
              </div>
              <span className="text-[10px] bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded-full">
                {language === 'te' ? 'సిఫార్సు చేయబడింది' : 'Recommended'}
              </span>
            </div>

            <p className="text-xs text-slate-600">
              {language === 'te'
                ? 'మేము అన్ని ఫైల్‌లను (React, TypeScript, మోడల్స్, ఇమేజెస్) ఒకే ZIP ఫైల్‌గా ప్యాక్ చేసాము.'
                : 'We have packaged the complete source code, models, audio, and configuration into a single clean ZIP archive.'}
            </p>

            {/* Direct Download Button */}
            <div className="pt-1">
              <a
                href="/agrisathi-project.zip"
                download="AgriSathi_Full_Source_Code.zip"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#1b6243] hover:bg-[#144b33] text-white text-xs font-bold px-5 py-2.5 rounded-xl transition-colors shadow-sm"
              >
                <Download className="w-4 h-4" />
                {language === 'te'
                  ? 'పూర్తి ప్రాజెక్ట్ ZIP డౌన్‌లోడ్ చేసుకోండి (5.2 MB)'
                  : 'Download Complete Project ZIP (5.2 MB)'}
              </a>
            </div>

            {/* Steps to run locally */}
            <div className="bg-slate-900 text-slate-200 rounded-xl p-4 space-y-2 font-mono text-[11px]">
              <div className="flex items-center gap-2 text-slate-400 font-sans text-xs font-bold pb-1 border-b border-slate-800">
                <Terminal className="w-3.5 h-3.5 text-emerald-400" />
                <span>{language === 'te' ? 'PC లో రన్ చేయడానికి 3 కమాండ్లు:' : '3 Commands to Run on PC:'}</span>
              </div>
              <p className="text-slate-400 font-sans text-[11px]">
                {language === 'te' ? '1. ZIP ఫైల్ అన్‌జిప్ చేసి, టెర్మినల్ తెరవండి:' : '1. Unzip the downloaded file and open terminal in the folder:'}
              </p>
              <div className="bg-black/50 p-2 rounded text-emerald-400">
                npm install
              </div>
              <p className="text-slate-400 font-sans text-[11px] pt-1">
                {language === 'te' ? '2. డెవలప్‌మెంట్ సర్వర్‌ను ప్రారంభించండి:' : '2. Start local server:'}
              </p>
              <div className="bg-black/50 p-2 rounded text-emerald-400">
                npm run dev
              </div>
              <p className="text-slate-400 font-sans text-[11px] pt-1">
                {language === 'te' ? '3. బ్రౌజర్‌లో ఓపెన్ చేయండి:' : '3. Open in your browser:'}
              </p>
              <div className="bg-black/50 p-2 rounded text-amber-300">
                http://localhost:3000
              </div>
            </div>

            {/* Local Wi-Fi phone access tip */}
            <div className="text-[11px] text-slate-600 bg-white border border-slate-200 rounded-xl p-3">
              <span className="font-bold text-slate-800">
                {language === 'te' ? '💡 మీ ఫోన్‌లో అదే Wi-Fi ద్వారా చూడటానికి:' : '💡 To view on your phone via local Wi-Fi:'}
              </span>
              <p className="mt-1">
                {language === 'te'
                  ? 'కమాండ్ ప్రాంప్ట్‌లో `npm run dev -- --host` అని టైప్ చేయండి. మీ కంప్యూటర్ IP చిరునామా (ఉదా: http://192.168.1.15:3000) మీ ఫోన్ బ్రౌజర్‌లో టైప్ చేస్తే వెంటనే ఓపెన్ అవుతుంది!'
                  : 'Run `npm run dev -- --host` in your terminal. You can then open `http://<YOUR-PC-IP>:3000` on your phone browser connected to the same Wi-Fi!'}
              </p>
            </div>
          </div>

          {/* Solution 2: Public Cloud Hosting via Publish button */}
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 space-y-3">
            <div className="flex items-center gap-2">
              <Smartphone className="w-5 h-5 text-blue-600" />
              <h3 className="text-sm font-bold text-slate-900">
                {language === 'te'
                  ? 'విధానం 2: Google AI Studio లో "Publish" బటన్ నొక్కండి'
                  : 'Method 2: Click the "Publish" Button in Google AI Studio'}
              </h3>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed">
              {language === 'te'
                ? 'మీ కంప్యూటర్‌లోని AI Studio విండోలో కుడివైపు ఎగువన ఉన్న "Publish" (లేదా "Share") బటన్‌ను క్లిక్ చేయండి. అది మీకు నేరుగా ఏ ఫోన్‌లోనైనా 403 ఎర్రర్ లేకుండా పనిచేసే పబ్లిక్ వెబ్ లింక్‌ను ఇస్తుంది.'
                : 'In your desktop AI Studio window at the top-right corner, click the "Publish" button. This will generate a public link that can be shared with anyone and accessed on any smartphone directly without requiring login.'}
            </p>

            <div className="flex items-center gap-2 text-xs font-semibold text-blue-700 bg-blue-50 border border-blue-200 rounded-xl p-3">
              <CheckCircle2 className="w-4 h-4 shrink-0 text-blue-600" />
              <span>
                {language === 'te'
                  ? 'పబ్లిష్ చేసిన లింక్ WhatsApp లేదా ఫోన్ Chrome లో నేరుగా పనిచేస్తుంది!'
                  : 'Published links open seamlessly on WhatsApp, Chrome, or any mobile browser without 403 errors!'}
              </span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-slate-50 px-6 py-4 border-t border-slate-200 flex items-center justify-between">
          <span className="text-xs text-slate-500 font-medium">
            AgriSathi
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-slate-800 hover:bg-slate-900 text-white text-xs font-bold rounded-xl transition-colors"
          >
            {language === 'te' ? 'మూసివేయి' : 'Close'}
          </button>
        </div>
      </div>
    </div>
  );
};
