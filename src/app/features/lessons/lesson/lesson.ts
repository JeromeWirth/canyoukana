import { Component } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { LessonSidenav } from '../lesson-sidenav/lesson-sidenav';

@Component({
  selector: 'app-lesson',
  imports: [MatSidenavModule, LessonSidenav],
  templateUrl: './lesson.html',
  styleUrl: './lesson.scss',
})
export class Lesson {}
