import React, { useState } from 'react';

interface GeneratorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onGenerate: (topic: string) => Promise<void>;
}

export const GeneratorModal: React.FC<GeneratorModalProps> = ({ isOpen, onClose, onGenerate }) => {
  const [topic, setTopic] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!topic.trim()) return;

    setIsLoading(true);
    setError(null);
    try {
      await onGenerate(topic);
      setTopic('');
      onClose();
    } catch (err) {
        // Safe check for error object
        const errorMessage = err instanceof Error ? err.message : "Failed to generate content";
        setError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
      <div className="bg-slate-900 border border-slate-700 rounded-2xl w-full max-w-md p-6 shadow-2xl transform transition-all scale-100">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-bold text-white flex items-center gap-2">
             <span className="text-indigo-400">✦</span> Generate Study Cards
          </h3>
          <button onClick={onClose} className="text-slate-400 hover:text-white">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label className="block text-slate-300 text-sm font-medium mb-2">
              What specific topic do you want to review?
            </label>
            <input 
              type="text" 
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              placeholder="e.g., ANOVA details, Sampling Methods, Qualitative Coding"
              className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all placeholder:text-slate-500"
              autoFocus
            />
            <p className="text-xs text-slate-500 mt-2">
              We'll generate 5 precise questions for this topic.
            </p>
          </div>

          {error && (
            <div className="mb-4 p-3 bg-rose-500/10 border border-rose-500/50 rounded-lg text-rose-300 text-sm">
              {error}
            </div>
          )}

          <div className="flex gap-3">
             <button 
              type="button" 
              onClick={onClose}
              className="flex-1 px-4 py-2 rounded-lg border border-slate-600 text-slate-300 hover:bg-slate-800 transition-colors"
            >
              Cancel
            </button>
            <button 
              type="submit" 
              disabled={isLoading || !topic.trim()}
              className="flex-1 px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-medium disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-2"
            >
              {isLoading ? (
                <>
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Generating...
                </>
              ) : (
                'Create Cards'
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
