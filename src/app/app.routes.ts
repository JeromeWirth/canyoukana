import { Routes } from '@angular/router';
import { Lesson } from './features/lessons/lesson/lesson';
import { Hiragana } from './features/kana/hiragana/hiragana';
import { Practice } from './features/practice/practice/practice';

export const routes: Routes = [
  { path: '', redirectTo: 'lessons', pathMatch: 'full' },

  {
    path: 'lessons',
    component: Lesson,
  },

  {
    path: 'lessons/:id',
    component: Lesson,
  },

  {
    path: 'kana',
    component: Hiragana,
  },

  {
    path: 'practice',
    component: Practice,
  },

  { path: '**', redirectTo: 'lessons' }, // Wildcard for 404 handling
];
