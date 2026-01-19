import React from 'react';
import { StudyMode } from '../types';

interface ControlsProps {
  onNext: () => void;
  onPrev: () => void;
  onShuffle: () => void;
  onReset: () => void;
  onOpenGenerator: () => void;
  studyMode: StudyMode;
  currentIndex: number;
  total: number;
  isFlipped: boolean;
  handleKnown: () => void;
  handleUnknown: () => void;
}

export const Controls: React.FC<ControlsProps> = ({
  onNext,
  onPrev,
  onShuffle,
  onReset,
  onOpenGenerator,
  studyMode,
  currentIndex,
  total,
  isFlipped,
  handleKnown,
  handleUnknown
}) => {
  return (
    <div className="flex flex-col gap-4 w-full max-w-2xl mx-auto mt-6">
      
      {/* Primary Actions (Active when flipped) */}
      <div className={`grid grid-cols-2 gap-4 transition-opacity duration-300 ${isFlipped ? 'opacity-100' : 'opacity-30 pointer-events-none'}`}>
         <button 
           onClick={(e) => { e.stopPropagation(); handleUnknown(); }}
           className="bg-rose-500 hover:bg-rose-600 text-white py-3 rounded-xl font-semibold shadow-lg shadow-rose-500/20 active:scale-95 transition-all"
         >
            Need Review
         </button>
         <button 
           onClick={(e) => { e.stopPropagation(); handleKnown(); }}
           className="bg-emerald-500 hover:bg-emerald-600 text-white py-3 rounded-xl font-semibold shadow-lg shadow-emerald-500/20 active:scale-95 transition-all"
         >
            Got it!
         </button>
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-between bg-slate-800 p-2 rounded-xl border border-slate-700">
        <button 
          onClick={onPrev}
          disabled={currentIndex === 0}
          className="p-3 text-slate-300 hover:text-white hover:bg-slate-700 rounded-lg disabled:opacity-30 disabled:hover:bg-transparent transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </button>

        <div className="flex flex-col items-center">
          <span className="text-white font-medium">
            Card {currentIndex + 1} <span className="text-slate-500">/</span> {total}
          </span>
          <span className="text-xs text-slate-400 uppercase tracking-wider">
            {studyMode === StudyMode.SHUFFLE ? 'Random Order' : 'Sequential'}
          </span>
        </div>

        <button 
          onClick={onNext}
          disabled={currentIndex === total - 1}
          className="p-3 text-slate-300 hover:text-white hover:bg-slate-700 rounded-lg disabled:opacity-30 disabled:hover:bg-transparent transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </button>
      </div>

      {/* Utility Toolbar */}
      <div className="flex justify-center gap-2">
        <button 
           onClick={onShuffle}
           className={`px-4 py-2 text-sm font-medium rounded-full border transition-all ${studyMode === StudyMode.SHUFFLE ? 'bg-indigo-600 border-indigo-500 text-white' : 'bg-transparent border-slate-600 text-slate-400 hover:border-slate-400'}`}
        >
          Shuffle
        </button>
        <button 
           onClick={onReset}
           className="px-4 py-2 text-sm font-medium rounded-full border border-slate-600 text-slate-400 hover:border-slate-400 bg-transparent transition-all"
        >
          Reset Progress
        </button>
        <button 
           onClick={onOpenGenerator}
           className="px-4 py-2 text-sm font-medium rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/50 transition-all flex items-center gap-2"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
            <path fillRule="evenodd" d="M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813a3.75 3.75 0 002.576-2.576l.813-2.846A.75.75 0 019 4.5zM6 20.25a.75.75 0 01.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75h-.008a.75.75 0 01-.75-.75v-.008a.75.75 0 01-.75-.75h-.008a.75.75 0 01-.75-.75v-.008a.75.75 0 01.75-.75h.008z" clipRule="evenodd" />
          </svg>
          AI Generate
        </button>
      </div>
    </div>
  );
};
