import React from 'react';

interface ToastProps {
  message: string | null;
  onClose: () => void;
}

export const Toast: React.FC<ToastProps> = ({ message, onClose }) => {
  if (!message) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-[#16442c] text-white px-4 py-3 rounded-xl shadow-xl border border-[#2e744e] text-sm font-medium animate-in fade-in slide-in-from-bottom-2 duration-200">
      <span className="text-emerald-400">✓</span>
      <span>{message}</span>
      <button
        onClick={onClose}
        className="ml-2 text-emerald-300 hover:text-white transition-colors text-xs font-bold"
      >
        ✕
      </button>
    </div>
  );
};
