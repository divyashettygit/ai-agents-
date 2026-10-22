import React, { useState } from 'react';
import { MANDI_RECORDS } from '../data/mockData';
import { MandiRecord, Language } from '../types';
import { I18N } from '../data/translations';
import { Search, Download, TrendingUp, TrendingDown, RefreshCw, MapPin } from 'lucide-react';

interface MarketViewProps {
  language: Language;
  onRewardCoins: (amount: number, reason: string) => void;
}

export const MarketView: React.FC<MarketViewProps> = ({ language, onRewardCoins }) => {
  const t = I18N[language];
  const [search, setSearch] = useState('');
  const [selectedGroup, setSelectedGroup] = useState('All');
  const [sortBy, setSortBy] = useState<'name' | 'price-high' | 'price-low'>('price-high');

  const filteredRecords = MANDI_RECORDS.filter((r) => {
    const matchGroup = selectedGroup === 'All' || r.group === selectedGroup;
    const matchSearch =
      r.crop.toLowerCase().includes(search.toLowerCase()) ||
      r.mandi.toLowerCase().includes(search.toLowerCase()) ||
      r.district.toLowerCase().includes(search.toLowerCase());
    return matchGroup && matchSearch;
  }).sort((a, b) => {
    if (sortBy === 'price-high') return b.avg - a.avg;
    if (sortBy === 'price-low') return a.avg - b.avg;
    return a.crop.localeCompare(b.crop);
  });

  const exportCSV = () => {
    const headers = ['Crop', 'Group', 'Market / Mandi', 'District', 'Min (INR/q)', 'Max (INR/q)', 'Average (INR/q)', 'Trend'];
    const rows = filteredRecords.map((r) => [
      r.crop,
      r.group,
      r.mandi,
      r.district,
      r.min,
      r.max,
      r.avg,
      r.trend,
    ]);

    const csvContent = [headers.join(','), ...rows.map((e) => e.join(','))].join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', `Mandi_Market_Prices_${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    onRewardCoins(30, language === 'te' ? 'మార్కెట్ ధరల CSV డేటాను డౌన్‌లోడ్ చేసారు' : 'Exported Mandi Market CSV dataset');
  };

  return (
    <div className="space-y-6">
      {/* Intro */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <div>
          <div className="inline-flex items-center gap-1.5 text-[11px] font-bold text-amber-800 bg-amber-100 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
            <span>₹</span> {t.mandiPrices}
          </div>
          <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900 mt-1">
            {t.mandiTitle}
          </h1>
          <p className="text-xs text-slate-500">{t.mandiSubtitle}</p>
        </div>

        <button
          onClick={exportCSV}
          className="text-xs font-bold bg-[#1b6243] hover:bg-[#144b33] text-white px-3.5 py-2.5 rounded-xl flex items-center gap-1.5 transition-colors shadow-xs"
        >
          <Download className="w-3.5 h-3.5" />
          {t.exportCsvBtn}
        </button>
      </div>

      {/* Filter & Search Bar */}
      <div className="bg-white border border-slate-200 rounded-3xl p-4 shadow-xs flex flex-col md:flex-row gap-3 items-center justify-between">
        <div className="relative w-full md:w-72">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder={t.searchMandiPlaceholder}
            className="w-full text-xs rounded-xl border border-slate-200 px-3.5 py-2.5 pl-9 bg-slate-50 focus:bg-white text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
          <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-3" />
        </div>

        <div className="flex items-center gap-2 w-full md:w-auto overflow-x-auto pb-1 md:pb-0">
          {[
            { id: 'All', label: language === 'te' ? 'అన్నీ' : 'All' },
            { id: 'Grains', label: language === 'te' ? 'ధాన్యాలు' : 'Grains' },
            { id: 'Vegetables', label: language === 'te' ? 'కూరగాయలు' : 'Vegetables' },
            { id: 'Commercial crops', label: language === 'te' ? 'వాణిజ్య పంటలు' : 'Commercial' },
            { id: 'Pulses', label: language === 'te' ? 'పప్పుధాన్యాలు' : 'Pulses' },
          ].map((grp) => (
            <button
              key={grp.id}
              onClick={() => setSelectedGroup(grp.id)}
              className={`text-xs px-3 py-1.5 rounded-xl font-bold whitespace-nowrap transition-colors ${
                selectedGroup === grp.id
                  ? 'bg-emerald-800 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {grp.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2 self-end md:self-auto">
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as any)}
            className="text-xs font-semibold rounded-xl border border-slate-200 px-3 py-2 bg-white text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500"
          >
            <option value="price-high">
              {language === 'te' ? 'అత్యధిక సగటు ధర' : 'Highest Avg Price'}
            </option>
            <option value="price-low">
              {language === 'te' ? 'అత్యల్ప సగటు ధర' : 'Lowest Avg Price'}
            </option>
            <option value="name">
              {language === 'te' ? 'పంట పేరు (A-Z)' : 'Crop Name (A-Z)'}
            </option>
          </select>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-xs">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="bg-slate-50/80 border-b border-slate-200 text-slate-500 font-bold uppercase text-[10px] tracking-wider">
                <th className="py-3.5 px-4">{t.commodityCrop}</th>
                <th className="py-3.5 px-4">{t.marketYard}</th>
                <th className="py-3.5 px-4">{t.minRate}</th>
                <th className="py-3.5 px-4">{t.maxRate}</th>
                <th className="py-3.5 px-4">{t.avgRate}</th>
                <th className="py-3.5 px-4">{t.marketTrend}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredRecords.map((r, idx) => (
                <tr key={idx} className="hover:bg-emerald-50/40 transition-colors">
                  <td className="py-3.5 px-4 font-bold text-slate-900">
                    {r.crop}
                    <span className="text-[10px] text-slate-400 font-normal block">{r.group}</span>
                  </td>
                  <td className="py-3.5 px-4 text-slate-700">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      <span>{r.mandi}</span>
                    </div>
                    <span className="text-[10px] text-slate-400 block pl-4.5">{r.district}, {r.state}</span>
                  </td>
                  <td className="py-3.5 px-4 text-slate-600 tabular-nums">
                    ₹{r.min.toLocaleString('en-IN')} / q
                  </td>
                  <td className="py-3.5 px-4 text-slate-600 tabular-nums">
                    ₹{r.max.toLocaleString('en-IN')} / q
                  </td>
                  <td className="py-3.5 px-4 font-black text-emerald-800 text-sm tabular-nums">
                    ₹{r.avg.toLocaleString('en-IN')} / q
                  </td>
                  <td className="py-3.5 px-4">
                    <span
                      className={`inline-flex items-center gap-1 text-[11px] font-bold px-2.5 py-0.5 rounded-full ${
                        r.trend.includes('↑')
                          ? 'bg-emerald-100 text-emerald-800'
                          : r.trend.includes('↓')
                          ? 'bg-rose-100 text-rose-800'
                          : 'bg-slate-100 text-slate-700'
                      }`}
                    >
                      {r.trend.includes('↑') ? (
                        <TrendingUp className="w-3 h-3" />
                      ) : r.trend.includes('↓') ? (
                        <TrendingDown className="w-3 h-3" />
                      ) : (
                        <RefreshCw className="w-3 h-3" />
                      )}
                      {r.trend}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {filteredRecords.length === 0 && (
          <div className="p-8 text-center text-slate-400 text-xs">
            {language === 'te'
              ? 'ఎటువంటి మార్కెట్ రికార్డులు కనుగొనబడలేదు. శోధన పదాన్ని మార్చండి.'
              : 'No matching commodity records found. Try clearing your search term.'}
          </div>
        )}

        <div className="bg-slate-50 border-t border-slate-200 px-4 py-3 flex items-center justify-between text-xs text-slate-500">
          <span>{t.showingRecords} ({filteredRecords.length})</span>
          <span className="text-[11px]">Agmarknet / DMI Govt of India</span>
        </div>
      </div>
    </div>
  );
};
