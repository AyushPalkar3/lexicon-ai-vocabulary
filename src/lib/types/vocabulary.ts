export type Difficulty = "beginner" | "intermediate" | "advanced";

export type WordItem = {
  id: string;
  word: string;
  meaning: string;
  exampleSentence: string;
  partOfSpeech: string;
  difficulty: Difficulty;
  synonyms: string[];
  createdAt: string;
};

export type PhraseItem = {
  id: string;
  phrase: string;
  meaning: string;
  exampleSentence: string;
  phraseType: string;
  difficulty: Difficulty;
  similarPhrases: string[];
  createdAt: string;
};
