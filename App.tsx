import React, { useState, useEffect, useCallback } from 'react';
import { INITIAL_CARDS } from './data/initialCards';
import { Flashcard, StudyMode } from './types';
import { Card } from './components/Card';
import { Controls } from './components/Controls';
import { GeneratorModal } from './components/GeneratorModal';
import { generateFlashcards } from './services/geminiService';

const App: React.FC = () => {
  // State
  const [cards, setCards] = useState<Flashcard[]>(INITIAL_CARDS);
  const [displayCards, setDisplayCards] = useState<Flashcard[]>(INITIAL_CARDS);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [studyMode, setStudyMode] = useState<StudyMode>(StudyMode.SEQUENTIAL);
  const [isGeneratorOpen, setIsGeneratorOpen] = useState(false);
  
  // Stats
  const [masteredCount, setMasteredCount] = useState(0);
  const [needsWorkCount, setNeedsWorkCount] = useState(0);

  // Initial shuffle check
  useEffect(() => {
    if (studyMode === StudyMode.SHUFFLE) {
      shuffleCards();
    } else {
        // Restore original order
        setDisplayCards([...cards]);
        setCurrentIndex(0);
        setIsFlipped(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [studyMode, cards]);

  const shuffleCards = useCallback(() => {
    const shuffled = [...cards].sort(() => Math.random() - 0.5);
    setDisplayCards(shuffled);
    setCurrentIndex(0);
    setIsFlipped(false);
  }, [cards]);

  const handleNext = () => {
    if (currentIndex < displayCards.length - 1) {
      setIsFlipped(false);
      setTimeout(() => setCurrentIndex(prev => prev + 1), 300);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setIsFlipped(false);
      setTimeout(() => setCurrentIndex(prev => prev - 1), 300);
    }
  };

  const toggleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const handleReset = () => {
    setMasteredCount(0);
    setNeedsWorkCount(0);
    setCurrentIndex(0);
    setIsFlipped(false);
    if (studyMode === StudyMode.SHUFFLE) shuffleCards();
  };

  const handleKnown = () => {
    setMasteredCount(prev => prev + 1);
    if (currentIndex < displayCards.length - 1) {
        handleNext();
    }
  };

  const handleUnknown = () => {
    setNeedsWorkCount(prev => prev + 1);
    // Don't auto advance on unknown, let them flip back to study
    // Optional: could auto-advance depending on UX preference
    if (currentIndex < displayCards.length - 1) {
        handleNext();
    }
  };

  const handleGenerate = async (topic: string) => {
    const newCards = await generateFlashcards(topic, 5);
    // Append new cards to the master list
    const updatedCards = [...cards, ...newCards];
    setCards(updatedCards);
    
    // Switch to viewing the new cards immediately?
    // Let's just reset the display to show everything including new ones
    if (studyMode === StudyMode.SHUFFLE) {
        // If shuffling, re-shuffle all
        const shuffled = [...updatedCards].sort(() => Math.random() - 0.5);
        setDisplayCards(shuffled);
    } else {
        setDisplayCards(updatedCards);
    }
    
    // Jump to the first new card
    setCurrentIndex(cards.length); // Start at the index where new cards begin
    setIsFlipped(false);
  };

  const currentCard = displayCards[currentIndex];

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 flex flex-col">
      {/* Header */}
      <header className="px-6 py-5 border-b border-slate-800 bg-slate-900/50 backdrop-blur-md sticky top-0 z-10">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <div>
            <h1 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
              Capstone Ace
            </h1>
            <p className="text-xs text-slate-400">Grade 12 STEM Reviewer</p>
          </div>
          <div className="flex gap-4 text-xs font-semibold">
             <div className="flex flex-col items-center">
                <span className="text-emerald-400">{masteredCount}</span>
                <span className="text-slate-500 uppercase">Mastered</span>
             </div>
             <div className="flex flex-col items-center">
                <span className="text-rose-400">{needsWorkCount}</span>
                <span className="text-slate-500 uppercase">Review</span>
             </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center p-6 w-full max-w-4xl mx-auto">
        <div className="w-full max-w-2xl">
          {displayCards.length > 0 ? (
            <Card 
              card={currentCard} 
              isFlipped={isFlipped} 
              onFlip={toggleFlip} 
            />
          ) : (
             <div className="text-center p-10">Loading cards...</div>
          )}

          <Controls 
             onNext={handleNext}
             onPrev={handlePrev}
             onShuffle={() => setStudyMode(prev => prev === StudyMode.SEQUENTIAL ? StudyMode.SHUFFLE : StudyMode.SEQUENTIAL)}
             onReset={handleReset}
             onOpenGenerator={() => setIsGeneratorOpen(true)}
             studyMode={studyMode}
             currentIndex={currentIndex}
             total={displayCards.length}
             isFlipped={isFlipped}
             handleKnown={handleKnown}
             handleUnknown={handleUnknown}
          />
        </div>
      </main>
      
      <GeneratorModal 
        isOpen={isGeneratorOpen}
        onClose={() => setIsGeneratorOpen(false)}
        onGenerate={handleGenerate}
      />
    </div>
  );
};

export default App;
