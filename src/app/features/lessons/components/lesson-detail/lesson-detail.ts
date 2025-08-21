import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Lesson } from '../../../../models';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { RouterModule } from '@angular/router';
import { LessonSection } from '../lesson-section/lesson-section';

@Component({
  selector: 'app-lesson-detail',
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatProgressBarModule,
    RouterModule,
    LessonSection,
  ],
  templateUrl: './lesson-detail.html',
  styleUrl: './lesson-detail.scss',
})
export class LessonDetail {
  @Input({ required: true }) lesson!: Lesson;
  @Output() lessonCompleted = new EventEmitter<void>();

  completedSections = new Set<string>();

  isLessonCompleted(): boolean {
    return this.completedSections.size === this.lesson.content.length;
  }
}
