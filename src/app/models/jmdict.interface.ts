export interface KanjiForm {
  text: string;
  common: boolean;
  tags: string[];
}

export interface KanaForm {
  text: string;
  common: boolean;
  tags: string[];
  appliesToKanji: string[];
}

export interface KanaDetails {
  jlpt: string[]; // Optional, if useful
  vocabularyExamples: VocabularyExample[]; // Array of examples
}

export interface VocabularyExample {
  japanese: string; // Hiragana/kana form
  romaji: string; // romaji
  english: string; // Joined meanings
}

export interface Gloss {
  text: string;
  lang: string;
}

export interface Sense {
  gloss: Gloss[];
  pos: string[];
  field: string[];
  misc: string[];
  info: string[];
  dial: string[];
  restrict: string[];
  related: any[]; // Can be typed further if needed
  jlpt: string[]; // e.g., ['jlpt-n5']
}

export interface JMDictEntry {
  id: number;
  kanji: KanjiForm[];
  kana: KanaForm[];
  sense: Sense[];
}

export interface JMDictData {
  words: JMDictEntry[];
  // Add other metadata if present, e.g., version: string;
}
