import {
  patchState,
  signalStore,
  withComputed,
  withMethods,
  withState,
} from '@ngrx/signals';
import { Lesson, LessonSummary } from '../models';
import { computed, inject } from '@angular/core';
import { LessonService } from '../services/lesson.service';

export const LessonStore = signalStore(
  { providedIn: 'root' },

  withState({
    lessons: [] as LessonSummary[],
    currentLesson: undefined as Lesson | undefined,
  }),

  withMethods((store) => {
    const lessonService = inject(LessonService);

    return {
      async loadLessonList() {
        const lessonListResult = await lessonService.getLessonListAsPromise();
        patchState(store, { lessons: lessonListResult });
      },

      async loadLesson(id: string) {
        const lessonResult = await lessonService.getLessonByIdAsPromise(id);
        patchState(store, { currentLesson: lessonResult });
      },
    };
  }),

  withComputed(({ lessons }) => ({
    countLessons: computed(() => lessons().length),
  })),

  withComputed(({ currentLesson }) => ({
    isCurrentLessonLoaded: computed(() => !!currentLesson()),
    currentLessonId: computed(() => currentLesson()?.id || ''),
    currentLessonTitle: computed(() => currentLesson()?.title || ''),
  }))
);
