import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { lastValueFrom, Observable } from 'rxjs';
import { Lesson, LessonSummary } from '../models';

@Injectable({ providedIn: 'root' })
export class LessonService {
  private basePath = '/assets/lessons';
  private http = inject(HttpClient);

  /**
   * Fetches the list of available lessons from an index JSON file.
   *  Assumes there's an 'index.json' file in src/assets/lessons/ that contains
   *   an array of lesson summaries with id, title, and lesson_completed (default to false if progress not stored here).
   *  Example index.json content:
   *  [
   *  { "id": "1", "title": "Lesson 1: Basics", "lesson_completed": false },
   * { "id": "2", "title": "Lesson 2: Vocabulary", "lesson_completed": false }
   * ]
   */
  getLessonList(): Observable<LessonSummary[]> {
    return this.http.get<LessonSummary[]>(this.basePath + '/index.json');
  }

  getLessonListAsPromise(): Promise<LessonSummary[]> {
    return lastValueFrom(
      this.http.get<LessonSummary[]>(this.basePath + '/index.json')
    );
  }

  /**
   * Fetches the full lesson data by ID from its corresponding JSON file.
   * Assumes each lesson is stored in a separate file like '1.json', '2.json', etc.,
   * in src/assets/lessons/.
   */
  getLessonById(id: string): Observable<Lesson> {
    return this.http.get<Lesson>(this.basePath + id + '.json');
  }

  getLessonByIdAsPromise(id: string): Promise<Lesson> {
    return lastValueFrom(
      this.http.get<Lesson>(this.basePath + '/' + id + '.json')
    );
  }
}
