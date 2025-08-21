import { Component, inject } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { LessonSidenav } from '../components/lesson-sidenav/lesson-sidenav';
import { LessonStore } from '../../../state/lesson.state';
import { LessonWelcome } from '../components/lesson-welcome/lesson-welcome';
import { LessonDetail } from '../components/lesson-detail/lesson-detail';

@Component({
  selector: 'app-lesson',
  imports: [MatSidenavModule, LessonSidenav, LessonWelcome, LessonDetail],
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
