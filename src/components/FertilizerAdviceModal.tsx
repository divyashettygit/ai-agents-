import React, { useState } from 'react';
import { FertilizerCalculation, Language } from '../types';
import { I18N } from '../data/translations';
import { Sprout, Calculator, Download, CheckCircle, AlertCircle, X } from 'lucide-react';

interface FertilizerAdviceModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: Language;
  onRewardCoins: (amount: number, reason: string) => void;
}

export const FertilizerAdviceModal: React.FC<FertilizerAdviceModalProps> = ({
  isOpen,
  onClose,
  language,
  onRewardCoins,
}) => {
  const t = I18N[language];
  const [crop, setCrop] = useState('Paddy');
  const [acres, setAcres] = useState<number>(2);
  const [soilType, setSoilType] = useState('Loamy');
  const [ph, setPh] = useState<number>(6.5);
  const [nitrogenStatus, setNitrogenStatus] = useState('Medium');
  const [stage, setStage] = useState('Vegetative');
  const [calculation, setCalculation] = useState<FertilizerCalculation | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  if (!isOpen) return null;

  const handleCalculate = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const res = await fetch('/api/fertilizer/calculate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          crop,
          acres: Number(acres),
          soilType,
          ph: Number(ph),
          nitrogenStatus,
          stage,
          language,
        }),
      });
      const data = await res.json();
      setCalculation(data);
      onRewardCoins(75, language === 'te' ? 'ఎరువుల మోతాదును విజయవంతంగా లెక్కించారు' : 'Calculated tailored fertilizer dosage');
    } catch (err) {
      console.error('Fertilizer calculate error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDownload = () => {
    if (!calculation) return;
    const text = `AGRISATHI FERTILIZER SCHEDULE & NUTRIENT ADVICE (${language.toUpperCase()})
=====================================================
Date: ${new Date().toLocaleDateString('en-IN')}
Target Crop: ${calculation.crop}
Total Area: ${calculation.acres} Acres
Soil Type: ${calculation.soilType} | pH: ${calculation.ph}
Nitrogen Baseline: ${calculation.nitrogenStatus}
Current Growth Stage: ${calculation.stage}

RECOMMENDED COMMERCIAL DOSAGES:
- Urea (46% N): ${calculation.totals.ureaBags} bags (${calculation.totals.ureaKg} kg)
- DAP (18-46-0): ${calculation.totals.dapBags} bags (${calculation.totals.dapKg} kg)
- MOP (60% K2O): ${calculation.totals.mopBags} bags (${calculation.totals.mopKg} kg)
- Well-decomposed FYM / Compost: ${calculation.totals.fymTons} Tons

SOIL pH & AGRONOMIC GUIDANCE:
${calculation.phGuidance}

STAGE-WISE SPLIT DOSAGE SCHEDULE:
${calculation.splitSchedule
  .map(
    (s, i) =>
      `[Stage ${i + 1}] ${s.timing}
- Urea: ${s.urea} | DAP: ${s.dap} | MOP: ${s.mop}
Notes: ${s.notes}`
  )
  .join('\n\n')}

Safety Disclaimer: This schedule is formulated based on State Agricultural University (SAU) standard packages of practices.`;

    const blob = new Blob([text], { type: 'text/plain;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `Fertilizer_Schedule_${calculation.crop}_${calculation.acres}Acres.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-3 sm:p-4 overflow-y-auto">
      <div className="bg-white rounded-3xl w-full max-w-4xl max-h-[92vh] overflow-y-auto shadow-2xl border border-slate-200">
        {/* Header */}
        <div className="sticky top-0 bg-white/95 backdrop-blur-md border-b border-slate-100 px-6 py-4 flex items-center justify-between z-10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-amber-100 text-amber-800 flex items-center justify-center shadow-xs">
              <Sprout className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-bold text-slate-900">
                {t.fertilizerTitle}
              </h2>
              <p className="text-xs text-slate-500">{t.fertilizerSub}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Form */}
          <form onSubmit={handleCalculate} className="md:col-span-5 space-y-3.5">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">{t.targetCrop}</label>
              <select
                value={crop}
                onChange={(e) => setCrop(e.target.value)}
                className="w-full text-xs font-semibold rounded-xl border border-slate-200 px-3 py-2.5 bg-slate-50 focus:bg-white text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              >
                <option value="Paddy">{language === 'te' ? 'వరి (Paddy / Rice)' : 'Paddy / Rice'}</option>
                <option value="Maize">{language === 'te' ? 'మొక్కజొన్న (Maize)' : 'Maize / Corn'}</option>
                <option value="Tomato">{language === 'te' ? 'టమాటా (Tomato)' : 'Tomato'}</option>
                <option value="Cotton">{language === 'te' ? 'పత్తి (Cotton)' : 'Cotton'}</option>
                <option value="Chilli">{language === 'te' ? 'మిరప (Chilli)' : 'Chilli'}</option>
                <option value="Wheat">{language === 'te' ? 'గోధుమ (Wheat)' : 'Wheat'}</option>
              </select>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">{t.landAcres}</label>
                <input
                  type="number"
                  min="0.25"
                  max="100"
                  step="0.25"
                  value={acres}
                  onChange={(e) => setAcres(Number(e.target.value))}
                  className="w-full text-xs rounded-xl border border-slate-200 px-3 py-2.5 bg-slate-50 focus:bg-white text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">{t.soilType}</label>
                <select
                  value={soilType}
                  onChange={(e) => setSoilType(e.target.value)}
                  className="w-full text-xs font-semibold rounded-xl border border-slate-200 px-3 py-2.5 bg-slate-50 focus:bg-white text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                >
                  <option value="Loamy">{language === 'te' ? 'ఒండ్రు నేల (Loamy)' : 'Loamy soil'}</option>
                  <option value="Clay">{language === 'te' ? 'బంకమట్టి నేల (Clay)' : 'Clay soil'}</option>
                  <option value="Sandy">{language === 'te' ? 'ఇసుక నేల (Sandy)' : 'Sandy loam'}</option>
                  <option value="Black soil">{language === 'te' ? 'నల్లరేగడి నేల (Black)' : 'Black cotton soil'}</option>
                  <option value="Red soil">{language === 'te' ? 'ఎర్ర నేల (Red)' : 'Red chalka soil'}</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">{t.soilPh}</label>
                <input
                  type="number"
                  min="3.5"
                  max="10"
                  step="0.1"
                  value={ph}
                  onChange={(e) => setPh(Number(e.target.value))}
                  className="w-full text-xs rounded-xl border border-slate-200 px-3 py-2.5 bg-slate-50 focus:bg-white text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500 font-mono"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">{t.nitrogenStatus}</label>
                <select
                  value={nitrogenStatus}
                  onChange={(e) => setNitrogenStatus(e.target.value)}
                  className="w-full text-xs font-semibold rounded-xl border border-slate-200 px-3 py-2.5 bg-slate-50 focus:bg-white text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                >
                  <option value="Low">{language === 'te' ? 'తక్కువ (Low)' : 'Low (< 280 kg/ha)'}</option>
                  <option value="Medium">{language === 'te' ? 'మధ్యస్థం (Medium)' : 'Medium (280-560 kg/ha)'}</option>
                  <option value="High">{language === 'te' ? 'ఎక్కువ (High)' : 'High (> 560 kg/ha)'}</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">{t.growthStage}</label>
              <select
                value={stage}
                onChange={(e) => setStage(e.target.value)}
                className="w-full text-xs font-semibold rounded-xl border border-slate-200 px-3 py-2.5 bg-slate-50 focus:bg-white text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              >
                <option value="Basal Preparation">{language === 'te' ? 'దుక్కి దశ / నాటు వేసే సమయం' : 'Basal / Field Preparation'}</option>
                <option value="Vegetative">{language === 'te' ? 'పిలకల దశ / పెరుగుదల దశ' : 'Active Vegetative / Tillering'}</option>
                <option value="Flowering">{language === 'te' ? 'పూత దశ / చిరుపొట్ట దశ' : 'Flowering / Panicle Initiation'}</option>
                <option value="Fruit Filling">{language === 'te' ? 'గింజ / కాయ ముదిరే దశ' : 'Grain / Fruit Development'}</option>
              </select>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-[#1b6243] hover:bg-[#144b33] text-white font-bold text-xs sm:text-sm py-3 px-4 rounded-xl shadow-md transition-all flex items-center justify-center gap-2"
            >
              <Calculator className="w-4 h-4 text-emerald-300" />
              {isLoading ? t.calculating : t.calculateDoseBtn}
            </button>
          </form>

          {/* Results Display */}
          <div className="md:col-span-7 bg-slate-50 border border-slate-200/80 rounded-2xl p-5 flex flex-col justify-between">
            {calculation ? (
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">
                      {t.fertilizerDosesFor} {calculation.crop}
                    </h3>
                    <p className="text-xs text-slate-500">
                      {t.targetArea}: {calculation.acres} {language === 'te' ? 'ఎకరాలు' : 'Acres'} · pH {calculation.ph}
                    </p>
                  </div>
                  <button
                    onClick={handleDownload}
                    className="text-xs font-bold px-3 py-1.5 bg-white border border-slate-200 text-slate-700 hover:text-emerald-700 hover:border-emerald-300 rounded-xl shadow-2xs flex items-center gap-1.5 transition-colors"
                  >
                    <Download className="w-3.5 h-3.5" />
                    {t.downloadPlan}
                  </button>
                </div>

                {/* Bag counts grid */}
                <div className="grid grid-cols-3 gap-2.5">
                  <div className="bg-white border border-slate-200 rounded-2xl p-3 text-center shadow-2xs">
                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">
                      {t.ureaTitle}
                    </span>
                    <b className="text-xl font-black text-emerald-800 tabular-nums block mt-1">
                      {calculation.totals.ureaBags}
                    </b>
                    <small className="text-[10px] text-slate-500">{t.bags50kg} ({calculation.totals.ureaKg} kg)</small>
                  </div>

                  <div className="bg-white border border-slate-200 rounded-2xl p-3 text-center shadow-2xs">
                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">
                      {t.dapTitle}
                    </span>
                    <b className="text-xl font-black text-amber-800 tabular-nums block mt-1">
                      {calculation.totals.dapBags}
                    </b>
                    <small className="text-[10px] text-slate-500">{t.bags50kg} ({calculation.totals.dapKg} kg)</small>
                  </div>

                  <div className="bg-white border border-slate-200 rounded-2xl p-3 text-center shadow-2xs">
                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">
                      {t.mopTitle}
                    </span>
                    <b className="text-xl font-black text-blue-800 tabular-nums block mt-1">
                      {calculation.totals.mopBags}
                    </b>
                    <small className="text-[10px] text-slate-500">{t.bags50kg} ({calculation.totals.mopKg} kg)</small>
                  </div>
                </div>

                {/* pH Advisory */}
                <div className="bg-emerald-50/70 border border-emerald-200 rounded-xl p-3 text-xs text-emerald-950 flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                  <div>
                    <b>{t.soilHealthGuidance}</b>
                    <p className="mt-0.5 leading-relaxed">{calculation.phGuidance}</p>
                  </div>
                </div>

                {/* Stage-wise Split Schedule */}
                <div>
                  <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                    {t.splitScheduleTitle}
                  </h4>
                  <div className="space-y-2 text-xs">
                    {calculation.splitSchedule.map((s, idx) => (
                      <div
                        key={idx}
                        className="bg-white border border-slate-200 rounded-xl p-2.5 text-slate-700 shadow-2xs"
                      >
                        <div className="flex items-center justify-between font-bold text-slate-900 mb-1">
                          <span>{s.timing}</span>
                          <span className="text-[11px] text-emerald-700">
                            Urea: {s.urea} · DAP: {s.dap} · MOP: {s.mop}
                          </span>
                        </div>
                        <p className="text-[11px] text-slate-500">{s.notes}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <div className="h-full flex flex-col items-center justify-center text-center p-6 text-slate-400">
                <div className="w-16 h-16 rounded-2xl bg-amber-100/60 text-amber-700 flex items-center justify-center mb-3">
                  <Calculator className="w-8 h-8" />
                </div>
                <h3 className="text-sm font-bold text-slate-700 mb-1">
                  {language === 'te' ? 'పొలం వివరాలను నమోదు చేయండి' : 'Enter Field Information'}
                </h3>
                <p className="text-xs max-w-sm text-slate-500">
                  {language === 'te'
                    ? 'ఎడమ వైపున పంట, ఎకరాల సంఖ్య, నేల pH విలువను ఎంచుకుని "ఎరువుల మోతాదును లెక్కించండి" నొక్కండి.'
                    : 'Select your crop, farm acreage, soil pH, and nitrogen status on the left.'}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
