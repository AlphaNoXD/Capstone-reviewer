import React from 'react';
import { Flashcard } from '../types';

interface CardProps {
  card: Flashcard;
  isFlipped: boolean;
  onFlip: () => void;
}

export const Card: React.FC<CardProps> = ({ card, isFlipped, onFlip }) => {
  return (
    <div 
      className="relative w-full h-[400px] sm:h-[450px] cursor-pointer group perspective-1000"
      onClick={onFlip}
    >
      <div 
        className={`w-full h-full transition-all duration-500 transform-style-3d relative shadow-xl rounded-2xl ${isFlipped ? 'rotate-y-180' : ''}`}
      >
        {/* FRONT */}
        <div className="absolute w-full h-full backface-hidden bg-white text-slate-800 rounded-2xl p-8 flex flex-col items-center justify-center border-2 border-indigo-100 shadow-sm">
          <div className="absolute top-6 left-6">
            <span className="px-3 py-1 bg-indigo-100 text-indigo-700 text-xs font-bold uppercase tracking-wider rounded-full">
              {card.category}
            </span>
          </div>
          <div className="absolute top-6 right-6 text-slate-400">
             <span className="text-xs font-semibold uppercase tracking-widest">Question</span>
          </div>
          
          <h2 className="text-xl sm:text-2xl font-medium text-center leading-relaxed">
            {card.question}
          </h2>
          
          <div className="absolute bottom-6 w-full text-center text-slate-400 text-sm animate-pulse">
            Tap to flip
          </div>
        </div>

        {/* BACK */}
        <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-indigo-600 text-white rounded-2xl p-8 flex flex-col items-center justify-center shadow-sm">
          <div className="absolute top-6 left-6">
            <span className="px-3 py-1 bg-indigo-500 text-indigo-100 text-xs font-bold uppercase tracking-wider rounded-full">
              Answer
            </span>
          </div>
          
          <p className="text-xl sm:text-2xl font-semibold text-center leading-relaxed">
            {card.answer}
          </p>
        </div>
      </div>
    </div>
  );
};
