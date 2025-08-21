import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';
import {
  Gloss,
  JMDictData,
  JMDictEntry,
  KanaDetails,
  KanaForm,
  Sense,
  VocabularyExample,
} from '../models';
import * as wanakana from 'wanakana';

@Injectable({ providedIn: 'root' })
export class KanaService {
  private dict$ = new BehaviorSubject<JMDictData | null>(null);

  constructor(private http: HttpClient) {
    this.loadDictionary();
  }

  private loadDictionary() {
    this.http.get<JMDictData>('/assets/jmdict.json').subscribe(
      (data) => this.dict$.next(data),
      (error) => console.error('Failed to load JMDict', error)
    );
  }

  fetchKanaDetails(kana: string): Observable<KanaDetails | { error: string }> {
    return this.dict$.pipe(
      map((dict: JMDictData | null) => {
        if (!dict || !dict.words) {
          return { error: 'Dictionary not loaded' };
        }

        const matchingEntries = dict.words
          .filter((entry: JMDictEntry) =>
            entry.kana.some((k: KanaForm) => k.text.startsWith(kana))
          )
          .slice(0, 5); // Limit to 5 examples

        if (matchingEntries.length > 0) {
          const vocabularyExamples: VocabularyExample[] = matchingEntries.map(
            (entry: JMDictEntry) => {
              const japanese = entry.kana[0]?.text || 'N/A';
              return {
                japanese,
                romaji: wanakana.toRomaji(japanese),
                english:
                  entry.sense
                    .map((s: Sense) =>
                      s.gloss.map((g: Gloss) => g.text).join(', ')
                    )
                    .join('; ') || 'N/A',
              };
            }
          );

          const jlpt = matchingEntries
            .flatMap((entry: JMDictEntry) =>
              entry.sense.flatMap((s: Sense) => s.jlpt)
            )
            .filter(Boolean); // Combined JLPT from all matches

          return {
            jlpt,
            vocabularyExamples,
          };
        }
        return { error: 'No details found' };
      })
    );
  }
}
