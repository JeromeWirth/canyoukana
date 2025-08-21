import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterModule } from '@angular/router';
import { LessonStore } from '../../../state/lesson.state';

@Component({
  selector: 'app-lesson-sidenav',
  imports: [CommonModule, MatSidenavModule, MatListModule, RouterModule],
  templateUrl: './lesson-sidenav.html',
  styleUrl: './lesson-sidenav.scss',
})
export class LessonSidenav {
  public readonly store = inject(LessonStore);

  constructor() {
    this.store.loadLessonList();
  }
}
