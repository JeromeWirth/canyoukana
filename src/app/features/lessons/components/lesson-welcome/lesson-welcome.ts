import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-lesson-welcome',
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    RouterModule,
  ],
  templateUrl: './lesson-welcome.html',
  styleUrl: './lesson-welcome.scss',
})
export class LessonWelcome {
  features = [
    {
      icon: 'school',
      title: 'Structured Learning',
      description:
        'Progress through carefully designed lessons at your own pace',
    },
    {
      icon: 'edit',
      title: 'Writing Practice',
      description: 'Learn proper stroke order and writing techniques',
    },
    {
      icon: 'record_voice_over',
      title: 'Pronunciation Guide',
      description: 'Master the sounds of Japanese with audio examples',
    },
  ];
}
