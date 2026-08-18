/**
 * Describes the JSON shape ChatGPT should return when the input is
 * classified as a WORD. Reused by analyzePrompt.ts. Kept in its own file
 * per project spec #38 so word-specific AI behavior can be tuned
 * independently of phrase behavior.
 */
export const WORD_SHAPE_DESCRIPTION = `{
  "type": "word",
  "word": string,                 // the word itself, lowercase unless a proper noun
  "meaning": string,               // one clear, simple definition a learner can understand
  "exampleSentence": string,       // one natural sentence that uses the word correctly
  "partOfSpeech": string,          // e.g. "noun", "verb", "adjective", "adverb"
  "difficulty": "beginner" | "intermediate" | "advanced",
  "synonyms": string[]             // 2-4 close synonyms; [] if genuinely none fit
}`;

export const WORD_EXAMPLE = `{
  "type": "word",
  "word": "meticulous",
  "meaning": "Very careful and precise about details.",
  "exampleSentence": "She is meticulous when checking her work.",
  "partOfSpeech": "adjective",
  "difficulty": "intermediate",
  "synonyms": ["careful", "precise", "thorough"]
}`;
