import { Component, inject } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { LessonSidenav } from '../lesson-sidenav/lesson-sidenav';
import { LessonStore } from '../../../state/lesson.state';

@Component({
  selector: 'app-lesson',
  imports: [MatSidenavModule, LessonSidenav],
  templateUrl: './lesson.html',
  styleUrl: './lesson.scss',
})
export class Lesson {
  public readonly store = inject(LessonStore);

  toggleLessonCompleted() {
    console.log('Toggle lesson completed status');
  }

  toggleSectionCompleted(section_section_title: any) {
    console.log('Toggle section completed status for:', section_section_title);
  }
}
