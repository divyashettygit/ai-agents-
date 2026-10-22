import React, { useState } from 'react';
import { ShoppingBag, Search, Tag, X } from 'lucide-react';
import { PRODUCTS_LIST } from '../data/mockData';
import { AgriProduct, Language } from '../types';
import { I18N } from '../data/translations';

interface ProductsCatalogModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: Language;
  onSelectProductForVerification: (code: string) => void;
}

export const ProductsCatalogModal: React.FC<ProductsCatalogModalProps> = ({
  isOpen,
  onClose,
  language,
  onSelectProductForVerification,
}) => {
  const t = I18N[language];
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('All');

  if (!isOpen) return null;

  const filteredProducts = PRODUCTS_LIST.filter((p) => {
    const matchCat = categoryFilter === 'All' || p.category.toLowerCase().includes(categoryFilter.toLowerCase());
    const matchSearch =
      p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.activeIngredient.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.targetPests.toLowerCase().includes(searchTerm.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-3 sm:p-4 overflow-y-auto">
      <div className="bg-white rounded-3xl w-full max-w-4xl max-h-[92vh] overflow-y-auto shadow-2xl border border-slate-200">
        {/* Header */}
        <div className="sticky top-0 bg-white/95 backdrop-blur-md border-b border-slate-100 px-6 py-4 flex items-center justify-between z-10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center shadow-xs">
              <ShoppingBag className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
                {t.storeTitle}
                <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                  Certified Agrochemicals
                </span>
              </h2>
              <p className="text-xs text-slate-500">{t.storeSubtitle}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 space-y-4">
          {/* Search & Categories */}
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <input
                type="text"
                placeholder={t.searchProductsPlaceholder}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full text-xs rounded-xl border border-slate-200 px-3.5 py-2.5 pl-9 bg-slate-50 focus:bg-white text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
            </div>
            <div className="flex gap-1.5 overflow-x-auto pb-1">
              {[
                { id: 'All', label: t.catAll },
                { id: 'Fungicides', label: t.catFungicides },
                { id: 'Insecticides', label: t.catInsecticides },
                { id: 'Bio-Fertilizer', label: t.catBioFertilizer },
                { id: 'Organic', label: t.catOrganic },
              ].map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setCategoryFilter(cat.id)}
                  className={`text-xs px-3 py-1.5 rounded-xl font-bold whitespace-nowrap transition-colors ${
                    categoryFilter === cat.id
                      ? 'bg-[#1b6243] text-white shadow-xs'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Product cards grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredProducts.map((prod: AgriProduct) => (
              <div
                key={prod.id}
                className="bg-white border border-slate-200 rounded-2xl p-4.5 hover:border-emerald-300 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <div>
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                        {prod.brand} · {prod.category}
                      </span>
                      <h3 className="text-base font-bold text-slate-900">{prod.name}</h3>
                    </div>
                    <span className="text-base font-black text-emerald-800 tabular-nums">
                      ₹{prod.mrp}
                    </span>
                  </div>

                  <p className="text-xs text-slate-600 mb-2">
                    <span className="font-bold text-slate-700">{t.activeCompound}</span>{' '}
                    {prod.activeIngredient}
                  </p>

                  <div className="text-xs bg-slate-50 border border-slate-100 rounded-xl p-3 space-y-1 mb-3">
                    <div>
                      <b className="text-slate-800">{t.targetProblems}</b>{' '}
                      <span className="text-slate-600">{prod.targetPests}</span>
                    </div>
                    <div>
                      <b className="text-slate-800">{t.recommendedDosage}</b>{' '}
                      <span className="text-emerald-700 font-bold">{prod.dosage}</span>
                    </div>
                    <div>
                      <b className="text-slate-800">{t.packOptions}</b>{' '}
                      <span className="text-slate-600">{prod.packSize}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[11px] text-slate-400 font-mono">
                    Batch: {prod.validBatches[0]}
                  </span>
                  <button
                    onClick={() => {
                      onClose();
                      onSelectProductForVerification(prod.validBatches[0]);
                    }}
                    className="text-xs font-bold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 px-3 py-1.5 rounded-xl border border-emerald-200 transition-colors flex items-center gap-1.5"
                  >
                    <Tag className="w-3.5 h-3.5" />
                    {t.verifyAuthenticity}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
