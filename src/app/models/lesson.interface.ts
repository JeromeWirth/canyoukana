export interface Lesson {
  id: number;
  title: string;
  description: string;
  objectives: string[];
  lesson_completed: boolean;
  content: Section[];
}

export interface Section {
  id: string;
  section_title: string;
  section_description: string;
  section_completed: boolean;
  examples: Example[];
  info?: Info; // Optional, as it appears only in some sections
}

export interface Example {
  romaji: string;
  kana: string;
  kanji: string;
  english: string;
}

export interface Info {
  info_text: string;
  examples: Example[];
}

export interface LessonSummary {
  id: string;
  title: string;
  lesson_completed: boolean;
}
