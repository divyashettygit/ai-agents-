import React, { useState } from 'react';
import { FarmerProfile, Language } from '../types';
import { I18N } from '../data/translations';
import { FlaskConical, Sprout, ArrowRight, Download } from 'lucide-react';

interface SoilViewProps {
  farmer: FarmerProfile;
  language: Language;
  onOpenFertilizerAdvice: () => void;
  onRewardCoins: (amount: number, reason: string) => void;
}

export const SoilView: React.FC<SoilViewProps> = ({
  farmer,
  language,
  onOpenFertilizerAdvice,
  onRewardCoins,
}) => {
  const t = I18N[language];
  const [ph, setPh] = useState(6.5);
  const [organicCarbon, setOrganicCarbon] = useState('Medium');
  const [soilTexture, setSoilTexture] = useState('Loamy');
  const [summary, setSummary] = useState<any | null>(null);

  const handleGenerate = (e: React.FormEvent) => {
    e.preventDefault();

    let phStatus = language === 'te' ? 'సరైన తటస్థ పరిధి (Optimal Neutral)' : 'Optimal Neutral Range';
    let correction =
      language === 'te'
        ? 'నేల pH సాధారణంగా ఉంది. ఎటువంటి సున్నం లేదా జిప్సం సవరణ అత్యవసరం కాదు.'
        : 'No major pH correction required. Standard agricultural lime or gypsum is not urgently needed.';

    if (ph < 5.5) {
      phStatus =
        language === 'te'
          ? 'అధిక ఆమ్ల నేల (Acidic soil)'
          : 'Strongly Acidic (Risk of Aluminum Toxicity)';
      correction =
        language === 'te'
          ? 'ఎకరానికి 200 కిలోల వ్యవసాయ సున్నం (డోలమైట్) నాటు వేయడానికి 2 వారాల ముందు నేలలో వేసి కలియదున్నండి.'
          : 'Incorporate agricultural limestone or dolomite at 200 kg/acre at least 2 weeks prior to transplantation.';
    } else if (ph > 7.8) {
      phStatus =
        language === 'te'
          ? 'క్షార నేల (Alkaline soil)'
          : 'Alkaline / Calcareous';
      correction =
        language === 'te'
          ? 'ఎకరానికి 150 కిలోల జిప్సం వేయండి. జింక్ మరియు ఇనుము లోపాలు రాకుండా అమ్మోనియం సల్ఫేట్ వంటి ఎరువులను వాడండి.'
          : 'Apply agricultural Gypsum at 150 kg/acre and prefer acidic fertilizers like Ammonium Sulfate to prevent Zinc and Iron chlorosis.';
    }

    const data = {
      ph,
      phStatus,
      organicCarbon,
      soilTexture,
      correction,
      crop: farmer.crop,
      fymTons: farmer.area * 5,
      date: new Date().toLocaleDateString('en-IN'),
    };

    setSummary(data);
    onRewardCoins(50, language === 'te' ? 'భూసార పరీక్ష సలహాను పొందారు' : 'Generated Soil Health Card diagnosis');
  };

  const downloadReport = () => {
    if (!summary) return;
    const text = `AGRISATHI - SOIL HEALTH CARD ADVISORY (${language.toUpperCase()})
Date: ${summary.date}
Farmer: ${farmer.name}
Location: ${farmer.location}
Crop: ${summary.crop} (${farmer.area} Acres)

SOIL TEST PARAMETERS:
- Soil pH: ${summary.ph} (${summary.phStatus})
- Soil Texture: ${summary.soilTexture}
- Organic Carbon: ${summary.organicCarbon}

MANAGEMENT RECOMMENDATIONS:
- pH Correction: ${summary.correction}
- Organic Carbon Enrichment: Apply ${summary.fymTons} tons of well-composted Farm Yard Manure (FYM).
- Bio-fertilizer: Inoculate with Azospirillum / PSB at 2 kg/acre.`;

    const blob = new Blob([text], { type: 'text/plain;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `Soil_Health_Report_${farmer.name.replace(/\s+/g, '_')}.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-6">
      {/* Intro */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <div>
          <div className="inline-flex items-center gap-1.5 text-[11px] font-bold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
            <span>♧</span> {t.soilNutrients}
          </div>
          <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900 mt-1">
            {t.soilTitle}
          </h1>
          <p className="text-xs text-slate-500">{t.soilSubtitle}</p>
        </div>

        <button
          onClick={onOpenFertilizerAdvice}
          className="text-xs font-bold bg-[#1b6243] hover:bg-[#144b33] text-white px-3.5 py-2.5 rounded-xl flex items-center gap-1.5 transition-colors shadow-xs"
        >
          <Sprout className="w-3.5 h-3.5" />
          {t.proceedToFertilizer}
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Form */}
        <form onSubmit={handleGenerate} className="md:col-span-5 bg-white border border-slate-200 rounded-3xl p-5 shadow-xs space-y-4">
          <h3 className="text-sm font-bold text-slate-900">{t.enterSoilValues}</h3>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              {t.soilPhLabel}
            </label>
            <input
              type="number"
              min="3"
              max="11"
              step="0.1"
              value={ph}
              onChange={(e) => setPh(Number(e.target.value))}
              className="w-full text-xs font-mono rounded-xl border border-slate-200 px-3 py-2.5 bg-slate-50 focus:bg-white text-slate-800 focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
            <span className="text-[10px] text-slate-400 mt-1 block">
              {language === 'te'
                ? 'భారతీయ నేలల్లో pH సాధారణంగా 5.5 నుండి 8.5 మధ్య ఉంటుంది.'
                : 'Typical Indian farm soils range between 5.5 and 8.5.'}
            </span>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              {t.organicCarbonLabel}
            </label>
            <select
              value={organicCarbon}
              onChange={(e) => setOrganicCarbon(e.target.value)}
              className="w-full text-xs font-semibold rounded-xl border border-slate-200 px-3 py-2.5 bg-slate-50 focus:bg-white text-slate-800 focus:outline-none focus:ring-2 focus:ring-teal-500"
            >
              <option value="Low">{language === 'te' ? 'తక్కువ (< 0.5%)' : 'Low (< 0.5%)'}</option>
              <option value="Medium">{language === 'te' ? 'మధ్యస్థం (0.5% - 0.75%)' : 'Medium (0.5% - 0.75%)'}</option>
              <option value="High">{language === 'te' ? 'ఎక్కువ (> 0.75%)' : 'High (> 0.75%)'}</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              {t.soilTextureLabel}
            </label>
            <select
              value={soilTexture}
              onChange={(e) => setSoilTexture(e.target.value)}
              className="w-full text-xs font-semibold rounded-xl border border-slate-200 px-3 py-2.5 bg-slate-50 focus:bg-white text-slate-800 focus:outline-none focus:ring-2 focus:ring-teal-500"
            >
              <option value="Loamy">{language === 'te' ? 'ఒండ్రు నేల (Loamy)' : 'Loamy'}</option>
              <option value="Black Clay">{language === 'te' ? 'నల్లరేగడి నేల (Black Soil)' : 'Black Soil'}</option>
              <option value="Sandy Loam">{language === 'te' ? 'ఇసుక నేల (Sandy Loam)' : 'Sandy Loam'}</option>
              <option value="Red Soil">{language === 'te' ? 'ఎర్ర నేల (Red Soil)' : 'Red Soil'}</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-teal-800 hover:bg-teal-900 text-white font-bold text-xs sm:text-sm py-3 rounded-xl shadow-xs transition-colors flex items-center justify-center gap-2"
          >
            <FlaskConical className="w-4 h-4 text-teal-300" />
            {t.generateSoilBtn}
          </button>
        </form>

        {/* Results */}
        <div className="md:col-span-7 bg-slate-50 border border-slate-200 rounded-3xl p-5 shadow-xs flex flex-col justify-between">
          {summary ? (
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                <div>
                  <h3 className="text-sm font-bold text-slate-900">
                    {t.soilDiagnosisTitle}: {summary.crop}
                  </h3>
                  <span className="text-[11px] text-slate-500">
                    pH {summary.ph} · {summary.soilTexture}
                  </span>
                </div>
                <button
                  onClick={downloadReport}
                  className="text-xs font-bold px-3 py-1.5 bg-white border border-slate-200 hover:border-teal-400 text-slate-700 rounded-xl shadow-2xs flex items-center gap-1.5 transition-colors"
                >
                  <Download className="w-3.5 h-3.5" />
                  {t.downloadPlan}
                </button>
              </div>

              {/* Status pill */}
              <div className="bg-white border border-slate-200 rounded-2xl p-4 space-y-1 shadow-2xs">
                <span className="text-[10px] uppercase font-bold text-teal-700 tracking-wider">
                  {t.phAssessment}
                </span>
                <b className="text-sm font-bold text-slate-900 block">{summary.phStatus}</b>
                <p className="text-xs text-slate-600">{summary.correction}</p>
              </div>

              {/* Organic Carbon Advice */}
              <div className="bg-white border border-slate-200 rounded-2xl p-4 space-y-1 text-xs shadow-2xs">
                <span className="text-[10px] uppercase font-bold text-amber-700 tracking-wider">
                  {t.organicCarbonAdvice}
                </span>
                <p className="text-slate-700 leading-relaxed">
                  {language === 'te'
                    ? `సేంద్రీయ కర్బనం "${summary.organicCarbon}" గా ఉంది. పంట నాటుకు ముందు ఎకరానికి ${summary.fymTons} టన్నుల బాగా చివికిన పశువుల ఎరువు లేదా పచ్చిరొట్ట ఎరువులు (జీలుగా/జనుము) వేయండి.`
                    : `Organic carbon is marked ${summary.organicCarbon}. Apply ${summary.fymTons} Tons of well-decomposed Farm Yard Manure (FYM).`}
                </p>
              </div>

              <div className="pt-2">
                <button
                  onClick={onOpenFertilizerAdvice}
                  className="text-xs font-bold text-emerald-900 bg-emerald-100 hover:bg-emerald-200 px-4 py-2.5 rounded-xl transition-colors flex items-center gap-2"
                >
                  <span>{t.proceedToFertilizer}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ) : (
            <div className="h-full flex flex-col items-center justify-center text-center p-8 text-slate-400">
              <FlaskConical className="w-12 h-12 text-teal-600 mb-2 opacity-60" />
              <b className="text-slate-700 text-xs">{t.noDiagnosisYet}</b>
              <p className="text-[11px] text-slate-500 mt-1 max-w-xs">
                {language === 'te'
                  ? 'మీ భూసార పరీక్ష pH మరియు నేల రకం నమోదు చేసి "భూసార సలహాను పొందండి" నొక్కండి.'
                  : 'Enter your soil test pH and texture values to view corrective recommendations.'}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
