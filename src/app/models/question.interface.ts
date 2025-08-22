export interface Question {
  mode: 'english-to-romaji' | 'kana-to-english';
  questionText: string;
  expectedAnswer: string;
}
