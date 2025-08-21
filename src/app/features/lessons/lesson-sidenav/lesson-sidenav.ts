import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-lesson-sidenav',
  imports: [CommonModule, MatSidenavModule, MatListModule, RouterModule],
  templateUrl: './lesson-sidenav.html',
  styleUrl: './lesson-sidenav.scss',
})
export class LessonSidenav {
  lessons = [
    { id: 1, title: 'Introduction to Hiragana', difficulty: 'Beginner' },
    { id: 2, title: 'Basic Greetings', difficulty: 'Beginner' },
    { id: 3, title: 'Numbers 1-10', difficulty: 'Beginner' },
    { id: 4, title: 'Days of the Week', difficulty: 'Intermediate' },
    { id: 5, title: 'Basic Particles は and が', difficulty: 'Intermediate' },
  ];
}
