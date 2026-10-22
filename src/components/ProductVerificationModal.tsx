import React, { useState } from 'react';
import { QrCode, ShieldCheck, AlertTriangle, CheckCircle, Search, X } from 'lucide-react';
import { AgriProduct, Language } from '../types';
import { I18N } from '../data/translations';

interface ProductVerificationModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: Language;
  onRewardCoins: (amount: number, reason: string) => void;
}

export const ProductVerificationModal: React.FC<ProductVerificationModalProps> = ({
  isOpen,
  onClose,
  language,
  onRewardCoins,
}) => {
  const t = I18N[language];
  const [batchCode, setBatchCode] = useState('BYR-2026-NTV-8819');
  const [isVerifying, setIsVerifying] = useState(false);
  const [verificationResult, setVerificationResult] = useState<{
    verified: boolean;
    product?: AgriProduct;
    manufacturingDate?: string;
    expiryDate?: string;
    certifyingAgency?: string;
    message: string;
  } | null>(null);

  if (!isOpen) return null;

  const handleVerify = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!batchCode.trim()) return;

    setIsVerifying(true);
    setVerificationResult(null);

    try {
      const res = await fetch('/api/products/verify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ batchCode, language }),
      });
      const data = await res.json();
      setVerificationResult(data);
      if (data.verified) {
        onRewardCoins(50, language === 'te' ? 'అసలైన వ్యవసాయ ఉత్పత్తిని ధృవీకరించారు' : 'Verified authentic agricultural product');
      }
    } catch (err) {
      console.error('Verify error:', err);
    } finally {
      setIsVerifying(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-3 sm:p-4 overflow-y-auto">
      <div className="bg-white rounded-3xl w-full max-w-xl shadow-2xl border border-slate-200 overflow-hidden">
        {/* Header */}
        <div className="bg-white/95 backdrop-blur-md border-b border-slate-100 px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center shadow-xs">
              <QrCode className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
                {t.verifyTitle}
                <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                  Anti-Counterfeit
                </span>
              </h2>
              <p className="text-xs text-slate-500">{t.verifySubtitle}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 space-y-5">
          {/* Simulated Scanner Graphic */}
          <div className="relative border-2 border-dashed border-emerald-300 rounded-3xl bg-emerald-50/50 p-6 text-center overflow-hidden">
            <div className="w-28 h-28 mx-auto rounded-2xl bg-white border border-emerald-200 shadow-sm flex items-center justify-center relative">
              <QrCode className="w-16 h-16 text-emerald-700" />
              {/* Animated scan beam */}
              <div className="absolute inset-x-0 h-1 bg-gradient-to-r from-transparent via-emerald-500 to-transparent animate-bounce opacity-75" />
            </div>
            <p className="text-xs text-slate-600 mt-3 font-medium">
              {t.scanQrPrompt}
            </p>
          </div>

          {/* Quick preset codes */}
          <div>
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1.5">
              {t.sampleBatchCodes}
            </span>
            <div className="flex flex-wrap gap-2">
              {['BYR-2026-NTV-8819', 'BYR-2026-BLT-5510', 'IFC-NU-2026-7890'].map((code) => (
                <button
                  key={code}
                  type="button"
                  onClick={() => {
                    setBatchCode(code);
                    setVerificationResult(null);
                  }}
                  className={`text-xs px-2.5 py-1 rounded-lg border font-mono transition-colors ${
                    batchCode === code
                      ? 'bg-emerald-100 border-emerald-400 text-emerald-900 font-bold'
                      : 'bg-slate-100 border-slate-200 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  {code}
                </button>
              ))}
            </div>
          </div>

          <form onSubmit={handleVerify} className="space-y-3">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                {t.enterBatchLabel}
              </label>
              <div className="relative">
                <input
                  type="text"
                  value={batchCode}
                  onChange={(e) => setBatchCode(e.target.value)}
                  placeholder={t.batchPlaceholder}
                  className="w-full text-xs font-mono rounded-xl border border-slate-200 px-3 py-2.5 pl-9 bg-slate-50 focus:bg-white text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500 uppercase"
                />
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
              </div>
            </div>

            <button
              type="submit"
              disabled={isVerifying || !batchCode}
              className="w-full bg-[#1b6243] hover:bg-[#144b33] text-white font-bold text-xs sm:text-sm py-3 px-4 rounded-xl shadow-md transition-all flex items-center justify-center gap-2"
            >
              <ShieldCheck className="w-4 h-4 text-emerald-300" />
              {isVerifying ? t.verifying : t.verifyAuthenticityBtn}
            </button>
          </form>

          {/* Verification Result Card */}
          {verificationResult && (
            <div
              className={`rounded-2xl p-4 border animate-in fade-in duration-200 ${
                verificationResult.verified
                  ? 'bg-emerald-50 border-emerald-200 text-emerald-950'
                  : 'bg-rose-50 border-rose-200 text-rose-950'
              }`}
            >
              <div className="flex items-start gap-3">
                {verificationResult.verified ? (
                  <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                ) : (
                  <AlertTriangle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
                )}
                <div className="space-y-2 text-xs flex-1">
                  <div className="font-bold text-sm">
                    {verificationResult.verified ? t.genuineBatch : t.warningBatch}
                  </div>
                  <p>
                    {language === 'te' && verificationResult.verified
                      ? '100% అసలైన ధృవీకరించబడిన బ్యాచ్. కేంద్ర పురుగుమందుల బోర్డు (CIBRC) అధికారిక రిజిస్ట్రీతో బ్యాచ్ కోడ్ సరిపోలింది.'
                      : verificationResult.message}
                  </p>

                  {verificationResult.product && (
                    <div className="bg-white/90 rounded-xl p-3 border border-emerald-200 text-slate-800 space-y-1 shadow-2xs">
                      <div className="font-bold text-emerald-900">
                        {verificationResult.product.name} ({verificationResult.product.brand})
                      </div>
                      <div className="text-[11px] text-slate-600">
                        <b>{t.activeCompound}</b> {verificationResult.product.activeIngredient}
                      </div>
                      <div className="text-[11px] text-slate-600">
                        <b>{t.recommendedDosage}</b> {verificationResult.product.dosage}
                      </div>
                      <div className="flex gap-4 text-[10px] text-slate-500 pt-1">
                        <span>Mfg: {verificationResult.manufacturingDate}</span>
                        <span>Exp: {verificationResult.expiryDate}</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
