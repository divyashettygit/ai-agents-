import React, { useState } from 'react';
import { FarmerProfile, Language } from '../types';
import { I18N } from '../data/translations';
import {
  Wind,
  Droplets,
  Sun,
  CloudRain,
  MapPin,
  CheckCircle2,
  AlertTriangle,
} from 'lucide-react';

interface WeatherViewProps {
  farmer: FarmerProfile;
  language: Language;
  onUpdateLocation: (newLocation: string) => void;
}

export const WeatherView: React.FC<WeatherViewProps> = ({
  farmer,
  language,
  onUpdateLocation,
}) => {
  const t = I18N[language];
  const [locationInput, setLocationInput] = useState(farmer.location);
  const [currentTemp, setCurrentTemp] = useState(29);
  const [humidity, setHumidity] = useState(64);
  const [windSpeed, setWindSpeed] = useState(11);
  const [rainChance, setRainChance] = useState(25);

  const forecast = [
    {
      day: language === 'te' ? 'ఈరోజు' : 'Today',
      icon: '⛅',
      max: '29°',
      min: '22°',
      condition: language === 'te' ? 'పాక్షిక ఎండ' : 'Partly sunny',
      rain: '25%',
    },
    {
      day: language === 'te' ? 'రేపు' : 'Tomorrow',
      icon: '🌧️',
      max: '26°',
      min: '21°',
      condition: language === 'te' ? 'చెదురుమదురు వర్షం' : 'Scattered showers',
      rain: '70%',
    },
    {
      day: language === 'te' ? 'శుక్రవారం' : 'Friday',
      icon: '⛈️',
      max: '25°',
      min: '20°',
      condition: language === 'te' ? 'ఉరుములతో కూడిన వర్షం' : 'Thunderstorm',
      rain: '85%',
    },
    {
      day: language === 'te' ? 'శనివారం' : 'Saturday',
      icon: '⛅',
      max: '28°',
      min: '22°',
      condition: language === 'te' ? 'మేఘావృతం' : 'Clearing skies',
      rain: '30%',
    },
    {
      day: language === 'te' ? 'ఆదివారం' : 'Sunday',
      icon: '☀️',
      max: '31°',
      min: '23°',
      condition: language === 'te' ? 'పొడి వాతావరణం' : 'Sunny & dry',
      rain: '10%',
    },
  ];

  const handleLocationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (locationInput.trim()) {
      onUpdateLocation(locationInput.trim());
      if (locationInput.toLowerCase().includes('bangalore')) {
        setCurrentTemp(24);
        setRainChance(80);
      } else {
        setCurrentTemp(29);
        setRainChance(25);
      }
    }
  };

  const isSprayingSafe = windSpeed <= 15 && rainChance < 40;

  return (
    <div className="space-y-6">
      {/* Intro */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <div>
          <div className="inline-flex items-center gap-1.5 text-[11px] font-bold text-sky-800 bg-sky-100 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
            <span>☁</span> {t.weatherPlanner}
          </div>
          <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900 mt-1">
            {t.weatherTitle}
          </h1>
          <p className="text-xs text-slate-500">{t.weatherSubtitle}</p>
        </div>

        {/* Location selector form */}
        <form onSubmit={handleLocationSubmit} className="flex items-center gap-2">
          <div className="relative">
            <input
              type="text"
              value={locationInput}
              onChange={(e) => setLocationInput(e.target.value)}
              placeholder={t.enterDistrictPlaceholder}
              className="text-xs rounded-xl border border-slate-200 px-3 py-2.5 pl-8 bg-white text-slate-800 focus:outline-none focus:ring-2 focus:ring-sky-500"
            />
            <MapPin className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-3" />
          </div>
          <button
            type="submit"
            className="text-xs font-bold bg-sky-700 hover:bg-sky-800 text-white px-3.5 py-2.5 rounded-xl transition-colors shadow-xs"
          >
            {t.updateLocation}
          </button>
        </form>
      </div>

      {/* Hero Weather Card */}
      <div className="bg-gradient-to-r from-sky-700 via-sky-800 to-teal-800 rounded-3xl text-white p-7 shadow-md flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="space-y-2">
          <span className="text-xs text-sky-200 font-semibold uppercase tracking-wider block">
            {t.currentMicroclimate} · {farmer.location}
          </span>
          <div className="flex items-baseline gap-3">
            <span className="text-4xl sm:text-5xl font-black tabular-nums">{currentTemp}°C</span>
            <span className="text-base text-sky-200 font-medium">
              {language === 'te' ? 'పాక్షిక ఎండతో కూడిన చల్లటి గాలి' : 'Partly sunny with light breeze'}
            </span>
          </div>
          <p className="text-xs text-sky-100/80 max-w-md">
            {language === 'te'
              ? `${farmer.crop} పంట పెరుగుదలకు ఈ ఉష్ణోగ్రత అనుకూలం. నేలలో ఆవిరి రేటు సాధారణంగా ఉంది.`
              : `Optimal temperature for ${farmer.crop} tillering. Soil evaporation rate is moderate (4.2 mm/day).`}
          </p>
        </div>

        <div className="w-24 h-24 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-5xl shrink-0 shadow-inner">
          ⛅
        </div>
      </div>

      {/* Metrics Strip */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5">
        <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-xs">
          <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
            <span className="font-bold">{t.humidity}</span>
            <Droplets className="w-4 h-4 text-sky-600" />
          </div>
          <b className="text-2xl font-black text-slate-800 tabular-nums">{humidity}%</b>
          <span className="text-[11px] text-slate-400 block mt-0.5">
            {language === 'te' ? 'మధ్యస్థ తేమ' : 'Moderate moisture'}
          </span>
        </div>

        <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-xs">
          <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
            <span className="font-bold">{t.windSpeed}</span>
            <Wind className="w-4 h-4 text-teal-600" />
          </div>
          <b className="text-2xl font-black text-slate-800 tabular-nums">{windSpeed} km/h</b>
          <span className="text-[11px] text-emerald-600 font-semibold block mt-0.5">
            {language === 'te' ? 'మందు కొట్టుకుపోయే ప్రమాదం తక్కువ' : 'Low drift risk'}
          </span>
        </div>

        <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-xs">
          <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
            <span className="font-bold">{t.rainChance}</span>
            <CloudRain className="w-4 h-4 text-blue-600" />
          </div>
          <b className="text-2xl font-black text-slate-800 tabular-nums">{rainChance}%</b>
          <span className="text-[11px] text-slate-400 block mt-0.5">
            {language === 'te' ? 'స్వల్ప అవకాశం' : 'Light chance'}
          </span>
        </div>

        <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-xs">
          <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
            <span className="font-bold">{t.uvIndex}</span>
            <Sun className="w-4 h-4 text-amber-500" />
          </div>
          <b className="text-2xl font-black text-slate-800 tabular-nums">5.4</b>
          <span className="text-[11px] text-amber-600 font-semibold block mt-0.5">
            {language === 'te' ? 'మధ్యస్థ ఎండ' : 'Moderate UV'}
          </span>
        </div>
      </div>

      {/* Field Spraying & Irrigation Window Analysis */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Spraying Window Card */}
        <div
          className={`border rounded-3xl p-5 shadow-xs ${
            isSprayingSafe
              ? 'bg-emerald-50/70 border-emerald-200 text-emerald-950'
              : 'bg-amber-50/70 border-amber-200 text-amber-950'
          }`}
        >
          <div className="flex items-start gap-3">
            {isSprayingSafe ? (
              <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0 mt-0.5" />
            ) : (
              <AlertTriangle className="w-6 h-6 text-amber-600 shrink-0 mt-0.5" />
            )}
            <div className="space-y-1.5 text-xs">
              <h3 className="text-sm font-bold">
                {isSprayingSafe ? t.sprayingWindowSafe : t.sprayingWindowCaution}
              </h3>
              <p className="leading-relaxed">
                {isSprayingSafe ? t.sprayingAdviceSafe : t.sprayingAdviceCaution}
              </p>
              <div className="pt-1 text-[11px] font-semibold text-emerald-800">
                {language === 'te'
                  ? 'సిఫార్సు చేయబడిన నాజిల్: డ్రిఫ్ట్ గార్డ్‌తో కూడిన ఫ్లాట్ ఫ్యాన్ నాజిల్ ఉపయోగించండి.'
                  : 'Recommended nozzle: Hollow cone or flat fan nozzle with drift guard.'}
              </div>
            </div>
          </div>
        </div>

        {/* Irrigation Advisory */}
        <div className="bg-white border border-slate-200 rounded-3xl p-5 shadow-xs text-xs text-slate-700 space-y-2">
          <h3 className="text-sm font-bold text-slate-900 flex items-center gap-1.5">
            <Droplets className="w-4 h-4 text-sky-600" />
            {t.irrigationTitle}
          </h3>
          <p className="leading-relaxed text-slate-600">
            {language === 'te'
              ? `ప్రస్తుత నేల తేమ మరియు రేపటి వర్ష సూచన ప్రకారం ${farmer.crop} పంటకు అధిక నీటిని నింపవద్దు. ఆరుతడి పద్ధతి లేదా డ్రిప్ ద్వారా 45 నిమిషాలు నీరు అందించండి.`
              : t.irrigationAdvice}
          </p>
          <div className="bg-slate-50 border border-slate-100 rounded-xl p-3 text-[11px] text-slate-500">
            <b>{language === 'te' ? 'నీటి ఆదా సూచన:' : 'Water saving tip:'}</b>{' '}
            {language === 'te'
              ? 'ఆరుతడి పద్ధతి (AWD) ద్వారా వరి పంటలో దిగుబడి తగ్గకుండా 25% వరకు నీరు ఆదా అవుతుంది.'
              : 'Alternate Wetting and Drying (AWD) saves up to 25% irrigation water without reducing paddy yields.'}
          </div>
        </div>
      </div>

      {/* 5-Day Outlook */}
      <div className="bg-white border border-slate-200 rounded-3xl p-5 shadow-xs space-y-3">
        <h3 className="text-sm font-bold text-slate-900">{t.forecast5Day}</h3>
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
          {forecast.map((f, idx) => (
            <div
              key={idx}
              className="bg-slate-50 border border-slate-200/80 rounded-2xl p-3.5 text-center space-y-1"
            >
              <span className="text-xs font-bold text-slate-700 block">{f.day}</span>
              <div className="text-2xl my-1">{f.icon}</div>
              <div className="text-xs font-black text-slate-800">
                {f.max} <span className="text-slate-400 font-normal">{f.min}</span>
              </div>
              <span className="text-[10px] text-slate-500 block leading-tight">{f.condition}</span>
              <span className="text-[10px] text-sky-700 font-bold block pt-1">
                🌧 {f.rain}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
