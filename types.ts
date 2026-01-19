export interface Flashcard {
  id: string;
  question: string;
  answer: string;
  category: string; // e.g., "Methodology", "Stats", "Writing"
  difficulty?: 'easy' | 'medium' | 'hard';
}

export enum StudyMode {
  SEQUENTIAL = 'SEQUENTIAL',
  SHUFFLE = 'SHUFFLE',
}

export interface GeneratorConfig {
  topic: string;
  count: number;
}
